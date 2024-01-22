/* eslint-disable no-param-reassign */
import Game from '../objects/game';
import Player from '../objects/player';
import mainLoop from '../main';
import {
  setMainScreen, loadModal, loadGameboard, loadPlacementOption,
} from './boardLoad';

// Load the page, and initialize Game object to be return
// to be used by other stages in the game
function initializeObjects(isMultiplayer, init) {
  const { playerOne, playerTwo } = init();
  return new Game(isMultiplayer, playerOne, playerTwo);
}

function initializeGameMode(isMultiplayer) {
  const init = !isMultiplayer ? Player.singleplayerInit : Player.multiplayerInit;
  return initializeObjects(isMultiplayer, init);
}

export function startGame(gameObject) {
  const placementOptionContainer = loadPlacementOption(gameObject);
  loadGameboard(gameObject, placementOptionContainer);
}

function collectNameFromFormHOF(gameObject) {
  return () => {
    const { isMultiplayer } = gameObject;

    if (isMultiplayer) {
      const playerOneName = document.querySelector('#first-player').value;
      const playerTwoName = document.querySelector('#first-player').value;
      gameObject.playerOne.name = playerOneName;
      gameObject.playerTwo.name = playerTwoName;
    } else {
      const playerName = document.querySelector('#player').value;
      if (gameObject.playerOne.isBot) {
        gameObject.playerTwo.name = playerName;
        gameObject.playerOne.name = 'BOT';
      } else {
        gameObject.playerOne.name = playerName;
        gameObject.playerTwo.name = 'BOT';
      }
    }
    startGame(gameObject);
    gameObject.cb();
  };
}

// As for player(s) name through constructing a form
// destroy the form after it is collected
export default function collectName(gameObject) {
  loadModal(gameObject, collectNameFromFormHOF);
}

function initGame() {
  // Starting page
  const singlePlayerBtn = document.querySelector('#singleplayer');
  const multiPlayerbtn = document.querySelector('#multiplayer');
  // Create a bot and a player and start the game

  //* * */
  // Here we set a callback property called cb in order for the gameobject to call
  // itself in the future to run and progress the main loop in various func calls.
  //* * */
  // Single player logic
  singlePlayerBtn.addEventListener('click', () => {
    const singlePlayerGameObject = initializeGameMode(false);
    singlePlayerGameObject.cb = () => mainLoop(singlePlayerGameObject);
    // Collect name
    collectName(singlePlayerGameObject);
  });

  // Create two players logic and start the game
  multiPlayerbtn.addEventListener('click', () => {
    const multiPlayerGameObject = initializeGameMode(true);
    multiPlayerGameObject.cb = () => mainLoop(multiPlayerGameObject);
    // Collect names
    collectName(multiPlayerGameObject);
  });
}

export function openGameMenu() {
  setMainScreen();
  initGame();
}
