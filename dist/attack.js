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
/*!************************************!*\
  !*** ./src/js/utilities/attack.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attackUtilities": () => (/* binding */ attackUtilities),
/* harmony export */   "default": () => (/* binding */ attackMode)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageLoad */ "./src/js/pageLoad.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities/utilities.js");



/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const attackUtilities = (function handler() {
  function applyAtt(isHit, cord, side) {
    const boxes = document.getElementsByClassName(`${side}-content`)[0]
      .getElementsByClassName('box');
    [...boxes].forEach((box) => {
      if (box.dataset.pos === cord.join()) {
        box.textContent = 'X';
        box.classList.add(isHit === 'hit' ? 'hit' : 'miss');
      }
    });
  }
  function checkWin(attacker, defender, gameObject) {
    const hasWin = defender.board.list.every((ship) => ship.isSunk());
    if (hasWin) {
      gameObject.winner = hasWin;
    }
  }

  function attack(gameObject, cord, side, attacker, defender) {
    const checkValid = attacker.attack(defender, cord, gameObject);
    if (!checkValid) {
      return;
    }
    applyAtt(checkValid, cord, side);
    checkWin(attacker, defender, gameObject);
  }

  function botAttack(gameObject, cb) {
    const { playerOne, playerTwo } = gameObject;
    const bot = playerOne.isBot ? playerOne : playerTwo;
    const defender = playerOne.isBot ? playerTwo : playerOne;
    const attackedSide = gameObject.playerOne.isBot
      ? 'right' : 'left';
    const cord = bot.botEval(defender);
    const checkValid = bot.attack(defender, cord, gameObject);
    applyAtt(checkValid, cord, attackedSide);
    checkWin(bot, defender, gameObject);
    cb(false, true);
  }
  return { attack, botAttack };
}());



