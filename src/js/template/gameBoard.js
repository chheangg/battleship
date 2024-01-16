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
      <button id="rotate-btn">
        <img src="${rotateIcon}"/>
        <span>
          Rotate
        </span>
      </button>
    </div>
  </div>
`;

export const playerInfoComponent = ({ name }) => `
  <div class="player-info">
    <div class="player-info-container">
      <p>${name}</p>
      <div class="ship-info-container">
      </div>
    </div>
  </div>
`;

const cells = Array(10).fill().map((_c, i) => `
<tr>
  <td data-pos='${i},0' class="left-corner ${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},1' class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},2' class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},3' class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},4' class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},5' class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},6' class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},7' class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},8' class="${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
  <td data-pos='${i},9' class="right-corner ${i === 0 ? 'top-corner' : ''}${i === 9 ? 'bottom-corner' : ''}"></td>
</tr>
`);

export const gameBoardTemplate = (gameObject, infoHeader) => `
  <div class="game-board">
    <div class="info-header">
      <div class="info-container">
        ${infoHeader}
      </div>
    </div>
    <div class="game-board-container">
      <div class="first-player">
        ${playerInfoComponent(gameObject.playerOne)}
        <table>
          <tbody>
            ${cells.join('')}
          </tbody>
        </table>
      </div>
      <div class="second-player">
        ${playerInfoComponent(gameObject.playerTwo)}
        <table>
          <tbody>
            ${cells.join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>
`;
