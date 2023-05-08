const startScreen = `
<header class='logo-header'>
<h1>BATTLESHIP</h1>
</header>
<div class='option-body'>
<ul class='options'>
  <li>
    <button class='single-player gamemode'>
      <img class='icon' src='e69b99297f1b41504b71.svg'>
      Singleplayer
    </button>
  </li>
  <li>
    <button class='multi-player gamemode'>
      <img class='icon' src='e69b99297f1b41504b71.svg'>
      Multiplayer
    </button>
  </li>
</ul>
</div>
`;

// Generate start screen and add eventListeners!
export default function restartGame() {
  document.body.innerHTML = startScreen;
}
