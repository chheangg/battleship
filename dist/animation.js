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

// The main Game object for exposing information for each stages to uses
// 1. Players
// 2. Player for Current Turn
// 3. Current Board
// 4. isStarted for checking if placement has been set
// 5. current gamemode (isMultiplayer)

class Game {
  constructor(isMultiplayer, playerOne, playerTwo) {
    this.isMultiplayer = isMultiplayer;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.isStarted = false;
  }

  currentTurn() {
    return this.playerOne.isTurn
      ? this.playerOne : this.playerTwo;
  }

  currentBoard() {
    const boardContainer = document
      .getElementsByClassName(`${this.playerOne.isTurn ? 'left' : 'right'}-content`)[0];
    const board = [...boardContainer.getElementsByClassName('box')];
    return board;
  }
}

// function returnPlayerTurn(gameObject) {
//   return gameObject.playerOne.isTurn
//     ? gameObject.playerOne
//     : gameObject.playerTwo;
// }

/// Old Version!
// export default function Game(isMultiplayer, playerOne, playerTwo) {
//   let isStarted = false;

//   // Return player whose turns is theirs
//   function currentTurn() {
//     return returnPlayerTurn(this);
//   }

//   // Return board of player whose turns is there
//   function currentBoard() {
//     return
//        [...document.getElementsByClassName(`${playerOne.isTurn ? 'left' : 'right'}-content`)[0]
//       .getElementsByClassName('box')];
//   }

//   return {
//     playerOne, playerTwo, currentTurn, currentBoard, isStarted, isMultiplayer,
//   };
// }


/***/ }),

/***/ "./src/js/objects/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/objects/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/objects/ship.js");
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */



class GameBoard {
  constructor() {
    this.list = [];
    this.attacks = [];
    this.hits = [];
    this.misses = [];
  }

  // Check if two set of array contain similar elements
  static intersect(a, b) {
    return a.find((pos) => b
      .find((currentPos) => currentPos[0] === pos[0] && currentPos[1] === pos[1]));
  }

  // Return false if ship body is over 9 (which is over the board boundary)
  static hitBoundary(position, axis) {
    switch (axis) {
      case 'horizontal':
        return position.find((pos) => (pos[1] > 9));
      case 'vertical':
        return position.find((pos) => (pos[0] > 9));
      default:
        throw Error('Invalid axis');
    }
  }

  // Check if ship can be placed on a certain square, without collision
  // with the border or other ships.
  // takes all the ship as argument to check for collison
  isValid(position, axis) {
    // Check if ship overlaps over any other ships
    const hasCollision = this.list
      .find((ship) => GameBoard.intersect(ship.position, position));
    // Check if the ship doesn't overlap with the boundary
    // Accept the current ship's position and axis
    const validBoundary = !GameBoard.hitBoundary(position, axis);
    return !hasCollision && validBoundary;
  }

  // Place ship, build a ship, check if it is valid.
  place(ship, axis, coordinate) {
    const initializedShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](ship, axis, coordinate);

    if (!this.isValid(initializedShip.position, axis)) {
      return false;
    }
    this.list.push(initializedShip);
    return initializedShip;
  }

  static swapTurn(gameObject) {
    const { playerOne, playerTwo } = gameObject;
    playerOne.isTurn = !playerOne.isTurn;
    playerTwo.isTurn = !playerTwo.isTurn;
  }

  // Check if attack is out of bound or already exist, then retry
  // If it is valid, checks if a ship is hit; modify ship if hit
  receiveAttack(cord, gameObject) {
    const isExist = this.attacks.find((attack) => attack[0] === cord[0] && attack[1] === cord[1]);

    if (isExist) {
      return false;
    }

    const hit = this.list.find((ship) => ship.hit(cord));

    GameBoard.swapTurn(gameObject);

    this.attacks.push(cord);

    if (hit) {
      this.hits.push(cord);
      return 'hit';
    }

    this.misses.push(cord);
    return 'miss';
  }
}


/***/ }),

/***/ "./src/js/objects/player.js":
/*!**********************************!*\
  !*** ./src/js/objects/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/objects/gameboard.js");
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */



class Player {
  constructor(isBot, initialTurn) {
    this.isBot = isBot;
    this.isTurn = initialTurn;
    this.name = '';
    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  // Bot create random attack cord on the board, keep retrying if it is not valid;
  botEval(player) {
    const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const attackExist = player
      .board.attacks
      .find((attempt) => attempt[0] === rand[0] && attempt[1] === rand[1]);

    if (attackExist) {
      return this.botEval(player);
    }

    return rand;
  }

  // Player simply receive attack if it is not a bot (implying coordinate exists)
  // otherwise, a coord is randomly generated for the bot to attack
  // eslint-disable-next-line consistent-return, class-methods-use-this
  attack(player, coordinate, gameObject) {
    return player.board.receiveAttack(coordinate, gameObject);
  }

  // Only use to decide if playerOne is a bot or a real player
  static randomPlayerDecider() {
    const turnDecider = Math.random() >= 0.5;
    return (Math.random() >= 0.5)
      ? new Player(turnDecider, true)
      : new Player(turnDecider, true);
  }

  // Singleplayer object for initializing a bot and a real player
  static singleplayerInit(names = ['Player One', 'Player Two']) {
    const playerOne = Player.randomPlayerDecider(false);
    const playerOneIsBot = playerOne.isBot;
    const playerTwo = new Player(!playerOneIsBot, !playerOne.isTurn);

    if (playerOneIsBot) {
      playerTwo.name = names[0];
    } else {
      playerOne.name = names[0];
    }
    return {
      playerOne,
      playerTwo,
    };
  }

  // Multiplayer object for initializing both real players
  static multiplayerInit(names = ['Player One', 'Player Two']) {
    const playerOne = new Player(false, true);
    const playerTwo = new Player(false, false);

    playerOne.name = names[0];
    playerTwo.name = names[1];

    return {
      playerOne,
      playerTwo,
    };
  }
}


/***/ }),

/***/ "./src/js/objects/ship.js":
/*!********************************!*\
  !*** ./src/js/objects/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ships": () => (/* binding */ Ships),
/* harmony export */   "default": () => (/* binding */ Ship)
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

class Ship {
  constructor(ship, axis, coordinate) {
    this.length = ship.length;
    this.axis = axis;
    this.coordinate = coordinate;
    this.position = [];
    this.buildShip();
    this.damage = [];
  }

  // Takes coordinate, axis, and length, and build ship on a certain cell position
  buildShip() {
    if (this.position.length > 0) {
      return;
    }
    const start = [...this.coordinate];
    const body = Array(this.length)
      .fill()
      .map(() => {
        if (this.axis === 'horizontal') {
          return [start[0], start[1]++];
        }
        return [start[0]++, start[1]];
      });
    this.position = body;
  }

  // Take a cord and check if cord hits any body cord
  hit(value) {
    const isHit = this.position.some((pos) => {
      const matchHitPos = value[0] === pos[0] && value[1] === pos[1];
      if (matchHitPos) {
        this.damage.push(value);
      }
      return matchHitPos;
    });
    return isHit;
  }

  // Damage return true of damage length is equal to body length
  isSunk() {
    return this.damage.length === this.length;
  }
}

// // Takes coordinate, axis, and length, and build ship on a certain cell position
// function buildShip(length, axis, coordinate) {
//   const start = [...coordinate];
//   const body = Array(length)
//     .fill()
//     .map(() => {
//       if (axis === 'horizontal') {
//         return [start[0], start[1]++];
//       }
//       return [start[0]++, start[1]];
//     });
//   return body;
// }

// // Function Constructor for ship
// function Ship(ship, axis, coordinate) {
//   const { length } = ship;
//   const damage = [];
//   // Iniitialize ship with a utility function buildShip
//   const position = buildShip(ship.length, axis, coordinate);

//   // Take a cord and check if cord hits any body cord
//   function hit(value) {
//     const isHit = position.some((pos) => {
//       const matchHitPos = value[0] === pos[0] && value[1] === pos[1];
//       if (matchHitPos) {
//         damage.push(value);
//       }
//       return matchHitPos;
//     });
//     return isHit;
//   }

//   // Damage return true of damage length is equal to body length
//   function isSunk() {
//     return damage.length === length;
//   }

