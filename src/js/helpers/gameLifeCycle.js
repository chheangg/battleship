/* eslint-disable no-param-reassign */
import Game from '../objects/game';
import Player from '../objects/player';
import mainLoop from '../main';
import { mainPageLoad, loadOption, setMainScreen } from './pageLoad';
import nameComponent from './name';

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

export function loadGame(gameObject) {
  // Load page and initialize every cells;
  mainPageLoad(gameObject);
  // Load options
  loadOption();
}

// As for player(s) name through constructing a form
// destroy the form after it is collected
export default function collectName(gameObject) {
  const { isMultiplayer } = gameObject;
  const body = document.querySelector('body');
  const nameFormComponent = nameComponent(isMultiplayer, () => {
    if (isMultiplayer) {
      const playerOneName = document.querySelector('.player-one-name').value;
      const playerTwoName = document.querySelector('.player-two-name').value;
      gameObject.playerOne.name = playerOneName;
      gameObject.playerTwo.name = playerTwoName;
    } else {
      const playerName = document.querySelector('.player-name').value;
      if (gameObject.playerOne.isBot) {
        gameObject.playerTwo.name = playerName;
        gameObject.playerOne.name = 'BOT';
      } else {
        gameObject.playerOne.name = playerName;
        gameObject.playerTwo.name = 'BOT';
      }
    }
    body.innerText = '';
    loadGame(gameObject);
    gameObject.cb();
  });
  body.replaceChildren(nameFormComponent);
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
    const multiPlayerGameObject = initGame(true);
    multiPlayerGameObject.cb = () => mainLoop(multiPlayerGameObject);
    // Collect names
    collectName(multiPlayerGameObject);
  });
}

export function startGame() {
  setMainScreen();
  initGame();
}
