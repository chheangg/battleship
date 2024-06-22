import { getBoardBoxes, convertCordToIndex } from "@/js/features/utilities";
import { getAttackModeAsset } from "@/js/features/images/attackAssets";

// unload Fog of War
export function unrenderFOW(player) {
  const boardBoxes = getBoardBoxes(player);
  for(const box of boardBoxes) {
    box.replaceChildren();
  }
}

// load Fog of War
export function renderFOW(player) {
  const boardBoxes = getBoardBoxes(player);
  const fowSample = getAttackModeAsset(1);
  const missedSample = getAttackModeAsset(2);
  const fowClassName = `.${fowSample.className}`;
  const missedClassName = `.${missedSample.className}`;

  const containsAsset =
		boardBoxes[0].querySelector(fowClassName) ||
		boardBoxes[0].querySelector(missedClassName);

  if (containsAsset) {
    return;
  }

  for (const missedCord of player.board.misses) {
    const missedIndex = convertCordToIndex(missedCord);

    if (boardBoxes[missedIndex].querySelector(missedClassName)) continue;

    const missedIcon = getAttackModeAsset(2);
    boardBoxes[missedIndex].appendChild(missedIcon);
  }


  for (const box of boardBoxes) {
    if (box.querySelector(missedClassName)) continue;
    const fowIcon = getAttackModeAsset(1);
    box.appendChild(fowIcon);
  }
}