import "@/style/game-board.scss";

export const playerInfoComponent = ({ name }) => `
  <div class="player-info">
    <div class="player-info-container">
      <p>${name}</p>
      <div class="ship-info-container">
      </div>
    </div>
  </div>
`;

const cells = Array(10)
  .fill()
  .map(
    (_c, i) => `
<tr>
  <td data-pos='0,${i}' class="left-corner ${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='1,${i}' class="${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='2,${i}' class="${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='3,${i}' class="${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='4,${i}' class="${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='5,${i}' class="${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='6,${i}' class="${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='7,${i}' class="${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='8,${i}' class="${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
  <td data-pos='9,${i}' class="right-corner ${i === 0 ? "top-corner" : ""}${i === 9 ? "bottom-corner" : ""}"></td>
</tr>
`,
  );

export default (gameObject, infoHeader) => `
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
            ${cells.join("")}
          </tbody>
        </table>
      </div>
      <div class="second-player">
        ${playerInfoComponent(gameObject.playerTwo)}
        <table>
          <tbody>
            ${cells.join("")}
          </tbody>
        </table>
      </div>
    </div>
  </div>
`;
