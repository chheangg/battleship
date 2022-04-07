import 'normalize.css';
import '../style/style.scss';
import { Player } from './object';
import { mainLoad } from './pageLoad';

[...document.getElementsByTagName('button')].forEach((btn) => {
  btn.addEventListener('click', (obj) => {
    if (obj.target.className === 'single-player') {
      const playerX = Player.create(false);
      const playerY = Player.create(true);
      playerX.board.place('patrol', 'horizontal', [0, 0]);
      playerX.board.place('submarine', 'vertical', [2, 3]);
      playerX.board.place('destroyer', 'horizontal', [5, 5]);
      playerX.board.place('battleship', 'horizontal', [6, 2]);

      playerY.board.place('patrol', 'horizontal', [0, 0]);
      playerY.board.place('submarine', 'vertical', [2, 3]);
      playerY.board.place('destroyer', 'horizontal', [5, 5]);
      playerY.board.place('battleship', 'horizontal', [6, 2]);
      playerY.board.place('carrier', 'vertical', [1, 8]);
    }
    if (obj.target.className === 'multi-player') {
      const playerX = Player.create(false);
      const playerY = Player.create(false);
      playerX.board.place('patrol', 'horizontal', [0, 0]);
      playerX.board.place('submarine', 'vertical', [2, 3]);
      playerX.board.place('destroyer', 'horizontal', [5, 5]);
      playerX.board.place('battleship', 'horizontal', [6, 2]);

      playerY.board.place('patrol', 'horizontal', [0, 0]);
      playerY.board.place('submarine', 'vertical', [2, 3]);
      playerY.board.place('destroyer', 'horizontal', [5, 5]);
      playerY.board.place('battleship', 'horizontal', [6, 2]);
      playerY.board.place('carrier', 'vertical', [1, 8]);
    }
    mainLoad();
  });
});
