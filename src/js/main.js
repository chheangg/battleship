import { unrenderShips } from './features/render/ship';

import addPassDelay from './features/lifeCycles/pass';
import attackMode from './features/lifeCycles/attack';
import setupPlacementMode from './features/lifeCycles/placementSetup';
import { enterPlacementEvent } from './features/lifeCycles/placementEvent';
import initializeBoard from './features/lifeCycles/board';
import initializeMenu from './features/lifeCycles/menu';

/**
 *
 * @param {*} gameObject - Central game state object
 */
function prepareBoard(gameObject) {
  if (gameObject.isMultiplayer) {
    unrenderShips(gameObject.playerTwo);
    addPassDelay();
  }
  gameObject.isStarted = true;
}

let menuOpened = false;
let boardRendered = false;

/**
 *
 * @param {*} gameObject - Central game state object
 */
export default function mainLoop(gameObject) {
  if (!menuOpened) {
    initializeMenu(mainLoop);
    menuOpened = true;
    return;
  }

  if (!boardRendered) {
    initializeBoard(gameObject);
    boardRendered = true;
  }

  const {
    playerOne, playerTwo, isStarted, isMultiplayer,
  } = gameObject;
  // Check if there's a game winner, if there is end the game
  if (gameObject.winner) {
    return;
  }

  const isPlayerOneSetup = setupPlacementMode(gameObject, playerOne);

  if (!isPlayerOneSetup) {
    enterPlacementEvent(gameObject, playerOne);
    return;
  }

  const isPlayerTwoSetup = setupPlacementMode(gameObject, playerTwo);
  if (!isPlayerTwoSetup) {
    enterPlacementEvent(gameObject, playerTwo);
    return;
  }

  // Set board view correctly and pass to the first player to start the game
  if (!isStarted) {
    prepareBoard(gameObject);
  }

  attackMode(gameObject);
  if (isMultiplayer) {
    addPassDelay();
  }
}
