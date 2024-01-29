/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-unused-expressions */

// The main Game object for exposing information for each stages to uses
// 1. Players
// 2. Player for Current Turn
// 3. Current Board
// 4. isStarted for checking if placement has been set
// 5. current gamemode (isMultiplayer)

export default class Game {
  constructor(isMultiplayer, playerOne, playerTwo) {
    this.isMultiplayer = isMultiplayer;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.isStarted = false;
  }

  currentTurn() {
    return this.playerOne.isTurn
      ? this.playerOne : this.playerTwo;
  }
}

// function returnPlayerTurn(gameObject) {
//   return gameObject.playerOne.isTurn
//     ? gameObject.playerOne
//     : gameObject.playerTwo;
// }

/// Old Version!
// export default function Game(isMultiplayer, playerOne, playerTwo) {
//   let isStarted = false;

//   // Return player whose turns is theirs
//   function currentTurn() {
//     return returnPlayerTurn(this);
//   }

//   // Return board of player whose turns is there
//   function currentBoard() {
//     return
//        [...document.getElementsByClassName(`${playerOne.isTurn ? 'left' : 'right'}-content`)[0]
//       .getElementsByClassName('box')];
//   }

//   return {
//     playerOne, playerTwo, currentTurn, currentBoard, isStarted, isMultiplayer,
//   };
// }
