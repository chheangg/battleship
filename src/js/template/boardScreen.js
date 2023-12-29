export const boardScreen = (playerOne, playerTwo) => `
<main>
  <div class='top-header'>
    <div class='top-header-container'>
    </div>
  </div>
  <div class='main-content'>
    <div class='left-content'>
      <div class='playername'>${playerOne}</div>
      <div class='board-container'>
        <div class='ships-container'></div>
        <div class='board'></div>
      </div>
    </div>
    <div class='right-content'>
      <div class='playername'>${playerTwo}</div>
      <div class='board-container'>
        <div class='ships-container'></div>
        <div class='board'></div>
      </div>
    </div>
  </div>
</main>
`;

export const placementContainer = () => `
<div class="placement-container">
  <div>Ship - {shipType}</div>
  <div>Rotate</div>
</div>
`;
