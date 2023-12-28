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
    console.log(hasWin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsS0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JRjtBQUNtQztBQUNJOztBQUV2QztBQUNPO0FBQ1AsVUFBVSx1QkFBdUIsRUFBRSx1RUFBc0I7QUFDekQsYUFBYSxxREFBSTtBQUNqQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUQ7QUFDQTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFMEI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsc0RBQVc7QUFDYixFQUFFLG9EQUFTOztBQUVYO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxrRUFBc0I7QUFDbkU7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8vVXNlcnMvbWFjYm9va2Fpci9yZXBvcy9iYXR0bGVzaGlwL3NyYy9hc3NldHMvc2hpcHN8c3luY3xub25yZWN1cnNpdmV8L1xcLnBuZyQvIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvaW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy91dGlsaXRpZXMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3V0aWxpdGllcy9hdHRhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtaG9yaV8wMy5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzA0LnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDEucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wMi5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtdmVydF8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC12ZXJ0XzAzLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDQucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wMS5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDMucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzA1LnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDEucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wMi5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzAzLnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDQucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wNS5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItaG9yaV8wMS5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItaG9yaV8wMi5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci1ob3JpXzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItaG9yaV8wMy5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItdmVydF8wMS5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci12ZXJ0XzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItdmVydF8wMi5wbmdcIixcblx0XCIuL2Rlc3Ryb3llci12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9kZXN0cm95ZXItdmVydF8wMy5wbmdcIixcblx0XCIuL3BhdHJvbC1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9wYXRyb2wtaG9yaV8wMS5wbmdcIixcblx0XCIuL3BhdHJvbC1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9wYXRyb2wtaG9yaV8wMi5wbmdcIixcblx0XCIuL3BhdHJvbC12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9wYXRyb2wtdmVydF8wMS5wbmdcIixcblx0XCIuL3BhdHJvbC12ZXJ0XzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9wYXRyb2wtdmVydF8wMi5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtaG9yaV8wMS5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtaG9yaV8wMi5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS1ob3JpXzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtaG9yaV8wMy5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS12ZXJ0XzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtdmVydF8wMS5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS12ZXJ0XzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtdmVydF8wMi5wbmdcIixcblx0XCIuL3N1Ym1hcmluZS12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9zdWJtYXJpbmUtdmVydF8wMy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL3NoaXBzIHN5bmMgXFxcXC5wbmckXCI7IiwiLy8gSW1wb3J0IGFsbCBzaGlwIGltYWdlc1xuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgY29uc3QgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpbWFnZXNbaXRlbS5yZXBsYWNlKC8oLlxcL3xcXC5wbmckKS9nLCAnJyldID0gcihpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy9zaGlwcycsIGZhbHNlLCAvXFwucG5nJC8pKTtcblxuZnVuY3Rpb24gbG9hZEljb24odHlwZSwgbnVtLCBkaXIpIHtcbiAgY29uc3QgZGlyTmFtZSA9IGRpciA9PT0gJ2hvcml6b250YWwnID8gJ2hvcmknIDogJ3ZlcnQnO1xuICByZXR1cm4gaW1hZ2VzW2Ake3R5cGV9LSR7ZGlyTmFtZX1fMCR7bnVtfWBdO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgbG9hZEljb24gfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbi8vIFRoZSBtYWluIEdhbWUgb2JqZWN0IGZvciBleHBvc2luZyBpbmZvcm1hdGlvbiBmb3IgZWFjaCBzdGFnZXMgdG8gdXNlc1xuLy8gMS4gUGxheWVyc1xuLy8gMi4gUGxheWVyIGZvciBDdXJyZW50IFR1cm5cbi8vIDMuIEN1cnJlbnQgQm9hcmRcbi8vIDQuIGlzU3RhcnRlZCBmb3IgY2hlY2tpbmcgaWYgcGxhY2VtZW50IGhhcyBiZWVuIHNldFxuLy8gNS4gY3VycmVudCBnYW1lbW9kZSAoaXNNdWx0aXBsYXllcilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGlzTXVsdGlwbGF5ZXIsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gICAgdGhpcy5pc011bHRpcGxheWVyID0gaXNNdWx0aXBsYXllcjtcbiAgICB0aGlzLnBsYXllck9uZSA9IHBsYXllck9uZTtcbiAgICB0aGlzLnBsYXllclR3byA9IHBsYXllclR3bztcbiAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY3VycmVudFR1cm4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyT25lLmlzVHVyblxuICAgICAgPyB0aGlzLnBsYXllck9uZSA6IHRoaXMucGxheWVyVHdvO1xuICB9XG5cbiAgY3VycmVudEJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMucGxheWVyT25lLmlzVHVybiA/ICdsZWZ0JyA6ICdyaWdodCd9LWNvbnRlbnRgKVswXTtcbiAgICBjb25zdCBib2FyZCA9IFsuLi5ib2FyZENvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV07XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHJldHVyblBsYXllclR1cm4oZ2FtZU9iamVjdCkge1xuLy8gICByZXR1cm4gZ2FtZU9iamVjdC5wbGF5ZXJPbmUuaXNUdXJuXG4vLyAgICAgPyBnYW1lT2JqZWN0LnBsYXllck9uZVxuLy8gICAgIDogZ2FtZU9iamVjdC5wbGF5ZXJUd287XG4vLyB9XG5cbi8vLyBPbGQgVmVyc2lvbiFcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoaXNNdWx0aXBsYXllciwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbi8vICAgbGV0IGlzU3RhcnRlZCA9IGZhbHNlO1xuXG4vLyAgIC8vIFJldHVybiBwbGF5ZXIgd2hvc2UgdHVybnMgaXMgdGhlaXJzXG4vLyAgIGZ1bmN0aW9uIGN1cnJlbnRUdXJuKCkge1xuLy8gICAgIHJldHVybiByZXR1cm5QbGF5ZXJUdXJuKHRoaXMpO1xuLy8gICB9XG5cbi8vICAgLy8gUmV0dXJuIGJvYXJkIG9mIHBsYXllciB3aG9zZSB0dXJucyBpcyB0aGVyZVxuLy8gICBmdW5jdGlvbiBjdXJyZW50Qm9hcmQoKSB7XG4vLyAgICAgcmV0dXJuXG4vLyAgICAgICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7cGxheWVyT25lLmlzVHVybiA/ICdsZWZ0JyA6ICdyaWdodCd9LWNvbnRlbnRgKVswXVxuLy8gICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcGxheWVyT25lLCBwbGF5ZXJUd28sIGN1cnJlbnRUdXJuLCBjdXJyZW50Qm9hcmQsIGlzU3RhcnRlZCwgaXNNdWx0aXBsYXllcixcbi8vICAgfTtcbi8vIH1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB0aGlzLmF0dGFja3MgPSBbXTtcbiAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICB0aGlzLm1pc3NlcyA9IFtdO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdHdvIHNldCBvZiBhcnJheSBjb250YWluIHNpbWlsYXIgZWxlbWVudHNcbiAgc3RhdGljIGludGVyc2VjdChhLCBiKSB7XG4gICAgcmV0dXJuIGEuZmluZCgocG9zKSA9PiBiXG4gICAgICAuZmluZCgoY3VycmVudFBvcykgPT4gY3VycmVudFBvc1swXSA9PT0gcG9zWzBdICYmIGN1cnJlbnRQb3NbMV0gPT09IHBvc1sxXSkpO1xuICB9XG5cbiAgLy8gUmV0dXJuIGZhbHNlIGlmIHNoaXAgYm9keSBpcyBvdmVyIDkgKHdoaWNoIGlzIG92ZXIgdGhlIGJvYXJkIGJvdW5kYXJ5KVxuICBzdGF0aWMgaGl0Qm91bmRhcnkocG9zaXRpb24sIGF4aXMpIHtcbiAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICByZXR1cm4gcG9zaXRpb24uZmluZCgocG9zKSA9PiAocG9zWzFdID4gOSkpO1xuICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICByZXR1cm4gcG9zaXRpb24uZmluZCgocG9zKSA9PiAocG9zWzBdID4gOSkpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgYXhpcycpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIHNoaXAgY2FuIGJlIHBsYWNlZCBvbiBhIGNlcnRhaW4gc3F1YXJlLCB3aXRob3V0IGNvbGxpc2lvblxuICAvLyB3aXRoIHRoZSBib3JkZXIgb3Igb3RoZXIgc2hpcHMuXG4gIC8vIHRha2VzIGFsbCB0aGUgc2hpcCBhcyBhcmd1bWVudCB0byBjaGVjayBmb3IgY29sbGlzb25cbiAgaXNWYWxpZChwb3NpdGlvbiwgYXhpcykge1xuICAgIC8vIENoZWNrIGlmIHNoaXAgb3ZlcmxhcHMgb3ZlciBhbnkgb3RoZXIgc2hpcHNcbiAgICBjb25zdCBoYXNDb2xsaXNpb24gPSB0aGlzLmxpc3RcbiAgICAgIC5maW5kKChzaGlwKSA9PiBHYW1lQm9hcmQuaW50ZXJzZWN0KHNoaXAucG9zaXRpb24sIHBvc2l0aW9uKSk7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHNoaXAgZG9lc24ndCBvdmVybGFwIHdpdGggdGhlIGJvdW5kYXJ5XG4gICAgLy8gQWNjZXB0IHRoZSBjdXJyZW50IHNoaXAncyBwb3NpdGlvbiBhbmQgYXhpc1xuICAgIGNvbnN0IHZhbGlkQm91bmRhcnkgPSAhR2FtZUJvYXJkLmhpdEJvdW5kYXJ5KHBvc2l0aW9uLCBheGlzKTtcbiAgICByZXR1cm4gIWhhc0NvbGxpc2lvbiAmJiB2YWxpZEJvdW5kYXJ5O1xuICB9XG5cbiAgLy8gUGxhY2Ugc2hpcCwgYnVpbGQgYSBzaGlwLCBjaGVjayBpZiBpdCBpcyB2YWxpZC5cbiAgcGxhY2Uoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGluaXRpYWxpemVkU2hpcCA9IG5ldyBTaGlwKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoaW5pdGlhbGl6ZWRTaGlwLnBvc2l0aW9uLCBheGlzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmxpc3QucHVzaChpbml0aWFsaXplZFNoaXApO1xuICAgIHJldHVybiBpbml0aWFsaXplZFNoaXA7XG4gIH1cblxuICBzdGF0aWMgc3dhcFR1cm4oZ2FtZU9iamVjdCkge1xuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGdhbWVPYmplY3Q7XG4gICAgcGxheWVyT25lLmlzVHVybiA9ICFwbGF5ZXJPbmUuaXNUdXJuO1xuICAgIHBsYXllclR3by5pc1R1cm4gPSAhcGxheWVyVHdvLmlzVHVybjtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGF0dGFjayBpcyBvdXQgb2YgYm91bmQgb3IgYWxyZWFkeSBleGlzdCwgdGhlbiByZXRyeVxuICAvLyBJZiBpdCBpcyB2YWxpZCwgY2hlY2tzIGlmIGEgc2hpcCBpcyBoaXQ7IG1vZGlmeSBzaGlwIGlmIGhpdFxuICByZWNlaXZlQXR0YWNrKGNvcmQsIGdhbWVPYmplY3QpIHtcbiAgICBjb25zdCBpc0V4aXN0ID0gdGhpcy5hdHRhY2tzLmZpbmQoKGF0dGFjaykgPT4gYXR0YWNrWzBdID09PSBjb3JkWzBdICYmIGF0dGFja1sxXSA9PT0gY29yZFsxXSk7XG5cbiAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IHRoaXMubGlzdC5maW5kKChzaGlwKSA9PiBzaGlwLmhpdChjb3JkKSk7XG5cbiAgICBHYW1lQm9hcmQuc3dhcFR1cm4oZ2FtZU9iamVjdCk7XG5cbiAgICB0aGlzLmF0dGFja3MucHVzaChjb3JkKTtcblxuICAgIGlmIChoaXQpIHtcbiAgICAgIHRoaXMuaGl0cy5wdXNoKGNvcmQpO1xuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cblxuICAgIHRoaXMubWlzc2VzLnB1c2goY29yZCk7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoaXNCb3QsIGluaXRpYWxUdXJuKSB7XG4gICAgdGhpcy5pc0JvdCA9IGlzQm90O1xuICAgIHRoaXMuaXNUdXJuID0gaW5pdGlhbFR1cm47XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIC8vIEJvdCBjcmVhdGUgcmFuZG9tIGF0dGFjayBjb3JkIG9uIHRoZSBib2FyZCwga2VlcCByZXRyeWluZyBpZiBpdCBpcyBub3QgdmFsaWQ7XG4gIGJvdEV2YWwocGxheWVyKSB7XG4gICAgY29uc3QgcmFuZCA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgY29uc3QgYXR0YWNrRXhpc3QgPSBwbGF5ZXJcbiAgICAgIC5ib2FyZC5hdHRhY2tzXG4gICAgICAuZmluZCgoYXR0ZW1wdCkgPT4gYXR0ZW1wdFswXSA9PT0gcmFuZFswXSAmJiBhdHRlbXB0WzFdID09PSByYW5kWzFdKTtcblxuICAgIGlmIChhdHRhY2tFeGlzdCkge1xuICAgICAgcmV0dXJuIHRoaXMuYm90RXZhbChwbGF5ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kO1xuICB9XG5cbiAgLy8gUGxheWVyIHNpbXBseSByZWNlaXZlIGF0dGFjayBpZiBpdCBpcyBub3QgYSBib3QgKGltcGx5aW5nIGNvb3JkaW5hdGUgZXhpc3RzKVxuICAvLyBvdGhlcndpc2UsIGEgY29vcmQgaXMgcmFuZG9tbHkgZ2VuZXJhdGVkIGZvciB0aGUgYm90IHRvIGF0dGFja1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm4sIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgYXR0YWNrKHBsYXllciwgY29vcmRpbmF0ZSwgZ2FtZU9iamVjdCkge1xuICAgIHJldHVybiBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlLCBnYW1lT2JqZWN0KTtcbiAgfVxuXG4gIC8vIE9ubHkgdXNlIHRvIGRlY2lkZSBpZiBwbGF5ZXJPbmUgaXMgYSBib3Qgb3IgYSByZWFsIHBsYXllclxuICBzdGF0aWMgcmFuZG9tUGxheWVyRGVjaWRlcigpIHtcbiAgICBjb25zdCB0dXJuRGVjaWRlciA9IE1hdGgucmFuZG9tKCkgPj0gMC41O1xuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSA+PSAwLjUpXG4gICAgICA/IG5ldyBQbGF5ZXIodHVybkRlY2lkZXIsIHRydWUpXG4gICAgICA6IG5ldyBQbGF5ZXIodHVybkRlY2lkZXIsIHRydWUpO1xuICB9XG5cbiAgLy8gU2luZ2xlcGxheWVyIG9iamVjdCBmb3IgaW5pdGlhbGl6aW5nIGEgYm90IGFuZCBhIHJlYWwgcGxheWVyXG4gIHN0YXRpYyBzaW5nbGVwbGF5ZXJJbml0KG5hbWVzID0gWydQbGF5ZXIgT25lJywgJ1BsYXllciBUd28nXSkge1xuICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllci5yYW5kb21QbGF5ZXJEZWNpZGVyKGZhbHNlKTtcbiAgICBjb25zdCBwbGF5ZXJPbmVJc0JvdCA9IHBsYXllck9uZS5pc0JvdDtcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCFwbGF5ZXJPbmVJc0JvdCwgIXBsYXllck9uZS5pc1R1cm4pO1xuXG4gICAgaWYgKHBsYXllck9uZUlzQm90KSB7XG4gICAgICBwbGF5ZXJUd28ubmFtZSA9IG5hbWVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJPbmUubmFtZSA9IG5hbWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcGxheWVyT25lLFxuICAgICAgcGxheWVyVHdvLFxuICAgIH07XG4gIH1cblxuICAvLyBNdWx0aXBsYXllciBvYmplY3QgZm9yIGluaXRpYWxpemluZyBib3RoIHJlYWwgcGxheWVyc1xuICBzdGF0aWMgbXVsdGlwbGF5ZXJJbml0KG5hbWVzID0gWydQbGF5ZXIgT25lJywgJ1BsYXllciBUd28nXSkge1xuICAgIGNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IG5ldyBQbGF5ZXIoZmFsc2UsIGZhbHNlKTtcblxuICAgIHBsYXllck9uZS5uYW1lID0gbmFtZXNbMF07XG4gICAgcGxheWVyVHdvLm5hbWUgPSBuYW1lc1sxXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwbGF5ZXJPbmUsXG4gICAgICBwbGF5ZXJUd28sXG4gICAgfTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmV4cG9ydCBjb25zdCBTaGlwcyA9IHtcbiAgcGF0cm9sOiB7XG4gICAgbmFtZTogJ3BhdHJvbCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIG9yZGVyOiAxLFxuICB9LFxuICBzdWJtYXJpbmU6IHtcbiAgICBuYW1lOiAnc3VibWFyaW5lJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgb3JkZXI6IDIsXG4gIH0sXG4gIGRlc3Ryb3llcjoge1xuICAgIG5hbWU6ICdkZXN0cm95ZXInLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMyxcbiAgfSxcbiAgYmF0dGxlc2hpcDoge1xuICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICBsZW5ndGg6IDQsXG4gICAgb3JkZXI6IDQsXG4gIH0sXG4gIGNhcnJpZXI6IHtcbiAgICBuYW1lOiAnY2FycmllcicsXG4gICAgbGVuZ3RoOiA1LFxuICAgIG9yZGVyOiA1LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgICB0aGlzLmxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgIHRoaXMuYXhpcyA9IGF4aXM7XG4gICAgdGhpcy5jb29yZGluYXRlID0gY29vcmRpbmF0ZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gW107XG4gICAgdGhpcy5idWlsZFNoaXAoKTtcbiAgICB0aGlzLmRhbWFnZSA9IFtdO1xuICB9XG5cbiAgLy8gVGFrZXMgY29vcmRpbmF0ZSwgYXhpcywgYW5kIGxlbmd0aCwgYW5kIGJ1aWxkIHNoaXAgb24gYSBjZXJ0YWluIGNlbGwgcG9zaXRpb25cbiAgYnVpbGRTaGlwKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnQgPSBbLi4udGhpcy5jb29yZGluYXRlXTtcbiAgICBjb25zdCBib2R5ID0gQXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuIFtzdGFydFswXSwgc3RhcnRbMV0rK107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4gICAgICB9KTtcbiAgICB0aGlzLnBvc2l0aW9uID0gYm9keTtcbiAgfVxuXG4gIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuICBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBpc0hpdCA9IHRoaXMucG9zaXRpb24uc29tZSgocG9zKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaEhpdFBvcyA9IHZhbHVlWzBdID09PSBwb3NbMF0gJiYgdmFsdWVbMV0gPT09IHBvc1sxXTtcbiAgICAgIGlmIChtYXRjaEhpdFBvcykge1xuICAgICAgICB0aGlzLmRhbWFnZS5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaEhpdFBvcztcbiAgICB9KTtcbiAgICByZXR1cm4gaXNIaXQ7XG4gIH1cblxuICAvLyBEYW1hZ2UgcmV0dXJuIHRydWUgb2YgZGFtYWdlIGxlbmd0aCBpcyBlcXVhbCB0byBib2R5IGxlbmd0aFxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cblxuLy8gLy8gVGFrZXMgY29vcmRpbmF0ZSwgYXhpcywgYW5kIGxlbmd0aCwgYW5kIGJ1aWxkIHNoaXAgb24gYSBjZXJ0YWluIGNlbGwgcG9zaXRpb25cbi8vIGZ1bmN0aW9uIGJ1aWxkU2hpcChsZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbi8vICAgY29uc3Qgc3RhcnQgPSBbLi4uY29vcmRpbmF0ZV07XG4vLyAgIGNvbnN0IGJvZHkgPSBBcnJheShsZW5ndGgpXG4vLyAgICAgLmZpbGwoKVxuLy8gICAgIC5tYXAoKCkgPT4ge1xuLy8gICAgICAgaWYgKGF4aXMgPT09ICdob3Jpem9udGFsJykge1xuLy8gICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiBbc3RhcnRbMF0rKywgc3RhcnRbMV1dO1xuLy8gICAgIH0pO1xuLy8gICByZXR1cm4gYm9keTtcbi8vIH1cblxuLy8gLy8gRnVuY3Rpb24gQ29uc3RydWN0b3IgZm9yIHNoaXBcbi8vIGZ1bmN0aW9uIFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuLy8gICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcDtcbi8vICAgY29uc3QgZGFtYWdlID0gW107XG4vLyAgIC8vIEluaWl0aWFsaXplIHNoaXAgd2l0aCBhIHV0aWxpdHkgZnVuY3Rpb24gYnVpbGRTaGlwXG4vLyAgIGNvbnN0IHBvc2l0aW9uID0gYnVpbGRTaGlwKHNoaXAubGVuZ3RoLCBheGlzLCBjb29yZGluYXRlKTtcblxuLy8gICAvLyBUYWtlIGEgY29yZCBhbmQgY2hlY2sgaWYgY29yZCBoaXRzIGFueSBib2R5IGNvcmRcbi8vICAgZnVuY3Rpb24gaGl0KHZhbHVlKSB7XG4vLyAgICAgY29uc3QgaXNIaXQgPSBwb3NpdGlvbi5zb21lKChwb3MpID0+IHtcbi8vICAgICAgIGNvbnN0IG1hdGNoSGl0UG9zID0gdmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdO1xuLy8gICAgICAgaWYgKG1hdGNoSGl0UG9zKSB7XG4vLyAgICAgICAgIGRhbWFnZS5wdXNoKHZhbHVlKTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiBtYXRjaEhpdFBvcztcbi8vICAgICB9KTtcbi8vICAgICByZXR1cm4gaXNIaXQ7XG4vLyAgIH1cblxuLy8gICAvLyBEYW1hZ2UgcmV0dXJuIHRydWUgb2YgZGFtYWdlIGxlbmd0aCBpcyBlcXVhbCB0byBib2R5IGxlbmd0aFxuLy8gICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4vLyAgICAgcmV0dXJuIGRhbWFnZS5sZW5ndGggPT09IGxlbmd0aDtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgbGVuZ3RoLFxuLy8gICAgIGRhbWFnZSxcbi8vICAgICBheGlzLFxuLy8gICAgIHBvc2l0aW9uLFxuLy8gICAgIGhpdCxcbi8vICAgICBpc1N1bmssXG4vLyAgIH07XG4vLyB9XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1hcnJvdy1jYWxsYmFjayAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBTaGlwcyB9IGZyb20gJy4vb2JqZWN0cy9zaGlwJztcbmltcG9ydCB7IGxvYWRJY29uIH0gZnJvbSAnLi9pbWFnZUxvYWRlcic7XG5cbi8vIEVudW1lcmF0ZWQgYXJyYXlzIG9mIHNoaXBzIHRvIGJlIHBsYWNlZFxuY29uc3Qgc2hpcE9yZGVycyA9IE9iamVjdC52YWx1ZXMoU2hpcHMpLnNvcnQoKGxhc3QsIG5leHQpID0+IGxhc3Qub3JkZXIgPCBuZXh0Lm9yZGVyKTtcblxuLy8gbG9hZCBhbGwgdGhlIHNoaXBzIG9uIHRoZSBib2FyZCB3aGVuIGNhbGxlZFxuZnVuY3Rpb24gbG9hZEJvYXJkKHBsYXllciwgc2lkZSkge1xuICBwbGF5ZXIuYm9hcmQubGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBpZiAoYm94LmRhdGFzZXQucG9zID09PSBjb3JkLmpvaW4oKSkge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gc2hpcE9yZGVyc1twbGF5ZXIuYm9hcmQubGlzdC5pbmRleE9mKHNoaXApXTtcbiAgICAgICAgICBjb25zdCBzaGlwSW1nID0gbG9hZEljb24obmFtZSwgc2hpcC5wb3NpdGlvbi5pbmRleE9mKGNvcmQpICsgMSwgc2hpcC5heGlzKTtcbiAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzaGlwSW1nfScpYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyB1bmxvYWQgYWxsIHRoZSBzaGlwcyBvbiBhIGJvYXJkXG5mdW5jdGlvbiB1bmxvYWRCb2FyZChzaWRlKSB7XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV0uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICB9KTtcbn1cblxuLy8gQSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBsb2dpYyBmb3IgaW5pdGlhbGl6aW5nIGFuZCBsb2FkaW5nIHVwIHRoZSBnYW1lIGJvYXJkXG5jb25zdCBib2FyZExvYWQgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgLy8gR2VuZXJhdGUgdGhlIHBhZ2UgZm9yIHNjb3JlIGtlZXBpbmcgYW5kIHR1cm4gaW5mb3JtYXRpb25cbiAgLy8gUmVmYWN0b3IgaW50byB0ZW1wbGF0ZVxuICBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2UobmFtZXMpIHtcbiAgICBjb25zdCBpc011bHRpcGxheWVyID0gbmFtZXMubGVuZ3RoID09PSAyO1xuICAgIGRvY3VtZW50LmJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzPSd0b3AtY29udGFpbmVyJz5cbiAgICAgICAgICA8cCBjbGFzcz0ndHVybi1jb250YWluZXInPlR1cm46IDxzcGFuIGlkPSduYW1lJz48L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdtYWluLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2xlZnQtY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdwbGF5ZXJuYW1lJz4ke25hbWVzWzBdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2hpcHMtY29udGFpbmVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQnPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQtY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdwbGF5ZXJuYW1lJz4ke2lzTXVsdGlwbGF5ZXIgPyBuYW1lc1sxXSA6ICdCT1QnfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2hpcHMtY29udGFpbmVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQnPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIGA7XG4gIH1cbiAgLy8gR2VuZXJhdGUgdGhlIHdob2xlIGNlbGxzIGZvciBlYWNoIGJvYXJkXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQm94KCkge1xuICAgIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZCcpXS5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnQgPSBbMCwgMF07XG4gICAgICBBcnJheSgxMDApXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnYm94JztcbiAgICAgICAgICBib3guZGF0YXNldC5wb3MgPSBzdGFydDtcbiAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICAgIGlmIChzdGFydFsxXSA8PSA5KSB7XG4gICAgICAgICAgICBzdGFydFsxXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnRbMV0gPT09IDEwKSB7XG4gICAgICAgICAgICBzdGFydFsxXSA9IDA7XG4gICAgICAgICAgICBzdGFydFswXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLy8gYXNzaWduIGFwcHJvcHJpYXRlIGNsYXNzZXMgdG8gZGlzdGluY3QgbGVmdCBhbmQgcmlnaHRcbiAgZnVuY3Rpb24gYXNzaWduUGFyZW50KCkge1xuICAgIFsnbGVmdCcsICdyaWdodCddLmZvckVhY2goKHNpZGUpID0+IHtcbiAgICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF1cbiAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpO1xuICAgICAgWy4uLmJveGVzXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgYm94LmRhdGFzZXQuc2lkZSA9IHNpZGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2VuZXJhdGVQYWdlLCBnZW5lcmF0ZUJveCwgYXNzaWduUGFyZW50LFxuICB9O1xufSgpKTtcblxuLy8gTG9hZCBvcHRpb24gZm9yIHBsYWNpbmcgc2hpcHMgaW4gYSBjZXJ0YWluIGF4aW9zXG5mdW5jdGlvbiBsb2FkT3B0aW9uKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3AtY29udGFpbmVyJylbMF07XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBUZW1wbGF0ZVxuICBvcHRpb24uaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2Rpci1vcHRpb24nPlxuICAgICAgPGxhYmVsIGZvcj0naG9yaXpvbnRhbCc+SG9yaXpvbnRhbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIGNsYXNzPSdkaXItb3B0aW9uJyB2YWx1ZT0naG9yaXpvbnRhbCcgaWQ9J2hvcml6b250YWwnIG5hbWU9J29wdGlvbicgY2hlY2tlZD5cbiAgICAgIDxsYWJlbCBmb3I9J3ZlcnRpY2FsJz5WZXJ0aWNhbDwvbGFiZWw+PGlucHV0IHR5cGU9J3JhZGlvJyBjbGFzcz0nZGlyLW9wdGlvbicgdmFsdWU9J3ZlcnRpY2FsJyBpZD0ndmVydGljYWwnIG5hbWU9J29wdGlvbic+PC9kaXY+XG4gIGA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG4vLyBMb2FkIGJvYXJkXG5mdW5jdGlvbiBtYWluUGFnZUxvYWQobmFtZXMpIHtcbiAgYm9hcmRMb2FkLmdlbmVyYXRlUGFnZShuYW1lcyk7XG4gIGJvYXJkTG9hZC5nZW5lcmF0ZUJveCgpO1xuICBib2FyZExvYWQuYXNzaWduUGFyZW50KCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKG5hbWVzKSB7XG4gIC8vIExvYWQgcGFnZSBhbmQgaW5pdGlhbGl6ZSBldmVyeSBjZWxscztcbiAgbWFpblBhZ2VMb2FkKG5hbWVzKTtcbiAgLy8gTG9hZCBvcHRpb25zXG4gIGxvYWRPcHRpb24oKTtcbn1cblxuZXhwb3J0IHtcbiAgbWFpblBhZ2VMb2FkLCBsb2FkQm9hcmQsIGxvYWRPcHRpb24sIGJvYXJkTG9hZCwgbG9hZFBhZ2UsIHNoaXBPcmRlcnMsIHVubG9hZEJvYXJkLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBHYW1lIGZyb20gJy4uL29iamVjdHMvZ2FtZSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL29iamVjdHMvcGxheWVyJztcblxuLy8gdXRpbGl0eSBmdW5jdGlvbiBmb3IgaW5pdGlhbGl6aW5nIFRlc3QncyBnYW1lIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlc3RHYW1lT2JqZWN0KCkge1xuICBjb25zdCB7IHBsYXllck9uZSwgcGxheWVyVHdvIH0gPSBQbGF5ZXIubXVsdGlwbGF5ZXJJbml0KCk7XG4gIHJldHVybiBuZXcgR2FtZSh0cnVlLCBwbGF5ZXJPbmUsIHBsYXllclR3byk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxFdmVudExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgY29uc3Qgb2xkRWxlbWVudCA9IGVsZW1lbnQ7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgaWYgKG9sZEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIG9sZEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHVubG9hZEJvYXJkLCBsb2FkQm9hcmQgfSBmcm9tICcuLi9wYWdlTG9hZCc7XG5pbXBvcnQgeyByZW1vdmVBbGxFdmVudExpc3RlbmVyIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3QgYXR0YWNrVXRpbGl0aWVzID0gKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIGZ1bmN0aW9uIGFwcGx5QXR0KGlzSGl0LCBjb3JkLCBzaWRlKSB7XG4gICAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpO1xuICAgIFsuLi5ib3hlc10uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBpZiAoYm94LmRhdGFzZXQucG9zID09PSBjb3JkLmpvaW4oKSkge1xuICAgICAgICBib3gudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGlzSGl0ID09PSAnaGl0JyA/ICdoaXQnIDogJ21pc3MnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja1dpbihhdHRhY2tlciwgZGVmZW5kZXIsIGdhbWVPYmplY3QpIHtcbiAgICBjb25zdCBoYXNXaW4gPSBkZWZlbmRlci5ib2FyZC5saXN0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICBjb25zb2xlLmxvZyhoYXNXaW4pO1xuICAgIGlmIChoYXNXaW4pIHtcbiAgICAgIGdhbWVPYmplY3Qud2lubmVyID0gaGFzV2luO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjayhnYW1lT2JqZWN0LCBjb3JkLCBzaWRlLCBhdHRhY2tlciwgZGVmZW5kZXIpIHtcbiAgICBjb25zdCBjaGVja1ZhbGlkID0gYXR0YWNrZXIuYXR0YWNrKGRlZmVuZGVyLCBjb3JkLCBnYW1lT2JqZWN0KTtcbiAgICBpZiAoIWNoZWNrVmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbHlBdHQoY2hlY2tWYWxpZCwgY29yZCwgc2lkZSk7XG4gICAgY2hlY2tXaW4oYXR0YWNrZXIsIGRlZmVuZGVyLCBnYW1lT2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvdEF0dGFjayhnYW1lT2JqZWN0LCBjYikge1xuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGdhbWVPYmplY3Q7XG4gICAgY29uc3QgYm90ID0gcGxheWVyT25lLmlzQm90ID8gcGxheWVyT25lIDogcGxheWVyVHdvO1xuICAgIGNvbnN0IGRlZmVuZGVyID0gcGxheWVyT25lLmlzQm90ID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xuICAgIGNvbnN0IGF0dGFja2VkU2lkZSA9IGdhbWVPYmplY3QucGxheWVyT25lLmlzQm90XG4gICAgICA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgY29yZCA9IGJvdC5ib3RFdmFsKGRlZmVuZGVyKTtcbiAgICBjb25zdCBjaGVja1ZhbGlkID0gYm90LmF0dGFjayhkZWZlbmRlciwgY29yZCwgZ2FtZU9iamVjdCk7XG4gICAgYXBwbHlBdHQoY2hlY2tWYWxpZCwgY29yZCwgYXR0YWNrZWRTaWRlKTtcbiAgICBjaGVja1dpbihib3QsIGRlZmVuZGVyLCBnYW1lT2JqZWN0KTtcbiAgICBjYihmYWxzZSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIHsgYXR0YWNrLCBib3RBdHRhY2sgfTtcbn0oKSk7XG5cbmV4cG9ydCB7IGF0dGFja1V0aWxpdGllcyB9O1xuXG4vLyBBdHRhY2sgbW9kZVxuLy8gQWNjZXB0cyBnYW1lIG9iamVjdCBmb3Igc3RhdGUgaW5mbyBhbmQgY2IgZm9yIGdhbWUgcHJvZ3Jlc3Npb25cbi8vIEF0dGFjayBtb2RlIGZ1bmN0aW9uIGNoZWNrIHdob3NlIHR1cm4gc2hvdWxkIGJlIGFibGUgdG8gYXR0YWNrXG4vLyAxLiBMb2FkIGJvYXJkIGZvciBjdXJyZW50IHBsYXllclxuLy8gMi4gUG9wdWxhdGUgdGhlIGNvcnJlY3QgYm9hcmQgdG8gYmUgYWJsZSB0byBhdHRhY2sgd2l0aCBhdHRhY2sgZXZlbnQgbGlzdGVuZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFja01vZGUoZ2FtZU9iamVjdFN0YXRlLCBjYikge1xuICBjb25zdCBjdXJyZW50U2lkZSA9IGdhbWVPYmplY3RTdGF0ZS5wbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgY29uc3Qgb3Bwb3NpdGVTaWRlID0gY3VycmVudFNpZGUgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnYW1lT2JqZWN0U3RhdGUucGxheWVyT25lLmlzVHVyblxuICAgID8gZ2FtZU9iamVjdFN0YXRlLnBsYXllck9uZSA6IGdhbWVPYmplY3RTdGF0ZS5wbGF5ZXJUd287XG4gIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gZ2FtZU9iamVjdFN0YXRlLnBsYXllck9uZS5pc1R1cm5cbiAgICA/IGdhbWVPYmplY3RTdGF0ZS5wbGF5ZXJUd28gOiBnYW1lT2JqZWN0U3RhdGUucGxheWVyT25lO1xuXG4gIHVubG9hZEJvYXJkKG9wcG9zaXRlU2lkZSk7XG4gIGxvYWRCb2FyZChjdXJyZW50UGxheWVyLCBjdXJyZW50U2lkZSk7XG5cbiAgY29uc3Qgb3Bwb3NpdGVCb3hlcyA9IFsuLi5kb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKGAuJHtvcHBvc2l0ZVNpZGV9LWNvbnRlbnRgKVxuICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV07XG4gIG9wcG9zaXRlQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY29yZCA9IGJveC5kYXRhc2V0LnBvcy5zcGxpdCgnLCcpLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApKTtcbiAgICAgIGF0dGFja1V0aWxpdGllcy5hdHRhY2soXG4gICAgICAgIGdhbWVPYmplY3RTdGF0ZSxcbiAgICAgICAgY29yZCxcbiAgICAgICAgb3Bwb3NpdGVTaWRlLFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBvcHBvc2l0ZVBsYXllcixcbiAgICAgICk7XG4gICAgICBvcHBvc2l0ZUJveGVzLmZvckVhY2goKG9wcG9zaXRlQm94KSA9PiByZW1vdmVBbGxFdmVudExpc3RlbmVyKG9wcG9zaXRlQm94KSk7XG4gICAgICBjYihnYW1lT2JqZWN0U3RhdGUuaXNNdWx0aXBsYXllciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9