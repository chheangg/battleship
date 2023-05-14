/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-unused-expressions */

function returnPlayerTurn(gameObject) {
  return gameObject.playerOne.isTurn
    ? gameObject.playerOne
    : gameObject.playerTwo;
}

// The main Game object for exposing information for each stages to uses
// 1. Players
// 2. Player for Current Turn
// 3. Current Board
// 4. isStarted for checking if placement has been set
// 5. current gamemode (isMultiplayer)
export default function Game(isMultiplayer, playerOne, playerTwo) {
  let isStarted = false;
  let winner;

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
    playerOne, playerTwo, currentTurn, currentBoard, isStarted, isMultiplayer, winner,
  };
}
