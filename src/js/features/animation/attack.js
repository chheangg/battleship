import { getAttackModeAsset } from "../images/attackAssets";

export function attackHoverEvent(_event, box) {
  const target = getAttackModeAsset(0);
  box.appendChild(target);
}

export function attackWithdrawEvent(event, box) {
  const target = getAttackModeAsset(0);
  const className = `.${target.className}`;
  const targetToRemove = box.querySelector(className);
  if (targetToRemove) {
    targetToRemove.remove();
  }
}
