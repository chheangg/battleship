/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import nameCollectStage from './utilities/name';
import mainLoop from './main';

function startGame() {
  // Starting page
  const singlePlayerBtn = document.querySelector('.single-player');
  const multiPlayerbtn = document.querySelector('.multi-player');
  // Create a bot and a player and start the game
  singlePlayerBtn.addEventListener('click', () => {
    const callback = (names) => {
      mainLoop(false, false, names, startGame);
    };
    // Collect name
    nameCollectStage(false, callback);
  });

  // Create two players logic and start the game
  multiPlayerbtn.addEventListener('click', () => {
    const callback = (names) => {
      mainLoop(true, false, names, startGame);
    };
    // Collect names
    nameCollectStage(true, callback);
  });
}

startGame();
