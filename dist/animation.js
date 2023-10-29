/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/ships sync \\.png$":
/*!****************************************************!*\
  !*** ./src/assets/ships/ sync nonrecursive \.png$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./battleship-hori_01.png": "./src/assets/ships/battleship-hori_01.png",
	"./battleship-hori_02.png": "./src/assets/ships/battleship-hori_02.png",
	"./battleship-hori_03.png": "./src/assets/ships/battleship-hori_03.png",
	"./battleship-hori_04.png": "./src/assets/ships/battleship-hori_04.png",
	"./battleship-vert_01.png": "./src/assets/ships/battleship-vert_01.png",
	"./battleship-vert_02.png": "./src/assets/ships/battleship-vert_02.png",
	"./battleship-vert_03.png": "./src/assets/ships/battleship-vert_03.png",
	"./battleship-vert_04.png": "./src/assets/ships/battleship-vert_04.png",
	"./carrier-hori_01.png": "./src/assets/ships/carrier-hori_01.png",
	"./carrier-hori_02.png": "./src/assets/ships/carrier-hori_02.png",
	"./carrier-hori_03.png": "./src/assets/ships/carrier-hori_03.png",
	"./carrier-hori_04.png": "./src/assets/ships/carrier-hori_04.png",
	"./carrier-hori_05.png": "./src/assets/ships/carrier-hori_05.png",
	"./carrier-vert_01.png": "./src/assets/ships/carrier-vert_01.png",
	"./carrier-vert_02.png": "./src/assets/ships/carrier-vert_02.png",
	"./carrier-vert_03.png": "./src/assets/ships/carrier-vert_03.png",
	"./carrier-vert_04.png": "./src/assets/ships/carrier-vert_04.png",
	"./carrier-vert_05.png": "./src/assets/ships/carrier-vert_05.png",
	"./destroyer-hori_01.png": "./src/assets/ships/destroyer-hori_01.png",
	"./destroyer-hori_02.png": "./src/assets/ships/destroyer-hori_02.png",
	"./destroyer-hori_03.png": "./src/assets/ships/destroyer-hori_03.png",
	"./destroyer-vert_01.png": "./src/assets/ships/destroyer-vert_01.png",
	"./destroyer-vert_02.png": "./src/assets/ships/destroyer-vert_02.png",
	"./destroyer-vert_03.png": "./src/assets/ships/destroyer-vert_03.png",
	"./patrol-hori_01.png": "./src/assets/ships/patrol-hori_01.png",
	"./patrol-hori_02.png": "./src/assets/ships/patrol-hori_02.png",
	"./patrol-vert_01.png": "./src/assets/ships/patrol-vert_01.png",
	"./patrol-vert_02.png": "./src/assets/ships/patrol-vert_02.png",
	"./submarine-hori_01.png": "./src/assets/ships/submarine-hori_01.png",
	"./submarine-hori_02.png": "./src/assets/ships/submarine-hori_02.png",
	"./submarine-hori_03.png": "./src/assets/ships/submarine-hori_03.png",
	"./submarine-vert_01.png": "./src/assets/ships/submarine-vert_01.png",
	"./submarine-vert_02.png": "./src/assets/ships/submarine-vert_02.png",
	"./submarine-vert_03.png": "./src/assets/ships/submarine-vert_03.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/ships sync \\.png$";

/***/ }),

/***/ "./src/js/imageLoader.js":
/*!*******************************!*\
  !*** ./src/js/imageLoader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadIcon": () => (/* binding */ loadIcon)
/* harmony export */ });
// Import all ship images
function importAll(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace(/(.\/|\.png$)/g, '')] = r(item);
  });
  return images;
}

const images = importAll(__webpack_require__("./src/assets/ships sync \\.png$"));

function loadIcon(type, num, dir) {
  const dirName = dir === 'horizontal' ? 'hori' : 'vert';
  return images[`${type}-${dirName}_0${num}`];
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/js/objects/game.js":
/*!********************************!*\
  !*** ./src/js/objects/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-unused-expressions */

function returnPlayerTurn(gameObject) {
  return gameObject.playerOne.isTurn
    ? gameObject.playerOne
    : gameObject.playerTwo;
}

// The main Game object for exposing information for each stages to uses
// 1. Players
// 2. Player for Current Turn
// 3. Current Board
// 4. isStarted for checking if placement has been set
// 5. current gamemode (isMultiplayer)
function Game(isMultiplayer, playerOne, playerTwo) {
  let isStarted = false;

  // Return player whose turns is theirs
  function currentTurn() {
    return returnPlayerTurn(this);
  }

  // Return board of player whose turns is there
  function currentBoard() {
    return [...document.getElementsByClassName(`${playerOne.isTurn ? 'left' : 'right'}-content`)[0]
      .getElementsByClassName('box')];
  }

  return {
    playerOne, playerTwo, currentTurn, currentBoard, isStarted, isMultiplayer,
  };
}


/***/ }),

/***/ "./src/js/objects/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/objects/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/objects/ship.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/objects/game.js");
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */




// Check if two set of array contain similar elements
function intersect(a, b) {
  return a.find((pos) => b
    .find((currentPos) => currentPos[0] === pos[0] && currentPos[1] === pos[1]));
}

// Return false if ship body is over 9 (which is over the board boundary)
const hitBoundary = (position, axis) => {
  switch (axis) {
    case 'horizontal':
      return position.find((pos) => (pos[1] > 9));
    case 'vertical':
      return position.find((pos) => (pos[0] > 9));
    default:
      throw Error('Invalid axis');
  }
};

// Check if ship can be placed on a certain square, without collision
// with the border or other ships.
// takes all the ship as argument to check for collison
function isValid(ships, position, axis) {
  // Check if ship overlaps over any other ships
  const hasCollision = ships
    .find((ship) => intersect(ship.position, position));
  // Check if the ship doesn't overlap with the boundary
  // Accept the current ship's position and axis
  const validBoundary = !hitBoundary(position, axis);
  return !hasCollision && validBoundary;
}

// The main game object that is needed for every round
// Coordinate system: Array [Vertical (0 -> 9), Horizontal (0 -> 9)]
// Accepts player object
function Gameboard() {
  // List of ships
  const list = [];
  // Record of attacks made
  const attacks = [];
  // Record of hits made
  const hits = [];
  // Record of misses
  const misses = [];

  // Place ship, build a ship, check if it is valid.
  function place(ship, axis, coordinate) {
    const initializedShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(ship, axis, coordinate);

    if (!isValid(list, initializedShip.position, axis)) {
      return undefined;
    }
    list.push(initializedShip);
    return initializedShip;
  }

  function swapTurn(gameObject) {
    const { playerOne, playerTwo } = gameObject;
    playerOne.isTurn = !playerOne.isTurn;
    playerTwo.isTurn = !playerTwo.isTurn;
  }

  // Check if attack is out of bound or already exist, then retry
  // If it is valid, checks if a ship is hit; modify ship if hit
  function receiveAttack(cord, gameObject) {
    const isExist = attacks.find((attack) => attack[0] === cord[0] && attack[1] === cord[1]);
    const hit = list.find((ship) => ship.hit(cord));

    if (isExist) {
      return false;
    }

    swapTurn(gameObject);

    attacks.push(cord);

    if (hit) {
      hits.push(cord);
      return 'hit';
    }

    misses.push(cord);
    return 'miss';
  }

  return {
    list,
    hits,
    misses,
    attacks,
    place,
    receiveAttack,
  };
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/js/objects/player.js":
/*!**********************************!*\
  !*** ./src/js/objects/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "multiplayerInit": () => (/* binding */ multiplayerInit),
/* harmony export */   "singleplayerInit": () => (/* binding */ singleplayerInit)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/objects/gameboard.js");
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */



// Player Object
function Player(isBot, initialTurn) {
  // Bot create random attack cord on the board, keep retrying if it is not valid;
  function botEval(player) {
    const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const attackExist = player
      .board.attacks
      .find((attempt) => attempt[0] === rand[0] && attempt[1] === rand[1]);

    if (attackExist) {
      return botEval(player);
    }

    return rand;
  }

  // Player simply receive attack if it is not a bot (implying coordinate exists)
  // otherwise, a coord is randomly generated for the bot to attack
  // eslint-disable-next-line consistent-return
  function attack(player, coordinate, gameObject) {
    return player.board.receiveAttack(coordinate, gameObject);
  }

  return {
    isTurn: initialTurn,
    board: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(),
    attack,
    isBot,
    botEval,
  };
}

// Only use to decide if playerOne is a bot or a real player
function randomPlayerDecider() {
  const turnDecider = Math.random() >= 0.5;
  return (Math.random() >= 0.5)
    ? Player(turnDecider, true)
    : Player(turnDecider, true);
}

// Singleplayer object for initializing a bot and a real player
function singleplayerInit() {
  const playerOne = randomPlayerDecider(false);
  const playerOneIsBot = playerOne.isBot;
  const playerTwo = Player(!playerOneIsBot, !playerOne.isTurn);
  return {
    playerOne,
    playerTwo,
  };
}

// Multiplayer object for initializing both real players
function multiplayerInit() {
  const playerOne = Player(false, true);
  const playerTwo = Player(false, false);
  return {
    playerOne,
    playerTwo,
  };
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/js/objects/ship.js":
/*!********************************!*\
  !*** ./src/js/objects/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "Ships": () => (/* binding */ Ships)
/* harmony export */ });
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

const Ships = {
  patrol: {
    name: 'patrol',
    length: 2,
    order: 1,
  },
  submarine: {
    name: 'submarine',
    length: 3,
    order: 2,
  },
  destroyer: {
    name: 'destroyer',
    length: 3,
    order: 3,
  },
  battleship: {
    name: 'battleship',
    length: 4,
    order: 4,
  },
  carrier: {
    name: 'carrier',
    length: 5,
    order: 5,
  },
};

// Takes coordinate, axis, and length, and build ship on a certain cell position
function buildShip(length, axis, coordinate) {
  const start = [...coordinate];
  const body = Array(length)
    .fill()
    .map(() => {
      if (axis === 'horizontal') {
        return [start[0], start[1]++];
      }
      return [start[0]++, start[1]];
    });
  return body;
}

// Function Constructor for ship
function Ship(ship, axis, coordinate) {
  const { length } = ship;
  const damage = [];
  // Iniitialize ship with a utility function buildShip
  const position = buildShip(ship.length, axis, coordinate);

  // Take a cord and check if cord hits any body cord
  function hit(value) {
    const isHit = position.some((pos) => {
      const matchHitPos = value[0] === pos[0] && value[1] === pos[1];
      if (matchHitPos) {
        damage.push(value);
      }
      return matchHitPos;
    });
    return isHit;
  }

  // Damage return true of damage length is equal to body length
  function isSunk() {
    return damage.length === length;
  }

  return {
    length,
    damage,
    axis,
    position,
    hit,
    isSunk,
  };
}




/***/ }),

/***/ "./src/js/pageLoad.js":
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardLoad": () => (/* binding */ boardLoad),
/* harmony export */   "loadBoard": () => (/* binding */ loadBoard),
/* harmony export */   "loadOption": () => (/* binding */ loadOption),
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "mainPageLoad": () => (/* binding */ mainPageLoad),
/* harmony export */   "shipOrders": () => (/* binding */ shipOrders),
/* harmony export */   "unloadBoard": () => (/* binding */ unloadBoard)
/* harmony export */ });
/* harmony import */ var _objects_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/ship */ "./src/js/objects/ship.js");
/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageLoader */ "./src/js/imageLoader.js");
/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */



// Enumerated arrays of ships to be placed
const shipOrders = Object.values(_objects_ship__WEBPACK_IMPORTED_MODULE_0__.Ships).sort((last, next) => last.order < next.order);

// load all the ships on the board when called
function loadBoard(player, side) {
  player.board.list.forEach((ship) => {
    ship.position.forEach((cord) => {
      [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
        if (box.dataset.pos === cord.join()) {
          const { name } = shipOrders[player.board.list.indexOf(ship)];
          const shipImg = (0,_imageLoader__WEBPACK_IMPORTED_MODULE_1__.loadIcon)(name, ship.position.indexOf(cord) + 1, ship.axis);
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
  function generatePage(names) {
    const isMultiplayer = names.length === 2;
    document.body.textContent = '';
    document.body.innerHTML = `
      <div class='top-container'>
        <p>Turn: PLAYER 1</p>
        </div>
      <div class='main-content'>
        <div class='left-content'>
          <div class='playername'>${names[0]}</div>
          <div class='board-container'>
            <div class='ships-container'></div>
            <div class='board'></div>
          </div>
        </div>
        <div class='right-content'>
          <div class='playername'>${isMultiplayer ? names[1] : 'BOT'}</div>
          <div class='board-container'>
            <div class='ships-container'></div>
            <div class='board'></div>
          </div>
        </div>
      </div>
    `;
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
  const container = document.getElementsByClassName('top-container')[0];
  const option = document.createElement('div');
  // Template
  option.innerHTML = `
    <div class='dir-option'>
      <label for='horizontal'>Horizontal</label>
      <input type='radio' class='dir-option' value='horizontal' id='horizontal' name='option' checked>
      <label for='vertical'>Vertical</label><input type='radio' class='dir-option' value='vertical' id='vertical' name='option'></div>
  `;
  container.appendChild(option);
}

// Load board
function mainPageLoad(names) {
  boardLoad.generatePage(names);
  boardLoad.generateBox();
  boardLoad.assignParent();
}

function loadPage(names) {
  // Load page and initialize every cells;
  mainPageLoad(names);
  // Load options
  loadOption();
}




/***/ }),

/***/ "./src/js/utilities/utilities.js":
/*!***************************************!*\
  !*** ./src/js/utilities/utilities.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTestGameObject": () => (/* binding */ getTestGameObject),
/* harmony export */   "removeAllEventListener": () => (/* binding */ removeAllEventListener)
/* harmony export */ });
/* harmony import */ var _objects_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/game */ "./src/js/objects/game.js");
/* harmony import */ var _objects_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/player */ "./src/js/objects/player.js");
/* eslint-disable import/prefer-default-export */



// utility function for initializing Test's game object
function getTestGameObject() {
  const { playerOne, playerTwo } = (0,_objects_player__WEBPACK_IMPORTED_MODULE_1__.multiplayerInit)();
  return (0,_objects_game__WEBPACK_IMPORTED_MODULE_0__["default"])(true, playerOne, playerTwo);
}

function removeAllEventListener(element) {
  const oldElement = element;
  const newElement = element.cloneNode(true);
  if (oldElement.parentNode) {
    oldElement.parentNode.replaceChild(newElement, oldElement);
  }
}


/***/ }),

/***/ "./src/assets/ships/battleship-hori_01.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-hori_01.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f459972af2c1c568f7e.png";

/***/ }),

/***/ "./src/assets/ships/battleship-hori_02.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-hori_02.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af50cc6f35382918e769.png";

/***/ }),

/***/ "./src/assets/ships/battleship-hori_03.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-hori_03.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e29ede6aa2a54335bc60.png";

/***/ }),

/***/ "./src/assets/ships/battleship-hori_04.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-hori_04.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f63a427abdf979f7daa1.png";

/***/ }),

/***/ "./src/assets/ships/battleship-vert_01.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-vert_01.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "23e1056a17259d2189d7.png";

/***/ }),

/***/ "./src/assets/ships/battleship-vert_02.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-vert_02.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f13844065335b5bdbd84.png";

/***/ }),

/***/ "./src/assets/ships/battleship-vert_03.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-vert_03.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0d926661181ff990f8f.png";

/***/ }),

/***/ "./src/assets/ships/battleship-vert_04.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-vert_04.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "91af9e4f4e7dc2270373.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_01.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_01.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4b97598f0687c3e93738.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_02.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_02.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "749ff1c6b77f492d0543.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_03.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_03.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "79ff194ffd5aad89f48d.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_04.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_04.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f6f7a11f0ce1136ebeb9.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_05.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_05.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f2704fb83c08f220a4d.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_01.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_01.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "533cf0429c1beb6912b0.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_02.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_02.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a128590ddf10df26f8ad.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_03.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_03.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5a52bd986306eeeb4042.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_04.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_04.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12b21e9ca034401a838f.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_05.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_05.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c313b848d1dea5387bca.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-hori_01.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-hori_01.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "811b90f59e2737b76a52.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-hori_02.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-hori_02.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca682cee6c92bbb6cfc8.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-hori_03.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-hori_03.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c84347aeefa9650ea000.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-vert_01.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-vert_01.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ac567c51f3eef3303200.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-vert_02.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-vert_02.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "afad462e4c361c7d9a57.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-vert_03.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-vert_03.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17283fccbd04e08fe94c.png";

/***/ }),

/***/ "./src/assets/ships/patrol-hori_01.png":
/*!*********************************************!*\
  !*** ./src/assets/ships/patrol-hori_01.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6ea5ad03fe6f946a92e5.png";

/***/ }),

/***/ "./src/assets/ships/patrol-hori_02.png":
/*!*********************************************!*\
  !*** ./src/assets/ships/patrol-hori_02.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4cf409358fcc955b917f.png";

/***/ }),

/***/ "./src/assets/ships/patrol-vert_01.png":
/*!*********************************************!*\
  !*** ./src/assets/ships/patrol-vert_01.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ceb5ffb36227f3b2cf6.png";

/***/ }),

/***/ "./src/assets/ships/patrol-vert_02.png":
/*!*********************************************!*\
  !*** ./src/assets/ships/patrol-vert_02.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c6145602a551a68122b.png";

/***/ }),

/***/ "./src/assets/ships/submarine-hori_01.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-hori_01.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "00dc90e62cbe3a03423c.png";

/***/ }),

/***/ "./src/assets/ships/submarine-hori_02.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-hori_02.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "25eed1a6466db382707e.png";

/***/ }),

/***/ "./src/assets/ships/submarine-hori_03.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-hori_03.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fa260837f0b4279f0cd7.png";

/***/ }),

/***/ "./src/assets/ships/submarine-vert_01.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-vert_01.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "18b88bf4ba1c4f61d559.png";

/***/ }),

/***/ "./src/assets/ships/submarine-vert_02.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-vert_02.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8f1401b3e9c4d98fb42.png";

/***/ }),

/***/ "./src/assets/ships/submarine-vert_03.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-vert_03.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1d7990d87afe5dd34ed8.png";

/***/ }),

/***/ "./node_modules/underscore/modules/_baseCreate.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseCreate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ baseCreate)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");



// Create a naked function reference for surrogate-prototype-swapping.
function ctor() {
  return function(){};
}

// An internal function for creating a new object that inherits from another.
function baseCreate(prototype) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prototype)) return {};
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__.nativeCreate) return (0,_setup_js__WEBPACK_IMPORTED_MODULE_1__.nativeCreate)(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_baseIteratee.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseIteratee.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ baseIteratee)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");








// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `_.identity`,
// an arbitrary callback, a property matcher, or a property accessor.
function baseIteratee(value, context, argCount) {
  if (value == null) return _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) return (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, context, argCount);
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) && !(0,_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) return (0,_matcher_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
  return (0,_property_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
}


/***/ }),

/***/ "./node_modules/underscore/modules/_cb.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/_cb.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cb)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/underscore/modules/_baseIteratee.js");
/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iteratee.js */ "./node_modules/underscore/modules/iteratee.js");




// The function we call internally to generate a callback. It invokes
// `_.iteratee` if overridden, otherwise `baseIteratee`.
function cb(value, context, argCount) {
  if (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee !== _iteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee(value, context);
  return (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, context, argCount);
}


/***/ }),

/***/ "./node_modules/underscore/modules/_chainResult.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_chainResult.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chainResult)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");


// Helper function to continue chaining intermediate results.
function chainResult(instance, obj) {
  return instance._chain ? (0,_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj).chain() : obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_collectNonEnumProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/underscore/modules/_collectNonEnumProps.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ collectNonEnumProps)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");




// Internal helper to create a simple lookup structure.
// `collectNonEnumProps` used to depend on `_.contains`, but this led to
// circular imports. `emulatedSet` is a one-off solution that only works for
// arrays of strings.
function emulatedSet(keys) {
  var hash = {};
  for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
  return {
    contains: function(key) { return hash[key] === true; },
    push: function(key) {
      hash[key] = true;
      return keys.push(key);
    }
  };
}

// Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't
// be iterated by `for key in ...` and thus missed. Extends `keys` in place if
// needed.
function collectNonEnumProps(obj, keys) {
  keys = emulatedSet(keys);
  var nonEnumIdx = _setup_js__WEBPACK_IMPORTED_MODULE_0__.nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(constructor) && constructor.prototype) || _setup_js__WEBPACK_IMPORTED_MODULE_0__.ObjProto;

  // Constructor is a special case.
  var prop = 'constructor';
  if ((0,_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, prop) && !keys.contains(prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = _setup_js__WEBPACK_IMPORTED_MODULE_0__.nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
      keys.push(prop);
    }
  }
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createAssigner.js":
/*!************************************************************!*\
  !*** ./node_modules/underscore/modules/_createAssigner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAssigner)
/* harmony export */ });
// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createEscaper.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_createEscaper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEscaper)
/* harmony export */ });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Internal helper to generate functions for escaping and unescaping strings
// to/from HTML interpolation.
function createEscaper(map) {
  var escaper = function(match) {
    return map[match];
  };
  // Regexes for identifying a key that needs to be escaped.
  var source = '(?:' + (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function(string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createIndexFinder.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_createIndexFinder.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createIndexFinder)
/* harmony export */ });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNaN.js */ "./node_modules/underscore/modules/isNaN.js");




// Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.
function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(_setup_js__WEBPACK_IMPORTED_MODULE_1__.slice.call(array, i, length), _isNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createPredicateIndexFinder.js":
/*!************************************************************************!*\
  !*** ./node_modules/underscore/modules/_createPredicateIndexFinder.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPredicateIndexFinder)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");



// Internal function to generate `_.findIndex` and `_.findLastIndex`.
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
    var length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createReduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_createReduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createReduce)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");




// Internal helper to create a reducing function, iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function(obj, iteratee, memo, initial) {
    var _keys = !(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function(obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context, 4), memo, initial);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createSizePropertyCheck.js":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/_createSizePropertyCheck.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSizePropertyCheck)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Common internal logic for `isArrayLike` and `isBufferLike`.
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= _setup_js__WEBPACK_IMPORTED_MODULE_0__.MAX_ARRAY_INDEX;
  }
}


/***/ }),

/***/ "./node_modules/underscore/modules/_deepGet.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_deepGet.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deepGet)
/* harmony export */ });
// Internal function to obtain a nested property in `obj` along `path`.
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_escapeMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_escapeMap.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Internal list of HTML entities for escaping.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
});


/***/ }),

/***/ "./node_modules/underscore/modules/_executeBound.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_executeBound.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ executeBound)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/underscore/modules/_baseCreate.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");



// Internal function to execute `sourceFunc` bound to `context` with optional
// `args`. Determines whether to execute a function as a constructor or as a
// normal function.
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result)) return result;
  return self;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_flatten.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_flatten.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ flatten)
/* harmony export */ });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");





// Internal implementation of a recursive `flatten` function.
function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input); i < length; i++) {
    var value = input[i];
    if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value))) {
      // Flatten current level of array or arguments object.
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_getByteLength.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_getByteLength.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ "./node_modules/underscore/modules/_shallowProperty.js");


// Internal helper to obtain the `byteLength` property of an object.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('byteLength'));


/***/ }),

/***/ "./node_modules/underscore/modules/_getLength.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_getLength.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ "./node_modules/underscore/modules/_shallowProperty.js");


// Internal helper to obtain the `length` property of an object.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('length'));


/***/ }),

/***/ "./node_modules/underscore/modules/_group.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_group.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ group)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");



// An internal function used for aggregate "group by" operations.
function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
    (0,_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_has.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/_has.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ has)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Internal function to check whether `key` is an own property name of `obj`.
function has(obj, key) {
  return obj != null && _setup_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ "./node_modules/underscore/modules/_hasObjectTag.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_hasObjectTag.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Object'));


/***/ }),

/***/ "./node_modules/underscore/modules/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_isArrayLike.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ "./node_modules/underscore/modules/_createSizePropertyCheck.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");



// Internal helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/_isBufferLike.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_isBufferLike.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ "./node_modules/underscore/modules/_createSizePropertyCheck.js");
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getByteLength.js */ "./node_modules/underscore/modules/_getByteLength.js");



// Internal helper to determine whether we should spend extensive checks against
// `ArrayBuffer` et al.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getByteLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/_keyInObj.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/_keyInObj.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keyInObj)
/* harmony export */ });
// Internal `_.pick` helper function to determine whether `key` is an enumerable
// property name of `obj`.
function keyInObj(value, key, obj) {
  return key in obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_methodFingerprint.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_methodFingerprint.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ie11fingerprint": () => (/* binding */ ie11fingerprint),
/* harmony export */   "mapMethods": () => (/* binding */ mapMethods),
/* harmony export */   "setMethods": () => (/* binding */ setMethods),
/* harmony export */   "weakMapMethods": () => (/* binding */ weakMapMethods)
/* harmony export */ });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");




// Since the regular `Object.prototype.toString` type tests don't work for
// some types in IE 11, we use a fingerprinting heuristic instead, based
// on the methods. It's not great, but it's the best we got.
// The fingerprint method lists are defined below.
function ie11fingerprint(methods) {
  var length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(methods);
  return function(obj) {
    if (obj == null) return false;
    // `Map`, `WeakMap` and `Set` have no enumerable keys.
    var keys = (0,_allKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
    if ((0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(keys)) return false;
    for (var i = 0; i < length; i++) {
      if (!(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj[methods[i]])) return false;
    }
    // If we are testing against `WeakMap`, we need to ensure that
    // `obj` doesn't have a `forEach` method in order to distinguish
    // it from a regular `Map`.
    return methods !== weakMapMethods || !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj[forEachName]);
  };
}

// In the interest of compact minification, we write
// each string in the fingerprints only once.
var forEachName = 'forEach',
    hasName = 'has',
    commonInit = ['clear', 'delete'],
    mapTail = ['get', hasName, 'set'];

// `Map`, `WeakMap` and `Set` each have slightly different
// combinations of the above sublists.
var mapMethods = commonInit.concat(forEachName, mapTail),
    weakMapMethods = commonInit.concat(mapTail),
    setMethods = ['add'].concat(commonInit, forEachName, hasName);


/***/ }),

/***/ "./node_modules/underscore/modules/_optimizeCb.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_optimizeCb.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ optimizeCb)
/* harmony export */ });
// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we’re not using it.
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_setup.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_setup.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayProto": () => (/* binding */ ArrayProto),
/* harmony export */   "MAX_ARRAY_INDEX": () => (/* binding */ MAX_ARRAY_INDEX),
/* harmony export */   "ObjProto": () => (/* binding */ ObjProto),
/* harmony export */   "SymbolProto": () => (/* binding */ SymbolProto),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "_isFinite": () => (/* binding */ _isFinite),
/* harmony export */   "_isNaN": () => (/* binding */ _isNaN),
/* harmony export */   "hasEnumBug": () => (/* binding */ hasEnumBug),
/* harmony export */   "hasOwnProperty": () => (/* binding */ hasOwnProperty),
/* harmony export */   "nativeCreate": () => (/* binding */ nativeCreate),
/* harmony export */   "nativeIsArray": () => (/* binding */ nativeIsArray),
/* harmony export */   "nativeIsView": () => (/* binding */ nativeIsView),
/* harmony export */   "nativeKeys": () => (/* binding */ nativeKeys),
/* harmony export */   "nonEnumerableProps": () => (/* binding */ nonEnumerableProps),
/* harmony export */   "push": () => (/* binding */ push),
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "slice": () => (/* binding */ slice),
/* harmony export */   "supportsArrayBuffer": () => (/* binding */ supportsArrayBuffer),
/* harmony export */   "supportsDataView": () => (/* binding */ supportsDataView),
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
// Current version.
var VERSION = '1.13.6';

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = (typeof self == 'object' && self.self === self && self) ||
          (typeof global == 'object' && global.global === global && global) ||
          Function('return this')() ||
          {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// Modern feature detection.
var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',
    supportsDataView = typeof DataView !== 'undefined';

// All **ECMAScript 5+** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create,
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

// Create references to these builtin functions because we override them.
var _isNaN = isNaN,
    _isFinite = isFinite;

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

// The largest integer that can be represented exactly.
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;


/***/ }),

/***/ "./node_modules/underscore/modules/_shallowProperty.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/_shallowProperty.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowProperty)
/* harmony export */ });
// Internal helper to generate a function to obtain property `key` from `obj`.
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_stringTagBug.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_stringTagBug.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasStringTagBug": () => (/* binding */ hasStringTagBug),
/* harmony export */   "isIE11": () => (/* binding */ isIE11)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasObjectTag.js */ "./node_modules/underscore/modules/_hasObjectTag.js");



// In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.
// In IE 11, the most common among them, this problem also applies to
// `Map`, `WeakMap` and `Set`.
var hasStringTagBug = (
      _setup_js__WEBPACK_IMPORTED_MODULE_0__.supportsDataView && (0,_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new DataView(new ArrayBuffer(8)))
    ),
    isIE11 = (typeof Map !== 'undefined' && (0,_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Map));


/***/ }),

/***/ "./node_modules/underscore/modules/_tagTester.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_tagTester.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tagTester)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Internal function for creating a `toString`-based type tester.
function tagTester(name) {
  var tag = '[object ' + name + ']';
  return function(obj) {
    return _setup_js__WEBPACK_IMPORTED_MODULE_0__.toString.call(obj) === tag;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_toBufferView.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_toBufferView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toBufferView)
/* harmony export */ });
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getByteLength.js */ "./node_modules/underscore/modules/_getByteLength.js");


// Internal function to wrap or shallow-copy an ArrayBuffer,
// typed array or DataView to a new view, reusing the buffer.
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    (0,_getByteLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bufferSource)
  );
}


/***/ }),

/***/ "./node_modules/underscore/modules/_toPath.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/_toPath.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPath)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPath.js */ "./node_modules/underscore/modules/toPath.js");



// Internal wrapper for `_.toPath` to enable minification.
// Similar to `cb` for `_.iteratee`.
function toPath(path) {
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].toPath(path);
}


/***/ }),

/***/ "./node_modules/underscore/modules/_unescapeMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_unescapeMap.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invert.js */ "./node_modules/underscore/modules/invert.js");
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ "./node_modules/underscore/modules/_escapeMap.js");



// Internal list of HTML entities for unescaping.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_invert_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/after.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/after.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ after)
/* harmony export */ });
// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/allKeys.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/allKeys.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allKeys)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ "./node_modules/underscore/modules/_collectNonEnumProps.js");




// Retrieve all the enumerable property names of an object.
function allKeys(obj) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  // Ahem, IE < 9.
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__.hasEnumBug) (0,_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, keys);
  return keys;
}


/***/ }),

/***/ "./node_modules/underscore/modules/before.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/before.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ before)
/* harmony export */ });
// Returns a function that will only be executed up to (but not including) the
// Nth call.
function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/bind.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/bind.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_executeBound.js */ "./node_modules/underscore/modules/_executeBound.js");




// Create a function bound to a given object (assigning `this`, and arguments,
// optionally).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, context, args) {
  if (!(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func)) throw new TypeError('Bind must be called on a function');
  var bound = (0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(callArgs) {
    return (0,_executeBound_js__WEBPACK_IMPORTED_MODULE_2__["default"])(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/bindAll.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/bindAll.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bind.js */ "./node_modules/underscore/modules/bind.js");




// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  keys = (0,_flatten_js__WEBPACK_IMPORTED_MODULE_1__["default"])(keys, false, false);
  var index = keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');
  while (index--) {
    var key = keys[index];
    obj[key] = (0,_bind_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj[key], obj);
  }
  return obj;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/chain.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chain.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chain)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");


// Start chaining a wrapped Underscore object.
function chain(obj) {
  var instance = (0,_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  instance._chain = true;
  return instance;
}


/***/ }),

