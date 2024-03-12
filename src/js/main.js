/* eslint-disable no-param-reassign */
/* eslint-disable no-import-assign */
/* eslint-disable prefer-arrow-callback */
import 'normalize.css';
import '../style/style.scss';

import {
  unloadBoard,
  loadBoard,
  getBoardBoxes,
} from './helpers/boardLoad';

import { Ships, dirs } from './objects/ship';

import { addShipHoverEvent, animationCleanup } from './helpers/animation';
import { addPlacementEvent, removePlacementEvent } from './helpers/placementEvent';
import addPassDelay from './helpers/pass';
import { attackMode, botAttackMode } from './helpers/attack';

const maxShips = 5;

// If true, populate cell with placement event and animation event on the correct board.
function populateCellWithEvents(gameObject, player) {
  const boardBoxes = getBoardBoxes(player);
  const playerShips = player.board.list;
  const shipIndex = playerShips.length;
  const ship = Ships[shipIndex];

  addPlacementEvent(gameObject, boardBoxes, player);
  addShipHoverEvent(boardBoxes, player, ship);
}

function removeCellsEvents(player) {
  animationCleanup(player);
  removePlacementEvent(player);
}

// Enter into placement mode, will do two rounds to ensure everything is set up.
// Accepts player for ship initialization, and main cb for game progression
// Will:
// Placement mode will populate the board with events for animation and placing ships
function placementMode(gameObject, player) {
  // pass callback to placement Event
  populateCellWithEvents(gameObject, player);
}

function exitPlacementMode(player) {
  // pass callback to placement Event
  removeCellsEvents(player);
}

function initializeBot(player) {
  while (player.board.list.length < 5) {
    const shipIndex = player.board.list.length;
    const ship = Ships[shipIndex];
    const cord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const dirIndex = Math.floor(Math.random() * 4);
    const dir = dirs[dirIndex];
    player.board.place(ship, dir, cord);
  }
}

function firstPlayerInit(gameObject) {
  const { playerOne, playerTwo, cb } = gameObject;
  if (!playerOne.isBot) {
    loadBoard(playerOne);
    unloadBoard(playerTwo);
    placementMode(gameObject, playerOne);
  } else {
    // Initialize bot
    initializeBot(playerOne);
    cb(false, true);
  }
}

function secondPlayerInit(gameObject, numOfShipsPlayerTwo) {
  const { playerOne, playerTwo, cb } = gameObject;
  // Depopulate left board events
  if (!playerTwo.isBot) {
    if (numOfShipsPlayerTwo === 0 && !playerOne.isBot) {
      if (gameObject.isMultiplayer) {
        addPassDelay();
      }
    }
    unloadBoard(playerOne);
    exitPlacementMode(playerOne);
    loadBoard(playerTwo);
    placementMode(gameObject, playerTwo);
  } else {
    // Initialize bot
    initializeBot(playerTwo);
    cb();
  }
}

function prepareBoard(gameObject) {
  // Both player finishes placement
  gameObject.isStarted = true;

  // Signal to the second player to pass the game to the first player
  if (gameObject.isMultiplayer) {
    unloadBoard(gameObject.playerTwo);
    addPassDelay();
  }

  exitPlacementMode(gameObject.playerTwo);
  // eslint-disable-next-line no-param-reassign
  gameObject.isStarted = true;
}

function runRound(gameObject) {
  const {
    isStarted,
    isMultiplayer,
  } = gameObject;
  // Run game and pass between each turn. Handle both player and both functionalities
  if (isStarted) {
    // Signal to the player to pass the game to the opposite player.
    attackMode(gameObject);
    if (isMultiplayer) {
      addPassDelay();
    }
  }
}

// Loop that will be called on every cell click or startup
// This will moves the game forward and does all the necessary calculations
// First, check if gameObject is initialized. If not, initialize gameObject and page.
// Game object must come from GameState global object.
// Second, check if game has started, if not, goes into placement mode;
// Third, if placement is done, all cells goes into play mode!
export default function mainLoop(gameObject) {
  const { playerOne, playerTwo, isStarted } = gameObject;
  // Check if there's a game winner, if there is end the game
  if (gameObject.winner) {
    return;
  }

  const numOfShipsPlayerOne = playerOne.board.list.length;

  // If object is initialized, will goes into the placement mode for first player
  // placement mode ends when max ships is reached
  if (numOfShipsPlayerOne !== maxShips) {
    firstPlayerInit(gameObject);
    return;
  }

  const numOfShipsPlayerTwo = playerTwo.board.list.length;

  // Second placement mode for second player
  // Signal to the first player to pass to the next player
  if (numOfShipsPlayerTwo !== maxShips && numOfShipsPlayerOne === maxShips) {
    secondPlayerInit(gameObject, numOfShipsPlayerTwo);
    return;
  }

  const placementFinished = (playerOne.board.list.length === maxShips)
  && (playerTwo.board.list.length === maxShips);

  // Set board view correctly and pass to the first player to start the game
  if (placementFinished && !isStarted) {
    prepareBoard(gameObject);
  }

  // run games once all the pre requisites are done above
  runRound(gameObject);
}
