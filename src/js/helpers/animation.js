/* eslint-disable no-plusplus */
import _ from 'underscore';
import { loadIcon } from './imageLoader';
import { withEventListener } from './utilities';

let firstPlayerBoard = [];
let secondPlayerBoard = [];

function shipBodyInPreview(cord, ship) {
  const axis = 'horizontal';
  const start = [...cord];
  const body = Array(ship.length)
    .fill()
    .map((_pos, index) => {
      if (axis === 'horizontal') {
        return [start[0], start[1] + index];
      }
      return [start[0] + index, start[1]];
    });

  return body;
}

// const dirOptions = document.getElementsByClassName('dir-option');
// const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
// const img = loadIcon(type, cord.indexOf(coordinate) + 1, axisOption);
// box.style.backgroundImage = `url('${img}')`;

// Responsible for animating preview
function shipPreview(cord, boardBoxes, ship, event) {
  // Get axis information of ship
  // const dirOptions = document.getElementsByClassName('dir-option');
  cord.forEach((pos, index) => {
    const box = boardBoxes[pos[0] * 10 + pos[1]];
    const img = loadIcon(ship.name, index + 1, 'horizontal');
    box.style.backgroundImage = `url('${img}')`;
    const eventListener = () => {
      box.style.backgroundImage = '';
    };
    event.target.addEventListener('mouseout', eventListener);
  });
}

// Function for animating ship preview everything it hovers onto a box or out of it
function animationEvent(event, boardBoxes, player, ship) {
  const body = shipBodyInPreview(
    event.currentTarget.dataset.pos
      .split(',')
      .map((x) => parseInt(x, 10)),
    ship,
  );

  const isShipOverflowing = body.find((pos) => pos[1] > 9);
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
}

export {
  addAnimationEvent,
  removeAnimationEvent,
};
