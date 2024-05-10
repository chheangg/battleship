/* eslint-disable no-param-reassign */
import Game from '../../objects/game';
import { loadModal } from '../render/modal';

// Load the page, and initialize Game object to be return
// to be used by other stages in the game
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
    gameObject.cb();
  };
}

function collectName(gameObject, collectNameCb) {
  loadModal(gameObject, collectNameCb);
}

function addNameModalEvent(collectNameCb) {
  const btn = document.querySelector('.name-form-btn');
  btn.addEventListener('click', collectNameCb);
}

function initGameModeEvent(isMultiplayer, cb) {
  // Initialize gameObject
  const gameObject = new Game(isMultiplayer);

  // Collect name
  collectName(gameObject);

  const mainLoopCallback = () => cb(gameObject);
  gameObject.cb = mainLoopCallback;

  const collectNameCb = collectNameFromFormHOF(gameObject);
  addNameModalEvent(collectNameCb);
}

export default function populateMenuEvent(cb) {
  // Starting page
  const singlePlayerBtn = document.querySelector('#singleplayer');
  const multiPlayerbtn = document.querySelector('#multiplayer');
  // Create a bot and a player and start the game

  // Single player logic
  singlePlayerBtn.addEventListener('click', () => initGameModeEvent(false, cb));

  // Create two players logic and start the game
  multiPlayerbtn.addEventListener('click', () => initGameModeEvent(true, cb));
}
