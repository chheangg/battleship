/**
 * This is a utility function for anything related to
 * orientation or direction, ship images animation,
 * placement, and anything images in general.
 */

/* eslint-disable no-param-reassign */
const dirs = ['x-pos', 'y-neg', 'x-neg', 'y-pos'];
let dirIndex = 0;

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

function placeImage(element, img) {
  const dir = dirs[dirIndex];
  element.style.backgroundImage = `url('${img}')`;
  const lastDir = dirs.find((d) => element.classList.contains(d));
  element.classList.remove(lastDir);
  element.classList.add(dir);
}

function buildShipBody(cord, ship) {
  const start = [...cord];
  const dir = dirs[dirIndex];
  const body = Array(ship.length)
    .fill()
    .map((_pos, index) => {
      switch (dir) {
        case 'x-pos':
          return [start[0], start[1] + index];
        case 'x-neg':
          return [start[0], start[1] - index];
        case 'y-pos':
          return [start[0] - index, start[1]];
        case 'y-neg':
          return [start[0] + index, start[1]];
        default:
          throw new Error('Error: Invalid Coord Index');
      }
    });
  return body;
}

// eslint-disable-next-line import/prefer-default-export
export {
  loadIcon, placeImage, buildShipBody, rotateShip,
};
