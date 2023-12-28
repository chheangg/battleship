/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/objects/ship.js":
/*!********************************!*\
  !*** ./src/js/objects/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDZDQUFJOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL2dhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuZXhwb3J0IGNvbnN0IFNoaXBzID0ge1xuICBwYXRyb2w6IHtcbiAgICBuYW1lOiAncGF0cm9sJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgb3JkZXI6IDEsXG4gIH0sXG4gIHN1Ym1hcmluZToge1xuICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMixcbiAgfSxcbiAgZGVzdHJveWVyOiB7XG4gICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAzLFxuICB9LFxuICBiYXR0bGVzaGlwOiB7XG4gICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBvcmRlcjogNCxcbiAgfSxcbiAgY2Fycmllcjoge1xuICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgb3JkZXI6IDUsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3Ioc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIHRoaXMubGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgdGhpcy5heGlzID0gYXhpcztcbiAgICB0aGlzLmNvb3JkaW5hdGUgPSBjb29yZGluYXRlO1xuICAgIHRoaXMucG9zaXRpb24gPSBbXTtcbiAgICB0aGlzLmJ1aWxkU2hpcCgpO1xuICAgIHRoaXMuZGFtYWdlID0gW107XG4gIH1cblxuICAvLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuICBidWlsZFNoaXAoKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGFydCA9IFsuLi50aGlzLmNvb3JkaW5hdGVdO1xuICAgIGNvbnN0IGJvZHkgPSBBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5heGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbiAgICAgIH0pO1xuICAgIHRoaXMucG9zaXRpb24gPSBib2R5O1xuICB9XG5cbiAgLy8gVGFrZSBhIGNvcmQgYW5kIGNoZWNrIGlmIGNvcmQgaGl0cyBhbnkgYm9keSBjb3JkXG4gIGhpdCh2YWx1ZSkge1xuICAgIGNvbnN0IGlzSGl0ID0gdGhpcy5wb3NpdGlvbi5zb21lKChwb3MpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoSGl0UG9zID0gdmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdO1xuICAgICAgaWYgKG1hdGNoSGl0UG9zKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0hpdDtcbiAgfVxuXG4gIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5kYW1hZ2UubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuXG4vLyAvLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuLy8gZnVuY3Rpb24gYnVpbGRTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuLy8gICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbi8vICAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbi8vICAgICAuZmlsbCgpXG4vLyAgICAgLm1hcCgoKSA9PiB7XG4vLyAgICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4vLyAgICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4vLyAgICAgfSk7XG4vLyAgIHJldHVybiBib2R5O1xuLy8gfVxuXG4vLyAvLyBGdW5jdGlvbiBDb25zdHJ1Y3RvciBmb3Igc2hpcFxuLy8gZnVuY3Rpb24gU2hpcChzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4vLyAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuLy8gICBjb25zdCBkYW1hZ2UgPSBbXTtcbi8vICAgLy8gSW5paXRpYWxpemUgc2hpcCB3aXRoIGEgdXRpbGl0eSBmdW5jdGlvbiBidWlsZFNoaXBcbi8vICAgY29uc3QgcG9zaXRpb24gPSBidWlsZFNoaXAoc2hpcC5sZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4vLyAgIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuLy8gICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbi8vICAgICBjb25zdCBpc0hpdCA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuLy8gICAgICAgY29uc3QgbWF0Y2hIaXRQb3MgPSB2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV07XG4vLyAgICAgICBpZiAobWF0Y2hIaXRQb3MpIHtcbi8vICAgICAgICAgZGFtYWdlLnB1c2godmFsdWUpO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiBpc0hpdDtcbi8vICAgfVxuXG4vLyAgIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4vLyAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbi8vICAgICByZXR1cm4gZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBsZW5ndGgsXG4vLyAgICAgZGFtYWdlLFxuLy8gICAgIGF4aXMsXG4vLyAgICAgcG9zaXRpb24sXG4vLyAgICAgaGl0LFxuLy8gICAgIGlzU3Vuayxcbi8vICAgfTtcbi8vIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIHRoaXMuYXR0YWNrcyA9IFtdO1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMubWlzc2VzID0gW107XG4gIH1cblxuICAvLyBDaGVjayBpZiB0d28gc2V0IG9mIGFycmF5IGNvbnRhaW4gc2ltaWxhciBlbGVtZW50c1xuICBzdGF0aWMgaW50ZXJzZWN0KGEsIGIpIHtcbiAgICByZXR1cm4gYS5maW5kKChwb3MpID0+IGJcbiAgICAgIC5maW5kKChjdXJyZW50UG9zKSA9PiBjdXJyZW50UG9zWzBdID09PSBwb3NbMF0gJiYgY3VycmVudFBvc1sxXSA9PT0gcG9zWzFdKSk7XG4gIH1cblxuICAvLyBSZXR1cm4gZmFsc2UgaWYgc2hpcCBib2R5IGlzIG92ZXIgOSAod2hpY2ggaXMgb3ZlciB0aGUgYm9hcmQgYm91bmRhcnkpXG4gIHN0YXRpYyBoaXRCb3VuZGFyeShwb3NpdGlvbiwgYXhpcykge1xuICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMV0gPiA5KSk7XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMF0gPiA5KSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBheGlzJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIG9uIGEgY2VydGFpbiBzcXVhcmUsIHdpdGhvdXQgY29sbGlzaW9uXG4gIC8vIHdpdGggdGhlIGJvcmRlciBvciBvdGhlciBzaGlwcy5cbiAgLy8gdGFrZXMgYWxsIHRoZSBzaGlwIGFzIGFyZ3VtZW50IHRvIGNoZWNrIGZvciBjb2xsaXNvblxuICBpc1ZhbGlkKHBvc2l0aW9uLCBheGlzKSB7XG4gICAgLy8gQ2hlY2sgaWYgc2hpcCBvdmVybGFwcyBvdmVyIGFueSBvdGhlciBzaGlwc1xuICAgIGNvbnN0IGhhc0NvbGxpc2lvbiA9IHRoaXMubGlzdFxuICAgICAgLmZpbmQoKHNoaXApID0+IEdhbWVCb2FyZC5pbnRlcnNlY3Qoc2hpcC5wb3NpdGlvbiwgcG9zaXRpb24pKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgc2hpcCBkb2Vzbid0IG92ZXJsYXAgd2l0aCB0aGUgYm91bmRhcnlcbiAgICAvLyBBY2NlcHQgdGhlIGN1cnJlbnQgc2hpcCdzIHBvc2l0aW9uIGFuZCBheGlzXG4gICAgY29uc3QgdmFsaWRCb3VuZGFyeSA9ICFHYW1lQm9hcmQuaGl0Qm91bmRhcnkocG9zaXRpb24sIGF4aXMpO1xuICAgIHJldHVybiAhaGFzQ29sbGlzaW9uICYmIHZhbGlkQm91bmRhcnk7XG4gIH1cblxuICAvLyBQbGFjZSBzaGlwLCBidWlsZCBhIHNoaXAsIGNoZWNrIGlmIGl0IGlzIHZhbGlkLlxuICBwbGFjZShzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZWRTaGlwID0gbmV3IFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZChpbml0aWFsaXplZFNoaXAucG9zaXRpb24sIGF4aXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGlzdC5wdXNoKGluaXRpYWxpemVkU2hpcCk7XG4gICAgcmV0dXJuIGluaXRpYWxpemVkU2hpcDtcbiAgfVxuXG4gIHN0YXRpYyBzd2FwVHVybihnYW1lT2JqZWN0KSB7XG4gICAgY29uc3QgeyBwbGF5ZXJPbmUsIHBsYXllclR3byB9ID0gZ2FtZU9iamVjdDtcbiAgICBwbGF5ZXJPbmUuaXNUdXJuID0gIXBsYXllck9uZS5pc1R1cm47XG4gICAgcGxheWVyVHdvLmlzVHVybiA9ICFwbGF5ZXJUd28uaXNUdXJuO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYXR0YWNrIGlzIG91dCBvZiBib3VuZCBvciBhbHJlYWR5IGV4aXN0LCB0aGVuIHJldHJ5XG4gIC8vIElmIGl0IGlzIHZhbGlkLCBjaGVja3MgaWYgYSBzaGlwIGlzIGhpdDsgbW9kaWZ5IHNoaXAgaWYgaGl0XG4gIHJlY2VpdmVBdHRhY2soY29yZCwgZ2FtZU9iamVjdCkge1xuICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLmF0dGFja3MuZmluZCgoYXR0YWNrKSA9PiBhdHRhY2tbMF0gPT09IGNvcmRbMF0gJiYgYXR0YWNrWzFdID09PSBjb3JkWzFdKTtcblxuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gdGhpcy5saXN0LmZpbmQoKHNoaXApID0+IHNoaXAuaGl0KGNvcmQpKTtcblxuICAgIEdhbWVCb2FyZC5zd2FwVHVybihnYW1lT2JqZWN0KTtcblxuICAgIHRoaXMuYXR0YWNrcy5wdXNoKGNvcmQpO1xuXG4gICAgaWYgKGhpdCkge1xuICAgICAgdGhpcy5oaXRzLnB1c2goY29yZCk7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuXG4gICAgdGhpcy5taXNzZXMucHVzaChjb3JkKTtcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=