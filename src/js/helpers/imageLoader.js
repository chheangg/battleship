/**
 * This is a utility function for anything related to
 * orientation or direction, ship images animation,
 * placement, and anything images in general.
 */

/* eslint-disable no-param-reassign */
import Ship, { dirs } from '../objects/ship';

let dirIndex = 0;

function getDirIndex() { return dirIndex; }

function rotateShip() {
  dirIndex += 1;
  if (dirIndex >= dirs.length) {
    dirIndex = 0;
  }
}

// Import all ship images
function importAll(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace(/(.\/|\.png$)/g, '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../../assets/ships', false, /\.png$/));

function loadIcon(type, num) {
  return images[`${type}_0${num}`];
}

function placeImage(element, img, givenDir = null) {
  const dir = givenDir || dirs[dirIndex];
  element.style.backgroundImage = `url('${img}')`;
  const lastDir = dirs.find((d) => element.classList.contains(d));
  element.classList.remove(lastDir);
  element.classList.add(dir);
}

function convertCordToIndex(cord) {
  return cord[0] * 10 + cord[1];
}

function placeShip(cords, boardBoxes, ship) {
  cords.forEach((cord, index) => {
    const boxIndex = convertCordToIndex(cord);
    const box = boardBoxes[boxIndex];
    const img = loadIcon(ship.filename, index + 1);
    const { dir } = ship;
    placeImage(box, img, dir);
  });
}

function buildShipBody(cord, ship) {
  const start = [...cord];
  const dir = dirs[dirIndex];
  const body = Ship.buildShipCord(ship.length, start, dir);
  return body;
}

// eslint-disable-next-line import/prefer-default-export
export {
  loadIcon, placeShip, buildShipBody, rotateShip, getDirIndex, dirs, convertCordToIndex,
};
