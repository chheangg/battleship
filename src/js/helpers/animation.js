/* eslint-disable no-plusplus */
import _ from 'underscore';
import { loadIcon } from './imageLoader';
import { loadBoard } from './pageLoad';
import { removeAllEventListener } from './utilities';

function shipBodyInPreview(cord, player, ship) {
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
function shipPreview(cord, boardBoxes, player, ship, event) {
  // Get axis information of ship
  // const dirOptions = document.getElementsByClassName('dir-option');
  const axisOption = 'horizontal';
  cord.forEach((pos, index) => {
    const box = [...boardBoxes][pos[0] * 10 + pos[1]];
    const img = loadIcon(ship.name, index + 1, axisOption);
    box.style.backgroundImage = `url('${img}')`;
    const eventListener = () => {
      box.style.backgroundImage = '';
    };
    event.target.addEventListener('mouseout', eventListener);
    // Remove all event listener once a cell is clicked
    event.target.addEventListener('click', () => {
      boardBoxes.forEach((cell) => {
        removeAllEventListener(cell);
      });
      loadBoard(player, player.isTurn ? 'left' : 'right');
    });
  });
}

// Function for animating ship preview everything it hovers onto a box or out of it
function animationEvent(event, boardBoxes, player, ship) {
  const body = shipBodyInPreview(
    event.currentTarget.dataset.pos
      .split(',')
      .map((x) => parseInt(x, 10)),
    player,
    ship,
  );

  const isShipOverflowing = body.find((pos) => pos[1] >= 10);
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

  shipPreview(body, boardBoxes, player, ship, event);
}

// Function for adding animation
function addAnimationEvent(add, boardBoxes, player, ship) {
  const eventListener = (event) => {
    animationEvent(event, boardBoxes, player, ship);
  };
  if (add) {
    boardBoxes.forEach((box) => {
      box.addEventListener('mouseover', eventListener);
    });
    return;
  }
  boardBoxes.forEach((box) => {
    box.removeEventListener('mouseover', eventListener);
  });
}

export default addAnimationEvent;
