/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import _ from 'underscore';
import { buildShipBody, placeShip, convertCordToIndex } from './imageLoader';
import { withEventListener } from './utilities';
import { getAttackAsset } from './boardAssetLoader';

let firstPlayerBoard = [];
let secondPlayerBoard = [];
export const animationEvents = [];

// const dirOptions = document.getElementsByClassName('dir-option');
// const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
// const img = loadIcon(type, cord.indexOf(coordinate) + 1, axisOption);
// box.style.backgroundImage = `url('${img}')`;

// Responsible for animating preview
function shipPreview(body, boardBoxes, ship) {
  // Get axis information of ship
  // const dirOptions = document.getElementsByClassName('dir-option');
  placeShip(body, boardBoxes, ship);
}

function animationCleanup(player) {
  if (player.board.className === 'first-player') {
    firstPlayerBoard.forEach((fn) => fn());
    firstPlayerBoard = [];
  } else {
    secondPlayerBoard.forEach((fn) => fn());
    secondPlayerBoard = [];
  }
}

const animationEventBuilder = (el, event) => withEventListener(
  el,
  'mouseenter',
  event,
);

const withdrawEventBuilder = (el, event) => withEventListener(
  el,
  'mouseleave',
  event,
);

function calcShipBody(player, cord, ship) {
  const shipBody = buildShipBody(
    cord,
    ship,
  );
  const isShipOverflowing = shipBody
    .find((pos) => (pos[1] < 0) || (pos[1] > 9) || (pos[0] < 0) || (pos[0] > 9));
  const isOverlap = player
    .board
    .list
    .some((playerShip) => playerShip
      .position.some((shipPos) => shipBody
        .some((bodyPos) => _.isEqual(bodyPos, shipPos))));
  // Do nothing
  // if ship is overflowing the board, or colliding with othership
  if (isOverlap || isShipOverflowing) {
    return 0;
  }
  return shipBody;
}

function shipWithdrawEvent(cord, boardBoxes, player, ship) {
  const shipBody = calcShipBody(player, cord, ship);
  if (shipBody) {
    shipBody.forEach((shipCord) => {
      const boardIndex = convertCordToIndex(shipCord);
      const box = boardBoxes[boardIndex];
      box.style.backgroundImage = '';
    });
  }
}

// Function for animating ship preview everything it hovers onto a box or out of it
function shipHoverEvent(cord, boardBoxes, player, ship) {
  const shipBody = calcShipBody(player, cord, ship);
  if (shipBody) shipPreview(shipBody, boardBoxes, ship);
}

// Function for adding animation
function addShipHoverEvent(boardBoxes, player, ship) {
  boardBoxes.forEach((box) => {
    const cord = box.dataset.pos
      .split(',')
      .map((x) => parseInt(x, 10));

    const shipHoverHandler = () => shipHoverEvent(cord, boardBoxes, player, ship);
    const shipHoverRef = animationEventBuilder(box, shipHoverHandler);

    const shipWithdrawHandler = () => shipWithdrawEvent(cord, boardBoxes, player, ship);
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

function attackAnimationEvent(_event, box) {
  const target = getAttackAsset(0);
  box.appendChild(target);
}

function withdrawAttackEvent(event, box) {
  box.textContent = '';
}

function addAttackAnimation(boardBoxes, player) {
  boardBoxes.forEach((box) => {
    const attackAnimationHandler = (e) => attackAnimationEvent(e, box);
    const withdrawAttackHandler = (e) => withdrawAttackEvent(e, box);

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

export {
  addShipHoverEvent,
  addAttackAnimation,
  animationCleanup,
};
