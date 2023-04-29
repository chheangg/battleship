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

// Takes the gameObject
export function swapTurn({ playerOne, playerTwo }) {
  playerOne.isTurn = playerTwo.isTurn;
  playerTwo.isTurn = playerTwo.isTurn;
}

// The main Game object for exposing information for each stages to uses
// 1. Players
// 2. Player for Current Turn
// 3. Current Board
export default function Game(gameMode) {
  const playerOne = randomPlayerDecider(gameMode);

  // Conditional Variables for Player 2
  const isMultiplayer = gameMode === 'multiplayer';
  const playerOneIsBot = playerOne.isBot;

  const playerTwo = Player.create(isMultiplayer || playerOneIsBot);

  function currentTurn() {
    return returnPlayerTurn(this);
  }

  function currentBoard() {
    return [...document.getElementsByClassName(`${playerOne.isTurn ? 'left' : 'right'}-content`)[0]
      .getElementsByClassName('box')];
  }

  return {
    playerOne, playerTwo, currentTurn, currentBoard,
  };
}
