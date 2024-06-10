/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { animationEventBuilder, withdrawEventBuilder } from './utility';
import { attackHoverEvent, attackWithdrawEvent } from './attack';
import { shipHoverEvent, shipWithdrawEvent } from './hover';
import Coordinate from '../../objects/Coordinate';

let firstPlayerBoard = [];
let secondPlayerBoard = [];
export const animationEvents = [];

// const dirOptions = document.getElementsByClassName('dir-option');
// const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
// const img = loadIcon(type, cord.indexOf(coordinate) + 1, axisOption);
// box.style.backgroundImage = `url('${img}')`;

export function cleanupAnimation(player) {
  if (player.board.className === 'first-player') {
    firstPlayerBoard.forEach((fn) => fn());
    firstPlayerBoard = [];
  } else {
    secondPlayerBoard.forEach((fn) => fn());
    secondPlayerBoard = [];
  }
}

export function addAttackAnimation(boardBoxes, player) {
  boardBoxes.forEach((box) => {
    const attackAnimationHandler = (e) => attackHoverEvent(e, box);
    const withdrawAttackHandler = (e) => attackWithdrawEvent(e, box);

    const attackEventRef = animationEventBuilder(box, attackAnimationHandler);
    const withdrawEventRef = withdrawEventBuilder(box, withdrawAttackHandler);

    if (player.board.className === 'first-player') {
      firstPlayerBoard.push(attackEventRef);
      firstPlayerBoard.push(withdrawEventRef);
    } else {
      secondPlayerBoard.push(attackEventRef);
      secondPlayerBoard.push(withdrawEventRef);
    }
  });
}

// Function for adding animation
export function addShipHoverAnimation(boardBoxes, player) {
  boardBoxes.forEach((box) => {
    const rawCord = box.dataset.pos
      .split(',')
      .map((x) => parseInt(x, 10));
    const cord = new Coordinate(rawCord[0], rawCord[1]);
    const shipHoverHandler = () => shipHoverEvent(boardBoxes, player, cord);
    const shipHoverRef = animationEventBuilder(box, shipHoverHandler);

    const shipWithdrawHandler = () => shipWithdrawEvent(boardBoxes, player, cord);
    const shipWithdrawRef = withdrawEventBuilder(box, shipWithdrawHandler);

    if (player.board.className === 'first-player') {
      firstPlayerBoard.push(shipHoverRef);
      firstPlayerBoard.push(shipWithdrawRef);
    } else {
      secondPlayerBoard.push(shipHoverRef);
      secondPlayerBoard.push(shipWithdrawRef);
    }
  });
}
