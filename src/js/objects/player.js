/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

import Gameboard from './gameboard';

export default class Player {
  constructor(isBot, initialTurn) {
    this.isBot = isBot;
    this.isTurn = initialTurn;
    this.name = '';
    this.board = new Gameboard();
  }

  // Bot create random attack cord on the board, keep retrying if it is not valid;
  botEval(player) {
    const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const attackExist = player
      .board.attacks
      .find((attempt) => attempt[0] === rand[0] && attempt[1] === rand[1]);

    if (attackExist) {
      return this.botEval(player);
    }

    return rand;
  }

  // Player simply receive attack if it is not a bot (implying coordinate exists)
  // otherwise, a coord is randomly generated for the bot to attack
  // eslint-disable-next-line consistent-return, class-methods-use-this
  attack(player, coordinate, gameObject) {
    return player.board.receiveAttack(coordinate, gameObject);
  }

  // Only use to decide if playerOne is a bot or a real player
  static randomPlayerDecider() {
    const turnDecider = Math.random() >= 0.5;
    return (Math.random() >= 0.5)
      ? new Player(turnDecider, true)
      : new Player(turnDecider, true);
  }

  // Singleplayer object for initializing a bot and a real player
  static singleplayerInit(names = ['Player One', 'Player Two']) {
    const playerOne = Player.randomPlayerDecider(false);
    const playerOneIsBot = playerOne.isBot;
    const playerTwo = new Player(!playerOneIsBot, !playerOne.isTurn);

    if (playerOneIsBot) {
      playerTwo.name = names[0];
    } else {
      playerOne.name = names[0];
    }
    return {
      playerOne,
      playerTwo,
    };
  }

  // Multiplayer object for initializing both real players
  static multiplayerInit(names = ['Player One', 'Player Two']) {
    const playerOne = new Player(false, true);
    const playerTwo = new Player(false, false);

    playerOne.name = names[0];
    playerTwo.name = names[1];

    return {
      playerOne,
      playerTwo,
    };
  }
}
