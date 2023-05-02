/* eslint-disable no-import-assign */
/* eslint-disable prefer-arrow-callback */
import 'normalize.css';
import '../style/style.scss';
import {
  unloadBoard, loadPage, shipOrders,
} from './pageLoad';
import { singleplayerInit, multiplayerInit } from './objects/player';

import addAnimationEvent from './utilities/animation';
import addPlacementEvent from './utilities/placementEvent';
import attackMode from './utilities/attack';

// Game Object that contains the state information to be exposed
import Game from './objects/game';

const gameObject = {};

// If true, populate cell with placement event and animation event on the correct board.
function populateCellWithEvents(add, player, cb) {
  const playerShips = player.board.list;
  const boardBoxes = [...document
    .querySelector(`.${player.isTurn ? 'left' : 'right'}-content`)
    .getElementsByClassName('box')];
  addPlacementEvent(add, gameObject, boardBoxes, player, cb);
  addAnimationEvent(add, boardBoxes, player, shipOrders[playerShips.length]);
}

// Enter into placement mode, will do two rounds to ensure everything is set up.
// Accepts player for ship initialization, and main cb for game progression
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
function initializeObjects(isMultiplayer, init) {
  loadPage();
  const { playerOne, playerTwo } = init();
  return Game(isMultiplayer, playerOne, playerTwo);
}

// Loop that will be called on every cell click or startup
// This will moves the game forward and does all the necessary calculations
// First, check if gameObject is initialized. If not, initialize gameObject and page.
// Game object must come from GameState global object.
// Second, check if game has started, if not, goes into placement mode;
// Third, if placement is done, all cells goes into play mode!
function mainLoop(isMultiplayer, isInitialized) {
  if (!isInitialized) {
    const init = !isMultiplayer ? singleplayerInit : multiplayerInit;
    Object.assign(gameObject, initializeObjects(isMultiplayer, init));
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
  mainLoop(false, false);
});

// Create two players logic
multiPlayerbtn.addEventListener('click', () => {
  mainLoop(true, false);
});
