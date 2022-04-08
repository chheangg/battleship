/* eslint-disable no-plusplus */
/* eslint-disable prefer-arrow-callback */
import 'normalize.css';
import '../style/style.scss';
import { Player } from './object';
import {
  loadShip, loadOption, mainLoad, boardLoad,
} from './pageLoad';

const ships = ['patrol', 'submarine', 'destroyer', 'battleship', 'carrier'];
let playerX;
let playerY;
let currentPreview;
let board;

function shipPreviewExpander(cord) {
  const dirArr = document.getElementsByClassName('dir-option');
  const axis = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  let length;
  switch (currentPreview.length) {
    case 0:
      length = 2;
      break;
    case 1:
      length = 3;
      break;
    case 2:
      length = 3;
      break;
    case 3:
      length = 4;
      break;
    case 4:
      length = 5;
      break;
    default:
      break;
  }
  const start = [...cord];
  const body = Array(length)
    .fill()
    .map(() => {
      if (axis === 'horizontal') {
        return [start[0], start[1]++];
      }
      if (axis === 'vertical') {
        return [start[0]++, start[1]];
      }
    });
  return body;
}

function shipPreview(cord, target) {
  board.forEach((box) => {
    cord.forEach((coordinate) => {
      if (box.dataset.pos === coordinate.join()) {
        const setAnimation = setInterval(() => {
          box.classList.add('ghost-ship');
        }, 100);
        const clearAnimation = setInterval(() => {
          box.classList.remove('ghost-ship');
        }, 600);
        target.addEventListener('mouseout', () => {
          clearInterval(setAnimation);
          clearInterval(clearAnimation);
          box.classList.remove('ghost-ship');
        });
      }
    });
  });
}

function shipPlaceAnimation(box) {
  const shipBody = shipPreviewExpander(box.target.dataset.pos
    .split(',')
    .map((x) => parseInt(x, 10)));
  shipPreview(shipBody, box.target);
}

function initializeShip(player, ship, cord) {
  let dirArr;
  let dir;
  if (!player.isBot) {
    dirArr = document.getElementsByClassName('dir-option');
    dir = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  }
  if (player.isBot) {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
      dir = 'horizontal';
    }
    if (rand === 1) {
      dir = 'vertical';
    }
  }
  player.board.place(ship, dir, cord);
}

function initializeEvent(playerOne, playerTwo, cord, side) {
  const bot = Player.list.filter((x) => x.isBot)[0];
  if (bot) {
    while (bot.board.list.length < 5) {
      const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      initializeShip(bot, ships[bot.board.list.length], rand);
    }
  }

  if (playerOne.board.list.length < 5 && side === 'left') {
    initializeShip(playerOne, ships[playerOne.board.list.length], cord);
  }

  if (playerOne.board.list.length === 5) {
    currentPreview = playerTwo.board.list;
    board = [...document.getElementsByClassName('right-content')[0].getElementsByClassName('box')];

    [...document.getElementsByClassName('left-content')[0].getElementsByClassName('box')].forEach((box) => {
      box.removeEventListener('mouseover', shipPlaceAnimation);
    });
    [...document.getElementsByClassName('right-content')[0].getElementsByClassName('box')].forEach((box) => {
      box.addEventListener('mouseover', shipPlaceAnimation);
    });
  }

  if (playerOne.board.list.length === 5 && playerTwo.board.list.length < 5 && side === 'right') {
    initializeShip(playerTwo, ships[playerTwo.board.list.length], cord);
  }

  if (playerOne.board.list.length === 5 && playerTwo.board.list.length === 5) {
    [...document.getElementsByClassName('right-content')[0].getElementsByClassName('box')].forEach((box) => {
      box.removeEventListener('mouseover', shipPlaceAnimation);
    });
    [...document.getElementsByClassName('box')].forEach((box) => {
      box.removeEventListener('click', initializeStage);
    });
    loadShip(playerOne, 'left');
    loadShip(playerTwo, 'right');
    boardLoad.assignBox();
  }
}

function initializeStage(unit) {
  const cord = unit.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  initializeEvent(playerX, playerY, cord, unit.target.dataset.side);
  loadShip(playerX, 'left');
  loadShip(playerY, 'right');
}

[...document.getElementsByClassName('gamemode')].forEach((btn) => {
  btn.addEventListener('click', (obj) => {
    mainLoad();
    loadOption();
    if (obj.target.classList.contains('single-player')) {
      playerX = Player.create(false);
      playerY = Player.create(true);
    }
    if (obj.target.classList.contains('multi-player')) {
      playerX = Player.create(false);
      playerY = Player.create(false);
    }

    currentPreview = playerX.board.list;
    board = [...document.getElementsByClassName('left-content')[0].getElementsByClassName('box')];

    [...document.getElementsByClassName('left-content')[0].getElementsByClassName('box')].forEach((box) => {
      box.addEventListener('mouseover', shipPlaceAnimation);
    });
    [...document.getElementsByClassName('box')].forEach((box) => {
      box.addEventListener('click', initializeStage);
    });
  });
});

// if (playerX.board.list.length === 5 && playerY.board.list.length === 5) {
//   btn.removeEventListener('click', initializeEvent);
//   boardLoad.assignBox();
//   loadShip(Player.list);
// }