/***/ "./node_modules/underscore/modules/chunk.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chunk.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chunk)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(_setup_js__WEBPACK_IMPORTED_MODULE_0__.slice.call(array, i, i += count));
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/clone.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/clone.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clone)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend.js */ "./node_modules/underscore/modules/extend.js");




// Create a (shallow-cloned) duplicate of an object.
function clone(obj) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return obj;
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) ? obj.slice() : (0,_extend_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, obj);
}


/***/ }),

/***/ "./node_modules/underscore/modules/compact.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compact.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compact)
/* harmony export */ });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");


// Trim out all falsy values from an array.
function compact(array) {
  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Boolean);
}


/***/ }),

/***/ "./node_modules/underscore/modules/compose.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compose.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compose)
/* harmony export */ });
// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ constant)
/* harmony export */ });
// Predicate-generating function. Often useful outside of Underscore.
function constant(value) {
  return function() {
    return value;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/contains.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/contains.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexOf.js */ "./node_modules/underscore/modules/indexOf.js");




// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) obj = (0,_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return (0,_indexOf_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, item, fromIndex) >= 0;
}


/***/ }),

/***/ "./node_modules/underscore/modules/countBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/countBy.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");



// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  if ((0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key)) result[key]++; else result[key] = 1;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/create.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/create.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/underscore/modules/_baseCreate.js");
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");



// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
function create(prototype, props) {
  var result = (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prototype);
  if (props) (0,_extendOwn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, props);
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/debounce.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/debounce.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now.js */ "./node_modules/underscore/modules/now.js");



// When a sequence of calls of the returned function ends, the argument
// function is triggered. The end of a sequence is defined by the `wait`
// parameter. If `immediate` is passed, the argument function will be
// triggered at the beginning of the sequence instead of at the end.
function debounce(func, wait, immediate) {
  var timeout, previous, args, result, context;

  var later = function() {
    var passed = (0,_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
      // This check is needed because `func` can recursively invoke `debounced`.
      if (!timeout) args = context = null;
    }
  };

  var debounced = (0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(_args) {
    context = this;
    args = _args;
    previous = (0,_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result = func.apply(context, args);
    }
    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
}


/***/ }),

/***/ "./node_modules/underscore/modules/defaults.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/defaults.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");



// Fill in a given object with default properties.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"], true));


/***/ }),

/***/ "./node_modules/underscore/modules/defer.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/defer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay.js */ "./node_modules/underscore/modules/delay.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");




// Defers a function, scheduling it to run after the current call stack has
// cleared.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_delay_js__WEBPACK_IMPORTED_MODULE_1__["default"], _underscore_js__WEBPACK_IMPORTED_MODULE_2__["default"], 1));


/***/ }),

/***/ "./node_modules/underscore/modules/delay.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/delay.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");


// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
}));


/***/ }),

/***/ "./node_modules/underscore/modules/difference.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/difference.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");





// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(array, rest) {
  rest = (0,_flatten_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rest, true, true);
  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, function(value){
    return !(0,_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(rest, value);
  });
}));


/***/ }),

/***/ "./node_modules/underscore/modules/each.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/each.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ each)
/* harmony export */ });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




// The cornerstone for collection functions, an `each`
// implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
function each(obj, iteratee, context) {
  iteratee = (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var i, length;
  if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/escape.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ "./node_modules/underscore/modules/_createEscaper.js");
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ "./node_modules/underscore/modules/_escapeMap.js");



// Function for escaping strings to HTML interpolation.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/every.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/every.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ every)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




// Determine whether all of the elements pass a truth test.
function every(obj, predicate, context) {
  predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = !(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}


/***/ }),

/***/ "./node_modules/underscore/modules/extend.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/extend.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");



// Extend a given object with all the properties in passed-in object(s).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/extendOwn.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/extendOwn.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");



// Assigns a given object with all the own properties in the passed-in
// object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/filter.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");



// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  (0,_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}


/***/ }),

/***/ "./node_modules/underscore/modules/find.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/find.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ find)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findKey.js */ "./node_modules/underscore/modules/findKey.js");




// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? _findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _findKey_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}


/***/ }),

/***/ "./node_modules/underscore/modules/findIndex.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findIndex.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ "./node_modules/underscore/modules/_createPredicateIndexFinder.js");


// Returns the first index on an array-like that passes a truth test.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));


/***/ }),

/***/ "./node_modules/underscore/modules/findKey.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/findKey.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findKey)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");



// Returns the first key on an object that passes a truth test.
function findKey(obj, predicate, context) {
  predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}


/***/ }),

/***/ "./node_modules/underscore/modules/findLastIndex.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/findLastIndex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ "./node_modules/underscore/modules/_createPredicateIndexFinder.js");


// Returns the last index on an array-like that passes a truth test.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1));


/***/ }),

/***/ "./node_modules/underscore/modules/findWhere.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findWhere.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findWhere)
/* harmony export */ });
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.js */ "./node_modules/underscore/modules/find.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");



// Convenience version of a common use case of `_.find`: getting the first
// object containing specific `key:value` pairs.
function findWhere(obj, attrs) {
  return (0,_find_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, (0,_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs));
}


/***/ }),

/***/ "./node_modules/underscore/modules/first.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/first.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ first)
/* harmony export */ });
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./node_modules/underscore/modules/initial.js");


// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `_.map`.
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, array.length - n);
}


/***/ }),

/***/ "./node_modules/underscore/modules/flatten.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/flatten.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ flatten)
/* harmony export */ });
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");


// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
function flatten(array, depth) {
  return (0,_flatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, depth, false);
}


/***/ }),

/***/ "./node_modules/underscore/modules/functions.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/functions.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ functions)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");


// Return a sorted list of the function names available on the object.
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj[key])) names.push(key);
  }
  return names.sort();
}


/***/ }),

/***/ "./node_modules/underscore/modules/get.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/get.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ get)
/* harmony export */ });
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");
/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isUndefined.js */ "./node_modules/underscore/modules/isUndefined.js");




// Get the value of the (deep) property on `path` from `object`.
// If any property in `path` does not exist or if the value is
// `undefined`, return `defaultValue` instead.
// The `path` is normalized through `_.toPath`.
function get(object, path, defaultValue) {
  var value = (0,_deepGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, (0,_toPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path));
  return (0,_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? defaultValue : value;
}


/***/ }),

/***/ "./node_modules/underscore/modules/groupBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/groupBy.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");



// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  if ((0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key)) result[key].push(value); else result[key] = [value];
}));


/***/ }),

/***/ "./node_modules/underscore/modules/has.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/has.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ has)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");



// Shortcut function for checking if an object has a given property directly on
// itself (in other words, not on a prototype). Unlike the internal `has`
// function, this public version can also traverse nested properties.
function has(obj, path) {
  path = (0,_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!(0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, key)) return false;
    obj = obj[key];
  }
  return !!length;
}


/***/ }),

/***/ "./node_modules/underscore/modules/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/identity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ identity)
/* harmony export */ });
// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}


/***/ }),

/***/ "./node_modules/underscore/modules/index-all.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/index-all.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.VERSION),
/* harmony export */   "after": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.after),
/* harmony export */   "all": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.all),
/* harmony export */   "allKeys": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.allKeys),
/* harmony export */   "any": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.any),
/* harmony export */   "assign": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.assign),
/* harmony export */   "before": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.before),
/* harmony export */   "bind": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.bind),
/* harmony export */   "bindAll": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.bindAll),
/* harmony export */   "chain": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.chain),
/* harmony export */   "chunk": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.chunk),
/* harmony export */   "clone": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.clone),
/* harmony export */   "collect": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.collect),
/* harmony export */   "compact": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.compact),
/* harmony export */   "compose": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.compose),
/* harmony export */   "constant": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.constant),
/* harmony export */   "contains": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.contains),
/* harmony export */   "countBy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.countBy),
/* harmony export */   "create": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.create),
/* harmony export */   "debounce": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.debounce),
/* harmony export */   "default": () => (/* reexport safe */ _index_default_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "defaults": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.defaults),
/* harmony export */   "defer": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   "delay": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.delay),
/* harmony export */   "detect": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.detect),
/* harmony export */   "difference": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.difference),
/* harmony export */   "drop": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.drop),
/* harmony export */   "each": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.each),
/* harmony export */   "escape": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.escape),
/* harmony export */   "every": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.every),
/* harmony export */   "extend": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.extend),
/* harmony export */   "extendOwn": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.extendOwn),
/* harmony export */   "filter": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.filter),
/* harmony export */   "find": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.find),
/* harmony export */   "findIndex": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.findIndex),
/* harmony export */   "findKey": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.findKey),
/* harmony export */   "findLastIndex": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.findLastIndex),
/* harmony export */   "findWhere": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.findWhere),
/* harmony export */   "first": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.first),
/* harmony export */   "flatten": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.flatten),
/* harmony export */   "foldl": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.foldl),
/* harmony export */   "foldr": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.foldr),
/* harmony export */   "forEach": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.forEach),
/* harmony export */   "functions": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.functions),
/* harmony export */   "get": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.get),
/* harmony export */   "groupBy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.groupBy),
/* harmony export */   "has": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.has),
/* harmony export */   "head": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.head),
/* harmony export */   "identity": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "include": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.include),
/* harmony export */   "includes": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.includes),
/* harmony export */   "indexBy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.indexBy),
/* harmony export */   "indexOf": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.indexOf),
/* harmony export */   "initial": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.initial),
/* harmony export */   "inject": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.inject),
/* harmony export */   "intersection": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.intersection),
/* harmony export */   "invert": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.invert),
/* harmony export */   "invoke": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.invoke),
/* harmony export */   "isArguments": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isArguments),
/* harmony export */   "isArray": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isArray),
/* harmony export */   "isArrayBuffer": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isBoolean),
/* harmony export */   "isDataView": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isDataView),
/* harmony export */   "isDate": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isDate),
/* harmony export */   "isElement": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isElement),
/* harmony export */   "isEmpty": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isEmpty),
/* harmony export */   "isEqual": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isEqual),
/* harmony export */   "isError": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isError),
/* harmony export */   "isFinite": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isFinite),
/* harmony export */   "isFunction": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isFunction),
/* harmony export */   "isMap": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isMap),
/* harmony export */   "isMatch": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isMatch),
/* harmony export */   "isNaN": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isNaN),
/* harmony export */   "isNull": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isNull),
/* harmony export */   "isNumber": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isObject),
/* harmony export */   "isRegExp": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isRegExp),
/* harmony export */   "isSet": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isSet),
/* harmony export */   "isString": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isString),
/* harmony export */   "isSymbol": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isSymbol),
/* harmony export */   "isTypedArray": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isTypedArray),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined),
/* harmony export */   "isWeakMap": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isWeakMap),
/* harmony export */   "isWeakSet": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isWeakSet),
/* harmony export */   "iteratee": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.iteratee),
/* harmony export */   "keys": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.keys),
/* harmony export */   "last": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.last),
/* harmony export */   "lastIndexOf": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.lastIndexOf),
/* harmony export */   "map": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.map),
/* harmony export */   "mapObject": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.mapObject),
/* harmony export */   "matcher": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.matcher),
/* harmony export */   "matches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.matches),
/* harmony export */   "max": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.max),
/* harmony export */   "memoize": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.memoize),
/* harmony export */   "methods": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.methods),
/* harmony export */   "min": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.min),
/* harmony export */   "mixin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.mixin),
/* harmony export */   "negate": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.negate),
/* harmony export */   "noop": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.noop),
/* harmony export */   "now": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.now),
/* harmony export */   "object": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.object),
/* harmony export */   "omit": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.omit),
/* harmony export */   "once": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.once),
/* harmony export */   "pairs": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.pairs),
/* harmony export */   "partial": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.partial),
/* harmony export */   "partition": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.partition),
/* harmony export */   "pick": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.pick),
/* harmony export */   "pluck": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.pluck),
/* harmony export */   "property": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.property),
/* harmony export */   "propertyOf": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.propertyOf),
/* harmony export */   "random": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.random),
/* harmony export */   "range": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.range),
/* harmony export */   "reduce": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.reduce),
/* harmony export */   "reduceRight": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.reduceRight),
/* harmony export */   "reject": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.reject),
/* harmony export */   "rest": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.rest),
/* harmony export */   "restArguments": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.restArguments),
/* harmony export */   "result": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.result),
/* harmony export */   "sample": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.sample),
/* harmony export */   "select": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.select),
/* harmony export */   "shuffle": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.shuffle),
/* harmony export */   "size": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.size),
/* harmony export */   "some": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.some),
/* harmony export */   "sortBy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.sortBy),
/* harmony export */   "sortedIndex": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.sortedIndex),
/* harmony export */   "tail": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.tail),
/* harmony export */   "take": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.take),
/* harmony export */   "tap": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.tap),
/* harmony export */   "template": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.template),
/* harmony export */   "templateSettings": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.templateSettings),
/* harmony export */   "throttle": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.throttle),
/* harmony export */   "times": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.times),
/* harmony export */   "toArray": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.toArray),
/* harmony export */   "toPath": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.toPath),
/* harmony export */   "transpose": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.transpose),
/* harmony export */   "unescape": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.unescape),
/* harmony export */   "union": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.union),
/* harmony export */   "uniq": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.uniq),
/* harmony export */   "unique": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.unique),
/* harmony export */   "uniqueId": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.uniqueId),
/* harmony export */   "unzip": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.unzip),
/* harmony export */   "values": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.values),
/* harmony export */   "where": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.where),
/* harmony export */   "without": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.without),
/* harmony export */   "wrap": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.wrap),
/* harmony export */   "zip": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.zip)
/* harmony export */ });
/* harmony import */ var _index_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-default.js */ "./node_modules/underscore/modules/index-default.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");
// ESM Exports
// ===========
// This module is the package entry point for ES module users. In other words,
// it is the module they are interfacing with when they import from the whole
// package instead of from a submodule, like this:
//
// ```js
// import { map } from 'underscore';
// ```
//
// The difference with `./index-default`, which is the package entry point for
// CommonJS, AMD and UMD users, is purely technical. In ES modules, named and
// default exports are considered to be siblings, so when you have a default
// export, its properties are not automatically available as named exports. For
// this reason, we re-export the named exports in addition to providing the same
// default export as in `./index-default`.




/***/ }),

/***/ "./node_modules/underscore/modules/index-default.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/index-default.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");
// Default Export
// ==============
// In this module, we mix our bundled exports into the `_` object and export
// the result. This is analogous to setting `module.exports = _` in CommonJS.
// Hence, this module is also the entry point of our UMD bundle and the package
// entry point for CommonJS and AMD users. In other words, this is (the source
// of) the module you are interfacing with when you do any of the following:
//
// ```js
// // CommonJS
// var _ = require('underscore');
//
// // AMD
// define(['underscore'], function(_) {...});
//
// // UMD in the browser
// // _ is available as a global variable
// ```



// Add all of the Underscore functions to the wrapper object.
var _ = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.mixin)(_index_js__WEBPACK_IMPORTED_MODULE_0__);
// Legacy Node.js API.
_._ = _;
// Export the Underscore API.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_);


/***/ }),

/***/ "./node_modules/underscore/modules/index.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* reexport safe */ _setup_js__WEBPACK_IMPORTED_MODULE_0__.VERSION),
/* harmony export */   "after": () => (/* reexport safe */ _after_js__WEBPACK_IMPORTED_MODULE_72__["default"]),
/* harmony export */   "all": () => (/* reexport safe */ _every_js__WEBPACK_IMPORTED_MODULE_89__["default"]),
/* harmony export */   "allKeys": () => (/* reexport safe */ _allKeys_js__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   "any": () => (/* reexport safe */ _some_js__WEBPACK_IMPORTED_MODULE_90__["default"]),
/* harmony export */   "assign": () => (/* reexport safe */ _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   "before": () => (/* reexport safe */ _before_js__WEBPACK_IMPORTED_MODULE_73__["default"]),
/* harmony export */   "bind": () => (/* reexport safe */ _bind_js__WEBPACK_IMPORTED_MODULE_62__["default"]),
/* harmony export */   "bindAll": () => (/* reexport safe */ _bindAll_js__WEBPACK_IMPORTED_MODULE_63__["default"]),
/* harmony export */   "chain": () => (/* reexport safe */ _chain_js__WEBPACK_IMPORTED_MODULE_59__["default"]),
/* harmony export */   "chunk": () => (/* reexport safe */ _chunk_js__WEBPACK_IMPORTED_MODULE_123__["default"]),
/* harmony export */   "clone": () => (/* reexport safe */ _clone_js__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   "collect": () => (/* reexport safe */ _map_js__WEBPACK_IMPORTED_MODULE_84__["default"]),
/* harmony export */   "compact": () => (/* reexport safe */ _compact_js__WEBPACK_IMPORTED_MODULE_112__["default"]),
/* harmony export */   "compose": () => (/* reexport safe */ _compose_js__WEBPACK_IMPORTED_MODULE_71__["default"]),
/* harmony export */   "constant": () => (/* reexport safe */ _constant_js__WEBPACK_IMPORTED_MODULE_44__["default"]),
/* harmony export */   "contains": () => (/* reexport safe */ _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]),
/* harmony export */   "countBy": () => (/* reexport safe */ _countBy_js__WEBPACK_IMPORTED_MODULE_102__["default"]),
/* harmony export */   "create": () => (/* reexport safe */ _create_js__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   "debounce": () => (/* reexport safe */ _debounce_js__WEBPACK_IMPORTED_MODULE_68__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__["default"]),
/* harmony export */   "defaults": () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   "defer": () => (/* reexport safe */ _defer_js__WEBPACK_IMPORTED_MODULE_66__["default"]),
/* harmony export */   "delay": () => (/* reexport safe */ _delay_js__WEBPACK_IMPORTED_MODULE_65__["default"]),
/* harmony export */   "detect": () => (/* reexport safe */ _find_js__WEBPACK_IMPORTED_MODULE_81__["default"]),
/* harmony export */   "difference": () => (/* reexport safe */ _difference_js__WEBPACK_IMPORTED_MODULE_118__["default"]),
/* harmony export */   "drop": () => (/* reexport safe */ _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]),
/* harmony export */   "each": () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_83__["default"]),
/* harmony export */   "escape": () => (/* reexport safe */ _escape_js__WEBPACK_IMPORTED_MODULE_53__["default"]),
/* harmony export */   "every": () => (/* reexport safe */ _every_js__WEBPACK_IMPORTED_MODULE_89__["default"]),
/* harmony export */   "extend": () => (/* reexport safe */ _extend_js__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   "extendOwn": () => (/* reexport safe */ _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   "filter": () => (/* reexport safe */ _filter_js__WEBPACK_IMPORTED_MODULE_87__["default"]),
/* harmony export */   "find": () => (/* reexport safe */ _find_js__WEBPACK_IMPORTED_MODULE_81__["default"]),
/* harmony export */   "findIndex": () => (/* reexport safe */ _findIndex_js__WEBPACK_IMPORTED_MODULE_76__["default"]),
/* harmony export */   "findKey": () => (/* reexport safe */ _findKey_js__WEBPACK_IMPORTED_MODULE_75__["default"]),
/* harmony export */   "findLastIndex": () => (/* reexport safe */ _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__["default"]),
/* harmony export */   "findWhere": () => (/* reexport safe */ _findWhere_js__WEBPACK_IMPORTED_MODULE_82__["default"]),
/* harmony export */   "first": () => (/* reexport safe */ _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]),
/* harmony export */   "flatten": () => (/* reexport safe */ _flatten_js__WEBPACK_IMPORTED_MODULE_113__["default"]),
/* harmony export */   "foldl": () => (/* reexport safe */ _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]),
/* harmony export */   "foldr": () => (/* reexport safe */ _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__["default"]),
/* harmony export */   "forEach": () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_83__["default"]),
/* harmony export */   "functions": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   "get": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   "groupBy": () => (/* reexport safe */ _groupBy_js__WEBPACK_IMPORTED_MODULE_100__["default"]),
/* harmony export */   "has": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   "head": () => (/* reexport safe */ _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]),
/* harmony export */   "identity": () => (/* reexport safe */ _identity_js__WEBPACK_IMPORTED_MODULE_43__["default"]),
/* harmony export */   "include": () => (/* reexport safe */ _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]),
/* harmony export */   "includes": () => (/* reexport safe */ _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]),
/* harmony export */   "indexBy": () => (/* reexport safe */ _indexBy_js__WEBPACK_IMPORTED_MODULE_101__["default"]),
/* harmony export */   "indexOf": () => (/* reexport safe */ _indexOf_js__WEBPACK_IMPORTED_MODULE_79__["default"]),
/* harmony export */   "initial": () => (/* reexport safe */ _initial_js__WEBPACK_IMPORTED_MODULE_109__["default"]),
/* harmony export */   "inject": () => (/* reexport safe */ _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]),
/* harmony export */   "intersection": () => (/* reexport safe */ _intersection_js__WEBPACK_IMPORTED_MODULE_117__["default"]),
/* harmony export */   "invert": () => (/* reexport safe */ _invert_js__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   "invoke": () => (/* reexport safe */ _invoke_js__WEBPACK_IMPORTED_MODULE_92__["default"]),
/* harmony export */   "isArguments": () => (/* reexport safe */ _isArguments_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "isArray": () => (/* reexport safe */ _isArray_js__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "isArrayBuffer": () => (/* reexport safe */ _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "isDataView": () => (/* reexport safe */ _isDataView_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "isDate": () => (/* reexport safe */ _isDate_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "isElement": () => (/* reexport safe */ _isElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "isEmpty": () => (/* reexport safe */ _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "isEqual": () => (/* reexport safe */ _isEqual_js__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "isError": () => (/* reexport safe */ _isError_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "isFinite": () => (/* reexport safe */ _isFinite_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "isFunction": () => (/* reexport safe */ _isFunction_js__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "isMap": () => (/* reexport safe */ _isMap_js__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   "isMatch": () => (/* reexport safe */ _isMatch_js__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "isNaN": () => (/* reexport safe */ _isNaN_js__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "isNull": () => (/* reexport safe */ _isNull_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "isNumber": () => (/* reexport safe */ _isNumber_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "isObject": () => (/* reexport safe */ _isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "isRegExp": () => (/* reexport safe */ _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "isSet": () => (/* reexport safe */ _isSet_js__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   "isString": () => (/* reexport safe */ _isString_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "isSymbol": () => (/* reexport safe */ _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "isTypedArray": () => (/* reexport safe */ _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "isWeakMap": () => (/* reexport safe */ _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   "isWeakSet": () => (/* reexport safe */ _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   "iteratee": () => (/* reexport safe */ _iteratee_js__WEBPACK_IMPORTED_MODULE_60__["default"]),
/* harmony export */   "keys": () => (/* reexport safe */ _keys_js__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   "last": () => (/* reexport safe */ _last_js__WEBPACK_IMPORTED_MODULE_110__["default"]),
/* harmony export */   "lastIndexOf": () => (/* reexport safe */ _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__["default"]),
/* harmony export */   "map": () => (/* reexport safe */ _map_js__WEBPACK_IMPORTED_MODULE_84__["default"]),
/* harmony export */   "mapObject": () => (/* reexport safe */ _mapObject_js__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   "matcher": () => (/* reexport safe */ _matcher_js__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   "matches": () => (/* reexport safe */ _matcher_js__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   "max": () => (/* reexport safe */ _max_js__WEBPACK_IMPORTED_MODULE_95__["default"]),
/* harmony export */   "memoize": () => (/* reexport safe */ _memoize_js__WEBPACK_IMPORTED_MODULE_64__["default"]),
/* harmony export */   "methods": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   "min": () => (/* reexport safe */ _min_js__WEBPACK_IMPORTED_MODULE_96__["default"]),
/* harmony export */   "mixin": () => (/* reexport safe */ _mixin_js__WEBPACK_IMPORTED_MODULE_124__["default"]),
/* harmony export */   "negate": () => (/* reexport safe */ _negate_js__WEBPACK_IMPORTED_MODULE_70__["default"]),
/* harmony export */   "noop": () => (/* reexport safe */ _noop_js__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   "now": () => (/* reexport safe */ _now_js__WEBPACK_IMPORTED_MODULE_52__["default"]),
/* harmony export */   "object": () => (/* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_121__["default"]),
/* harmony export */   "omit": () => (/* reexport safe */ _omit_js__WEBPACK_IMPORTED_MODULE_107__["default"]),
/* harmony export */   "once": () => (/* reexport safe */ _once_js__WEBPACK_IMPORTED_MODULE_74__["default"]),
/* harmony export */   "pairs": () => (/* reexport safe */ _pairs_js__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   "partial": () => (/* reexport safe */ _partial_js__WEBPACK_IMPORTED_MODULE_61__["default"]),
/* harmony export */   "partition": () => (/* reexport safe */ _partition_js__WEBPACK_IMPORTED_MODULE_103__["default"]),
/* harmony export */   "pick": () => (/* reexport safe */ _pick_js__WEBPACK_IMPORTED_MODULE_106__["default"]),
/* harmony export */   "pluck": () => (/* reexport safe */ _pluck_js__WEBPACK_IMPORTED_MODULE_93__["default"]),
/* harmony export */   "property": () => (/* reexport safe */ _property_js__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   "propertyOf": () => (/* reexport safe */ _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   "random": () => (/* reexport safe */ _random_js__WEBPACK_IMPORTED_MODULE_51__["default"]),
/* harmony export */   "range": () => (/* reexport safe */ _range_js__WEBPACK_IMPORTED_MODULE_122__["default"]),
/* harmony export */   "reduce": () => (/* reexport safe */ _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]),
/* harmony export */   "reduceRight": () => (/* reexport safe */ _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__["default"]),
/* harmony export */   "reject": () => (/* reexport safe */ _reject_js__WEBPACK_IMPORTED_MODULE_88__["default"]),
/* harmony export */   "rest": () => (/* reexport safe */ _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]),
/* harmony export */   "restArguments": () => (/* reexport safe */ _restArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "result": () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   "sample": () => (/* reexport safe */ _sample_js__WEBPACK_IMPORTED_MODULE_98__["default"]),
/* harmony export */   "select": () => (/* reexport safe */ _filter_js__WEBPACK_IMPORTED_MODULE_87__["default"]),
/* harmony export */   "shuffle": () => (/* reexport safe */ _shuffle_js__WEBPACK_IMPORTED_MODULE_97__["default"]),
/* harmony export */   "size": () => (/* reexport safe */ _size_js__WEBPACK_IMPORTED_MODULE_105__["default"]),
/* harmony export */   "some": () => (/* reexport safe */ _some_js__WEBPACK_IMPORTED_MODULE_90__["default"]),
/* harmony export */   "sortBy": () => (/* reexport safe */ _sortBy_js__WEBPACK_IMPORTED_MODULE_99__["default"]),
/* harmony export */   "sortedIndex": () => (/* reexport safe */ _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__["default"]),
/* harmony export */   "tail": () => (/* reexport safe */ _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]),
/* harmony export */   "take": () => (/* reexport safe */ _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]),
/* harmony export */   "tap": () => (/* reexport safe */ _tap_js__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   "template": () => (/* reexport safe */ _template_js__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   "templateSettings": () => (/* reexport safe */ _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__["default"]),
/* harmony export */   "throttle": () => (/* reexport safe */ _throttle_js__WEBPACK_IMPORTED_MODULE_67__["default"]),
/* harmony export */   "times": () => (/* reexport safe */ _times_js__WEBPACK_IMPORTED_MODULE_50__["default"]),
/* harmony export */   "toArray": () => (/* reexport safe */ _toArray_js__WEBPACK_IMPORTED_MODULE_104__["default"]),
/* harmony export */   "toPath": () => (/* reexport safe */ _toPath_js__WEBPACK_IMPORTED_MODULE_46__["default"]),
/* harmony export */   "transpose": () => (/* reexport safe */ _unzip_js__WEBPACK_IMPORTED_MODULE_119__["default"]),
/* harmony export */   "unescape": () => (/* reexport safe */ _unescape_js__WEBPACK_IMPORTED_MODULE_54__["default"]),
/* harmony export */   "union": () => (/* reexport safe */ _union_js__WEBPACK_IMPORTED_MODULE_116__["default"]),
/* harmony export */   "uniq": () => (/* reexport safe */ _uniq_js__WEBPACK_IMPORTED_MODULE_115__["default"]),
/* harmony export */   "unique": () => (/* reexport safe */ _uniq_js__WEBPACK_IMPORTED_MODULE_115__["default"]),
/* harmony export */   "uniqueId": () => (/* reexport safe */ _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   "unzip": () => (/* reexport safe */ _unzip_js__WEBPACK_IMPORTED_MODULE_119__["default"]),
/* harmony export */   "values": () => (/* reexport safe */ _values_js__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   "where": () => (/* reexport safe */ _where_js__WEBPACK_IMPORTED_MODULE_94__["default"]),
/* harmony export */   "without": () => (/* reexport safe */ _without_js__WEBPACK_IMPORTED_MODULE_114__["default"]),
/* harmony export */   "wrap": () => (/* reexport safe */ _wrap_js__WEBPACK_IMPORTED_MODULE_69__["default"]),
/* harmony export */   "zip": () => (/* reexport safe */ _zip_js__WEBPACK_IMPORTED_MODULE_120__["default"])
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNull.js */ "./node_modules/underscore/modules/isNull.js");
/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isUndefined.js */ "./node_modules/underscore/modules/isUndefined.js");
/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBoolean.js */ "./node_modules/underscore/modules/isBoolean.js");
/* harmony import */ var _isElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isElement.js */ "./node_modules/underscore/modules/isElement.js");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isNumber.js */ "./node_modules/underscore/modules/isNumber.js");
/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isDate.js */ "./node_modules/underscore/modules/isDate.js");
/* harmony import */ var _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isRegExp.js */ "./node_modules/underscore/modules/isRegExp.js");
/* harmony import */ var _isError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isError.js */ "./node_modules/underscore/modules/isError.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/underscore/modules/isSymbol.js");
/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isArrayBuffer.js */ "./node_modules/underscore/modules/isArrayBuffer.js");
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isDataView.js */ "./node_modules/underscore/modules/isDataView.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");
/* harmony import */ var _isFinite_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isFinite.js */ "./node_modules/underscore/modules/isFinite.js");
/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isNaN.js */ "./node_modules/underscore/modules/isNaN.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/underscore/modules/isTypedArray.js");
/* harmony import */ var _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./isEmpty.js */ "./node_modules/underscore/modules/isEmpty.js");
/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./isMatch.js */ "./node_modules/underscore/modules/isMatch.js");
/* harmony import */ var _isEqual_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./isEqual.js */ "./node_modules/underscore/modules/isEqual.js");
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./isMap.js */ "./node_modules/underscore/modules/isMap.js");
/* harmony import */ var _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./isWeakMap.js */ "./node_modules/underscore/modules/isWeakMap.js");
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./isSet.js */ "./node_modules/underscore/modules/isSet.js");
/* harmony import */ var _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./isWeakSet.js */ "./node_modules/underscore/modules/isWeakSet.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pairs.js */ "./node_modules/underscore/modules/pairs.js");
/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./invert.js */ "./node_modules/underscore/modules/invert.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./functions.js */ "./node_modules/underscore/modules/functions.js");
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./extend.js */ "./node_modules/underscore/modules/extend.js");
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/underscore/modules/defaults.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./create.js */ "./node_modules/underscore/modules/create.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./clone.js */ "./node_modules/underscore/modules/clone.js");
/* harmony import */ var _tap_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./tap.js */ "./node_modules/underscore/modules/tap.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./get.js */ "./node_modules/underscore/modules/get.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./has.js */ "./node_modules/underscore/modules/has.js");
/* harmony import */ var _mapObject_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mapObject.js */ "./node_modules/underscore/modules/mapObject.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./constant.js */ "./node_modules/underscore/modules/constant.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./noop.js */ "./node_modules/underscore/modules/noop.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./toPath.js */ "./node_modules/underscore/modules/toPath.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");
/* harmony import */ var _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./propertyOf.js */ "./node_modules/underscore/modules/propertyOf.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");
/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./times.js */ "./node_modules/underscore/modules/times.js");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./random.js */ "./node_modules/underscore/modules/random.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./now.js */ "./node_modules/underscore/modules/now.js");
/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./escape.js */ "./node_modules/underscore/modules/escape.js");
/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./unescape.js */ "./node_modules/underscore/modules/unescape.js");
/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./templateSettings.js */ "./node_modules/underscore/modules/templateSettings.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./template.js */ "./node_modules/underscore/modules/template.js");
/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./result.js */ "./node_modules/underscore/modules/result.js");
/* harmony import */ var _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./uniqueId.js */ "./node_modules/underscore/modules/uniqueId.js");
/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./chain.js */ "./node_modules/underscore/modules/chain.js");
/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./iteratee.js */ "./node_modules/underscore/modules/iteratee.js");
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./bind.js */ "./node_modules/underscore/modules/bind.js");
/* harmony import */ var _bindAll_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./bindAll.js */ "./node_modules/underscore/modules/bindAll.js");
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./memoize.js */ "./node_modules/underscore/modules/memoize.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./delay.js */ "./node_modules/underscore/modules/delay.js");
/* harmony import */ var _defer_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./defer.js */ "./node_modules/underscore/modules/defer.js");
/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/underscore/modules/throttle.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/underscore/modules/debounce.js");
/* harmony import */ var _wrap_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./wrap.js */ "./node_modules/underscore/modules/wrap.js");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./compose.js */ "./node_modules/underscore/modules/compose.js");
/* harmony import */ var _after_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./after.js */ "./node_modules/underscore/modules/after.js");
/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./before.js */ "./node_modules/underscore/modules/before.js");
/* harmony import */ var _once_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./once.js */ "./node_modules/underscore/modules/once.js");
/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./findKey.js */ "./node_modules/underscore/modules/findKey.js");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./findLastIndex.js */ "./node_modules/underscore/modules/findLastIndex.js");
/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./sortedIndex.js */ "./node_modules/underscore/modules/sortedIndex.js");
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./indexOf.js */ "./node_modules/underscore/modules/indexOf.js");
/* harmony import */ var _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./lastIndexOf.js */ "./node_modules/underscore/modules/lastIndexOf.js");
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./find.js */ "./node_modules/underscore/modules/find.js");
/* harmony import */ var _findWhere_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./findWhere.js */ "./node_modules/underscore/modules/findWhere.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./reduce.js */ "./node_modules/underscore/modules/reduce.js");
/* harmony import */ var _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./reduceRight.js */ "./node_modules/underscore/modules/reduceRight.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./reject.js */ "./node_modules/underscore/modules/reject.js");
/* harmony import */ var _every_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./every.js */ "./node_modules/underscore/modules/every.js");
/* harmony import */ var _some_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./some.js */ "./node_modules/underscore/modules/some.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");
/* harmony import */ var _invoke_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./invoke.js */ "./node_modules/underscore/modules/invoke.js");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");
/* harmony import */ var _where_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./where.js */ "./node_modules/underscore/modules/where.js");
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./max.js */ "./node_modules/underscore/modules/max.js");
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./min.js */ "./node_modules/underscore/modules/min.js");
/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./shuffle.js */ "./node_modules/underscore/modules/shuffle.js");
/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./sample.js */ "./node_modules/underscore/modules/sample.js");
/* harmony import */ var _sortBy_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./sortBy.js */ "./node_modules/underscore/modules/sortBy.js");
/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./groupBy.js */ "./node_modules/underscore/modules/groupBy.js");
/* harmony import */ var _indexBy_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./indexBy.js */ "./node_modules/underscore/modules/indexBy.js");
/* harmony import */ var _countBy_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./countBy.js */ "./node_modules/underscore/modules/countBy.js");
/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./partition.js */ "./node_modules/underscore/modules/partition.js");
/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./toArray.js */ "./node_modules/underscore/modules/toArray.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./size.js */ "./node_modules/underscore/modules/size.js");
/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./pick.js */ "./node_modules/underscore/modules/pick.js");
/* harmony import */ var _omit_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./omit.js */ "./node_modules/underscore/modules/omit.js");
/* harmony import */ var _first_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./first.js */ "./node_modules/underscore/modules/first.js");
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./initial.js */ "./node_modules/underscore/modules/initial.js");
/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./last.js */ "./node_modules/underscore/modules/last.js");
/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./rest.js */ "./node_modules/underscore/modules/rest.js");
/* harmony import */ var _compact_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./compact.js */ "./node_modules/underscore/modules/compact.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./flatten.js */ "./node_modules/underscore/modules/flatten.js");
/* harmony import */ var _without_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./without.js */ "./node_modules/underscore/modules/without.js");
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./uniq.js */ "./node_modules/underscore/modules/uniq.js");
/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./union.js */ "./node_modules/underscore/modules/union.js");
/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./intersection.js */ "./node_modules/underscore/modules/intersection.js");
/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./difference.js */ "./node_modules/underscore/modules/difference.js");
/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./unzip.js */ "./node_modules/underscore/modules/unzip.js");
/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./zip.js */ "./node_modules/underscore/modules/zip.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./object.js */ "./node_modules/underscore/modules/object.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./range.js */ "./node_modules/underscore/modules/range.js");
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./chunk.js */ "./node_modules/underscore/modules/chunk.js");
/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./mixin.js */ "./node_modules/underscore/modules/mixin.js");
/* harmony import */ var _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./underscore-array-methods.js */ "./node_modules/underscore/modules/underscore-array-methods.js");
// Named Exports
// =============

