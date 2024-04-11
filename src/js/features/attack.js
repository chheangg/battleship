import { addAttackAnimation, cleanupAnimation } from './animation';
import { getBoardBoxes, withEventListener } from '../utilities';
import { renderFOW, renderShips, unrenderShips } from './render/board';

const eventListeners = [];

/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const attackUtilities = (function handler() {
  function applyAtt(isHit, cord, player) {
    const boxes = getBoardBoxes(player);
    boxes.forEach((box) => {
      if (box.dataset.pos === cord.join()) {
        box.classList.add(isHit === 'hit' ? 'hit' : 'miss');
      }
    });
  }
  function checkWin(attacker, defender, gameObject) {
    const hasWin = defender.board.list.every((ship) => ship.isSunk());
    if (hasWin) {
      gameObject.winner = hasWin;
    }
  }

  function attack(gameObject, cord, attacker, defender) {
    if (!defender.board.isValidAttack(cord)) {
      return;
    }
    const attackState = attacker.attack(defender, cord, gameObject);
    applyAtt(attackState, cord, defender);
    checkWin(attacker, defender, gameObject);
  }

  function botAttack(gameObject) {
    const { playerOne, playerTwo, cb } = gameObject;
    const bot = playerOne.isBot ? playerOne : playerTwo;
    const defender = playerOne.isBot ? playerTwo : playerOne;
    const cord = bot.botEval(defender);
    attack(gameObject, cord, bot, defender);
    cb();
  }
  return { attack, botAttack };
}());

export { attackUtilities };

function addAttackEventListener(cb, gameObjectState, currentPlayer, oppositePlayer) {
  const oppositeBoxes = getBoardBoxes(oppositePlayer);
  oppositeBoxes.forEach((box) => {
    const eventListener = () => {
      const cord = box.dataset.pos.split(',').map((x) => parseInt(x, 10));
      attackUtilities.attack(
        gameObjectState,
        cord,
        currentPlayer,
        oppositePlayer,
      );
      eventListeners.forEach((e) => e());
      eventListeners.splice(0, eventListeners.length);
      cb();
    };

    const removableEvent = withEventListener(box, 'click', eventListener);
    eventListeners.push(removableEvent);
  });
}

export function attackMode(gameObjectState) {
  const {
    playerOne, playerTwo, cb,
  } = gameObjectState;

  const currentPlayer = gameObjectState.currentTurn();

  const oppositePlayer = playerOne.isTurn
    ? playerTwo : playerOne;

  const oppositeBoxes = getBoardBoxes(oppositePlayer);

  renderShips(currentPlayer);
  unrenderShips(oppositePlayer);
  cleanupAnimation(currentPlayer);
  renderFOW(oppositePlayer);

  if (!currentPlayer.isBot) {
    addAttackAnimation(oppositeBoxes, oppositePlayer);
    addAttackEventListener(cb, gameObjectState, currentPlayer, oppositePlayer);
  } else {
    attackUtilities.botAttack(gameObjectState);
  }
}
