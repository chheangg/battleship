/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import nameCollectStage from './utilities/name';
import mainLoop from './main';

import Game from './objects/game';
import Player from './objects/player';

// Load the page, and initialize Game object to be return
// to be used by other stages in the game
function initializeObjects(isMultiplayer, init) {
  const { playerOne, playerTwo } = init();
  return new Game(isMultiplayer, playerOne, playerTwo);
}

function initGame(isMultiplayer) {
  const init = !isMultiplayer ? Player.singleplayerInit : Player.multiplayerInit;
  return initializeObjects(isMultiplayer, init);
}

function startGame() {
  // Starting page
  const singlePlayerBtn = document.querySelector('.single-player');
  const multiPlayerbtn = document.querySelector('.multi-player');
  // Create a bot and a player and start the game

  //* * */
  // Here we set a callback property called cb in order for the gameobject to call
  // itself in the future to run and progress the main loop in various func calls.
  //* * */
  // Single player logic
  singlePlayerBtn.addEventListener('click', () => {
    const singlePlayerGameObject = initGame(false);
    singlePlayerGameObject.cb = () => mainLoop(singlePlayerGameObject);
    // Collect name
    nameCollectStage(singlePlayerGameObject);
  });

  // Create two players logic and start the game
  multiPlayerbtn.addEventListener('click', () => {
    const multiPlayerGameObject = initGame(true);
    multiPlayerGameObject.cb = () => mainLoop(multiPlayerGameObject);
    // Collect names
    nameCollectStage(multiPlayerGameObject);
  });
}

startGame();