//     Underscore.js 1.13.6
//     https://underscorejs.org
//     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Baseline setup.



// Object Functions
// ----------------
// Our most fundamental functions operate on any JavaScript object.
// Most functions in Underscore depend on at least one function in this section.

// A group of functions that check the types of core JavaScript values.
// These are often informally referred to as the "isType" functions.



























// Functions that treat an object as a dictionary of key-value pairs.
















// Utility Functions
// -----------------
// A bit of a grab bag: Predicate-generating functions for use with filters and
// loops, string escaping and templating, create random numbers and unique ids,
// and functions that facilitate Underscore's chaining and iteration conventions.



















// Function (ahem) Functions
// -------------------------
// These functions take a function as an argument and return a new function
// as the result. Also known as higher-order functions.















// Finders
// -------
// Functions that extract (the position of) a single element from an object
// or array based on some criterion.









// Collection Functions
// --------------------
// Functions that work on any collection of elements: either an array, or
// an object of key-value pairs.
























// `_.pick` and `_.omit` are actually object functions, but we put
// them here in order to create a more natural reading order in the
// monolithic build as they depend on `_.contains`.



// Array Functions
// ---------------
// Functions that operate on arrays (and array-likes) only, because they’re
// expressed in terms of operations on an ordered list of values.

















// OOP
// ---
// These modules support the "object-oriented" calling style. See also
// `underscore.js` and `index-default.js`.




/***/ }),

/***/ "./node_modules/underscore/modules/indexBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexBy.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");


// Indexes the object's values by a criterion, similar to `_.groupBy`, but for
// when you know that your index values will be unique.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  result[key] = value;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/indexOf.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexOf.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortedIndex.js */ "./node_modules/underscore/modules/sortedIndex.js");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createIndexFinder.js */ "./node_modules/underscore/modules/_createIndexFinder.js");




// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, _findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"], _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/initial.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/initial.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initial)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__.slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}


/***/ }),

/***/ "./node_modules/underscore/modules/intersection.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/intersection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ intersection)
/* harmony export */ });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");



// Produce an array that contains every item shared between all the
// passed-in arrays.
function intersection(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array); i < length; i++) {
    var item = array[i];
    if ((0,_contains_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!(0,_contains_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/invert.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invert.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invert)
/* harmony export */ });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Invert the keys and values of an object. The values must be serializable.
function invert(obj) {
  var result = {};
  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/invoke.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invoke.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");






// Invoke a method (with arguments) on every item in a collection.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, path, args) {
  var contextPath, func;
  if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
    func = path;
  } else {
    path = (0,_toPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(path);
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return (0,_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = (0,_deepGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
}));


/***/ }),

/***/ "./node_modules/underscore/modules/isArguments.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isArguments.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");



var isArguments = (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Arguments');

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return (0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'callee');
    };
  }
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);


/***/ }),

/***/ "./node_modules/underscore/modules/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");



// Is a given value an array?
// Delegates to ECMA5's native `Array.isArray`.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_setup_js__WEBPACK_IMPORTED_MODULE_0__.nativeIsArray || (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Array'));


/***/ }),

/***/ "./node_modules/underscore/modules/isArrayBuffer.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/isArrayBuffer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('ArrayBuffer'));


/***/ }),

/***/ "./node_modules/underscore/modules/isBoolean.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isBoolean.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBoolean)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || _setup_js__WEBPACK_IMPORTED_MODULE_0__.toString.call(obj) === '[object Boolean]';
}


/***/ }),

/***/ "./node_modules/underscore/modules/isDataView.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isDataView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayBuffer.js */ "./node_modules/underscore/modules/isArrayBuffer.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");





var isDataView = (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('DataView');

// In IE 10 - Edge 13, we need a different heuristic
// to determine whether an object is a `DataView`.
function ie10IsDataView(obj) {
  return obj != null && (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj.getInt8) && (0,_isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.buffer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__.hasStringTagBug ? ie10IsDataView : isDataView);


/***/ }),

/***/ "./node_modules/underscore/modules/isDate.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isDate.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'));


/***/ }),

/***/ "./node_modules/underscore/modules/isElement.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isElement.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isElement)
/* harmony export */ });
// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}


/***/ }),

/***/ "./node_modules/underscore/modules/isEmpty.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEmpty.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isEmpty)
/* harmony export */ });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");






// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
function isEmpty(obj) {
  if (obj == null) return true;
  // Skip the more expensive `toString`-based type checks if `obj` has no
  // `.length`.
  var length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  if (typeof length == 'number' && (
    (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) || (0,_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)
  )) return length === 0;
  return (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_keys_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj)) === 0;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isEqual.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEqual.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isEqual)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getByteLength.js */ "./node_modules/underscore/modules/_getByteLength.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/underscore/modules/isTypedArray.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isDataView.js */ "./node_modules/underscore/modules/isDataView.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
/* harmony import */ var _toBufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_toBufferView.js */ "./node_modules/underscore/modules/_toBufferView.js");











// We use this string twice, so give it a name for minification.
var tagDataView = '[object DataView]';

// Internal recursive comparison function for `_.isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
}

// Internal recursive comparison function for `_.isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]) a = a._wrapped;
  if (b instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = _setup_js__WEBPACK_IMPORTED_MODULE_1__.toString.call(a);
  if (className !== _setup_js__WEBPACK_IMPORTED_MODULE_1__.toString.call(b)) return false;
  // Work around a bug in IE 10 - Edge 13.
  if (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_5__.hasStringTagBug && className == '[object Object]' && (0,_isDataView_js__WEBPACK_IMPORTED_MODULE_6__["default"])(a)) {
    if (!(0,_isDataView_js__WEBPACK_IMPORTED_MODULE_6__["default"])(b)) return false;
    className = tagDataView;
  }
  switch (className) {
    // These types are compared by value.
    case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return _setup_js__WEBPACK_IMPORTED_MODULE_1__.SymbolProto.valueOf.call(a) === _setup_js__WEBPACK_IMPORTED_MODULE_1__.SymbolProto.valueOf.call(b);
    case '[object ArrayBuffer]':
    case tagDataView:
      // Coerce to typed array so we can fall through.
      return deepEq((0,_toBufferView_js__WEBPACK_IMPORTED_MODULE_9__["default"])(a), (0,_toBufferView_js__WEBPACK_IMPORTED_MODULE_9__["default"])(b), aStack, bStack);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a)) {
      var byteLength = (0,_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a);
      if (byteLength !== (0,_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b)) return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;
      areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"])(aCtor) && aCtor instanceof aCtor &&
                             (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"])(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_7__["default"])(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if ((0,_keys_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!((0,_has_js__WEBPACK_IMPORTED_MODULE_8__["default"])(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

// Perform a deep comparison to check if two objects are equal.
function isEqual(a, b) {
  return eq(a, b);
}


/***/ }),

/***/ "./node_modules/underscore/modules/isError.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isError.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Error'));


/***/ }),

/***/ "./node_modules/underscore/modules/isFinite.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isFinite.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFinite)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/underscore/modules/isSymbol.js");



// Is a given object a finite number?
function isFinite(obj) {
  return !(0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && (0,_setup_js__WEBPACK_IMPORTED_MODULE_0__._isFinite)(obj) && !isNaN(parseFloat(obj));
}


/***/ }),

/***/ "./node_modules/underscore/modules/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isFunction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");



var isFunction = (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Function');

// Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old
// v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = _setup_js__WEBPACK_IMPORTED_MODULE_1__.root.document && _setup_js__WEBPACK_IMPORTED_MODULE_1__.root.document.childNodes;
if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ "./node_modules/underscore/modules/isMap.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isMap.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "./node_modules/underscore/modules/_methodFingerprint.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__.isIE11 ? (0,_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.ie11fingerprint)(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.mapMethods) : (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Map'));


/***/ }),

/***/ "./node_modules/underscore/modules/isMatch.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isMatch.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMatch)
/* harmony export */ });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Returns whether an object has a given set of `key:value` pairs.
function isMatch(object, attrs) {
  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isNaN.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isNaN.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isNaN)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumber.js */ "./node_modules/underscore/modules/isNumber.js");



// Is the given value `NaN`?
function isNaN(obj) {
  return (0,_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && (0,_setup_js__WEBPACK_IMPORTED_MODULE_0__._isNaN)(obj);
}


/***/ }),

/***/ "./node_modules/underscore/modules/isNull.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isNull.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isNull)
/* harmony export */ });
// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isNumber.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isNumber.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Number'));


/***/ }),

/***/ "./node_modules/underscore/modules/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isObject)
/* harmony export */ });
// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}


/***/ }),

/***/ "./node_modules/underscore/modules/isRegExp.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isRegExp.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('RegExp'));


/***/ }),

/***/ "./node_modules/underscore/modules/isSet.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isSet.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "./node_modules/underscore/modules/_methodFingerprint.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__.isIE11 ? (0,_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.ie11fingerprint)(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.setMethods) : (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Set'));


/***/ }),

/***/ "./node_modules/underscore/modules/isString.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isString.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('String'));


/***/ }),

/***/ "./node_modules/underscore/modules/isSymbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isSymbol.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Symbol'));


/***/ }),

/***/ "./node_modules/underscore/modules/isTypedArray.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/isTypedArray.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDataView.js */ "./node_modules/underscore/modules/isDataView.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/underscore/modules/constant.js");
/* harmony import */ var _isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isBufferLike.js */ "./node_modules/underscore/modules/_isBufferLike.js");





// Is a given value a typed array?
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function isTypedArray(obj) {
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__.nativeIsView ? ((0,_setup_js__WEBPACK_IMPORTED_MODULE_0__.nativeIsView)(obj) && !(0,_isDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) :
                (0,_isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj) && typedArrayPattern.test(_setup_js__WEBPACK_IMPORTED_MODULE_0__.toString.call(obj));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_setup_js__WEBPACK_IMPORTED_MODULE_0__.supportsArrayBuffer ? isTypedArray : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(false));


/***/ }),

/***/ "./node_modules/underscore/modules/isUndefined.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isUndefined.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isUndefined)
/* harmony export */ });
// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isWeakMap.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakMap.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "./node_modules/underscore/modules/_methodFingerprint.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__.isIE11 ? (0,_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.ie11fingerprint)(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.weakMapMethods) : (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('WeakMap'));


/***/ }),

/***/ "./node_modules/underscore/modules/isWeakSet.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakSet.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('WeakSet'));


/***/ }),

/***/ "./node_modules/underscore/modules/iteratee.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/iteratee.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ iteratee)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/underscore/modules/_baseIteratee.js");



// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only `argCount` argument.
function iteratee(value, context) {
  return (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, context, Infinity);
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee = iteratee;


/***/ }),

/***/ "./node_modules/underscore/modules/keys.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/keys.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keys)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ "./node_modules/underscore/modules/_collectNonEnumProps.js");





// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
function keys(obj) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return [];
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__.nativeKeys) return (0,_setup_js__WEBPACK_IMPORTED_MODULE_1__.nativeKeys)(obj);
  var keys = [];
  for (var key in obj) if ((0,_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, key)) keys.push(key);
  // Ahem, IE < 9.
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__.hasEnumBug) (0,_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, keys);
  return keys;
}


/***/ }),

/***/ "./node_modules/underscore/modules/last.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/last.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ last)
/* harmony export */ });
/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest.js */ "./node_modules/underscore/modules/rest.js");


// Get the last element of an array. Passing **n** will return the last N
// values in the array.
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return (0,_rest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Math.max(0, array.length - n));
}


/***/ }),

/***/ "./node_modules/underscore/modules/lastIndexOf.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/lastIndexOf.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findLastIndex.js */ "./node_modules/underscore/modules/findLastIndex.js");
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createIndexFinder.js */ "./node_modules/underscore/modules/_createIndexFinder.js");



// Return the position of the last occurrence of an item in an array,
// or -1 if the item is not included in the array.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(-1, _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/map.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/map.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var _keys = !(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),

/***/ "./node_modules/underscore/modules/mapObject.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/mapObject.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapObject)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");



// Returns the results of applying the `iteratee` to each element of `obj`.
// In contrast to `_.map` it returns an object.
function mapObject(obj, iteratee, context) {
  iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
      length = _keys.length,
      results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),

/***/ "./node_modules/underscore/modules/matcher.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/matcher.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ matcher)
/* harmony export */ });
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");
/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isMatch.js */ "./node_modules/underscore/modules/isMatch.js");



// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
function matcher(attrs) {
  attrs = (0,_extendOwn_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attrs);
  return function(obj) {
    return (0,_isMatch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, attrs);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/max.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/max.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ max)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");





// Return the maximum element (or element-based computation).
function max(obj, iteratee, context) {
  var result = -Infinity, lastComputed = -Infinity,
      value, computed;
  if (iteratee == null || (typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null)) {
    obj = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj : (0,_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context);
    (0,_each_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed > lastComputed || (computed === -Infinity && result === -Infinity)) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/memoize.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/memoize.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");


// Memoize an expensive function by storing its results.
function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!(0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}


/***/ }),

/***/ "./node_modules/underscore/modules/min.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/min.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ min)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");





// Return the minimum element (or element-based computation).
function min(obj, iteratee, context) {
  var result = Infinity, lastComputed = Infinity,
      value, computed;
  if (iteratee == null || (typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null)) {
    obj = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj : (0,_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context);
    (0,_each_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed < lastComputed || (computed === Infinity && result === Infinity)) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/mixin.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/mixin.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mixin)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/underscore/modules/functions.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_chainResult.js */ "./node_modules/underscore/modules/_chainResult.js");






// Add your own custom functions to the Underscore object.
function mixin(obj) {
  (0,_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_functions_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj), function(name) {
    var func = _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"][name] = obj[name];
    _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
      var args = [this._wrapped];
      _setup_js__WEBPACK_IMPORTED_MODULE_3__.push.apply(args, arguments);
      return (0,_chainResult_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, func.apply(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"], args));
    };
  });
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}


/***/ }),

/***/ "./node_modules/underscore/modules/negate.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/negate.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ negate)
/* harmony export */ });
// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/noop.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ noop)
/* harmony export */ });
// Predicate-generating function. Often useful outside of Underscore.
function noop(){}


/***/ }),

/***/ "./node_modules/underscore/modules/now.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/now.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// A (possibly faster) way to get the current timestamp as an integer.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Date.now || function() {
  return new Date().getTime();
});


/***/ }),

/***/ "./node_modules/underscore/modules/object.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/object.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ object)
/* harmony export */ });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");


// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of `_.pairs`.
function object(list, values) {
  var result = {};
  for (var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/omit.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/omit.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");
/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pick.js */ "./node_modules/underscore/modules/pick.js");








// Return a copy of the object without the disallowed properties.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  var iteratee = keys[0], context;
  if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
    iteratee = (0,_negate_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee);
    if (keys.length > 1) context = keys[1];
  } else {
    keys = (0,_map_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_flatten_js__WEBPACK_IMPORTED_MODULE_4__["default"])(keys, false, false), String);
    iteratee = function(value, key) {
      return !(0,_contains_js__WEBPACK_IMPORTED_MODULE_5__["default"])(keys, key);
    };
  }
  return (0,_pick_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj, iteratee, context);
}));


/***/ }),

/***/ "./node_modules/underscore/modules/once.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/once.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before.js */ "./node_modules/underscore/modules/before.js");



// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_before_js__WEBPACK_IMPORTED_MODULE_1__["default"], 2));


/***/ }),

/***/ "./node_modules/underscore/modules/pairs.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pairs.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pairs)
/* harmony export */ });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Convert an object into a list of `[key, value]` pairs.
// The opposite of `_.object` with one argument.
function pairs(obj) {
  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;
}


/***/ }),

/***/ "./node_modules/underscore/modules/partial.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/partial.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_executeBound.js */ "./node_modules/underscore/modules/_executeBound.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");




// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. `_` acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
var partial = (0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return (0,_executeBound_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = _underscore_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (partial);


/***/ }),

/***/ "./node_modules/underscore/modules/partition.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/partition.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");


// Split a collection into two arrays: one whose elements all pass the given
// truth test, and one whose elements all do not pass the truth test.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true));


/***/ }),

/***/ "./node_modules/underscore/modules/pick.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/pick.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");
/* harmony import */ var _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_keyInObj.js */ "./node_modules/underscore/modules/_keyInObj.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");







// Return a copy of the object only containing the allowed properties.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  var result = {}, iteratee = keys[0];
  if (obj == null) return result;
  if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
    if (keys.length > 1) iteratee = (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, keys[1]);
    keys = (0,_allKeys_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
  } else {
    iteratee = _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    keys = (0,_flatten_js__WEBPACK_IMPORTED_MODULE_5__["default"])(keys, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/pluck.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pluck.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pluck)
/* harmony export */ });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");



// Convenience version of a common use case of `_.map`: fetching a property.
function pluck(obj, key) {
  return (0,_map_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, (0,_property_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key));
}


/***/ }),

/***/ "./node_modules/underscore/modules/property.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/property.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ property)
/* harmony export */ });
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");



// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indices.
function property(path) {
  path = (0,_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  return function(obj) {
    return (0,_deepGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, path);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/propertyOf.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/propertyOf.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ propertyOf)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.js */ "./node_modules/underscore/modules/noop.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./node_modules/underscore/modules/get.js");



// Generates a function for a given object that returns a given property.
function propertyOf(obj) {
  if (obj == null) return _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  return function(path) {
    return (0,_get_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, path);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/random.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/random.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ random)
/* harmony export */ });
// Return a random integer between `min` and `max` (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}


/***/ }),

/***/ "./node_modules/underscore/modules/range.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/range.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ range)
/* harmony export */ });
// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}


/***/ }),

/***/ "./node_modules/underscore/modules/reduce.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reduce.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ "./node_modules/underscore/modules/_createReduce.js");


// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));


/***/ }),

/***/ "./node_modules/underscore/modules/reduceRight.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/reduceRight.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ "./node_modules/underscore/modules/_createReduce.js");


// The right-associative version of reduce, also known as `foldr`.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1));


/***/ }),

/***/ "./node_modules/underscore/modules/reject.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reject.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reject)
/* harmony export */ });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");




// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, (0,_negate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(predicate)), context);
}


/***/ }),

/***/ "./node_modules/underscore/modules/rest.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/rest.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rest)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Returns everything but the first entry of the `array`. Especially useful on
// the `arguments` object. Passing an **n** will return the rest N values in the
// `array`.
function rest(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__.slice.call(array, n == null || guard ? 1 : n);
}


/***/ }),

/***/ "./node_modules/underscore/modules/restArguments.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/restArguments.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ restArguments)
/* harmony export */ });
// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/result.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/result.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ result)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");



// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
function result(obj, path, fallback) {
  path = (0,_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  var length = path.length;
  if (!length) {
    return (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }
    obj = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prop) ? prop.call(obj) : prop;
  }
  return obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/sample.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sample.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sample)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random.js */ "./node_modules/underscore/modules/random.js");
/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toArray.js */ "./node_modules/underscore/modules/toArray.js");






// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `_.map`.
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) obj = (0,_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    return obj[(0,_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj.length - 1)];
  }
  var sample = (0,_toArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj);
  var length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = (0,_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}


/***/ }),

/***/ "./node_modules/underscore/modules/shuffle.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/shuffle.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shuffle)
/* harmony export */ });
/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample.js */ "./node_modules/underscore/modules/sample.js");


// Shuffle a collection.
function shuffle(obj) {
  return (0,_sample_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Infinity);
}


/***/ }),

/***/ "./node_modules/underscore/modules/size.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/size.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");



// Return the number of elements in a collection.
function size(obj) {
  if (obj == null) return 0;
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj.length : (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj).length;
}


/***/ }),

/***/ "./node_modules/underscore/modules/some.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/some.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ some)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




// Determine if at least one element in the object passes a truth test.
function some(obj, predicate, context) {
  predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = !(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}


/***/ }),

/***/ "./node_modules/underscore/modules/sortBy.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sortBy.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortBy)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");




// Sort the object's values by a criterion produced by an iteratee.
function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  return (0,_pluck_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, function(value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), 'value');
}


/***/ }),

/***/ "./node_modules/underscore/modules/sortedIndex.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/sortedIndex.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortedIndex)
/* harmony export */ });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");



// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
function sortedIndex(array, obj, iteratee, context) {
  iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
}


/***/ }),

/***/ "./node_modules/underscore/modules/tap.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/tap.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tap)
/* harmony export */ });
// Invokes `interceptor` with the `obj` and then returns `obj`.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/template.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/template.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/underscore/modules/defaults.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templateSettings.js */ "./node_modules/underscore/modules/templateSettings.js");




// When customizing `_.templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

function escapeChar(match) {
  return '\\' + escapes[match];
}

// In order to prevent third-party code injection through
// `_.templateSettings.variable`, we test it against the following regular
// expression. It is intentionally a bit more liberal than just matching valid
// identifiers, but still prevents possible loopholes through defaults or
// destructuring assignment.
var bareIdentifier = /^\s*(\w|\$)+\s*$/;

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = (0,_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"].templateSettings);

  // Combine delimiters into one regular expression via alternation.
  var matcher = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }

    // Adobe VMs need the match returned to produce the correct offset.
    return match;
  });
  source += "';\n";

  var argument = settings.variable;
  if (argument) {
    // Insure against third-party code injection. (CVE-2021-23358)
    if (!bareIdentifier.test(argument)) throw new Error(
      'variable is not a bare identifier: ' + argument
    );
  } else {
    // If a variable is not specified, place data values in local scope.
    source = 'with(obj||{}){\n' + source + '}\n';
    argument = 'obj';
  }

  source = "var __t,__p='',__j=Array.prototype.join," +
    "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + 'return __p;\n';

  var render;
  try {
    render = new Function(argument, '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function(data) {
    return render.call(this, data, _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  };

  // Provide the compiled source as a convenience for precompilation.
  template.source = 'function(' + argument + '){\n' + source + '}';

  return template;
}


/***/ }),

/***/ "./node_modules/underscore/modules/templateSettings.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/templateSettings.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");


// By default, Underscore uses ERB-style template delimiters. Change the
// following template settings to use alternative delimiters.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
});


/***/ }),

/***/ "./node_modules/underscore/modules/throttle.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/throttle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now.js */ "./node_modules/underscore/modules/now.js");


// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : (0,_now_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = (0,_now_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}


/***/ }),

/***/ "./node_modules/underscore/modules/times.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/times.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ times)
/* harmony export */ });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");


// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
}


/***/ }),

/***/ "./node_modules/underscore/modules/toArray.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/toArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toArray)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");








// Safely create a real, live array from anything iterable.
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj) return [];
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return _setup_js__WEBPACK_IMPORTED_MODULE_1__.slice.call(obj);
  if ((0,_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
    // Keep surrogate pair characters together.
    return obj.match(reStrSymbol);
  }
  if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)) return (0,_map_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, _identity_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return (0,_values_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj);
}


/***/ }),

/***/ "./node_modules/underscore/modules/toPath.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/toPath.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPath)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");



// Normalize a (deep) property `path` to array.
// Like `_.iteratee`, this function can be customized.
function toPath(path) {
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path) ? path : [path];
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].toPath = toPath;


/***/ }),

/***/ "./node_modules/underscore/modules/underscore-array-methods.js":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/underscore-array-methods.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chainResult.js */ "./node_modules/underscore/modules/_chainResult.js");





// Add all mutator `Array` functions to the wrapper.
(0,_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__.ArrayProto[name];
  _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) {
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) {
        delete obj[0];
      }
    }
    return (0,_chainResult_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, obj);
  };
});

// Add all accessor `Array` functions to the wrapper.
(0,_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['concat', 'join', 'slice'], function(name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__.ArrayProto[name];
  _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) obj = method.apply(obj, arguments);
    return (0,_chainResult_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, obj);
  };
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/underscore/modules/underscore.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/underscore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// If Underscore is called as a function, it returns a wrapped object that can
// be used OO-style. This wrapper holds altered versions of all functions added
// through `_.mixin`. Wrapped objects may be chained.
function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

_.VERSION = _setup_js__WEBPACK_IMPORTED_MODULE_0__.VERSION;

// Extracts the result from a wrapped and chained object.
_.prototype.value = function() {
  return this._wrapped;
};

// Provide unwrapping proxies for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function() {
  return String(this._wrapped);
};


/***/ }),

/***/ "./node_modules/underscore/modules/unescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/unescape.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ "./node_modules/underscore/modules/_createEscaper.js");
/* harmony import */ var _unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unescapeMap.js */ "./node_modules/underscore/modules/_unescapeMap.js");



// Function for unescaping strings from HTML interpolation.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/union.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/union.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniq.js */ "./node_modules/underscore/modules/uniq.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");




// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(arrays) {
  return (0,_uniq_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_flatten_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arrays, true, true));
}));


/***/ }),

/***/ "./node_modules/underscore/modules/uniq.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/uniq.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniq)
/* harmony export */ });
/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isBoolean.js */ "./node_modules/underscore/modules/isBoolean.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");





// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
function uniq(array, isSorted, iteratee, context) {
  if (!(0,_isBoolean_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!(0,_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!(0,_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value)) {
      result.push(value);
    }
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/uniqueId.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/uniqueId.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniqueId)
/* harmony export */ });
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}


/***/ }),

/***/ "./node_modules/underscore/modules/unzip.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/unzip.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unzip)
/* harmony export */ });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ "./node_modules/underscore/modules/max.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");




// Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
function unzip(array) {
  var length = (array && (0,_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]).length) || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = (0,_pluck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, index);
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/values.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/values.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ values)
/* harmony export */ });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Retrieve the values of an object's properties.
function values(obj) {
  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  var length = _keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}


/***/ }),

/***/ "./node_modules/underscore/modules/where.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/where.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ where)
/* harmony export */ });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");



// Convenience version of a common use case of `_.filter`: selecting only
// objects containing specific `key:value` pairs.
function where(obj, attrs) {
  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, (0,_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs));
}


/***/ }),

/***/ "./node_modules/underscore/modules/without.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/without.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difference.js */ "./node_modules/underscore/modules/difference.js");



// Return a version of the array that does not contain the specified value(s).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(array, otherArrays) {
  return (0,_difference_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, otherArrays);
}));


/***/ }),

/***/ "./node_modules/underscore/modules/wrap.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/wrap.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");


// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
function wrap(func, wrapper) {
  return (0,_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapper, func);
}


/***/ }),

/***/ "./node_modules/underscore/modules/zip.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/zip.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unzip.js */ "./node_modules/underscore/modules/unzip.js");



// Zip together multiple lists into a single array -- elements that share
// an index go together.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_unzip_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./src/js/utilities/animation.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imageLoader */ "./src/js/imageLoader.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pageLoad */ "./src/js/pageLoad.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities/utilities.js");
/* eslint-disable no-plusplus */





