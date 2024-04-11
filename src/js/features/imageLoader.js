/**
 * This is a utility function for anything related to
 * orientation or direction, ship images animation,
 * placement, and anything images in general.
 */

/* eslint-disable no-param-reassign */
import { dirs, getDirIndex } from './direction';

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

function getDirClassName(dir) {
  switch (dir) {
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
function renderShipImg(element, img, givenDir = null) {
  const dirIndex = getDirIndex();
  const dir = givenDir || dirs[dirIndex];
  const dirClassName = getDirClassName(dir);

  element.style.backgroundImage = `url('${img}')`;
  const lastDirClassName = dirs
    .map((d) => getDirClassName(d))
    .find((d) => element.classList.contains(d));
  element.classList.remove(lastDirClassName);
  element.classList.add(dirClassName);
}

// eslint-disable-next-line import/prefer-default-export
export {
  loadIcon,
  renderShipImg,
};
