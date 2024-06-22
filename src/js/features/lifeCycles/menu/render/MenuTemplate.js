import logo from "@/public/logo.svg";
import "@/style/main-menu.scss";

const MenuTemplate = `
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

export default MenuTemplate;