// Show the right ship, position and axis on ship-placing stage.
// Will check axis, the cord given and ship type to make it possible.
function shipPreviewExpander(cord, player, ship) {
  const dirArr = document.getElementsByClassName('dir-option');
  // I suppose this reads the text value...
  const axis = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  // Take the coord and use it to build the body;
  const start = [...cord];
  const body = Array(ship.length)
    .fill()
    .map(() => {
      if (axis === 'horizontal') {
        return [start[0], start[1]++];
      }
      return [start[0]++, start[1]];
    });

  // Check if there's any overlap
  const overlap = player
    .board
    .list
    .some((playerShip) => playerShip
      .position.some((shipPos) => body
        .some((bodyPos) => underscore__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual(bodyPos, shipPos))));
  return {
    body,
    overlap,
  };
}

// const dirOptions = document.getElementsByClassName('dir-option');
// const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
// const img = loadIcon(type, cord.indexOf(coordinate) + 1, axisOption);
// box.style.backgroundImage = `url('${img}')`;

// Responsible for animating preview
function shipPreview(cord, boardBoxes, player, ship, event) {
  // Get axis information of ship
  const dirOptions = document.getElementsByClassName('dir-option');
  const axisOption = [...dirOptions].filter((dirObj) => dirObj.checked)[0].value;
  cord.forEach((pos, index) => {
    const box = [...boardBoxes][pos[0] * 10 + pos[1]];
    const img = (0,_imageLoader__WEBPACK_IMPORTED_MODULE_1__.loadIcon)(ship.name, index + 1, axisOption);
    box.style.backgroundImage = `url('${img}')`;
    const eventListener = () => {
      box.style.backgroundImage = '';
    };
    event.target.addEventListener('mouseout', eventListener);
    // Remove all event listener once a cell is clicked
    event.target.addEventListener('click', () => {
      boardBoxes.forEach((cell) => {
        (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.removeAllEventListener)(cell);
      });
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_2__.loadBoard)(player, player.isTurn ? 'left' : 'right');
    });
  });
}

// Function for animating ship preview everything it hovers onto a box or out of it
function animationEvent(event, boardBoxes, player, ship) {
  const { body, overlap } = shipPreviewExpander(
    event.currentTarget.dataset.pos
      .split(',')
      .map((x) => parseInt(x, 10)),
    player,
    ship,
  );

  const isShipOverflowing = body.find((pos) => pos[1] >= 10);
  // Do nothing
  // if ship is overflowing the board, or colliding wiht othership
  if (overlap || isShipOverflowing) {
    return;
  }

  shipPreview(body, boardBoxes, player, ship, event);
}

