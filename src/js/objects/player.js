/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

import { Gameboard } from './gameboard';

// Factory constructor of Player Logic (Not the actual player);
const Player = (function handler() {
  const list = [];

  // Create player
  function create(isBot) {
    const obj = PlayerObj(isBot);
    list.push(obj);
    return obj;
  }

  // Clear player list
  function clear() {
    list.splice(0);
  }

  function changeTurn() {
    list.forEach((obj) => {
      // eslint-disable-next-line no-unused-expressions
      obj.isTurn ? obj.isTurn = false : obj.isTurn = true;
    });
  }

  return {
    list, changeTurn, create, clear,
  };
}());

function PlayerObj(isBot) {
  // Decide the turn for player, first if there's no existing player yet
  function decideInitialTurn() {
    return !Player.list[0];
  }

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
  function attack(player, coordinate) {
    if (isBot === false) {
      return player.board.receiveAttack(coordinate);
    }

    const cord = botEval(player);
    // State of board attacks
    const state = player.board.receiveAttack(cord);

    if (!state) {
      return attack(player);
    }

    return {
      cord,
      state,
    };
  }

  return {
    isTurn: decideInitialTurn(),
    board: Gameboard(Player),
    attack,
    isBot,
  };
}
// eslint-disable-next-line import/prefer-default-export
export { Player };
