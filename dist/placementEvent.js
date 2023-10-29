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
/*!********************************************!*\
  !*** ./src/js/utilities/placementEvent.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageLoad */ "./src/js/pageLoad.js");


// Ship logical placement function onto the player's board
function initializeShip(player, ship, cord) {
  const dir = document.querySelector('.dir-option:checked').value;
  player.board.place(ship, dir, cord);
}

// Placement Event
function placementEvent(event, gameObject, player, cb) {
  const playerShips = player.board.list;
  const cord = event.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  initializeShip(player, _pageLoad__WEBPACK_IMPORTED_MODULE_0__.shipOrders[playerShips.length], cord);
  cb(gameObject.isMultiplayer, true);
}

// Add placement event to all cell
function addPlacementEvent(add, gameObject, boardBoxes, player, cb) {
  // set a time out so that animation event executes first
  // to remove all animation, within the call stack;
  const eventListener = (event) => {
    setTimeout(() => placementEvent(event, gameObject, player, cb), 0);
  };
  boardBoxes.forEach((box) => {
    // eslint-disable-next-line no-unused-expressions
    if (!add) {
      box.removeEventListener('click', eventListener);
    } else {
      box.addEventListener('click', eventListener);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPlacementEvent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy9Vc2Vycy9tYWNib29rYWlyL3JlcG9zL2JhdHRsZXNoaXAvc3JjL2Fzc2V0cy9zaGlwc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwucG5nJC8iLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3V0aWxpdGllcy9wbGFjZW1lbnRFdmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDEucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtaG9yaV8wMi5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDQucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wMS5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wMy5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzA0LnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzA1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDUucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wMS5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzA1LnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAzLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAzLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvc2hpcHMgc3luYyBcXFxcLnBuZyRcIjsiLCIvLyBJbXBvcnQgYWxsIHNoaXAgaW1hZ2VzXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgci5rZXlzKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoLyguXFwvfFxcLnBuZyQpL2csICcnKV0gPSByKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn1cblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3NoaXBzJywgZmFsc2UsIC9cXC5wbmckLykpO1xuXG5mdW5jdGlvbiBsb2FkSWNvbih0eXBlLCBudW0sIGRpcikge1xuICBjb25zdCBkaXJOYW1lID0gZGlyID09PSAnaG9yaXpvbnRhbCcgPyAnaG9yaScgOiAndmVydCc7XG4gIHJldHVybiBpbWFnZXNbYCR7dHlwZX0tJHtkaXJOYW1lfV8wJHtudW19YF07XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBsb2FkSWNvbiB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmV4cG9ydCBjb25zdCBTaGlwcyA9IHtcbiAgcGF0cm9sOiB7XG4gICAgbmFtZTogJ3BhdHJvbCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIG9yZGVyOiAxLFxuICB9LFxuICBzdWJtYXJpbmU6IHtcbiAgICBuYW1lOiAnc3VibWFyaW5lJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgb3JkZXI6IDIsXG4gIH0sXG4gIGRlc3Ryb3llcjoge1xuICAgIG5hbWU6ICdkZXN0cm95ZXInLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMyxcbiAgfSxcbiAgYmF0dGxlc2hpcDoge1xuICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICBsZW5ndGg6IDQsXG4gICAgb3JkZXI6IDQsXG4gIH0sXG4gIGNhcnJpZXI6IHtcbiAgICBuYW1lOiAnY2FycmllcicsXG4gICAgbGVuZ3RoOiA1LFxuICAgIG9yZGVyOiA1LFxuICB9LFxufTtcblxuLy8gVGFrZXMgY29vcmRpbmF0ZSwgYXhpcywgYW5kIGxlbmd0aCwgYW5kIGJ1aWxkIHNoaXAgb24gYSBjZXJ0YWluIGNlbGwgcG9zaXRpb25cbmZ1bmN0aW9uIGJ1aWxkU2hpcChsZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgY29uc3Qgc3RhcnQgPSBbLi4uY29vcmRpbmF0ZV07XG4gIGNvbnN0IGJvZHkgPSBBcnJheShsZW5ndGgpXG4gICAgLmZpbGwoKVxuICAgIC5tYXAoKCkgPT4ge1xuICAgICAgaWYgKGF4aXMgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbc3RhcnRbMF0rKywgc3RhcnRbMV1dO1xuICAgIH0pO1xuICByZXR1cm4gYm9keTtcbn1cblxuLy8gRnVuY3Rpb24gQ29uc3RydWN0b3IgZm9yIHNoaXBcbmZ1bmN0aW9uIFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgY29uc3QgZGFtYWdlID0gW107XG4gIC8vIEluaWl0aWFsaXplIHNoaXAgd2l0aCBhIHV0aWxpdHkgZnVuY3Rpb24gYnVpbGRTaGlwXG4gIGNvbnN0IHBvc2l0aW9uID0gYnVpbGRTaGlwKHNoaXAubGVuZ3RoLCBheGlzLCBjb29yZGluYXRlKTtcblxuICAvLyBUYWtlIGEgY29yZCBhbmQgY2hlY2sgaWYgY29yZCBoaXRzIGFueSBib2R5IGNvcmRcbiAgZnVuY3Rpb24gaGl0KHZhbHVlKSB7XG4gICAgY29uc3QgaXNIaXQgPSBwb3NpdGlvbi5zb21lKChwb3MpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoSGl0UG9zID0gdmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdO1xuICAgICAgaWYgKG1hdGNoSGl0UG9zKSB7XG4gICAgICAgIGRhbWFnZS5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaEhpdFBvcztcbiAgICB9KTtcbiAgICByZXR1cm4gaXNIaXQ7XG4gIH1cblxuICAvLyBEYW1hZ2UgcmV0dXJuIHRydWUgb2YgZGFtYWdlIGxlbmd0aCBpcyBlcXVhbCB0byBib2R5IGxlbmd0aFxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIGRhbWFnZS5sZW5ndGggPT09IGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGRhbWFnZSxcbiAgICBheGlzLFxuICAgIHBvc2l0aW9uLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWFycm93LWNhbGxiYWNrICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IFNoaXBzIH0gZnJvbSAnLi9vYmplY3RzL3NoaXAnO1xuaW1wb3J0IHsgbG9hZEljb24gfSBmcm9tICcuL2ltYWdlTG9hZGVyJztcblxuLy8gRW51bWVyYXRlZCBhcnJheXMgb2Ygc2hpcHMgdG8gYmUgcGxhY2VkXG5jb25zdCBzaGlwT3JkZXJzID0gT2JqZWN0LnZhbHVlcyhTaGlwcykuc29ydCgobGFzdCwgbmV4dCkgPT4gbGFzdC5vcmRlciA8IG5leHQub3JkZXIpO1xuXG4vLyBsb2FkIGFsbCB0aGUgc2hpcHMgb24gdGhlIGJvYXJkIHdoZW4gY2FsbGVkXG5mdW5jdGlvbiBsb2FkQm9hcmQocGxheWVyLCBzaWRlKSB7XG4gIHBsYXllci5ib2FyZC5saXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLnBvc2l0aW9uLmZvckVhY2goKGNvcmQpID0+IHtcbiAgICAgIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV0uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGlmIChib3guZGF0YXNldC5wb3MgPT09IGNvcmQuam9pbigpKSB7XG4gICAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBzaGlwT3JkZXJzW3BsYXllci5ib2FyZC5saXN0LmluZGV4T2Yoc2hpcCldO1xuICAgICAgICAgIGNvbnN0IHNoaXBJbWcgPSBsb2FkSWNvbihuYW1lLCBzaGlwLnBvc2l0aW9uLmluZGV4T2YoY29yZCkgKyAxLCBzaGlwLmF4aXMpO1xuICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NoaXBJbWd9JylgO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHVubG9hZCBhbGwgdGhlIHNoaXBzIG9uIGEgYm9hcmRcbmZ1bmN0aW9uIHVubG9hZEJvYXJkKHNpZGUpIHtcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICBib3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gIH0pO1xufVxuXG4vLyBBIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCBoYXMgdGhlIGxvZ2ljIGZvciBpbml0aWFsaXppbmcgYW5kIGxvYWRpbmcgdXAgdGhlIGdhbWUgYm9hcmRcbmNvbnN0IGJvYXJkTG9hZCA9IChmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAvLyBHZW5lcmF0ZSB0aGUgcGFnZSBmb3Igc2NvcmUga2VlcGluZyBhbmQgdHVybiBpbmZvcm1hdGlvblxuICAvLyBSZWZhY3RvciBpbnRvIHRlbXBsYXRlXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGFnZShuYW1lcykge1xuICAgIGNvbnN0IGlzTXVsdGlwbGF5ZXIgPSBuYW1lcy5sZW5ndGggPT09IDI7XG4gICAgZG9jdW1lbnQuYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz0ndG9wLWNvbnRhaW5lcic+XG4gICAgICAgIDxwPlR1cm46IFBMQVlFUiAxPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J21haW4tY29udGVudCc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xlZnQtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ncGxheWVybmFtZSc+JHtuYW1lc1swXX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2hpcHMtY29udGFpbmVyJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2JvYXJkJz48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3JpZ2h0LWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3BsYXllcm5hbWUnPiR7aXNNdWx0aXBsYXllciA/IG5hbWVzWzFdIDogJ0JPVCd9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NoaXBzLWNvbnRhaW5lcic+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZCc+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuICAvLyBHZW5lcmF0ZSB0aGUgd2hvbGUgY2VsbHMgZm9yIGVhY2ggYm9hcmRcbiAgZnVuY3Rpb24gZ2VuZXJhdGVCb3goKSB7XG4gICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkJyldLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBzdGFydCA9IFswLCAwXTtcbiAgICAgIEFycmF5KDEwMClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdib3gnO1xuICAgICAgICAgIGJveC5kYXRhc2V0LnBvcyA9IHN0YXJ0O1xuICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdIDw9IDkpIHtcbiAgICAgICAgICAgIHN0YXJ0WzFdKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydFsxXSA9PT0gMTApIHtcbiAgICAgICAgICAgIHN0YXJ0WzFdID0gMDtcbiAgICAgICAgICAgIHN0YXJ0WzBdKys7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvLyBhc3NpZ24gYXBwcm9wcmlhdGUgY2xhc3NlcyB0byBkaXN0aW5jdCBsZWZ0IGFuZCByaWdodFxuICBmdW5jdGlvbiBhc3NpZ25QYXJlbnQoKSB7XG4gICAgWydsZWZ0JywgJ3JpZ2h0J10uZm9yRWFjaCgoc2lkZSkgPT4ge1xuICAgICAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXVxuICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94Jyk7XG4gICAgICBbLi4uYm94ZXNdLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBib3guZGF0YXNldC5zaWRlID0gc2lkZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZW5lcmF0ZVBhZ2UsIGdlbmVyYXRlQm94LCBhc3NpZ25QYXJlbnQsXG4gIH07XG59KCkpO1xuXG4vLyBMb2FkIG9wdGlvbiBmb3IgcGxhY2luZyBzaGlwcyBpbiBhIGNlcnRhaW4gYXhpb3NcbmZ1bmN0aW9uIGxvYWRPcHRpb24oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvcC1jb250YWluZXInKVswXTtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIFRlbXBsYXRlXG4gIG9wdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nZGlyLW9wdGlvbic+XG4gICAgICA8bGFiZWwgZm9yPSdob3Jpem9udGFsJz5Ib3Jpem9udGFsPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgY2xhc3M9J2Rpci1vcHRpb24nIHZhbHVlPSdob3Jpem9udGFsJyBpZD0naG9yaXpvbnRhbCcgbmFtZT0nb3B0aW9uJyBjaGVja2VkPlxuICAgICAgPGxhYmVsIGZvcj0ndmVydGljYWwnPlZlcnRpY2FsPC9sYWJlbD48aW5wdXQgdHlwZT0ncmFkaW8nIGNsYXNzPSdkaXItb3B0aW9uJyB2YWx1ZT0ndmVydGljYWwnIGlkPSd2ZXJ0aWNhbCcgbmFtZT0nb3B0aW9uJz48L2Rpdj5cbiAgYDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbi8vIExvYWQgYm9hcmRcbmZ1bmN0aW9uIG1haW5QYWdlTG9hZChuYW1lcykge1xuICBib2FyZExvYWQuZ2VuZXJhdGVQYWdlKG5hbWVzKTtcbiAgYm9hcmRMb2FkLmdlbmVyYXRlQm94KCk7XG4gIGJvYXJkTG9hZC5hc3NpZ25QYXJlbnQoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UobmFtZXMpIHtcbiAgLy8gTG9hZCBwYWdlIGFuZCBpbml0aWFsaXplIGV2ZXJ5IGNlbGxzO1xuICBtYWluUGFnZUxvYWQobmFtZXMpO1xuICAvLyBMb2FkIG9wdGlvbnNcbiAgbG9hZE9wdGlvbigpO1xufVxuXG5leHBvcnQge1xuICBtYWluUGFnZUxvYWQsIGxvYWRCb2FyZCwgbG9hZE9wdGlvbiwgYm9hcmRMb2FkLCBsb2FkUGFnZSwgc2hpcE9yZGVycywgdW5sb2FkQm9hcmQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgc2hpcE9yZGVycyB9IGZyb20gJy4uL3BhZ2VMb2FkJztcblxuLy8gU2hpcCBsb2dpY2FsIHBsYWNlbWVudCBmdW5jdGlvbiBvbnRvIHRoZSBwbGF5ZXIncyBib2FyZFxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNoaXAocGxheWVyLCBzaGlwLCBjb3JkKSB7XG4gIGNvbnN0IGRpciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXItb3B0aW9uOmNoZWNrZWQnKS52YWx1ZTtcbiAgcGxheWVyLmJvYXJkLnBsYWNlKHNoaXAsIGRpciwgY29yZCk7XG59XG5cbi8vIFBsYWNlbWVudCBFdmVudFxuZnVuY3Rpb24gcGxhY2VtZW50RXZlbnQoZXZlbnQsIGdhbWVPYmplY3QsIHBsYXllciwgY2IpIHtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBwbGF5ZXIuYm9hcmQubGlzdDtcbiAgY29uc3QgY29yZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnBvcy5zcGxpdCgnLCcpXG4gICAgLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApKTtcbiAgaW5pdGlhbGl6ZVNoaXAocGxheWVyLCBzaGlwT3JkZXJzW3BsYXllclNoaXBzLmxlbmd0aF0sIGNvcmQpO1xuICBjYihnYW1lT2JqZWN0LmlzTXVsdGlwbGF5ZXIsIHRydWUpO1xufVxuXG4vLyBBZGQgcGxhY2VtZW50IGV2ZW50IHRvIGFsbCBjZWxsXG5mdW5jdGlvbiBhZGRQbGFjZW1lbnRFdmVudChhZGQsIGdhbWVPYmplY3QsIGJvYXJkQm94ZXMsIHBsYXllciwgY2IpIHtcbiAgLy8gc2V0IGEgdGltZSBvdXQgc28gdGhhdCBhbmltYXRpb24gZXZlbnQgZXhlY3V0ZXMgZmlyc3RcbiAgLy8gdG8gcmVtb3ZlIGFsbCBhbmltYXRpb24sIHdpdGhpbiB0aGUgY2FsbCBzdGFjaztcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcGxhY2VtZW50RXZlbnQoZXZlbnQsIGdhbWVPYmplY3QsIHBsYXllciwgY2IpLCAwKTtcbiAgfTtcbiAgYm9hcmRCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgaWYgKCFhZGQpIHtcbiAgICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudExpc3RlbmVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRQbGFjZW1lbnRFdmVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==