//   return {
//     length,
//     damage,
//     axis,
//     position,
//     hit,
//     isSunk,
//   };
// }


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
      <main>
        <div class='top-container'>
          <p class='turn-container'>Turn: <span id='name'></span></p>
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
      </main>
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
  const { playerOne, playerTwo } = _objects_player__WEBPACK_IMPORTED_MODULE_1__["default"].multiplayerInit();
  return new _objects_game__WEBPACK_IMPORTED_MODULE_0__["default"](true, playerOne, playerTwo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsS0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JRjtBQUNtQztBQUNJOztBQUV2QztBQUNPO0FBQ1AsVUFBVSx1QkFBdUIsRUFBRSx1RUFBc0I7QUFDekQsYUFBYSxxREFBSTtBQUNqQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnFDO0FBQ007O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsSUFBSTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVE7QUFDeEIsd0NBQXdDLElBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFzQjtBQUM5QixPQUFPO0FBQ1AsTUFBTSxvREFBUztBQUNmLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy9Vc2Vycy9tYWNib29rYWlyL3JlcG9zL2JhdHRsZXNoaXAvc3JjL2Fzc2V0cy9zaGlwc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwucG5nJC8iLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3V0aWxpdGllcy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY2IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NoYWluUmVzdWx0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jb2xsZWN0Tm9uRW51bVByb3BzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jcmVhdGVBc3NpZ25lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY3JlYXRlRXNjYXBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY3JlYXRlSW5kZXhGaW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jcmVhdGVSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19kZWVwR2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19lc2NhcGVNYXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2V4ZWN1dGVCb3VuZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fZmxhdHRlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fZ2V0Qnl0ZUxlbmd0aC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19ncm91cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19oYXNPYmplY3RUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19pc0J1ZmZlckxpa2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2tleUluT2JqLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19tZXRob2RGaW5nZXJwcmludC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fb3B0aW1pemVDYi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fc2V0dXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX3NoYWxsb3dQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fc3RyaW5nVGFnQnVnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL190YWdUZXN0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX3RvQnVmZmVyVmlldy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fdG9QYXRoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL191bmVzY2FwZU1hcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9hZnRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9hbGxLZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2JlZm9yZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9iaW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2JpbmRBbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY2hhaW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY2h1bmsuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY29tcGFjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9jb21wb3NlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NvbnN0YW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NvbnRhaW5zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NvdW50QnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY3JlYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2RlYm91bmNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2RlZmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2RlbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2RpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZWFjaC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZXh0ZW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2V4dGVuZE93bi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmluZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmluZEtleS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9maW5kTGFzdEluZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2ZpbmRXaGVyZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9maXJzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9mbGF0dGVuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9nZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9oYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW5kZXgtYWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2luZGV4LWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW5kZXhCeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pbmRleE9mLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2ludmVydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pbnZva2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0FycmF5QnVmZmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0RhdGFWaWV3LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzRGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0VxdWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc01hcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc01hdGNoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzTmFOLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzTnVsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc051bWJlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc1JlZ0V4cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc1NldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNXZWFrTWFwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzV2Vha1NldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9rZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2xhc3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbGFzdEluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbWFwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL21hcE9iamVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9tYXRjaGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL21heC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9tZW1vaXplLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL21pbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9taXhpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9uZWdhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbm9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9ub3cuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvb2JqZWN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL29taXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvb25jZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9wYWlycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9wYXJ0aWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3BhcnRpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9waWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3BsdWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3Byb3BlcnR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3Byb3BlcnR5T2YuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcmFuZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3JhbmdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9yZWR1Y2VSaWdodC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9yZWplY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcmVzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9yZXN0QXJndW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3Jlc3VsdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvc2h1ZmZsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9zaXplLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3NvbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvc29ydEJ5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3NvcnRlZEluZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3RhcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy90ZW1wbGF0ZVNldHRpbmdzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3Rocm90dGxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3RpbWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdG9QYXRoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3VuZGVyc2NvcmUtYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmRlcnNjb3JlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3VuZXNjYXBlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3VuaW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3VuaXEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdW5pcXVlSWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdW56aXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdmFsdWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3doZXJlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3dpdGhvdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvd3JhcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy96aXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvdXRpbGl0aWVzL2FuaW1hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDEucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtaG9yaV8wMi5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDQucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wMS5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wMy5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzA0LnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzA1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDUucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wMS5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzA1LnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAzLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAzLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvc2hpcHMgc3luYyBcXFxcLnBuZyRcIjsiLCIvLyBJbXBvcnQgYWxsIHNoaXAgaW1hZ2VzXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgci5rZXlzKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoLyguXFwvfFxcLnBuZyQpL2csICcnKV0gPSByKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn1cblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3NoaXBzJywgZmFsc2UsIC9cXC5wbmckLykpO1xuXG5mdW5jdGlvbiBsb2FkSWNvbih0eXBlLCBudW0sIGRpcikge1xuICBjb25zdCBkaXJOYW1lID0gZGlyID09PSAnaG9yaXpvbnRhbCcgPyAnaG9yaScgOiAndmVydCc7XG4gIHJldHVybiBpbWFnZXNbYCR7dHlwZX0tJHtkaXJOYW1lfV8wJHtudW19YF07XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBsb2FkSWNvbiB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuLy8gVGhlIG1haW4gR2FtZSBvYmplY3QgZm9yIGV4cG9zaW5nIGluZm9ybWF0aW9uIGZvciBlYWNoIHN0YWdlcyB0byB1c2VzXG4vLyAxLiBQbGF5ZXJzXG4vLyAyLiBQbGF5ZXIgZm9yIEN1cnJlbnQgVHVyblxuLy8gMy4gQ3VycmVudCBCb2FyZFxuLy8gNC4gaXNTdGFydGVkIGZvciBjaGVja2luZyBpZiBwbGFjZW1lbnQgaGFzIGJlZW4gc2V0XG4vLyA1LiBjdXJyZW50IGdhbWVtb2RlIChpc011bHRpcGxheWVyKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoaXNNdWx0aXBsYXllciwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgICB0aGlzLmlzTXVsdGlwbGF5ZXIgPSBpc011bHRpcGxheWVyO1xuICAgIHRoaXMucGxheWVyT25lID0gcGxheWVyT25lO1xuICAgIHRoaXMucGxheWVyVHdvID0gcGxheWVyVHdvO1xuICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gIH1cblxuICBjdXJyZW50VHVybigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJPbmUuaXNUdXJuXG4gICAgICA/IHRoaXMucGxheWVyT25lIDogdGhpcy5wbGF5ZXJUd287XG4gIH1cblxuICBjdXJyZW50Qm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5wbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0J30tY29udGVudGApWzBdO1xuICAgIGNvbnN0IGJvYXJkID0gWy4uLmJvYXJkQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXTtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gcmV0dXJuUGxheWVyVHVybihnYW1lT2JqZWN0KSB7XG4vLyAgIHJldHVybiBnYW1lT2JqZWN0LnBsYXllck9uZS5pc1R1cm5cbi8vICAgICA/IGdhbWVPYmplY3QucGxheWVyT25lXG4vLyAgICAgOiBnYW1lT2JqZWN0LnBsYXllclR3bztcbi8vIH1cblxuLy8vIE9sZCBWZXJzaW9uIVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZShpc011bHRpcGxheWVyLCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuLy8gICBsZXQgaXNTdGFydGVkID0gZmFsc2U7XG5cbi8vICAgLy8gUmV0dXJuIHBsYXllciB3aG9zZSB0dXJucyBpcyB0aGVpcnNcbi8vICAgZnVuY3Rpb24gY3VycmVudFR1cm4oKSB7XG4vLyAgICAgcmV0dXJuIHJldHVyblBsYXllclR1cm4odGhpcyk7XG4vLyAgIH1cblxuLy8gICAvLyBSZXR1cm4gYm9hcmQgb2YgcGxheWVyIHdob3NlIHR1cm5zIGlzIHRoZXJlXG4vLyAgIGZ1bmN0aW9uIGN1cnJlbnRCb2FyZCgpIHtcbi8vICAgICByZXR1cm5cbi8vICAgICAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtwbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0J30tY29udGVudGApWzBdXG4vLyAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwbGF5ZXJPbmUsIHBsYXllclR3bywgY3VycmVudFR1cm4sIGN1cnJlbnRCb2FyZCwgaXNTdGFydGVkLCBpc011bHRpcGxheWVyLFxuLy8gICB9O1xuLy8gfVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIHRoaXMuYXR0YWNrcyA9IFtdO1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMubWlzc2VzID0gW107XG4gIH1cblxuICAvLyBDaGVjayBpZiB0d28gc2V0IG9mIGFycmF5IGNvbnRhaW4gc2ltaWxhciBlbGVtZW50c1xuICBzdGF0aWMgaW50ZXJzZWN0KGEsIGIpIHtcbiAgICByZXR1cm4gYS5maW5kKChwb3MpID0+IGJcbiAgICAgIC5maW5kKChjdXJyZW50UG9zKSA9PiBjdXJyZW50UG9zWzBdID09PSBwb3NbMF0gJiYgY3VycmVudFBvc1sxXSA9PT0gcG9zWzFdKSk7XG4gIH1cblxuICAvLyBSZXR1cm4gZmFsc2UgaWYgc2hpcCBib2R5IGlzIG92ZXIgOSAod2hpY2ggaXMgb3ZlciB0aGUgYm9hcmQgYm91bmRhcnkpXG4gIHN0YXRpYyBoaXRCb3VuZGFyeShwb3NpdGlvbiwgYXhpcykge1xuICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMV0gPiA5KSk7XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMF0gPiA5KSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBheGlzJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIG9uIGEgY2VydGFpbiBzcXVhcmUsIHdpdGhvdXQgY29sbGlzaW9uXG4gIC8vIHdpdGggdGhlIGJvcmRlciBvciBvdGhlciBzaGlwcy5cbiAgLy8gdGFrZXMgYWxsIHRoZSBzaGlwIGFzIGFyZ3VtZW50IHRvIGNoZWNrIGZvciBjb2xsaXNvblxuICBpc1ZhbGlkKHBvc2l0aW9uLCBheGlzKSB7XG4gICAgLy8gQ2hlY2sgaWYgc2hpcCBvdmVybGFwcyBvdmVyIGFueSBvdGhlciBzaGlwc1xuICAgIGNvbnN0IGhhc0NvbGxpc2lvbiA9IHRoaXMubGlzdFxuICAgICAgLmZpbmQoKHNoaXApID0+IEdhbWVCb2FyZC5pbnRlcnNlY3Qoc2hpcC5wb3NpdGlvbiwgcG9zaXRpb24pKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgc2hpcCBkb2Vzbid0IG92ZXJsYXAgd2l0aCB0aGUgYm91bmRhcnlcbiAgICAvLyBBY2NlcHQgdGhlIGN1cnJlbnQgc2hpcCdzIHBvc2l0aW9uIGFuZCBheGlzXG4gICAgY29uc3QgdmFsaWRCb3VuZGFyeSA9ICFHYW1lQm9hcmQuaGl0Qm91bmRhcnkocG9zaXRpb24sIGF4aXMpO1xuICAgIHJldHVybiAhaGFzQ29sbGlzaW9uICYmIHZhbGlkQm91bmRhcnk7XG4gIH1cblxuICAvLyBQbGFjZSBzaGlwLCBidWlsZCBhIHNoaXAsIGNoZWNrIGlmIGl0IGlzIHZhbGlkLlxuICBwbGFjZShzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZWRTaGlwID0gbmV3IFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZChpbml0aWFsaXplZFNoaXAucG9zaXRpb24sIGF4aXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGlzdC5wdXNoKGluaXRpYWxpemVkU2hpcCk7XG4gICAgcmV0dXJuIGluaXRpYWxpemVkU2hpcDtcbiAgfVxuXG4gIHN0YXRpYyBzd2FwVHVybihnYW1lT2JqZWN0KSB7XG4gICAgY29uc3QgeyBwbGF5ZXJPbmUsIHBsYXllclR3byB9ID0gZ2FtZU9iamVjdDtcbiAgICBwbGF5ZXJPbmUuaXNUdXJuID0gIXBsYXllck9uZS5pc1R1cm47XG4gICAgcGxheWVyVHdvLmlzVHVybiA9ICFwbGF5ZXJUd28uaXNUdXJuO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYXR0YWNrIGlzIG91dCBvZiBib3VuZCBvciBhbHJlYWR5IGV4aXN0LCB0aGVuIHJldHJ5XG4gIC8vIElmIGl0IGlzIHZhbGlkLCBjaGVja3MgaWYgYSBzaGlwIGlzIGhpdDsgbW9kaWZ5IHNoaXAgaWYgaGl0XG4gIHJlY2VpdmVBdHRhY2soY29yZCwgZ2FtZU9iamVjdCkge1xuICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLmF0dGFja3MuZmluZCgoYXR0YWNrKSA9PiBhdHRhY2tbMF0gPT09IGNvcmRbMF0gJiYgYXR0YWNrWzFdID09PSBjb3JkWzFdKTtcblxuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gdGhpcy5saXN0LmZpbmQoKHNoaXApID0+IHNoaXAuaGl0KGNvcmQpKTtcblxuICAgIEdhbWVCb2FyZC5zd2FwVHVybihnYW1lT2JqZWN0KTtcblxuICAgIHRoaXMuYXR0YWNrcy5wdXNoKGNvcmQpO1xuXG4gICAgaWYgKGhpdCkge1xuICAgICAgdGhpcy5oaXRzLnB1c2goY29yZCk7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuXG4gICAgdGhpcy5taXNzZXMucHVzaChjb3JkKTtcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihpc0JvdCwgaW5pdGlhbFR1cm4pIHtcbiAgICB0aGlzLmlzQm90ID0gaXNCb3Q7XG4gICAgdGhpcy5pc1R1cm4gPSBpbml0aWFsVHVybjtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG5cbiAgLy8gQm90IGNyZWF0ZSByYW5kb20gYXR0YWNrIGNvcmQgb24gdGhlIGJvYXJkLCBrZWVwIHJldHJ5aW5nIGlmIGl0IGlzIG5vdCB2YWxpZDtcbiAgYm90RXZhbChwbGF5ZXIpIHtcbiAgICBjb25zdCByYW5kID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICBjb25zdCBhdHRhY2tFeGlzdCA9IHBsYXllclxuICAgICAgLmJvYXJkLmF0dGFja3NcbiAgICAgIC5maW5kKChhdHRlbXB0KSA9PiBhdHRlbXB0WzBdID09PSByYW5kWzBdICYmIGF0dGVtcHRbMV0gPT09IHJhbmRbMV0pO1xuXG4gICAgaWYgKGF0dGFja0V4aXN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5ib3RFdmFsKHBsYXllcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmQ7XG4gIH1cblxuICAvLyBQbGF5ZXIgc2ltcGx5IHJlY2VpdmUgYXR0YWNrIGlmIGl0IGlzIG5vdCBhIGJvdCAoaW1wbHlpbmcgY29vcmRpbmF0ZSBleGlzdHMpXG4gIC8vIG90aGVyd2lzZSwgYSBjb29yZCBpcyByYW5kb21seSBnZW5lcmF0ZWQgZm9yIHRoZSBib3QgdG8gYXR0YWNrXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVybiwgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBhdHRhY2socGxheWVyLCBjb29yZGluYXRlLCBnYW1lT2JqZWN0KSB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUsIGdhbWVPYmplY3QpO1xuICB9XG5cbiAgLy8gT25seSB1c2UgdG8gZGVjaWRlIGlmIHBsYXllck9uZSBpcyBhIGJvdCBvciBhIHJlYWwgcGxheWVyXG4gIHN0YXRpYyByYW5kb21QbGF5ZXJEZWNpZGVyKCkge1xuICAgIGNvbnN0IHR1cm5EZWNpZGVyID0gTWF0aC5yYW5kb20oKSA+PSAwLjU7XG4gICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpID49IDAuNSlcbiAgICAgID8gbmV3IFBsYXllcih0dXJuRGVjaWRlciwgdHJ1ZSlcbiAgICAgIDogbmV3IFBsYXllcih0dXJuRGVjaWRlciwgdHJ1ZSk7XG4gIH1cblxuICAvLyBTaW5nbGVwbGF5ZXIgb2JqZWN0IGZvciBpbml0aWFsaXppbmcgYSBib3QgYW5kIGEgcmVhbCBwbGF5ZXJcbiAgc3RhdGljIHNpbmdsZXBsYXllckluaXQobmFtZXMgPSBbJ1BsYXllciBPbmUnLCAnUGxheWVyIFR3byddKSB7XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyLnJhbmRvbVBsYXllckRlY2lkZXIoZmFsc2UpO1xuICAgIGNvbnN0IHBsYXllck9uZUlzQm90ID0gcGxheWVyT25lLmlzQm90O1xuICAgIGNvbnN0IHBsYXllclR3byA9IG5ldyBQbGF5ZXIoIXBsYXllck9uZUlzQm90LCAhcGxheWVyT25lLmlzVHVybik7XG5cbiAgICBpZiAocGxheWVyT25lSXNCb3QpIHtcbiAgICAgIHBsYXllclR3by5uYW1lID0gbmFtZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllck9uZS5uYW1lID0gbmFtZXNbMF07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwbGF5ZXJPbmUsXG4gICAgICBwbGF5ZXJUd28sXG4gICAgfTtcbiAgfVxuXG4gIC8vIE11bHRpcGxheWVyIG9iamVjdCBmb3IgaW5pdGlhbGl6aW5nIGJvdGggcmVhbCBwbGF5ZXJzXG4gIHN0YXRpYyBtdWx0aXBsYXllckluaXQobmFtZXMgPSBbJ1BsYXllciBPbmUnLCAnUGxheWVyIFR3byddKSB7XG4gICAgY29uc3QgcGxheWVyT25lID0gbmV3IFBsYXllcihmYWxzZSwgdHJ1ZSk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcihmYWxzZSwgZmFsc2UpO1xuXG4gICAgcGxheWVyT25lLm5hbWUgPSBuYW1lc1swXTtcbiAgICBwbGF5ZXJUd28ubmFtZSA9IG5hbWVzWzFdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXllck9uZSxcbiAgICAgIHBsYXllclR3byxcbiAgICB9O1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuZXhwb3J0IGNvbnN0IFNoaXBzID0ge1xuICBwYXRyb2w6IHtcbiAgICBuYW1lOiAncGF0cm9sJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgb3JkZXI6IDEsXG4gIH0sXG4gIHN1Ym1hcmluZToge1xuICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMixcbiAgfSxcbiAgZGVzdHJveWVyOiB7XG4gICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAzLFxuICB9LFxuICBiYXR0bGVzaGlwOiB7XG4gICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBvcmRlcjogNCxcbiAgfSxcbiAgY2Fycmllcjoge1xuICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgb3JkZXI6IDUsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3Ioc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIHRoaXMubGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgdGhpcy5heGlzID0gYXhpcztcbiAgICB0aGlzLmNvb3JkaW5hdGUgPSBjb29yZGluYXRlO1xuICAgIHRoaXMucG9zaXRpb24gPSBbXTtcbiAgICB0aGlzLmJ1aWxkU2hpcCgpO1xuICAgIHRoaXMuZGFtYWdlID0gW107XG4gIH1cblxuICAvLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuICBidWlsZFNoaXAoKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGFydCA9IFsuLi50aGlzLmNvb3JkaW5hdGVdO1xuICAgIGNvbnN0IGJvZHkgPSBBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5heGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbiAgICAgIH0pO1xuICAgIHRoaXMucG9zaXRpb24gPSBib2R5O1xuICB9XG5cbiAgLy8gVGFrZSBhIGNvcmQgYW5kIGNoZWNrIGlmIGNvcmQgaGl0cyBhbnkgYm9keSBjb3JkXG4gIGhpdCh2YWx1ZSkge1xuICAgIGNvbnN0IGlzSGl0ID0gdGhpcy5wb3NpdGlvbi5zb21lKChwb3MpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoSGl0UG9zID0gdmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdO1xuICAgICAgaWYgKG1hdGNoSGl0UG9zKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0hpdDtcbiAgfVxuXG4gIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5kYW1hZ2UubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuXG4vLyAvLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuLy8gZnVuY3Rpb24gYnVpbGRTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuLy8gICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbi8vICAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbi8vICAgICAuZmlsbCgpXG4vLyAgICAgLm1hcCgoKSA9PiB7XG4vLyAgICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4vLyAgICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4vLyAgICAgfSk7XG4vLyAgIHJldHVybiBib2R5O1xuLy8gfVxuXG4vLyAvLyBGdW5jdGlvbiBDb25zdHJ1Y3RvciBmb3Igc2hpcFxuLy8gZnVuY3Rpb24gU2hpcChzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4vLyAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuLy8gICBjb25zdCBkYW1hZ2UgPSBbXTtcbi8vICAgLy8gSW5paXRpYWxpemUgc2hpcCB3aXRoIGEgdXRpbGl0eSBmdW5jdGlvbiBidWlsZFNoaXBcbi8vICAgY29uc3QgcG9zaXRpb24gPSBidWlsZFNoaXAoc2hpcC5sZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4vLyAgIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuLy8gICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbi8vICAgICBjb25zdCBpc0hpdCA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuLy8gICAgICAgY29uc3QgbWF0Y2hIaXRQb3MgPSB2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV07XG4vLyAgICAgICBpZiAobWF0Y2hIaXRQb3MpIHtcbi8vICAgICAgICAgZGFtYWdlLnB1c2godmFsdWUpO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiBpc0hpdDtcbi8vICAgfVxuXG4vLyAgIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4vLyAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbi8vICAgICByZXR1cm4gZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBsZW5ndGgsXG4vLyAgICAgZGFtYWdlLFxuLy8gICAgIGF4aXMsXG4vLyAgICAgcG9zaXRpb24sXG4vLyAgICAgaGl0LFxuLy8gICAgIGlzU3Vuayxcbi8vICAgfTtcbi8vIH1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWFycm93LWNhbGxiYWNrICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IFNoaXBzIH0gZnJvbSAnLi9vYmplY3RzL3NoaXAnO1xuaW1wb3J0IHsgbG9hZEljb24gfSBmcm9tICcuL2ltYWdlTG9hZGVyJztcblxuLy8gRW51bWVyYXRlZCBhcnJheXMgb2Ygc2hpcHMgdG8gYmUgcGxhY2VkXG5jb25zdCBzaGlwT3JkZXJzID0gT2JqZWN0LnZhbHVlcyhTaGlwcykuc29ydCgobGFzdCwgbmV4dCkgPT4gbGFzdC5vcmRlciA8IG5leHQub3JkZXIpO1xuXG4vLyBsb2FkIGFsbCB0aGUgc2hpcHMgb24gdGhlIGJvYXJkIHdoZW4gY2FsbGVkXG5mdW5jdGlvbiBsb2FkQm9hcmQocGxheWVyLCBzaWRlKSB7XG4gIHBsYXllci5ib2FyZC5saXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLnBvc2l0aW9uLmZvckVhY2goKGNvcmQpID0+IHtcbiAgICAgIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV0uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGlmIChib3guZGF0YXNldC5wb3MgPT09IGNvcmQuam9pbigpKSB7XG4gICAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBzaGlwT3JkZXJzW3BsYXllci5ib2FyZC5saXN0LmluZGV4T2Yoc2hpcCldO1xuICAgICAgICAgIGNvbnN0IHNoaXBJbWcgPSBsb2FkSWNvbihuYW1lLCBzaGlwLnBvc2l0aW9uLmluZGV4T2YoY29yZCkgKyAxLCBzaGlwLmF4aXMpO1xuICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NoaXBJbWd9JylgO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHVubG9hZCBhbGwgdGhlIHNoaXBzIG9uIGEgYm9hcmRcbmZ1bmN0aW9uIHVubG9hZEJvYXJkKHNpZGUpIHtcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICBib3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gIH0pO1xufVxuXG4vLyBBIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCBoYXMgdGhlIGxvZ2ljIGZvciBpbml0aWFsaXppbmcgYW5kIGxvYWRpbmcgdXAgdGhlIGdhbWUgYm9hcmRcbmNvbnN0IGJvYXJkTG9hZCA9IChmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAvLyBHZW5lcmF0ZSB0aGUgcGFnZSBmb3Igc2NvcmUga2VlcGluZyBhbmQgdHVybiBpbmZvcm1hdGlvblxuICAvLyBSZWZhY3RvciBpbnRvIHRlbXBsYXRlXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGFnZShuYW1lcykge1xuICAgIGNvbnN0IGlzTXVsdGlwbGF5ZXIgPSBuYW1lcy5sZW5ndGggPT09IDI7XG4gICAgZG9jdW1lbnQuYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RvcC1jb250YWluZXInPlxuICAgICAgICAgIDxwIGNsYXNzPSd0dXJuLWNvbnRhaW5lcic+VHVybjogPHNwYW4gaWQ9J25hbWUnPjwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J21haW4tY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbGVmdC1jb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsYXllcm5hbWUnPiR7bmFtZXNbMF19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZC1jb250YWluZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwcy1jb250YWluZXInPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZCc+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodC1jb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsYXllcm5hbWUnPiR7aXNNdWx0aXBsYXllciA/IG5hbWVzWzFdIDogJ0JPVCd9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZC1jb250YWluZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwcy1jb250YWluZXInPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZCc+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgYDtcbiAgfVxuICAvLyBHZW5lcmF0ZSB0aGUgd2hvbGUgY2VsbHMgZm9yIGVhY2ggYm9hcmRcbiAgZnVuY3Rpb24gZ2VuZXJhdGVCb3goKSB7XG4gICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkJyldLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBzdGFydCA9IFswLCAwXTtcbiAgICAgIEFycmF5KDEwMClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdib3gnO1xuICAgICAgICAgIGJveC5kYXRhc2V0LnBvcyA9IHN0YXJ0O1xuICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdIDw9IDkpIHtcbiAgICAgICAgICAgIHN0YXJ0WzFdKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydFsxXSA9PT0gMTApIHtcbiAgICAgICAgICAgIHN0YXJ0WzFdID0gMDtcbiAgICAgICAgICAgIHN0YXJ0WzBdKys7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvLyBhc3NpZ24gYXBwcm9wcmlhdGUgY2xhc3NlcyB0byBkaXN0aW5jdCBsZWZ0IGFuZCByaWdodFxuICBmdW5jdGlvbiBhc3NpZ25QYXJlbnQoKSB7XG4gICAgWydsZWZ0JywgJ3JpZ2h0J10uZm9yRWFjaCgoc2lkZSkgPT4ge1xuICAgICAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXVxuICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94Jyk7XG4gICAgICBbLi4uYm94ZXNdLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBib3guZGF0YXNldC5zaWRlID0gc2lkZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZW5lcmF0ZVBhZ2UsIGdlbmVyYXRlQm94LCBhc3NpZ25QYXJlbnQsXG4gIH07XG59KCkpO1xuXG4vLyBMb2FkIG9wdGlvbiBmb3IgcGxhY2luZyBzaGlwcyBpbiBhIGNlcnRhaW4gYXhpb3NcbmZ1bmN0aW9uIGxvYWRPcHRpb24oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvcC1jb250YWluZXInKVswXTtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIFRlbXBsYXRlXG4gIG9wdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nZGlyLW9wdGlvbic+XG4gICAgICA8bGFiZWwgZm9yPSdob3Jpem9udGFsJz5Ib3Jpem9udGFsPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgY2xhc3M9J2Rpci1vcHRpb24nIHZhbHVlPSdob3Jpem9udGFsJyBpZD0naG9yaXpvbnRhbCcgbmFtZT0nb3B0aW9uJyBjaGVja2VkPlxuICAgICAgPGxhYmVsIGZvcj0ndmVydGljYWwnPlZlcnRpY2FsPC9sYWJlbD48aW5wdXQgdHlwZT0ncmFkaW8nIGNsYXNzPSdkaXItb3B0aW9uJyB2YWx1ZT0ndmVydGljYWwnIGlkPSd2ZXJ0aWNhbCcgbmFtZT0nb3B0aW9uJz48L2Rpdj5cbiAgYDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbi8vIExvYWQgYm9hcmRcbmZ1bmN0aW9uIG1haW5QYWdlTG9hZChuYW1lcykge1xuICBib2FyZExvYWQuZ2VuZXJhdGVQYWdlKG5hbWVzKTtcbiAgYm9hcmRMb2FkLmdlbmVyYXRlQm94KCk7XG4gIGJvYXJkTG9hZC5hc3NpZ25QYXJlbnQoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UobmFtZXMpIHtcbiAgLy8gTG9hZCBwYWdlIGFuZCBpbml0aWFsaXplIGV2ZXJ5IGNlbGxzO1xuICBtYWluUGFnZUxvYWQobmFtZXMpO1xuICAvLyBMb2FkIG9wdGlvbnNcbiAgbG9hZE9wdGlvbigpO1xufVxuXG5leHBvcnQge1xuICBtYWluUGFnZUxvYWQsIGxvYWRCb2FyZCwgbG9hZE9wdGlvbiwgYm9hcmRMb2FkLCBsb2FkUGFnZSwgc2hpcE9yZGVycywgdW5sb2FkQm9hcmQsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vb2JqZWN0cy9nYW1lJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vb2JqZWN0cy9wbGF5ZXInO1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9uIGZvciBpbml0aWFsaXppbmcgVGVzdCdzIGdhbWUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVzdEdhbWVPYmplY3QoKSB7XG4gIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IFBsYXllci5tdWx0aXBsYXllckluaXQoKTtcbiAgcmV0dXJuIG5ldyBHYW1lKHRydWUsIHBsYXllck9uZSwgcGxheWVyVHdvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xuICBjb25zdCBvbGRFbGVtZW50ID0gZWxlbWVudDtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICBpZiAob2xkRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgb2xkRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHsgbmF0aXZlQ3JlYXRlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBDcmVhdGUgYSBuYWtlZCBmdW5jdGlvbiByZWZlcmVuY2UgZm9yIHN1cnJvZ2F0ZS1wcm90b3R5cGUtc3dhcHBpbmcuXG5mdW5jdGlvbiBjdG9yKCkge1xuICByZXR1cm4gZnVuY3Rpb24oKXt9O1xufVxuXG4vLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBhbm90aGVyLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZUNyZWF0ZShwcm90b3R5cGUpIHtcbiAgaWYgKCFpc09iamVjdChwcm90b3R5cGUpKSByZXR1cm4ge307XG4gIGlmIChuYXRpdmVDcmVhdGUpIHJldHVybiBuYXRpdmVDcmVhdGUocHJvdG90eXBlKTtcbiAgdmFyIEN0b3IgPSBjdG9yKCk7XG4gIEN0b3IucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICB2YXIgcmVzdWx0ID0gbmV3IEN0b3I7XG4gIEN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBpZGVudGl0eSBmcm9tICcuL2lkZW50aXR5LmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSAnLi9tYXRjaGVyLmpzJztcbmltcG9ydCBwcm9wZXJ0eSBmcm9tICcuL3Byb3BlcnR5LmpzJztcbmltcG9ydCBvcHRpbWl6ZUNiIGZyb20gJy4vX29wdGltaXplQ2IuanMnO1xuXG4vLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBlYWNoXG4vLyBlbGVtZW50IGluIGEgY29sbGVjdGlvbiwgcmV0dXJuaW5nIHRoZSBkZXNpcmVkIHJlc3VsdCDigJQgZWl0aGVyIGBfLmlkZW50aXR5YCxcbi8vIGFuIGFyYml0cmFyeSBjYWxsYmFjaywgYSBwcm9wZXJ0eSBtYXRjaGVyLCBvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvcHRpbWl6ZUNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpKSByZXR1cm4gbWF0Y2hlcih2YWx1ZSk7XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGl0ZXJhdGVlIGZyb20gJy4vaXRlcmF0ZWUuanMnO1xuXG4vLyBUaGUgZnVuY3Rpb24gd2UgY2FsbCBpbnRlcm5hbGx5IHRvIGdlbmVyYXRlIGEgY2FsbGJhY2suIEl0IGludm9rZXNcbi8vIGBfLml0ZXJhdGVlYCBpZiBvdmVycmlkZGVuLCBvdGhlcndpc2UgYGJhc2VJdGVyYXRlZWAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgaWYgKF8uaXRlcmF0ZWUgIT09IGl0ZXJhdGVlKSByZXR1cm4gXy5pdGVyYXRlZSh2YWx1ZSwgY29udGV4dCk7XG4gIHJldHVybiBiYXNlSXRlcmF0ZWUodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbn1cbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYWluUmVzdWx0KGluc3RhbmNlLCBvYmopIHtcbiAgcmV0dXJuIGluc3RhbmNlLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xufVxuIiwiaW1wb3J0IHsgbm9uRW51bWVyYWJsZVByb3BzLCBPYmpQcm90byB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBjcmVhdGUgYSBzaW1wbGUgbG9va3VwIHN0cnVjdHVyZS5cbi8vIGBjb2xsZWN0Tm9uRW51bVByb3BzYCB1c2VkIHRvIGRlcGVuZCBvbiBgXy5jb250YWluc2AsIGJ1dCB0aGlzIGxlZCB0b1xuLy8gY2lyY3VsYXIgaW1wb3J0cy4gYGVtdWxhdGVkU2V0YCBpcyBhIG9uZS1vZmYgc29sdXRpb24gdGhhdCBvbmx5IHdvcmtzIGZvclxuLy8gYXJyYXlzIG9mIHN0cmluZ3MuXG5mdW5jdGlvbiBlbXVsYXRlZFNldChrZXlzKSB7XG4gIHZhciBoYXNoID0ge307XG4gIGZvciAodmFyIGwgPSBrZXlzLmxlbmd0aCwgaSA9IDA7IGkgPCBsOyArK2kpIGhhc2hba2V5c1tpXV0gPSB0cnVlO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5zOiBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIGhhc2hba2V5XSA9PT0gdHJ1ZTsgfSxcbiAgICBwdXNoOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGhhc2hba2V5XSA9IHRydWU7XG4gICAgICByZXR1cm4ga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBJbnRlcm5hbCBoZWxwZXIuIENoZWNrcyBga2V5c2AgZm9yIHRoZSBwcmVzZW5jZSBvZiBrZXlzIGluIElFIDwgOSB0aGF0IHdvbid0XG4vLyBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC4gRXh0ZW5kcyBga2V5c2AgaW4gcGxhY2UgaWZcbi8vIG5lZWRlZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKSB7XG4gIGtleXMgPSBlbXVsYXRlZFNldChrZXlzKTtcbiAgdmFyIG5vbkVudW1JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gIHZhciBwcm90byA9IChpc0Z1bmN0aW9uKGNvbnN0cnVjdG9yKSAmJiBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpIHx8IE9ialByb3RvO1xuXG4gIC8vIENvbnN0cnVjdG9yIGlzIGEgc3BlY2lhbCBjYXNlLlxuICB2YXIgcHJvcCA9ICdjb25zdHJ1Y3Rvcic7XG4gIGlmIChoYXMob2JqLCBwcm9wKSAmJiAha2V5cy5jb250YWlucyhwcm9wKSkga2V5cy5wdXNoKHByb3ApO1xuXG4gIHdoaWxlIChub25FbnVtSWR4LS0pIHtcbiAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25vbkVudW1JZHhdO1xuICAgIGlmIChwcm9wIGluIG9iaiAmJiBvYmpbcHJvcF0gIT09IHByb3RvW3Byb3BdICYmICFrZXlzLmNvbnRhaW5zKHByb3ApKSB7XG4gICAgICBrZXlzLnB1c2gocHJvcCk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYXNzaWduZXIgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoa2V5c0Z1bmMsIGRlZmF1bHRzKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoZGVmYXVsdHMpIG9iaiA9IE9iamVjdChvYmopO1xuICAgIGlmIChsZW5ndGggPCAyIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdLFxuICAgICAgICAgIGtleXMgPSBrZXlzRnVuYyhzb3VyY2UpLFxuICAgICAgICAgIGwgPSBrZXlzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBpZiAoIWRlZmF1bHRzIHx8IG9ialtrZXldID09PSB2b2lkIDApIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG59XG4iLCJpbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gZ2VuZXJhdGUgZnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzXG4vLyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVzY2FwZXIobWFwKSB7XG4gIHZhciBlc2NhcGVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gbWFwW21hdGNoXTtcbiAgfTtcbiAgLy8gUmVnZXhlcyBmb3IgaWRlbnRpZnlpbmcgYSBrZXkgdGhhdCBuZWVkcyB0byBiZSBlc2NhcGVkLlxuICB2YXIgc291cmNlID0gJyg/OicgKyBrZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICB2YXIgdGVzdFJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UpO1xuICB2YXIgcmVwbGFjZVJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UsICdnJyk7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XG4gICAgcmV0dXJuIHRlc3RSZWdleHAudGVzdChzdHJpbmcpID8gc3RyaW5nLnJlcGxhY2UocmVwbGFjZVJlZ2V4cCwgZXNjYXBlcikgOiBzdHJpbmc7XG4gIH07XG59XG4iLCJpbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5pbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBpc05hTiBmcm9tICcuL2lzTmFOLmpzJztcblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGBfLmluZGV4T2ZgIGFuZCBgXy5sYXN0SW5kZXhPZmAgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSW5kZXhGaW5kZXIoZGlyLCBwcmVkaWNhdGVGaW5kLCBzb3J0ZWRJbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGlkeCkge1xuICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICBpZiAodHlwZW9mIGlkeCA9PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGRpciA+IDApIHtcbiAgICAgICAgaSA9IGlkeCA+PSAwID8gaWR4IDogTWF0aC5tYXgoaWR4ICsgbGVuZ3RoLCBpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbmd0aCA9IGlkeCA+PSAwID8gTWF0aC5taW4oaWR4ICsgMSwgbGVuZ3RoKSA6IGlkeCArIGxlbmd0aCArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzb3J0ZWRJbmRleCAmJiBpZHggJiYgbGVuZ3RoKSB7XG4gICAgICBpZHggPSBzb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICByZXR1cm4gYXJyYXlbaWR4XSA9PT0gaXRlbSA/IGlkeCA6IC0xO1xuICAgIH1cbiAgICBpZiAoaXRlbSAhPT0gaXRlbSkge1xuICAgICAgaWR4ID0gcHJlZGljYXRlRmluZChzbGljZS5jYWxsKGFycmF5LCBpLCBsZW5ndGgpLCBpc05hTik7XG4gICAgICByZXR1cm4gaWR4ID49IDAgPyBpZHggKyBpIDogLTE7XG4gICAgfVxuICAgIGZvciAoaWR4ID0gZGlyID4gMCA/IGkgOiBsZW5ndGggLSAxOyBpZHggPj0gMCAmJiBpZHggPCBsZW5ndGg7IGlkeCArPSBkaXIpIHtcbiAgICAgIGlmIChhcnJheVtpZHhdID09PSBpdGVtKSByZXR1cm4gaWR4O1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH07XG59XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuXG4vLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKGRpcikge1xuICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgdmFyIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfTtcbn1cbiIsImltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuaW1wb3J0IG9wdGltaXplQ2IgZnJvbSAnLi9fb3B0aW1pemVDYi5qcyc7XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBjcmVhdGUgYSByZWR1Y2luZyBmdW5jdGlvbiwgaXRlcmF0aW5nIGxlZnQgb3IgcmlnaHQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2UoZGlyKSB7XG4gIC8vIFdyYXAgY29kZSB0aGF0IHJlYXNzaWducyBhcmd1bWVudCB2YXJpYWJsZXMgaW4gYSBzZXBhcmF0ZSBmdW5jdGlvbiB0aGFuXG4gIC8vIHRoZSBvbmUgdGhhdCBhY2Nlc3NlcyBgYXJndW1lbnRzLmxlbmd0aGAgdG8gYXZvaWQgYSBwZXJmIGhpdC4gKCMxOTkxKVxuICB2YXIgcmVkdWNlciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGluaXRpYWwpIHtcbiAgICB2YXIgX2tleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBrZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChfa2V5cyB8fCBvYmopLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICBtZW1vID0gb2JqW19rZXlzID8gX2tleXNbaW5kZXhdIDogaW5kZXhdO1xuICAgICAgaW5kZXggKz0gZGlyO1xuICAgIH1cbiAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IF9rZXlzID8gX2tleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBtZW1vID0gaXRlcmF0ZWUobWVtbywgb2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+PSAzO1xuICAgIHJldHVybiByZWR1Y2VyKG9iaiwgb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgNCksIG1lbW8sIGluaXRpYWwpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgTUFYX0FSUkFZX0lOREVYIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBDb21tb24gaW50ZXJuYWwgbG9naWMgZm9yIGBpc0FycmF5TGlrZWAgYW5kIGBpc0J1ZmZlckxpa2VgLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2soZ2V0U2l6ZVByb3BlcnR5KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdmFyIHNpemVQcm9wZXJ0eSA9IGdldFNpemVQcm9wZXJ0eShjb2xsZWN0aW9uKTtcbiAgICByZXR1cm4gdHlwZW9mIHNpemVQcm9wZXJ0eSA9PSAnbnVtYmVyJyAmJiBzaXplUHJvcGVydHkgPj0gMCAmJiBzaXplUHJvcGVydHkgPD0gTUFYX0FSUkFZX0lOREVYO1xuICB9XG59XG4iLCIvLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBvYnRhaW4gYSBuZXN0ZWQgcHJvcGVydHkgaW4gYG9iamAgYWxvbmcgYHBhdGhgLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVlcEdldChvYmosIHBhdGgpIHtcbiAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgfVxuICByZXR1cm4gbGVuZ3RoID8gb2JqIDogdm9pZCAwO1xufVxuIiwiLy8gSW50ZXJuYWwgbGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjeDI3OycsXG4gICdgJzogJyYjeDYwOydcbn07XG4iLCJpbXBvcnQgYmFzZUNyZWF0ZSBmcm9tICcuL19iYXNlQ3JlYXRlLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZXhlY3V0ZSBgc291cmNlRnVuY2AgYm91bmQgdG8gYGNvbnRleHRgIHdpdGggb3B0aW9uYWxcbi8vIGBhcmdzYC4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yIG9yIGFzIGFcbi8vIG5vcm1hbCBmdW5jdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4ZWN1dGVCb3VuZChzb3VyY2VGdW5jLCBib3VuZEZ1bmMsIGNvbnRleHQsIGNhbGxpbmdDb250ZXh0LCBhcmdzKSB7XG4gIGlmICghKGNhbGxpbmdDb250ZXh0IGluc3RhbmNlb2YgYm91bmRGdW5jKSkgcmV0dXJuIHNvdXJjZUZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIHZhciBzZWxmID0gYmFzZUNyZWF0ZShzb3VyY2VGdW5jLnByb3RvdHlwZSk7XG4gIHZhciByZXN1bHQgPSBzb3VyY2VGdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICBpZiAoaXNPYmplY3QocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgcmV0dXJuIHNlbGY7XG59XG4iLCJpbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcblxuLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxhdHRlbihpbnB1dCwgZGVwdGgsIHN0cmljdCwgb3V0cHV0KSB7XG4gIG91dHB1dCA9IG91dHB1dCB8fCBbXTtcbiAgaWYgKCFkZXB0aCAmJiBkZXB0aCAhPT0gMCkge1xuICAgIGRlcHRoID0gSW5maW5pdHk7XG4gIH0gZWxzZSBpZiAoZGVwdGggPD0gMCkge1xuICAgIHJldHVybiBvdXRwdXQuY29uY2F0KGlucHV0KTtcbiAgfVxuICB2YXIgaWR4ID0gb3V0cHV0Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChpbnB1dCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IGlucHV0W2ldO1xuICAgIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiYgKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICAgIC8vIEZsYXR0ZW4gY3VycmVudCBsZXZlbCBvZiBhcnJheSBvciBhcmd1bWVudHMgb2JqZWN0LlxuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICBmbGF0dGVuKHZhbHVlLCBkZXB0aCAtIDEsIHN0cmljdCwgb3V0cHV0KTtcbiAgICAgICAgaWR4ID0gb3V0cHV0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBqID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaiA8IGxlbikgb3V0cHV0W2lkeCsrXSA9IHZhbHVlW2orK107XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghc3RyaWN0KSB7XG4gICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG4iLCJpbXBvcnQgc2hhbGxvd1Byb3BlcnR5IGZyb20gJy4vX3NoYWxsb3dQcm9wZXJ0eS5qcyc7XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBvYnRhaW4gdGhlIGBieXRlTGVuZ3RoYCBwcm9wZXJ0eSBvZiBhbiBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBzaGFsbG93UHJvcGVydHkoJ2J5dGVMZW5ndGgnKTtcbiIsImltcG9ydCBzaGFsbG93UHJvcGVydHkgZnJvbSAnLi9fc2hhbGxvd1Byb3BlcnR5LmpzJztcblxuLy8gSW50ZXJuYWwgaGVscGVyIHRvIG9idGFpbiB0aGUgYGxlbmd0aGAgcHJvcGVydHkgb2YgYW4gb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgc2hhbGxvd1Byb3BlcnR5KCdsZW5ndGgnKTtcbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2guanMnO1xuXG4vLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB1c2VkIGZvciBhZ2dyZWdhdGUgXCJncm91cCBieVwiIG9wZXJhdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncm91cChiZWhhdmlvciwgcGFydGl0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHBhcnRpdGlvbiA/IFtbXSwgW11dIDoge307XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgdmFyIGtleSA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgIGJlaGF2aW9yKHJlc3VsdCwgdmFsdWUsIGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGhhc093blByb3BlcnR5IH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBjaGVjayB3aGV0aGVyIGBrZXlgIGlzIGFuIG93biBwcm9wZXJ0eSBuYW1lIG9mIGBvYmpgLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzKG9iaiwga2V5KSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgdGFnVGVzdGVyKCdPYmplY3QnKTtcbiIsImltcG9ydCBjcmVhdGVTaXplUHJvcGVydHlDaGVjayBmcm9tICcuL19jcmVhdGVTaXplUHJvcGVydHlDaGVjay5qcyc7XG5pbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5cbi8vIEludGVybmFsIGhlbHBlciBmb3IgY29sbGVjdGlvbiBtZXRob2RzIHRvIGRldGVybWluZSB3aGV0aGVyIGEgY29sbGVjdGlvblxuLy8gc2hvdWxkIGJlIGl0ZXJhdGVkIGFzIGFuIGFycmF5IG9yIGFzIGFuIG9iamVjdC5cbi8vIFJlbGF0ZWQ6IGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuLy8gQXZvaWRzIGEgdmVyeSBuYXN0eSBpT1MgOCBKSVQgYnVnIG9uIEFSTS02NC4gIzIwOTRcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrKGdldExlbmd0aCk7XG4iLCJpbXBvcnQgY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2sgZnJvbSAnLi9fY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2suanMnO1xuaW1wb3J0IGdldEJ5dGVMZW5ndGggZnJvbSAnLi9fZ2V0Qnl0ZUxlbmd0aC5qcyc7XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBkZXRlcm1pbmUgd2hldGhlciB3ZSBzaG91bGQgc3BlbmQgZXh0ZW5zaXZlIGNoZWNrcyBhZ2FpbnN0XG4vLyBgQXJyYXlCdWZmZXJgIGV0IGFsLlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2soZ2V0Qnl0ZUxlbmd0aCk7XG4iLCIvLyBJbnRlcm5hbCBgXy5waWNrYCBoZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYGtleWAgaXMgYW4gZW51bWVyYWJsZVxuLy8gcHJvcGVydHkgbmFtZSBvZiBgb2JqYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleUluT2JqKHZhbHVlLCBrZXksIG9iaikge1xuICByZXR1cm4ga2V5IGluIG9iajtcbn1cbiIsImltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgYWxsS2V5cyBmcm9tICcuL2FsbEtleXMuanMnO1xuXG4vLyBTaW5jZSB0aGUgcmVndWxhciBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgdHlwZSB0ZXN0cyBkb24ndCB3b3JrIGZvclxuLy8gc29tZSB0eXBlcyBpbiBJRSAxMSwgd2UgdXNlIGEgZmluZ2VycHJpbnRpbmcgaGV1cmlzdGljIGluc3RlYWQsIGJhc2VkXG4vLyBvbiB0aGUgbWV0aG9kcy4gSXQncyBub3QgZ3JlYXQsIGJ1dCBpdCdzIHRoZSBiZXN0IHdlIGdvdC5cbi8vIFRoZSBmaW5nZXJwcmludCBtZXRob2QgbGlzdHMgYXJlIGRlZmluZWQgYmVsb3cuXG5leHBvcnQgZnVuY3Rpb24gaWUxMWZpbmdlcnByaW50KG1ldGhvZHMpIHtcbiAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChtZXRob2RzKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGBNYXBgLCBgV2Vha01hcGAgYW5kIGBTZXRgIGhhdmUgbm8gZW51bWVyYWJsZSBrZXlzLlxuICAgIHZhciBrZXlzID0gYWxsS2V5cyhvYmopO1xuICAgIGlmIChnZXRMZW5ndGgoa2V5cykpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWlzRnVuY3Rpb24ob2JqW21ldGhvZHNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBJZiB3ZSBhcmUgdGVzdGluZyBhZ2FpbnN0IGBXZWFrTWFwYCwgd2UgbmVlZCB0byBlbnN1cmUgdGhhdFxuICAgIC8vIGBvYmpgIGRvZXNuJ3QgaGF2ZSBhIGBmb3JFYWNoYCBtZXRob2QgaW4gb3JkZXIgdG8gZGlzdGluZ3Vpc2hcbiAgICAvLyBpdCBmcm9tIGEgcmVndWxhciBgTWFwYC5cbiAgICByZXR1cm4gbWV0aG9kcyAhPT0gd2Vha01hcE1ldGhvZHMgfHwgIWlzRnVuY3Rpb24ob2JqW2ZvckVhY2hOYW1lXSk7XG4gIH07XG59XG5cbi8vIEluIHRoZSBpbnRlcmVzdCBvZiBjb21wYWN0IG1pbmlmaWNhdGlvbiwgd2Ugd3JpdGVcbi8vIGVhY2ggc3RyaW5nIGluIHRoZSBmaW5nZXJwcmludHMgb25seSBvbmNlLlxudmFyIGZvckVhY2hOYW1lID0gJ2ZvckVhY2gnLFxuICAgIGhhc05hbWUgPSAnaGFzJyxcbiAgICBjb21tb25Jbml0ID0gWydjbGVhcicsICdkZWxldGUnXSxcbiAgICBtYXBUYWlsID0gWydnZXQnLCBoYXNOYW1lLCAnc2V0J107XG5cbi8vIGBNYXBgLCBgV2Vha01hcGAgYW5kIGBTZXRgIGVhY2ggaGF2ZSBzbGlnaHRseSBkaWZmZXJlbnRcbi8vIGNvbWJpbmF0aW9ucyBvZiB0aGUgYWJvdmUgc3VibGlzdHMuXG5leHBvcnQgdmFyIG1hcE1ldGhvZHMgPSBjb21tb25Jbml0LmNvbmNhdChmb3JFYWNoTmFtZSwgbWFwVGFpbCksXG4gICAgd2Vha01hcE1ldGhvZHMgPSBjb21tb25Jbml0LmNvbmNhdChtYXBUYWlsKSxcbiAgICBzZXRNZXRob2RzID0gWydhZGQnXS5jb25jYXQoY29tbW9uSW5pdCwgZm9yRWFjaE5hbWUsIGhhc05hbWUpO1xuIiwiLy8gSW50ZXJuYWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVmZmljaWVudCAoZm9yIGN1cnJlbnQgZW5naW5lcykgdmVyc2lvblxuLy8gb2YgdGhlIHBhc3NlZC1pbiBjYWxsYmFjaywgdG8gYmUgcmVwZWF0ZWRseSBhcHBsaWVkIGluIG90aGVyIFVuZGVyc2NvcmVcbi8vIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGltaXplQ2IoZnVuYywgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgcmV0dXJuIGZ1bmM7XG4gIHN3aXRjaCAoYXJnQ291bnQgPT0gbnVsbCA/IDMgOiBhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIFRoZSAyLWFyZ3VtZW50IGNhc2UgaXMgb21pdHRlZCBiZWNhdXNlIHdl4oCZcmUgbm90IHVzaW5nIGl0LlxuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuIiwiLy8gQ3VycmVudCB2ZXJzaW9uLlxuZXhwb3J0IHZhciBWRVJTSU9OID0gJzEuMTMuNic7XG5cbi8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIChgc2VsZmApIGluIHRoZSBicm93c2VyLCBgZ2xvYmFsYFxuLy8gb24gdGhlIHNlcnZlciwgb3IgYHRoaXNgIGluIHNvbWUgdmlydHVhbCBtYWNoaW5lcy4gV2UgdXNlIGBzZWxmYFxuLy8gaW5zdGVhZCBvZiBgd2luZG93YCBmb3IgYFdlYldvcmtlcmAgc3VwcG9ydC5cbmV4cG9ydCB2YXIgcm9vdCA9ICh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGYgJiYgc2VsZikgfHxcbiAgICAgICAgICAodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCkgfHxcbiAgICAgICAgICB7fTtcblxuLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbmV4cG9ydCB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuZXhwb3J0IHZhciBTeW1ib2xQcm90byA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sLnByb3RvdHlwZSA6IG51bGw7XG5cbi8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuZXhwb3J0IHZhciBwdXNoID0gQXJyYXlQcm90by5wdXNoLFxuICAgIHNsaWNlID0gQXJyYXlQcm90by5zbGljZSxcbiAgICB0b1N0cmluZyA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8vIE1vZGVybiBmZWF0dXJlIGRldGVjdGlvbi5cbmV4cG9ydCB2YXIgc3VwcG9ydHNBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgc3VwcG9ydHNEYXRhVmlldyA9IHR5cGVvZiBEYXRhVmlldyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIEFsbCAqKkVDTUFTY3JpcHQgNSsqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2Vcbi8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuZXhwb3J0IHZhciBuYXRpdmVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgICBuYXRpdmVLZXlzID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQ3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBuYXRpdmVJc1ZpZXcgPSBzdXBwb3J0c0FycmF5QnVmZmVyICYmIEFycmF5QnVmZmVyLmlzVmlldztcblxuLy8gQ3JlYXRlIHJlZmVyZW5jZXMgdG8gdGhlc2UgYnVpbHRpbiBmdW5jdGlvbnMgYmVjYXVzZSB3ZSBvdmVycmlkZSB0aGVtLlxuZXhwb3J0IHZhciBfaXNOYU4gPSBpc05hTixcbiAgICBfaXNGaW5pdGUgPSBpc0Zpbml0ZTtcblxuLy8gS2V5cyBpbiBJRSA8IDkgdGhhdCB3b24ndCBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC5cbmV4cG9ydCB2YXIgaGFzRW51bUJ1ZyA9ICF7dG9TdHJpbmc6IG51bGx9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xuZXhwb3J0IHZhciBub25FbnVtZXJhYmxlUHJvcHMgPSBbJ3ZhbHVlT2YnLCAnaXNQcm90b3R5cGVPZicsICd0b1N0cmluZycsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuXG4vLyBUaGUgbGFyZ2VzdCBpbnRlZ2VyIHRoYXQgY2FuIGJlIHJlcHJlc2VudGVkIGV4YWN0bHkuXG5leHBvcnQgdmFyIE1BWF9BUlJBWV9JTkRFWCA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4iLCIvLyBJbnRlcm5hbCBoZWxwZXIgdG8gZ2VuZXJhdGUgYSBmdW5jdGlvbiB0byBvYnRhaW4gcHJvcGVydHkgYGtleWAgZnJvbSBgb2JqYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYWxsb3dQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtrZXldO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgc3VwcG9ydHNEYXRhVmlldyB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBoYXNPYmplY3RUYWcgZnJvbSAnLi9faGFzT2JqZWN0VGFnLmpzJztcblxuLy8gSW4gSUUgMTAgLSBFZGdlIDEzLCBgRGF0YVZpZXdgIGhhcyBzdHJpbmcgdGFnIGAnW29iamVjdCBPYmplY3RdJ2AuXG4vLyBJbiBJRSAxMSwgdGhlIG1vc3QgY29tbW9uIGFtb25nIHRoZW0sIHRoaXMgcHJvYmxlbSBhbHNvIGFwcGxpZXMgdG9cbi8vIGBNYXBgLCBgV2Vha01hcGAgYW5kIGBTZXRgLlxuZXhwb3J0IHZhciBoYXNTdHJpbmdUYWdCdWcgPSAoXG4gICAgICBzdXBwb3J0c0RhdGFWaWV3ICYmIGhhc09iamVjdFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDgpKSlcbiAgICApLFxuICAgIGlzSUUxMSA9ICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJyAmJiBoYXNPYmplY3RUYWcobmV3IE1hcCkpO1xuIiwiaW1wb3J0IHsgdG9TdHJpbmcgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5cbi8vIEludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIGB0b1N0cmluZ2AtYmFzZWQgdHlwZSB0ZXN0ZXIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWdUZXN0ZXIobmFtZSkge1xuICB2YXIgdGFnID0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSB0YWc7XG4gIH07XG59XG4iLCJpbXBvcnQgZ2V0Qnl0ZUxlbmd0aCBmcm9tICcuL19nZXRCeXRlTGVuZ3RoLmpzJztcblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gd3JhcCBvciBzaGFsbG93LWNvcHkgYW4gQXJyYXlCdWZmZXIsXG4vLyB0eXBlZCBhcnJheSBvciBEYXRhVmlldyB0byBhIG5ldyB2aWV3LCByZXVzaW5nIHRoZSBidWZmZXIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0J1ZmZlclZpZXcoYnVmZmVyU291cmNlKSB7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShcbiAgICBidWZmZXJTb3VyY2UuYnVmZmVyIHx8IGJ1ZmZlclNvdXJjZSxcbiAgICBidWZmZXJTb3VyY2UuYnl0ZU9mZnNldCB8fCAwLFxuICAgIGdldEJ5dGVMZW5ndGgoYnVmZmVyU291cmNlKVxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcbmltcG9ydCAnLi90b1BhdGguanMnO1xuXG4vLyBJbnRlcm5hbCB3cmFwcGVyIGZvciBgXy50b1BhdGhgIHRvIGVuYWJsZSBtaW5pZmljYXRpb24uXG4vLyBTaW1pbGFyIHRvIGBjYmAgZm9yIGBfLml0ZXJhdGVlYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvUGF0aChwYXRoKSB7XG4gIHJldHVybiBfLnRvUGF0aChwYXRoKTtcbn1cbiIsImltcG9ydCBpbnZlcnQgZnJvbSAnLi9pbnZlcnQuanMnO1xuaW1wb3J0IGVzY2FwZU1hcCBmcm9tICcuL19lc2NhcGVNYXAuanMnO1xuXG4vLyBJbnRlcm5hbCBsaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIHVuZXNjYXBpbmcuXG5leHBvcnQgZGVmYXVsdCBpbnZlcnQoZXNjYXBlTWFwKTtcbiIsIi8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBvbiBhbmQgYWZ0ZXIgdGhlIE50aCBjYWxsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWZ0ZXIodGltZXMsIGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgeyBoYXNFbnVtQnVnIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGNvbGxlY3ROb25FbnVtUHJvcHMgZnJvbSAnLi9fY29sbGVjdE5vbkVudW1Qcm9wcy5qcyc7XG5cbi8vIFJldHJpZXZlIGFsbCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGxLZXlzKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIC8vIEFoZW0sIElFIDwgOS5cbiAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgcmV0dXJuIGtleXM7XG59XG4iLCIvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgdXAgdG8gKGJ1dCBub3QgaW5jbHVkaW5nKSB0aGVcbi8vIE50aCBjYWxsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmVmb3JlKHRpbWVzLCBmdW5jKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKC0tdGltZXMgPiAwKSB7XG4gICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBpZiAodGltZXMgPD0gMSkgZnVuYyA9IG51bGw7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmltcG9ydCBleGVjdXRlQm91bmQgZnJvbSAnLi9fZXhlY3V0ZUJvdW5kLmpzJztcblxuLy8gQ3JlYXRlIGEgZnVuY3Rpb24gYm91bmQgdG8gYSBnaXZlbiBvYmplY3QgKGFzc2lnbmluZyBgdGhpc2AsIGFuZCBhcmd1bWVudHMsXG4vLyBvcHRpb25hbGx5KS5cbmV4cG9ydCBkZWZhdWx0IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgY29udGV4dCwgYXJncykge1xuICBpZiAoIWlzRnVuY3Rpb24oZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JpbmQgbXVzdCBiZSBjYWxsZWQgb24gYSBmdW5jdGlvbicpO1xuICB2YXIgYm91bmQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGNhbGxBcmdzKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgY29udGV4dCwgdGhpcywgYXJncy5jb25jYXQoY2FsbEFyZ3MpKTtcbiAgfSk7XG4gIHJldHVybiBib3VuZDtcbn0pO1xuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJy4vX2ZsYXR0ZW4uanMnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9iaW5kLmpzJztcblxuLy8gQmluZCBhIG51bWJlciBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBSZW1haW5pbmcgYXJndW1lbnRzXG4vLyBhcmUgdGhlIG1ldGhvZCBuYW1lcyB0byBiZSBib3VuZC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0IGFsbCBjYWxsYmFja3Ncbi8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbmV4cG9ydCBkZWZhdWx0IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGtleXMgPSBmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSk7XG4gIHZhciBpbmRleCA9IGtleXMubGVuZ3RoO1xuICBpZiAoaW5kZXggPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBbGwgbXVzdCBiZSBwYXNzZWQgZnVuY3Rpb24gbmFtZXMnKTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgb2JqW2tleV0gPSBiaW5kKG9ialtrZXldLCBvYmopO1xuICB9XG4gIHJldHVybiBvYmo7XG59KTtcbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5cbi8vIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYWluKG9iaikge1xuICB2YXIgaW5zdGFuY2UgPSBfKG9iaik7XG4gIGluc3RhbmNlLl9jaGFpbiA9IHRydWU7XG4gIHJldHVybiBpbnN0YW5jZTtcbn1cbiIsImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBDaHVuayBhIHNpbmdsZSBhcnJheSBpbnRvIG11bHRpcGxlIGFycmF5cywgZWFjaCBjb250YWluaW5nIGBjb3VudGAgb3IgZmV3ZXJcbi8vIGl0ZW1zLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2h1bmsoYXJyYXksIGNvdW50KSB7XG4gIGlmIChjb3VudCA9PSBudWxsIHx8IGNvdW50IDwgMSkgcmV0dXJuIFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgIHJlc3VsdC5wdXNoKHNsaWNlLmNhbGwoYXJyYXksIGksIGkgKz0gY291bnQpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi9leHRlbmQuanMnO1xuXG4vLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICByZXR1cm4gaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBleHRlbmQoe30sIG9iaik7XG59XG4iLCJpbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyLmpzJztcblxuLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFjdChhcnJheSkge1xuICByZXR1cm4gZmlsdGVyKGFycmF5LCBCb29sZWFuKTtcbn1cbiIsIi8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4vLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBzdGFydCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBpID0gc3RhcnQ7XG4gICAgdmFyIHJlc3VsdCA9IGFyZ3Nbc3RhcnRdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgd2hpbGUgKGktLSkgcmVzdWx0ID0gYXJnc1tpXS5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbiIsIi8vIFByZWRpY2F0ZS1nZW5lcmF0aW5nIGZ1bmN0aW9uLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cbiIsImltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQgdmFsdWVzIGZyb20gJy4vdmFsdWVzLmpzJztcbmltcG9ydCBpbmRleE9mIGZyb20gJy4vaW5kZXhPZi5qcyc7XG5cbi8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gaXRlbSAodXNpbmcgYD09PWApLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMob2JqLCBpdGVtLCBmcm9tSW5kZXgsIGd1YXJkKSB7XG4gIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gdmFsdWVzKG9iaik7XG4gIGlmICh0eXBlb2YgZnJvbUluZGV4ICE9ICdudW1iZXInIHx8IGd1YXJkKSBmcm9tSW5kZXggPSAwO1xuICByZXR1cm4gaW5kZXhPZihvYmosIGl0ZW0sIGZyb21JbmRleCkgPj0gMDtcbn1cbiIsImltcG9ydCBncm91cCBmcm9tICcuL19ncm91cC5qcyc7XG5pbXBvcnQgaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5cbi8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4vLyBjcml0ZXJpb24uXG5leHBvcnQgZGVmYXVsdCBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgaWYgKGhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xufSk7XG4iLCJpbXBvcnQgYmFzZUNyZWF0ZSBmcm9tICcuL19iYXNlQ3JlYXRlLmpzJztcbmltcG9ydCBleHRlbmRPd24gZnJvbSAnLi9leHRlbmRPd24uanMnO1xuXG4vLyBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhlIGdpdmVuIHByb3RvdHlwZSBvYmplY3QuXG4vLyBJZiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYXJlIHByb3ZpZGVkIHRoZW4gdGhleSB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gY3JlYXRlZCBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGUocHJvdG90eXBlLCBwcm9wcykge1xuICB2YXIgcmVzdWx0ID0gYmFzZUNyZWF0ZShwcm90b3R5cGUpO1xuICBpZiAocHJvcHMpIGV4dGVuZE93bihyZXN1bHQsIHByb3BzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgbm93IGZyb20gJy4vbm93LmpzJztcblxuLy8gV2hlbiBhIHNlcXVlbmNlIG9mIGNhbGxzIG9mIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBlbmRzLCB0aGUgYXJndW1lbnRcbi8vIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZC4gVGhlIGVuZCBvZiBhIHNlcXVlbmNlIGlzIGRlZmluZWQgYnkgdGhlIGB3YWl0YFxuLy8gcGFyYW1ldGVyLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRoZSBhcmd1bWVudCBmdW5jdGlvbiB3aWxsIGJlXG4vLyB0cmlnZ2VyZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc2VxdWVuY2UgaW5zdGVhZCBvZiBhdCB0aGUgZW5kLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIHZhciB0aW1lb3V0LCBwcmV2aW91cywgYXJncywgcmVzdWx0LCBjb250ZXh0O1xuXG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYXNzZWQgPSBub3coKSAtIHByZXZpb3VzO1xuICAgIGlmICh3YWl0ID4gcGFzc2VkKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIHBhc3NlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCBiZWNhdXNlIGBmdW5jYCBjYW4gcmVjdXJzaXZlbHkgaW52b2tlIGBkZWJvdW5jZWRgLlxuICAgICAgaWYgKCF0aW1lb3V0KSBhcmdzID0gY29udGV4dCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHZhciBkZWJvdW5jZWQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKF9hcmdzKSB7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IF9hcmdzO1xuICAgIHByZXZpb3VzID0gbm93KCk7XG4gICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICBpZiAoaW1tZWRpYXRlKSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcblxuICBkZWJvdW5jZWQuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBhcmdzID0gY29udGV4dCA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cbiIsImltcG9ydCBjcmVhdGVBc3NpZ25lciBmcm9tICcuL19jcmVhdGVBc3NpZ25lci5qcyc7XG5pbXBvcnQgYWxsS2V5cyBmcm9tICcuL2FsbEtleXMuanMnO1xuXG4vLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXNzaWduZXIoYWxsS2V5cywgdHJ1ZSk7XG4iLCJpbXBvcnQgcGFydGlhbCBmcm9tICcuL3BhcnRpYWwuanMnO1xuaW1wb3J0IGRlbGF5IGZyb20gJy4vZGVsYXkuanMnO1xuaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcblxuLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4vLyBjbGVhcmVkLlxuZXhwb3J0IGRlZmF1bHQgcGFydGlhbChkZWxheSwgXywgMSk7XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuXG4vLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4vLyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgc3VwcGxpZWQuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGFyZ3MpIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gIH0sIHdhaXQpO1xufSk7XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IGZsYXR0ZW4gZnJvbSAnLi9fZmxhdHRlbi5qcyc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyLmpzJztcbmltcG9ydCBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zLmpzJztcblxuLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbmV4cG9ydCBkZWZhdWx0IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXksIHJlc3QpIHtcbiAgcmVzdCA9IGZsYXR0ZW4ocmVzdCwgdHJ1ZSwgdHJ1ZSk7XG4gIHJldHVybiBmaWx0ZXIoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICByZXR1cm4gIWNvbnRhaW5zKHJlc3QsIHZhbHVlKTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCBvcHRpbWl6ZUNiIGZyb20gJy4vX29wdGltaXplQ2IuanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIFRoZSBjb3JuZXJzdG9uZSBmb3IgY29sbGVjdGlvbiBmdW5jdGlvbnMsIGFuIGBlYWNoYFxuLy8gaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4vLyBIYW5kbGVzIHJhdyBvYmplY3RzIGluIGFkZGl0aW9uIHRvIGFycmF5LWxpa2VzLiBUcmVhdHMgYWxsXG4vLyBzcGFyc2UgYXJyYXktbGlrZXMgYXMgaWYgdGhleSB3ZXJlIGRlbnNlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWFjaChvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCk7XG4gIHZhciBpLCBsZW5ndGg7XG4gIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVyYXRlZShvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBfa2V5cyA9IGtleXMob2JqKTtcbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBfa2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaXRlcmF0ZWUob2JqW19rZXlzW2ldXSwgX2tleXNbaV0sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG4iLCJpbXBvcnQgY3JlYXRlRXNjYXBlciBmcm9tICcuL19jcmVhdGVFc2NhcGVyLmpzJztcbmltcG9ydCBlc2NhcGVNYXAgZnJvbSAnLi9fZXNjYXBlTWFwLmpzJztcblxuLy8gRnVuY3Rpb24gZm9yIGVzY2FwaW5nIHN0cmluZ3MgdG8gSFRNTCBpbnRlcnBvbGF0aW9uLlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIHBhc3MgYSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlcnkob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgdmFyIF9rZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYga2V5cyhvYmopLFxuICAgICAgbGVuZ3RoID0gKF9rZXlzIHx8IG9iaikubGVuZ3RoO1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGN1cnJlbnRLZXkgPSBfa2V5cyA/IF9rZXlzW2luZGV4XSA6IGluZGV4O1xuICAgIGlmICghcHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUFzc2lnbmVyIGZyb20gJy4vX2NyZWF0ZUFzc2lnbmVyLmpzJztcbmltcG9ydCBhbGxLZXlzIGZyb20gJy4vYWxsS2V5cy5qcyc7XG5cbi8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXNzaWduZXIoYWxsS2V5cyk7XG4iLCJpbXBvcnQgY3JlYXRlQXNzaWduZXIgZnJvbSAnLi9fY3JlYXRlQXNzaWduZXIuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gQXNzaWducyBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgb3duIHByb3BlcnRpZXMgaW4gdGhlIHBhc3NlZC1pblxuLy8gb2JqZWN0KHMpLlxuLy8gKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24pXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBc3NpZ25lcihrZXlzKTtcbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2guanMnO1xuXG4vLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHZhciByZXN1bHRzID0gW107XG4gIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0cztcbn1cbiIsImltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQgZmluZEluZGV4IGZyb20gJy4vZmluZEluZGV4LmpzJztcbmltcG9ydCBmaW5kS2V5IGZyb20gJy4vZmluZEtleS5qcyc7XG5cbi8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmQob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgdmFyIGtleUZpbmRlciA9IGlzQXJyYXlMaWtlKG9iaikgPyBmaW5kSW5kZXggOiBmaW5kS2V5O1xuICB2YXIga2V5ID0ga2V5RmluZGVyKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgaWYgKGtleSAhPT0gdm9pZCAwICYmIGtleSAhPT0gLTEpIHJldHVybiBvYmpba2V5XTtcbn1cbiIsImltcG9ydCBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlciBmcm9tICcuL19jcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlci5qcyc7XG5cbi8vIFJldHVybnMgdGhlIGZpcnN0IGluZGV4IG9uIGFuIGFycmF5LWxpa2UgdGhhdCBwYXNzZXMgYSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoMSk7XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gUmV0dXJucyB0aGUgZmlyc3Qga2V5IG9uIGFuIG9iamVjdCB0aGF0IHBhc3NlcyBhIHRydXRoIHRlc3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kS2V5KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKSwga2V5O1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gX2tleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBfa2V5c1tpXTtcbiAgICBpZiAocHJlZGljYXRlKG9ialtrZXldLCBrZXksIG9iaikpIHJldHVybiBrZXk7XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlciBmcm9tICcuL19jcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlci5qcyc7XG5cbi8vIFJldHVybnMgdGhlIGxhc3QgaW5kZXggb24gYW4gYXJyYXktbGlrZSB0aGF0IHBhc3NlcyBhIHRydXRoIHRlc3QuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigtMSk7XG4iLCJpbXBvcnQgZmluZCBmcm9tICcuL2ZpbmQuanMnO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSAnLi9tYXRjaGVyLmpzJztcblxuLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgXy5maW5kYDogZ2V0dGluZyB0aGUgZmlyc3Rcbi8vIG9iamVjdCBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZFdoZXJlKG9iaiwgYXR0cnMpIHtcbiAgcmV0dXJuIGZpbmQob2JqLCBtYXRjaGVyKGF0dHJzKSk7XG59XG4iLCJpbXBvcnQgaW5pdGlhbCBmcm9tICcuL2luaXRpYWwuanMnO1xuXG4vLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbi8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlyc3QoYXJyYXksIG4sIGd1YXJkKSB7XG4gIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBuID09IG51bGwgfHwgZ3VhcmQgPyB2b2lkIDAgOiBbXTtcbiAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkgcmV0dXJuIGFycmF5WzBdO1xuICByZXR1cm4gaW5pdGlhbChhcnJheSwgYXJyYXkubGVuZ3RoIC0gbik7XG59XG4iLCJpbXBvcnQgX2ZsYXR0ZW4gZnJvbSAnLi9fZmxhdHRlbi5qcyc7XG5cbi8vIEZsYXR0ZW4gb3V0IGFuIGFycmF5LCBlaXRoZXIgcmVjdXJzaXZlbHkgKGJ5IGRlZmF1bHQpLCBvciB1cCB0byBgZGVwdGhgLlxuLy8gUGFzc2luZyBgdHJ1ZWAgb3IgYGZhbHNlYCBhcyBgZGVwdGhgIG1lYW5zIGAxYCBvciBgSW5maW5pdHlgLCByZXNwZWN0aXZlbHkuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5LCBkZXB0aCkge1xuICByZXR1cm4gX2ZsYXR0ZW4oYXJyYXksIGRlcHRoLCBmYWxzZSk7XG59XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuXG4vLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmdW5jdGlvbnMob2JqKSB7XG4gIHZhciBuYW1lcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbn1cbiIsImltcG9ydCB0b1BhdGggZnJvbSAnLi9fdG9QYXRoLmpzJztcbmltcG9ydCBkZWVwR2V0IGZyb20gJy4vX2RlZXBHZXQuanMnO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJy4vaXNVbmRlZmluZWQuanMnO1xuXG4vLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSAoZGVlcCkgcHJvcGVydHkgb24gYHBhdGhgIGZyb20gYG9iamVjdGAuXG4vLyBJZiBhbnkgcHJvcGVydHkgaW4gYHBhdGhgIGRvZXMgbm90IGV4aXN0IG9yIGlmIHRoZSB2YWx1ZSBpc1xuLy8gYHVuZGVmaW5lZGAsIHJldHVybiBgZGVmYXVsdFZhbHVlYCBpbnN0ZWFkLlxuLy8gVGhlIGBwYXRoYCBpcyBub3JtYWxpemVkIHRocm91Z2ggYF8udG9QYXRoYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgdmFsdWUgPSBkZWVwR2V0KG9iamVjdCwgdG9QYXRoKHBhdGgpKTtcbiAgcmV0dXJuIGlzVW5kZWZpbmVkKHZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xufVxuIiwiaW1wb3J0IGdyb3VwIGZyb20gJy4vX2dyb3VwLmpzJztcbmltcG9ydCBoYXMgZnJvbSAnLi9faGFzLmpzJztcblxuLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG5leHBvcnQgZGVmYXVsdCBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgaWYgKGhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldLnB1c2godmFsdWUpOyBlbHNlIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbn0pO1xuIiwiaW1wb3J0IF9oYXMgZnJvbSAnLi9faGFzLmpzJztcbmltcG9ydCB0b1BhdGggZnJvbSAnLi9fdG9QYXRoLmpzJztcblxuLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseSBvblxuLy8gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS4gVW5saWtlIHRoZSBpbnRlcm5hbCBgaGFzYFxuLy8gZnVuY3Rpb24sIHRoaXMgcHVibGljIHZlcnNpb24gY2FuIGFsc28gdHJhdmVyc2UgbmVzdGVkIHByb3BlcnRpZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXMob2JqLCBwYXRoKSB7XG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBwYXRoW2ldO1xuICAgIGlmICghX2hhcyhvYmosIGtleSkpIHJldHVybiBmYWxzZTtcbiAgICBvYmogPSBvYmpba2V5XTtcbiAgfVxuICByZXR1cm4gISFsZW5ndGg7XG59XG4iLCIvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0ZWVzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwiLy8gRVNNIEV4cG9ydHNcbi8vID09PT09PT09PT09XG4vLyBUaGlzIG1vZHVsZSBpcyB0aGUgcGFja2FnZSBlbnRyeSBwb2ludCBmb3IgRVMgbW9kdWxlIHVzZXJzLiBJbiBvdGhlciB3b3Jkcyxcbi8vIGl0IGlzIHRoZSBtb2R1bGUgdGhleSBhcmUgaW50ZXJmYWNpbmcgd2l0aCB3aGVuIHRoZXkgaW1wb3J0IGZyb20gdGhlIHdob2xlXG4vLyBwYWNrYWdlIGluc3RlYWQgb2YgZnJvbSBhIHN1Ym1vZHVsZSwgbGlrZSB0aGlzOlxuLy9cbi8vIGBgYGpzXG4vLyBpbXBvcnQgeyBtYXAgfSBmcm9tICd1bmRlcnNjb3JlJztcbi8vIGBgYFxuLy9cbi8vIFRoZSBkaWZmZXJlbmNlIHdpdGggYC4vaW5kZXgtZGVmYXVsdGAsIHdoaWNoIGlzIHRoZSBwYWNrYWdlIGVudHJ5IHBvaW50IGZvclxuLy8gQ29tbW9uSlMsIEFNRCBhbmQgVU1EIHVzZXJzLCBpcyBwdXJlbHkgdGVjaG5pY2FsLiBJbiBFUyBtb2R1bGVzLCBuYW1lZCBhbmRcbi8vIGRlZmF1bHQgZXhwb3J0cyBhcmUgY29uc2lkZXJlZCB0byBiZSBzaWJsaW5ncywgc28gd2hlbiB5b3UgaGF2ZSBhIGRlZmF1bHRcbi8vIGV4cG9ydCwgaXRzIHByb3BlcnRpZXMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IGF2YWlsYWJsZSBhcyBuYW1lZCBleHBvcnRzLiBGb3Jcbi8vIHRoaXMgcmVhc29uLCB3ZSByZS1leHBvcnQgdGhlIG5hbWVkIGV4cG9ydHMgaW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHRoZSBzYW1lXG4vLyBkZWZhdWx0IGV4cG9ydCBhcyBpbiBgLi9pbmRleC1kZWZhdWx0YC5cbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2luZGV4LWRlZmF1bHQuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbmRleC5qcyc7XG4iLCIvLyBEZWZhdWx0IEV4cG9ydFxuLy8gPT09PT09PT09PT09PT1cbi8vIEluIHRoaXMgbW9kdWxlLCB3ZSBtaXggb3VyIGJ1bmRsZWQgZXhwb3J0cyBpbnRvIHRoZSBgX2Agb2JqZWN0IGFuZCBleHBvcnRcbi8vIHRoZSByZXN1bHQuIFRoaXMgaXMgYW5hbG9nb3VzIHRvIHNldHRpbmcgYG1vZHVsZS5leHBvcnRzID0gX2AgaW4gQ29tbW9uSlMuXG4vLyBIZW5jZSwgdGhpcyBtb2R1bGUgaXMgYWxzbyB0aGUgZW50cnkgcG9pbnQgb2Ygb3VyIFVNRCBidW5kbGUgYW5kIHRoZSBwYWNrYWdlXG4vLyBlbnRyeSBwb2ludCBmb3IgQ29tbW9uSlMgYW5kIEFNRCB1c2Vycy4gSW4gb3RoZXIgd29yZHMsIHRoaXMgaXMgKHRoZSBzb3VyY2Vcbi8vIG9mKSB0aGUgbW9kdWxlIHlvdSBhcmUgaW50ZXJmYWNpbmcgd2l0aCB3aGVuIHlvdSBkbyBhbnkgb2YgdGhlIGZvbGxvd2luZzpcbi8vXG4vLyBgYGBqc1xuLy8gLy8gQ29tbW9uSlNcbi8vIHZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuLy9cbi8vIC8vIEFNRFxuLy8gZGVmaW5lKFsndW5kZXJzY29yZSddLCBmdW5jdGlvbihfKSB7Li4ufSk7XG4vL1xuLy8gLy8gVU1EIGluIHRoZSBicm93c2VyXG4vLyAvLyBfIGlzIGF2YWlsYWJsZSBhcyBhIGdsb2JhbCB2YXJpYWJsZVxuLy8gYGBgXG5pbXBvcnQgKiBhcyBhbGxFeHBvcnRzIGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgbWl4aW4gfSBmcm9tICcuL2luZGV4LmpzJztcblxuLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxudmFyIF8gPSBtaXhpbihhbGxFeHBvcnRzKTtcbi8vIExlZ2FjeSBOb2RlLmpzIEFQSS5cbl8uXyA9IF87XG4vLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgQVBJLlxuZXhwb3J0IGRlZmF1bHQgXztcbiIsIi8vIE5hbWVkIEV4cG9ydHNcbi8vID09PT09PT09PT09PT1cblxuLy8gICAgIFVuZGVyc2NvcmUuanMgMS4xMy42XG4vLyAgICAgaHR0cHM6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAyMiBKZXJlbXkgQXNoa2VuYXMsIEp1bGlhbiBHb25nZ3JpanAsIGFuZCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4vLyBCYXNlbGluZSBzZXR1cC5cbmV4cG9ydCB7IFZFUlNJT04gfSBmcm9tICcuL19zZXR1cC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3RBcmd1bWVudHMgfSBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuXG4vLyBPYmplY3QgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tXG4vLyBPdXIgbW9zdCBmdW5kYW1lbnRhbCBmdW5jdGlvbnMgb3BlcmF0ZSBvbiBhbnkgSmF2YVNjcmlwdCBvYmplY3QuXG4vLyBNb3N0IGZ1bmN0aW9ucyBpbiBVbmRlcnNjb3JlIGRlcGVuZCBvbiBhdCBsZWFzdCBvbmUgZnVuY3Rpb24gaW4gdGhpcyBzZWN0aW9uLlxuXG4vLyBBIGdyb3VwIG9mIGZ1bmN0aW9ucyB0aGF0IGNoZWNrIHRoZSB0eXBlcyBvZiBjb3JlIEphdmFTY3JpcHQgdmFsdWVzLlxuLy8gVGhlc2UgYXJlIG9mdGVuIGluZm9ybWFsbHkgcmVmZXJyZWQgdG8gYXMgdGhlIFwiaXNUeXBlXCIgZnVuY3Rpb25zLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc09iamVjdCB9IGZyb20gJy4vaXNPYmplY3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bGwgfSBmcm9tICcuL2lzTnVsbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi9pc1VuZGVmaW5lZC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQm9vbGVhbiB9IGZyb20gJy4vaXNCb29sZWFuLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbGVtZW50IH0gZnJvbSAnLi9pc0VsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1N0cmluZyB9IGZyb20gJy4vaXNTdHJpbmcuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bWJlciB9IGZyb20gJy4vaXNOdW1iZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0RhdGUgfSBmcm9tICcuL2lzRGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzUmVnRXhwIH0gZnJvbSAnLi9pc1JlZ0V4cC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRXJyb3IgfSBmcm9tICcuL2lzRXJyb3IuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1N5bWJvbCB9IGZyb20gJy4vaXNTeW1ib2wuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FycmF5QnVmZmVyIH0gZnJvbSAnLi9pc0FycmF5QnVmZmVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNEYXRhVmlldyB9IGZyb20gJy4vaXNEYXRhVmlldy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQXJyYXkgfSBmcm9tICcuL2lzQXJyYXkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNBcmd1bWVudHMgfSBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGaW5pdGUgfSBmcm9tICcuL2lzRmluaXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOYU4gfSBmcm9tICcuL2lzTmFOLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNUeXBlZEFycmF5IH0gZnJvbSAnLi9pc1R5cGVkQXJyYXkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtcHR5IH0gZnJvbSAnLi9pc0VtcHR5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNNYXRjaCB9IGZyb20gJy4vaXNNYXRjaC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRXF1YWwgfSBmcm9tICcuL2lzRXF1YWwuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc01hcCB9IGZyb20gJy4vaXNNYXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1dlYWtNYXAgfSBmcm9tICcuL2lzV2Vha01hcC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzU2V0IH0gZnJvbSAnLi9pc1NldC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzV2Vha1NldCB9IGZyb20gJy4vaXNXZWFrU2V0LmpzJztcblxuLy8gRnVuY3Rpb25zIHRoYXQgdHJlYXQgYW4gb2JqZWN0IGFzIGEgZGljdGlvbmFyeSBvZiBrZXktdmFsdWUgcGFpcnMuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICcuL2tleXMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGxLZXlzIH0gZnJvbSAnLi9hbGxLZXlzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmFsdWVzIH0gZnJvbSAnLi92YWx1ZXMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYWlycyB9IGZyb20gJy4vcGFpcnMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnZlcnQgfSBmcm9tICcuL2ludmVydC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0aW9ucyxcbiAgICAgICAgIGRlZmF1bHQgYXMgbWV0aG9kcyAgIH0gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBleHRlbmQgfSBmcm9tICcuL2V4dGVuZC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4dGVuZE93bixcbiAgICAgICAgIGRlZmF1bHQgYXMgYXNzaWduICAgIH0gZnJvbSAnLi9leHRlbmRPd24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGUgfSBmcm9tICcuL2NyZWF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsb25lIH0gZnJvbSAnLi9jbG9uZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRhcCB9IGZyb20gJy4vdGFwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXMgfSBmcm9tICcuL2hhcy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcE9iamVjdCB9IGZyb20gJy4vbWFwT2JqZWN0LmpzJztcblxuLy8gVXRpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBIGJpdCBvZiBhIGdyYWIgYmFnOiBQcmVkaWNhdGUtZ2VuZXJhdGluZyBmdW5jdGlvbnMgZm9yIHVzZSB3aXRoIGZpbHRlcnMgYW5kXG4vLyBsb29wcywgc3RyaW5nIGVzY2FwaW5nIGFuZCB0ZW1wbGF0aW5nLCBjcmVhdGUgcmFuZG9tIG51bWJlcnMgYW5kIHVuaXF1ZSBpZHMsXG4vLyBhbmQgZnVuY3Rpb25zIHRoYXQgZmFjaWxpdGF0ZSBVbmRlcnNjb3JlJ3MgY2hhaW5pbmcgYW5kIGl0ZXJhdGlvbiBjb252ZW50aW9ucy5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uc3RhbnQgfSBmcm9tICcuL2NvbnN0YW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm9vcCB9IGZyb20gJy4vbm9vcC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvUGF0aCB9IGZyb20gJy4vdG9QYXRoLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcGVydHkgfSBmcm9tICcuL3Byb3BlcnR5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcGVydHlPZiB9IGZyb20gJy4vcHJvcGVydHlPZi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hdGNoZXIsXG4gICAgICAgICBkZWZhdWx0IGFzIG1hdGNoZXMgfSBmcm9tICcuL21hdGNoZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0aW1lcyB9IGZyb20gJy4vdGltZXMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByYW5kb20gfSBmcm9tICcuL3JhbmRvbS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdyB9IGZyb20gJy4vbm93LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXNjYXBlIH0gZnJvbSAnLi9lc2NhcGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmVzY2FwZSB9IGZyb20gJy4vdW5lc2NhcGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0ZW1wbGF0ZVNldHRpbmdzIH0gZnJvbSAnLi90ZW1wbGF0ZVNldHRpbmdzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzdWx0IH0gZnJvbSAnLi9yZXN1bHQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlxdWVJZCB9IGZyb20gJy4vdW5pcXVlSWQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFpbiB9IGZyb20gJy4vY2hhaW4uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpdGVyYXRlZSB9IGZyb20gJy4vaXRlcmF0ZWUuanMnO1xuXG4vLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGVzZSBmdW5jdGlvbnMgdGFrZSBhIGZ1bmN0aW9uIGFzIGFuIGFyZ3VtZW50IGFuZCByZXR1cm4gYSBuZXcgZnVuY3Rpb25cbi8vIGFzIHRoZSByZXN1bHQuIEFsc28ga25vd24gYXMgaGlnaGVyLW9yZGVyIGZ1bmN0aW9ucy5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFydGlhbCB9IGZyb20gJy4vcGFydGlhbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJpbmQgfSBmcm9tICcuL2JpbmQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiaW5kQWxsIH0gZnJvbSAnLi9iaW5kQWxsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVtb2l6ZSB9IGZyb20gJy4vbWVtb2l6ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlbGF5IH0gZnJvbSAnLi9kZWxheS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmVyIH0gZnJvbSAnLi9kZWZlci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRocm90dGxlIH0gZnJvbSAnLi90aHJvdHRsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlYm91bmNlIH0gZnJvbSAnLi9kZWJvdW5jZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBuZWdhdGUgfSBmcm9tICcuL25lZ2F0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICcuL2NvbXBvc2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZnRlciB9IGZyb20gJy4vYWZ0ZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiZWZvcmUgfSBmcm9tICcuL2JlZm9yZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9uY2UgfSBmcm9tICcuL29uY2UuanMnO1xuXG4vLyBGaW5kZXJzXG4vLyAtLS0tLS0tXG4vLyBGdW5jdGlvbnMgdGhhdCBleHRyYWN0ICh0aGUgcG9zaXRpb24gb2YpIGEgc2luZ2xlIGVsZW1lbnQgZnJvbSBhbiBvYmplY3Rcbi8vIG9yIGFycmF5IGJhc2VkIG9uIHNvbWUgY3JpdGVyaW9uLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kS2V5IH0gZnJvbSAnLi9maW5kS2V5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZEluZGV4IH0gZnJvbSAnLi9maW5kSW5kZXguanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kTGFzdEluZGV4IH0gZnJvbSAnLi9maW5kTGFzdEluZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydGVkSW5kZXggfSBmcm9tICcuL3NvcnRlZEluZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5kZXhPZiB9IGZyb20gJy4vaW5kZXhPZi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxhc3RJbmRleE9mIH0gZnJvbSAnLi9sYXN0SW5kZXhPZi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmQsXG4gICAgICAgICBkZWZhdWx0IGFzIGRldGVjdCB9IGZyb20gJy4vZmluZC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRXaGVyZSB9IGZyb20gJy4vZmluZFdoZXJlLmpzJztcblxuLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnMgdGhhdCB3b3JrIG9uIGFueSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzOiBlaXRoZXIgYW4gYXJyYXksIG9yXG4vLyBhbiBvYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlYWNoLFxuICAgICAgICAgZGVmYXVsdCBhcyBmb3JFYWNoIH0gZnJvbSAnLi9lYWNoLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwLFxuICAgICAgICAgZGVmYXVsdCBhcyBjb2xsZWN0IH0gZnJvbSAnLi9tYXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2UsXG4gICAgICAgICBkZWZhdWx0IGFzIGZvbGRsLFxuICAgICAgICAgZGVmYXVsdCBhcyBpbmplY3QgfSBmcm9tICcuL3JlZHVjZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZVJpZ2h0LFxuICAgICAgICAgZGVmYXVsdCBhcyBmb2xkciAgICAgICB9IGZyb20gJy4vcmVkdWNlUmlnaHQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWx0ZXIsXG4gICAgICAgICBkZWZhdWx0IGFzIHNlbGVjdCB9IGZyb20gJy4vZmlsdGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVqZWN0IH0gZnJvbSAnLi9yZWplY3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVyeSxcbiAgICAgICAgIGRlZmF1bHQgYXMgYWxsICAgfSBmcm9tICcuL2V2ZXJ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29tZSxcbiAgICAgICAgIGRlZmF1bHQgYXMgYW55ICB9IGZyb20gJy4vc29tZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRhaW5zLFxuICAgICAgICAgZGVmYXVsdCBhcyBpbmNsdWRlcyxcbiAgICAgICAgIGRlZmF1bHQgYXMgaW5jbHVkZSAgfSBmcm9tICcuL2NvbnRhaW5zLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW52b2tlIH0gZnJvbSAnLi9pbnZva2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwbHVjayB9IGZyb20gJy4vcGx1Y2suanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aGVyZSB9IGZyb20gJy4vd2hlcmUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXggfSBmcm9tICcuL21heC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1pbiB9IGZyb20gJy4vbWluLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2h1ZmZsZSB9IGZyb20gJy4vc2h1ZmZsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhbXBsZSB9IGZyb20gJy4vc2FtcGxlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydEJ5IH0gZnJvbSAnLi9zb3J0QnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cEJ5IH0gZnJvbSAnLi9ncm91cEJ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5kZXhCeSB9IGZyb20gJy4vaW5kZXhCeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvdW50QnkgfSBmcm9tICcuL2NvdW50QnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJ0aXRpb24gfSBmcm9tICcuL3BhcnRpdGlvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvQXJyYXkgfSBmcm9tICcuL3RvQXJyYXkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaXplIH0gZnJvbSAnLi9zaXplLmpzJztcblxuLy8gYF8ucGlja2AgYW5kIGBfLm9taXRgIGFyZSBhY3R1YWxseSBvYmplY3QgZnVuY3Rpb25zLCBidXQgd2UgcHV0XG4vLyB0aGVtIGhlcmUgaW4gb3JkZXIgdG8gY3JlYXRlIGEgbW9yZSBuYXR1cmFsIHJlYWRpbmcgb3JkZXIgaW4gdGhlXG4vLyBtb25vbGl0aGljIGJ1aWxkIGFzIHRoZXkgZGVwZW5kIG9uIGBfLmNvbnRhaW5zYC5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGljayB9IGZyb20gJy4vcGljay5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9taXQgfSBmcm9tICcuL29taXQuanMnO1xuXG4vLyBBcnJheSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zIHRoYXQgb3BlcmF0ZSBvbiBhcnJheXMgKGFuZCBhcnJheS1saWtlcykgb25seSwgYmVjYXVzZSB0aGV54oCZcmVcbi8vIGV4cHJlc3NlZCBpbiB0ZXJtcyBvZiBvcGVyYXRpb25zIG9uIGFuIG9yZGVyZWQgbGlzdCBvZiB2YWx1ZXMuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpcnN0LFxuICAgICAgICAgZGVmYXVsdCBhcyBoZWFkLFxuICAgICAgICAgZGVmYXVsdCBhcyB0YWtlICB9IGZyb20gJy4vZmlyc3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbml0aWFsIH0gZnJvbSAnLi9pbml0aWFsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGFzdCB9IGZyb20gJy4vbGFzdC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3QsXG4gICAgICAgICBkZWZhdWx0IGFzIHRhaWwsXG4gICAgICAgICBkZWZhdWx0IGFzIGRyb3AgfSBmcm9tICcuL3Jlc3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wYWN0IH0gZnJvbSAnLi9jb21wYWN0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxhdHRlbiB9IGZyb20gJy4vZmxhdHRlbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhvdXQgfSBmcm9tICcuL3dpdGhvdXQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlxLFxuICAgICAgICAgZGVmYXVsdCBhcyB1bmlxdWUgfSBmcm9tICcuL3VuaXEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlvbiB9IGZyb20gJy4vdW5pb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnRlcnNlY3Rpb24gfSBmcm9tICcuL2ludGVyc2VjdGlvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpZmZlcmVuY2UgfSBmcm9tICcuL2RpZmZlcmVuY2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnppcCxcbiAgICAgICAgIGRlZmF1bHQgYXMgdHJhbnNwb3NlIH0gZnJvbSAnLi91bnppcC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcCB9IGZyb20gJy4vemlwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb2JqZWN0IH0gZnJvbSAnLi9vYmplY3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByYW5nZSB9IGZyb20gJy4vcmFuZ2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaHVuayB9IGZyb20gJy4vY2h1bmsuanMnO1xuXG4vLyBPT1Bcbi8vIC0tLVxuLy8gVGhlc2UgbW9kdWxlcyBzdXBwb3J0IHRoZSBcIm9iamVjdC1vcmllbnRlZFwiIGNhbGxpbmcgc3R5bGUuIFNlZSBhbHNvXG4vLyBgdW5kZXJzY29yZS5qc2AgYW5kIGBpbmRleC1kZWZhdWx0LmpzYC5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWl4aW4gfSBmcm9tICcuL21peGluLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3VuZGVyc2NvcmUtYXJyYXktbWV0aG9kcy5qcyc7XG4iLCJpbXBvcnQgZ3JvdXAgZnJvbSAnLi9fZ3JvdXAuanMnO1xuXG4vLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYF8uZ3JvdXBCeWAsIGJ1dCBmb3Jcbi8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbmV4cG9ydCBkZWZhdWx0IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICByZXN1bHRba2V5XSA9IHZhbHVlO1xufSk7XG4iLCJpbXBvcnQgc29ydGVkSW5kZXggZnJvbSAnLi9zb3J0ZWRJbmRleC5qcyc7XG5pbXBvcnQgZmluZEluZGV4IGZyb20gJy4vZmluZEluZGV4LmpzJztcbmltcG9ydCBjcmVhdGVJbmRleEZpbmRlciBmcm9tICcuL19jcmVhdGVJbmRleEZpbmRlci5qcyc7XG5cbi8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbi8vIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4vLyBJZiB0aGUgYXJyYXkgaXMgbGFyZ2UgYW5kIGFscmVhZHkgaW4gc29ydCBvcmRlciwgcGFzcyBgdHJ1ZWBcbi8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmRleEZpbmRlcigxLCBmaW5kSW5kZXgsIHNvcnRlZEluZGV4KTtcbiIsImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbi8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4vLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbn1cbiIsImltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcbmltcG9ydCBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zLmpzJztcblxuLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuLy8gcGFzc2VkLWluIGFycmF5cy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGVyc2VjdGlvbihhcnJheSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gYXJyYXlbaV07XG4gICAgaWYgKGNvbnRhaW5zKHJlc3VsdCwgaXRlbSkpIGNvbnRpbnVlO1xuICAgIHZhciBqO1xuICAgIGZvciAoaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICghY29udGFpbnMoYXJndW1lbnRzW2pdLCBpdGVtKSkgYnJlYWs7XG4gICAgfVxuICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW52ZXJ0KG9iaikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W29ialtfa2V5c1tpXV1dID0gX2tleXNbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcC5qcyc7XG5pbXBvcnQgZGVlcEdldCBmcm9tICcuL19kZWVwR2V0LmpzJztcbmltcG9ydCB0b1BhdGggZnJvbSAnLi9fdG9QYXRoLmpzJztcblxuLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwgcGF0aCwgYXJncykge1xuICB2YXIgY29udGV4dFBhdGgsIGZ1bmM7XG4gIGlmIChpc0Z1bmN0aW9uKHBhdGgpKSB7XG4gICAgZnVuYyA9IHBhdGg7XG4gIH0gZWxzZSB7XG4gICAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgICBjb250ZXh0UGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgIHBhdGggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIG1hcChvYmosIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZnVuYztcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgaWYgKGNvbnRleHRQYXRoICYmIGNvbnRleHRQYXRoLmxlbmd0aCkge1xuICAgICAgICBjb250ZXh0ID0gZGVlcEdldChjb250ZXh0LCBjb250ZXh0UGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAoY29udGV4dCA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgICAgbWV0aG9kID0gY29udGV4dFtwYXRoXTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZCA9PSBudWxsID8gbWV0aG9kIDogbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuaW1wb3J0IGhhcyBmcm9tICcuL19oYXMuanMnO1xuXG52YXIgaXNBcmd1bWVudHMgPSB0YWdUZXN0ZXIoJ0FyZ3VtZW50cycpO1xuXG4vLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFIDwgOSksIHdoZXJlXG4vLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuKGZ1bmN0aW9uKCkge1xuICBpZiAoIWlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBpc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGhhcyhvYmosICdjYWxsZWUnKTtcbiAgICB9O1xuICB9XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50cztcbiIsImltcG9ydCB7IG5hdGl2ZUlzQXJyYXkgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbi8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4vLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgYEFycmF5LmlzQXJyYXlgLlxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlSXNBcnJheSB8fCB0YWdUZXN0ZXIoJ0FycmF5Jyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignQXJyYXlCdWZmZXInKTtcbiIsImltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufVxuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmltcG9ydCBpc0FycmF5QnVmZmVyIGZyb20gJy4vaXNBcnJheUJ1ZmZlci5qcyc7XG5pbXBvcnQgeyBoYXNTdHJpbmdUYWdCdWcgfSBmcm9tICcuL19zdHJpbmdUYWdCdWcuanMnO1xuXG52YXIgaXNEYXRhVmlldyA9IHRhZ1Rlc3RlcignRGF0YVZpZXcnKTtcblxuLy8gSW4gSUUgMTAgLSBFZGdlIDEzLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGhldXJpc3RpY1xuLy8gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgYERhdGFWaWV3YC5cbmZ1bmN0aW9uIGllMTBJc0RhdGFWaWV3KG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgaXNGdW5jdGlvbihvYmouZ2V0SW50OCkgJiYgaXNBcnJheUJ1ZmZlcihvYmouYnVmZmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGhhc1N0cmluZ1RhZ0J1ZyA/IGllMTBJc0RhdGFWaWV3IDogaXNEYXRhVmlldyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignRGF0ZScpO1xuIiwiLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG59XG4iLCJpbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vaXNTdHJpbmcuanMnO1xuaW1wb3J0IGlzQXJndW1lbnRzIGZyb20gJy4vaXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gSXMgYSBnaXZlbiBhcnJheSwgc3RyaW5nLCBvciBvYmplY3QgZW1wdHk/XG4vLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgLy8gU2tpcCB0aGUgbW9yZSBleHBlbnNpdmUgYHRvU3RyaW5nYC1iYXNlZCB0eXBlIGNoZWNrcyBpZiBgb2JqYCBoYXMgbm9cbiAgLy8gYC5sZW5ndGhgLlxuICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKG9iaik7XG4gIGlmICh0eXBlb2YgbGVuZ3RoID09ICdudW1iZXInICYmIChcbiAgICBpc0FycmF5KG9iaikgfHwgaXNTdHJpbmcob2JqKSB8fCBpc0FyZ3VtZW50cyhvYmopXG4gICkpIHJldHVybiBsZW5ndGggPT09IDA7XG4gIHJldHVybiBnZXRMZW5ndGgoa2V5cyhvYmopKSA9PT0gMDtcbn1cbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5pbXBvcnQgeyB0b1N0cmluZywgU3ltYm9sUHJvdG8gfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgZ2V0Qnl0ZUxlbmd0aCBmcm9tICcuL19nZXRCeXRlTGVuZ3RoLmpzJztcbmltcG9ydCBpc1R5cGVkQXJyYXkgZnJvbSAnLi9pc1R5cGVkQXJyYXkuanMnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmltcG9ydCB7IGhhc1N0cmluZ1RhZ0J1ZyB9ICBmcm9tICcuL19zdHJpbmdUYWdCdWcuanMnO1xuaW1wb3J0IGlzRGF0YVZpZXcgZnJvbSAnLi9pc0RhdGFWaWV3LmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5pbXBvcnQgaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5pbXBvcnQgdG9CdWZmZXJWaWV3IGZyb20gJy4vX3RvQnVmZmVyVmlldy5qcyc7XG5cbi8vIFdlIHVzZSB0aGlzIHN0cmluZyB0d2ljZSwgc28gZ2l2ZSBpdCBhIG5hbWUgZm9yIG1pbmlmaWNhdGlvbi5cbnZhciB0YWdEYXRhVmlldyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgXy5pc0VxdWFsYC5cbmZ1bmN0aW9uIGVxKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHBzOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgaWYgKGEgIT09IGEpIHJldHVybiBiICE9PSBiO1xuICAvLyBFeGhhdXN0IHByaW1pdGl2ZSBjaGVja3NcbiAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGRlZXBFcShhLCBiLCBhU3RhY2ssIGJTdGFjayk7XG59XG5cbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgXy5pc0VxdWFsYC5cbmZ1bmN0aW9uIGRlZXBFcShhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgLy8gV29yayBhcm91bmQgYSBidWcgaW4gSUUgMTAgLSBFZGdlIDEzLlxuICBpZiAoaGFzU3RyaW5nVGFnQnVnICYmIGNsYXNzTmFtZSA9PSAnW29iamVjdCBPYmplY3RdJyAmJiBpc0RhdGFWaWV3KGEpKSB7XG4gICAgaWYgKCFpc0RhdGFWaWV3KGIpKSByZXR1cm4gZmFsc2U7XG4gICAgY2xhc3NOYW1lID0gdGFnRGF0YVZpZXc7XG4gIH1cbiAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAvLyBUaGVzZSB0eXBlcyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG4gICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICByZXR1cm4gJycgKyBhID09PSAnJyArIGI7XG4gICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7XG4gICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcbiAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgIHJldHVybiArYSA9PT0gK2I7XG4gICAgY2FzZSAnW29iamVjdCBTeW1ib2xdJzpcbiAgICAgIHJldHVybiBTeW1ib2xQcm90by52YWx1ZU9mLmNhbGwoYSkgPT09IFN5bWJvbFByb3RvLnZhbHVlT2YuY2FsbChiKTtcbiAgICBjYXNlICdbb2JqZWN0IEFycmF5QnVmZmVyXSc6XG4gICAgY2FzZSB0YWdEYXRhVmlldzpcbiAgICAgIC8vIENvZXJjZSB0byB0eXBlZCBhcnJheSBzbyB3ZSBjYW4gZmFsbCB0aHJvdWdoLlxuICAgICAgcmV0dXJuIGRlZXBFcSh0b0J1ZmZlclZpZXcoYSksIHRvQnVmZmVyVmlldyhiKSwgYVN0YWNrLCBiU3RhY2spO1xuICB9XG5cbiAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgaWYgKCFhcmVBcnJheXMgJiYgaXNUeXBlZEFycmF5KGEpKSB7XG4gICAgICB2YXIgYnl0ZUxlbmd0aCA9IGdldEJ5dGVMZW5ndGgoYSk7XG4gICAgICBpZiAoYnl0ZUxlbmd0aCAhPT0gZ2V0Qnl0ZUxlbmd0aChiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGEuYnVmZmVyID09PSBiLmJ1ZmZlciAmJiBhLmJ5dGVPZmZzZXQgPT09IGIuYnl0ZU9mZnNldCkgcmV0dXJuIHRydWU7XG4gICAgICBhcmVBcnJheXMgPSB0cnVlO1xuICB9XG4gIGlmICghYXJlQXJyYXlzKSB7XG4gICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCdjb25zdHJ1Y3RvcicgaW4gYSAmJiAnY29uc3RydWN0b3InIGluIGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG5cbiAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICB9XG5cbiAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBhU3RhY2sucHVzaChhKTtcbiAgYlN0YWNrLnB1c2goYik7XG5cbiAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gIGlmIChhcmVBcnJheXMpIHtcbiAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgdmFyIF9rZXlzID0ga2V5cyhhKSwga2V5O1xuICAgIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG4gICAgaWYgKGtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAga2V5ID0gX2tleXNbbGVuZ3RoXTtcbiAgICAgIGlmICghKGhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBhU3RhY2sucG9wKCk7XG4gIGJTdGFjay5wb3AoKTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFcXVhbChhLCBiKSB7XG4gIHJldHVybiBlcShhLCBiKTtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgdGFnVGVzdGVyKCdFcnJvcicpO1xuIiwiaW1wb3J0IHsgX2lzRmluaXRlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Zpbml0ZShvYmopIHtcbiAgcmV0dXJuICFpc1N5bWJvbChvYmopICYmIF9pc0Zpbml0ZShvYmopICYmICFpc05hTihwYXJzZUZsb2F0KG9iaikpO1xufVxuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuaW1wb3J0IHsgcm9vdCB9IGZyb20gJy4vX3NldHVwLmpzJztcblxudmFyIGlzRnVuY3Rpb24gPSB0YWdUZXN0ZXIoJ0Z1bmN0aW9uJyk7XG5cbi8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS4gV29yayBhcm91bmQgc29tZSBgdHlwZW9mYCBidWdzIGluIG9sZFxuLy8gdjgsIElFIDExICgjMTYyMSksIFNhZmFyaSA4ICgjMTkyOSksIGFuZCBQaGFudG9tSlMgKCMyMjM2KS5cbnZhciBub2RlbGlzdCA9IHJvb3QuZG9jdW1lbnQgJiYgcm9vdC5kb2N1bWVudC5jaGlsZE5vZGVzO1xuaWYgKHR5cGVvZiAvLi8gIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgSW50OEFycmF5ICE9ICdvYmplY3QnICYmIHR5cGVvZiBub2RlbGlzdCAhPSAnZnVuY3Rpb24nKSB7XG4gIGlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0Z1bmN0aW9uO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuaW1wb3J0IHsgaXNJRTExIH0gZnJvbSAnLi9fc3RyaW5nVGFnQnVnLmpzJztcbmltcG9ydCB7IGllMTFmaW5nZXJwcmludCwgbWFwTWV0aG9kcyB9ICBmcm9tICcuL19tZXRob2RGaW5nZXJwcmludC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzSUUxMSA/IGllMTFmaW5nZXJwcmludChtYXBNZXRob2RzKSA6IHRhZ1Rlc3RlcignTWFwJyk7XG4iLCJpbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZiBga2V5OnZhbHVlYCBwYWlycy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTWF0Y2gob2JqZWN0LCBhdHRycykge1xuICB2YXIgX2tleXMgPSBrZXlzKGF0dHJzKSwgbGVuZ3RoID0gX2tleXMubGVuZ3RoO1xuICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiAhbGVuZ3RoO1xuICB2YXIgb2JqID0gT2JqZWN0KG9iamVjdCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gX2tleXNbaV07XG4gICAgaWYgKGF0dHJzW2tleV0gIT09IG9ialtrZXldIHx8ICEoa2V5IGluIG9iaikpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IF9pc05hTiB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzTnVtYmVyLmpzJztcblxuLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gP1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYU4ob2JqKSB7XG4gIHJldHVybiBpc051bWJlcihvYmopICYmIF9pc05hTihvYmopO1xufVxuIiwiLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ051bWJlcicpO1xuIiwiLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmopO1xufVxuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ1JlZ0V4cCcpO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuaW1wb3J0IHsgaXNJRTExIH0gZnJvbSAnLi9fc3RyaW5nVGFnQnVnLmpzJztcbmltcG9ydCB7IGllMTFmaW5nZXJwcmludCwgc2V0TWV0aG9kcyB9ICBmcm9tICcuL19tZXRob2RGaW5nZXJwcmludC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzSUUxMSA/IGllMTFmaW5nZXJwcmludChzZXRNZXRob2RzKSA6IHRhZ1Rlc3RlcignU2V0Jyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignU3RyaW5nJyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignU3ltYm9sJyk7XG4iLCJpbXBvcnQgeyBzdXBwb3J0c0FycmF5QnVmZmVyLCBuYXRpdmVJc1ZpZXcsIHRvU3RyaW5nIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGlzRGF0YVZpZXcgZnJvbSAnLi9pc0RhdGFWaWV3LmpzJztcbmltcG9ydCBjb25zdGFudCBmcm9tICcuL2NvbnN0YW50LmpzJztcbmltcG9ydCBpc0J1ZmZlckxpa2UgZnJvbSAnLi9faXNCdWZmZXJMaWtlLmpzJztcblxuLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIHR5cGVkIGFycmF5P1xudmFyIHR5cGVkQXJyYXlQYXR0ZXJuID0gL1xcW29iamVjdCAoKEl8VWkpbnQoOHwxNnwzMil8RmxvYXQoMzJ8NjQpfFVpbnQ4Q2xhbXBlZHxCaWcoSXxVaSludDY0KUFycmF5XFxdLztcbmZ1bmN0aW9uIGlzVHlwZWRBcnJheShvYmopIHtcbiAgLy8gYEFycmF5QnVmZmVyLmlzVmlld2AgaXMgdGhlIG1vc3QgZnV0dXJlLXByb29mLCBzbyB1c2UgaXQgd2hlbiBhdmFpbGFibGUuXG4gIC8vIE90aGVyd2lzZSwgZmFsbCBiYWNrIG9uIHRoZSBhYm92ZSByZWd1bGFyIGV4cHJlc3Npb24uXG4gIHJldHVybiBuYXRpdmVJc1ZpZXcgPyAobmF0aXZlSXNWaWV3KG9iaikgJiYgIWlzRGF0YVZpZXcob2JqKSkgOlxuICAgICAgICAgICAgICAgIGlzQnVmZmVyTGlrZShvYmopICYmIHR5cGVkQXJyYXlQYXR0ZXJuLnRlc3QodG9TdHJpbmcuY2FsbChvYmopKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydHNBcnJheUJ1ZmZlciA/IGlzVHlwZWRBcnJheSA6IGNvbnN0YW50KGZhbHNlKTtcbiIsIi8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gIHJldHVybiBvYmogPT09IHZvaWQgMDtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcbmltcG9ydCB7IGlzSUUxMSB9IGZyb20gJy4vX3N0cmluZ1RhZ0J1Zy5qcyc7XG5pbXBvcnQgeyBpZTExZmluZ2VycHJpbnQsIHdlYWtNYXBNZXRob2RzIH0gIGZyb20gJy4vX21ldGhvZEZpbmdlcnByaW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgaXNJRTExID8gaWUxMWZpbmdlcnByaW50KHdlYWtNYXBNZXRob2RzKSA6IHRhZ1Rlc3RlcignV2Vha01hcCcpO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ1dlYWtTZXQnKTtcbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5pbXBvcnQgYmFzZUl0ZXJhdGVlIGZyb20gJy4vX2Jhc2VJdGVyYXRlZS5qcyc7XG5cbi8vIEV4dGVybmFsIHdyYXBwZXIgZm9yIG91ciBjYWxsYmFjayBnZW5lcmF0b3IuIFVzZXJzIG1heSBjdXN0b21pemVcbi8vIGBfLml0ZXJhdGVlYCBpZiB0aGV5IHdhbnQgYWRkaXRpb25hbCBwcmVkaWNhdGUvaXRlcmF0ZWUgc2hvcnRoYW5kIHN0eWxlcy5cbi8vIFRoaXMgYWJzdHJhY3Rpb24gaGlkZXMgdGhlIGludGVybmFsLW9ubHkgYGFyZ0NvdW50YCBhcmd1bWVudC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGl0ZXJhdGVlKHZhbHVlLCBjb250ZXh0KSB7XG4gIHJldHVybiBiYXNlSXRlcmF0ZWUodmFsdWUsIGNvbnRleHQsIEluZmluaXR5KTtcbn1cbl8uaXRlcmF0ZWUgPSBpdGVyYXRlZTtcbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCB7IG5hdGl2ZUtleXMsIGhhc0VudW1CdWcgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5pbXBvcnQgY29sbGVjdE5vbkVudW1Qcm9wcyBmcm9tICcuL19jb2xsZWN0Tm9uRW51bVByb3BzLmpzJztcblxuLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzLlxuLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleXMob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKGhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAvLyBBaGVtLCBJRSA8IDkuXG4gIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gIHJldHVybiBrZXlzO1xufVxuIiwiaW1wb3J0IHJlc3QgZnJvbSAnLi9yZXN0LmpzJztcblxuLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuLy8gdmFsdWVzIGluIHRoZSBhcnJheS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhc3QoYXJyYXksIG4sIGd1YXJkKSB7XG4gIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBuID09IG51bGwgfHwgZ3VhcmQgPyB2b2lkIDAgOiBbXTtcbiAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICByZXR1cm4gcmVzdChhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gbikpO1xufVxuIiwiaW1wb3J0IGZpbmRMYXN0SW5kZXggZnJvbSAnLi9maW5kTGFzdEluZGV4LmpzJztcbmltcG9ydCBjcmVhdGVJbmRleEZpbmRlciBmcm9tICcuL19jcmVhdGVJbmRleEZpbmRlci5qcyc7XG5cbi8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBhbiBpdGVtIGluIGFuIGFycmF5LFxuLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBmaW5kTGFzdEluZGV4KTtcbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgdmFyIF9rZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYga2V5cyhvYmopLFxuICAgICAgbGVuZ3RoID0gKF9rZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgcmVzdWx0cyA9IEFycmF5KGxlbmd0aCk7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgY3VycmVudEtleSA9IF9rZXlzID8gX2tleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gUmV0dXJucyB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgYGl0ZXJhdGVlYCB0byBlYWNoIGVsZW1lbnQgb2YgYG9iamAuXG4vLyBJbiBjb250cmFzdCB0byBgXy5tYXBgIGl0IHJldHVybnMgYW4gb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwT2JqZWN0KG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKSxcbiAgICAgIGxlbmd0aCA9IF9rZXlzLmxlbmd0aCxcbiAgICAgIHJlc3VsdHMgPSB7fTtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBjdXJyZW50S2V5ID0gX2tleXNbaW5kZXhdO1xuICAgIHJlc3VsdHNbY3VycmVudEtleV0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4iLCJpbXBvcnQgZXh0ZW5kT3duIGZyb20gJy4vZXh0ZW5kT3duLmpzJztcbmltcG9ydCBpc01hdGNoIGZyb20gJy4vaXNNYXRjaC5qcyc7XG5cbi8vIFJldHVybnMgYSBwcmVkaWNhdGUgZm9yIGNoZWNraW5nIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZlxuLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXRjaGVyKGF0dHJzKSB7XG4gIGF0dHJzID0gZXh0ZW5kT3duKHt9LCBhdHRycyk7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNNYXRjaChvYmosIGF0dHJzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQgdmFsdWVzIGZyb20gJy4vdmFsdWVzLmpzJztcbmltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2guanMnO1xuXG4vLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXgob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICB2YXIgcmVzdWx0ID0gLUluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSAtSW5maW5pdHksXG4gICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gIGlmIChpdGVyYXRlZSA9PSBudWxsIHx8ICh0eXBlb2YgaXRlcmF0ZWUgPT0gJ251bWJlcicgJiYgdHlwZW9mIG9ialswXSAhPSAnb2JqZWN0JyAmJiBvYmogIT0gbnVsbCkpIHtcbiAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogdmFsdWVzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSA+IHJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHYsIGluZGV4LCBsaXN0KSB7XG4gICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgIGlmIChjb21wdXRlZCA+IGxhc3RDb21wdXRlZCB8fCAoY29tcHV0ZWQgPT09IC1JbmZpbml0eSAmJiByZXN1bHQgPT09IC1JbmZpbml0eSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBoYXMgZnJvbSAnLi9faGFzLmpzJztcblxuLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbW9pemUoZnVuYywgaGFzaGVyKSB7XG4gIHZhciBtZW1vaXplID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgdmFyIGNhY2hlID0gbWVtb2l6ZS5jYWNoZTtcbiAgICB2YXIgYWRkcmVzcyA9ICcnICsgKGhhc2hlciA/IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDoga2V5KTtcbiAgICBpZiAoIWhhcyhjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgfTtcbiAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICByZXR1cm4gbWVtb2l6ZTtcbn1cbiIsImltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQgdmFsdWVzIGZyb20gJy4vdmFsdWVzLmpzJztcbmltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2guanMnO1xuXG4vLyBSZXR1cm4gdGhlIG1pbmltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaW4ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICB2YXIgcmVzdWx0ID0gSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IEluZmluaXR5LFxuICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCB8fCAodHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpKSB7XG4gICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IHZhbHVlcyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgPCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2LCBpbmRleCwgbGlzdCkge1xuICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2LCBpbmRleCwgbGlzdCk7XG4gICAgICBpZiAoY29tcHV0ZWQgPCBsYXN0Q29tcHV0ZWQgfHwgKGNvbXB1dGVkID09PSBJbmZpbml0eSAmJiByZXN1bHQgPT09IEluZmluaXR5KSkge1xuICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaC5qcyc7XG5pbXBvcnQgZnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7IHB1c2ggfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgY2hhaW5SZXN1bHQgZnJvbSAnLi9fY2hhaW5SZXN1bHQuanMnO1xuXG4vLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZWFjaChmdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBfO1xufVxuIiwiLy8gUmV0dXJucyBhIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgcGFzc2VkLWluIHByZWRpY2F0ZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5lZ2F0ZShwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIvLyBQcmVkaWNhdGUtZ2VuZXJhdGluZyBmdW5jdGlvbi4gT2Z0ZW4gdXNlZnVsIG91dHNpZGUgb2YgVW5kZXJzY29yZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vb3AoKXt9XG4iLCIvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG5leHBvcnQgZGVmYXVsdCBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcbiIsImltcG9ydCBnZXRMZW5ndGggIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5cbi8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbi8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLiBQYXNzaW5nIGJ5IHBhaXJzIGlzIHRoZSByZXZlcnNlIG9mIGBfLnBhaXJzYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9iamVjdChsaXN0LCB2YWx1ZXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGxpc3QpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmltcG9ydCBuZWdhdGUgZnJvbSAnLi9uZWdhdGUuanMnO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcC5qcyc7XG5pbXBvcnQgZmxhdHRlbiBmcm9tICcuL19mbGF0dGVuLmpzJztcbmltcG9ydCBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zLmpzJztcbmltcG9ydCBwaWNrIGZyb20gJy4vcGljay5qcyc7XG5cbi8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBkaXNhbGxvd2VkIHByb3BlcnRpZXMuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICB2YXIgaXRlcmF0ZWUgPSBrZXlzWzBdLCBjb250ZXh0O1xuICBpZiAoaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICBpdGVyYXRlZSA9IG5lZ2F0ZShpdGVyYXRlZSk7XG4gICAgaWYgKGtleXMubGVuZ3RoID4gMSkgY29udGV4dCA9IGtleXNbMV07XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IG1hcChmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSksIFN0cmluZyk7XG4gICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICByZXR1cm4gIWNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcGljayhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbn0pO1xuIiwiaW1wb3J0IHBhcnRpYWwgZnJvbSAnLi9wYXJ0aWFsLmpzJztcbmltcG9ydCBiZWZvcmUgZnJvbSAnLi9iZWZvcmUuanMnO1xuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbi8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG5leHBvcnQgZGVmYXVsdCBwYXJ0aWFsKGJlZm9yZSwgMik7XG4iLCJpbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbi8vIFRoZSBvcHBvc2l0ZSBvZiBgXy5vYmplY3RgIHdpdGggb25lIGFyZ3VtZW50LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFpcnMob2JqKSB7XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKTtcbiAgdmFyIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgdmFyIHBhaXJzID0gQXJyYXkobGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHBhaXJzW2ldID0gW19rZXlzW2ldLCBvYmpbX2tleXNbaV1dXTtcbiAgfVxuICByZXR1cm4gcGFpcnM7XG59XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IGV4ZWN1dGVCb3VuZCBmcm9tICcuL19leGVjdXRlQm91bmQuanMnO1xuaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcblxuLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuIGBfYCBhY3RzXG4vLyBhcyBhIHBsYWNlaG9sZGVyIGJ5IGRlZmF1bHQsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmVcbi8vIHByZS1maWxsZWQuIFNldCBgXy5wYXJ0aWFsLnBsYWNlaG9sZGVyYCBmb3IgYSBjdXN0b20gcGxhY2Vob2xkZXIgYXJndW1lbnQuXG52YXIgcGFydGlhbCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgYm91bmRBcmdzKSB7XG4gIHZhciBwbGFjZWhvbGRlciA9IHBhcnRpYWwucGxhY2Vob2xkZXI7XG4gIHZhciBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgdmFyIGFyZ3MgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IHBsYWNlaG9sZGVyID8gYXJndW1lbnRzW3Bvc2l0aW9uKytdIDogYm91bmRBcmdzW2ldO1xuICAgIH1cbiAgICB3aGlsZSAocG9zaXRpb24gPCBhcmd1bWVudHMubGVuZ3RoKSBhcmdzLnB1c2goYXJndW1lbnRzW3Bvc2l0aW9uKytdKTtcbiAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCB0aGlzLCB0aGlzLCBhcmdzKTtcbiAgfTtcbiAgcmV0dXJuIGJvdW5kO1xufSk7XG5cbnBhcnRpYWwucGxhY2Vob2xkZXIgPSBfO1xuZXhwb3J0IGRlZmF1bHQgcGFydGlhbDtcbiIsImltcG9ydCBncm91cCBmcm9tICcuL19ncm91cC5qcyc7XG5cbi8vIFNwbGl0IGEgY29sbGVjdGlvbiBpbnRvIHR3byBhcnJheXM6IG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgcGFzcyB0aGUgZ2l2ZW5cbi8vIHRydXRoIHRlc3QsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBwYXNzIHRoZSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwgcGFzcykge1xuICByZXN1bHRbcGFzcyA/IDAgOiAxXS5wdXNoKHZhbHVlKTtcbn0sIHRydWUpO1xuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgb3B0aW1pemVDYiBmcm9tICcuL19vcHRpbWl6ZUNiLmpzJztcbmltcG9ydCBhbGxLZXlzIGZyb20gJy4vYWxsS2V5cy5qcyc7XG5pbXBvcnQga2V5SW5PYmogZnJvbSAnLi9fa2V5SW5PYmouanMnO1xuaW1wb3J0IGZsYXR0ZW4gZnJvbSAnLi9fZmxhdHRlbi5qcyc7XG5cbi8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIGFsbG93ZWQgcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIHZhciByZXN1bHQgPSB7fSwgaXRlcmF0ZWUgPSBrZXlzWzBdO1xuICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gIGlmIChpc0Z1bmN0aW9uKGl0ZXJhdGVlKSkge1xuICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwga2V5c1sxXSk7XG4gICAga2V5cyA9IGFsbEtleXMob2JqKTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyYXRlZSA9IGtleUluT2JqO1xuICAgIGtleXMgPSBmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgb2JqID0gT2JqZWN0KG9iaik7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICBpZiAoaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqKSkgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJpbXBvcnQgbWFwIGZyb20gJy4vbWFwLmpzJztcbmltcG9ydCBwcm9wZXJ0eSBmcm9tICcuL3Byb3BlcnR5LmpzJztcblxuLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgXy5tYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGx1Y2sob2JqLCBrZXkpIHtcbiAgcmV0dXJuIG1hcChvYmosIHByb3BlcnR5KGtleSkpO1xufVxuIiwiaW1wb3J0IGRlZXBHZXQgZnJvbSAnLi9fZGVlcEdldC5qcyc7XG5pbXBvcnQgdG9QYXRoIGZyb20gJy4vX3RvUGF0aC5qcyc7XG5cbi8vIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIHBhc3NlZCBhbiBvYmplY3QsIHdpbGwgdHJhdmVyc2UgdGhhdCBvYmplY3TigJlzXG4vLyBwcm9wZXJ0aWVzIGRvd24gdGhlIGdpdmVuIGBwYXRoYCwgc3BlY2lmaWVkIGFzIGFuIGFycmF5IG9mIGtleXMgb3IgaW5kaWNlcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBkZWVwR2V0KG9iaiwgcGF0aCk7XG4gIH07XG59XG4iLCJpbXBvcnQgbm9vcCBmcm9tICcuL25vb3AuanMnO1xuaW1wb3J0IGdldCBmcm9tICcuL2dldC5qcyc7XG5cbi8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb3BlcnR5T2Yob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIG5vb3A7XG4gIHJldHVybiBmdW5jdGlvbihwYXRoKSB7XG4gICAgcmV0dXJuIGdldChvYmosIHBhdGgpO1xuICB9O1xufVxuIiwiLy8gUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBgbWluYCBhbmQgYG1heGAgKGluY2x1c2l2ZSkuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcbiAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgbWF4ID0gbWluO1xuICAgIG1pbiA9IDA7XG4gIH1cbiAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG59XG4iLCIvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4vLyB0aGUgbmF0aXZlIFB5dGhvbiBgcmFuZ2UoKWAgZnVuY3Rpb24uIFNlZVxuLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBpZiAoc3RvcCA9PSBudWxsKSB7XG4gICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgc3RhcnQgPSAwO1xuICB9XG4gIGlmICghc3RlcCkge1xuICAgIHN0ZXAgPSBzdG9wIDwgc3RhcnQgPyAtMSA6IDE7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICB2YXIgcmFuZ2UgPSBBcnJheShsZW5ndGgpO1xuXG4gIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGxlbmd0aDsgaWR4KyssIHN0YXJ0ICs9IHN0ZXApIHtcbiAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59XG4iLCJpbXBvcnQgY3JlYXRlUmVkdWNlIGZyb20gJy4vX2NyZWF0ZVJlZHVjZS5qcyc7XG5cbi8vICoqUmVkdWNlKiogYnVpbGRzIHVwIGEgc2luZ2xlIHJlc3VsdCBmcm9tIGEgbGlzdCBvZiB2YWx1ZXMsIGFrYSBgaW5qZWN0YCxcbi8vIG9yIGBmb2xkbGAuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2UoMSk7XG4iLCJpbXBvcnQgY3JlYXRlUmVkdWNlIGZyb20gJy4vX2NyZWF0ZVJlZHVjZS5qcyc7XG5cbi8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlKC0xKTtcbiIsImltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXIuanMnO1xuaW1wb3J0IG5lZ2F0ZSBmcm9tICcuL25lZ2F0ZS5qcyc7XG5pbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuXG4vLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVqZWN0KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHJldHVybiBmaWx0ZXIob2JqLCBuZWdhdGUoY2IocHJlZGljYXRlKSksIGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5cbi8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBgYXJyYXlgLiBFc3BlY2lhbGx5IHVzZWZ1bCBvblxuLy8gdGhlIGBhcmd1bWVudHNgIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVybiB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGVcbi8vIGBhcnJheWAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXN0KGFycmF5LCBuLCBndWFyZCkge1xuICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgbiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pO1xufVxuIiwiLy8gU29tZSBmdW5jdGlvbnMgdGFrZSBhIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMsIG9yIGEgZmV3IGV4cGVjdGVkXG4vLyBhcmd1bWVudHMgYXQgdGhlIGJlZ2lubmluZyBhbmQgdGhlbiBhIHZhcmlhYmxlIG51bWJlciBvZiB2YWx1ZXMgdG8gb3BlcmF0ZVxuLy8gb24uIFRoaXMgaGVscGVyIGFjY3VtdWxhdGVzIGFsbCByZW1haW5pbmcgYXJndW1lbnRzIHBhc3QgdGhlIGZ1bmN0aW9u4oCZc1xuLy8gYXJndW1lbnQgbGVuZ3RoIChvciBhbiBleHBsaWNpdCBgc3RhcnRJbmRleGApLCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lc1xuLy8gdGhlIGxhc3QgYXJndW1lbnQuIFNpbWlsYXIgdG8gRVM24oCZcyBcInJlc3QgcGFyYW1ldGVyXCIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXN0QXJndW1lbnRzKGZ1bmMsIHN0YXJ0SW5kZXgpIHtcbiAgc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXggPT0gbnVsbCA/IGZ1bmMubGVuZ3RoIC0gMSA6ICtzdGFydEluZGV4O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KGFyZ3VtZW50cy5sZW5ndGggLSBzdGFydEluZGV4LCAwKSxcbiAgICAgICAgcmVzdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICAgIGluZGV4ID0gMDtcbiAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJlc3RbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4ICsgc3RhcnRJbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnRJbmRleCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIHJlc3QpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgcmVzdCk7XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIHJlc3QpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IEFycmF5KHN0YXJ0SW5kZXggKyAxKTtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzdGFydEluZGV4OyBpbmRleCsrKSB7XG4gICAgICBhcmdzW2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgfVxuICAgIGFyZ3Nbc3RhcnRJbmRleF0gPSByZXN0O1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufVxuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmltcG9ydCB0b1BhdGggZnJvbSAnLi9fdG9QYXRoLmpzJztcblxuLy8gVHJhdmVyc2VzIHRoZSBjaGlsZHJlbiBvZiBgb2JqYCBhbG9uZyBgcGF0aGAuIElmIGEgY2hpbGQgaXMgYSBmdW5jdGlvbiwgaXRcbi8vIGlzIGludm9rZWQgd2l0aCBpdHMgcGFyZW50IGFzIGNvbnRleHQuIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaW5hbFxuLy8gY2hpbGQsIG9yIGBmYWxsYmFja2AgaWYgYW55IGNoaWxkIGlzIHVuZGVmaW5lZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3VsdChvYmosIHBhdGgsIGZhbGxiYWNrKSB7XG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihmYWxsYmFjaykgPyBmYWxsYmFjay5jYWxsKG9iaikgOiBmYWxsYmFjaztcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByb3AgPSBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtwYXRoW2ldXTtcbiAgICBpZiAocHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9wID0gZmFsbGJhY2s7XG4gICAgICBpID0gbGVuZ3RoOyAvLyBFbnN1cmUgd2UgZG9uJ3QgY29udGludWUgaXRlcmF0aW5nLlxuICAgIH1cbiAgICBvYmogPSBpc0Z1bmN0aW9uKHByb3ApID8gcHJvcC5jYWxsKG9iaikgOiBwcm9wO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICcuL3ZhbHVlcy5qcyc7XG5pbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9tLmpzJztcbmltcG9ydCB0b0FycmF5IGZyb20gJy4vdG9BcnJheS5qcyc7XG5cbi8vIFNhbXBsZSAqKm4qKiByYW5kb20gdmFsdWVzIGZyb20gYSBjb2xsZWN0aW9uIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGVcbi8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVy4oCTWWF0ZXNfc2h1ZmZsZSkuXG4vLyBJZiAqKm4qKiBpcyBub3Qgc3BlY2lmaWVkLCByZXR1cm5zIGEgc2luZ2xlIHJhbmRvbSBlbGVtZW50LlxuLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2FtcGxlKG9iaiwgbiwgZ3VhcmQpIHtcbiAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gdmFsdWVzKG9iaik7XG4gICAgcmV0dXJuIG9ialtyYW5kb20ob2JqLmxlbmd0aCAtIDEpXTtcbiAgfVxuICB2YXIgc2FtcGxlID0gdG9BcnJheShvYmopO1xuICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKHNhbXBsZSk7XG4gIG4gPSBNYXRoLm1heChNYXRoLm1pbihuLCBsZW5ndGgpLCAwKTtcbiAgdmFyIGxhc3QgPSBsZW5ndGggLSAxO1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbjsgaW5kZXgrKykge1xuICAgIHZhciByYW5kID0gcmFuZG9tKGluZGV4LCBsYXN0KTtcbiAgICB2YXIgdGVtcCA9IHNhbXBsZVtpbmRleF07XG4gICAgc2FtcGxlW2luZGV4XSA9IHNhbXBsZVtyYW5kXTtcbiAgICBzYW1wbGVbcmFuZF0gPSB0ZW1wO1xuICB9XG4gIHJldHVybiBzYW1wbGUuc2xpY2UoMCwgbik7XG59XG4iLCJpbXBvcnQgc2FtcGxlIGZyb20gJy4vc2FtcGxlLmpzJztcblxuLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaHVmZmxlKG9iaikge1xuICByZXR1cm4gc2FtcGxlKG9iaiwgSW5maW5pdHkpO1xufVxuIiwiaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGEgY29sbGVjdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpemUob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmopID8gb2JqLmxlbmd0aCA6IGtleXMob2JqKS5sZW5ndGg7XG59XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IHBhc3NlcyBhIHRydXRoIHRlc3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb21lKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIHZhciBfa2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIGtleXMob2JqKSxcbiAgICAgIGxlbmd0aCA9IChfa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBjdXJyZW50S2V5ID0gX2tleXMgPyBfa2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICBpZiAocHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBwbHVjayBmcm9tICcuL3BsdWNrLmpzJztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAuanMnO1xuXG4vLyBTb3J0IHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24gcHJvZHVjZWQgYnkgYW4gaXRlcmF0ZWUuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0Qnkob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgcmV0dXJuIHBsdWNrKG1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGxpc3QpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgaW5kZXg6IGluZGV4KyssXG4gICAgICBjcml0ZXJpYTogaXRlcmF0ZWUodmFsdWUsIGtleSwgbGlzdClcbiAgICB9O1xuICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhO1xuICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIGlmIChhID4gYiB8fCBhID09PSB2b2lkIDApIHJldHVybiAxO1xuICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdC5pbmRleCAtIHJpZ2h0LmluZGV4O1xuICB9KSwgJ3ZhbHVlJyk7XG59XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuXG4vLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4vLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0ZWRJbmRleChhcnJheSwgb2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgdmFyIHZhbHVlID0gaXRlcmF0ZWUob2JqKTtcbiAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xuICAgIGlmIChpdGVyYXRlZShhcnJheVttaWRdKSA8IHZhbHVlKSBsb3cgPSBtaWQgKyAxOyBlbHNlIGhpZ2ggPSBtaWQ7XG4gIH1cbiAgcmV0dXJuIGxvdztcbn1cbiIsIi8vIEludm9rZXMgYGludGVyY2VwdG9yYCB3aXRoIHRoZSBgb2JqYCBhbmQgdGhlbiByZXR1cm5zIGBvYmpgLlxuLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4vLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhcChvYmosIGludGVyY2VwdG9yKSB7XG4gIGludGVyY2VwdG9yKG9iaik7XG4gIHJldHVybiBvYmo7XG59XG4iLCJpbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy5qcyc7XG5pbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuaW1wb3J0ICcuL3RlbXBsYXRlU2V0dGluZ3MuanMnO1xuXG4vLyBXaGVuIGN1c3RvbWl6aW5nIGBfLnRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbi8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbi8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxudmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbi8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4vLyBzdHJpbmcgbGl0ZXJhbC5cbnZhciBlc2NhcGVzID0ge1xuICBcIidcIjogXCInXCIsXG4gICdcXFxcJzogJ1xcXFwnLFxuICAnXFxyJzogJ3InLFxuICAnXFxuJzogJ24nLFxuICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICdcXHUyMDI5JzogJ3UyMDI5J1xufTtcblxudmFyIGVzY2FwZVJlZ0V4cCA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihtYXRjaCkge1xuICByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07XG59XG5cbi8vIEluIG9yZGVyIHRvIHByZXZlbnQgdGhpcmQtcGFydHkgY29kZSBpbmplY3Rpb24gdGhyb3VnaFxuLy8gYF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZWAsIHdlIHRlc3QgaXQgYWdhaW5zdCB0aGUgZm9sbG93aW5nIHJlZ3VsYXJcbi8vIGV4cHJlc3Npb24uIEl0IGlzIGludGVudGlvbmFsbHkgYSBiaXQgbW9yZSBsaWJlcmFsIHRoYW4ganVzdCBtYXRjaGluZyB2YWxpZFxuLy8gaWRlbnRpZmllcnMsIGJ1dCBzdGlsbCBwcmV2ZW50cyBwb3NzaWJsZSBsb29waG9sZXMgdGhyb3VnaCBkZWZhdWx0cyBvclxuLy8gZGVzdHJ1Y3R1cmluZyBhc3NpZ25tZW50LlxudmFyIGJhcmVJZGVudGlmaWVyID0gL15cXHMqKFxcd3xcXCQpK1xccyokLztcblxuLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbi8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbi8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuLy8gTkI6IGBvbGRTZXR0aW5nc2Agb25seSBleGlzdHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVtcGxhdGUodGV4dCwgc2V0dGluZ3MsIG9sZFNldHRpbmdzKSB7XG4gIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gIHNldHRpbmdzID0gZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICB2YXIgbWF0Y2hlciA9IFJlZ0V4cChbXG4gICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZShlc2NhcGVSZWdFeHAsIGVzY2FwZUNoYXIpO1xuICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgaWYgKGVzY2FwZSkge1xuICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgIH1cblxuICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZnNldC5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xuICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gIHZhciBhcmd1bWVudCA9IHNldHRpbmdzLnZhcmlhYmxlO1xuICBpZiAoYXJndW1lbnQpIHtcbiAgICAvLyBJbnN1cmUgYWdhaW5zdCB0aGlyZC1wYXJ0eSBjb2RlIGluamVjdGlvbi4gKENWRS0yMDIxLTIzMzU4KVxuICAgIGlmICghYmFyZUlkZW50aWZpZXIudGVzdChhcmd1bWVudCkpIHRocm93IG5ldyBFcnJvcihcbiAgICAgICd2YXJpYWJsZSBpcyBub3QgYSBiYXJlIGlkZW50aWZpZXI6ICcgKyBhcmd1bWVudFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuICAgIGFyZ3VtZW50ID0gJ29iaic7XG4gIH1cblxuICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIiArXG4gICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICBzb3VyY2UgKyAncmV0dXJuIF9fcDtcXG4nO1xuXG4gIHZhciByZW5kZXI7XG4gIHRyeSB7XG4gICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKGFyZ3VtZW50LCAnXycsIHNvdXJjZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgfTtcblxuICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgYXJndW1lbnQgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5cbi8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycy4gQ2hhbmdlIHRoZVxuLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuZXhwb3J0IGRlZmF1bHQgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICBldmFsdWF0ZTogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgaW50ZXJwb2xhdGU6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICBlc2NhcGU6IC88JS0oW1xcc1xcU10rPyklPi9nXG59O1xuIiwiaW1wb3J0IG5vdyBmcm9tICcuL25vdy5qcyc7XG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4vLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4vLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciB0aW1lb3V0LCBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuXG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBub3coKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuXG4gIHZhciB0aHJvdHRsZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgX25vdyA9IG5vdygpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBfbm93O1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKF9ub3cgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHByZXZpb3VzID0gX25vdztcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB0aHJvdHRsZWQuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHByZXZpb3VzID0gMDtcbiAgICB0aW1lb3V0ID0gY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiB0aHJvdHRsZWQ7XG59XG4iLCJpbXBvcnQgb3B0aW1pemVDYiBmcm9tICcuL19vcHRpbWl6ZUNiLmpzJztcblxuLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lcyhuLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICB2YXIgYWNjdW0gPSBBcnJheShNYXRoLm1heCgwLCBuKSk7XG4gIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdGVlKGkpO1xuICByZXR1cm4gYWNjdW07XG59XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi9pc1N0cmluZy5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcC5qcyc7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eS5qcyc7XG5pbXBvcnQgdmFsdWVzIGZyb20gJy4vdmFsdWVzLmpzJztcblxuLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbnZhciByZVN0clN5bWJvbCA9IC9bXlxcdWQ4MDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGJmZl1bXFx1ZGMwMC1cXHVkZmZmXXxbXFx1ZDgwMC1cXHVkZmZmXS9nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgaWYgKGlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgaWYgKGlzU3RyaW5nKG9iaikpIHtcbiAgICAvLyBLZWVwIHN1cnJvZ2F0ZSBwYWlyIGNoYXJhY3RlcnMgdG9nZXRoZXIuXG4gICAgcmV0dXJuIG9iai5tYXRjaChyZVN0clN5bWJvbCk7XG4gIH1cbiAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHJldHVybiBtYXAob2JqLCBpZGVudGl0eSk7XG4gIHJldHVybiB2YWx1ZXMob2JqKTtcbn1cbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vLyBOb3JtYWxpemUgYSAoZGVlcCkgcHJvcGVydHkgYHBhdGhgIHRvIGFycmF5LlxuLy8gTGlrZSBgXy5pdGVyYXRlZWAsIHRoaXMgZnVuY3Rpb24gY2FuIGJlIGN1c3RvbWl6ZWQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1BhdGgocGF0aCkge1xuICByZXR1cm4gaXNBcnJheShwYXRoKSA/IHBhdGggOiBbcGF0aF07XG59XG5fLnRvUGF0aCA9IHRvUGF0aDtcbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2guanMnO1xuaW1wb3J0IHsgQXJyYXlQcm90byB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBjaGFpblJlc3VsdCBmcm9tICcuL19jaGFpblJlc3VsdC5qcyc7XG5cbi8vIEFkZCBhbGwgbXV0YXRvciBgQXJyYXlgIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbmVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT09ICdzaGlmdCcgfHwgbmFtZSA9PT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIG9ialswXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoYWluUmVzdWx0KHRoaXMsIG9iaik7XG4gIH07XG59KTtcblxuLy8gQWRkIGFsbCBhY2Nlc3NvciBgQXJyYXlgIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbmVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgIGlmIChvYmogIT0gbnVsbCkgb2JqID0gbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgb2JqKTtcbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBfO1xuIiwiaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXQgY2FuXG4vLyBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgZnVuY3Rpb25zIGFkZGVkXG4vLyB0aHJvdWdoIGBfLm1peGluYC4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gXyhvYmopIHtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIF8pIHJldHVybiBvYmo7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG59XG5cbl8uVkVSU0lPTiA9IFZFUlNJT047XG5cbi8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuXy5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG59O1xuXG4vLyBQcm92aWRlIHVud3JhcHBpbmcgcHJveGllcyBmb3Igc29tZSBtZXRob2RzIHVzZWQgaW4gZW5naW5lIG9wZXJhdGlvbnNcbi8vIHN1Y2ggYXMgYXJpdGhtZXRpYyBhbmQgSlNPTiBzdHJpbmdpZmljYXRpb24uXG5fLnByb3RvdHlwZS52YWx1ZU9mID0gXy5wcm90b3R5cGUudG9KU09OID0gXy5wcm90b3R5cGUudmFsdWU7XG5cbl8ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBTdHJpbmcodGhpcy5fd3JhcHBlZCk7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZUVzY2FwZXIgZnJvbSAnLi9fY3JlYXRlRXNjYXBlci5qcyc7XG5pbXBvcnQgdW5lc2NhcGVNYXAgZnJvbSAnLi9fdW5lc2NhcGVNYXAuanMnO1xuXG4vLyBGdW5jdGlvbiBmb3IgdW5lc2NhcGluZyBzdHJpbmdzIGZyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRXNjYXBlcih1bmVzY2FwZU1hcCk7XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IHVuaXEgZnJvbSAnLi91bmlxLmpzJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJy4vX2ZsYXR0ZW4uanMnO1xuXG4vLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2Zcbi8vIHRoZSBwYXNzZWQtaW4gYXJyYXlzLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheXMpIHtcbiAgcmV0dXJuIHVuaXEoZmxhdHRlbihhcnJheXMsIHRydWUsIHRydWUpKTtcbn0pO1xuIiwiaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuL2lzQm9vbGVhbi5qcyc7XG5pbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gJy4vY29udGFpbnMuanMnO1xuXG4vLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuLy8gYmVlbiBzb3J0ZWQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdXNpbmcgYSBmYXN0ZXIgYWxnb3JpdGhtLlxuLy8gVGhlIGZhc3RlciBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGFuIGl0ZXJhdGVlIGlmIHRoZSBpdGVyYXRlZVxuLy8gaXMgbm90IGEgb25lLXRvLW9uZSBmdW5jdGlvbiwgc28gcHJvdmlkaW5nIGFuIGl0ZXJhdGVlIHdpbGwgZGlzYWJsZVxuLy8gdGhlIGZhc3RlciBhbGdvcml0aG0uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxKGFycmF5LCBpc1NvcnRlZCwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgaWYgKCFpc0Jvb2xlYW4oaXNTb3J0ZWQpKSB7XG4gICAgY29udGV4dCA9IGl0ZXJhdGVlO1xuICAgIGl0ZXJhdGVlID0gaXNTb3J0ZWQ7XG4gICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgfVxuICBpZiAoaXRlcmF0ZWUgIT0gbnVsbCkgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHNlZW4gPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUsIGksIGFycmF5KSA6IHZhbHVlO1xuICAgIGlmIChpc1NvcnRlZCAmJiAhaXRlcmF0ZWUpIHtcbiAgICAgIGlmICghaSB8fCBzZWVuICE9PSBjb21wdXRlZCkgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgc2VlbiA9IGNvbXB1dGVkO1xuICAgIH0gZWxzZSBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgIGlmICghY29udGFpbnMoc2VlbiwgY29tcHV0ZWQpKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFjb250YWlucyhyZXN1bHQsIHZhbHVlKSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbi8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG52YXIgaWRDb3VudGVyID0gMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXF1ZUlkKHByZWZpeCkge1xuICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbn1cbiIsImltcG9ydCBtYXggZnJvbSAnLi9tYXguanMnO1xuaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuaW1wb3J0IHBsdWNrIGZyb20gJy4vcGx1Y2suanMnO1xuXG4vLyBDb21wbGVtZW50IG9mIHppcC4gVW56aXAgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgYW5kIGdyb3Vwc1xuLy8gZWFjaCBhcnJheSdzIGVsZW1lbnRzIG9uIHNoYXJlZCBpbmRpY2VzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW56aXAoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IChhcnJheSAmJiBtYXgoYXJyYXksIGdldExlbmd0aCkubGVuZ3RoKSB8fCAwO1xuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IHBsdWNrKGFycmF5LCBpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgdmFyIF9rZXlzID0ga2V5cyhvYmopO1xuICB2YXIgbGVuZ3RoID0gX2tleXMubGVuZ3RoO1xuICB2YXIgdmFsdWVzID0gQXJyYXkobGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhbHVlc1tpXSA9IG9ialtfa2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiIsImltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXIuanMnO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSAnLi9tYXRjaGVyLmpzJztcblxuLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgXy5maWx0ZXJgOiBzZWxlY3Rpbmcgb25seVxuLy8gb2JqZWN0cyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2hlcmUob2JqLCBhdHRycykge1xuICByZXR1cm4gZmlsdGVyKG9iaiwgbWF0Y2hlcihhdHRycykpO1xufVxuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBkaWZmZXJlbmNlIGZyb20gJy4vZGlmZmVyZW5jZS5qcyc7XG5cbi8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheSwgb3RoZXJBcnJheXMpIHtcbiAgcmV0dXJuIGRpZmZlcmVuY2UoYXJyYXksIG90aGVyQXJyYXlzKTtcbn0pO1xuIiwiaW1wb3J0IHBhcnRpYWwgZnJvbSAnLi9wYXJ0aWFsLmpzJztcblxuLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4vLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4vLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcChmdW5jLCB3cmFwcGVyKSB7XG4gIHJldHVybiBwYXJ0aWFsKHdyYXBwZXIsIGZ1bmMpO1xufVxuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCB1bnppcCBmcm9tICcuL3VuemlwLmpzJztcblxuLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKHVuemlwKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IGxvYWRJY29uIH0gZnJvbSAnLi4vaW1hZ2VMb2FkZXInO1xuaW1wb3J0IHsgbG9hZEJvYXJkIH0gZnJvbSAnLi4vcGFnZUxvYWQnO1xuaW1wb3J0IHsgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxuLy8gU2hvdyB0aGUgcmlnaHQgc2hpcCwgcG9zaXRpb24gYW5kIGF4aXMgb24gc2hpcC1wbGFjaW5nIHN0YWdlLlxuLy8gV2lsbCBjaGVjayBheGlzLCB0aGUgY29yZCBnaXZlbiBhbmQgc2hpcCB0eXBlIHRvIG1ha2UgaXQgcG9zc2libGUuXG5mdW5jdGlvbiBzaGlwUHJldmlld0V4cGFuZGVyKGNvcmQsIHBsYXllciwgc2hpcCkge1xuICBjb25zdCBkaXJBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaXItb3B0aW9uJyk7XG4gIC8vIEkgc3VwcG9zZSB0aGlzIHJlYWRzIHRoZSB0ZXh0IHZhbHVlLi4uXG4gIGNvbnN0IGF4aXMgPSBbLi4uZGlyQXJyXS5maWx0ZXIoKGRpck9iaikgPT4gZGlyT2JqLmNoZWNrZWQpWzBdLnZhbHVlO1xuICAvLyBUYWtlIHRoZSBjb29yZCBhbmQgdXNlIGl0IHRvIGJ1aWxkIHRoZSBib2R5O1xuICBjb25zdCBzdGFydCA9IFsuLi5jb3JkXTtcbiAgY29uc3QgYm9keSA9IEFycmF5KHNoaXAubGVuZ3RoKVxuICAgIC5maWxsKClcbiAgICAubWFwKCgpID0+IHtcbiAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIFtzdGFydFswXSwgc3RhcnRbMV0rK107XG4gICAgICB9XG4gICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbiAgICB9KTtcblxuICAvLyBDaGVjayBpZiB0aGVyZSdzIGFueSBvdmVybGFwXG4gIGNvbnN0IG92ZXJsYXAgPSBwbGF5ZXJcbiAgICAuYm9hcmRcbiAgICAubGlzdFxuICAgIC5zb21lKChwbGF5ZXJTaGlwKSA9PiBwbGF5ZXJTaGlwXG4gICAgICAucG9zaXRpb24uc29tZSgoc2hpcFBvcykgPT4gYm9keVxuICAgICAgICAuc29tZSgoYm9keVBvcykgPT4gXy5pc0VxdWFsKGJvZHlQb3MsIHNoaXBQb3MpKSkpO1xuICByZXR1cm4ge1xuICAgIGJvZHksXG4gICAgb3ZlcmxhcCxcbiAgfTtcbn1cblxuLy8gY29uc3QgZGlyT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rpci1vcHRpb24nKTtcbi8vIGNvbnN0IGF4aXNPcHRpb24gPSBbLi4uZGlyT3B0aW9uc10uZmlsdGVyKChkaXJPYmopID0+IGRpck9iai5jaGVja2VkKVswXS52YWx1ZTtcbi8vIGNvbnN0IGltZyA9IGxvYWRJY29uKHR5cGUsIGNvcmQuaW5kZXhPZihjb29yZGluYXRlKSArIDEsIGF4aXNPcHRpb24pO1xuLy8gYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1nfScpYDtcblxuLy8gUmVzcG9uc2libGUgZm9yIGFuaW1hdGluZyBwcmV2aWV3XG5mdW5jdGlvbiBzaGlwUHJldmlldyhjb3JkLCBib2FyZEJveGVzLCBwbGF5ZXIsIHNoaXAsIGV2ZW50KSB7XG4gIC8vIEdldCBheGlzIGluZm9ybWF0aW9uIG9mIHNoaXBcbiAgY29uc3QgZGlyT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rpci1vcHRpb24nKTtcbiAgY29uc3QgYXhpc09wdGlvbiA9IFsuLi5kaXJPcHRpb25zXS5maWx0ZXIoKGRpck9iaikgPT4gZGlyT2JqLmNoZWNrZWQpWzBdLnZhbHVlO1xuICBjb3JkLmZvckVhY2goKHBvcywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBib3ggPSBbLi4uYm9hcmRCb3hlc11bcG9zWzBdICogMTAgKyBwb3NbMV1dO1xuICAgIGNvbnN0IGltZyA9IGxvYWRJY29uKHNoaXAubmFtZSwgaW5kZXggKyAxLCBheGlzT3B0aW9uKTtcbiAgICBib3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWd9JylgO1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBib3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgfTtcbiAgICBldmVudC50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBldmVudExpc3RlbmVyKTtcbiAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyIG9uY2UgYSBjZWxsIGlzIGNsaWNrZWRcbiAgICBldmVudC50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBib2FyZEJveGVzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihjZWxsKTtcbiAgICAgIH0pO1xuICAgICAgbG9hZEJvYXJkKHBsYXllciwgcGxheWVyLmlzVHVybiA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gZm9yIGFuaW1hdGluZyBzaGlwIHByZXZpZXcgZXZlcnl0aGluZyBpdCBob3ZlcnMgb250byBhIGJveCBvciBvdXQgb2YgaXRcbmZ1bmN0aW9uIGFuaW1hdGlvbkV2ZW50KGV2ZW50LCBib2FyZEJveGVzLCBwbGF5ZXIsIHNoaXApIHtcbiAgY29uc3QgeyBib2R5LCBvdmVybGFwIH0gPSBzaGlwUHJldmlld0V4cGFuZGVyKFxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wb3NcbiAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxMCkpLFxuICAgIHBsYXllcixcbiAgICBzaGlwLFxuICApO1xuXG4gIGNvbnN0IGlzU2hpcE92ZXJmbG93aW5nID0gYm9keS5maW5kKChwb3MpID0+IHBvc1sxXSA+PSAxMCk7XG4gIC8vIERvIG5vdGhpbmdcbiAgLy8gaWYgc2hpcCBpcyBvdmVyZmxvd2luZyB0aGUgYm9hcmQsIG9yIGNvbGxpZGluZyB3aWh0IG90aGVyc2hpcFxuICBpZiAob3ZlcmxhcCB8fCBpc1NoaXBPdmVyZmxvd2luZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNoaXBQcmV2aWV3KGJvZHksIGJvYXJkQm94ZXMsIHBsYXllciwgc2hpcCwgZXZlbnQpO1xufVxuXG4vLyBGdW5jdGlvbiBmb3IgYWRkaW5nIGFuaW1hdGlvblxuZnVuY3Rpb24gYWRkQW5pbWF0aW9uRXZlbnQoYWRkLCBib2FyZEJveGVzLCBwbGF5ZXIsIHNoaXApIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGFuaW1hdGlvbkV2ZW50KGV2ZW50LCBib2FyZEJveGVzLCBwbGF5ZXIsIHNoaXApO1xuICB9O1xuICBpZiAoYWRkKSB7XG4gICAgYm9hcmRCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBib2FyZEJveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEFuaW1hdGlvbkV2ZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9