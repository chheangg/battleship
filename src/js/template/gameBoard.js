/* eslint-disable import/prefer-default-export */
import '../../style/game-board.scss';
import rotateIcon from '../../assets/rotate.svg';

export const shipPlacementComponent = (shipImg) => `
  <div class="ship-placement-container">
    <div class="ship-preview-info-container">
      Ship - 
      ${shipImg || ''}
    </div>
    <div class="ship-orient-container">
      <button>
        <img src="${rotateIcon}"/>
        <span>
          Rotate
        </span>
      </button>
    </div>
  </div>
`;

export const playerInfoComponent = (_name, _ships, _health) => `
  <div class="player-info">
    <div class="player-info-container">
      <p>Chheang</p>
      <div class="ship-info-container">
      </div>
    </div>
  </div>
`;

const cells = Array(10).fill().map((_c, i) => `
<tr>
  <td class="left-corner ${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td class="right-corner ${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
</tr>
`);

export const gameBoardTemplate = (infoHeader) => `
  <div class="game-board">
    <div class="info-header">
      <div class="info-container">
        ${infoHeader}
      </div>
    </div>
    <div class="game-board-container">
      <div class="first-player">
        ${playerInfoComponent()}
        <table>
          <tbody>
            ${cells.join('')}
          </tbody>
        </table>
      </div>
      <div class="second-player">
        ${playerInfoComponent()}
        <table>
          <tbody>
            ${cells.join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>
`;
