import { convertCordToIndex, getBoardBoxes } from '../../utilities';
import loadShipPart from '../images/shipAssets';
import { dirs } from '../direction';
/* eslint-disable no-param-reassign */
function getDirClassName(dir) {
  switch (dir) {
    case 0:
      return 'x-pos';
    case 1:
      return 'y-neg';
    case 2:
      return 'x-neg';
    case 3:
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
    const cords = ship.position;
    renderShip(cords, boardBoxes, ship);
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
    box.classList.remove(...dirs);
  });
}
