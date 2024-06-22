import { convertCordToIndex, getBoardBoxes } from '../utilities';
import loadShipPart from '../images/shipAssets';
import Direction from '../../objects/Direction';

/* eslint-disable no-param-reassign */
function getDirClassName(dir) {
  switch (dir) {
    case Direction.PositiveX:
      return 'x-pos';
    case Direction.NegativeY:
      return 'y-neg';
    case Direction.NegativeX:
      return 'x-neg';
    case Direction.PositiveY:
      return 'y-pos';
    default:
      return null;
  }
}

export function getDirClassNameFromShip(ship) {
  const { dir } = ship;
  const dirClassName = getDirClassName(dir);
  return dirClassName;
}

/**
 *
 * @param {*} element
 * @param {*} img
 * @param {*} givenDir
 */
export function renderShipImage(element, img, dirClassName) {
  element.style.backgroundImage = `url('${img}')`;
  element.classList.add(dirClassName);
}

export function renderShip(cords, boardBoxes, ship) {
  const dirClassName = getDirClassNameFromShip(ship);
  cords.forEach((cord, index) => {
    const boxIndex = convertCordToIndex(cord);
    const element = boardBoxes[boxIndex];
    const img = loadShipPart(ship.filename, index + 1);
    renderShipImage(element, img, dirClassName);
  });
}

// load all the ships on the board when called
export function renderShips(player) {
  const boardBoxes = getBoardBoxes(player);

  // Load ship
  player.board.list.forEach((ship) => {
    const shipBodyCoordinate = ship.position;
    renderShip(shipBodyCoordinate, boardBoxes, ship);
  });

  // Load Misses

  // Load Hits (Current Player POV)
}

// unload all the ships on a board
export function unrenderShips(player) {
  const boxes = getBoardBoxes(player);
  boxes.forEach((box) => {
    box.style.backgroundImage = '';
    // remove directions classes applied to loaded board
    box.classList.remove(...Direction.list);
  });
}
