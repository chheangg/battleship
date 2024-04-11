import { getAttackAsset } from '../boardAssetLoader';

export function attackHoverEvent(_event, box) {
  const target = getAttackAsset(0);
  box.appendChild(target);
}

export function attackWithdrawEvent(event, box) {
  const target = getAttackAsset(0);
  const className = `.${target.className}`;
  const targetToRemove = box.querySelector(className);
  if (targetToRemove) {
    targetToRemove.remove();
  }
}
