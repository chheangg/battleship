/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { Ships } from '../objects/ship';
import { boardScreen, placementContainer } from '../template/boardScreen';
import { loadIcon } from './imageLoader';
import { startScreen } from '../template/startScreen';

// Enumerated arrays of ships to be placed
const shipOrders = Object.values(Ships).sort((last, next) => last.order < next.order);

// load all the ships on the board when called
function loadBoard(player, side) {
  player.board.list.forEach((ship) => {
    ship.position.forEach((cord) => {
      [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
        if (box.dataset.pos === cord.join()) {
          const { name } = shipOrders[player.board.list.indexOf(ship)];
          const shipImg = loadIcon(name, ship.position.indexOf(cord) + 1, ship.axis);
          box.style.backgroundImage = `url('${shipImg}')`;
        }
      });
    });
  });
}

// unload all the ships on a board
function unloadBoard(side) {
  [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
    box.style.backgroundImage = '';
  });
}

// A factory function that has the logic for initializing and loading up the game board
const boardLoad = (function handler() {
  // Generate the page for score keeping and turn information
  // Refactor into template
  function generatePage(gameObject) {
    document.body.textContent = '';
    document.body.innerHTML = boardScreen(gameObject.playerOne.name, gameObject.playerTwo.name);
  }
  // Generate the whole cells for each board
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
  // assign appropriate classes to distinct left and right
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
    generatePage, generateBox, assignParent,
  };
}());

// Load option for placing ships in a certain axios
function loadOption() {
  const container = document.getElementsByClassName('top-header-container')[0];
  const option = document.createElement('div');
  // Template
  option.innerHTML = placementContainer();
  container.appendChild(option);
}

// Load board
function mainPageLoad(gameObject) {
  boardLoad.generatePage(gameObject);
  boardLoad.generateBox();
  boardLoad.assignParent();
}

function loadPage(gameObject) {
  // Load page and initialize every cells;
  mainPageLoad(gameObject);
  // Load options
  loadOption();
}

function setMainScreen() {
  document.body.innerHTML = startScreen;
}

export {
  mainPageLoad, loadBoard, loadOption, boardLoad, loadPage, shipOrders, unloadBoard, setMainScreen,
};