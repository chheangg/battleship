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
  console.log(player);
}

function initializeEvent(playerOne, playerTwo, cord, side) {
  const bot = Player.list.filter((x) => x.isBot)[0];
  if (bot) {
    while (bot.board.list.length < 5) {
      const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      initializeShip(bot, ships[bot.board.list.length], rand);
    }
  }
  if (playerOne.board.list.length !== 5 && side === 'left') {
    initializeShip(playerOne, ships[playerOne.board.list.length], cord);
  }
  if (playerOne.board.list.length === 5 && playerTwo.board.list.length !== 5  && side === 'right') {
    initializeShip(playerTwo, ships[playerTwo.board.list.length], cord);
  }
  if (playerOne.board.list.length === 5 && playerTwo.board.list.length === 5) {
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
