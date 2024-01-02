/* eslint-disable import/prefer-default-export */
import logo from '../../public/logo.svg';
import '../../style/main-menu.scss';

export const startScreen = `
<div class="main-menu">
  <div class="main-menu-container">
    <div class="main-menu-wrapper">
      <div class="logo-container">
        <img src="${logo}" alt="Battleship" />
      </div>
      <div class="credit-container">
        <p>Made by <span>Chheang</span></p>
      </div>
      <div class="options-container">
        <button id="singleplayer">Singleplayer</button>
        <button id="multiplayer">Multiplayer</button>
      </div>
    </div>
  </div>
</div>
`;
