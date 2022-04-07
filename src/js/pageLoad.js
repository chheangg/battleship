/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { Player } from './object';
import { mainLoop } from './app';

const boardLoad = (function handler() {
  function generatePage() {
    document.body.textContent = '';
    document.body.innerHTML = "<div class='turn-container'><p>Turn: PLAYER 1</p></div>"
      + "<div class='main-content'><div class='left-content'><div class='playername'>PLAYER 1 (you)</div><div class='board-container'><div class='ships-container'></div><div class='board'></div></div></div><div class='right-content'><div class='playername'>PLAYER 2 (bot)</div><div class='board-container'><div class='ships-container'></div><div class='board'></div></div></div></div>";
  }
  function loadShip(list) {
    list.forEach((player) => {
      player.board.list.forEach((ship) => {
        ship.position.forEach((cord) => {
          [...document.getElementsByClassName('box')].forEach((box) => {
            if (box.dataset.pos === cord.join()) {
              box.classList.add('ship');
            }
          });
        });
      });
    });
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

  function load() {
    generatePage();
    generateBox();
    assignParent();
    assignBox();
    loadShip(Player.list);
  }

  return { load };
}());

function mainLoad() {
  boardLoad.load();
}

export { mainLoad, boardLoad };
