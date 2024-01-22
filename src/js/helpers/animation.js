/* eslint-disable no-plusplus */
import _ from 'underscore';
import { buildShipBody, placeShip, animationRemoverEventList } from './imageLoader';
import { withEventListener } from './utilities';

let firstPlayerBoard = [];
let secondPlayerBoard = [];
export const animationEvents = [];

// const dirOptions = document.getElementsByClassName('dir-option');
// const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
// const img = loadIcon(type, cord.indexOf(coordinate) + 1, axisOption);
// box.style.backgroundImage = `url('${img}')`;

// Responsible for animating preview
function shipPreview(body, boardBoxes, ship, event) {
  // Get axis information of ship
  // const dirOptions = document.getElementsByClassName('dir-option');
  placeShip(body, boardBoxes, ship, event, true);
}

// Function for animating ship preview everything it hovers onto a box or out of it
function animationEvent(event, boardBoxes, player, ship) {
  const body = buildShipBody(
    event.currentTarget.dataset.pos
      .split(',')
      .map((x) => parseInt(x, 10)),
    ship,
  );
  const isShipOverflowing = body
    .find((pos) => (pos[1] < 0) || (pos[1] > 9) || (pos[0] < 0) || (pos[0] > 10));
  const isOverlap = player
    .board
    .list
    .some((playerShip) => playerShip
      .position.some((shipPos) => body
        .some((bodyPos) => _.isEqual(bodyPos, shipPos))));
  // Do nothing
  // if ship is overflowing the board, or colliding with othership
  if (isOverlap || isShipOverflowing) {
    return;
  }

  shipPreview(body, boardBoxes, ship, event);
}

// Function for adding animation
function addAnimationEvent(boardBoxes, player, ship) {
  boardBoxes.forEach((box) => {
    const eventRef = withEventListener(
      box,
      'mouseover',
      (e) => animationEvent(e, boardBoxes, player, ship),
    );
    if (player.isTurn) {
      firstPlayerBoard.push(eventRef);
    } else {
      secondPlayerBoard.push(eventRef);
    }
  });
}

function removeAnimationEvent(player) {
  if (player.isTurn) {
    firstPlayerBoard.forEach((fn) => fn());
    firstPlayerBoard = [];
  } else {
    secondPlayerBoard.forEach((fn) => fn());
    secondPlayerBoard = [];
  }
  console.log('hi')
  animationRemoverEventList.forEach((fn) => fn());
  console.log(animationRemoverEventList);
  animationRemoverEventList.splice(0, animationRemoverEventList.length);
}

export {
  addAnimationEvent,
  removeAnimationEvent,
};
