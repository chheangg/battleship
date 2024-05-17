/* eslint-disable no-param-reassign */
import { gameBoardTemplate } from '../../template/gameBoard';
import { getBoardBoxes, convertCordToIndex } from '../../utilities';
import { getAttackAsset } from '../boardAssetLoader';
import { loadIcon, renderShipImg, getDirClassNameFromShip } from '../imageLoader';
import { dirs, rotateShip } from '../direction';

export default function renderGameboard(gameObject, infoHeader) {
  document.body.innerHTML = gameBoardTemplate(gameObject, infoHeader);
  const rotateBtn = document.querySelector('#rotate-btn');
  rotateBtn.addEventListener('click', rotateShip);
}

// unload Fog of War
function unrenderIcons(player) {
  const boardBoxes = getBoardBoxes(player);
  boardBoxes.forEach((box) => {
    box.replaceChildren();
  });
}

// load Fog of War
export function renderFOW(player) {
  const boardBoxes = getBoardBoxes(player);
  const fowSample = getAttackAsset(1);
  const missedSample = getAttackAsset(2);
  const fowClassName = `.${fowSample.className}`;
  const missedClassName = `.${missedSample.className}`;

  const containsAsset = boardBoxes[0].querySelector(fowClassName)
  || boardBoxes[0].querySelector(missedClassName);

  if (containsAsset) {
    return;
  }

  player.board.misses.forEach((cord) => {
    const missedIndex = convertCordToIndex(cord);

    if (boardBoxes[missedIndex].querySelector(missedClassName)) return;

    const missedIcon = getAttackAsset(2);
    boardBoxes[missedIndex].appendChild(missedIcon);
  });

  boardBoxes.forEach((box) => {
    if (box.querySelector(missedClassName)) return;
    const fowIcon = getAttackAsset(1);
    box.appendChild(fowIcon);
  });
}

export function renderShip(cords, boardBoxes, ship) {
  const dirClassName = getDirClassNameFromShip(ship);
  cords.forEach((cord, index) => {
    const boxIndex = convertCordToIndex(cord);
    const element = boardBoxes[boxIndex];
    const img = loadIcon(ship.filename, index + 1);
    renderShipImg(element, img, dirClassName);
  });
}

// load all the ships on the board when called
export function renderShips(player) {
  // Unload Fog of War
  unrenderIcons(player);

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
