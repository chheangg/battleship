/* eslint-disable import/prefer-default-export */
import targetIcon from '../../assets/target.svg';

const attackAssets = [
  {
    src: targetIcon,
    className: 'target-icon',
  },
];

export function getAttackAsset(index) {
  const attackAsset = attackAssets[index];
  const imageElement = new Image();

  imageElement.src = attackAsset.src;
  imageElement.className = attackAsset.className;

  return imageElement;
}
