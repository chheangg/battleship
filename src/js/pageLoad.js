/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { Player } from './object';

const boardLoad = (function handler() {
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
          box.className = `box`;
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
    generateBox();
    assignParent();
    loadShip(Player.list);
  }

  return { load };
}());

function mainLoad() {
  boardLoad.load();
}

export { mainLoad, boardLoad };
