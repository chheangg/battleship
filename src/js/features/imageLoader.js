/**
 * This is a utility function for anything related to
 * orientation or direction, ship images animation,
 * placement, and anything images in general.
 */

/* eslint-disable no-param-reassign */

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
function renderShipImg(element, img, dirClassName) {
  element.style.backgroundImage = `url('${img}')`;
  element.classList.add(dirClassName);
}

// eslint-disable-next-line import/prefer-default-export
export {
  loadIcon,
  renderShipImg,
};
