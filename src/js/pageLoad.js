/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { mainLoop } from './app';
import { Player } from './objects/player';
import { Ships } from './objects/ship';
import { loadIcon } from './imageLoader';

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
  function generatePage() {
    document.body.textContent = '';
    document.body.innerHTML = "<div class='top-container'><p>Turn: PLAYER 1</p></div>"
      + "<div class='main-content'><div class='left-content'><div class='playername'>PLAYER 1 (you)</div><div class='board-container'><div class='ships-container'></div><div class='board'></div></div></div><div class='right-content'><div class='playername'>PLAYER 2 (bot)</div><div class='board-container'><div class='ships-container'></div><div class='board'></div></div></div></div>";
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
  // Assign each cells an attribue an event listener
  function assignBox() {
    [...document.getElementsByClassName('box')].forEach((box) => {
      box.addEventListener('click', (obj) => {
        const coordinate = obj.target.getAttribute('data-pos')
          .split(',')
          .map((x) => parseInt(x, 10));
        const side = obj.target.getAttribute('data-side');
        // Check for attacks?
        let complement;
        if (side === 'left') {
          complement = 'right';
        }
        if (side === 'right') {
          complement = 'left';
        }
        // ?
        mainLoop.attack(coordinate, side, Player.list);
        mainLoop.botAttack(complement, Player.list);
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
    generatePage, generateBox, assignParent, assignBox,
  };
}());

// Load option for placing ships in a certain axios
function loadOption() {
  const container = document.getElementsByClassName('top-container')[0];
  const option = document.createElement('div');
  // Template
  option.innerHTML = "<div class='dir-option'><label for='horizontal'>Horizontal</label><input type='radio' class='dir-option' value='horizontal' id='horizontal' name='option' checked><label for='vertical'>Vertical</label><input type='radio' class='dir-option' value='vertical' id='vertical' name='option'></div>";
  container.appendChild(option);
}

// Load board
function mainPageLoad() {
  boardLoad.generatePage();
  boardLoad.generateBox();
  boardLoad.assignParent();
}

function loadPage() {
  // Load page and initialize every cells;
  mainPageLoad();
  // Load options
  loadOption();
}

export {
  mainPageLoad, loadBoard, loadOption, boardLoad, loadPage, shipOrders, unloadBoard,
};
