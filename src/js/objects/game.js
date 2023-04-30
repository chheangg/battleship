/* eslint-disable no-unused-expressions */
import { Player } from './player';

function randomPlayerDecider(gameMode) {
  if (gameMode === 'multiplayer') {
    return Player.create(false);
  }

  return (Math.random() >= 0.5) ? Player.create(true) : Player.create(false);
}

function returnPlayerTurn(gameObject) {
  return gameObject.playerOne.isTurn
    ? gameObject.playerOne
    : gameObject.playerTwo;
}

// Takes the gameObject and swap playerOne and playerTwo isTurn bool variable
export function swapTurn() {
  Player.changeTurn;
}

// The main Game object for exposing information for each stages to uses
// 1. Players
// 2. Player for Current Turn
// 3. Current Board
// 4. isStarted for checking if placement has been set
export default function Game(gameMode) {
  let isStarted = false;
  const playerOne = randomPlayerDecider(gameMode);

  // Conditional Variables for Player 2
  const isMultiplayer = gameMode === 'multiplayer';
  const playerOneIsBot = playerOne.isBot;

  const playerTwo = Player.create(isMultiplayer || playerOneIsBot);

  // Return player whose turns is theirs
  function currentTurn() {
    return returnPlayerTurn(this);
  }

  // Return board of player whose turns is there
  function currentBoard() {
    return [...document.getElementsByClassName(`${playerOne.isTurn ? 'left' : 'right'}-content`)[0]
      .getElementsByClassName('box')];
  }

  return {
    playerOne, playerTwo, currentTurn, currentBoard, isStarted,
  };
}
