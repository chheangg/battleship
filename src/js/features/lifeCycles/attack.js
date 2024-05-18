import { addAttackAnimation, cleanupAnimation } from '../animation';
import { getBoardBoxes, withEventListener } from '../../utilities';
import { renderFOW, unrenderFOW } from '../render/board';
import { renderShips, unrenderShips } from '../render/ship';
import { attackPlayer, botAttack } from '../attack';

const eventListeners = [];

function addAttackEventListener(cb, gameObjectState, currentPlayer, oppositePlayer) {
  const oppositeBoxes = getBoardBoxes(oppositePlayer);
  oppositeBoxes.forEach((box) => {
    const eventListener = () => {
      const cord = box.dataset.pos.split(',').map((x) => parseInt(x, 10));
      console.log(currentPlayer, oppositePlayer);
      attackPlayer(
        currentPlayer,
        oppositePlayer,
        cord,
      );
      eventListeners.forEach((e) => e());
      eventListeners.splice(0, eventListeners.length);
      cb();
    };

    const removableEvent = withEventListener(box, 'click', eventListener);
    eventListeners.push(removableEvent);
  });
}

export default function attackMode(gameObject) {
  const {
    playerOne, playerTwo, cb,
  } = gameObject;

  const currentPlayer = gameObject.currentTurn();

  const oppositePlayer = playerOne.isTurn
    ? playerTwo : playerOne;

  const oppositeBoxes = getBoardBoxes(oppositePlayer);

  unrenderFOW(currentPlayer);
  renderShips(currentPlayer);

  unrenderShips(oppositePlayer);
  renderFOW(oppositePlayer);
  cleanupAnimation(currentPlayer);
  renderFOW(oppositePlayer);

  if (!currentPlayer.isBot) {
    addAttackAnimation(oppositeBoxes, oppositePlayer);
    addAttackEventListener(cb, gameObject, currentPlayer, oppositePlayer);
  } else {
    botAttack(currentPlayer, oppositePlayer);
    cb();
  }
}
