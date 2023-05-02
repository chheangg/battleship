/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

import { Gameboard } from './gameboard';

// Player Object
function Player(isBot, initialTurn) {
  // Bot make random attack on the board, keep retrying if it is not valid;
  function botEval(player) {
    const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const attackExist = player
      .board.attacks
      .find((attempt) => attempt[0] === rand[0] && attempt[1] === rand[1]);

    if (attackExist) {
      return botEval(player);
    }

    return rand;
  }

  // Player simply receive attack if it is not a bot (implying coordinate exists)
  // otherwise, a coord is randomly generated for the bot to attack
  // eslint-disable-next-line consistent-return
  function attack(player, coordinate, gameObject) {
    return player.board.receiveAttack(coordinate, gameObject);
  }

  return {
    isTurn: initialTurn,
    board: Gameboard(Player),
    attack,
    isBot,
    botEval,
  };
}

// Only use to decide if playerOne is a bot or a real player
function randomPlayerDecider(isMultiplayer) {
  const turnDecider = Math.random() >= 0.5;
  if (isMultiplayer) {
    return Player(false, turnDecider);
  }
  return (Math.random() >= 0.5) ? Player(true, turnDecider) : Player(false, turnDecider);
}

// Singleplayer object for initializing a bot and a real player
function singleplayerInit() {
  const playerOne = randomPlayerDecider(false);
  const playerOneIsBot = playerOne.isBot;
  const playerTwo = Player(!playerOneIsBot, !playerOne.isTurn);
  return {
    playerOne,
    playerTwo,
  };
}

// Multiplayer object for initializing both real players
function multiplayerInit() {
  return {
    playerOne: Player(true, true),
    playerTwo: Player(true, false),
  };
}

// eslint-disable-next-line import/prefer-default-export
export { Player, singleplayerInit, multiplayerInit };
