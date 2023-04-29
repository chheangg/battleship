/* eslint-disable no-plusplus */
/* eslint-disable prefer-arrow-callback */
import 'normalize.css';
import '../style/style.scss';
import { Ships } from './objects/ship';
import { Player } from './objects/player';
import {
  loadShip, boardLoad, loadPage,
} from './pageLoad';
import { loadIcon } from './imageLoader';
import Game, { swapTurn } from './objects/game';

const shipOrders = Object.values(Ships).sort((last, next) => last.order < next.order);

// Refactor into the game object
let gameObject;
let playerX;
let playerY;
let board;
let currentPreview;

// Show the right ship, position and axis on ship-placing stage.
// Will check axis, the cord given and ship type to make it possible.
function shipPreviewExpander(cord) {
  const dirArr = document.getElementsByClassName('dir-option');
  // I suppose this reads the text value...
  const axis = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  // Figure out the ship type through current preview
  const { name, length } = Ships[shipOrders[currentPreview.length].name];
  // Take the coord and use it to build the body;
  const start = [...cord];
  const body = Array(length)
    .fill()
    .map(() => {
      if (axis === 'horizontal') {
        return [start[0], start[1]++];
      }
      return [start[0]++, start[1]];
    });
  // Check overlap???
  const overlap = body
    .some((part) => currentPreview
      .some((ship) => ship.position
        .some((pos) => pos[0] === part[0] && pos[1] === part[1])));
  return {
    body,
    type: name,
    overlap,
  };
}

function shipPreview(cord, type, target) {
  let registered = false;
  board.forEach((box) => {
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
function shipPlaceAnimation(start) {
  const ship = shipPreviewExpander(start.currentTarget.dataset.pos
    .split(',')
    .map((x) => parseInt(x, 10)));
  if (ship.overlap === true) {
    return;
  }
  shipPreview(ship.body, ship.type, start.target);
}

// Function for adding animation
function addAnimationEvent(add, type, side) {
  if (add === false) {
    [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
      box.removeEventListener(type, shipPlaceAnimation);
    });
  }
  if (add === true) {
    [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
      box.addEventListener(type, shipPlaceAnimation);
    });
  }
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

// Decide which players get to place ships, and what sort of ships
function initializeEvent(playerOne, playerTwo, cord, side) {
  const bot = Player.list.filter((x) => x.isBot)[0];
  if (bot) {
    while (bot.board.list.length < 5) {
      const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      initializeShip(bot, Ships[bot.board.list.length], rand);
    }
  }

  if (playerOne.board.list.length < 5 && side === 'left') {
    initializeShip(playerOne, Ships[playerOne.board.list.length], cord);
  }

  if (playerOne.board.list.length === 5) {
    currentPreview = playerTwo.board.list;
    board = [...document.getElementsByClassName('right-content')[0].getElementsByClassName('box')];
    addAnimationEvent(false, 'mouseover', 'left');
    addAnimationEvent(true, 'mouseover', 'right');
  }

  if (playerOne.board.list.length === 5 && playerTwo.board.list.length < 5 && side === 'right') {
    initializeShip(playerTwo, Ships[playerTwo.board.list.length], cord);
  }

  if (playerOne.board.list.length === 5 && playerTwo.board.list.length === 5) {
    addAnimationEvent(false, 'mouseover', 'right');
    addInitializer(false);
    loadShip(playerOne, 'left');
    loadShip(playerTwo, 'right');
    boardLoad.assignBox();
  }
}

// Function that retrieve the coordinate for placing ships
function initializeStage(unit) {
  const cord = unit.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  initializeEvent(playerX, playerY, cord, unit.target.dataset.side);
  loadShip(playerX, 'left');
  loadShip(playerY, 'right');
}

// Select all cells and detect if a ship is placed.
function addInitializer(add) {
  [...document.getElementsByClassName('box')].forEach((box) => {
    // eslint-disable-next-line no-unused-expressions
    add ? box.addEventListener('click', initializeStage) : box.removeEventListener('click', initializeStage);
  });
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
  const newGameObject = Game(gameMode);
  loadPage();

  currentPreview = newGameObject.playerOne.board.list;
  board = newGameObject.currentBoard();

  addAnimationEvent(true, 'mouseover', 'left');
  addInitializer(true);

  return gameObject;
}

// Loop that will be called on every cell click or startup
// This will moves the game forward and does all the necessary calculations
function mainLoop(gameMode, isInitialized) {
  if (isInitialized) {
    gameObject = initializeObjects(gameMode);
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
