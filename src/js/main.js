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
import addPassDelay from './utilities/pass';
import attackMode, { attackUtilities } from './utilities/attack';
import restartGame from './template/startScreen';

// Game Object that contains the state information to be exposed
import Game from './objects/game';

const gameObject = {};
let startCallback;

function resetGameObject() {
  Object.keys(gameObject).forEach((key) => delete gameObject[key]);
}

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
function initializeObjects(isMultiplayer, init, names) {
  loadPage(names);
  const { playerOne, playerTwo } = init(names);
  return Game(isMultiplayer, playerOne, playerTwo);
}

function initializeBot(player) {
  while (player.board.list.length < 5) {
    const shipPlaced = player.board.list.length;
    const ship = shipOrders[shipPlaced];
    const cord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const axis = (Math.random() >= 0.5)
      ? 'horizontal'
      : 'vertical';
    player.board.place(ship, axis, cord);
  }
}

// Set name in the name container
function setTurnName(playerName) {
  const name = document.querySelector('#name');
  name.textContent = playerName;
}

// Loop that will be called on every cell click or startup
// This will moves the game forward and does all the necessary calculations
// First, check if gameObject is initialized. If not, initialize gameObject and page.
// Game object must come from GameState global object.
// Second, check if game has started, if not, goes into placement mode;
// Third, if placement is done, all cells goes into play mode!
export default function mainLoop(isMultiplayer, isInitialized, names, cb) {
  if (gameObject.winner) {
    resetGameObject();
    restartGame();
    startCallback();
    return;
  }

  if (!isInitialized) {
    if (!startCallback) {
      startCallback = cb;
    }
    const init = !isMultiplayer ? singleplayerInit : multiplayerInit;
    Object.assign(gameObject, initializeObjects(isMultiplayer, init, names));
  }

  const maxShips = 5;

  const numOfShipsPlayerOne = gameObject.playerOne.board.list.length;
  const numOfShipsPlayerTwo = gameObject.playerTwo.board.list.length;

  // If object is initialized, will goes into the placement mode for first player
  // placement mode ends when max ships is reached
  if (numOfShipsPlayerOne !== maxShips) {
    if (!gameObject.playerOne.isBot) {
      setTurnName(gameObject.playerOne.name);
      placementMode(gameObject.playerOne, mainLoop);
    } else {
      // Initialize bot
      initializeBot(gameObject.playerOne);
      mainLoop(false, true);
    }
    return;
  }

  // Second placement mode for second player
  // Signal to the first player to pass to the next player
  if (numOfShipsPlayerTwo !== maxShips && numOfShipsPlayerOne === maxShips) {
    // Depopulate left board events
    if (!gameObject.playerTwo.isBot) {
      setTurnName(gameObject.playerTwo.name);
      if (numOfShipsPlayerTwo === 0 && !gameObject.playerOne.isBot) {
        if (isMultiplayer) {
          addPassDelay();
        }
      }
      unloadBoard('left');
      exitPlacementMode(gameObject.playerOne, mainLoop);
      placementMode(gameObject.playerTwo, mainLoop);
    } else {
      // Initialize bot
      initializeBot(gameObject.playerTwo);
      mainLoop(false, true);
    }
    return;
  }

  const placementFinished = (gameObject.playerOne.board.list.length === maxShips)
  && (gameObject.playerTwo.board.list.length === maxShips);

  // Both player finishes placement
  if (placementFinished && !gameObject.isStarted) {
    gameObject.isStarted = true;
    // Signal to the second player to pass the game to the first player
    if (!gameObject.playerOne.isBot) {
      unloadBoard('right');
      if (isMultiplayer) {
        addPassDelay();
      }
    }
    exitPlacementMode(gameObject.playerTwo, mainLoop);
    gameObject.isStarted = true;
  }

  if (gameObject.isStarted) {
    // Signal to the player to pass the game to the opposite player.
    if (!gameObject.currentTurn().isBot) {
      setTurnName(gameObject.currentTurn().name);
      if (isMultiplayer) {
        addPassDelay();
      }
      attackMode(gameObject, mainLoop);
    } else {
      // add bot attack
      attackUtilities.botAttack(gameObject, mainLoop);
    }
  }
}
