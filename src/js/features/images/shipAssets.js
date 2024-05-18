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

const shipImagesFile = importAll(require.context('../../../assets/ships', false, /\.png$/));

export default function loadShipPart(type, num) {
  return shipImagesFile[`${type}_0${num}`];
}
