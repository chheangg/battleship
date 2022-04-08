/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { mainLoop } from './app';
import { Player } from './object';

function loadShip(player, side) {
  player.board.list.forEach((ship) => {
    ship.position.forEach((cord) => {
      console.log(document.getElementsByClassName(`${side}-content`)[0]);
      [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
        if (box.dataset.pos === cord.join()) {
          box.classList.add('ship');
        }
      });
    });
  });
}

const boardLoad = (function handler() {
  function generatePage() {
    document.body.textContent = '';
    document.body.innerHTML = "<div class='top-container'><p>Turn: PLAYER 1</p></div>"
      + "<div class='main-content'><div class='left-content'><div class='playername'>PLAYER 1 (you)</div><div class='board-container'><div class='ships-container'></div><div class='board'></div></div></div><div class='right-content'><div class='playername'>PLAYER 2 (bot)</div><div class='board-container'><div class='ships-container'></div><div class='board'></div></div></div></div>";
  }
  function generateBox() {
    [...document.getElementsByClassName('board')].forEach((board) => {
      const start = [0, 0];
      Array(100)
        .fill()
        .forEach(() => {
          const box = document.createElement('div');
          box.className = 'box';
          box.dataset.pos = start;
          board.appendChild(box);
          if (start[1] <= 9) {
            start[1]++;
          }
          if (start[1] === 10) {
            start[1] = 0;
            start[0]++;
          }
        });
    });
  }
  function assignBox() {
    [...document.getElementsByClassName('box')].forEach((box) => {
      box.addEventListener('click', (obj) => {
        const coordinate = obj.target.getAttribute('data-pos')
          .split(',')
          .map((x) => parseInt(x, 10));
        const side = obj.target.getAttribute('data-side');
        let complement;
        if (side === 'left') {
          complement = 'right';
        }
        if (side === 'right') {
          complement = 'left';
        }
        mainLoop.attack(coordinate, side, Player.list);
        console.log(Player.list);
        mainLoop.botAttack(complement, Player.list);
      });
    });
  }
  function assignParent() {
    ['left', 'right'].forEach((side) => {
      const boxes = document.getElementsByClassName(`${side}-content`)[0]
        .getElementsByClassName('box');
      [...boxes].forEach((box) => {
        box.dataset.side = side;
      });
    });
  }

  return {
    generatePage, generateBox, assignParent, assignBox,
  };
}());

function loadOption() {
  const container = document.getElementsByClassName('top-container')[0];
  const option = document.createElement('div');
  option.innerHTML = "<div class='dir-option'><label for='horizontal'>Horizontal</label><input type='radio' class='dir-option' value='horizontal' id='horizontal' name='option' checked><label for='vertical'>Vertical</label><input type='radio' class='dir-option' value='vertical' id='vertical' name='option'></div>";
  container.appendChild(option);
}

function mainLoad() {
  boardLoad.generatePage();
  boardLoad.generateBox();
  boardLoad.assignParent();
}

export {
  mainLoad, loadShip, loadOption, boardLoad,
};
