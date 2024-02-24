import { addAttackAnimation, animationCleanup } from './animation';
import { unloadBoard, loadBoard, getBoardBoxes } from './boardLoad';
import { withEventListener } from './utilities';

const eventListeners = [];

/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const attackUtilities = (function handler() {
  function applyAtt(isHit, cord, player) {
    const boxes = getBoardBoxes(player);
    boxes.forEach((box) => {
      if (box.dataset.pos === cord.join()) {
        box.textContent = 'X';
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

// Attack mode
// Accepts game object for state info and cb for game progression
// Attack mode function check whose turn should be able to attack
// 1. Load board for current player
// 2. Populate the correct board to be able to attack with attack event listener
// eslint-disable-next-line no-shadow
export default function attackMode(gameObjectState) {
  const {
    playerOne, playerTwo, cb,
  } = gameObjectState;

  const currentPlayer = gameObjectState.currentTurn();

  const oppositePlayer = playerOne.isTurn
    ? playerTwo : playerOne;

  const oppositeBoxes = getBoardBoxes(oppositePlayer);

  loadBoard(currentPlayer);
  unloadBoard(oppositePlayer);
  animationCleanup(currentPlayer);

  if (!currentPlayer.isBot) {
    addAttackAnimation(oppositeBoxes, oppositePlayer);
    addAttackEventListener(cb, gameObjectState, currentPlayer, oppositePlayer);
  }
}