// Function for adding animation
function addAnimationEvent(add, boardBoxes, player, ship) {
  const eventListener = (event) => {
    animationEvent(event, boardBoxes, player, ship);
  };
  if (add) {
    boardBoxes.forEach((box) => {
      box.addEventListener('mouseover', eventListener);
    });
  } else {
    boardBoxes.forEach((box) => {
      box.removeEventListener('mouseover', eventListener);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAnimationEvent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTztBQUNQLE1BQU0sb0RBQVM7QUFDZixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8vVXNlcnMvbWFjYm9va2Fpci9yZXBvcy9iYXR0bGVzaGlwL3NyYy9hc3NldHMvc2hpcHN8c3luY3xub25yZWN1cnNpdmV8L1xcLnBuZyQvIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvaW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy91dGlsaXRpZXMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NiLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jaGFpblJlc3VsdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY29sbGVjdE5vbkVudW1Qcm9wcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY3JlYXRlQXNzaWduZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NyZWF0ZUVzY2FwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NyZWF0ZUluZGV4RmluZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY3JlYXRlUmVkdWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jcmVhdGVTaXplUHJvcGVydHlDaGVjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fZGVlcEdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fZXNjYXBlTWFwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19leGVjdXRlQm91bmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2ZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2dldEJ5dGVMZW5ndGguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2dldExlbmd0aC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9faGFzT2JqZWN0VGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9faXNCdWZmZXJMaWtlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19rZXlJbk9iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fbWV0aG9kRmluZ2VycHJpbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX29wdGltaXplQ2IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX3NldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19zaGFsbG93UHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX3N0cmluZ1RhZ0J1Zy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fdGFnVGVzdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL190b0J1ZmZlclZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX3RvUGF0aC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fdW5lc2NhcGVNYXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvYWxsS2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9iZWZvcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvYmluZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9iaW5kQWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NoYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NodW5rLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2Nsb25lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NvbXBhY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9jb3VudEJ5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9kZWZlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9kZWxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9kaWZmZXJlbmNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2VhY2guanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZXNjYXBlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2V2ZXJ5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9leHRlbmRPd24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmlsdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmluZEluZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2ZpbmRLZXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmluZExhc3RJbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9maW5kV2hlcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmlyc3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmxhdHRlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZ2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2dyb3VwQnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lkZW50aXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2luZGV4LWFsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pbmRleC1kZWZhdWx0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2luZGV4QnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW5kZXhPZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pbml0aWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2ludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pbnZlcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW52b2tlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNEYXRhVmlldy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0RhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0Vycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzRmluaXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNNYXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNNYXRjaC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc05hTi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc051bGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNTZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzVW5kZWZpbmVkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzV2Vha01hcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc1dlYWtTZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMva2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9sYXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2xhc3RJbmRleE9mLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL21hcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9tYXBPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9tYXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9taW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbWl4aW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbmVnYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL25vb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbm93LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9vbWl0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL29uY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcGFpcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcGFydGlhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9wYXJ0aXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcGljay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9wbHVjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9wcm9wZXJ0eU9mLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9yYW5nZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcmVkdWNlUmlnaHQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcmVqZWN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3Jlc3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcmVzdEFyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvc2FtcGxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3NodWZmbGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvc2l6ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9zb21lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3NvcnRCeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9zb3J0ZWRJbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy90YXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdGVtcGxhdGVTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy90aW1lcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy90b0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmRlcnNjb3JlLWFycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdW5kZXJzY29yZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmVzY2FwZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmlxLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3VuaXF1ZUlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3VuemlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy93aGVyZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy93aXRob3V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3dyYXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvemlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3V0aWxpdGllcy9hbmltYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtaG9yaV8wMy5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzA0LnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDEucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wMi5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtdmVydF8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC12ZXJ0XzAzLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDQucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wMS5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDMucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzA1LnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDEucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wMi5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzAzLnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDQucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wNS5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItaG9yaV8wMS5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItaG9yaV8wMi5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci1ob3JpXzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItaG9yaV8wMy5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItdmVydF8wMS5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci12ZXJ0XzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItdmVydF8wMi5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItdmVydF8wMy5wbmdcIixcblx0XCIuL3BhdHJvbC1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9wYXRyb2wtaG9yaV8wMS5wbmdcIixcblx0XCIuL3BhdHJvbC1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9wYXRyb2wtaG9yaV8wMi5wbmdcIixcblx0XCIuL3BhdHJvbC12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9wYXRyb2wtdmVydF8wMS5wbmdcIixcblx0XCIuL3BhdHJvbC12ZXJ0XzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9wYXRyb2wtdmVydF8wMi5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtaG9yaV8wMS5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtaG9yaV8wMi5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS1ob3JpXzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtaG9yaV8wMy5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtdmVydF8wMS5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS12ZXJ0XzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtdmVydF8wMi5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtdmVydF8wMy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL3NoaXBzIHN5bmMgXFxcXC5wbmckXCI7IiwiLy8gSW1wb3J0IGFsbCBzaGlwIGltYWdlc1xuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgY29uc3QgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpbWFnZXNbaXRlbS5yZXBsYWNlKC8oLlxcL3xcXC5wbmckKS9nLCAnJyldID0gcihpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy9zaGlwcycsIGZhbHNlLCAvXFwucG5nJC8pKTtcblxuZnVuY3Rpb24gbG9hZEljb24odHlwZSwgbnVtLCBkaXIpIHtcbiAgY29uc3QgZGlyTmFtZSA9IGRpciA9PT0gJ2hvcml6b250YWwnID8gJ2hvcmknIDogJ3ZlcnQnO1xuICByZXR1cm4gaW1hZ2VzW2Ake3R5cGV9LSR7ZGlyTmFtZX1fMCR7bnVtfWBdO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgbG9hZEljb24gfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbmZ1bmN0aW9uIHJldHVyblBsYXllclR1cm4oZ2FtZU9iamVjdCkge1xuICByZXR1cm4gZ2FtZU9iamVjdC5wbGF5ZXJPbmUuaXNUdXJuXG4gICAgPyBnYW1lT2JqZWN0LnBsYXllck9uZVxuICAgIDogZ2FtZU9iamVjdC5wbGF5ZXJUd287XG59XG5cbi8vIFRoZSBtYWluIEdhbWUgb2JqZWN0IGZvciBleHBvc2luZyBpbmZvcm1hdGlvbiBmb3IgZWFjaCBzdGFnZXMgdG8gdXNlc1xuLy8gMS4gUGxheWVyc1xuLy8gMi4gUGxheWVyIGZvciBDdXJyZW50IFR1cm5cbi8vIDMuIEN1cnJlbnQgQm9hcmRcbi8vIDQuIGlzU3RhcnRlZCBmb3IgY2hlY2tpbmcgaWYgcGxhY2VtZW50IGhhcyBiZWVuIHNldFxuLy8gNS4gY3VycmVudCBnYW1lbW9kZSAoaXNNdWx0aXBsYXllcilcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoaXNNdWx0aXBsYXllciwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgbGV0IGlzU3RhcnRlZCA9IGZhbHNlO1xuXG4gIC8vIFJldHVybiBwbGF5ZXIgd2hvc2UgdHVybnMgaXMgdGhlaXJzXG4gIGZ1bmN0aW9uIGN1cnJlbnRUdXJuKCkge1xuICAgIHJldHVybiByZXR1cm5QbGF5ZXJUdXJuKHRoaXMpO1xuICB9XG5cbiAgLy8gUmV0dXJuIGJvYXJkIG9mIHBsYXllciB3aG9zZSB0dXJucyBpcyB0aGVyZVxuICBmdW5jdGlvbiBjdXJyZW50Qm9hcmQoKSB7XG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3BsYXllck9uZS5pc1R1cm4gPyAnbGVmdCcgOiAncmlnaHQnfS1jb250ZW50YClbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYXllck9uZSwgcGxheWVyVHdvLCBjdXJyZW50VHVybiwgY3VycmVudEJvYXJkLCBpc1N0YXJ0ZWQsIGlzTXVsdGlwbGF5ZXIsXG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgR2FtZSwgeyBHYW1lU3RhdGUgfSBmcm9tICcuL2dhbWUnO1xuXG4vLyBDaGVjayBpZiB0d28gc2V0IG9mIGFycmF5IGNvbnRhaW4gc2ltaWxhciBlbGVtZW50c1xuZnVuY3Rpb24gaW50ZXJzZWN0KGEsIGIpIHtcbiAgcmV0dXJuIGEuZmluZCgocG9zKSA9PiBiXG4gICAgLmZpbmQoKGN1cnJlbnRQb3MpID0+IGN1cnJlbnRQb3NbMF0gPT09IHBvc1swXSAmJiBjdXJyZW50UG9zWzFdID09PSBwb3NbMV0pKTtcbn1cblxuLy8gUmV0dXJuIGZhbHNlIGlmIHNoaXAgYm9keSBpcyBvdmVyIDkgKHdoaWNoIGlzIG92ZXIgdGhlIGJvYXJkIGJvdW5kYXJ5KVxuY29uc3QgaGl0Qm91bmRhcnkgPSAocG9zaXRpb24sIGF4aXMpID0+IHtcbiAgc3dpdGNoIChheGlzKSB7XG4gICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICByZXR1cm4gcG9zaXRpb24uZmluZCgocG9zKSA9PiAocG9zWzFdID4gOSkpO1xuICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMF0gPiA5KSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGF4aXMnKTtcbiAgfVxufTtcblxuLy8gQ2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIG9uIGEgY2VydGFpbiBzcXVhcmUsIHdpdGhvdXQgY29sbGlzaW9uXG4vLyB3aXRoIHRoZSBib3JkZXIgb3Igb3RoZXIgc2hpcHMuXG4vLyB0YWtlcyBhbGwgdGhlIHNoaXAgYXMgYXJndW1lbnQgdG8gY2hlY2sgZm9yIGNvbGxpc29uXG5mdW5jdGlvbiBpc1ZhbGlkKHNoaXBzLCBwb3NpdGlvbiwgYXhpcykge1xuICAvLyBDaGVjayBpZiBzaGlwIG92ZXJsYXBzIG92ZXIgYW55IG90aGVyIHNoaXBzXG4gIGNvbnN0IGhhc0NvbGxpc2lvbiA9IHNoaXBzXG4gICAgLmZpbmQoKHNoaXApID0+IGludGVyc2VjdChzaGlwLnBvc2l0aW9uLCBwb3NpdGlvbikpO1xuICAvLyBDaGVjayBpZiB0aGUgc2hpcCBkb2Vzbid0IG92ZXJsYXAgd2l0aCB0aGUgYm91bmRhcnlcbiAgLy8gQWNjZXB0IHRoZSBjdXJyZW50IHNoaXAncyBwb3NpdGlvbiBhbmQgYXhpc1xuICBjb25zdCB2YWxpZEJvdW5kYXJ5ID0gIWhpdEJvdW5kYXJ5KHBvc2l0aW9uLCBheGlzKTtcbiAgcmV0dXJuICFoYXNDb2xsaXNpb24gJiYgdmFsaWRCb3VuZGFyeTtcbn1cblxuLy8gVGhlIG1haW4gZ2FtZSBvYmplY3QgdGhhdCBpcyBuZWVkZWQgZm9yIGV2ZXJ5IHJvdW5kXG4vLyBDb29yZGluYXRlIHN5c3RlbTogQXJyYXkgW1ZlcnRpY2FsICgwIC0+IDkpLCBIb3Jpem9udGFsICgwIC0+IDkpXVxuLy8gQWNjZXB0cyBwbGF5ZXIgb2JqZWN0XG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIC8vIExpc3Qgb2Ygc2hpcHNcbiAgY29uc3QgbGlzdCA9IFtdO1xuICAvLyBSZWNvcmQgb2YgYXR0YWNrcyBtYWRlXG4gIGNvbnN0IGF0dGFja3MgPSBbXTtcbiAgLy8gUmVjb3JkIG9mIGhpdHMgbWFkZVxuICBjb25zdCBoaXRzID0gW107XG4gIC8vIFJlY29yZCBvZiBtaXNzZXNcbiAgY29uc3QgbWlzc2VzID0gW107XG5cbiAgLy8gUGxhY2Ugc2hpcCwgYnVpbGQgYSBzaGlwLCBjaGVjayBpZiBpdCBpcyB2YWxpZC5cbiAgZnVuY3Rpb24gcGxhY2Uoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGluaXRpYWxpemVkU2hpcCA9IFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoIWlzVmFsaWQobGlzdCwgaW5pdGlhbGl6ZWRTaGlwLnBvc2l0aW9uLCBheGlzKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGlzdC5wdXNoKGluaXRpYWxpemVkU2hpcCk7XG4gICAgcmV0dXJuIGluaXRpYWxpemVkU2hpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3YXBUdXJuKGdhbWVPYmplY3QpIHtcbiAgICBjb25zdCB7IHBsYXllck9uZSwgcGxheWVyVHdvIH0gPSBnYW1lT2JqZWN0O1xuICAgIHBsYXllck9uZS5pc1R1cm4gPSAhcGxheWVyT25lLmlzVHVybjtcbiAgICBwbGF5ZXJUd28uaXNUdXJuID0gIXBsYXllclR3by5pc1R1cm47XG4gIH1cblxuICAvLyBDaGVjayBpZiBhdHRhY2sgaXMgb3V0IG9mIGJvdW5kIG9yIGFscmVhZHkgZXhpc3QsIHRoZW4gcmV0cnlcbiAgLy8gSWYgaXQgaXMgdmFsaWQsIGNoZWNrcyBpZiBhIHNoaXAgaXMgaGl0OyBtb2RpZnkgc2hpcCBpZiBoaXRcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb3JkLCBnYW1lT2JqZWN0KSB7XG4gICAgY29uc3QgaXNFeGlzdCA9IGF0dGFja3MuZmluZCgoYXR0YWNrKSA9PiBhdHRhY2tbMF0gPT09IGNvcmRbMF0gJiYgYXR0YWNrWzFdID09PSBjb3JkWzFdKTtcbiAgICBjb25zdCBoaXQgPSBsaXN0LmZpbmQoKHNoaXApID0+IHNoaXAuaGl0KGNvcmQpKTtcblxuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3dhcFR1cm4oZ2FtZU9iamVjdCk7XG5cbiAgICBhdHRhY2tzLnB1c2goY29yZCk7XG5cbiAgICBpZiAoaGl0KSB7XG4gICAgICBoaXRzLnB1c2goY29yZCk7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuXG4gICAgbWlzc2VzLnB1c2goY29yZCk7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdCxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgICBhdHRhY2tzLFxuICAgIHBsYWNlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbi8vIFBsYXllciBPYmplY3RcbmZ1bmN0aW9uIFBsYXllcihpc0JvdCwgaW5pdGlhbFR1cm4pIHtcbiAgLy8gQm90IGNyZWF0ZSByYW5kb20gYXR0YWNrIGNvcmQgb24gdGhlIGJvYXJkLCBrZWVwIHJldHJ5aW5nIGlmIGl0IGlzIG5vdCB2YWxpZDtcbiAgZnVuY3Rpb24gYm90RXZhbChwbGF5ZXIpIHtcbiAgICBjb25zdCByYW5kID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICBjb25zdCBhdHRhY2tFeGlzdCA9IHBsYXllclxuICAgICAgLmJvYXJkLmF0dGFja3NcbiAgICAgIC5maW5kKChhdHRlbXB0KSA9PiBhdHRlbXB0WzBdID09PSByYW5kWzBdICYmIGF0dGVtcHRbMV0gPT09IHJhbmRbMV0pO1xuXG4gICAgaWYgKGF0dGFja0V4aXN0KSB7XG4gICAgICByZXR1cm4gYm90RXZhbChwbGF5ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kO1xuICB9XG5cbiAgLy8gUGxheWVyIHNpbXBseSByZWNlaXZlIGF0dGFjayBpZiBpdCBpcyBub3QgYSBib3QgKGltcGx5aW5nIGNvb3JkaW5hdGUgZXhpc3RzKVxuICAvLyBvdGhlcndpc2UsIGEgY29vcmQgaXMgcmFuZG9tbHkgZ2VuZXJhdGVkIGZvciB0aGUgYm90IHRvIGF0dGFja1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gYXR0YWNrKHBsYXllciwgY29vcmRpbmF0ZSwgZ2FtZU9iamVjdCkge1xuICAgIHJldHVybiBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlLCBnYW1lT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNUdXJuOiBpbml0aWFsVHVybixcbiAgICBib2FyZDogR2FtZWJvYXJkKCksXG4gICAgYXR0YWNrLFxuICAgIGlzQm90LFxuICAgIGJvdEV2YWwsXG4gIH07XG59XG5cbi8vIE9ubHkgdXNlIHRvIGRlY2lkZSBpZiBwbGF5ZXJPbmUgaXMgYSBib3Qgb3IgYSByZWFsIHBsYXllclxuZnVuY3Rpb24gcmFuZG9tUGxheWVyRGVjaWRlcigpIHtcbiAgY29uc3QgdHVybkRlY2lkZXIgPSBNYXRoLnJhbmRvbSgpID49IDAuNTtcbiAgcmV0dXJuIChNYXRoLnJhbmRvbSgpID49IDAuNSlcbiAgICA/IFBsYXllcih0dXJuRGVjaWRlciwgdHJ1ZSlcbiAgICA6IFBsYXllcih0dXJuRGVjaWRlciwgdHJ1ZSk7XG59XG5cbi8vIFNpbmdsZXBsYXllciBvYmplY3QgZm9yIGluaXRpYWxpemluZyBhIGJvdCBhbmQgYSByZWFsIHBsYXllclxuZnVuY3Rpb24gc2luZ2xlcGxheWVySW5pdCgpIHtcbiAgY29uc3QgcGxheWVyT25lID0gcmFuZG9tUGxheWVyRGVjaWRlcihmYWxzZSk7XG4gIGNvbnN0IHBsYXllck9uZUlzQm90ID0gcGxheWVyT25lLmlzQm90O1xuICBjb25zdCBwbGF5ZXJUd28gPSBQbGF5ZXIoIXBsYXllck9uZUlzQm90LCAhcGxheWVyT25lLmlzVHVybik7XG4gIHJldHVybiB7XG4gICAgcGxheWVyT25lLFxuICAgIHBsYXllclR3byxcbiAgfTtcbn1cblxuLy8gTXVsdGlwbGF5ZXIgb2JqZWN0IGZvciBpbml0aWFsaXppbmcgYm90aCByZWFsIHBsYXllcnNcbmZ1bmN0aW9uIG11bHRpcGxheWVySW5pdCgpIHtcbiAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKGZhbHNlLCB0cnVlKTtcbiAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKGZhbHNlLCBmYWxzZSk7XG4gIHJldHVybiB7XG4gICAgcGxheWVyT25lLFxuICAgIHBsYXllclR3byxcbiAgfTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IFBsYXllciwgc2luZ2xlcGxheWVySW5pdCwgbXVsdGlwbGF5ZXJJbml0IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuZXhwb3J0IGNvbnN0IFNoaXBzID0ge1xuICBwYXRyb2w6IHtcbiAgICBuYW1lOiAncGF0cm9sJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgb3JkZXI6IDEsXG4gIH0sXG4gIHN1Ym1hcmluZToge1xuICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMixcbiAgfSxcbiAgZGVzdHJveWVyOiB7XG4gICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAzLFxuICB9LFxuICBiYXR0bGVzaGlwOiB7XG4gICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBvcmRlcjogNCxcbiAgfSxcbiAgY2Fycmllcjoge1xuICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgb3JkZXI6IDUsXG4gIH0sXG59O1xuXG4vLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuZnVuY3Rpb24gYnVpbGRTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbiAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4gICAgfSk7XG4gIHJldHVybiBib2R5O1xufVxuXG4vLyBGdW5jdGlvbiBDb25zdHJ1Y3RvciBmb3Igc2hpcFxuZnVuY3Rpb24gU2hpcChzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICBjb25zdCBkYW1hZ2UgPSBbXTtcbiAgLy8gSW5paXRpYWxpemUgc2hpcCB3aXRoIGEgdXRpbGl0eSBmdW5jdGlvbiBidWlsZFNoaXBcbiAgY29uc3QgcG9zaXRpb24gPSBidWlsZFNoaXAoc2hpcC5sZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4gIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBpc0hpdCA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hIaXRQb3MgPSB2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV07XG4gICAgICBpZiAobWF0Y2hIaXRQb3MpIHtcbiAgICAgICAgZGFtYWdlLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0hpdDtcbiAgfVxuXG4gIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgZGFtYWdlLFxuICAgIGF4aXMsXG4gICAgcG9zaXRpb24sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItYXJyb3ctY2FsbGJhY2sgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgU2hpcHMgfSBmcm9tICcuL29iamVjdHMvc2hpcCc7XG5pbXBvcnQgeyBsb2FkSWNvbiB9IGZyb20gJy4vaW1hZ2VMb2FkZXInO1xuXG4vLyBFbnVtZXJhdGVkIGFycmF5cyBvZiBzaGlwcyB0byBiZSBwbGFjZWRcbmNvbnN0IHNoaXBPcmRlcnMgPSBPYmplY3QudmFsdWVzKFNoaXBzKS5zb3J0KChsYXN0LCBuZXh0KSA9PiBsYXN0Lm9yZGVyIDwgbmV4dC5vcmRlcik7XG5cbi8vIGxvYWQgYWxsIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmQgd2hlbiBjYWxsZWRcbmZ1bmN0aW9uIGxvYWRCb2FyZChwbGF5ZXIsIHNpZGUpIHtcbiAgcGxheWVyLmJvYXJkLmxpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAucG9zaXRpb24uZm9yRWFjaCgoY29yZCkgPT4ge1xuICAgICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgaWYgKGJveC5kYXRhc2V0LnBvcyA9PT0gY29yZC5qb2luKCkpIHtcbiAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHNoaXBPcmRlcnNbcGxheWVyLmJvYXJkLmxpc3QuaW5kZXhPZihzaGlwKV07XG4gICAgICAgICAgY29uc3Qgc2hpcEltZyA9IGxvYWRJY29uKG5hbWUsIHNoaXAucG9zaXRpb24uaW5kZXhPZihjb3JkKSArIDEsIHNoaXAuYXhpcyk7XG4gICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7c2hpcEltZ30nKWA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gdW5sb2FkIGFsbCB0aGUgc2hpcHMgb24gYSBib2FyZFxuZnVuY3Rpb24gdW5sb2FkQm9hcmQoc2lkZSkge1xuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldLmZvckVhY2goKGJveCkgPT4ge1xuICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgfSk7XG59XG5cbi8vIEEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGhhcyB0aGUgbG9naWMgZm9yIGluaXRpYWxpemluZyBhbmQgbG9hZGluZyB1cCB0aGUgZ2FtZSBib2FyZFxuY29uc3QgYm9hcmRMb2FkID0gKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIC8vIEdlbmVyYXRlIHRoZSBwYWdlIGZvciBzY29yZSBrZWVwaW5nIGFuZCB0dXJuIGluZm9ybWF0aW9uXG4gIC8vIFJlZmFjdG9yIGludG8gdGVtcGxhdGVcbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYWdlKG5hbWVzKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsYXllciA9IG5hbWVzLmxlbmd0aCA9PT0gMjtcbiAgICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPSd0b3AtY29udGFpbmVyJz5cbiAgICAgICAgPHA+VHVybjogUExBWUVSIDE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nbWFpbi1jb250ZW50Jz5cbiAgICAgICAgPGRpdiBjbGFzcz0nbGVmdC1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdwbGF5ZXJuYW1lJz4ke25hbWVzWzBdfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2JvYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwcy1jb250YWluZXInPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQnPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ncGxheWVybmFtZSc+JHtpc011bHRpcGxheWVyID8gbmFtZXNbMV0gOiAnQk9UJ308L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2hpcHMtY29udGFpbmVyJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2JvYXJkJz48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG4gIC8vIEdlbmVyYXRlIHRoZSB3aG9sZSBjZWxscyBmb3IgZWFjaCBib2FyZFxuICBmdW5jdGlvbiBnZW5lcmF0ZUJveCgpIHtcbiAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKV0uZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gWzAsIDBdO1xuICAgICAgQXJyYXkoMTAwKVxuICAgICAgICAuZmlsbCgpXG4gICAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ2JveCc7XG4gICAgICAgICAgYm94LmRhdGFzZXQucG9zID0gc3RhcnQ7XG4gICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgICBpZiAoc3RhcnRbMV0gPD0gOSkge1xuICAgICAgICAgICAgc3RhcnRbMV0rKztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdID09PSAxMCkge1xuICAgICAgICAgICAgc3RhcnRbMV0gPSAwO1xuICAgICAgICAgICAgc3RhcnRbMF0rKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8vIGFzc2lnbiBhcHByb3ByaWF0ZSBjbGFzc2VzIHRvIGRpc3RpbmN0IGxlZnQgYW5kIHJpZ2h0XG4gIGZ1bmN0aW9uIGFzc2lnblBhcmVudCgpIHtcbiAgICBbJ2xlZnQnLCAncmlnaHQnXS5mb3JFYWNoKChzaWRlKSA9PiB7XG4gICAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdXG4gICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKTtcbiAgICAgIFsuLi5ib3hlc10uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGJveC5kYXRhc2V0LnNpZGUgPSBzaWRlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlUGFnZSwgZ2VuZXJhdGVCb3gsIGFzc2lnblBhcmVudCxcbiAgfTtcbn0oKSk7XG5cbi8vIExvYWQgb3B0aW9uIGZvciBwbGFjaW5nIHNoaXBzIGluIGEgY2VydGFpbiBheGlvc1xuZnVuY3Rpb24gbG9hZE9wdGlvbigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9wLWNvbnRhaW5lcicpWzBdO1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gVGVtcGxhdGVcbiAgb3B0aW9uLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdkaXItb3B0aW9uJz5cbiAgICAgIDxsYWJlbCBmb3I9J2hvcml6b250YWwnPkhvcml6b250YWw8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBjbGFzcz0nZGlyLW9wdGlvbicgdmFsdWU9J2hvcml6b250YWwnIGlkPSdob3Jpem9udGFsJyBuYW1lPSdvcHRpb24nIGNoZWNrZWQ+XG4gICAgICA8bGFiZWwgZm9yPSd2ZXJ0aWNhbCc+VmVydGljYWw8L2xhYmVsPjxpbnB1dCB0eXBlPSdyYWRpbycgY2xhc3M9J2Rpci1vcHRpb24nIHZhbHVlPSd2ZXJ0aWNhbCcgaWQ9J3ZlcnRpY2FsJyBuYW1lPSdvcHRpb24nPjwvZGl2PlxuICBgO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuLy8gTG9hZCBib2FyZFxuZnVuY3Rpb24gbWFpblBhZ2VMb2FkKG5hbWVzKSB7XG4gIGJvYXJkTG9hZC5nZW5lcmF0ZVBhZ2UobmFtZXMpO1xuICBib2FyZExvYWQuZ2VuZXJhdGVCb3goKTtcbiAgYm9hcmRMb2FkLmFzc2lnblBhcmVudCgpO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZShuYW1lcykge1xuICAvLyBMb2FkIHBhZ2UgYW5kIGluaXRpYWxpemUgZXZlcnkgY2VsbHM7XG4gIG1haW5QYWdlTG9hZChuYW1lcyk7XG4gIC8vIExvYWQgb3B0aW9uc1xuICBsb2FkT3B0aW9uKCk7XG59XG5cbmV4cG9ydCB7XG4gIG1haW5QYWdlTG9hZCwgbG9hZEJvYXJkLCBsb2FkT3B0aW9uLCBib2FyZExvYWQsIGxvYWRQYWdlLCBzaGlwT3JkZXJzLCB1bmxvYWRCb2FyZCxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9vYmplY3RzL2dhbWUnO1xuaW1wb3J0IHsgbXVsdGlwbGF5ZXJJbml0IH0gZnJvbSAnLi4vb2JqZWN0cy9wbGF5ZXInO1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9uIGZvciBpbml0aWFsaXppbmcgVGVzdCdzIGdhbWUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVzdEdhbWVPYmplY3QoKSB7XG4gIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IG11bHRpcGxheWVySW5pdCgpO1xuICByZXR1cm4gR2FtZSh0cnVlLCBwbGF5ZXJPbmUsIHBsYXllclR3byk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxFdmVudExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgY29uc3Qgb2xkRWxlbWVudCA9IGVsZW1lbnQ7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgaWYgKG9sZEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIG9sZEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCB7IG5hdGl2ZUNyZWF0ZSB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gQ3JlYXRlIGEgbmFrZWQgZnVuY3Rpb24gcmVmZXJlbmNlIGZvciBzdXJyb2dhdGUtcHJvdG90eXBlLXN3YXBwaW5nLlxuZnVuY3Rpb24gY3RvcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcbn1cblxuLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYW5vdGhlci5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2VDcmVhdGUocHJvdG90eXBlKSB7XG4gIGlmICghaXNPYmplY3QocHJvdG90eXBlKSkgcmV0dXJuIHt9O1xuICBpZiAobmF0aXZlQ3JlYXRlKSByZXR1cm4gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSk7XG4gIHZhciBDdG9yID0gY3RvcigpO1xuICBDdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yO1xuICBDdG9yLnByb3RvdHlwZSA9IG51bGw7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eS5qcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBtYXRjaGVyIGZyb20gJy4vbWF0Y2hlci5qcyc7XG5pbXBvcnQgcHJvcGVydHkgZnJvbSAnLi9wcm9wZXJ0eS5qcyc7XG5pbXBvcnQgb3B0aW1pemVDYiBmcm9tICcuL19vcHRpbWl6ZUNiLmpzJztcblxuLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgY2FsbGJhY2tzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gZWFjaFxuLy8gZWxlbWVudCBpbiBhIGNvbGxlY3Rpb24sIHJldHVybmluZyB0aGUgZGVzaXJlZCByZXN1bHQg4oCUIGVpdGhlciBgXy5pZGVudGl0eWAsXG4vLyBhbiBhcmJpdHJhcnkgY2FsbGJhY2ssIGEgcHJvcGVydHkgbWF0Y2hlciwgb3IgYSBwcm9wZXJ0eSBhY2Nlc3Nvci5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gb3B0aW1pemVDYih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpO1xuICBpZiAoaXNPYmplY3QodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSkgcmV0dXJuIG1hdGNoZXIodmFsdWUpO1xuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcbmltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcbmltcG9ydCBpdGVyYXRlZSBmcm9tICcuL2l0ZXJhdGVlLmpzJztcblxuLy8gVGhlIGZ1bmN0aW9uIHdlIGNhbGwgaW50ZXJuYWxseSB0byBnZW5lcmF0ZSBhIGNhbGxiYWNrLiBJdCBpbnZva2VzXG4vLyBgXy5pdGVyYXRlZWAgaWYgb3ZlcnJpZGRlbiwgb3RoZXJ3aXNlIGBiYXNlSXRlcmF0ZWVgLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2IodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gIGlmIChfLml0ZXJhdGVlICE9PSBpdGVyYXRlZSkgcmV0dXJuIF8uaXRlcmF0ZWUodmFsdWUsIGNvbnRleHQpO1xuICByZXR1cm4gYmFzZUl0ZXJhdGVlKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFpblJlc3VsdChpbnN0YW5jZSwgb2JqKSB7XG4gIHJldHVybiBpbnN0YW5jZS5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbn1cbiIsImltcG9ydCB7IG5vbkVudW1lcmFibGVQcm9wcywgT2JqUHJvdG8gfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGhhcyBmcm9tICcuL19oYXMuanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGxvb2t1cCBzdHJ1Y3R1cmUuXG4vLyBgY29sbGVjdE5vbkVudW1Qcm9wc2AgdXNlZCB0byBkZXBlbmQgb24gYF8uY29udGFpbnNgLCBidXQgdGhpcyBsZWQgdG9cbi8vIGNpcmN1bGFyIGltcG9ydHMuIGBlbXVsYXRlZFNldGAgaXMgYSBvbmUtb2ZmIHNvbHV0aW9uIHRoYXQgb25seSB3b3JrcyBmb3Jcbi8vIGFycmF5cyBvZiBzdHJpbmdzLlxuZnVuY3Rpb24gZW11bGF0ZWRTZXQoa2V5cykge1xuICB2YXIgaGFzaCA9IHt9O1xuICBmb3IgKHZhciBsID0ga2V5cy5sZW5ndGgsIGkgPSAwOyBpIDwgbDsgKytpKSBoYXNoW2tleXNbaV1dID0gdHJ1ZTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluczogZnVuY3Rpb24oa2V5KSB7IHJldHVybiBoYXNoW2tleV0gPT09IHRydWU7IH0sXG4gICAgcHVzaDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICBoYXNoW2tleV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gSW50ZXJuYWwgaGVscGVyLiBDaGVja3MgYGtleXNgIGZvciB0aGUgcHJlc2VuY2Ugb2Yga2V5cyBpbiBJRSA8IDkgdGhhdCB3b24ndFxuLy8gYmUgaXRlcmF0ZWQgYnkgYGZvciBrZXkgaW4gLi4uYCBhbmQgdGh1cyBtaXNzZWQuIEV4dGVuZHMgYGtleXNgIGluIHBsYWNlIGlmXG4vLyBuZWVkZWQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cykge1xuICBrZXlzID0gZW11bGF0ZWRTZXQoa2V5cyk7XG4gIHZhciBub25FbnVtSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aDtcbiAgdmFyIGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yO1xuICB2YXIgcHJvdG8gPSAoaXNGdW5jdGlvbihjb25zdHJ1Y3RvcikgJiYgY29uc3RydWN0b3IucHJvdG90eXBlKSB8fCBPYmpQcm90bztcblxuICAvLyBDb25zdHJ1Y3RvciBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgdmFyIHByb3AgPSAnY29uc3RydWN0b3InO1xuICBpZiAoaGFzKG9iaiwgcHJvcCkgJiYgIWtleXMuY29udGFpbnMocHJvcCkpIGtleXMucHVzaChwcm9wKTtcblxuICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tub25FbnVtSWR4XTtcbiAgICBpZiAocHJvcCBpbiBvYmogJiYgb2JqW3Byb3BdICE9PSBwcm90b1twcm9wXSAmJiAha2V5cy5jb250YWlucyhwcm9wKSkge1xuICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGtleXNGdW5jLCBkZWZhdWx0cykge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGRlZmF1bHRzKSBvYmogPSBPYmplY3Qob2JqKTtcbiAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XSxcbiAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICBsID0ga2V5cy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgaWYgKCFkZWZhdWx0cyB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xufVxuIiwiaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gSW50ZXJuYWwgaGVscGVyIHRvIGdlbmVyYXRlIGZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5nc1xuLy8gdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFc2NhcGVyKG1hcCkge1xuICB2YXIgZXNjYXBlciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hcFttYXRjaF07XG4gIH07XG4gIC8vIFJlZ2V4ZXMgZm9yIGlkZW50aWZ5aW5nIGEga2V5IHRoYXQgbmVlZHMgdG8gYmUgZXNjYXBlZC5cbiAgdmFyIHNvdXJjZSA9ICcoPzonICsga2V5cyhtYXApLmpvaW4oJ3wnKSArICcpJztcbiAgdmFyIHRlc3RSZWdleHAgPSBSZWdFeHAoc291cmNlKTtcbiAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nID09IG51bGwgPyAnJyA6ICcnICsgc3RyaW5nO1xuICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICB9O1xufVxuIiwiaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgaXNOYU4gZnJvbSAnLi9pc05hTi5qcyc7XG5cbi8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBgXy5pbmRleE9mYCBhbmQgYF8ubGFzdEluZGV4T2ZgIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUluZGV4RmluZGVyKGRpciwgcHJlZGljYXRlRmluZCwgc29ydGVkSW5kZXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgaWYgKHR5cGVvZiBpZHggPT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgIGkgPSBpZHggPj0gMCA/IGlkeCA6IE1hdGgubWF4KGlkeCArIGxlbmd0aCwgaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW5ndGggPSBpZHggPj0gMCA/IE1hdGgubWluKGlkeCArIDEsIGxlbmd0aCkgOiBpZHggKyBsZW5ndGggKyAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc29ydGVkSW5kZXggJiYgaWR4ICYmIGxlbmd0aCkge1xuICAgICAgaWR4ID0gc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgcmV0dXJuIGFycmF5W2lkeF0gPT09IGl0ZW0gPyBpZHggOiAtMTtcbiAgICB9XG4gICAgaWYgKGl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgIGlkeCA9IHByZWRpY2F0ZUZpbmQoc2xpY2UuY2FsbChhcnJheSwgaSwgbGVuZ3RoKSwgaXNOYU4pO1xuICAgICAgcmV0dXJuIGlkeCA+PSAwID8gaWR4ICsgaSA6IC0xO1xuICAgIH1cbiAgICBmb3IgKGlkeCA9IGRpciA+IDAgPyBpIDogbGVuZ3RoIC0gMTsgaWR4ID49IDAgJiYgaWR4IDwgbGVuZ3RoOyBpZHggKz0gZGlyKSB7XG4gICAgICBpZiAoYXJyYXlbaWR4XSA9PT0gaXRlbSkgcmV0dXJuIGlkeDtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9O1xufVxuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcihkaXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgIHZhciBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH07XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcbmltcG9ydCBvcHRpbWl6ZUNiIGZyb20gJy4vX29wdGltaXplQ2IuanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gY3JlYXRlIGEgcmVkdWNpbmcgZnVuY3Rpb24sIGl0ZXJhdGluZyBsZWZ0IG9yIHJpZ2h0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlKGRpcikge1xuICAvLyBXcmFwIGNvZGUgdGhhdCByZWFzc2lnbnMgYXJndW1lbnQgdmFyaWFibGVzIGluIGEgc2VwYXJhdGUgZnVuY3Rpb24gdGhhblxuICAvLyB0aGUgb25lIHRoYXQgYWNjZXNzZXMgYGFyZ3VtZW50cy5sZW5ndGhgIHRvIGF2b2lkIGEgcGVyZiBoaXQuICgjMTk5MSlcbiAgdmFyIHJlZHVjZXIgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBtZW1vLCBpbml0aWFsKSB7XG4gICAgdmFyIF9rZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYga2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoX2tleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgbWVtbyA9IG9ialtfa2V5cyA/IF9rZXlzW2luZGV4XSA6IGluZGV4XTtcbiAgICAgIGluZGV4ICs9IGRpcjtcbiAgICB9XG4gICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBfa2V5cyA/IF9rZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgbWVtbyA9IGl0ZXJhdGVlKG1lbW8sIG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMztcbiAgICByZXR1cm4gcmVkdWNlcihvYmosIG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDQpLCBtZW1vLCBpbml0aWFsKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IE1BWF9BUlJBWV9JTkRFWCB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gQ29tbW9uIGludGVybmFsIGxvZ2ljIGZvciBgaXNBcnJheUxpa2VgIGFuZCBgaXNCdWZmZXJMaWtlYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrKGdldFNpemVQcm9wZXJ0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHZhciBzaXplUHJvcGVydHkgPSBnZXRTaXplUHJvcGVydHkoY29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHR5cGVvZiBzaXplUHJvcGVydHkgPT0gJ251bWJlcicgJiYgc2l6ZVByb3BlcnR5ID49IDAgJiYgc2l6ZVByb3BlcnR5IDw9IE1BWF9BUlJBWV9JTkRFWDtcbiAgfVxufVxuIiwiLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gb2J0YWluIGEgbmVzdGVkIHByb3BlcnR5IGluIGBvYmpgIGFsb25nIGBwYXRoYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZXBHZXQob2JqLCBwYXRoKSB7XG4gIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBvYmogPSBvYmpbcGF0aFtpXV07XG4gIH1cbiAgcmV0dXJuIGxlbmd0aCA/IG9iaiA6IHZvaWQgMDtcbn1cbiIsIi8vIEludGVybmFsIGxpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG5leHBvcnQgZGVmYXVsdCB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnXG59O1xuIiwiaW1wb3J0IGJhc2VDcmVhdGUgZnJvbSAnLi9fYmFzZUNyZWF0ZS5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYHNvdXJjZUZ1bmNgIGJvdW5kIHRvIGBjb250ZXh0YCB3aXRoIG9wdGlvbmFsXG4vLyBgYXJnc2AuIERldGVybWluZXMgd2hldGhlciB0byBleGVjdXRlIGEgZnVuY3Rpb24gYXMgYSBjb25zdHJ1Y3RvciBvciBhcyBhXG4vLyBub3JtYWwgZnVuY3Rpb24uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGVjdXRlQm91bmQoc291cmNlRnVuYywgYm91bmRGdW5jLCBjb250ZXh0LCBjYWxsaW5nQ29udGV4dCwgYXJncykge1xuICBpZiAoIShjYWxsaW5nQ29udGV4dCBpbnN0YW5jZW9mIGJvdW5kRnVuYykpIHJldHVybiBzb3VyY2VGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB2YXIgc2VsZiA9IGJhc2VDcmVhdGUoc291cmNlRnVuYy5wcm90b3R5cGUpO1xuICB2YXIgcmVzdWx0ID0gc291cmNlRnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgaWYgKGlzT2JqZWN0KHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gIHJldHVybiBzZWxmO1xufVxuIiwiaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNBcmd1bWVudHMgZnJvbSAnLi9pc0FyZ3VtZW50cy5qcyc7XG5cbi8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsYXR0ZW4oaW5wdXQsIGRlcHRoLCBzdHJpY3QsIG91dHB1dCkge1xuICBvdXRwdXQgPSBvdXRwdXQgfHwgW107XG4gIGlmICghZGVwdGggJiYgZGVwdGggIT09IDApIHtcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuICB9IGVsc2UgaWYgKGRlcHRoIDw9IDApIHtcbiAgICByZXR1cm4gb3V0cHV0LmNvbmNhdChpbnB1dCk7XG4gIH1cbiAgdmFyIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoaW5wdXQpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICAvLyBGbGF0dGVuIGN1cnJlbnQgbGV2ZWwgb2YgYXJyYXkgb3IgYXJndW1lbnRzIG9iamVjdC5cbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgZmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBzdHJpY3QsIG91dHB1dCk7XG4gICAgICAgIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaiA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGogPCBsZW4pIG91dHB1dFtpZHgrK10gPSB2YWx1ZVtqKytdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXN0cmljdCkge1xuICAgICAgb3V0cHV0W2lkeCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuIiwiaW1wb3J0IHNoYWxsb3dQcm9wZXJ0eSBmcm9tICcuL19zaGFsbG93UHJvcGVydHkuanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gb2J0YWluIHRoZSBgYnl0ZUxlbmd0aGAgcHJvcGVydHkgb2YgYW4gb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgc2hhbGxvd1Byb3BlcnR5KCdieXRlTGVuZ3RoJyk7XG4iLCJpbXBvcnQgc2hhbGxvd1Byb3BlcnR5IGZyb20gJy4vX3NoYWxsb3dQcm9wZXJ0eS5qcyc7XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBvYnRhaW4gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIGFuIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IHNoYWxsb3dQcm9wZXJ0eSgnbGVuZ3RoJyk7XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoLmpzJztcblxuLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3JvdXAoYmVoYXZpb3IsIHBhcnRpdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSBwYXJ0aXRpb24gPyBbW10sIFtdXSA6IHt9O1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHZhciBrZXkgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIG9iaik7XG4gICAgICBiZWhhdmlvcihyZXN1bHQsIHZhbHVlLCBrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBoYXNPd25Qcm9wZXJ0eSB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gY2hlY2sgd2hldGhlciBga2V5YCBpcyBhbiBvd24gcHJvcGVydHkgbmFtZSBvZiBgb2JqYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhcyhvYmosIGtleSkge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignT2JqZWN0Jyk7XG4iLCJpbXBvcnQgY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2sgZnJvbSAnLi9fY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2suanMnO1xuaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbi8vIHNob3VsZCBiZSBpdGVyYXRlZCBhcyBhbiBhcnJheSBvciBhcyBhbiBvYmplY3QuXG4vLyBSZWxhdGVkOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcbi8vIEF2b2lkcyBhIHZlcnkgbmFzdHkgaU9TIDggSklUIGJ1ZyBvbiBBUk0tNjQuICMyMDk0XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaXplUHJvcGVydHlDaGVjayhnZXRMZW5ndGgpO1xuIiwiaW1wb3J0IGNyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrIGZyb20gJy4vX2NyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrLmpzJztcbmltcG9ydCBnZXRCeXRlTGVuZ3RoIGZyb20gJy4vX2dldEJ5dGVMZW5ndGguanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHNwZW5kIGV4dGVuc2l2ZSBjaGVja3MgYWdhaW5zdFxuLy8gYEFycmF5QnVmZmVyYCBldCBhbC5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrKGdldEJ5dGVMZW5ndGgpO1xuIiwiLy8gSW50ZXJuYWwgYF8ucGlja2AgaGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGBrZXlgIGlzIGFuIGVudW1lcmFibGVcbi8vIHByb3BlcnR5IG5hbWUgb2YgYG9iamAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlJbk9iaih2YWx1ZSwga2V5LCBvYmopIHtcbiAgcmV0dXJuIGtleSBpbiBvYmo7XG59XG4iLCJpbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGFsbEtleXMgZnJvbSAnLi9hbGxLZXlzLmpzJztcblxuLy8gU2luY2UgdGhlIHJlZ3VsYXIgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIHR5cGUgdGVzdHMgZG9uJ3Qgd29yayBmb3Jcbi8vIHNvbWUgdHlwZXMgaW4gSUUgMTEsIHdlIHVzZSBhIGZpbmdlcnByaW50aW5nIGhldXJpc3RpYyBpbnN0ZWFkLCBiYXNlZFxuLy8gb24gdGhlIG1ldGhvZHMuIEl0J3Mgbm90IGdyZWF0LCBidXQgaXQncyB0aGUgYmVzdCB3ZSBnb3QuXG4vLyBUaGUgZmluZ2VycHJpbnQgbWV0aG9kIGxpc3RzIGFyZSBkZWZpbmVkIGJlbG93LlxuZXhwb3J0IGZ1bmN0aW9uIGllMTFmaW5nZXJwcmludChtZXRob2RzKSB7XG4gIHZhciBsZW5ndGggPSBnZXRMZW5ndGgobWV0aG9kcyk7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAvLyBgTWFwYCwgYFdlYWtNYXBgIGFuZCBgU2V0YCBoYXZlIG5vIGVudW1lcmFibGUga2V5cy5cbiAgICB2YXIga2V5cyA9IGFsbEtleXMob2JqKTtcbiAgICBpZiAoZ2V0TGVuZ3RoKGtleXMpKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFpc0Z1bmN0aW9uKG9ialttZXRob2RzW2ldXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIHRlc3RpbmcgYWdhaW5zdCBgV2Vha01hcGAsIHdlIG5lZWQgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyBgb2JqYCBkb2Vzbid0IGhhdmUgYSBgZm9yRWFjaGAgbWV0aG9kIGluIG9yZGVyIHRvIGRpc3Rpbmd1aXNoXG4gICAgLy8gaXQgZnJvbSBhIHJlZ3VsYXIgYE1hcGAuXG4gICAgcmV0dXJuIG1ldGhvZHMgIT09IHdlYWtNYXBNZXRob2RzIHx8ICFpc0Z1bmN0aW9uKG9ialtmb3JFYWNoTmFtZV0pO1xuICB9O1xufVxuXG4vLyBJbiB0aGUgaW50ZXJlc3Qgb2YgY29tcGFjdCBtaW5pZmljYXRpb24sIHdlIHdyaXRlXG4vLyBlYWNoIHN0cmluZyBpbiB0aGUgZmluZ2VycHJpbnRzIG9ubHkgb25jZS5cbnZhciBmb3JFYWNoTmFtZSA9ICdmb3JFYWNoJyxcbiAgICBoYXNOYW1lID0gJ2hhcycsXG4gICAgY29tbW9uSW5pdCA9IFsnY2xlYXInLCAnZGVsZXRlJ10sXG4gICAgbWFwVGFpbCA9IFsnZ2V0JywgaGFzTmFtZSwgJ3NldCddO1xuXG4vLyBgTWFwYCwgYFdlYWtNYXBgIGFuZCBgU2V0YCBlYWNoIGhhdmUgc2xpZ2h0bHkgZGlmZmVyZW50XG4vLyBjb21iaW5hdGlvbnMgb2YgdGhlIGFib3ZlIHN1Ymxpc3RzLlxuZXhwb3J0IHZhciBtYXBNZXRob2RzID0gY29tbW9uSW5pdC5jb25jYXQoZm9yRWFjaE5hbWUsIG1hcFRhaWwpLFxuICAgIHdlYWtNYXBNZXRob2RzID0gY29tbW9uSW5pdC5jb25jYXQobWFwVGFpbCksXG4gICAgc2V0TWV0aG9kcyA9IFsnYWRkJ10uY29uY2F0KGNvbW1vbkluaXQsIGZvckVhY2hOYW1lLCBoYXNOYW1lKTtcbiIsIi8vIEludGVybmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlZmZpY2llbnQgKGZvciBjdXJyZW50IGVuZ2luZXMpIHZlcnNpb25cbi8vIG9mIHRoZSBwYXNzZWQtaW4gY2FsbGJhY2ssIHRvIGJlIHJlcGVhdGVkbHkgYXBwbGllZCBpbiBvdGhlciBVbmRlcnNjb3JlXG4vLyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcHRpbWl6ZUNiKGZ1bmMsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHJldHVybiBmdW5jO1xuICBzd2l0Y2ggKGFyZ0NvdW50ID09IG51bGwgPyAzIDogYXJnQ291bnQpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSk7XG4gICAgfTtcbiAgICAvLyBUaGUgMi1hcmd1bWVudCBjYXNlIGlzIG9taXR0ZWQgYmVjYXVzZSB3ZeKAmXJlIG5vdCB1c2luZyBpdC5cbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cbiIsIi8vIEN1cnJlbnQgdmVyc2lvbi5cbmV4cG9ydCB2YXIgVkVSU0lPTiA9ICcxLjEzLjYnO1xuXG4vLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCAoYHNlbGZgKSBpbiB0aGUgYnJvd3NlciwgYGdsb2JhbGBcbi8vIG9uIHRoZSBzZXJ2ZXIsIG9yIGB0aGlzYCBpbiBzb21lIHZpcnR1YWwgbWFjaGluZXMuIFdlIHVzZSBgc2VsZmBcbi8vIGluc3RlYWQgb2YgYHdpbmRvd2AgZm9yIGBXZWJXb3JrZXJgIHN1cHBvcnQuXG5leHBvcnQgdmFyIHJvb3QgPSAodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYpIHx8XG4gICAgICAgICAgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpIHx8XG4gICAgICAgICAge307XG5cbi8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG5leHBvcnQgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbmV4cG9ydCB2YXIgU3ltYm9sUHJvdG8gPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbC5wcm90b3R5cGUgOiBudWxsO1xuXG4vLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbmV4cG9ydCB2YXIgcHVzaCA9IEFycmF5UHJvdG8ucHVzaCxcbiAgICBzbGljZSA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgdG9TdHJpbmcgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuXG4vLyBNb2Rlcm4gZmVhdHVyZSBkZXRlY3Rpb24uXG5leHBvcnQgdmFyIHN1cHBvcnRzQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnLFxuICAgIHN1cHBvcnRzRGF0YVZpZXcgPSB0eXBlb2YgRGF0YVZpZXcgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBBbGwgKipFQ01BU2NyaXB0IDUrKiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4vLyBhcmUgZGVjbGFyZWQgaGVyZS5cbmV4cG9ydCB2YXIgbmF0aXZlSXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgbmF0aXZlSXNWaWV3ID0gc3VwcG9ydHNBcnJheUJ1ZmZlciAmJiBBcnJheUJ1ZmZlci5pc1ZpZXc7XG5cbi8vIENyZWF0ZSByZWZlcmVuY2VzIHRvIHRoZXNlIGJ1aWx0aW4gZnVuY3Rpb25zIGJlY2F1c2Ugd2Ugb3ZlcnJpZGUgdGhlbS5cbmV4cG9ydCB2YXIgX2lzTmFOID0gaXNOYU4sXG4gICAgX2lzRmluaXRlID0gaXNGaW5pdGU7XG5cbi8vIEtleXMgaW4gSUUgPCA5IHRoYXQgd29uJ3QgYmUgaXRlcmF0ZWQgYnkgYGZvciBrZXkgaW4gLi4uYCBhbmQgdGh1cyBtaXNzZWQuXG5leHBvcnQgdmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbmV4cG9ydCB2YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWyd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuLy8gVGhlIGxhcmdlc3QgaW50ZWdlciB0aGF0IGNhbiBiZSByZXByZXNlbnRlZCBleGFjdGx5LlxuZXhwb3J0IHZhciBNQVhfQVJSQVlfSU5ERVggPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuIiwiLy8gSW50ZXJuYWwgaGVscGVyIHRvIGdlbmVyYXRlIGEgZnVuY3Rpb24gdG8gb2J0YWluIHByb3BlcnR5IGBrZXlgIGZyb20gYG9iamAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGFsbG93UHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpba2V5XTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IHN1cHBvcnRzRGF0YVZpZXcgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgaGFzT2JqZWN0VGFnIGZyb20gJy4vX2hhc09iamVjdFRhZy5qcyc7XG5cbi8vIEluIElFIDEwIC0gRWRnZSAxMywgYERhdGFWaWV3YCBoYXMgc3RyaW5nIHRhZyBgJ1tvYmplY3QgT2JqZWN0XSdgLlxuLy8gSW4gSUUgMTEsIHRoZSBtb3N0IGNvbW1vbiBhbW9uZyB0aGVtLCB0aGlzIHByb2JsZW0gYWxzbyBhcHBsaWVzIHRvXG4vLyBgTWFwYCwgYFdlYWtNYXBgIGFuZCBgU2V0YC5cbmV4cG9ydCB2YXIgaGFzU3RyaW5nVGFnQnVnID0gKFxuICAgICAgc3VwcG9ydHNEYXRhVmlldyAmJiBoYXNPYmplY3RUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcig4KSkpXG4gICAgKSxcbiAgICBpc0lFMTEgPSAodHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzT2JqZWN0VGFnKG5ldyBNYXApKTtcbiIsImltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBJbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBgdG9TdHJpbmdgLWJhc2VkIHR5cGUgdGVzdGVyLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFnVGVzdGVyKG5hbWUpIHtcbiAgdmFyIHRhZyA9ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gdGFnO1xuICB9O1xufVxuIiwiaW1wb3J0IGdldEJ5dGVMZW5ndGggZnJvbSAnLi9fZ2V0Qnl0ZUxlbmd0aC5qcyc7XG5cbi8vIEludGVybmFsIGZ1bmN0aW9uIHRvIHdyYXAgb3Igc2hhbGxvdy1jb3B5IGFuIEFycmF5QnVmZmVyLFxuLy8gdHlwZWQgYXJyYXkgb3IgRGF0YVZpZXcgdG8gYSBuZXcgdmlldywgcmV1c2luZyB0aGUgYnVmZmVyLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9CdWZmZXJWaWV3KGJ1ZmZlclNvdXJjZSkge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoXG4gICAgYnVmZmVyU291cmNlLmJ1ZmZlciB8fCBidWZmZXJTb3VyY2UsXG4gICAgYnVmZmVyU291cmNlLmJ5dGVPZmZzZXQgfHwgMCxcbiAgICBnZXRCeXRlTGVuZ3RoKGJ1ZmZlclNvdXJjZSlcbiAgKTtcbn1cbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5pbXBvcnQgJy4vdG9QYXRoLmpzJztcblxuLy8gSW50ZXJuYWwgd3JhcHBlciBmb3IgYF8udG9QYXRoYCB0byBlbmFibGUgbWluaWZpY2F0aW9uLlxuLy8gU2ltaWxhciB0byBgY2JgIGZvciBgXy5pdGVyYXRlZWAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1BhdGgocGF0aCkge1xuICByZXR1cm4gXy50b1BhdGgocGF0aCk7XG59XG4iLCJpbXBvcnQgaW52ZXJ0IGZyb20gJy4vaW52ZXJ0LmpzJztcbmltcG9ydCBlc2NhcGVNYXAgZnJvbSAnLi9fZXNjYXBlTWFwLmpzJztcblxuLy8gSW50ZXJuYWwgbGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciB1bmVzY2FwaW5nLlxuZXhwb3J0IGRlZmF1bHQgaW52ZXJ0KGVzY2FwZU1hcCk7XG4iLCIvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb24gYW5kIGFmdGVyIHRoZSBOdGggY2FsbC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFmdGVyKHRpbWVzLCBmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHsgaGFzRW51bUJ1ZyB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBjb2xsZWN0Tm9uRW51bVByb3BzIGZyb20gJy4vX2NvbGxlY3ROb25FbnVtUHJvcHMuanMnO1xuXG4vLyBSZXRyaWV2ZSBhbGwgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsS2V5cyhvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gW107XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICAvLyBBaGVtLCBJRSA8IDkuXG4gIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gIHJldHVybiBrZXlzO1xufVxuIiwiLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIHVwIHRvIChidXQgbm90IGluY2x1ZGluZykgdGhlXG4vLyBOdGggY2FsbC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJlZm9yZSh0aW1lcywgZnVuYykge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgtLXRpbWVzID4gMCkge1xuICAgICAgbWVtbyA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKHRpbWVzIDw9IDEpIGZ1bmMgPSBudWxsO1xuICAgIHJldHVybiBtZW1vO1xuICB9O1xufVxuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgZXhlY3V0ZUJvdW5kIGZyb20gJy4vX2V4ZWN1dGVCb3VuZC5qcyc7XG5cbi8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuLy8gb3B0aW9uYWxseSkuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ3MpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdCaW5kIG11c3QgYmUgY2FsbGVkIG9uIGEgZnVuY3Rpb24nKTtcbiAgdmFyIGJvdW5kID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihjYWxsQXJncykge1xuICAgIHJldHVybiBleGVjdXRlQm91bmQoZnVuYywgYm91bmQsIGNvbnRleHQsIHRoaXMsIGFyZ3MuY29uY2F0KGNhbGxBcmdzKSk7XG4gIH0pO1xuICByZXR1cm4gYm91bmQ7XG59KTtcbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgZmxhdHRlbiBmcm9tICcuL19mbGF0dGVuLmpzJztcbmltcG9ydCBiaW5kIGZyb20gJy4vYmluZC5qcyc7XG5cbi8vIEJpbmQgYSBudW1iZXIgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gUmVtYWluaW5nIGFyZ3VtZW50c1xuLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4vLyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBrZXlzID0gZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICB2YXIgaW5kZXggPSBrZXlzLmxlbmd0aDtcbiAgaWYgKGluZGV4IDwgMSkgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzJyk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaW5kZXhdO1xuICAgIG9ialtrZXldID0gYmluZChvYmpba2V5XSwgb2JqKTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSk7XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuXG4vLyBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFpbihvYmopIHtcbiAgdmFyIGluc3RhbmNlID0gXyhvYmopO1xuICBpbnN0YW5jZS5fY2hhaW4gPSB0cnVlO1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCJpbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gQ2h1bmsgYSBzaW5nbGUgYXJyYXkgaW50byBtdWx0aXBsZSBhcnJheXMsIGVhY2ggY29udGFpbmluZyBgY291bnRgIG9yIGZld2VyXG4vLyBpdGVtcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNodW5rKGFycmF5LCBjb3VudCkge1xuICBpZiAoY291bnQgPT0gbnVsbCB8fCBjb3VudCA8IDEpIHJldHVybiBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICByZXN1bHQucHVzaChzbGljZS5jYWxsKGFycmF5LCBpLCBpICs9IGNvdW50KSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vZXh0ZW5kLmpzJztcblxuLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogZXh0ZW5kKHt9LCBvYmopO1xufVxuIiwiaW1wb3J0IGZpbHRlciBmcm9tICcuL2ZpbHRlci5qcyc7XG5cbi8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhY3QoYXJyYXkpIHtcbiAgcmV0dXJuIGZpbHRlcihhcnJheSwgQm9vbGVhbik7XG59XG4iLCIvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgc3RhcnQgPSBhcmdzLmxlbmd0aCAtIDE7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSA9IHN0YXJ0O1xuICAgIHZhciByZXN1bHQgPSBhcmdzW3N0YXJ0XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHdoaWxlIChpLS0pIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG4iLCIvLyBQcmVkaWNhdGUtZ2VuZXJhdGluZyBmdW5jdGlvbi4gT2Z0ZW4gdXNlZnVsIG91dHNpZGUgb2YgVW5kZXJzY29yZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICcuL3ZhbHVlcy5qcyc7XG5pbXBvcnQgaW5kZXhPZiBmcm9tICcuL2luZGV4T2YuanMnO1xuXG4vLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIGl0ZW0gKHVzaW5nIGA9PT1gKS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKG9iaiwgaXRlbSwgZnJvbUluZGV4LCBndWFyZCkge1xuICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IHZhbHVlcyhvYmopO1xuICBpZiAodHlwZW9mIGZyb21JbmRleCAhPSAnbnVtYmVyJyB8fCBndWFyZCkgZnJvbUluZGV4ID0gMDtcbiAgcmV0dXJuIGluZGV4T2Yob2JqLCBpdGVtLCBmcm9tSW5kZXgpID49IDA7XG59XG4iLCJpbXBvcnQgZ3JvdXAgZnJvbSAnLi9fZ3JvdXAuanMnO1xuaW1wb3J0IGhhcyBmcm9tICcuL19oYXMuanMnO1xuXG4vLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3Ncbi8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuLy8gY3JpdGVyaW9uLlxuZXhwb3J0IGRlZmF1bHQgZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIGlmIChoYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XSsrOyBlbHNlIHJlc3VsdFtrZXldID0gMTtcbn0pO1xuIiwiaW1wb3J0IGJhc2VDcmVhdGUgZnJvbSAnLi9fYmFzZUNyZWF0ZS5qcyc7XG5pbXBvcnQgZXh0ZW5kT3duIGZyb20gJy4vZXh0ZW5kT3duLmpzJztcblxuLy8gQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoZSBnaXZlbiBwcm90b3R5cGUgb2JqZWN0LlxuLy8gSWYgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBwcm92aWRlZCB0aGVuIHRoZXkgd2lsbCBiZSBhZGRlZCB0byB0aGVcbi8vIGNyZWF0ZWQgb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlKHByb3RvdHlwZSwgcHJvcHMpIHtcbiAgdmFyIHJlc3VsdCA9IGJhc2VDcmVhdGUocHJvdG90eXBlKTtcbiAgaWYgKHByb3BzKSBleHRlbmRPd24ocmVzdWx0LCBwcm9wcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IG5vdyBmcm9tICcuL25vdy5qcyc7XG5cbi8vIFdoZW4gYSBzZXF1ZW5jZSBvZiBjYWxscyBvZiB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gZW5kcywgdGhlIGFyZ3VtZW50XG4vLyBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQuIFRoZSBlbmQgb2YgYSBzZXF1ZW5jZSBpcyBkZWZpbmVkIGJ5IHRoZSBgd2FpdGBcbi8vIHBhcmFtZXRlci4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0aGUgYXJndW1lbnQgZnVuY3Rpb24gd2lsbCBiZVxuLy8gdHJpZ2dlcmVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNlcXVlbmNlIGluc3RlYWQgb2YgYXQgdGhlIGVuZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICB2YXIgdGltZW91dCwgcHJldmlvdXMsIGFyZ3MsIHJlc3VsdCwgY29udGV4dDtcblxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFzc2VkID0gbm93KCkgLSBwcmV2aW91cztcbiAgICBpZiAod2FpdCA+IHBhc3NlZCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBwYXNzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgYmVjYXVzZSBgZnVuY2AgY2FuIHJlY3Vyc2l2ZWx5IGludm9rZSBgZGVib3VuY2VkYC5cbiAgICAgIGlmICghdGltZW91dCkgYXJncyA9IGNvbnRleHQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZGVib3VuY2VkID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihfYXJncykge1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBfYXJncztcbiAgICBwcmV2aW91cyA9IG5vdygpO1xuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGltbWVkaWF0ZSkgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG5cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gYXJncyA9IGNvbnRleHQgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlQXNzaWduZXIgZnJvbSAnLi9fY3JlYXRlQXNzaWduZXIuanMnO1xuaW1wb3J0IGFsbEtleXMgZnJvbSAnLi9hbGxLZXlzLmpzJztcblxuLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFzc2lnbmVyKGFsbEtleXMsIHRydWUpO1xuIiwiaW1wb3J0IHBhcnRpYWwgZnJvbSAnLi9wYXJ0aWFsLmpzJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5LmpzJztcbmltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5cbi8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuLy8gY2xlYXJlZC5cbmV4cG9ydCBkZWZhdWx0IHBhcnRpYWwoZGVsYXksIF8sIDEpO1xuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcblxuLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCB3YWl0LCBhcmdzKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9LCB3YWl0KTtcbn0pO1xuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJy4vX2ZsYXR0ZW4uanMnO1xuaW1wb3J0IGZpbHRlciBmcm9tICcuL2ZpbHRlci5qcyc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnLi9jb250YWlucy5qcyc7XG5cbi8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbi8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5LCByZXN0KSB7XG4gIHJlc3QgPSBmbGF0dGVuKHJlc3QsIHRydWUsIHRydWUpO1xuICByZXR1cm4gZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuICFjb250YWlucyhyZXN0LCB2YWx1ZSk7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgb3B0aW1pemVDYiBmcm9tICcuL19vcHRpbWl6ZUNiLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBUaGUgY29ybmVyc3RvbmUgZm9yIGNvbGxlY3Rpb24gZnVuY3Rpb25zLCBhbiBgZWFjaGBcbi8vIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuLy8gSGFuZGxlcyByYXcgb2JqZWN0cyBpbiBhZGRpdGlvbiB0byBhcnJheS1saWtlcy4gVHJlYXRzIGFsbFxuLy8gc3BhcnNlIGFycmF5LWxpa2VzIGFzIGlmIHRoZXkgd2VyZSBkZW5zZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2gob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB2YXIgaSwgbGVuZ3RoO1xuICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaXRlcmF0ZWUob2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgX2tleXMgPSBrZXlzKG9iaik7XG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gX2tleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZXJhdGVlKG9ialtfa2V5c1tpXV0sIF9rZXlzW2ldLCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUVzY2FwZXIgZnJvbSAnLi9fY3JlYXRlRXNjYXBlci5qcyc7XG5pbXBvcnQgZXNjYXBlTWFwIGZyb20gJy4vX2VzY2FwZU1hcC5qcyc7XG5cbi8vIEZ1bmN0aW9uIGZvciBlc2NhcGluZyBzdHJpbmdzIHRvIEhUTUwgaW50ZXJwb2xhdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVzY2FwZXIoZXNjYXBlTWFwKTtcbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBwYXNzIGEgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZXJ5KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIHZhciBfa2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIGtleXMob2JqKSxcbiAgICAgIGxlbmd0aCA9IChfa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBjdXJyZW50S2V5ID0gX2tleXMgPyBfa2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICBpZiAoIXByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCBjcmVhdGVBc3NpZ25lciBmcm9tICcuL19jcmVhdGVBc3NpZ25lci5qcyc7XG5pbXBvcnQgYWxsS2V5cyBmcm9tICcuL2FsbEtleXMuanMnO1xuXG4vLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFzc2lnbmVyKGFsbEtleXMpO1xuIiwiaW1wb3J0IGNyZWF0ZUFzc2lnbmVyIGZyb20gJy4vX2NyZWF0ZUFzc2lnbmVyLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIEFzc2lnbnMgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG93biBwcm9wZXJ0aWVzIGluIHRoZSBwYXNzZWQtaW5cbi8vIG9iamVjdChzKS5cbi8vIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduKVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXNzaWduZXIoa2V5cyk7XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoLmpzJztcblxuLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlcihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGZpbmRJbmRleCBmcm9tICcuL2ZpbmRJbmRleC5qcyc7XG5pbXBvcnQgZmluZEtleSBmcm9tICcuL2ZpbmRLZXkuanMnO1xuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHZhciBrZXlGaW5kZXIgPSBpc0FycmF5TGlrZShvYmopID8gZmluZEluZGV4IDogZmluZEtleTtcbiAgdmFyIGtleSA9IGtleUZpbmRlcihvYmosIHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIGlmIChrZXkgIT09IHZvaWQgMCAmJiBrZXkgIT09IC0xKSByZXR1cm4gb2JqW2tleV07XG59XG4iLCJpbXBvcnQgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIgZnJvbSAnLi9fY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIuanMnO1xuXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKDEpO1xuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEtleShvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICB2YXIgX2tleXMgPSBrZXlzKG9iaiksIGtleTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gX2tleXNbaV07XG4gICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIgZnJvbSAnLi9fY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIuanMnO1xuXG4vLyBSZXR1cm5zIHRoZSBsYXN0IGluZGV4IG9uIGFuIGFycmF5LWxpa2UgdGhhdCBwYXNzZXMgYSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuIiwiaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kLmpzJztcbmltcG9ydCBtYXRjaGVyIGZyb20gJy4vbWF0Y2hlci5qcyc7XG5cbi8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYF8uZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0XG4vLyBvYmplY3QgY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRXaGVyZShvYmosIGF0dHJzKSB7XG4gIHJldHVybiBmaW5kKG9iaiwgbWF0Y2hlcihhdHRycykpO1xufVxuIiwiaW1wb3J0IGluaXRpYWwgZnJvbSAnLi9pbml0aWFsLmpzJztcblxuLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4vLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpcnN0KGFycmF5LCBuLCBndWFyZCkge1xuICBpZiAoYXJyYXkgPT0gbnVsbCB8fCBhcnJheS5sZW5ndGggPCAxKSByZXR1cm4gbiA9PSBudWxsIHx8IGd1YXJkID8gdm9pZCAwIDogW107XG4gIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgcmV0dXJuIGluaXRpYWwoYXJyYXksIGFycmF5Lmxlbmd0aCAtIG4pO1xufVxuIiwiaW1wb3J0IF9mbGF0dGVuIGZyb20gJy4vX2ZsYXR0ZW4uanMnO1xuXG4vLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IgdXAgdG8gYGRlcHRoYC5cbi8vIFBhc3NpbmcgYHRydWVgIG9yIGBmYWxzZWAgYXMgYGRlcHRoYCBtZWFucyBgMWAgb3IgYEluZmluaXR5YCwgcmVzcGVjdGl2ZWx5LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSwgZGVwdGgpIHtcbiAgcmV0dXJuIF9mbGF0dGVuKGFycmF5LCBkZXB0aCwgZmFsc2UpO1xufVxuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcblxuLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnVuY3Rpb25zKG9iaikge1xuICB2YXIgbmFtZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBuYW1lcy5zb3J0KCk7XG59XG4iLCJpbXBvcnQgdG9QYXRoIGZyb20gJy4vX3RvUGF0aC5qcyc7XG5pbXBvcnQgZGVlcEdldCBmcm9tICcuL19kZWVwR2V0LmpzJztcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICcuL2lzVW5kZWZpbmVkLmpzJztcblxuLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgKGRlZXApIHByb3BlcnR5IG9uIGBwYXRoYCBmcm9tIGBvYmplY3RgLlxuLy8gSWYgYW55IHByb3BlcnR5IGluIGBwYXRoYCBkb2VzIG5vdCBleGlzdCBvciBpZiB0aGUgdmFsdWUgaXNcbi8vIGB1bmRlZmluZWRgLCByZXR1cm4gYGRlZmF1bHRWYWx1ZWAgaW5zdGVhZC5cbi8vIFRoZSBgcGF0aGAgaXMgbm9ybWFsaXplZCB0aHJvdWdoIGBfLnRvUGF0aGAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHZhbHVlID0gZGVlcEdldChvYmplY3QsIHRvUGF0aChwYXRoKSk7XG4gIHJldHVybiBpc1VuZGVmaW5lZCh2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cbiIsImltcG9ydCBncm91cCBmcm9tICcuL19ncm91cC5qcyc7XG5pbXBvcnQgaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5cbi8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbi8vIHRvIGdyb3VwIGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3JpdGVyaW9uLlxuZXhwb3J0IGRlZmF1bHQgZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIGlmIChoYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTsgZWxzZSByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG59KTtcbiIsImltcG9ydCBfaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5pbXBvcnQgdG9QYXRoIGZyb20gJy4vX3RvUGF0aC5qcyc7XG5cbi8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHkgb25cbi8vIGl0c2VsZiAoaW4gb3RoZXIgd29yZHMsIG5vdCBvbiBhIHByb3RvdHlwZSkuIFVubGlrZSB0aGUgaW50ZXJuYWwgYGhhc2Bcbi8vIGZ1bmN0aW9uLCB0aGlzIHB1YmxpYyB2ZXJzaW9uIGNhbiBhbHNvIHRyYXZlcnNlIG5lc3RlZCBwcm9wZXJ0aWVzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzKG9iaiwgcGF0aCkge1xuICBwYXRoID0gdG9QYXRoKHBhdGgpO1xuICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcGF0aFtpXTtcbiAgICBpZiAoIV9oYXMob2JqLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgb2JqID0gb2JqW2tleV07XG4gIH1cbiAgcmV0dXJuICEhbGVuZ3RoO1xufVxuIiwiLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdGVlcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbiIsIi8vIEVTTSBFeHBvcnRzXG4vLyA9PT09PT09PT09PVxuLy8gVGhpcyBtb2R1bGUgaXMgdGhlIHBhY2thZ2UgZW50cnkgcG9pbnQgZm9yIEVTIG1vZHVsZSB1c2Vycy4gSW4gb3RoZXIgd29yZHMsXG4vLyBpdCBpcyB0aGUgbW9kdWxlIHRoZXkgYXJlIGludGVyZmFjaW5nIHdpdGggd2hlbiB0aGV5IGltcG9ydCBmcm9tIHRoZSB3aG9sZVxuLy8gcGFja2FnZSBpbnN0ZWFkIG9mIGZyb20gYSBzdWJtb2R1bGUsIGxpa2UgdGhpczpcbi8vXG4vLyBgYGBqc1xuLy8gaW1wb3J0IHsgbWFwIH0gZnJvbSAndW5kZXJzY29yZSc7XG4vLyBgYGBcbi8vXG4vLyBUaGUgZGlmZmVyZW5jZSB3aXRoIGAuL2luZGV4LWRlZmF1bHRgLCB3aGljaCBpcyB0aGUgcGFja2FnZSBlbnRyeSBwb2ludCBmb3Jcbi8vIENvbW1vbkpTLCBBTUQgYW5kIFVNRCB1c2VycywgaXMgcHVyZWx5IHRlY2huaWNhbC4gSW4gRVMgbW9kdWxlcywgbmFtZWQgYW5kXG4vLyBkZWZhdWx0IGV4cG9ydHMgYXJlIGNvbnNpZGVyZWQgdG8gYmUgc2libGluZ3MsIHNvIHdoZW4geW91IGhhdmUgYSBkZWZhdWx0XG4vLyBleHBvcnQsIGl0cyBwcm9wZXJ0aWVzIGFyZSBub3QgYXV0b21hdGljYWxseSBhdmFpbGFibGUgYXMgbmFtZWQgZXhwb3J0cy4gRm9yXG4vLyB0aGlzIHJlYXNvbiwgd2UgcmUtZXhwb3J0IHRoZSBuYW1lZCBleHBvcnRzIGluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyB0aGUgc2FtZVxuLy8gZGVmYXVsdCBleHBvcnQgYXMgaW4gYC4vaW5kZXgtZGVmYXVsdGAuXG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9pbmRleC1kZWZhdWx0LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnO1xuIiwiLy8gRGVmYXVsdCBFeHBvcnRcbi8vID09PT09PT09PT09PT09XG4vLyBJbiB0aGlzIG1vZHVsZSwgd2UgbWl4IG91ciBidW5kbGVkIGV4cG9ydHMgaW50byB0aGUgYF9gIG9iamVjdCBhbmQgZXhwb3J0XG4vLyB0aGUgcmVzdWx0LiBUaGlzIGlzIGFuYWxvZ291cyB0byBzZXR0aW5nIGBtb2R1bGUuZXhwb3J0cyA9IF9gIGluIENvbW1vbkpTLlxuLy8gSGVuY2UsIHRoaXMgbW9kdWxlIGlzIGFsc28gdGhlIGVudHJ5IHBvaW50IG9mIG91ciBVTUQgYnVuZGxlIGFuZCB0aGUgcGFja2FnZVxuLy8gZW50cnkgcG9pbnQgZm9yIENvbW1vbkpTIGFuZCBBTUQgdXNlcnMuIEluIG90aGVyIHdvcmRzLCB0aGlzIGlzICh0aGUgc291cmNlXG4vLyBvZikgdGhlIG1vZHVsZSB5b3UgYXJlIGludGVyZmFjaW5nIHdpdGggd2hlbiB5b3UgZG8gYW55IG9mIHRoZSBmb2xsb3dpbmc6XG4vL1xuLy8gYGBganNcbi8vIC8vIENvbW1vbkpTXG4vLyB2YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbi8vXG4vLyAvLyBBTURcbi8vIGRlZmluZShbJ3VuZGVyc2NvcmUnXSwgZnVuY3Rpb24oXykgey4uLn0pO1xuLy9cbi8vIC8vIFVNRCBpbiB0aGUgYnJvd3NlclxuLy8gLy8gXyBpcyBhdmFpbGFibGUgYXMgYSBnbG9iYWwgdmFyaWFibGVcbi8vIGBgYFxuaW1wb3J0ICogYXMgYWxsRXhwb3J0cyBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IG1peGluIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbi8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbnZhciBfID0gbWl4aW4oYWxsRXhwb3J0cyk7XG4vLyBMZWdhY3kgTm9kZS5qcyBBUEkuXG5fLl8gPSBfO1xuLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIEFQSS5cbmV4cG9ydCBkZWZhdWx0IF87XG4iLCIvLyBOYW1lZCBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09XG5cbi8vICAgICBVbmRlcnNjb3JlLmpzIDEuMTMuNlxuLy8gICAgIGh0dHBzOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMjIgSmVyZW15IEFzaGtlbmFzLCBKdWxpYW4gR29uZ2dyaWpwLCBhbmQgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuLy8gQmFzZWxpbmUgc2V0dXAuXG5leHBvcnQgeyBWRVJTSU9OIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXN0QXJndW1lbnRzIH0gZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcblxuLy8gT2JqZWN0IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLVxuLy8gT3VyIG1vc3QgZnVuZGFtZW50YWwgZnVuY3Rpb25zIG9wZXJhdGUgb24gYW55IEphdmFTY3JpcHQgb2JqZWN0LlxuLy8gTW9zdCBmdW5jdGlvbnMgaW4gVW5kZXJzY29yZSBkZXBlbmQgb24gYXQgbGVhc3Qgb25lIGZ1bmN0aW9uIGluIHRoaXMgc2VjdGlvbi5cblxuLy8gQSBncm91cCBvZiBmdW5jdGlvbnMgdGhhdCBjaGVjayB0aGUgdHlwZXMgb2YgY29yZSBKYXZhU2NyaXB0IHZhbHVlcy5cbi8vIFRoZXNlIGFyZSBvZnRlbiBpbmZvcm1hbGx5IHJlZmVycmVkIHRvIGFzIHRoZSBcImlzVHlwZVwiIGZ1bmN0aW9ucy5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdWxsIH0gZnJvbSAnLi9pc051bGwuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1VuZGVmaW5lZCB9IGZyb20gJy4vaXNVbmRlZmluZWQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Jvb2xlYW4gfSBmcm9tICcuL2lzQm9vbGVhbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRWxlbWVudCB9IGZyb20gJy4vaXNFbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTdHJpbmcgfSBmcm9tICcuL2lzU3RyaW5nLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdW1iZXIgfSBmcm9tICcuL2lzTnVtYmVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNEYXRlIH0gZnJvbSAnLi9pc0RhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1JlZ0V4cCB9IGZyb20gJy4vaXNSZWdFeHAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Vycm9yIH0gZnJvbSAnLi9pc0Vycm9yLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTeW1ib2wgfSBmcm9tICcuL2lzU3ltYm9sLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNBcnJheUJ1ZmZlciB9IGZyb20gJy4vaXNBcnJheUJ1ZmZlci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRGF0YVZpZXcgfSBmcm9tICcuL2lzRGF0YVZpZXcuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FycmF5IH0gZnJvbSAnLi9pc0FycmF5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQXJndW1lbnRzIH0gZnJvbSAnLi9pc0FyZ3VtZW50cy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRmluaXRlIH0gZnJvbSAnLi9pc0Zpbml0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTmFOIH0gZnJvbSAnLi9pc05hTi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzVHlwZWRBcnJheSB9IGZyb20gJy4vaXNUeXBlZEFycmF5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eSB9IGZyb20gJy4vaXNFbXB0eS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTWF0Y2ggfSBmcm9tICcuL2lzTWF0Y2guanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VxdWFsIH0gZnJvbSAnLi9pc0VxdWFsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNNYXAgfSBmcm9tICcuL2lzTWFwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNXZWFrTWFwIH0gZnJvbSAnLi9pc1dlYWtNYXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1NldCB9IGZyb20gJy4vaXNTZXQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1dlYWtTZXQgfSBmcm9tICcuL2lzV2Vha1NldC5qcyc7XG5cbi8vIEZ1bmN0aW9ucyB0aGF0IHRyZWF0IGFuIG9iamVjdCBhcyBhIGRpY3Rpb25hcnkgb2Yga2V5LXZhbHVlIHBhaXJzLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzIH0gZnJvbSAnLi9rZXlzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsS2V5cyB9IGZyb20gJy4vYWxsS2V5cy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZhbHVlcyB9IGZyb20gJy4vdmFsdWVzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFpcnMgfSBmcm9tICcuL3BhaXJzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW52ZXJ0IH0gZnJvbSAnLi9pbnZlcnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmdW5jdGlvbnMsXG4gICAgICAgICBkZWZhdWx0IGFzIG1ldGhvZHMgICB9IGZyb20gJy4vZnVuY3Rpb25zLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXh0ZW5kIH0gZnJvbSAnLi9leHRlbmQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBleHRlbmRPd24sXG4gICAgICAgICBkZWZhdWx0IGFzIGFzc2lnbiAgICB9IGZyb20gJy4vZXh0ZW5kT3duLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlIH0gZnJvbSAnLi9jcmVhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbG9uZSB9IGZyb20gJy4vY2xvbmUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0YXAgfSBmcm9tICcuL3RhcC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldCB9IGZyb20gJy4vZ2V0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzIH0gZnJvbSAnLi9oYXMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXBPYmplY3QgfSBmcm9tICcuL21hcE9iamVjdC5qcyc7XG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxuLy8gQSBiaXQgb2YgYSBncmFiIGJhZzogUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb25zIGZvciB1c2Ugd2l0aCBmaWx0ZXJzIGFuZFxuLy8gbG9vcHMsIHN0cmluZyBlc2NhcGluZyBhbmQgdGVtcGxhdGluZywgY3JlYXRlIHJhbmRvbSBudW1iZXJzIGFuZCB1bmlxdWUgaWRzLFxuLy8gYW5kIGZ1bmN0aW9ucyB0aGF0IGZhY2lsaXRhdGUgVW5kZXJzY29yZSdzIGNoYWluaW5nIGFuZCBpdGVyYXRpb24gY29udmVudGlvbnMuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnN0YW50IH0gZnJvbSAnLi9jb25zdGFudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vb3AgfSBmcm9tICcuL25vb3AuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1BhdGggfSBmcm9tICcuL3RvUGF0aC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3BlcnR5IH0gZnJvbSAnLi9wcm9wZXJ0eS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3BlcnR5T2YgfSBmcm9tICcuL3Byb3BlcnR5T2YuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXRjaGVyLFxuICAgICAgICAgZGVmYXVsdCBhcyBtYXRjaGVzIH0gZnJvbSAnLi9tYXRjaGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGltZXMgfSBmcm9tICcuL3RpbWVzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmFuZG9tIH0gZnJvbSAnLi9yYW5kb20uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3cgfSBmcm9tICcuL25vdy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVzY2FwZSB9IGZyb20gJy4vZXNjYXBlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5lc2NhcGUgfSBmcm9tICcuL3VuZXNjYXBlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGVtcGxhdGVTZXR0aW5ncyB9IGZyb20gJy4vdGVtcGxhdGVTZXR0aW5ncy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3VsdCB9IGZyb20gJy4vcmVzdWx0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pcXVlSWQgfSBmcm9tICcuL3VuaXF1ZUlkLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hhaW4gfSBmcm9tICcuL2NoYWluLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXRlcmF0ZWUgfSBmcm9tICcuL2l0ZXJhdGVlLmpzJztcblxuLy8gRnVuY3Rpb24gKGFoZW0pIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhlc2UgZnVuY3Rpb25zIHRha2UgYSBmdW5jdGlvbiBhcyBhbiBhcmd1bWVudCBhbmQgcmV0dXJuIGEgbmV3IGZ1bmN0aW9uXG4vLyBhcyB0aGUgcmVzdWx0LiBBbHNvIGtub3duIGFzIGhpZ2hlci1vcmRlciBmdW5jdGlvbnMuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnRpYWwgfSBmcm9tICcuL3BhcnRpYWwuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiaW5kIH0gZnJvbSAnLi9iaW5kLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmluZEFsbCB9IGZyb20gJy4vYmluZEFsbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lbW9pemUgfSBmcm9tICcuL21lbW9pemUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWxheSB9IGZyb20gJy4vZGVsYXkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZlciB9IGZyb20gJy4vZGVmZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0aHJvdHRsZSB9IGZyb20gJy4vdGhyb3R0bGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3cmFwIH0gZnJvbSAnLi93cmFwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbmVnYXRlIH0gZnJvbSAnLi9uZWdhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlIH0gZnJvbSAnLi9jb21wb3NlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWZ0ZXIgfSBmcm9tICcuL2FmdGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmVmb3JlIH0gZnJvbSAnLi9iZWZvcmUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvbmNlIH0gZnJvbSAnLi9vbmNlLmpzJztcblxuLy8gRmluZGVyc1xuLy8gLS0tLS0tLVxuLy8gRnVuY3Rpb25zIHRoYXQgZXh0cmFjdCAodGhlIHBvc2l0aW9uIG9mKSBhIHNpbmdsZSBlbGVtZW50IGZyb20gYW4gb2JqZWN0XG4vLyBvciBhcnJheSBiYXNlZCBvbiBzb21lIGNyaXRlcmlvbi5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZEtleSB9IGZyb20gJy4vZmluZEtleS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRJbmRleCB9IGZyb20gJy4vZmluZEluZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZExhc3RJbmRleCB9IGZyb20gJy4vZmluZExhc3RJbmRleC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNvcnRlZEluZGV4IH0gZnJvbSAnLi9zb3J0ZWRJbmRleC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGluZGV4T2YgfSBmcm9tICcuL2luZGV4T2YuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsYXN0SW5kZXhPZiB9IGZyb20gJy4vbGFzdEluZGV4T2YuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kLFxuICAgICAgICAgZGVmYXVsdCBhcyBkZXRlY3QgfSBmcm9tICcuL2ZpbmQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kV2hlcmUgfSBmcm9tICcuL2ZpbmRXaGVyZS5qcyc7XG5cbi8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zIHRoYXQgd29yayBvbiBhbnkgY29sbGVjdGlvbiBvZiBlbGVtZW50czogZWl0aGVyIGFuIGFycmF5LCBvclxuLy8gYW4gb2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycy5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWFjaCxcbiAgICAgICAgIGRlZmF1bHQgYXMgZm9yRWFjaCB9IGZyb20gJy4vZWFjaC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcCxcbiAgICAgICAgIGRlZmF1bHQgYXMgY29sbGVjdCB9IGZyb20gJy4vbWFwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVkdWNlLFxuICAgICAgICAgZGVmYXVsdCBhcyBmb2xkbCxcbiAgICAgICAgIGRlZmF1bHQgYXMgaW5qZWN0IH0gZnJvbSAnLi9yZWR1Y2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2VSaWdodCxcbiAgICAgICAgIGRlZmF1bHQgYXMgZm9sZHIgICAgICAgfSBmcm9tICcuL3JlZHVjZVJpZ2h0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsdGVyLFxuICAgICAgICAgZGVmYXVsdCBhcyBzZWxlY3QgfSBmcm9tICcuL2ZpbHRlci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlamVjdCB9IGZyb20gJy4vcmVqZWN0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlcnksXG4gICAgICAgICBkZWZhdWx0IGFzIGFsbCAgIH0gZnJvbSAnLi9ldmVyeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNvbWUsXG4gICAgICAgICBkZWZhdWx0IGFzIGFueSAgfSBmcm9tICcuL3NvbWUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb250YWlucyxcbiAgICAgICAgIGRlZmF1bHQgYXMgaW5jbHVkZXMsXG4gICAgICAgICBkZWZhdWx0IGFzIGluY2x1ZGUgIH0gZnJvbSAnLi9jb250YWlucy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGludm9rZSB9IGZyb20gJy4vaW52b2tlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGx1Y2sgfSBmcm9tICcuL3BsdWNrLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2hlcmUgfSBmcm9tICcuL3doZXJlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF4IH0gZnJvbSAnLi9tYXguanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtaW4gfSBmcm9tICcuL21pbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNodWZmbGUgfSBmcm9tICcuL3NodWZmbGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYW1wbGUgfSBmcm9tICcuL3NhbXBsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNvcnRCeSB9IGZyb20gJy4vc29ydEJ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JvdXBCeSB9IGZyb20gJy4vZ3JvdXBCeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGluZGV4QnkgfSBmcm9tICcuL2luZGV4QnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb3VudEJ5IH0gZnJvbSAnLi9jb3VudEJ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFydGl0aW9uIH0gZnJvbSAnLi9wYXJ0aXRpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0FycmF5IH0gZnJvbSAnLi90b0FycmF5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2l6ZSB9IGZyb20gJy4vc2l6ZS5qcyc7XG5cbi8vIGBfLnBpY2tgIGFuZCBgXy5vbWl0YCBhcmUgYWN0dWFsbHkgb2JqZWN0IGZ1bmN0aW9ucywgYnV0IHdlIHB1dFxuLy8gdGhlbSBoZXJlIGluIG9yZGVyIHRvIGNyZWF0ZSBhIG1vcmUgbmF0dXJhbCByZWFkaW5nIG9yZGVyIGluIHRoZVxuLy8gbW9ub2xpdGhpYyBidWlsZCBhcyB0aGV5IGRlcGVuZCBvbiBgXy5jb250YWluc2AuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBpY2sgfSBmcm9tICcuL3BpY2suanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvbWl0IH0gZnJvbSAnLi9vbWl0LmpzJztcblxuLy8gQXJyYXkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9ucyB0aGF0IG9wZXJhdGUgb24gYXJyYXlzIChhbmQgYXJyYXktbGlrZXMpIG9ubHksIGJlY2F1c2UgdGhleeKAmXJlXG4vLyBleHByZXNzZWQgaW4gdGVybXMgb2Ygb3BlcmF0aW9ucyBvbiBhbiBvcmRlcmVkIGxpc3Qgb2YgdmFsdWVzLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJzdCxcbiAgICAgICAgIGRlZmF1bHQgYXMgaGVhZCxcbiAgICAgICAgIGRlZmF1bHQgYXMgdGFrZSAgfSBmcm9tICcuL2ZpcnN0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5pdGlhbCB9IGZyb20gJy4vaW5pdGlhbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxhc3QgfSBmcm9tICcuL2xhc3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXN0LFxuICAgICAgICAgZGVmYXVsdCBhcyB0YWlsLFxuICAgICAgICAgZGVmYXVsdCBhcyBkcm9wIH0gZnJvbSAnLi9yZXN0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcGFjdCB9IGZyb20gJy4vY29tcGFjdC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZsYXR0ZW4gfSBmcm9tICcuL2ZsYXR0ZW4uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRob3V0IH0gZnJvbSAnLi93aXRob3V0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pcSxcbiAgICAgICAgIGRlZmF1bHQgYXMgdW5pcXVlIH0gZnJvbSAnLi91bmlxLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb24gfSBmcm9tICcuL3VuaW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW50ZXJzZWN0aW9uIH0gZnJvbSAnLi9pbnRlcnNlY3Rpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmZXJlbmNlIH0gZnJvbSAnLi9kaWZmZXJlbmNlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW56aXAsXG4gICAgICAgICBkZWZhdWx0IGFzIHRyYW5zcG9zZSB9IGZyb20gJy4vdW56aXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXAgfSBmcm9tICcuL3ppcC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9iamVjdCB9IGZyb20gJy4vb2JqZWN0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmFuZ2UgfSBmcm9tICcuL3JhbmdlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2h1bmsgfSBmcm9tICcuL2NodW5rLmpzJztcblxuLy8gT09QXG4vLyAtLS1cbi8vIFRoZXNlIG1vZHVsZXMgc3VwcG9ydCB0aGUgXCJvYmplY3Qtb3JpZW50ZWRcIiBjYWxsaW5nIHN0eWxlLiBTZWUgYWxzb1xuLy8gYHVuZGVyc2NvcmUuanNgIGFuZCBgaW5kZXgtZGVmYXVsdC5qc2AuXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1peGluIH0gZnJvbSAnLi9taXhpbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi91bmRlcnNjb3JlLWFycmF5LW1ldGhvZHMuanMnO1xuIiwiaW1wb3J0IGdyb3VwIGZyb20gJy4vX2dyb3VwLmpzJztcblxuLy8gSW5kZXhlcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLCBzaW1pbGFyIHRvIGBfLmdyb3VwQnlgLCBidXQgZm9yXG4vLyB3aGVuIHlvdSBrbm93IHRoYXQgeW91ciBpbmRleCB2YWx1ZXMgd2lsbCBiZSB1bmlxdWUuXG5leHBvcnQgZGVmYXVsdCBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbn0pO1xuIiwiaW1wb3J0IHNvcnRlZEluZGV4IGZyb20gJy4vc29ydGVkSW5kZXguanMnO1xuaW1wb3J0IGZpbmRJbmRleCBmcm9tICcuL2ZpbmRJbmRleC5qcyc7XG5pbXBvcnQgY3JlYXRlSW5kZXhGaW5kZXIgZnJvbSAnLi9fY3JlYXRlSW5kZXhGaW5kZXIuanMnO1xuXG4vLyBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksXG4vLyBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LlxuLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4vLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5kZXhGaW5kZXIoMSwgZmluZEluZGV4LCBzb3J0ZWRJbmRleCk7XG4iLCJpbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4vLyB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiBhbGwgdGhlIHZhbHVlcyBpblxuLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWwoYXJyYXksIG4sIGd1YXJkKSB7XG4gIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSAobiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pKSk7XG59XG4iLCJpbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnLi9jb250YWlucy5qcyc7XG5cbi8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyBldmVyeSBpdGVtIHNoYXJlZCBiZXR3ZWVuIGFsbCB0aGVcbi8vIHBhc3NlZC1pbiBhcnJheXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlcnNlY3Rpb24oYXJyYXkpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGFycmF5W2ldO1xuICAgIGlmIChjb250YWlucyhyZXN1bHQsIGl0ZW0pKSBjb250aW51ZTtcbiAgICB2YXIgajtcbiAgICBmb3IgKGogPSAxOyBqIDwgYXJnc0xlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoIWNvbnRhaW5zKGFyZ3VtZW50c1tqXSwgaXRlbSkpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoaiA9PT0gYXJnc0xlbmd0aCkgcmVzdWx0LnB1c2goaXRlbSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludmVydChvYmopIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIgX2tleXMgPSBrZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBfa2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdFtvYmpbX2tleXNbaV1dXSA9IF9rZXlzW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAuanMnO1xuaW1wb3J0IGRlZXBHZXQgZnJvbSAnLi9fZGVlcEdldC5qcyc7XG5pbXBvcnQgdG9QYXRoIGZyb20gJy4vX3RvUGF0aC5qcyc7XG5cbi8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIHBhdGgsIGFyZ3MpIHtcbiAgdmFyIGNvbnRleHRQYXRoLCBmdW5jO1xuICBpZiAoaXNGdW5jdGlvbihwYXRoKSkge1xuICAgIGZ1bmMgPSBwYXRoO1xuICB9IGVsc2Uge1xuICAgIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gICAgY29udGV4dFBhdGggPSBwYXRoLnNsaWNlKDAsIC0xKTtcbiAgICBwYXRoID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICB9XG4gIHJldHVybiBtYXAob2JqLCBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGZ1bmM7XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIGlmIChjb250ZXh0UGF0aCAmJiBjb250ZXh0UGF0aC5sZW5ndGgpIHtcbiAgICAgICAgY29udGV4dCA9IGRlZXBHZXQoY29udGV4dCwgY29udGV4dFBhdGgpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICAgIG1ldGhvZCA9IGNvbnRleHRbcGF0aF07XG4gICAgfVxuICAgIHJldHVybiBtZXRob2QgPT0gbnVsbCA/IG1ldGhvZCA6IG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcbmltcG9ydCBoYXMgZnJvbSAnLi9faGFzLmpzJztcblxudmFyIGlzQXJndW1lbnRzID0gdGFnVGVzdGVyKCdBcmd1bWVudHMnKTtcblxuLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSA8IDkpLCB3aGVyZVxuLy8gdGhlcmUgaXNuJ3QgYW55IGluc3BlY3RhYmxlIFwiQXJndW1lbnRzXCIgdHlwZS5cbihmdW5jdGlvbigpIHtcbiAgaWYgKCFpc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBoYXMob2JqLCAnY2FsbGVlJyk7XG4gICAgfTtcbiAgfVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgeyBuYXRpdmVJc0FycmF5IH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG4vLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuLy8gRGVsZWdhdGVzIHRvIEVDTUE1J3MgbmF0aXZlIGBBcnJheS5pc0FycmF5YC5cbmV4cG9ydCBkZWZhdWx0IG5hdGl2ZUlzQXJyYXkgfHwgdGFnVGVzdGVyKCdBcnJheScpO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ0FycmF5QnVmZmVyJyk7XG4iLCJpbXBvcnQgeyB0b1N0cmluZyB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSB7XG4gIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNBcnJheUJ1ZmZlciBmcm9tICcuL2lzQXJyYXlCdWZmZXIuanMnO1xuaW1wb3J0IHsgaGFzU3RyaW5nVGFnQnVnIH0gZnJvbSAnLi9fc3RyaW5nVGFnQnVnLmpzJztcblxudmFyIGlzRGF0YVZpZXcgPSB0YWdUZXN0ZXIoJ0RhdGFWaWV3Jyk7XG5cbi8vIEluIElFIDEwIC0gRWRnZSAxMywgd2UgbmVlZCBhIGRpZmZlcmVudCBoZXVyaXN0aWNcbi8vIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIGBEYXRhVmlld2AuXG5mdW5jdGlvbiBpZTEwSXNEYXRhVmlldyhvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIGlzRnVuY3Rpb24ob2JqLmdldEludDgpICYmIGlzQXJyYXlCdWZmZXIob2JqLmJ1ZmZlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChoYXNTdHJpbmdUYWdCdWcgPyBpZTEwSXNEYXRhVmlldyA6IGlzRGF0YVZpZXcpO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ0RhdGUnKTtcbiIsIi8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBET00gZWxlbWVudD9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xufVxuIiwiaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL2lzU3RyaW5nLmpzJztcbmltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIC8vIFNraXAgdGhlIG1vcmUgZXhwZW5zaXZlIGB0b1N0cmluZ2AtYmFzZWQgdHlwZSBjaGVja3MgaWYgYG9iamAgaGFzIG5vXG4gIC8vIGAubGVuZ3RoYC5cbiAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChvYmopO1xuICBpZiAodHlwZW9mIGxlbmd0aCA9PSAnbnVtYmVyJyAmJiAoXG4gICAgaXNBcnJheShvYmopIHx8IGlzU3RyaW5nKG9iaikgfHwgaXNBcmd1bWVudHMob2JqKVxuICApKSByZXR1cm4gbGVuZ3RoID09PSAwO1xuICByZXR1cm4gZ2V0TGVuZ3RoKGtleXMob2JqKSkgPT09IDA7XG59XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuaW1wb3J0IHsgdG9TdHJpbmcsIFN5bWJvbFByb3RvIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGdldEJ5dGVMZW5ndGggZnJvbSAnLi9fZ2V0Qnl0ZUxlbmd0aC5qcyc7XG5pbXBvcnQgaXNUeXBlZEFycmF5IGZyb20gJy4vaXNUeXBlZEFycmF5LmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgeyBoYXNTdHJpbmdUYWdCdWcgfSAgZnJvbSAnLi9fc3RyaW5nVGFnQnVnLmpzJztcbmltcG9ydCBpc0RhdGFWaWV3IGZyb20gJy4vaXNEYXRhVmlldy5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuaW1wb3J0IGhhcyBmcm9tICcuL19oYXMuanMnO1xuaW1wb3J0IHRvQnVmZmVyVmlldyBmcm9tICcuL190b0J1ZmZlclZpZXcuanMnO1xuXG4vLyBXZSB1c2UgdGhpcyBzdHJpbmcgdHdpY2UsIHNvIGdpdmUgaXQgYSBuYW1lIGZvciBtaW5pZmljYXRpb24uXG52YXIgdGFnRGF0YVZpZXcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYF8uaXNFcXVhbGAuXG5mdW5jdGlvbiBlcShhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwczovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgLy8gYG51bGxgIG9yIGB1bmRlZmluZWRgIG9ubHkgZXF1YWwgdG8gaXRzZWxmIChzdHJpY3QgY29tcGFyaXNvbikuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gIGlmIChhICE9PSBhKSByZXR1cm4gYiAhPT0gYjtcbiAgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXG4gIHZhciB0eXBlID0gdHlwZW9mIGE7XG4gIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nICYmIHR5cGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spO1xufVxuXG4vLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYF8uaXNFcXVhbGAuXG5mdW5jdGlvbiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gIC8vIFdvcmsgYXJvdW5kIGEgYnVnIGluIElFIDEwIC0gRWRnZSAxMy5cbiAgaWYgKGhhc1N0cmluZ1RhZ0J1ZyAmJiBjbGFzc05hbWUgPT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgaXNEYXRhVmlldyhhKSkge1xuICAgIGlmICghaXNEYXRhVmlldyhiKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNsYXNzTmFtZSA9IHRhZ0RhdGFWaWV3O1xuICB9XG4gIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgLy8gVGhlc2UgdHlwZXMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgcmV0dXJuICcnICsgYSA9PT0gJycgKyBiO1xuICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU4uXG4gICAgICBpZiAoK2EgIT09ICthKSByZXR1cm4gK2IgIT09ICtiO1xuICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgIGNhc2UgJ1tvYmplY3QgU3ltYm9sXSc6XG4gICAgICByZXR1cm4gU3ltYm9sUHJvdG8udmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2xQcm90by52YWx1ZU9mLmNhbGwoYik7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nOlxuICAgIGNhc2UgdGFnRGF0YVZpZXc6XG4gICAgICAvLyBDb2VyY2UgdG8gdHlwZWQgYXJyYXkgc28gd2UgY2FuIGZhbGwgdGhyb3VnaC5cbiAgICAgIHJldHVybiBkZWVwRXEodG9CdWZmZXJWaWV3KGEpLCB0b0J1ZmZlclZpZXcoYiksIGFTdGFjaywgYlN0YWNrKTtcbiAgfVxuXG4gIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIGlmICghYXJlQXJyYXlzICYmIGlzVHlwZWRBcnJheShhKSkge1xuICAgICAgdmFyIGJ5dGVMZW5ndGggPSBnZXRCeXRlTGVuZ3RoKGEpO1xuICAgICAgaWYgKGJ5dGVMZW5ndGggIT09IGdldEJ5dGVMZW5ndGgoYikpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChhLmJ1ZmZlciA9PT0gYi5idWZmZXIgJiYgYS5ieXRlT2Zmc2V0ID09PSBiLmJ5dGVPZmZzZXQpIHJldHVybiB0cnVlO1xuICAgICAgYXJlQXJyYXlzID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWFyZUFycmF5cykge1xuICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXG4gICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKGlzRnVuY3Rpb24oYUN0b3IpICYmIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbihiQ3RvcikgJiYgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgnY29uc3RydWN0b3InIGluIGEgJiYgJ2NvbnN0cnVjdG9yJyBpbiBiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuXG4gIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XG4gIGJTdGFjayA9IGJTdGFjayB8fCBbXTtcbiAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcbiAgfVxuXG4gIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgYVN0YWNrLnB1c2goYSk7XG4gIGJTdGFjay5wdXNoKGIpO1xuXG4gIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgYVN0YWNrLCBiU3RhY2spKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgIHZhciBfa2V5cyA9IGtleXMoYSksIGtleTtcbiAgICBsZW5ndGggPSBfa2V5cy5sZW5ndGg7XG4gICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxuICAgIGlmIChrZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcbiAgICAgIGtleSA9IF9rZXlzW2xlbmd0aF07XG4gICAgICBpZiAoIShoYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgYVN0YWNrLnBvcCgpO1xuICBiU3RhY2sucG9wKCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRXF1YWwoYSwgYikge1xuICByZXR1cm4gZXEoYSwgYik7XG59XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignRXJyb3InKTtcbiIsImltcG9ydCB7IF9pc0Zpbml0ZSB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzU3ltYm9sLmpzJztcblxuLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGaW5pdGUob2JqKSB7XG4gIHJldHVybiAhaXNTeW1ib2wob2JqKSAmJiBfaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcbmltcG9ydCB7IHJvb3QgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5cbnZhciBpc0Z1bmN0aW9uID0gdGFnVGVzdGVyKCdGdW5jdGlvbicpO1xuXG4vLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuIFdvcmsgYXJvdW5kIHNvbWUgYHR5cGVvZmAgYnVncyBpbiBvbGRcbi8vIHY4LCBJRSAxMSAoIzE2MjEpLCBTYWZhcmkgOCAoIzE5MjkpLCBhbmQgUGhhbnRvbUpTICgjMjIzNikuXG52YXIgbm9kZWxpc3QgPSByb290LmRvY3VtZW50ICYmIHJvb3QuZG9jdW1lbnQuY2hpbGROb2RlcztcbmlmICh0eXBlb2YgLy4vICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mIEludDhBcnJheSAhPSAnb2JqZWN0JyAmJiB0eXBlb2Ygbm9kZWxpc3QgIT0gJ2Z1bmN0aW9uJykge1xuICBpc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNGdW5jdGlvbjtcbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcbmltcG9ydCB7IGlzSUUxMSB9IGZyb20gJy4vX3N0cmluZ1RhZ0J1Zy5qcyc7XG5pbXBvcnQgeyBpZTExZmluZ2VycHJpbnQsIG1hcE1ldGhvZHMgfSAgZnJvbSAnLi9fbWV0aG9kRmluZ2VycHJpbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBpc0lFMTEgPyBpZTExZmluZ2VycHJpbnQobWFwTWV0aG9kcykgOiB0YWdUZXN0ZXIoJ01hcCcpO1xuIiwiaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01hdGNoKG9iamVjdCwgYXR0cnMpIHtcbiAgdmFyIF9rZXlzID0ga2V5cyhhdHRycyksIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gIWxlbmd0aDtcbiAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IF9rZXlzW2ldO1xuICAgIGlmIChhdHRyc1trZXldICE9PSBvYmpba2V5XSB8fCAhKGtleSBpbiBvYmopKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBfaXNOYU4gfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pc051bWJlci5qcyc7XG5cbi8vIElzIHRoZSBnaXZlbiB2YWx1ZSBgTmFOYD9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTmFOKG9iaikge1xuICByZXR1cm4gaXNOdW1iZXIob2JqKSAmJiBfaXNOYU4ob2JqKTtcbn1cbiIsIi8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgdGFnVGVzdGVyKCdOdW1iZXInKTtcbiIsIi8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgYW4gb2JqZWN0P1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgKHR5cGUgPT09ICdvYmplY3QnICYmICEhb2JqKTtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgdGFnVGVzdGVyKCdSZWdFeHAnKTtcbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcbmltcG9ydCB7IGlzSUUxMSB9IGZyb20gJy4vX3N0cmluZ1RhZ0J1Zy5qcyc7XG5pbXBvcnQgeyBpZTExZmluZ2VycHJpbnQsIHNldE1ldGhvZHMgfSAgZnJvbSAnLi9fbWV0aG9kRmluZ2VycHJpbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBpc0lFMTEgPyBpZTExZmluZ2VycHJpbnQoc2V0TWV0aG9kcykgOiB0YWdUZXN0ZXIoJ1NldCcpO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ1N0cmluZycpO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ1N5bWJvbCcpO1xuIiwiaW1wb3J0IHsgc3VwcG9ydHNBcnJheUJ1ZmZlciwgbmF0aXZlSXNWaWV3LCB0b1N0cmluZyB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBpc0RhdGFWaWV3IGZyb20gJy4vaXNEYXRhVmlldy5qcyc7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi9jb25zdGFudC5qcyc7XG5pbXBvcnQgaXNCdWZmZXJMaWtlIGZyb20gJy4vX2lzQnVmZmVyTGlrZS5qcyc7XG5cbi8vIElzIGEgZ2l2ZW4gdmFsdWUgYSB0eXBlZCBhcnJheT9cbnZhciB0eXBlZEFycmF5UGF0dGVybiA9IC9cXFtvYmplY3QgKChJfFVpKW50KDh8MTZ8MzIpfEZsb2F0KDMyfDY0KXxVaW50OENsYW1wZWR8QmlnKEl8VWkpbnQ2NClBcnJheVxcXS87XG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkob2JqKSB7XG4gIC8vIGBBcnJheUJ1ZmZlci5pc1ZpZXdgIGlzIHRoZSBtb3N0IGZ1dHVyZS1wcm9vZiwgc28gdXNlIGl0IHdoZW4gYXZhaWxhYmxlLlxuICAvLyBPdGhlcndpc2UsIGZhbGwgYmFjayBvbiB0aGUgYWJvdmUgcmVndWxhciBleHByZXNzaW9uLlxuICByZXR1cm4gbmF0aXZlSXNWaWV3ID8gKG5hdGl2ZUlzVmlldyhvYmopICYmICFpc0RhdGFWaWV3KG9iaikpIDpcbiAgICAgICAgICAgICAgICBpc0J1ZmZlckxpa2Uob2JqKSAmJiB0eXBlZEFycmF5UGF0dGVybi50ZXN0KHRvU3RyaW5nLmNhbGwob2JqKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnRzQXJyYXlCdWZmZXIgPyBpc1R5cGVkQXJyYXkgOiBjb25zdGFudChmYWxzZSk7XG4iLCIvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIHVuZGVmaW5lZD9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG59XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5pbXBvcnQgeyBpc0lFMTEgfSBmcm9tICcuL19zdHJpbmdUYWdCdWcuanMnO1xuaW1wb3J0IHsgaWUxMWZpbmdlcnByaW50LCB3ZWFrTWFwTWV0aG9kcyB9ICBmcm9tICcuL19tZXRob2RGaW5nZXJwcmludC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzSUUxMSA/IGllMTFmaW5nZXJwcmludCh3ZWFrTWFwTWV0aG9kcykgOiB0YWdUZXN0ZXIoJ1dlYWtNYXAnKTtcbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgdGFnVGVzdGVyKCdXZWFrU2V0Jyk7XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuXG4vLyBFeHRlcm5hbCB3cmFwcGVyIGZvciBvdXIgY2FsbGJhY2sgZ2VuZXJhdG9yLiBVc2VycyBtYXkgY3VzdG9taXplXG4vLyBgXy5pdGVyYXRlZWAgaWYgdGhleSB3YW50IGFkZGl0aW9uYWwgcHJlZGljYXRlL2l0ZXJhdGVlIHNob3J0aGFuZCBzdHlsZXMuXG4vLyBUaGlzIGFic3RyYWN0aW9uIGhpZGVzIHRoZSBpbnRlcm5hbC1vbmx5IGBhcmdDb3VudGAgYXJndW1lbnQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpdGVyYXRlZSh2YWx1ZSwgY29udGV4dCkge1xuICByZXR1cm4gYmFzZUl0ZXJhdGVlKHZhbHVlLCBjb250ZXh0LCBJbmZpbml0eSk7XG59XG5fLml0ZXJhdGVlID0gaXRlcmF0ZWU7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgeyBuYXRpdmVLZXlzLCBoYXNFbnVtQnVnIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGhhcyBmcm9tICcuL19oYXMuanMnO1xuaW1wb3J0IGNvbGxlY3ROb25FbnVtUHJvcHMgZnJvbSAnLi9fY29sbGVjdE5vbkVudW1Qcm9wcy5qcyc7XG5cbi8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbi8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2AuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlzKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgaWYgKG5hdGl2ZUtleXMpIHJldHVybiBuYXRpdmVLZXlzKG9iaik7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChoYXMob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgLy8gQWhlbSwgSUUgPCA5LlxuICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICByZXR1cm4ga2V5cztcbn1cbiIsImltcG9ydCByZXN0IGZyb20gJy4vcmVzdC5qcyc7XG5cbi8vIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBsYXN0IE5cbi8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYXN0KGFycmF5LCBuLCBndWFyZCkge1xuICBpZiAoYXJyYXkgPT0gbnVsbCB8fCBhcnJheS5sZW5ndGggPCAxKSByZXR1cm4gbiA9PSBudWxsIHx8IGd1YXJkID8gdm9pZCAwIDogW107XG4gIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgcmV0dXJuIHJlc3QoYXJyYXksIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIG4pKTtcbn1cbiIsImltcG9ydCBmaW5kTGFzdEluZGV4IGZyb20gJy4vZmluZExhc3RJbmRleC5qcyc7XG5pbXBvcnQgY3JlYXRlSW5kZXhGaW5kZXIgZnJvbSAnLi9fY3JlYXRlSW5kZXhGaW5kZXIuanMnO1xuXG4vLyBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbi8vIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmRleEZpbmRlcigtMSwgZmluZExhc3RJbmRleCk7XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0ZWUgdG8gZWFjaCBlbGVtZW50LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gIHZhciBfa2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIGtleXMob2JqKSxcbiAgICAgIGxlbmd0aCA9IChfa2V5cyB8fCBvYmopLmxlbmd0aCxcbiAgICAgIHJlc3VsdHMgPSBBcnJheShsZW5ndGgpO1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGN1cnJlbnRLZXkgPSBfa2V5cyA/IF9rZXlzW2luZGV4XSA6IGluZGV4O1xuICAgIHJlc3VsdHNbaW5kZXhdID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIFJldHVybnMgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGBpdGVyYXRlZWAgdG8gZWFjaCBlbGVtZW50IG9mIGBvYmpgLlxuLy8gSW4gY29udHJhc3QgdG8gYF8ubWFwYCBpdCByZXR1cm5zIGFuIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcE9iamVjdChvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB2YXIgX2tleXMgPSBrZXlzKG9iaiksXG4gICAgICBsZW5ndGggPSBfa2V5cy5sZW5ndGgsXG4gICAgICByZXN1bHRzID0ge307XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgY3VycmVudEtleSA9IF9rZXlzW2luZGV4XTtcbiAgICByZXN1bHRzW2N1cnJlbnRLZXldID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuIiwiaW1wb3J0IGV4dGVuZE93biBmcm9tICcuL2V4dGVuZE93bi5qcyc7XG5pbXBvcnQgaXNNYXRjaCBmcm9tICcuL2lzTWF0Y2guanMnO1xuXG4vLyBSZXR1cm5zIGEgcHJlZGljYXRlIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2Zcbi8vIGBrZXk6dmFsdWVgIHBhaXJzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF0Y2hlcihhdHRycykge1xuICBhdHRycyA9IGV4dGVuZE93bih7fSwgYXR0cnMpO1xuICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGlzTWF0Y2gob2JqLCBhdHRycyk7XG4gIH07XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICcuL3ZhbHVlcy5qcyc7XG5pbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoLmpzJztcblxuLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF4KG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIHJlc3VsdCA9IC1JbmZpbml0eSwgbGFzdENvbXB1dGVkID0gLUluZmluaXR5LFxuICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCB8fCAodHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpKSB7XG4gICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IHZhbHVlcyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgPiByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2LCBpbmRleCwgbGlzdCkge1xuICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2LCBpbmRleCwgbGlzdCk7XG4gICAgICBpZiAoY29tcHV0ZWQgPiBsYXN0Q29tcHV0ZWQgfHwgKGNvbXB1dGVkID09PSAtSW5maW5pdHkgJiYgcmVzdWx0ID09PSAtSW5maW5pdHkpKSB7XG4gICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5cbi8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW1vaXplKGZ1bmMsIGhhc2hlcikge1xuICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHZhciBjYWNoZSA9IG1lbW9pemUuY2FjaGU7XG4gICAgdmFyIGFkZHJlc3MgPSAnJyArIChoYXNoZXIgPyBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGtleSk7XG4gICAgaWYgKCFoYXMoY2FjaGUsIGFkZHJlc3MpKSBjYWNoZVthZGRyZXNzXSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gY2FjaGVbYWRkcmVzc107XG4gIH07XG4gIG1lbW9pemUuY2FjaGUgPSB7fTtcbiAgcmV0dXJuIG1lbW9pemU7XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICcuL3ZhbHVlcy5qcyc7XG5pbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoLmpzJztcblxuLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWluKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgaWYgKGl0ZXJhdGVlID09IG51bGwgfHwgKHR5cGVvZiBpdGVyYXRlZSA9PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqWzBdICE9ICdvYmplY3QnICYmIG9iaiAhPSBudWxsKSkge1xuICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiB2YWx1ZXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIDwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odiwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodiwgaW5kZXgsIGxpc3QpO1xuICAgICAgaWYgKGNvbXB1dGVkIDwgbGFzdENvbXB1dGVkIHx8IChjb21wdXRlZCA9PT0gSW5maW5pdHkgJiYgcmVzdWx0ID09PSBJbmZpbml0eSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2guanMnO1xuaW1wb3J0IGZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQgeyBwdXNoIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGNoYWluUmVzdWx0IGZyb20gJy4vX2NoYWluUmVzdWx0LmpzJztcblxuLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGVhY2goZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNoYWluUmVzdWx0KHRoaXMsIGZ1bmMuYXBwbHkoXywgYXJncykpO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gXztcbn1cbiIsIi8vIFJldHVybnMgYSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIHBhc3NlZC1pbiBwcmVkaWNhdGUuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZWdhdGUocHJlZGljYXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuIiwiLy8gUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb24uIE9mdGVuIHVzZWZ1bCBvdXRzaWRlIG9mIFVuZGVyc2NvcmUuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub29wKCl7fVxuIiwiLy8gQSAocG9zc2libHkgZmFzdGVyKSB3YXkgdG8gZ2V0IHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhcyBhbiBpbnRlZ2VyLlxuZXhwb3J0IGRlZmF1bHQgRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG4iLCJpbXBvcnQgZ2V0TGVuZ3RoICBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuXG4vLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4vLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2Zcbi8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy4gUGFzc2luZyBieSBwYWlycyBpcyB0aGUgcmV2ZXJzZSBvZiBgXy5wYWlyc2AuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3QobGlzdCwgdmFsdWVzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChsaXN0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgbmVnYXRlIGZyb20gJy4vbmVnYXRlLmpzJztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAuanMnO1xuaW1wb3J0IGZsYXR0ZW4gZnJvbSAnLi9fZmxhdHRlbi5qcyc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnLi9jb250YWlucy5qcyc7XG5pbXBvcnQgcGljayBmcm9tICcuL3BpY2suanMnO1xuXG4vLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgZGlzYWxsb3dlZCBwcm9wZXJ0aWVzLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0ga2V5c1swXSwgY29udGV4dDtcbiAgaWYgKGlzRnVuY3Rpb24oaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSBuZWdhdGUoaXRlcmF0ZWUpO1xuICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGNvbnRleHQgPSBrZXlzWzFdO1xuICB9IGVsc2Uge1xuICAgIGtleXMgPSBtYXAoZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpLCBTdHJpbmcpO1xuICAgIGl0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgcmV0dXJuICFjb250YWlucyhrZXlzLCBrZXkpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHBpY2sob2JqLCBpdGVyYXRlZSwgY29udGV4dCk7XG59KTtcbiIsImltcG9ydCBwYXJ0aWFsIGZyb20gJy4vcGFydGlhbC5qcyc7XG5pbXBvcnQgYmVmb3JlIGZyb20gJy4vYmVmb3JlLmpzJztcblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4vLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuZXhwb3J0IGRlZmF1bHQgcGFydGlhbChiZWZvcmUsIDIpO1xuIiwiaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4vLyBUaGUgb3Bwb3NpdGUgb2YgYF8ub2JqZWN0YCB3aXRoIG9uZSBhcmd1bWVudC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhaXJzKG9iaikge1xuICB2YXIgX2tleXMgPSBrZXlzKG9iaik7XG4gIHZhciBsZW5ndGggPSBfa2V5cy5sZW5ndGg7XG4gIHZhciBwYWlycyA9IEFycmF5KGxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBwYWlyc1tpXSA9IFtfa2V5c1tpXSwgb2JqW19rZXlzW2ldXV07XG4gIH1cbiAgcmV0dXJuIHBhaXJzO1xufVxuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBleGVjdXRlQm91bmQgZnJvbSAnLi9fZXhlY3V0ZUJvdW5kLmpzJztcbmltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5cbi8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbi8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LiBgX2AgYWN0c1xuLy8gYXMgYSBwbGFjZWhvbGRlciBieSBkZWZhdWx0LCBhbGxvd2luZyBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzIHRvIGJlXG4vLyBwcmUtZmlsbGVkLiBTZXQgYF8ucGFydGlhbC5wbGFjZWhvbGRlcmAgZm9yIGEgY3VzdG9tIHBsYWNlaG9sZGVyIGFyZ3VtZW50LlxudmFyIHBhcnRpYWwgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGJvdW5kQXJncykge1xuICB2YXIgcGxhY2Vob2xkZXIgPSBwYXJ0aWFsLnBsYWNlaG9sZGVyO1xuICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcG9zaXRpb24gPSAwLCBsZW5ndGggPSBib3VuZEFyZ3MubGVuZ3RoO1xuICAgIHZhciBhcmdzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYm91bmRBcmdzW2ldID09PSBwbGFjZWhvbGRlciA/IGFyZ3VtZW50c1twb3NpdGlvbisrXSA6IGJvdW5kQXJnc1tpXTtcbiAgICB9XG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgYXJndW1lbnRzLmxlbmd0aCkgYXJncy5wdXNoKGFyZ3VtZW50c1twb3NpdGlvbisrXSk7XG4gICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgdGhpcywgdGhpcywgYXJncyk7XG4gIH07XG4gIHJldHVybiBib3VuZDtcbn0pO1xuXG5wYXJ0aWFsLnBsYWNlaG9sZGVyID0gXztcbmV4cG9ydCBkZWZhdWx0IHBhcnRpYWw7XG4iLCJpbXBvcnQgZ3JvdXAgZnJvbSAnLi9fZ3JvdXAuanMnO1xuXG4vLyBTcGxpdCBhIGNvbGxlY3Rpb24gaW50byB0d28gYXJyYXlzOiBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIHBhc3MgdGhlIGdpdmVuXG4vLyB0cnV0aCB0ZXN0LCBhbmQgb25lIHdob3NlIGVsZW1lbnRzIGFsbCBkbyBub3QgcGFzcyB0aGUgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIHBhc3MpIHtcbiAgcmVzdWx0W3Bhc3MgPyAwIDogMV0ucHVzaCh2YWx1ZSk7XG59LCB0cnVlKTtcbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IG9wdGltaXplQ2IgZnJvbSAnLi9fb3B0aW1pemVDYi5qcyc7XG5pbXBvcnQgYWxsS2V5cyBmcm9tICcuL2FsbEtleXMuanMnO1xuaW1wb3J0IGtleUluT2JqIGZyb20gJy4vX2tleUluT2JqLmpzJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJy4vX2ZsYXR0ZW4uanMnO1xuXG4vLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSBhbGxvd2VkIHByb3BlcnRpZXMuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICB2YXIgcmVzdWx0ID0ge30sIGl0ZXJhdGVlID0ga2V5c1swXTtcbiAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICBpZiAoaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGtleXNbMV0pO1xuICAgIGtleXMgPSBhbGxLZXlzKG9iaik7XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZWUgPSBrZXlJbk9iajtcbiAgICBrZXlzID0gZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICAgIG9iaiA9IE9iamVjdChvYmopO1xuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgaWYgKGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iaikpIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwiaW1wb3J0IG1hcCBmcm9tICcuL21hcC5qcyc7XG5pbXBvcnQgcHJvcGVydHkgZnJvbSAnLi9wcm9wZXJ0eS5qcyc7XG5cbi8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYF8ubWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsdWNrKG9iaiwga2V5KSB7XG4gIHJldHVybiBtYXAob2JqLCBwcm9wZXJ0eShrZXkpKTtcbn1cbiIsImltcG9ydCBkZWVwR2V0IGZyb20gJy4vX2RlZXBHZXQuanMnO1xuaW1wb3J0IHRvUGF0aCBmcm9tICcuL190b1BhdGguanMnO1xuXG4vLyBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBwYXNzZWQgYW4gb2JqZWN0LCB3aWxsIHRyYXZlcnNlIHRoYXQgb2JqZWN04oCZc1xuLy8gcHJvcGVydGllcyBkb3duIHRoZSBnaXZlbiBgcGF0aGAsIHNwZWNpZmllZCBhcyBhbiBhcnJheSBvZiBrZXlzIG9yIGluZGljZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gZGVlcEdldChvYmosIHBhdGgpO1xuICB9O1xufVxuIiwiaW1wb3J0IG5vb3AgZnJvbSAnLi9ub29wLmpzJztcbmltcG9ydCBnZXQgZnJvbSAnLi9nZXQuanMnO1xuXG4vLyBHZW5lcmF0ZXMgYSBmdW5jdGlvbiBmb3IgYSBnaXZlbiBvYmplY3QgdGhhdCByZXR1cm5zIGEgZ2l2ZW4gcHJvcGVydHkuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0eU9mKG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHJldHVybiBub29wO1xuICByZXR1cm4gZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiBnZXQob2JqLCBwYXRoKTtcbiAgfTtcbn1cbiIsIi8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgIChpbmNsdXNpdmUpLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gIGlmIChtYXggPT0gbnVsbCkge1xuICAgIG1heCA9IG1pbjtcbiAgICBtaW4gPSAwO1xuICB9XG4gIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xufVxuIiwiLy8gR2VuZXJhdGUgYW4gaW50ZWdlciBBcnJheSBjb250YWluaW5nIGFuIGFyaXRobWV0aWMgcHJvZ3Jlc3Npb24uIEEgcG9ydCBvZlxuLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbi8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvZnVuY3Rpb25zLmh0bWwjcmFuZ2UpLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgIHN0YXJ0ID0gMDtcbiAgfVxuICBpZiAoIXN0ZXApIHtcbiAgICBzdGVwID0gc3RvcCA8IHN0YXJ0ID8gLTEgOiAxO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgdmFyIHJhbmdlID0gQXJyYXkobGVuZ3RoKTtcblxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrLCBzdGFydCArPSBzdGVwKSB7XG4gICAgcmFuZ2VbaWR4XSA9IHN0YXJ0O1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVJlZHVjZSBmcm9tICcuL19jcmVhdGVSZWR1Y2UuanMnO1xuXG4vLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4vLyBvciBgZm9sZGxgLlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlKDEpO1xuIiwiaW1wb3J0IGNyZWF0ZVJlZHVjZSBmcm9tICcuL19jcmVhdGVSZWR1Y2UuanMnO1xuXG4vLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZSgtMSk7XG4iLCJpbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyLmpzJztcbmltcG9ydCBuZWdhdGUgZnJvbSAnLi9uZWdhdGUuanMnO1xuaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcblxuLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlamVjdChvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICByZXR1cm4gZmlsdGVyKG9iaiwgbmVnYXRlKGNiKHByZWRpY2F0ZSkpLCBjb250ZXh0KTtcbn1cbiIsImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYGFycmF5YC4gRXNwZWNpYWxseSB1c2VmdWwgb25cbi8vIHRoZSBgYXJndW1lbnRzYCBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm4gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlXG4vLyBgYXJyYXlgLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzdChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIG4gPT0gbnVsbCB8fCBndWFyZCA/IDEgOiBuKTtcbn1cbiIsIi8vIFNvbWUgZnVuY3Rpb25zIHRha2UgYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLCBvciBhIGZldyBleHBlY3RlZFxuLy8gYXJndW1lbnRzIGF0IHRoZSBiZWdpbm5pbmcgYW5kIHRoZW4gYSB2YXJpYWJsZSBudW1iZXIgb2YgdmFsdWVzIHRvIG9wZXJhdGVcbi8vIG9uLiBUaGlzIGhlbHBlciBhY2N1bXVsYXRlcyBhbGwgcmVtYWluaW5nIGFyZ3VtZW50cyBwYXN0IHRoZSBmdW5jdGlvbuKAmXNcbi8vIGFyZ3VtZW50IGxlbmd0aCAob3IgYW4gZXhwbGljaXQgYHN0YXJ0SW5kZXhgKSwgaW50byBhbiBhcnJheSB0aGF0IGJlY29tZXNcbi8vIHRoZSBsYXN0IGFyZ3VtZW50LiBTaW1pbGFyIHRvIEVTNuKAmXMgXCJyZXN0IHBhcmFtZXRlclwiLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzdEFyZ3VtZW50cyhmdW5jLCBzdGFydEluZGV4KSB7XG4gIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4ID09IG51bGwgPyBmdW5jLmxlbmd0aCAtIDEgOiArc3RhcnRJbmRleDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSBNYXRoLm1heChhcmd1bWVudHMubGVuZ3RoIC0gc3RhcnRJbmRleCwgMCksXG4gICAgICAgIHJlc3QgPSBBcnJheShsZW5ndGgpLFxuICAgICAgICBpbmRleCA9IDA7XG4gICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByZXN0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCArIHN0YXJ0SW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXJ0SW5kZXgpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIHJlc3QpO1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCByZXN0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBBcnJheShzdGFydEluZGV4ICsgMSk7XG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc3RhcnRJbmRleDsgaW5kZXgrKykge1xuICAgICAgYXJnc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgIH1cbiAgICBhcmdzW3N0YXJ0SW5kZXhdID0gcmVzdDtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgdG9QYXRoIGZyb20gJy4vX3RvUGF0aC5qcyc7XG5cbi8vIFRyYXZlcnNlcyB0aGUgY2hpbGRyZW4gb2YgYG9iamAgYWxvbmcgYHBhdGhgLiBJZiBhIGNoaWxkIGlzIGEgZnVuY3Rpb24sIGl0XG4vLyBpcyBpbnZva2VkIHdpdGggaXRzIHBhcmVudCBhcyBjb250ZXh0LiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmluYWxcbi8vIGNoaWxkLCBvciBgZmFsbGJhY2tgIGlmIGFueSBjaGlsZCBpcyB1bmRlZmluZWQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXN1bHQob2JqLCBwYXRoLCBmYWxsYmFjaykge1xuICBwYXRoID0gdG9QYXRoKHBhdGgpO1xuICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oZmFsbGJhY2spID8gZmFsbGJhY2suY2FsbChvYmopIDogZmFsbGJhY2s7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBwcm9wID0gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpbcGF0aFtpXV07XG4gICAgaWYgKHByb3AgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcCA9IGZhbGxiYWNrO1xuICAgICAgaSA9IGxlbmd0aDsgLy8gRW5zdXJlIHdlIGRvbid0IGNvbnRpbnVlIGl0ZXJhdGluZy5cbiAgICB9XG4gICAgb2JqID0gaXNGdW5jdGlvbihwcm9wKSA/IHByb3AuY2FsbChvYmopIDogcHJvcDtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuIiwiaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCB2YWx1ZXMgZnJvbSAnLi92YWx1ZXMuanMnO1xuaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XG5pbXBvcnQgdG9BcnJheSBmcm9tICcuL3RvQXJyYXkuanMnO1xuXG4vLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbiB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4vLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbi8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhbXBsZShvYmosIG4sIGd1YXJkKSB7XG4gIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IHZhbHVlcyhvYmopO1xuICAgIHJldHVybiBvYmpbcmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gIH1cbiAgdmFyIHNhbXBsZSA9IHRvQXJyYXkob2JqKTtcbiAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChzYW1wbGUpO1xuICBuID0gTWF0aC5tYXgoTWF0aC5taW4obiwgbGVuZ3RoKSwgMCk7XG4gIHZhciBsYXN0ID0gbGVuZ3RoIC0gMTtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG47IGluZGV4KyspIHtcbiAgICB2YXIgcmFuZCA9IHJhbmRvbShpbmRleCwgbGFzdCk7XG4gICAgdmFyIHRlbXAgPSBzYW1wbGVbaW5kZXhdO1xuICAgIHNhbXBsZVtpbmRleF0gPSBzYW1wbGVbcmFuZF07XG4gICAgc2FtcGxlW3JhbmRdID0gdGVtcDtcbiAgfVxuICByZXR1cm4gc2FtcGxlLnNsaWNlKDAsIG4pO1xufVxuIiwiaW1wb3J0IHNhbXBsZSBmcm9tICcuL3NhbXBsZS5qcyc7XG5cbi8vIFNodWZmbGUgYSBjb2xsZWN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2h1ZmZsZShvYmopIHtcbiAgcmV0dXJuIHNhbXBsZShvYmosIEluZmluaXR5KTtcbn1cbiIsImltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIGNvbGxlY3Rpb24uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaXplKG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqKSA/IG9iai5sZW5ndGggOiBrZXlzKG9iaikubGVuZ3RoO1xufVxuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBwYXNzZXMgYSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29tZShvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICB2YXIgX2tleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBrZXlzKG9iaiksXG4gICAgICBsZW5ndGggPSAoX2tleXMgfHwgb2JqKS5sZW5ndGg7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgY3VycmVudEtleSA9IF9rZXlzID8gX2tleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgaWYgKHByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgcGx1Y2sgZnJvbSAnLi9wbHVjay5qcyc7XG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwLmpzJztcblxuLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdGVlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEJ5KG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gIHJldHVybiBwbHVjayhtYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBsaXN0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGluZGV4OiBpbmRleCsrLFxuICAgICAgY3JpdGVyaWE6IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGxpc3QpXG4gICAgfTtcbiAgfSkuc29ydChmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgfSksICd2YWx1ZScpO1xufVxuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcblxuLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydGVkSW5kZXgoYXJyYXksIG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gIHZhciB2YWx1ZSA9IGl0ZXJhdGVlKG9iaik7XG4gIHZhciBsb3cgPSAwLCBoaWdoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbbWlkXSkgPCB2YWx1ZSkgbG93ID0gbWlkICsgMTsgZWxzZSBoaWdoID0gbWlkO1xuICB9XG4gIHJldHVybiBsb3c7XG59XG4iLCIvLyBJbnZva2VzIGBpbnRlcmNlcHRvcmAgd2l0aCB0aGUgYG9iamAgYW5kIHRoZW4gcmV0dXJucyBgb2JqYC5cbi8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXAob2JqLCBpbnRlcmNlcHRvcikge1xuICBpbnRlcmNlcHRvcihvYmopO1xuICByZXR1cm4gb2JqO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdHMuanMnO1xuaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcbmltcG9ydCAnLi90ZW1wbGF0ZVNldHRpbmdzLmpzJztcblxuLy8gV2hlbiBjdXN0b21pemluZyBgXy50ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4vLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4vLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbnZhciBub01hdGNoID0gLyguKV4vO1xuXG4vLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuLy8gc3RyaW5nIGxpdGVyYWwuXG52YXIgZXNjYXBlcyA9IHtcbiAgXCInXCI6IFwiJ1wiLFxuICAnXFxcXCc6ICdcXFxcJyxcbiAgJ1xccic6ICdyJyxcbiAgJ1xcbic6ICduJyxcbiAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAnXFx1MjAyOSc6ICd1MjAyOSdcbn07XG5cbnZhciBlc2NhcGVSZWdFeHAgPSAvXFxcXHwnfFxccnxcXG58XFx1MjAyOHxcXHUyMDI5L2c7XG5cbmZ1bmN0aW9uIGVzY2FwZUNoYXIobWF0Y2gpIHtcbiAgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdO1xufVxuXG4vLyBJbiBvcmRlciB0byBwcmV2ZW50IHRoaXJkLXBhcnR5IGNvZGUgaW5qZWN0aW9uIHRocm91Z2hcbi8vIGBfLnRlbXBsYXRlU2V0dGluZ3MudmFyaWFibGVgLCB3ZSB0ZXN0IGl0IGFnYWluc3QgdGhlIGZvbGxvd2luZyByZWd1bGFyXG4vLyBleHByZXNzaW9uLiBJdCBpcyBpbnRlbnRpb25hbGx5IGEgYml0IG1vcmUgbGliZXJhbCB0aGFuIGp1c3QgbWF0Y2hpbmcgdmFsaWRcbi8vIGlkZW50aWZpZXJzLCBidXQgc3RpbGwgcHJldmVudHMgcG9zc2libGUgbG9vcGhvbGVzIHRocm91Z2ggZGVmYXVsdHMgb3Jcbi8vIGRlc3RydWN0dXJpbmcgYXNzaWdubWVudC5cbnZhciBiYXJlSWRlbnRpZmllciA9IC9eXFxzKihcXHd8XFwkKStcXHMqJC87XG5cbi8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4vLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4vLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbi8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlbXBsYXRlKHRleHQsIHNldHRpbmdzLCBvbGRTZXR0aW5ncykge1xuICBpZiAoIXNldHRpbmdzICYmIG9sZFNldHRpbmdzKSBzZXR0aW5ncyA9IG9sZFNldHRpbmdzO1xuICBzZXR0aW5ncyA9IGRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgdmFyIG1hdGNoZXIgPSBSZWdFeHAoW1xuICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpLnJlcGxhY2UoZXNjYXBlUmVnRXhwLCBlc2NhcGVDaGFyKTtcbiAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcblxuICAgIGlmIChlc2NhcGUpIHtcbiAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICB9XG5cbiAgICAvLyBBZG9iZSBWTXMgbmVlZCB0aGUgbWF0Y2ggcmV0dXJuZWQgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBvZmZzZXQuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9KTtcbiAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZTtcbiAgaWYgKGFyZ3VtZW50KSB7XG4gICAgLy8gSW5zdXJlIGFnYWluc3QgdGhpcmQtcGFydHkgY29kZSBpbmplY3Rpb24uIChDVkUtMjAyMS0yMzM1OClcbiAgICBpZiAoIWJhcmVJZGVudGlmaWVyLnRlc3QoYXJndW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAndmFyaWFibGUgaXMgbm90IGEgYmFyZSBpZGVudGlmaWVyOiAnICsgYXJndW1lbnRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcbiAgICBhcmd1bWVudCA9ICdvYmonO1xuICB9XG5cbiAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgc291cmNlICsgJ3JldHVybiBfX3A7XFxuJztcblxuICB2YXIgcmVuZGVyO1xuICB0cnkge1xuICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihhcmd1bWVudCwgJ18nLCBzb3VyY2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICByZXR1cm4gdGVtcGxhdGU7XG59XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuXG4vLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMuIENoYW5nZSB0aGVcbi8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbmV4cG9ydCBkZWZhdWx0IF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgZXZhbHVhdGU6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gIGludGVycG9sYXRlOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgZXNjYXBlOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xufTtcbiIsImltcG9ydCBub3cgZnJvbSAnLi9ub3cuanMnO1xuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2Vcbi8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3Ncbi8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCwgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogbm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9ub3cgPSBub3coKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gX25vdztcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChfbm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBwcmV2aW91cyA9IF9ub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdGhyb3R0bGVkLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBwcmV2aW91cyA9IDA7XG4gICAgdGltZW91dCA9IGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuIiwiaW1wb3J0IG9wdGltaXplQ2IgZnJvbSAnLi9fb3B0aW1pemVDYi5qcyc7XG5cbi8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZXMobiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYWNjdW1baV0gPSBpdGVyYXRlZShpKTtcbiAgcmV0dXJuIGFjY3VtO1xufVxuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vaXNTdHJpbmcuanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAuanMnO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJy4vaWRlbnRpdHkuanMnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICcuL3ZhbHVlcy5qcyc7XG5cbi8vIFNhZmVseSBjcmVhdGUgYSByZWFsLCBsaXZlIGFycmF5IGZyb20gYW55dGhpbmcgaXRlcmFibGUuXG52YXIgcmVTdHJTeW1ib2wgPSAvW15cXHVkODAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGZmZl0vZztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIGlmICghb2JqKSByZXR1cm4gW107XG4gIGlmIChpc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gIGlmIChpc1N0cmluZyhvYmopKSB7XG4gICAgLy8gS2VlcCBzdXJyb2dhdGUgcGFpciBjaGFyYWN0ZXJzIHRvZ2V0aGVyLlxuICAgIHJldHVybiBvYmoubWF0Y2gocmVTdHJTeW1ib2wpO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZShvYmopKSByZXR1cm4gbWFwKG9iaiwgaWRlbnRpdHkpO1xuICByZXR1cm4gdmFsdWVzKG9iaik7XG59XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcblxuLy8gTm9ybWFsaXplIGEgKGRlZXApIHByb3BlcnR5IGBwYXRoYCB0byBhcnJheS5cbi8vIExpa2UgYF8uaXRlcmF0ZWVgLCB0aGlzIGZ1bmN0aW9uIGNhbiBiZSBjdXN0b21pemVkLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9QYXRoKHBhdGgpIHtcbiAgcmV0dXJuIGlzQXJyYXkocGF0aCkgPyBwYXRoIDogW3BhdGhdO1xufVxuXy50b1BhdGggPSB0b1BhdGg7XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoLmpzJztcbmltcG9ydCB7IEFycmF5UHJvdG8gfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgY2hhaW5SZXN1bHQgZnJvbSAnLi9fY2hhaW5SZXN1bHQuanMnO1xuXG4vLyBBZGQgYWxsIG11dGF0b3IgYEFycmF5YCBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG5lYWNoKFsncG9wJywgJ3B1c2gnLCAncmV2ZXJzZScsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09PSAnc2hpZnQnIHx8IG5hbWUgPT09ICdzcGxpY2UnKSAmJiBvYmoubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBvYmpbMF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBvYmopO1xuICB9O1xufSk7XG5cbi8vIEFkZCBhbGwgYWNjZXNzb3IgYEFycmF5YCBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG5lYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICBpZiAob2JqICE9IG51bGwpIG9iaiA9IG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGNoYWluUmVzdWx0KHRoaXMsIG9iaik7XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgXztcbiIsImltcG9ydCB7IFZFUlNJT04gfSBmcm9tICcuL19zZXR1cC5qcyc7XG5cbi8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0IGNhblxuLy8gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIGZ1bmN0aW9ucyBhZGRlZFxuLy8gdGhyb3VnaCBgXy5taXhpbmAuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF8ob2JqKSB7XG4gIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICB0aGlzLl93cmFwcGVkID0gb2JqO1xufVxuXG5fLlZFUlNJT04gPSBWRVJTSU9OO1xuXG4vLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbl8ucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl93cmFwcGVkO1xufTtcblxuLy8gUHJvdmlkZSB1bndyYXBwaW5nIHByb3hpZXMgZm9yIHNvbWUgbWV0aG9kcyB1c2VkIGluIGVuZ2luZSBvcGVyYXRpb25zXG4vLyBzdWNoIGFzIGFyaXRobWV0aWMgYW5kIEpTT04gc3RyaW5naWZpY2F0aW9uLlxuXy5wcm90b3R5cGUudmFsdWVPZiA9IF8ucHJvdG90eXBlLnRvSlNPTiA9IF8ucHJvdG90eXBlLnZhbHVlO1xuXG5fLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gU3RyaW5nKHRoaXMuX3dyYXBwZWQpO1xufTtcbiIsImltcG9ydCBjcmVhdGVFc2NhcGVyIGZyb20gJy4vX2NyZWF0ZUVzY2FwZXIuanMnO1xuaW1wb3J0IHVuZXNjYXBlTWFwIGZyb20gJy4vX3VuZXNjYXBlTWFwLmpzJztcblxuLy8gRnVuY3Rpb24gZm9yIHVuZXNjYXBpbmcgc3RyaW5ncyBmcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVzY2FwZXIodW5lc2NhcGVNYXApO1xuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCB1bmlxIGZyb20gJy4vdW5pcS5qcyc7XG5pbXBvcnQgZmxhdHRlbiBmcm9tICcuL19mbGF0dGVuLmpzJztcblxuLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSB1bmlvbjogZWFjaCBkaXN0aW5jdCBlbGVtZW50IGZyb20gYWxsIG9mXG4vLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbmV4cG9ydCBkZWZhdWx0IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHJldHVybiB1bmlxKGZsYXR0ZW4oYXJyYXlzLCB0cnVlLCB0cnVlKSk7XG59KTtcbiIsImltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi9pc0Jvb2xlYW4uanMnO1xuaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcbmltcG9ydCBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zLmpzJztcblxuLy8gUHJvZHVjZSBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LiBJZiB0aGUgYXJyYXkgaGFzIGFscmVhZHlcbi8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbi8vIFRoZSBmYXN0ZXIgYWxnb3JpdGhtIHdpbGwgbm90IHdvcmsgd2l0aCBhbiBpdGVyYXRlZSBpZiB0aGUgaXRlcmF0ZWVcbi8vIGlzIG5vdCBhIG9uZS10by1vbmUgZnVuY3Rpb24sIHNvIHByb3ZpZGluZyBhbiBpdGVyYXRlZSB3aWxsIGRpc2FibGVcbi8vIHRoZSBmYXN0ZXIgYWxnb3JpdGhtLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pcShhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIGlmICghaXNCb29sZWFuKGlzU29ydGVkKSkge1xuICAgIGNvbnRleHQgPSBpdGVyYXRlZTtcbiAgICBpdGVyYXRlZSA9IGlzU29ydGVkO1xuICAgIGlzU29ydGVkID0gZmFsc2U7XG4gIH1cbiAgaWYgKGl0ZXJhdGVlICE9IG51bGwpIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBzZWVuID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpXSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpLCBhcnJheSkgOiB2YWx1ZTtcbiAgICBpZiAoaXNTb3J0ZWQgJiYgIWl0ZXJhdGVlKSB7XG4gICAgICBpZiAoIWkgfHwgc2VlbiAhPT0gY29tcHV0ZWQpIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIHNlZW4gPSBjb21wdXRlZDtcbiAgICB9IGVsc2UgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICBpZiAoIWNvbnRhaW5zKHNlZW4sIGNvbXB1dGVkKSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghY29udGFpbnMocmVzdWx0LCB2YWx1ZSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4vLyBVc2VmdWwgZm9yIHRlbXBvcmFyeSBET00gaWRzLlxudmFyIGlkQ291bnRlciA9IDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxdWVJZChwcmVmaXgpIHtcbiAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgcmV0dXJuIHByZWZpeCA/IHByZWZpeCArIGlkIDogaWQ7XG59XG4iLCJpbXBvcnQgbWF4IGZyb20gJy4vbWF4LmpzJztcbmltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcbmltcG9ydCBwbHVjayBmcm9tICcuL3BsdWNrLmpzJztcblxuLy8gQ29tcGxlbWVudCBvZiB6aXAuIFVuemlwIGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIGFuZCBncm91cHNcbi8vIGVhY2ggYXJyYXkncyBlbGVtZW50cyBvbiBzaGFyZWQgaW5kaWNlcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuemlwKGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSAoYXJyYXkgJiYgbWF4KGFycmF5LCBnZXRMZW5ndGgpLmxlbmd0aCkgfHwgMDtcbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHJlc3VsdFtpbmRleF0gPSBwbHVjayhhcnJheSwgaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWx1ZXMob2JqKSB7XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKTtcbiAgdmFyIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YWx1ZXNbaV0gPSBvYmpbX2tleXNbaV1dO1xuICB9XG4gIHJldHVybiB2YWx1ZXM7XG59XG4iLCJpbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyLmpzJztcbmltcG9ydCBtYXRjaGVyIGZyb20gJy4vbWF0Y2hlci5qcyc7XG5cbi8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYF8uZmlsdGVyYDogc2VsZWN0aW5nIG9ubHlcbi8vIG9iamVjdHMgY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdoZXJlKG9iaiwgYXR0cnMpIHtcbiAgcmV0dXJuIGZpbHRlcihvYmosIG1hdGNoZXIoYXR0cnMpKTtcbn1cbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgZGlmZmVyZW5jZSBmcm9tICcuL2RpZmZlcmVuY2UuanMnO1xuXG4vLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbmV4cG9ydCBkZWZhdWx0IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXksIG90aGVyQXJyYXlzKSB7XG4gIHJldHVybiBkaWZmZXJlbmNlKGFycmF5LCBvdGhlckFycmF5cyk7XG59KTtcbiIsImltcG9ydCBwYXJ0aWFsIGZyb20gJy4vcGFydGlhbC5qcyc7XG5cbi8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuLy8gYWxsb3dpbmcgeW91IHRvIGFkanVzdCBhcmd1bWVudHMsIHJ1biBjb2RlIGJlZm9yZSBhbmQgYWZ0ZXIsIGFuZFxuLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdyYXAoZnVuYywgd3JhcHBlcikge1xuICByZXR1cm4gcGFydGlhbCh3cmFwcGVyLCBmdW5jKTtcbn1cbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgdW56aXAgZnJvbSAnLi91bnppcC5qcyc7XG5cbi8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbi8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyh1bnppcCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBsb2FkSWNvbiB9IGZyb20gJy4uL2ltYWdlTG9hZGVyJztcbmltcG9ydCB7IGxvYWRCb2FyZCB9IGZyb20gJy4uL3BhZ2VMb2FkJztcbmltcG9ydCB7IHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbi8vIFNob3cgdGhlIHJpZ2h0IHNoaXAsIHBvc2l0aW9uIGFuZCBheGlzIG9uIHNoaXAtcGxhY2luZyBzdGFnZS5cbi8vIFdpbGwgY2hlY2sgYXhpcywgdGhlIGNvcmQgZ2l2ZW4gYW5kIHNoaXAgdHlwZSB0byBtYWtlIGl0IHBvc3NpYmxlLlxuZnVuY3Rpb24gc2hpcFByZXZpZXdFeHBhbmRlcihjb3JkLCBwbGF5ZXIsIHNoaXApIHtcbiAgY29uc3QgZGlyQXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlyLW9wdGlvbicpO1xuICAvLyBJIHN1cHBvc2UgdGhpcyByZWFkcyB0aGUgdGV4dCB2YWx1ZS4uLlxuICBjb25zdCBheGlzID0gWy4uLmRpckFycl0uZmlsdGVyKChkaXJPYmopID0+IGRpck9iai5jaGVja2VkKVswXS52YWx1ZTtcbiAgLy8gVGFrZSB0aGUgY29vcmQgYW5kIHVzZSBpdCB0byBidWlsZCB0aGUgYm9keTtcbiAgY29uc3Qgc3RhcnQgPSBbLi4uY29yZF07XG4gIGNvbnN0IGJvZHkgPSBBcnJheShzaGlwLmxlbmd0aClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4gICAgfSk7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhbnkgb3ZlcmxhcFxuICBjb25zdCBvdmVybGFwID0gcGxheWVyXG4gICAgLmJvYXJkXG4gICAgLmxpc3RcbiAgICAuc29tZSgocGxheWVyU2hpcCkgPT4gcGxheWVyU2hpcFxuICAgICAgLnBvc2l0aW9uLnNvbWUoKHNoaXBQb3MpID0+IGJvZHlcbiAgICAgICAgLnNvbWUoKGJvZHlQb3MpID0+IF8uaXNFcXVhbChib2R5UG9zLCBzaGlwUG9zKSkpKTtcbiAgcmV0dXJuIHtcbiAgICBib2R5LFxuICAgIG92ZXJsYXAsXG4gIH07XG59XG5cbi8vIGNvbnN0IGRpck9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaXItb3B0aW9uJyk7XG4vLyBjb25zdCBheGlzT3B0aW9uID0gWy4uLmRpck9wdGlvbnNdLmZpbHRlcigoZGlyT2JqKSA9PiBkaXJPYmouY2hlY2tlZClbMF0udmFsdWU7XG4vLyBjb25zdCBpbWcgPSBsb2FkSWNvbih0eXBlLCBjb3JkLmluZGV4T2YoY29vcmRpbmF0ZSkgKyAxLCBheGlzT3B0aW9uKTtcbi8vIGJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltZ30nKWA7XG5cbi8vIFJlc3BvbnNpYmxlIGZvciBhbmltYXRpbmcgcHJldmlld1xuZnVuY3Rpb24gc2hpcFByZXZpZXcoY29yZCwgYm9hcmRCb3hlcywgcGxheWVyLCBzaGlwLCBldmVudCkge1xuICAvLyBHZXQgYXhpcyBpbmZvcm1hdGlvbiBvZiBzaGlwXG4gIGNvbnN0IGRpck9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaXItb3B0aW9uJyk7XG4gIGNvbnN0IGF4aXNPcHRpb24gPSBbLi4uZGlyT3B0aW9uc10uZmlsdGVyKChkaXJPYmopID0+IGRpck9iai5jaGVja2VkKVswXS52YWx1ZTtcbiAgY29yZC5mb3JFYWNoKChwb3MsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgYm94ID0gWy4uLmJvYXJkQm94ZXNdW3Bvc1swXSAqIDEwICsgcG9zWzFdXTtcbiAgICBjb25zdCBpbWcgPSBsb2FkSWNvbihzaGlwLm5hbWUsIGluZGV4ICsgMSwgYXhpc09wdGlvbik7XG4gICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1nfScpYDtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgIH07XG4gICAgZXZlbnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZXZlbnRMaXN0ZW5lcik7XG4gICAgLy8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lciBvbmNlIGEgY2VsbCBpcyBjbGlja2VkXG4gICAgZXZlbnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYm9hcmRCb3hlcy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoY2VsbCk7XG4gICAgICB9KTtcbiAgICAgIGxvYWRCb2FyZChwbGF5ZXIsIHBsYXllci5pc1R1cm4gPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIGZvciBhbmltYXRpbmcgc2hpcCBwcmV2aWV3IGV2ZXJ5dGhpbmcgaXQgaG92ZXJzIG9udG8gYSBib3ggb3Igb3V0IG9mIGl0XG5mdW5jdGlvbiBhbmltYXRpb25FdmVudChldmVudCwgYm9hcmRCb3hlcywgcGxheWVyLCBzaGlwKSB7XG4gIGNvbnN0IHsgYm9keSwgb3ZlcmxhcCB9ID0gc2hpcFByZXZpZXdFeHBhbmRlcihcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucG9zXG4gICAgICAuc3BsaXQoJywnKVxuICAgICAgLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApKSxcbiAgICBwbGF5ZXIsXG4gICAgc2hpcCxcbiAgKTtcblxuICBjb25zdCBpc1NoaXBPdmVyZmxvd2luZyA9IGJvZHkuZmluZCgocG9zKSA9PiBwb3NbMV0gPj0gMTApO1xuICAvLyBEbyBub3RoaW5nXG4gIC8vIGlmIHNoaXAgaXMgb3ZlcmZsb3dpbmcgdGhlIGJvYXJkLCBvciBjb2xsaWRpbmcgd2lodCBvdGhlcnNoaXBcbiAgaWYgKG92ZXJsYXAgfHwgaXNTaGlwT3ZlcmZsb3dpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzaGlwUHJldmlldyhib2R5LCBib2FyZEJveGVzLCBwbGF5ZXIsIHNoaXAsIGV2ZW50KTtcbn1cblxuLy8gRnVuY3Rpb24gZm9yIGFkZGluZyBhbmltYXRpb25cbmZ1bmN0aW9uIGFkZEFuaW1hdGlvbkV2ZW50KGFkZCwgYm9hcmRCb3hlcywgcGxheWVyLCBzaGlwKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBhbmltYXRpb25FdmVudChldmVudCwgYm9hcmRCb3hlcywgcGxheWVyLCBzaGlwKTtcbiAgfTtcbiAgaWYgKGFkZCkge1xuICAgIGJvYXJkQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYm9hcmRCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRBbmltYXRpb25FdmVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==