/* eslint-disable no-plusplus */
/* eslint-disable prefer-arrow-callback */
import 'normalize.css';
import '../style/style.scss';
import { Ships } from './objects/ship';
import {
  loadPage,
} from './pageLoad';
import { loadIcon } from './imageLoader';
import Game, { swapTurn } from './objects/game';

const shipOrders = Object.values(Ships).sort((last, next) => last.order < next.order);

// Refactor into the game object
let gameObject;

// Show the right ship, position and axis on ship-placing stage.
// Will check axis, the cord given and ship type to make it possible.
function shipPreviewExpander(cord, player, ship) {
  const dirArr = document.getElementsByClassName('dir-option');
  // I suppose this reads the text value...
  const axis = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  // Take the coord and use it to build the body;
  const start = [...cord];
  const body = Array(ship.length)
    .fill()
    .map(() => {
      if (axis === 'horizontal') {
        return [start[0], start[1]++];
      }
      return [start[0]++, start[1]];
    });
  // Check overlap???
  const overlap = body
    .some((part) => player.board.list
      .some((playerShip) => playerShip.position
        .some((pos) => pos[0] === part[0] && pos[1] === part[1])));
  return {
    body,
    overlap,
  };
}

function shipPreview(cord, boardSide, type, target) {
  let registered = false;
  const boardBoxes = [...document
    .querySelector(`.${boardSide}-content`)
    .getElementsByClassName('box')];
  boardBoxes.forEach((box) => {
    cord.forEach((coordinate) => {
      if (box.dataset.pos === coordinate.join()) {
        const dirOptions = document.getElementsByClassName('dir-option');
        const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
        const img = loadIcon(type, cord.indexOf(coordinate) + 1, axisOption);
        box.style.backgroundImage = `url('${img}')`;

        target.addEventListener('mouseout', () => {
          if (registered === false) {
            box.style.backgroundImage = '';
          }
        }, { once: true });
        box.addEventListener('click', () => {
          registered = true;
        });
      }
    });
  });
}

// Function for animation
function shipPlaceAnimation(event, boardSide, player, ship) {
  const shipPreviewObject = shipPreviewExpander(
    event.currentTarget.dataset.pos
      .split(',')
      .map((x) => parseInt(x, 10)),
    player,
    ship,
  );
  if (ship.overlap === true) {
    return;
  }
  shipPreview(shipPreviewObject.body, boardSide, ship.name, event.target);
}

// Function for adding animation
function addAnimationEvent(add, boardSide, player, ship) {
  const eventListener = (event) => {
    shipPlaceAnimation(event, boardSide, player, ship);
  };
  const boardBoxes = [...document
    .querySelector(`.${boardSide}-content`)
    .getElementsByClassName('box')];

  if (!add) {
    boardBoxes.forEach((box) => {
      box.removeEventListener('mouseover', eventListener);
    });
  }
  boardBoxes.forEach((box) => {
    box.addEventListener('mouseover', eventListener);
  });
}

// Ship placement function
function initializeShip(player, ship, cord) {
  let dirArr;
  let dir;
  if (!player.isBot) {
    dirArr = document.getElementsByClassName('dir-option');
    dir = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  }
  if (player.isBot) {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
      dir = 'horizontal';
    }
    if (rand === 1) {
      dir = 'vertical';
    }
  }
  player.board.place(ship, dir, cord);
}

// Function that retrieve the coordinate for placing ships
function placementEvent(event, player, cb) {
  const playerShips = player.board.list;
  const cord = event.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  initializeShip(player, shipOrders[playerShips.length], cord);
  cb();
}

// Select all cell and add placement event to them if add is true, else remove it.
function populateCellWithPlacementEvent(add, player, cb) {
  const playerShips = player.board.list;
  const eventListener = (event) => {
    placementEvent(event, player, cb);
  };
  [...document.getElementsByClassName('box')].forEach((box) => {
    // eslint-disable-next-line no-unused-expressions
    add ? box.addEventListener('click', eventListener) : box.removeEventListener('click', eventListener);
  });
  console.log(shipOrders[playerShips.length]);
  addAnimationEvent(add, player.isTurn ? 'left' : 'right', player, shipOrders[playerShips.length]);
}

// Enter into placement mode, will do two rounds to ensure everything is set up.
// Accepts gameObject, and main callback as argument and
// feed the animation event the side of the board it should populate.
// Main callback is use for necessary condition checking to see if
// board is populated and which side needs population
function placementMode(player, cb) {
  const maxShips = 5;
  // pass callback to placement Event
  populateCellWithPlacementEvent(true, player, cb);

  const placementFinished = (gameObject.playerOne.board.list.length === maxShips)
    && (gameObject.playerTwo.board.list.length === maxShips);

  if (placementFinished) {
    gameObject.isStarted = true;
    populateCellWithPlacementEvent(false);
    // Add populate cell to start the main loop
  }
}

// Load:
// 1. The main game page
// 2. The option for choosing axis

/// Old
// 3. The first ship to be placed
// 4. Select the first player board (left)
// 5. Add animation to the board
// 6. Add ship initializer

// New
// 3. Initialize Game Object with necessary information
// 4. Return Game Object for further uses

// Load the page, and initialize Game object to be return
// to be used by other stages in the game
function initializeObjects(gameMode) {
  loadPage();
  return Game(gameMode);
}

// Loop that will be called on every cell click or startup
// This will moves the game forward and does all the necessary calculations
// First, check if gameObject is initialized. If not, initialize gameObject and page
// Second, check if game has started, if not, goes into placement mode;
// Third, if placement is done, populate cells with eventListener for their attack!
function mainLoop(gameMode, isInitialized) {
  if (isInitialized) {
    gameObject = initializeObjects(gameMode);
  }

  const numOfShipsPlayerOne = gameObject.playerOne.board.list;
  const numOfShipsPlayerTwo = gameObject.playerTwo.board.list;

  if (numOfShipsPlayerOne !== 5) {
    placementMode(gameObject.playerOne, mainLoop);
  }

  if (numOfShipsPlayerTwo !== 5) {
    placementMode(gameObject.playerTwo, mainLoop);
  }
}

// Starting page
const singlePlayerBtn = document.querySelector('.single-player');
const multiPlayerbtn = document.querySelector('.multi-player');

// Create a bot and a player
singlePlayerBtn.addEventListener('click', () => {
  mainLoop('singleplayer', true);
});

// Create two players logic
multiPlayerbtn.addEventListener('click', () => {
  mainLoop('multiplayer', true);
});
