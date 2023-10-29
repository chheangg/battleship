const startScreen = `
<main class="start-bg">
<header class='logo-header'>
  <h1>BATTLESHIP</h1>
</header>
<div class='option-body'>
  <ul class='options'>
    <li>
      <div class="btn-wrapper">
        <button class='single-player gamemode'>
          Singleplayer
        </button>
      </div>
    </li>
    <li>
      <div class="btn-wrapper">
        <button class='multi-player gamemode'>
          Multiplayer
        </button>
      </div>
    </li>
  </ul>
</div>
</main>
`;

// Generate start screen and add eventListeners!
export default function restartGame() {
  document.body.innerHTML = startScreen;
}
