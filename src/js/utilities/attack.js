import { unloadBoard, loadBoard } from '../pageLoad';
import { removeAllEventListener } from './utilities';

/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const attackUtilities = (function handler() {
  function applyAtt(isHit, cord, side) {
    const boxes = document.getElementsByClassName(`${side}-content`)[0]
      .getElementsByClassName('box');
    [...boxes].forEach((box) => {
      if (box.dataset.pos === cord.join()) {
        box.textContent = 'X';
        box.classList.add(isHit === 'hit' ? 'hit' : 'miss');
      }
    });
  }
  function checkWin(attacker, defender) {
    const hasWin = defender.board.list.every((ship) => ship.isSunk());
    if (hasWin) {
      console.log(attacker);
    }
  }

  function attack(gameObject, cord, side, attacker, defender) {
    const checkValid = attacker.attack(defender, cord, gameObject);
    if (!checkValid) {
      return;
    }
    applyAtt(checkValid, cord, side);
    checkWin(attacker, defender);
  }
  function botRenderAttack(bot, target, side, list) {
    const attInfo = bot.attack(target);
    applyAtt(attInfo.state, attInfo.cord, side);
    checkWin(list);
  }
  function botAttack(side, list) {
    const botExist = list.some((x) => x.isBot);
    if (!botExist) {
      return;
    }
    const bot = list.filter((x) => x.isBot)[0];
    const notBot = list.filter((x) => !x.isBot)[0];
    if (!bot.isTurn) {
      return;
    }
    botRenderAttack(bot, notBot, side, list);
  }
  return { attack, botAttack };
}());

// Attack mode
// Accepts game object for state info and cb for game progression
// Attack mode function check whose turn should be able to attack
// 1. Load board for current player
// 2. Populate the correct board to be able to attack with attack event listener
// eslint-disable-next-line no-shadow
export default function attackMode(gameObjectState, cb) {
  const currentSide = gameObjectState.playerOne.isTurn ? 'left' : 'right';
  const oppositeSide = currentSide === 'left' ? 'right' : 'left';
  const currentPlayer = gameObjectState.playerOne.isTurn
    ? gameObjectState.playerOne : gameObjectState.playerTwo;
  const oppositePlayer = gameObjectState.playerOne.isTurn
    ? gameObjectState.playerTwo : gameObjectState.playerOne;

  unloadBoard(oppositeSide);
  loadBoard(currentPlayer, currentSide);

  const oppositeBoxes = [...document
    .querySelector(`.${oppositeSide}-content`)
    .getElementsByClassName('box')];
  oppositeBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      const cord = box.dataset.pos.split(',').map((x) => parseInt(x, 10));
      attackUtilities.attack(gameObjectState, cord, oppositeSide, currentPlayer, oppositePlayer);
      oppositeBoxes.forEach((oppositeBox) => removeAllEventListener(oppositeBox));
      cb(gameObjectState.isMultiplayer, true);
    });
  });
}