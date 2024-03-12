/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import {
  convertCordToIndex, dirs, placeShip, rotateShip,
} from './imageLoader';
import {
  startScreen,
  singlePlayerModal,
  multiPlayerModal,
  gameBoardTemplate,
  shipPlacementComponent,
} from '../template/template';
import { getAttackAsset } from './boardAssetLoader';

function getBoardBoxes(player) {
  return document.querySelectorAll(`.${player.board.className} td`);
}

// load Fog of War
function loadFOW(player) {
  const boardBoxes = getBoardBoxes(player);
  const fowSample = getAttackAsset(1);
  const missedSample = getAttackAsset(2);
  const fowClassName = `.${fowSample.className}`;
  const missedClassName = `.${missedSample.className}`;

  const containsAsset = boardBoxes[0].querySelector(fowClassName)
  || boardBoxes[0].querySelector(missedClassName);

  if (containsAsset) {
    return;
  }

  player.board.misses.forEach((cord) => {
    const missedIndex = convertCordToIndex(cord);

    if (boardBoxes[missedIndex].querySelector(missedClassName)) return;

    const missedIcon = getAttackAsset(2);
    boardBoxes[missedIndex].appendChild(missedIcon);
  });

  boardBoxes.forEach((box) => {
    if (box.querySelector(missedClassName)) return;
    const fowIcon = getAttackAsset(1);
    box.appendChild(fowIcon);
  });
}

// unload Fog of War
function unloadIcon(player) {
  const boardBoxes = getBoardBoxes(player);
  boardBoxes.forEach((box) => {
    box.replaceChildren();
  });
}

// load all the ships on the board when called
function loadBoard(player) {
  // Unload Fog of War
  unloadIcon(player);

  const boardBoxes = getBoardBoxes(player);

  // Load ship
  player.board.list.forEach((ship) => {
    const cords = ship.position;
    placeShip(cords, boardBoxes, ship);
  });

  // Load Misses

  // Load Hits (Current Player POV)
}

// unload all the ships on a board
function unloadBoard(player) {
  const boxes = getBoardBoxes(player);
  boxes.forEach((box) => {
    box.style.backgroundImage = '';
    // remove directions classes applied to loaded board
    box.classList.remove(...dirs);
  });
  loadFOW(player);
}

// A factory function that has the logic for initializing and loading up the game board
const boardLoad = (function handler() {
  // Generate the page for score keeping and turn information
  // Refactor into template
  // function generatePage(gameObject) {
  //   document.body.textContent = '';
  //   document.body.innerHTML = boardScreen(gameObject.playerOne.name, gameObject.playerTwo.name);
  // }
  // Generate the whole cells for each board
  // function generateBox() {
  //   [...document.getElementsByClassName('board')].forEach((board) => {
  //     const start = [0, 0];
  //     Array(100)
  //       .fill()
  //       .forEach(() => {
  //         const box = document.createElement('div');
  //         box.className = 'box';
  //         box.dataset.pos = start;
  //         board.appendChild(box);
  //         if (start[1] <= 9) {
  //           start[1]++;
  //         }
  //         if (start[1] === 10) {
  //           start[1] = 0;
  //           start[0]++;
  //         }
  //       });
  //   });
  // }
  // assign appropriate classes to distinct left and right
  // function assignParent() {
  //   ['left', 'right'].forEach((side) => {
  //     const boxes = document.getElementsByClassName(`${side}-content`)[0]
  //       .getElementsByClassName('box');
  //     [...boxes].forEach((box) => {
  //       box.dataset.side = side;
  //     });
  //   });
  // }

  // return {
  //   generatePage, generateBox, assignParent,
  // };
}());

function setMainScreen() {
  document.body.innerHTML = startScreen;
}

function removeModal(event) {
  const nameModalWrapper = document.querySelector('.name-modal-wrapper');
  const closeBtn = document.querySelector('.close-btn img');
  if (event && (event.target !== nameModalWrapper && event.target !== closeBtn)) {
    return;
  }
  if (nameModalWrapper) {
    document.body.removeChild(nameModalWrapper);
  }
}

function loadModal(gameObject, cb) {
  const { body } = document;
  const { isMultiplayer } = gameObject;

  const hasNameModalWrapperInDOM = document.querySelector('.name-modal-wrapper');

  if (hasNameModalWrapperInDOM) {
    removeModal();
  }

  // HOF for returning callback
  const btnCallback = cb(gameObject);

  body.insertAdjacentHTML('beforeend', isMultiplayer ? multiPlayerModal : singlePlayerModal);

  const btn = document.querySelector('.name-form-btn');
  document.querySelector('.name-modal-wrapper').addEventListener('click', removeModal);
  document.querySelector('.close-btn').addEventListener('click', removeModal);
  btn.addEventListener('click', btnCallback);
}

function loadGameboard(gameObject, infoHeader) {
  document.body.innerHTML = gameBoardTemplate(gameObject, infoHeader);
  const rotateBtn = document.querySelector('#rotate-btn');
  rotateBtn.addEventListener('click', rotateShip);
}

function loadPlacementOption(gameObject) {
  return shipPlacementComponent();
}

export {
  loadBoard,
  loadPlacementOption,
  boardLoad,
  unloadBoard,
  setMainScreen,
  loadModal,
  loadGameboard,
  getBoardBoxes,
};
