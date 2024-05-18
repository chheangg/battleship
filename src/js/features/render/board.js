/* eslint-disable no-param-reassign */
import { gameBoardTemplate } from '../../template/gameBoard';
import { getBoardBoxes, convertCordToIndex } from '../../utilities';
import { getAttackModeAsset } from '../images/attackAssets';
import { rotateShip } from '../direction';

export default function renderGameboard(gameObject, infoHeader) {
  document.body.innerHTML = gameBoardTemplate(gameObject, infoHeader);
  const rotateBtn = document.querySelector('#rotate-btn');
  rotateBtn.addEventListener('click', rotateShip);
}

// unload Fog of War
export function unrenderFOW(player) {
  const boardBoxes = getBoardBoxes(player);
  boardBoxes.forEach((box) => {
    box.replaceChildren();
  });
}

// load Fog of War
export function renderFOW(player) {
  const boardBoxes = getBoardBoxes(player);
  const fowSample = getAttackModeAsset(1);
  const missedSample = getAttackModeAsset(2);
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

    const missedIcon = getAttackModeAsset(2);
    boardBoxes[missedIndex].appendChild(missedIcon);
  });

  boardBoxes.forEach((box) => {
    if (box.querySelector(missedClassName)) return;
    const fowIcon = getAttackModeAsset(1);
    box.appendChild(fowIcon);
  });
}
