/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/objects/game.js":
/*!********************************!*\
  !*** ./src/js/objects/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/js/objects/ship.js":
/*!********************************!*\
  !*** ./src/js/objects/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/js/objects/gameboard.js ***!
  \*************************************/
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELG9DQUFvQztBQUN0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7OztVQ2pGaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEI7QUFDVzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBSTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvZ2FtZWJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbmZ1bmN0aW9uIHJldHVyblBsYXllclR1cm4oZ2FtZU9iamVjdCkge1xuICByZXR1cm4gZ2FtZU9iamVjdC5wbGF5ZXJPbmUuaXNUdXJuXG4gICAgPyBnYW1lT2JqZWN0LnBsYXllck9uZVxuICAgIDogZ2FtZU9iamVjdC5wbGF5ZXJUd287XG59XG5cbi8vIFRoZSBtYWluIEdhbWUgb2JqZWN0IGZvciBleHBvc2luZyBpbmZvcm1hdGlvbiBmb3IgZWFjaCBzdGFnZXMgdG8gdXNlc1xuLy8gMS4gUGxheWVyc1xuLy8gMi4gUGxheWVyIGZvciBDdXJyZW50IFR1cm5cbi8vIDMuIEN1cnJlbnQgQm9hcmRcbi8vIDQuIGlzU3RhcnRlZCBmb3IgY2hlY2tpbmcgaWYgcGxhY2VtZW50IGhhcyBiZWVuIHNldFxuLy8gNS4gY3VycmVudCBnYW1lbW9kZSAoaXNNdWx0aXBsYXllcilcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoaXNNdWx0aXBsYXllciwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgbGV0IGlzU3RhcnRlZCA9IGZhbHNlO1xuXG4gIC8vIFJldHVybiBwbGF5ZXIgd2hvc2UgdHVybnMgaXMgdGhlaXJzXG4gIGZ1bmN0aW9uIGN1cnJlbnRUdXJuKCkge1xuICAgIHJldHVybiByZXR1cm5QbGF5ZXJUdXJuKHRoaXMpO1xuICB9XG5cbiAgLy8gUmV0dXJuIGJvYXJkIG9mIHBsYXllciB3aG9zZSB0dXJucyBpcyB0aGVyZVxuICBmdW5jdGlvbiBjdXJyZW50Qm9hcmQoKSB7XG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3BsYXllck9uZS5pc1R1cm4gPyAnbGVmdCcgOiAncmlnaHQnfS1jb250ZW50YClbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYXllck9uZSwgcGxheWVyVHdvLCBjdXJyZW50VHVybiwgY3VycmVudEJvYXJkLCBpc1N0YXJ0ZWQsIGlzTXVsdGlwbGF5ZXIsXG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuZXhwb3J0IGNvbnN0IFNoaXBzID0ge1xuICBwYXRyb2w6IHtcbiAgICBuYW1lOiAncGF0cm9sJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgb3JkZXI6IDEsXG4gIH0sXG4gIHN1Ym1hcmluZToge1xuICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMixcbiAgfSxcbiAgZGVzdHJveWVyOiB7XG4gICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAzLFxuICB9LFxuICBiYXR0bGVzaGlwOiB7XG4gICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBvcmRlcjogNCxcbiAgfSxcbiAgY2Fycmllcjoge1xuICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgb3JkZXI6IDUsXG4gIH0sXG59O1xuXG4vLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuZnVuY3Rpb24gYnVpbGRTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbiAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4gICAgfSk7XG4gIHJldHVybiBib2R5O1xufVxuXG4vLyBGdW5jdGlvbiBDb25zdHJ1Y3RvciBmb3Igc2hpcFxuZnVuY3Rpb24gU2hpcChzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICBjb25zdCBkYW1hZ2UgPSBbXTtcbiAgLy8gSW5paXRpYWxpemUgc2hpcCB3aXRoIGEgdXRpbGl0eSBmdW5jdGlvbiBidWlsZFNoaXBcbiAgY29uc3QgcG9zaXRpb24gPSBidWlsZFNoaXAoc2hpcC5sZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4gIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBpc0hpdCA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hIaXRQb3MgPSB2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV07XG4gICAgICBpZiAobWF0Y2hIaXRQb3MpIHtcbiAgICAgICAgZGFtYWdlLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0hpdDtcbiAgfVxuXG4gIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgZGFtYWdlLFxuICAgIGF4aXMsXG4gICAgcG9zaXRpb24sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgR2FtZSwgeyBHYW1lU3RhdGUgfSBmcm9tICcuL2dhbWUnO1xuXG4vLyBDaGVjayBpZiB0d28gc2V0IG9mIGFycmF5IGNvbnRhaW4gc2ltaWxhciBlbGVtZW50c1xuZnVuY3Rpb24gaW50ZXJzZWN0KGEsIGIpIHtcbiAgcmV0dXJuIGEuZmluZCgocG9zKSA9PiBiXG4gICAgLmZpbmQoKGN1cnJlbnRQb3MpID0+IGN1cnJlbnRQb3NbMF0gPT09IHBvc1swXSAmJiBjdXJyZW50UG9zWzFdID09PSBwb3NbMV0pKTtcbn1cblxuLy8gUmV0dXJuIGZhbHNlIGlmIHNoaXAgYm9keSBpcyBvdmVyIDkgKHdoaWNoIGlzIG92ZXIgdGhlIGJvYXJkIGJvdW5kYXJ5KVxuY29uc3QgaGl0Qm91bmRhcnkgPSAocG9zaXRpb24sIGF4aXMpID0+IHtcbiAgc3dpdGNoIChheGlzKSB7XG4gICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICByZXR1cm4gcG9zaXRpb24uZmluZCgocG9zKSA9PiAocG9zWzFdID4gOSkpO1xuICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMF0gPiA5KSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGF4aXMnKTtcbiAgfVxufTtcblxuLy8gQ2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIG9uIGEgY2VydGFpbiBzcXVhcmUsIHdpdGhvdXQgY29sbGlzaW9uXG4vLyB3aXRoIHRoZSBib3JkZXIgb3Igb3RoZXIgc2hpcHMuXG4vLyB0YWtlcyBhbGwgdGhlIHNoaXAgYXMgYXJndW1lbnQgdG8gY2hlY2sgZm9yIGNvbGxpc29uXG5mdW5jdGlvbiBpc1ZhbGlkKHNoaXBzLCBwb3NpdGlvbiwgYXhpcykge1xuICAvLyBDaGVjayBpZiBzaGlwIG92ZXJsYXBzIG92ZXIgYW55IG90aGVyIHNoaXBzXG4gIGNvbnN0IGhhc0NvbGxpc2lvbiA9IHNoaXBzXG4gICAgLmZpbmQoKHNoaXApID0+IGludGVyc2VjdChzaGlwLnBvc2l0aW9uLCBwb3NpdGlvbikpO1xuICAvLyBDaGVjayBpZiB0aGUgc2hpcCBkb2Vzbid0IG92ZXJsYXAgd2l0aCB0aGUgYm91bmRhcnlcbiAgLy8gQWNjZXB0IHRoZSBjdXJyZW50IHNoaXAncyBwb3NpdGlvbiBhbmQgYXhpc1xuICBjb25zdCB2YWxpZEJvdW5kYXJ5ID0gIWhpdEJvdW5kYXJ5KHBvc2l0aW9uLCBheGlzKTtcbiAgcmV0dXJuICFoYXNDb2xsaXNpb24gJiYgdmFsaWRCb3VuZGFyeTtcbn1cblxuLy8gVGhlIG1haW4gZ2FtZSBvYmplY3QgdGhhdCBpcyBuZWVkZWQgZm9yIGV2ZXJ5IHJvdW5kXG4vLyBDb29yZGluYXRlIHN5c3RlbTogQXJyYXkgW1ZlcnRpY2FsICgwIC0+IDkpLCBIb3Jpem9udGFsICgwIC0+IDkpXVxuLy8gQWNjZXB0cyBwbGF5ZXIgb2JqZWN0XG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIC8vIExpc3Qgb2Ygc2hpcHNcbiAgY29uc3QgbGlzdCA9IFtdO1xuICAvLyBSZWNvcmQgb2YgYXR0YWNrcyBtYWRlXG4gIGNvbnN0IGF0dGFja3MgPSBbXTtcbiAgLy8gUmVjb3JkIG9mIGhpdHMgbWFkZVxuICBjb25zdCBoaXRzID0gW107XG4gIC8vIFJlY29yZCBvZiBtaXNzZXNcbiAgY29uc3QgbWlzc2VzID0gW107XG5cbiAgLy8gUGxhY2Ugc2hpcCwgYnVpbGQgYSBzaGlwLCBjaGVjayBpZiBpdCBpcyB2YWxpZC5cbiAgZnVuY3Rpb24gcGxhY2Uoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGluaXRpYWxpemVkU2hpcCA9IFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoIWlzVmFsaWQobGlzdCwgaW5pdGlhbGl6ZWRTaGlwLnBvc2l0aW9uLCBheGlzKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGlzdC5wdXNoKGluaXRpYWxpemVkU2hpcCk7XG4gICAgcmV0dXJuIGluaXRpYWxpemVkU2hpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3YXBUdXJuKGdhbWVPYmplY3QpIHtcbiAgICBjb25zdCB7IHBsYXllck9uZSwgcGxheWVyVHdvIH0gPSBnYW1lT2JqZWN0O1xuICAgIHBsYXllck9uZS5pc1R1cm4gPSAhcGxheWVyT25lLmlzVHVybjtcbiAgICBwbGF5ZXJUd28uaXNUdXJuID0gIXBsYXllclR3by5pc1R1cm47XG4gIH1cblxuICAvLyBDaGVjayBpZiBhdHRhY2sgaXMgb3V0IG9mIGJvdW5kIG9yIGFscmVhZHkgZXhpc3QsIHRoZW4gcmV0cnlcbiAgLy8gSWYgaXQgaXMgdmFsaWQsIGNoZWNrcyBpZiBhIHNoaXAgaXMgaGl0OyBtb2RpZnkgc2hpcCBpZiBoaXRcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb3JkLCBnYW1lT2JqZWN0KSB7XG4gICAgY29uc3QgaXNFeGlzdCA9IGF0dGFja3MuZmluZCgoYXR0YWNrKSA9PiBhdHRhY2tbMF0gPT09IGNvcmRbMF0gJiYgYXR0YWNrWzFdID09PSBjb3JkWzFdKTtcbiAgICBjb25zdCBoaXQgPSBsaXN0LmZpbmQoKHNoaXApID0+IHNoaXAuaGl0KGNvcmQpKTtcblxuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3dhcFR1cm4oZ2FtZU9iamVjdCk7XG5cbiAgICBhdHRhY2tzLnB1c2goY29yZCk7XG5cbiAgICBpZiAoaGl0KSB7XG4gICAgICBoaXRzLnB1c2goY29yZCk7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuXG4gICAgbWlzc2VzLnB1c2goY29yZCk7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdCxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgICBhdHRhY2tzLFxuICAgIHBsYWNlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==