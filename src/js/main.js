import 'normalize.css';
import '../style/style.scss';
import { Player } from './object';
import { mainLoad } from './pageLoad';
import { mainLoop } from './app'

const playerX = Player.create(false);
const playerY = Player.create(false);
playerX.board.place('patrol', 'horizontal', [0, 0]);
playerX.board.place('submarine', 'vertical', [2, 3]);
playerX.board.place('destroyer', 'horizontal', [5, 5]);
playerX.board.place('battleship', 'horizontal', [6, 2]);
console.log(playerX.board.place('carrier', 'vertical', [1, 8]));

playerY.board.place('patrol', 'horizontal', [0, 0]);
playerY.board.place('submarine', 'vertical', [2, 3]);
playerY.board.place('destroyer', 'horizontal', [5, 5]);
playerY.board.place('battleship', 'horizontal', [6, 2]);
playerY.board.place('carrier', 'vertical', [1, 8]);
mainLoad();

[...document.getElementsByClassName('box')].forEach((box) => {
  box.addEventListener('click', (obj) => {
    const coordinate = obj.target.getAttribute('data-pos')
      .split(',')
      .map((x) => parseInt(x, 10));
    const side = obj.target.getAttribute('data-side');
    mainLoop.click(coordinate, side, Player.list);
  });
});
