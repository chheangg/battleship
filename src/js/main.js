/* eslint-disable no-plusplus */
/* eslint-disable prefer-arrow-callback */
import 'normalize.css';
import '../style/style.scss';
import _ from 'underscore';
import { loadIcon } from './imageLoader';
import Game, { swapTurn } from './objects/game';
import {
  loadBoard, unloadBoard, loadPage, shipOrders,
} from './pageLoad';
import { gameUtilities } from './app';

// Game Ojbect that contains the state information to be exposed
let gameObject;

function removeAllEventListener(element) {
  const oldElement = element;
  const newElement = element.cloneNode(true);
  oldElement.parentNode.replaceChild(newElement, oldElement);
}
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

  // Check if there's any overlap
  const overlap = player
    .board
    .list
    .some((playerShip) => playerShip
      .position.some((shipPos) => body
        .some((bodyPos) => _.isEqual(bodyPos, shipPos))));
  return {
    body,
    overlap,
  };
}

// const dirOptions = document.getElementsByClassName('dir-option');
// const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
// const img = loadIcon(type, cord.indexOf(coordinate) + 1, axisOption);
// box.style.backgroundImage = `url('${img}')`;

// Responsible for animating preview
function shipPreview(cord, boardBoxes, player, ship, event) {
  // Get axis information of ship
  const dirOptions = document.getElementsByClassName('dir-option');
  const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
  cord.forEach((pos, index) => {
    const box = [...boardBoxes][pos[0] * 10 + pos[1]];
    const img = loadIcon(ship.name, index + 1, axisOption);
    box.style.backgroundImage = `url('${img}')`;
    const eventListener = () => {
      box.style.backgroundImage = '';
    };
    event.target.addEventListener('mouseout', eventListener);
    // Remove all event listener once a cell is clicked
    event.target.addEventListener('click', () => {
      boardBoxes.forEach((cell) => {
        removeAllEventListener(cell);
      });
      loadBoard(player, player.isTurn ? 'left' : 'right');
    });
  });
}

// Function for animating ship preview everything it hovers onto a box or out of it
function animationEvent(event, boardBoxes, player, ship) {
  const shipPreviewObject = shipPreviewExpander(
    event.currentTarget.dataset.pos
      .split(',')
      .map((x) => parseInt(x, 10)),
    player,
    ship,
  );

  if (shipPreviewObject.overlap) {
    return;
  }

  shipPreview(shipPreviewObject.body, boardBoxes, player, ship, event);
}

// Function for adding animation
function addAnimationEvent(add, boardBoxes, player, ship) {
  const eventListener = (event) => {
    animationEvent(event, boardBoxes, player, ship);
  };
  if (add) {
    boardBoxes.forEach((box) => {
      box.addEventListener('mouseover', eventListener);
    });
  } else {
    boardBoxes.forEach((box) => {
      box.removeEventListener('mouseover', eventListener);
    });
  }
}

// Ship logical placement function onto the player's board
function initializeShip(player, ship, cord) {
  const dir = document.querySelector('.dir-option:checked').value;
  player.board.place(ship, dir, cord);
}

// Placement Event
function placementEvent(event, player, cb) {
  const playerShips = player.board.list;
  const cord = event.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  initializeShip(player, shipOrders[playerShips.length], cord);
  cb();
}

// Add placement event to all cell
function addPlacementEvent(add, boardBoxes, player, cb) {
  // set a time out so that animation event executes first
  // to remove all animation, within the call stack;
  const eventListener = (event) => {
    setTimeout(() => placementEvent(event, player, cb), 0);
  };
  boardBoxes.forEach((box) => {
    // eslint-disable-next-line no-unused-expressions
    if (!add) {
      box.removeEventListener('click', eventListener);
    } else {
      box.addEventListener('click', eventListener);
    }
  });
}

