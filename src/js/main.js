/* eslint-disable no-plusplus */
/* eslint-disable prefer-arrow-callback */
import 'normalize.css';
import '../style/style.scss';
import { Player } from './object';
import {
  loadShip, loadOption, mainLoad, boardLoad,
} from './pageLoad';
import { loadIcon } from './imageLoader';


// Refactor into the game object
const ships = ['patrol', 'submarine', 'destroyer', 'battleship', 'carrier'];
let playerX;
let playerY;
let currentPreview;
let board;

function shipPreviewExpander(cord) {
  const dirArr = document.getElementsByClassName('dir-option');
  const axis = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  let length;
  let type;
  switch (currentPreview.length) {
    case 0:
      length = 2;
      type = 'patrol';
      break;
    case 1:
      length = 3;
      type = 'submarine';
      break;
    case 2:
      length = 3;
      type = 'destroyer';
      break;
    case 3:
      length = 4;
      type = 'battleship';
      break;
    case 4:
      length = 5;
      type = 'carrier';
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
  const overlap = body
    .some((part) => currentPreview
      .some((ship) => ship.position
        .some((pos) => pos[0] === part[0] && pos[1] === part[1])));
  return {
    body,
    type,
    overlap,
  };
}

function shipPreview(cord, type, target) {
  let registered = false;
  board.forEach((box) => {
    cord.forEach((coordinate) => {
      if (box.dataset.pos === coordinate.join()) {
        const img = loadIcon(type, cord.indexOf(coordinate) + 1);
        box.style.backgroundImage = `url('${img}')`;

        target.addEventListener('mouseout', () => {
          if (registered === false) {
            box.style.backgroundImage = '';
          }
        }, { once: true });
        box.addEventListener('click', () => {
          registered = true;
        });
      }
    });
  });
}

function shipPlaceAnimation(start) {
  const ship = shipPreviewExpander(start.currentTarget.dataset.pos
    .split(',')
    .map((x) => parseInt(x, 10)));
  if (ship.overlap === true) {
    return;
  }
  shipPreview(ship.body, ship.type, start.target);
}

function addAnimationEvent(add, type, side) {
  if (add === false) {
    [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
      box.removeEventListener(type, shipPlaceAnimation);
    });
  }
  if (add === true) {
    [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
      box.addEventListener(type, shipPlaceAnimation);
    });
  }
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
    addAnimationEvent(false, 'mouseover', 'left');
    addAnimationEvent(true, 'mouseover', 'right');
  }

  if (playerOne.board.list.length === 5 && playerTwo.board.list.length < 5 && side === 'right') {
    initializeShip(playerTwo, ships[playerTwo.board.list.length], cord);
  }

  if (playerOne.board.list.length === 5 && playerTwo.board.list.length === 5) {
    addAnimationEvent(false, 'mouseover', 'right');
    addInitializer(false);
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

function addInitializer(add) {
  [...document.getElementsByClassName('box')].forEach((box) => {
    // eslint-disable-next-line no-unused-expressions
    add ? box.addEventListener('click', initializeStage) : box.removeEventListener('click', initializeStage);
  });
}


// Load the main loop and option, and initialize the board with necessary information
function initializeOnStart() {
  mainLoad();
  loadOption();

  currentPreview = playerX.board.list;
  board = [...document.getElementsByClassName('left-content')[0].getElementsByClassName('box')];

  addAnimationEvent(true, 'mouseover', 'left');
  addInitializer(true);
}

const singlePlayerBtn = document.querySelector('.single-player');
const multiPlayerbtn = document.querySelector('.multi-player');

// Create a bot and a player
singlePlayerBtn.addEventListener('click', () => {
  playerX = Player.create(false);
  playerY = Player.create(true);
  initializeOnStart();
});

// Create two players logic
multiPlayerbtn.addEventListener('click', () => {
  playerX = Player.create(false);
  playerY = Player.create(false);
  initializeOnStart();
});
