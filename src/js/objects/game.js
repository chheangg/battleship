/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-unused-expressions */

import Player from './player';

function decideIfPlayerIsBot(isMultiplayer) {
  // Randomly decide bot status if it is multiplayer
  if (isMultiplayer) {
    return Math.random(2) === 0;
  }

  // No bots in singleplayer
  return false;
}

export default class Game {
  constructor(isMultiplayer) {
    this.isMultiplayer = isMultiplayer;

    this.playerOne = new Player(this, decideIfPlayerIsBot(isMultiplayer), true);
    this.playerOne.board.className = 'first-player';

    this.playerTwo = new Player(this, !this.playerOne.isBot, false);
    this.playerTwo.board.className = 'second-player';
    this.isStarted = false;
  }

  currentTurn() {
    return this.playerOne.isTurn
      ? this.playerOne : this.playerTwo;
  }
}
