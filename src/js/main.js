/* eslint-disable prefer-arrow-callback */
import 'normalize.css';
import '../style/style.scss';
import { Player } from './object';
import {
  loadShip, loadOption, mainLoad, initializeShip, boardLoad
} from './pageLoad';

const ships = ['patrol', 'submarine', 'destroyer', 'battleship', 'carrier'];
let playerX;
let playerY;

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

function initializeEvent(playerOne, playerTwo, cord, side) {
  if (playerOne.board.list.length !== 5 && side === 'left') {
    initializeShip(playerOne, ships[playerOne.board.list.length], cord);
  }
  if (playerOne.board.list.length === 5 && side === 'right') {
    initializeShip(playerTwo, ships[playerTwo.board.list.length], cord);
  }
  if (playerTwo.board.list.length === 5) {
    [...document.getElementsByClassName('box')].forEach((box) => {
      box.removeEventListener('click', initializeStage);
    });
    loadShip(Player.list);
    boardLoad.assignBox();
  }
  console.log(playerOne, playerTwo);
}

function initializeStage(unit) {
  const cord = unit.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  initializeEvent(playerX, playerY, cord, unit.target.dataset.side);
}

// if (playerX.board.list.length === 5 && playerY.board.list.length === 5) {
//   btn.removeEventListener('click', initializeEvent);
//   boardLoad.assignBox();
//   loadShip(Player.list);
// }
