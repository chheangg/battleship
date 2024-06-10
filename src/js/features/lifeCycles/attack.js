import { addAttackAnimation, cleanupAnimation } from '../animation';
import { getBoardBoxes, withEventListener } from '../../utilities';
import { renderFOW, unrenderFOW } from '../render/board';
import { renderShips, unrenderShips } from '../render/ship';
import { attackPlayer, botAttack } from '../attack';
import Coordinate from '../../objects/Coordinate';

const eventListeners = [];

function addAttackEventListener(cb, currentPlayer, oppositePlayer) {
  const oppositeBoxes = getBoardBoxes(oppositePlayer);
  oppositeBoxes.forEach((box) => {
    const eventListener = () => {
      const rawCord = box.dataset.pos.split(',').map((x) => parseInt(x, 10));
      const cord = new Coordinate(rawCord[0], rawCord[1]);
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
    addAttackEventListener(cb, currentPlayer, oppositePlayer);
  } else {
    botAttack(currentPlayer, oppositePlayer);
    cb();
  }
}