// Attack mode
// Accepts game object for state info and cb for game progression
// Attack mode function check whose turn should be able to attack
// 1. Load board for current player
// 2. Populate the correct board to be able to attack with attack event listener
// eslint-disable-next-line no-shadow
function attackMode(gameObjectState, cb) {
  const currentSide = gameObjectState.playerOne.isTurn ? 'left' : 'right';
  const oppositeSide = currentSide === 'left' ? 'right' : 'left';
  const currentPlayer = gameObjectState.playerOne.isTurn
    ? gameObjectState.playerOne : gameObjectState.playerTwo;
  const oppositePlayer = gameObjectState.playerOne.isTurn
    ? gameObjectState.playerTwo : gameObjectState.playerOne;

  (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.unloadBoard)(oppositeSide);
  (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.loadBoard)(currentPlayer, currentSide);

  const oppositeBoxes = [...document
    .querySelector(`.${oppositeSide}-content`)
    .getElementsByClassName('box')];
  oppositeBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      const cord = box.dataset.pos.split(',').map((x) => parseInt(x, 10));
      attackUtilities.attack(
        gameObjectState,
        cord,
        oppositeSide,
        currentPlayer,
        oppositePlayer,
      );
      oppositeBoxes.forEach((oppositeBox) => (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.removeAllEventListener)(oppositeBox));
      cb(gameObjectState.isMultiplayer, true);
    });
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFEO0FBQ0E7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUUwQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxzREFBVztBQUNiLEVBQUUsb0RBQVM7O0FBRVg7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtFQUFzQjtBQUNuRTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy9Vc2Vycy9tYWNib29rYWlyL3JlcG9zL2JhdHRsZXNoaXAvc3JjL2Fzc2V0cy9zaGlwc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwucG5nJC8iLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3V0aWxpdGllcy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvdXRpbGl0aWVzL2F0dGFjay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDEucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtaG9yaV8wMi5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDQucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wMS5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wMy5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzA0LnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzA1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDUucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wMS5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzA1LnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAzLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAzLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvc2hpcHMgc3luYyBcXFxcLnBuZyRcIjsiLCIvLyBJbXBvcnQgYWxsIHNoaXAgaW1hZ2VzXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgci5rZXlzKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoLyguXFwvfFxcLnBuZyQpL2csICcnKV0gPSByKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn1cblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3NoaXBzJywgZmFsc2UsIC9cXC5wbmckLykpO1xuXG5mdW5jdGlvbiBsb2FkSWNvbih0eXBlLCBudW0sIGRpcikge1xuICBjb25zdCBkaXJOYW1lID0gZGlyID09PSAnaG9yaXpvbnRhbCcgPyAnaG9yaScgOiAndmVydCc7XG4gIHJldHVybiBpbWFnZXNbYCR7dHlwZX0tJHtkaXJOYW1lfV8wJHtudW19YF07XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBsb2FkSWNvbiB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuZnVuY3Rpb24gcmV0dXJuUGxheWVyVHVybihnYW1lT2JqZWN0KSB7XG4gIHJldHVybiBnYW1lT2JqZWN0LnBsYXllck9uZS5pc1R1cm5cbiAgICA/IGdhbWVPYmplY3QucGxheWVyT25lXG4gICAgOiBnYW1lT2JqZWN0LnBsYXllclR3bztcbn1cblxuLy8gVGhlIG1haW4gR2FtZSBvYmplY3QgZm9yIGV4cG9zaW5nIGluZm9ybWF0aW9uIGZvciBlYWNoIHN0YWdlcyB0byB1c2VzXG4vLyAxLiBQbGF5ZXJzXG4vLyAyLiBQbGF5ZXIgZm9yIEN1cnJlbnQgVHVyblxuLy8gMy4gQ3VycmVudCBCb2FyZFxuLy8gNC4gaXNTdGFydGVkIGZvciBjaGVja2luZyBpZiBwbGFjZW1lbnQgaGFzIGJlZW4gc2V0XG4vLyA1LiBjdXJyZW50IGdhbWVtb2RlIChpc011bHRpcGxheWVyKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZShpc011bHRpcGxheWVyLCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICBsZXQgaXNTdGFydGVkID0gZmFsc2U7XG5cbiAgLy8gUmV0dXJuIHBsYXllciB3aG9zZSB0dXJucyBpcyB0aGVpcnNcbiAgZnVuY3Rpb24gY3VycmVudFR1cm4oKSB7XG4gICAgcmV0dXJuIHJldHVyblBsYXllclR1cm4odGhpcyk7XG4gIH1cblxuICAvLyBSZXR1cm4gYm9hcmQgb2YgcGxheWVyIHdob3NlIHR1cm5zIGlzIHRoZXJlXG4gIGZ1bmN0aW9uIGN1cnJlbnRCb2FyZCgpIHtcbiAgICByZXR1cm4gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7cGxheWVyT25lLmlzVHVybiA/ICdsZWZ0JyA6ICdyaWdodCd9LWNvbnRlbnRgKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxheWVyT25lLCBwbGF5ZXJUd28sIGN1cnJlbnRUdXJuLCBjdXJyZW50Qm9hcmQsIGlzU3RhcnRlZCwgaXNNdWx0aXBsYXllcixcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCBHYW1lLCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vZ2FtZSc7XG5cbi8vIENoZWNrIGlmIHR3byBzZXQgb2YgYXJyYXkgY29udGFpbiBzaW1pbGFyIGVsZW1lbnRzXG5mdW5jdGlvbiBpbnRlcnNlY3QoYSwgYikge1xuICByZXR1cm4gYS5maW5kKChwb3MpID0+IGJcbiAgICAuZmluZCgoY3VycmVudFBvcykgPT4gY3VycmVudFBvc1swXSA9PT0gcG9zWzBdICYmIGN1cnJlbnRQb3NbMV0gPT09IHBvc1sxXSkpO1xufVxuXG4vLyBSZXR1cm4gZmFsc2UgaWYgc2hpcCBib2R5IGlzIG92ZXIgOSAod2hpY2ggaXMgb3ZlciB0aGUgYm9hcmQgYm91bmRhcnkpXG5jb25zdCBoaXRCb3VuZGFyeSA9IChwb3NpdGlvbiwgYXhpcykgPT4ge1xuICBzd2l0Y2ggKGF4aXMpIHtcbiAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMV0gPiA5KSk7XG4gICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgcmV0dXJuIHBvc2l0aW9uLmZpbmQoKHBvcykgPT4gKHBvc1swXSA+IDkpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgYXhpcycpO1xuICB9XG59O1xuXG4vLyBDaGVjayBpZiBzaGlwIGNhbiBiZSBwbGFjZWQgb24gYSBjZXJ0YWluIHNxdWFyZSwgd2l0aG91dCBjb2xsaXNpb25cbi8vIHdpdGggdGhlIGJvcmRlciBvciBvdGhlciBzaGlwcy5cbi8vIHRha2VzIGFsbCB0aGUgc2hpcCBhcyBhcmd1bWVudCB0byBjaGVjayBmb3IgY29sbGlzb25cbmZ1bmN0aW9uIGlzVmFsaWQoc2hpcHMsIHBvc2l0aW9uLCBheGlzKSB7XG4gIC8vIENoZWNrIGlmIHNoaXAgb3ZlcmxhcHMgb3ZlciBhbnkgb3RoZXIgc2hpcHNcbiAgY29uc3QgaGFzQ29sbGlzaW9uID0gc2hpcHNcbiAgICAuZmluZCgoc2hpcCkgPT4gaW50ZXJzZWN0KHNoaXAucG9zaXRpb24sIHBvc2l0aW9uKSk7XG4gIC8vIENoZWNrIGlmIHRoZSBzaGlwIGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIHRoZSBib3VuZGFyeVxuICAvLyBBY2NlcHQgdGhlIGN1cnJlbnQgc2hpcCdzIHBvc2l0aW9uIGFuZCBheGlzXG4gIGNvbnN0IHZhbGlkQm91bmRhcnkgPSAhaGl0Qm91bmRhcnkocG9zaXRpb24sIGF4aXMpO1xuICByZXR1cm4gIWhhc0NvbGxpc2lvbiAmJiB2YWxpZEJvdW5kYXJ5O1xufVxuXG4vLyBUaGUgbWFpbiBnYW1lIG9iamVjdCB0aGF0IGlzIG5lZWRlZCBmb3IgZXZlcnkgcm91bmRcbi8vIENvb3JkaW5hdGUgc3lzdGVtOiBBcnJheSBbVmVydGljYWwgKDAgLT4gOSksIEhvcml6b250YWwgKDAgLT4gOSldXG4vLyBBY2NlcHRzIHBsYXllciBvYmplY3RcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgLy8gTGlzdCBvZiBzaGlwc1xuICBjb25zdCBsaXN0ID0gW107XG4gIC8vIFJlY29yZCBvZiBhdHRhY2tzIG1hZGVcbiAgY29uc3QgYXR0YWNrcyA9IFtdO1xuICAvLyBSZWNvcmQgb2YgaGl0cyBtYWRlXG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgLy8gUmVjb3JkIG9mIG1pc3Nlc1xuICBjb25zdCBtaXNzZXMgPSBbXTtcblxuICAvLyBQbGFjZSBzaGlwLCBidWlsZCBhIHNoaXAsIGNoZWNrIGlmIGl0IGlzIHZhbGlkLlxuICBmdW5jdGlvbiBwbGFjZShzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZWRTaGlwID0gU2hpcChzaGlwLCBheGlzLCBjb29yZGluYXRlKTtcblxuICAgIGlmICghaXNWYWxpZChsaXN0LCBpbml0aWFsaXplZFNoaXAucG9zaXRpb24sIGF4aXMpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsaXN0LnB1c2goaW5pdGlhbGl6ZWRTaGlwKTtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZWRTaGlwO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dhcFR1cm4oZ2FtZU9iamVjdCkge1xuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGdhbWVPYmplY3Q7XG4gICAgcGxheWVyT25lLmlzVHVybiA9ICFwbGF5ZXJPbmUuaXNUdXJuO1xuICAgIHBsYXllclR3by5pc1R1cm4gPSAhcGxheWVyVHdvLmlzVHVybjtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGF0dGFjayBpcyBvdXQgb2YgYm91bmQgb3IgYWxyZWFkeSBleGlzdCwgdGhlbiByZXRyeVxuICAvLyBJZiBpdCBpcyB2YWxpZCwgY2hlY2tzIGlmIGEgc2hpcCBpcyBoaXQ7IG1vZGlmeSBzaGlwIGlmIGhpdFxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvcmQsIGdhbWVPYmplY3QpIHtcbiAgICBjb25zdCBpc0V4aXN0ID0gYXR0YWNrcy5maW5kKChhdHRhY2spID0+IGF0dGFja1swXSA9PT0gY29yZFswXSAmJiBhdHRhY2tbMV0gPT09IGNvcmRbMV0pO1xuICAgIGNvbnN0IGhpdCA9IGxpc3QuZmluZCgoc2hpcCkgPT4gc2hpcC5oaXQoY29yZCkpO1xuXG4gICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzd2FwVHVybihnYW1lT2JqZWN0KTtcblxuICAgIGF0dGFja3MucHVzaChjb3JkKTtcblxuICAgIGlmIChoaXQpIHtcbiAgICAgIGhpdHMucHVzaChjb3JkKTtcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG5cbiAgICBtaXNzZXMucHVzaChjb3JkKTtcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0LFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICAgIGF0dGFja3MsXG4gICAgcGxhY2UsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuLy8gUGxheWVyIE9iamVjdFxuZnVuY3Rpb24gUGxheWVyKGlzQm90LCBpbml0aWFsVHVybikge1xuICAvLyBCb3QgY3JlYXRlIHJhbmRvbSBhdHRhY2sgY29yZCBvbiB0aGUgYm9hcmQsIGtlZXAgcmV0cnlpbmcgaWYgaXQgaXMgbm90IHZhbGlkO1xuICBmdW5jdGlvbiBib3RFdmFsKHBsYXllcikge1xuICAgIGNvbnN0IHJhbmQgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgIGNvbnN0IGF0dGFja0V4aXN0ID0gcGxheWVyXG4gICAgICAuYm9hcmQuYXR0YWNrc1xuICAgICAgLmZpbmQoKGF0dGVtcHQpID0+IGF0dGVtcHRbMF0gPT09IHJhbmRbMF0gJiYgYXR0ZW1wdFsxXSA9PT0gcmFuZFsxXSk7XG5cbiAgICBpZiAoYXR0YWNrRXhpc3QpIHtcbiAgICAgIHJldHVybiBib3RFdmFsKHBsYXllcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmQ7XG4gIH1cblxuICAvLyBQbGF5ZXIgc2ltcGx5IHJlY2VpdmUgYXR0YWNrIGlmIGl0IGlzIG5vdCBhIGJvdCAoaW1wbHlpbmcgY29vcmRpbmF0ZSBleGlzdHMpXG4gIC8vIG90aGVyd2lzZSwgYSBjb29yZCBpcyByYW5kb21seSBnZW5lcmF0ZWQgZm9yIHRoZSBib3QgdG8gYXR0YWNrXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBhdHRhY2socGxheWVyLCBjb29yZGluYXRlLCBnYW1lT2JqZWN0KSB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUsIGdhbWVPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1R1cm46IGluaXRpYWxUdXJuLFxuICAgIGJvYXJkOiBHYW1lYm9hcmQoKSxcbiAgICBhdHRhY2ssXG4gICAgaXNCb3QsXG4gICAgYm90RXZhbCxcbiAgfTtcbn1cblxuLy8gT25seSB1c2UgdG8gZGVjaWRlIGlmIHBsYXllck9uZSBpcyBhIGJvdCBvciBhIHJlYWwgcGxheWVyXG5mdW5jdGlvbiByYW5kb21QbGF5ZXJEZWNpZGVyKCkge1xuICBjb25zdCB0dXJuRGVjaWRlciA9IE1hdGgucmFuZG9tKCkgPj0gMC41O1xuICByZXR1cm4gKE1hdGgucmFuZG9tKCkgPj0gMC41KVxuICAgID8gUGxheWVyKHR1cm5EZWNpZGVyLCB0cnVlKVxuICAgIDogUGxheWVyKHR1cm5EZWNpZGVyLCB0cnVlKTtcbn1cblxuLy8gU2luZ2xlcGxheWVyIG9iamVjdCBmb3IgaW5pdGlhbGl6aW5nIGEgYm90IGFuZCBhIHJlYWwgcGxheWVyXG5mdW5jdGlvbiBzaW5nbGVwbGF5ZXJJbml0KCkge1xuICBjb25zdCBwbGF5ZXJPbmUgPSByYW5kb21QbGF5ZXJEZWNpZGVyKGZhbHNlKTtcbiAgY29uc3QgcGxheWVyT25lSXNCb3QgPSBwbGF5ZXJPbmUuaXNCb3Q7XG4gIGNvbnN0IHBsYXllclR3byA9IFBsYXllcighcGxheWVyT25lSXNCb3QsICFwbGF5ZXJPbmUuaXNUdXJuKTtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJPbmUsXG4gICAgcGxheWVyVHdvLFxuICB9O1xufVxuXG4vLyBNdWx0aXBsYXllciBvYmplY3QgZm9yIGluaXRpYWxpemluZyBib3RoIHJlYWwgcGxheWVyc1xuZnVuY3Rpb24gbXVsdGlwbGF5ZXJJbml0KCkge1xuICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoZmFsc2UsIHRydWUpO1xuICBjb25zdCBwbGF5ZXJUd28gPSBQbGF5ZXIoZmFsc2UsIGZhbHNlKTtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJPbmUsXG4gICAgcGxheWVyVHdvLFxuICB9O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgUGxheWVyLCBzaW5nbGVwbGF5ZXJJbml0LCBtdWx0aXBsYXllckluaXQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5leHBvcnQgY29uc3QgU2hpcHMgPSB7XG4gIHBhdHJvbDoge1xuICAgIG5hbWU6ICdwYXRyb2wnLFxuICAgIGxlbmd0aDogMixcbiAgICBvcmRlcjogMSxcbiAgfSxcbiAgc3VibWFyaW5lOiB7XG4gICAgbmFtZTogJ3N1Ym1hcmluZScsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAyLFxuICB9LFxuICBkZXN0cm95ZXI6IHtcbiAgICBuYW1lOiAnZGVzdHJveWVyJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgb3JkZXI6IDMsXG4gIH0sXG4gIGJhdHRsZXNoaXA6IHtcbiAgICBuYW1lOiAnYmF0dGxlc2hpcCcsXG4gICAgbGVuZ3RoOiA0LFxuICAgIG9yZGVyOiA0LFxuICB9LFxuICBjYXJyaWVyOiB7XG4gICAgbmFtZTogJ2NhcnJpZXInLFxuICAgIGxlbmd0aDogNSxcbiAgICBvcmRlcjogNSxcbiAgfSxcbn07XG5cbi8vIFRha2VzIGNvb3JkaW5hdGUsIGF4aXMsIGFuZCBsZW5ndGgsIGFuZCBidWlsZCBzaGlwIG9uIGEgY2VydGFpbiBjZWxsIHBvc2l0aW9uXG5mdW5jdGlvbiBidWlsZFNoaXAobGVuZ3RoLCBheGlzLCBjb29yZGluYXRlKSB7XG4gIGNvbnN0IHN0YXJ0ID0gWy4uLmNvb3JkaW5hdGVdO1xuICBjb25zdCBib2R5ID0gQXJyYXkobGVuZ3RoKVxuICAgIC5maWxsKClcbiAgICAubWFwKCgpID0+IHtcbiAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIFtzdGFydFswXSwgc3RhcnRbMV0rK107XG4gICAgICB9XG4gICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbiAgICB9KTtcbiAgcmV0dXJuIGJvZHk7XG59XG5cbi8vIEZ1bmN0aW9uIENvbnN0cnVjdG9yIGZvciBzaGlwXG5mdW5jdGlvbiBTaGlwKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgY29uc3QgeyBsZW5ndGggfSA9IHNoaXA7XG4gIGNvbnN0IGRhbWFnZSA9IFtdO1xuICAvLyBJbmlpdGlhbGl6ZSBzaGlwIHdpdGggYSB1dGlsaXR5IGZ1bmN0aW9uIGJ1aWxkU2hpcFxuICBjb25zdCBwb3NpdGlvbiA9IGJ1aWxkU2hpcChzaGlwLmxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSk7XG5cbiAgLy8gVGFrZSBhIGNvcmQgYW5kIGNoZWNrIGlmIGNvcmQgaGl0cyBhbnkgYm9keSBjb3JkXG4gIGZ1bmN0aW9uIGhpdCh2YWx1ZSkge1xuICAgIGNvbnN0IGlzSGl0ID0gcG9zaXRpb24uc29tZSgocG9zKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaEhpdFBvcyA9IHZhbHVlWzBdID09PSBwb3NbMF0gJiYgdmFsdWVbMV0gPT09IHBvc1sxXTtcbiAgICAgIGlmIChtYXRjaEhpdFBvcykge1xuICAgICAgICBkYW1hZ2UucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2hIaXRQb3M7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzSGl0O1xuICB9XG5cbiAgLy8gRGFtYWdlIHJldHVybiB0cnVlIG9mIGRhbWFnZSBsZW5ndGggaXMgZXF1YWwgdG8gYm9keSBsZW5ndGhcbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiBkYW1hZ2UubGVuZ3RoID09PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBkYW1hZ2UsXG4gICAgYXhpcyxcbiAgICBwb3NpdGlvbixcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1hcnJvdy1jYWxsYmFjayAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBTaGlwcyB9IGZyb20gJy4vb2JqZWN0cy9zaGlwJztcbmltcG9ydCB7IGxvYWRJY29uIH0gZnJvbSAnLi9pbWFnZUxvYWRlcic7XG5cbi8vIEVudW1lcmF0ZWQgYXJyYXlzIG9mIHNoaXBzIHRvIGJlIHBsYWNlZFxuY29uc3Qgc2hpcE9yZGVycyA9IE9iamVjdC52YWx1ZXMoU2hpcHMpLnNvcnQoKGxhc3QsIG5leHQpID0+IGxhc3Qub3JkZXIgPCBuZXh0Lm9yZGVyKTtcblxuLy8gbG9hZCBhbGwgdGhlIHNoaXBzIG9uIHRoZSBib2FyZCB3aGVuIGNhbGxlZFxuZnVuY3Rpb24gbG9hZEJvYXJkKHBsYXllciwgc2lkZSkge1xuICBwbGF5ZXIuYm9hcmQubGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBpZiAoYm94LmRhdGFzZXQucG9zID09PSBjb3JkLmpvaW4oKSkge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gc2hpcE9yZGVyc1twbGF5ZXIuYm9hcmQubGlzdC5pbmRleE9mKHNoaXApXTtcbiAgICAgICAgICBjb25zdCBzaGlwSW1nID0gbG9hZEljb24obmFtZSwgc2hpcC5wb3NpdGlvbi5pbmRleE9mKGNvcmQpICsgMSwgc2hpcC5heGlzKTtcbiAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzaGlwSW1nfScpYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyB1bmxvYWQgYWxsIHRoZSBzaGlwcyBvbiBhIGJvYXJkXG5mdW5jdGlvbiB1bmxvYWRCb2FyZChzaWRlKSB7XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV0uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICB9KTtcbn1cblxuLy8gQSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBsb2dpYyBmb3IgaW5pdGlhbGl6aW5nIGFuZCBsb2FkaW5nIHVwIHRoZSBnYW1lIGJvYXJkXG5jb25zdCBib2FyZExvYWQgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgLy8gR2VuZXJhdGUgdGhlIHBhZ2UgZm9yIHNjb3JlIGtlZXBpbmcgYW5kIHR1cm4gaW5mb3JtYXRpb25cbiAgLy8gUmVmYWN0b3IgaW50byB0ZW1wbGF0ZVxuICBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2UobmFtZXMpIHtcbiAgICBjb25zdCBpc011bHRpcGxheWVyID0gbmFtZXMubGVuZ3RoID09PSAyO1xuICAgIGRvY3VtZW50LmJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9J3RvcC1jb250YWluZXInPlxuICAgICAgICA8cD5UdXJuOiBQTEFZRVIgMTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdtYWluLWNvbnRlbnQnPlxuICAgICAgICA8ZGl2IGNsYXNzPSdsZWZ0LWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3BsYXllcm5hbWUnPiR7bmFtZXNbMF19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NoaXBzLWNvbnRhaW5lcic+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZCc+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodC1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdwbGF5ZXJuYW1lJz4ke2lzTXVsdGlwbGF5ZXIgPyBuYW1lc1sxXSA6ICdCT1QnfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2JvYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwcy1jb250YWluZXInPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQnPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbiAgLy8gR2VuZXJhdGUgdGhlIHdob2xlIGNlbGxzIGZvciBlYWNoIGJvYXJkXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQm94KCkge1xuICAgIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZCcpXS5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnQgPSBbMCwgMF07XG4gICAgICBBcnJheSgxMDApXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnYm94JztcbiAgICAgICAgICBib3guZGF0YXNldC5wb3MgPSBzdGFydDtcbiAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICAgIGlmIChzdGFydFsxXSA8PSA5KSB7XG4gICAgICAgICAgICBzdGFydFsxXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnRbMV0gPT09IDEwKSB7XG4gICAgICAgICAgICBzdGFydFsxXSA9IDA7XG4gICAgICAgICAgICBzdGFydFswXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLy8gYXNzaWduIGFwcHJvcHJpYXRlIGNsYXNzZXMgdG8gZGlzdGluY3QgbGVmdCBhbmQgcmlnaHRcbiAgZnVuY3Rpb24gYXNzaWduUGFyZW50KCkge1xuICAgIFsnbGVmdCcsICdyaWdodCddLmZvckVhY2goKHNpZGUpID0+IHtcbiAgICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF1cbiAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpO1xuICAgICAgWy4uLmJveGVzXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgYm94LmRhdGFzZXQuc2lkZSA9IHNpZGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2VuZXJhdGVQYWdlLCBnZW5lcmF0ZUJveCwgYXNzaWduUGFyZW50LFxuICB9O1xufSgpKTtcblxuLy8gTG9hZCBvcHRpb24gZm9yIHBsYWNpbmcgc2hpcHMgaW4gYSBjZXJ0YWluIGF4aW9zXG5mdW5jdGlvbiBsb2FkT3B0aW9uKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3AtY29udGFpbmVyJylbMF07XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBUZW1wbGF0ZVxuICBvcHRpb24uaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2Rpci1vcHRpb24nPlxuICAgICAgPGxhYmVsIGZvcj0naG9yaXpvbnRhbCc+SG9yaXpvbnRhbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIGNsYXNzPSdkaXItb3B0aW9uJyB2YWx1ZT0naG9yaXpvbnRhbCcgaWQ9J2hvcml6b250YWwnIG5hbWU9J29wdGlvbicgY2hlY2tlZD5cbiAgICAgIDxsYWJlbCBmb3I9J3ZlcnRpY2FsJz5WZXJ0aWNhbDwvbGFiZWw+PGlucHV0IHR5cGU9J3JhZGlvJyBjbGFzcz0nZGlyLW9wdGlvbicgdmFsdWU9J3ZlcnRpY2FsJyBpZD0ndmVydGljYWwnIG5hbWU9J29wdGlvbic+PC9kaXY+XG4gIGA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG4vLyBMb2FkIGJvYXJkXG5mdW5jdGlvbiBtYWluUGFnZUxvYWQobmFtZXMpIHtcbiAgYm9hcmRMb2FkLmdlbmVyYXRlUGFnZShuYW1lcyk7XG4gIGJvYXJkTG9hZC5nZW5lcmF0ZUJveCgpO1xuICBib2FyZExvYWQuYXNzaWduUGFyZW50KCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKG5hbWVzKSB7XG4gIC8vIExvYWQgcGFnZSBhbmQgaW5pdGlhbGl6ZSBldmVyeSBjZWxscztcbiAgbWFpblBhZ2VMb2FkKG5hbWVzKTtcbiAgLy8gTG9hZCBvcHRpb25zXG4gIGxvYWRPcHRpb24oKTtcbn1cblxuZXhwb3J0IHtcbiAgbWFpblBhZ2VMb2FkLCBsb2FkQm9hcmQsIGxvYWRPcHRpb24sIGJvYXJkTG9hZCwgbG9hZFBhZ2UsIHNoaXBPcmRlcnMsIHVubG9hZEJvYXJkLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBHYW1lIGZyb20gJy4uL29iamVjdHMvZ2FtZSc7XG5pbXBvcnQgeyBtdWx0aXBsYXllckluaXQgfSBmcm9tICcuLi9vYmplY3RzL3BsYXllcic7XG5cbi8vIHV0aWxpdHkgZnVuY3Rpb24gZm9yIGluaXRpYWxpemluZyBUZXN0J3MgZ2FtZSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXN0R2FtZU9iamVjdCgpIHtcbiAgY29uc3QgeyBwbGF5ZXJPbmUsIHBsYXllclR3byB9ID0gbXVsdGlwbGF5ZXJJbml0KCk7XG4gIHJldHVybiBHYW1lKHRydWUsIHBsYXllck9uZSwgcGxheWVyVHdvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xuICBjb25zdCBvbGRFbGVtZW50ID0gZWxlbWVudDtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICBpZiAob2xkRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgb2xkRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgdW5sb2FkQm9hcmQsIGxvYWRCb2FyZCB9IGZyb20gJy4uL3BhZ2VMb2FkJztcbmltcG9ydCB7IHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5jb25zdCBhdHRhY2tVdGlsaXRpZXMgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgZnVuY3Rpb24gYXBwbHlBdHQoaXNIaXQsIGNvcmQsIHNpZGUpIHtcbiAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94Jyk7XG4gICAgWy4uLmJveGVzXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGlmIChib3guZGF0YXNldC5wb3MgPT09IGNvcmQuam9pbigpKSB7XG4gICAgICAgIGJveC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoaXNIaXQgPT09ICdoaXQnID8gJ2hpdCcgOiAnbWlzcycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrV2luKGF0dGFja2VyLCBkZWZlbmRlciwgZ2FtZU9iamVjdCkge1xuICAgIGNvbnN0IGhhc1dpbiA9IGRlZmVuZGVyLmJvYXJkLmxpc3QuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIGlmIChoYXNXaW4pIHtcbiAgICAgIGdhbWVPYmplY3Qud2lubmVyID0gaGFzV2luO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjayhnYW1lT2JqZWN0LCBjb3JkLCBzaWRlLCBhdHRhY2tlciwgZGVmZW5kZXIpIHtcbiAgICBjb25zdCBjaGVja1ZhbGlkID0gYXR0YWNrZXIuYXR0YWNrKGRlZmVuZGVyLCBjb3JkLCBnYW1lT2JqZWN0KTtcbiAgICBpZiAoIWNoZWNrVmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbHlBdHQoY2hlY2tWYWxpZCwgY29yZCwgc2lkZSk7XG4gICAgY2hlY2tXaW4oYXR0YWNrZXIsIGRlZmVuZGVyLCBnYW1lT2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvdEF0dGFjayhnYW1lT2JqZWN0LCBjYikge1xuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGdhbWVPYmplY3Q7XG4gICAgY29uc3QgYm90ID0gcGxheWVyT25lLmlzQm90ID8gcGxheWVyT25lIDogcGxheWVyVHdvO1xuICAgIGNvbnN0IGRlZmVuZGVyID0gcGxheWVyT25lLmlzQm90ID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xuICAgIGNvbnN0IGF0dGFja2VkU2lkZSA9IGdhbWVPYmplY3QucGxheWVyT25lLmlzQm90XG4gICAgICA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgY29yZCA9IGJvdC5ib3RFdmFsKGRlZmVuZGVyKTtcbiAgICBjb25zdCBjaGVja1ZhbGlkID0gYm90LmF0dGFjayhkZWZlbmRlciwgY29yZCwgZ2FtZU9iamVjdCk7XG4gICAgYXBwbHlBdHQoY2hlY2tWYWxpZCwgY29yZCwgYXR0YWNrZWRTaWRlKTtcbiAgICBjaGVja1dpbihib3QsIGRlZmVuZGVyLCBnYW1lT2JqZWN0KTtcbiAgICBjYihmYWxzZSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIHsgYXR0YWNrLCBib3RBdHRhY2sgfTtcbn0oKSk7XG5cbmV4cG9ydCB7IGF0dGFja1V0aWxpdGllcyB9O1xuXG4vLyBBdHRhY2sgbW9kZVxuLy8gQWNjZXB0cyBnYW1lIG9iamVjdCBmb3Igc3RhdGUgaW5mbyBhbmQgY2IgZm9yIGdhbWUgcHJvZ3Jlc3Npb25cbi8vIEF0dGFjayBtb2RlIGZ1bmN0aW9uIGNoZWNrIHdob3NlIHR1cm4gc2hvdWxkIGJlIGFibGUgdG8gYXR0YWNrXG4vLyAxLiBMb2FkIGJvYXJkIGZvciBjdXJyZW50IHBsYXllclxuLy8gMi4gUG9wdWxhdGUgdGhlIGNvcnJlY3QgYm9hcmQgdG8gYmUgYWJsZSB0byBhdHRhY2sgd2l0aCBhdHRhY2sgZXZlbnQgbGlzdGVuZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFja01vZGUoZ2FtZU9iamVjdFN0YXRlLCBjYikge1xuICBjb25zdCBjdXJyZW50U2lkZSA9IGdhbWVPYmplY3RTdGF0ZS5wbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgY29uc3Qgb3Bwb3NpdGVTaWRlID0gY3VycmVudFNpZGUgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnYW1lT2JqZWN0U3RhdGUucGxheWVyT25lLmlzVHVyblxuICAgID8gZ2FtZU9iamVjdFN0YXRlLnBsYXllck9uZSA6IGdhbWVPYmplY3RTdGF0ZS5wbGF5ZXJUd287XG4gIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gZ2FtZU9iamVjdFN0YXRlLnBsYXllck9uZS5pc1R1cm5cbiAgICA/IGdhbWVPYmplY3RTdGF0ZS5wbGF5ZXJUd28gOiBnYW1lT2JqZWN0U3RhdGUucGxheWVyT25lO1xuXG4gIHVubG9hZEJvYXJkKG9wcG9zaXRlU2lkZSk7XG4gIGxvYWRCb2FyZChjdXJyZW50UGxheWVyLCBjdXJyZW50U2lkZSk7XG5cbiAgY29uc3Qgb3Bwb3NpdGVCb3hlcyA9IFsuLi5kb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKGAuJHtvcHBvc2l0ZVNpZGV9LWNvbnRlbnRgKVxuICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV07XG4gIG9wcG9zaXRlQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY29yZCA9IGJveC5kYXRhc2V0LnBvcy5zcGxpdCgnLCcpLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApKTtcbiAgICAgIGF0dGFja1V0aWxpdGllcy5hdHRhY2soXG4gICAgICAgIGdhbWVPYmplY3RTdGF0ZSxcbiAgICAgICAgY29yZCxcbiAgICAgICAgb3Bwb3NpdGVTaWRlLFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBvcHBvc2l0ZVBsYXllcixcbiAgICAgICk7XG4gICAgICBvcHBvc2l0ZUJveGVzLmZvckVhY2goKG9wcG9zaXRlQm94KSA9PiByZW1vdmVBbGxFdmVudExpc3RlbmVyKG9wcG9zaXRlQm94KSk7XG4gICAgICBjYihnYW1lT2JqZWN0U3RhdGUuaXNNdWx0aXBsYXllciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9