// If true, populate cell with placement event and animation event on the correct board.
function populateCellWithEvents(add, player, cb) {
  const playerShips = player.board.list;
  const boardBoxes = [...document
    .querySelector(`.${player.isTurn ? 'left' : 'right'}-content`)
    .getElementsByClassName('box')];
  addPlacementEvent(add, boardBoxes, player, cb);
  addAnimationEvent(add, boardBoxes, player, shipOrders[playerShips.length]);
}

// Enter into placement mode, will do two rounds to ensure everything is set up.
// + Accepts player, and main callback as argument and
//
// Will:
// Placement mode will populate the board with events for animation and placing ships
function placementMode(player, cb) {
  // pass callback to placement Event
  populateCellWithEvents(true, player, cb);
}

function exitPlacementMode(player, cb) {
  // pass callback to placement Event
  populateCellWithEvents(false, player, cb);
}

// Load the page, and initialize Game object to be return
// to be used by other stages in the game
function initializeObjects(gameMode) {
  loadPage();
  return Game(gameMode);
}

// Attack mode
// Accepts game object and check whose turn should be able to attack
// 1. Load board for current player
// 2. Populate the correct board to be able to attack with attack event listener
// eslint-disable-next-line no-shadow
function attackMode(gameObjectState, cb) {
  console.log()
  const currentSide = gameObjectState.playerOne.isTurn ? 'left' : 'right';
  const oppositeSide = currentSide === 'left' ? 'right' : 'left';
  const currentPlayer = gameObjectState.playerOne.isTurn
    ? gameObjectState.playerOne : gameObjectState.playerTwo;
  const oppositePlayer = gameObjectState.playerOne.isTurn
    ? gameObjectState.playerTwo : gameObjectState.playerOne;

  unloadBoard(oppositeSide);
  loadBoard(currentPlayer, currentSide);

  const oppositeBoxes = [...document
    .querySelector(`.${oppositeSide}-content`)
    .getElementsByClassName('box')];
  oppositeBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      const cord = box.dataset.pos.split(',').map((x) => parseInt(x, 10));
      gameUtilities.attack(cord, oppositeSide, currentPlayer, oppositePlayer);
      oppositeBoxes.forEach((oppositeBox) => removeAllEventListener(oppositeBox));
      cb();
    });
  });
}

// Loop that will be called on every cell click or startup
// This will moves the game forward and does all the necessary calculations
// First, check if gameObject is initialized. If not, initialize gameObject and page
// Second, check if game has started, if not, goes into placement mode;
// Third, if placement is done, all cells goes into play mode!
function mainLoop(gameMode, isInitialized) {
  if (isInitialized) {
    gameObject = initializeObjects(gameMode);
  }

  const maxShips = 5;

  const numOfShipsPlayerOne = gameObject.playerOne.board.list.length;
  const numOfShipsPlayerTwo = gameObject.playerTwo.board.list.length;

  // If object is initialized, will goes into the placement mode for first player
  // placement mode ends when max ships is reached
  if (numOfShipsPlayerOne !== maxShips) {
    placementMode(gameObject.playerOne, mainLoop);
  }

  // Second placement mode for second player
  if (numOfShipsPlayerTwo !== maxShips && numOfShipsPlayerOne === maxShips) {
    // Depopulate left board events
    unloadBoard('left');
    exitPlacementMode(gameObject.playerOne, mainLoop);
    placementMode(gameObject.playerTwo, mainLoop);
  }

  const placementFinished = (gameObject.playerOne.board.list.length === maxShips)
  && (gameObject.playerTwo.board.list.length === maxShips);

  if (placementFinished && !gameObject.isStarted) {
    gameObject.isStarted = true;
    // Depopulate right board events
    unloadBoard('right');
    exitPlacementMode(gameObject.playerTwo, mainLoop);
    gameObject.isStarted = true;
  }

  if (gameObject.isStarted) {
    attackMode(gameObject, mainLoop);
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
