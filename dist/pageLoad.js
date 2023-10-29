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
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztBQUNsRDtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLDBCQUEwQixzREFBUTtBQUNsQyw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsS0FBSztBQUM5QztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQ0FBaUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsS0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvL1VzZXJzL21hY2Jvb2thaXIvcmVwb3MvYmF0dGxlc2hpcC9zcmMvYXNzZXRzL3NoaXBzfHN5bmN8bm9ucmVjdXJzaXZlfC9cXC5wbmckLyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BhZ2VMb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9iYXR0bGVzaGlwLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtaG9yaV8wMS5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDMucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWhvcmlfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtaG9yaV8wNC5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtdmVydF8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDIucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wMy5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtdmVydF8wNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC12ZXJ0XzA0LnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDEucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wMi5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDQucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wNS5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDIucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wMy5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzA0LnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzA1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDUucG5nXCIsXG5cdFwiLi9kZXN0cm95ZXItaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvZGVzdHJveWVyLWhvcmlfMDEucG5nXCIsXG5cdFwiLi9kZXN0cm95ZXItaG9yaV8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvZGVzdHJveWVyLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9kZXN0cm95ZXItaG9yaV8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvZGVzdHJveWVyLWhvcmlfMDMucG5nXCIsXG5cdFwiLi9kZXN0cm95ZXItdmVydF8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvZGVzdHJveWVyLXZlcnRfMDEucG5nXCIsXG5cdFwiLi9kZXN0cm95ZXItdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvZGVzdHJveWVyLXZlcnRfMDIucG5nXCIsXG5cdFwiLi9kZXN0cm95ZXItdmVydF8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvZGVzdHJveWVyLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9wYXRyb2wtaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvcGF0cm9sLWhvcmlfMDEucG5nXCIsXG5cdFwiLi9wYXRyb2wtaG9yaV8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvcGF0cm9sLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9wYXRyb2wtdmVydF8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvcGF0cm9sLXZlcnRfMDEucG5nXCIsXG5cdFwiLi9wYXRyb2wtdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvcGF0cm9sLXZlcnRfMDIucG5nXCIsXG5cdFwiLi9zdWJtYXJpbmUtaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvc3VibWFyaW5lLWhvcmlfMDEucG5nXCIsXG5cdFwiLi9zdWJtYXJpbmUtaG9yaV8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvc3VibWFyaW5lLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9zdWJtYXJpbmUtaG9yaV8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvc3VibWFyaW5lLWhvcmlfMDMucG5nXCIsXG5cdFwiLi9zdWJtYXJpbmUtdmVydF8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvc3VibWFyaW5lLXZlcnRfMDEucG5nXCIsXG5cdFwiLi9zdWJtYXJpbmUtdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvc3VibWFyaW5lLXZlcnRfMDIucG5nXCIsXG5cdFwiLi9zdWJtYXJpbmUtdmVydF8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvc3VibWFyaW5lLXZlcnRfMDMucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zaGlwcyBzeW5jIFxcXFwucG5nJFwiOyIsIi8vIEltcG9ydCBhbGwgc2hpcCBpbWFnZXNcbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIGNvbnN0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgvKC5cXC98XFwucG5nJCkvZywgJycpXSA9IHIoaXRlbSk7XG4gIH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufVxuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMvc2hpcHMnLCBmYWxzZSwgL1xcLnBuZyQvKSk7XG5cbmZ1bmN0aW9uIGxvYWRJY29uKHR5cGUsIG51bSwgZGlyKSB7XG4gIGNvbnN0IGRpck5hbWUgPSBkaXIgPT09ICdob3Jpem9udGFsJyA/ICdob3JpJyA6ICd2ZXJ0JztcbiAgcmV0dXJuIGltYWdlc1tgJHt0eXBlfS0ke2Rpck5hbWV9XzAke251bX1gXTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IGxvYWRJY29uIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuZXhwb3J0IGNvbnN0IFNoaXBzID0ge1xuICBwYXRyb2w6IHtcbiAgICBuYW1lOiAncGF0cm9sJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgb3JkZXI6IDEsXG4gIH0sXG4gIHN1Ym1hcmluZToge1xuICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMixcbiAgfSxcbiAgZGVzdHJveWVyOiB7XG4gICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAzLFxuICB9LFxuICBiYXR0bGVzaGlwOiB7XG4gICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBvcmRlcjogNCxcbiAgfSxcbiAgY2Fycmllcjoge1xuICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgb3JkZXI6IDUsXG4gIH0sXG59O1xuXG4vLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuZnVuY3Rpb24gYnVpbGRTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbiAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4gICAgfSk7XG4gIHJldHVybiBib2R5O1xufVxuXG4vLyBGdW5jdGlvbiBDb25zdHJ1Y3RvciBmb3Igc2hpcFxuZnVuY3Rpb24gU2hpcChzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICBjb25zdCBkYW1hZ2UgPSBbXTtcbiAgLy8gSW5paXRpYWxpemUgc2hpcCB3aXRoIGEgdXRpbGl0eSBmdW5jdGlvbiBidWlsZFNoaXBcbiAgY29uc3QgcG9zaXRpb24gPSBidWlsZFNoaXAoc2hpcC5sZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4gIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBpc0hpdCA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hIaXRQb3MgPSB2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV07XG4gICAgICBpZiAobWF0Y2hIaXRQb3MpIHtcbiAgICAgICAgZGFtYWdlLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0hpdDtcbiAgfVxuXG4gIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgZGFtYWdlLFxuICAgIGF4aXMsXG4gICAgcG9zaXRpb24sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItYXJyb3ctY2FsbGJhY2sgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgU2hpcHMgfSBmcm9tICcuL29iamVjdHMvc2hpcCc7XG5pbXBvcnQgeyBsb2FkSWNvbiB9IGZyb20gJy4vaW1hZ2VMb2FkZXInO1xuXG4vLyBFbnVtZXJhdGVkIGFycmF5cyBvZiBzaGlwcyB0byBiZSBwbGFjZWRcbmNvbnN0IHNoaXBPcmRlcnMgPSBPYmplY3QudmFsdWVzKFNoaXBzKS5zb3J0KChsYXN0LCBuZXh0KSA9PiBsYXN0Lm9yZGVyIDwgbmV4dC5vcmRlcik7XG5cbi8vIGxvYWQgYWxsIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmQgd2hlbiBjYWxsZWRcbmZ1bmN0aW9uIGxvYWRCb2FyZChwbGF5ZXIsIHNpZGUpIHtcbiAgcGxheWVyLmJvYXJkLmxpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAucG9zaXRpb24uZm9yRWFjaCgoY29yZCkgPT4ge1xuICAgICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgaWYgKGJveC5kYXRhc2V0LnBvcyA9PT0gY29yZC5qb2luKCkpIHtcbiAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHNoaXBPcmRlcnNbcGxheWVyLmJvYXJkLmxpc3QuaW5kZXhPZihzaGlwKV07XG4gICAgICAgICAgY29uc3Qgc2hpcEltZyA9IGxvYWRJY29uKG5hbWUsIHNoaXAucG9zaXRpb24uaW5kZXhPZihjb3JkKSArIDEsIHNoaXAuYXhpcyk7XG4gICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7c2hpcEltZ30nKWA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gdW5sb2FkIGFsbCB0aGUgc2hpcHMgb24gYSBib2FyZFxuZnVuY3Rpb24gdW5sb2FkQm9hcmQoc2lkZSkge1xuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldLmZvckVhY2goKGJveCkgPT4ge1xuICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgfSk7XG59XG5cbi8vIEEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGhhcyB0aGUgbG9naWMgZm9yIGluaXRpYWxpemluZyBhbmQgbG9hZGluZyB1cCB0aGUgZ2FtZSBib2FyZFxuY29uc3QgYm9hcmRMb2FkID0gKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIC8vIEdlbmVyYXRlIHRoZSBwYWdlIGZvciBzY29yZSBrZWVwaW5nIGFuZCB0dXJuIGluZm9ybWF0aW9uXG4gIC8vIFJlZmFjdG9yIGludG8gdGVtcGxhdGVcbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYWdlKG5hbWVzKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsYXllciA9IG5hbWVzLmxlbmd0aCA9PT0gMjtcbiAgICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPSd0b3AtY29udGFpbmVyJz5cbiAgICAgICAgPHA+VHVybjogUExBWUVSIDE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nbWFpbi1jb250ZW50Jz5cbiAgICAgICAgPGRpdiBjbGFzcz0nbGVmdC1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdwbGF5ZXJuYW1lJz4ke25hbWVzWzBdfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2JvYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwcy1jb250YWluZXInPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYm9hcmQnPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ncGxheWVybmFtZSc+JHtpc011bHRpcGxheWVyID8gbmFtZXNbMV0gOiAnQk9UJ308L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdib2FyZC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2hpcHMtY29udGFpbmVyJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2JvYXJkJz48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG4gIC8vIEdlbmVyYXRlIHRoZSB3aG9sZSBjZWxscyBmb3IgZWFjaCBib2FyZFxuICBmdW5jdGlvbiBnZW5lcmF0ZUJveCgpIHtcbiAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKV0uZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gWzAsIDBdO1xuICAgICAgQXJyYXkoMTAwKVxuICAgICAgICAuZmlsbCgpXG4gICAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ2JveCc7XG4gICAgICAgICAgYm94LmRhdGFzZXQucG9zID0gc3RhcnQ7XG4gICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgICBpZiAoc3RhcnRbMV0gPD0gOSkge1xuICAgICAgICAgICAgc3RhcnRbMV0rKztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdID09PSAxMCkge1xuICAgICAgICAgICAgc3RhcnRbMV0gPSAwO1xuICAgICAgICAgICAgc3RhcnRbMF0rKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8vIGFzc2lnbiBhcHByb3ByaWF0ZSBjbGFzc2VzIHRvIGRpc3RpbmN0IGxlZnQgYW5kIHJpZ2h0XG4gIGZ1bmN0aW9uIGFzc2lnblBhcmVudCgpIHtcbiAgICBbJ2xlZnQnLCAncmlnaHQnXS5mb3JFYWNoKChzaWRlKSA9PiB7XG4gICAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdXG4gICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKTtcbiAgICAgIFsuLi5ib3hlc10uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGJveC5kYXRhc2V0LnNpZGUgPSBzaWRlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlUGFnZSwgZ2VuZXJhdGVCb3gsIGFzc2lnblBhcmVudCxcbiAgfTtcbn0oKSk7XG5cbi8vIExvYWQgb3B0aW9uIGZvciBwbGFjaW5nIHNoaXBzIGluIGEgY2VydGFpbiBheGlvc1xuZnVuY3Rpb24gbG9hZE9wdGlvbigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9wLWNvbnRhaW5lcicpWzBdO1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gVGVtcGxhdGVcbiAgb3B0aW9uLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdkaXItb3B0aW9uJz5cbiAgICAgIDxsYWJlbCBmb3I9J2hvcml6b250YWwnPkhvcml6b250YWw8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBjbGFzcz0nZGlyLW9wdGlvbicgdmFsdWU9J2hvcml6b250YWwnIGlkPSdob3Jpem9udGFsJyBuYW1lPSdvcHRpb24nIGNoZWNrZWQ+XG4gICAgICA8bGFiZWwgZm9yPSd2ZXJ0aWNhbCc+VmVydGljYWw8L2xhYmVsPjxpbnB1dCB0eXBlPSdyYWRpbycgY2xhc3M9J2Rpci1vcHRpb24nIHZhbHVlPSd2ZXJ0aWNhbCcgaWQ9J3ZlcnRpY2FsJyBuYW1lPSdvcHRpb24nPjwvZGl2PlxuICBgO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuLy8gTG9hZCBib2FyZFxuZnVuY3Rpb24gbWFpblBhZ2VMb2FkKG5hbWVzKSB7XG4gIGJvYXJkTG9hZC5nZW5lcmF0ZVBhZ2UobmFtZXMpO1xuICBib2FyZExvYWQuZ2VuZXJhdGVCb3goKTtcbiAgYm9hcmRMb2FkLmFzc2lnblBhcmVudCgpO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZShuYW1lcykge1xuICAvLyBMb2FkIHBhZ2UgYW5kIGluaXRpYWxpemUgZXZlcnkgY2VsbHM7XG4gIG1haW5QYWdlTG9hZChuYW1lcyk7XG4gIC8vIExvYWQgb3B0aW9uc1xuICBsb2FkT3B0aW9uKCk7XG59XG5cbmV4cG9ydCB7XG4gIG1haW5QYWdlTG9hZCwgbG9hZEJvYXJkLCBsb2FkT3B0aW9uLCBib2FyZExvYWQsIGxvYWRQYWdlLCBzaGlwT3JkZXJzLCB1bmxvYWRCb2FyZCxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=