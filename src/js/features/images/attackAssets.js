/* eslint-disable import/prefer-default-export */
import targetIcon from '../../../assets/target.svg';
import waveIcon from '../../../assets/board/fog.svg';
import missedOppIcon from '../../../assets/board/missed.svg';

const attackAssets = [
  {
    src: targetIcon,
    className: 'target-icon',
  },
  {
    src: waveIcon,
    className: 'fog-icon',
  },
  {
    src: missedOppIcon,
    className: 'missed-opp-icon',
  },
];

export function getAttackModeAsset(index) {
  const attackAsset = attackAssets[index];
  const imageElement = new Image();

  imageElement.src = attackAsset.src;
  imageElement.className = attackAsset.className;

  return imageElement;
}
