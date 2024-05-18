/* eslint-disable no-param-reassign */
/* eslint-disable no-import-assign */
/* eslint-disable prefer-arrow-callback */
import { unrenderShips } from './features/render/ship';

import addPassDelay from './features/pass';
import attackMode from './features/lifeCycles/attack';
import setupPlacementMode from './features/lifeCycles/placementSetup';
import { enterPlacementEvent } from './features/lifeCycles/placementEvent';
import renderMenu from './features/lifeCycles/menu';
import initializeBoard from './features/lifeCycles/board';
import populateMenuEvent from './features/lifeCycles/gameObjectSetup';

function prepareBoard(gameObject) {
  // Both player finishes placement
  gameObject.isStarted = true;

  // Signal to the second player to pass the game to the first player
  if (gameObject.isMultiplayer) {
    unrenderShips(gameObject.playerTwo);
    addPassDelay();
  }

  // eslint-disable-next-line no-param-reassign
  gameObject.isStarted = true;
}

let menuOpened = false;
let boardRendered = false;

export default function mainLoop(gameObject) {
  if (!menuOpened) {
    renderMenu();
    populateMenuEvent(mainLoop);
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
