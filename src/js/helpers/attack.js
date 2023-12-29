import { unloadBoard, loadBoard } from './pageLoad';
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
  function checkWin(attacker, defender, gameObject) {
    const hasWin = defender.board.list.every((ship) => ship.isSunk());
    console.log(hasWin);
    if (hasWin) {
      gameObject.winner = hasWin;
    }
  }

  function attack(gameObject, cord, side, attacker, defender) {
    const checkValid = attacker.attack(defender, cord, gameObject);
    if (!checkValid) {
      return;
    }
    applyAtt(checkValid, cord, side);
    checkWin(attacker, defender, gameObject);
  }

  function botAttack(gameObject) {
    const { playerOne, playerTwo, cb } = gameObject;
    const bot = playerOne.isBot ? playerOne : playerTwo;
    const defender = playerOne.isBot ? playerTwo : playerOne;
    const attackedSide = gameObject.playerOne.isBot
      ? 'right' : 'left';
    const cord = bot.botEval(defender);
    const checkValid = bot.attack(defender, cord, gameObject);
    applyAtt(checkValid, cord, attackedSide);
    checkWin(bot, defender, gameObject);
    cb();
  }
  return { attack, botAttack };
}());

export { attackUtilities };

// Attack mode
// Accepts game object for state info and cb for game progression
// Attack mode function check whose turn should be able to attack
// 1. Load board for current player
// 2. Populate the correct board to be able to attack with attack event listener
// eslint-disable-next-line no-shadow
export default function attackMode(gameObjectState) {
  const { playerOne, playerTwo, cb } = gameObjectState;
  const currentSide = playerOne.isTurn ? 'left' : 'right';
  const oppositeSide = currentSide === 'left' ? 'right' : 'left';
  const currentPlayer = playerOne.isTurn
    ? gameObjectState.playerOne : playerTwo;
  const oppositePlayer = playerOne.isTurn
    ? gameObjectState.playerTwo : playerOne;

  unloadBoard(oppositeSide);
  loadBoard(currentPlayer, currentSide);

  const oppositeBoxes = [...document
    .querySelector(`.${oppositeSide}-content`)
    .getElementsByClassName('box')];
  oppositeBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      const cord = box.dataset.pos.split(',').map((x) => parseInt(x, 10));
      attackUtilities.attack(
        gameObjectState,
        cord,
        oppositeSide,
        currentPlayer,
        oppositePlayer,
      );
      oppositeBoxes.forEach((oppositeBox) => removeAllEventListener(oppositeBox));
      cb();
    });
  });
}
