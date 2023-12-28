/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/objects/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/objects/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!**********************************!*\
  !*** ./src/js/objects/player.js ***!
  \**********************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvcGxheWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB0aGlzLmF0dGFja3MgPSBbXTtcbiAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICB0aGlzLm1pc3NlcyA9IFtdO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdHdvIHNldCBvZiBhcnJheSBjb250YWluIHNpbWlsYXIgZWxlbWVudHNcbiAgc3RhdGljIGludGVyc2VjdChhLCBiKSB7XG4gICAgcmV0dXJuIGEuZmluZCgocG9zKSA9PiBiXG4gICAgICAuZmluZCgoY3VycmVudFBvcykgPT4gY3VycmVudFBvc1swXSA9PT0gcG9zWzBdICYmIGN1cnJlbnRQb3NbMV0gPT09IHBvc1sxXSkpO1xuICB9XG5cbiAgLy8gUmV0dXJuIGZhbHNlIGlmIHNoaXAgYm9keSBpcyBvdmVyIDkgKHdoaWNoIGlzIG92ZXIgdGhlIGJvYXJkIGJvdW5kYXJ5KVxuICBzdGF0aWMgaGl0Qm91bmRhcnkocG9zaXRpb24sIGF4aXMpIHtcbiAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICByZXR1cm4gcG9zaXRpb24uZmluZCgocG9zKSA9PiAocG9zWzFdID4gOSkpO1xuICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICByZXR1cm4gcG9zaXRpb24uZmluZCgocG9zKSA9PiAocG9zWzBdID4gOSkpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgYXhpcycpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIHNoaXAgY2FuIGJlIHBsYWNlZCBvbiBhIGNlcnRhaW4gc3F1YXJlLCB3aXRob3V0IGNvbGxpc2lvblxuICAvLyB3aXRoIHRoZSBib3JkZXIgb3Igb3RoZXIgc2hpcHMuXG4gIC8vIHRha2VzIGFsbCB0aGUgc2hpcCBhcyBhcmd1bWVudCB0byBjaGVjayBmb3IgY29sbGlzb25cbiAgaXNWYWxpZChwb3NpdGlvbiwgYXhpcykge1xuICAgIC8vIENoZWNrIGlmIHNoaXAgb3ZlcmxhcHMgb3ZlciBhbnkgb3RoZXIgc2hpcHNcbiAgICBjb25zdCBoYXNDb2xsaXNpb24gPSB0aGlzLmxpc3RcbiAgICAgIC5maW5kKChzaGlwKSA9PiBHYW1lQm9hcmQuaW50ZXJzZWN0KHNoaXAucG9zaXRpb24sIHBvc2l0aW9uKSk7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHNoaXAgZG9lc24ndCBvdmVybGFwIHdpdGggdGhlIGJvdW5kYXJ5XG4gICAgLy8gQWNjZXB0IHRoZSBjdXJyZW50IHNoaXAncyBwb3NpdGlvbiBhbmQgYXhpc1xuICAgIGNvbnN0IHZhbGlkQm91bmRhcnkgPSAhR2FtZUJvYXJkLmhpdEJvdW5kYXJ5KHBvc2l0aW9uLCBheGlzKTtcbiAgICByZXR1cm4gIWhhc0NvbGxpc2lvbiAmJiB2YWxpZEJvdW5kYXJ5O1xuICB9XG5cbiAgLy8gUGxhY2Ugc2hpcCwgYnVpbGQgYSBzaGlwLCBjaGVjayBpZiBpdCBpcyB2YWxpZC5cbiAgcGxhY2Uoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGluaXRpYWxpemVkU2hpcCA9IG5ldyBTaGlwKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoaW5pdGlhbGl6ZWRTaGlwLnBvc2l0aW9uLCBheGlzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmxpc3QucHVzaChpbml0aWFsaXplZFNoaXApO1xuICAgIHJldHVybiBpbml0aWFsaXplZFNoaXA7XG4gIH1cblxuICBzdGF0aWMgc3dhcFR1cm4oZ2FtZU9iamVjdCkge1xuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGdhbWVPYmplY3Q7XG4gICAgcGxheWVyT25lLmlzVHVybiA9ICFwbGF5ZXJPbmUuaXNUdXJuO1xuICAgIHBsYXllclR3by5pc1R1cm4gPSAhcGxheWVyVHdvLmlzVHVybjtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGF0dGFjayBpcyBvdXQgb2YgYm91bmQgb3IgYWxyZWFkeSBleGlzdCwgdGhlbiByZXRyeVxuICAvLyBJZiBpdCBpcyB2YWxpZCwgY2hlY2tzIGlmIGEgc2hpcCBpcyBoaXQ7IG1vZGlmeSBzaGlwIGlmIGhpdFxuICByZWNlaXZlQXR0YWNrKGNvcmQsIGdhbWVPYmplY3QpIHtcbiAgICBjb25zdCBpc0V4aXN0ID0gdGhpcy5hdHRhY2tzLmZpbmQoKGF0dGFjaykgPT4gYXR0YWNrWzBdID09PSBjb3JkWzBdICYmIGF0dGFja1sxXSA9PT0gY29yZFsxXSk7XG5cbiAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IHRoaXMubGlzdC5maW5kKChzaGlwKSA9PiBzaGlwLmhpdChjb3JkKSk7XG5cbiAgICBHYW1lQm9hcmQuc3dhcFR1cm4oZ2FtZU9iamVjdCk7XG5cbiAgICB0aGlzLmF0dGFja3MucHVzaChjb3JkKTtcblxuICAgIGlmIChoaXQpIHtcbiAgICAgIHRoaXMuaGl0cy5wdXNoKGNvcmQpO1xuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cblxuICAgIHRoaXMubWlzc2VzLnB1c2goY29yZCk7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmV4cG9ydCBjb25zdCBTaGlwcyA9IHtcbiAgcGF0cm9sOiB7XG4gICAgbmFtZTogJ3BhdHJvbCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIG9yZGVyOiAxLFxuICB9LFxuICBzdWJtYXJpbmU6IHtcbiAgICBuYW1lOiAnc3VibWFyaW5lJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgb3JkZXI6IDIsXG4gIH0sXG4gIGRlc3Ryb3llcjoge1xuICAgIG5hbWU6ICdkZXN0cm95ZXInLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMyxcbiAgfSxcbiAgYmF0dGxlc2hpcDoge1xuICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICBsZW5ndGg6IDQsXG4gICAgb3JkZXI6IDQsXG4gIH0sXG4gIGNhcnJpZXI6IHtcbiAgICBuYW1lOiAnY2FycmllcicsXG4gICAgbGVuZ3RoOiA1LFxuICAgIG9yZGVyOiA1LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgICB0aGlzLmxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgIHRoaXMuYXhpcyA9IGF4aXM7XG4gICAgdGhpcy5jb29yZGluYXRlID0gY29vcmRpbmF0ZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gW107XG4gICAgdGhpcy5idWlsZFNoaXAoKTtcbiAgICB0aGlzLmRhbWFnZSA9IFtdO1xuICB9XG5cbiAgLy8gVGFrZXMgY29vcmRpbmF0ZSwgYXhpcywgYW5kIGxlbmd0aCwgYW5kIGJ1aWxkIHNoaXAgb24gYSBjZXJ0YWluIGNlbGwgcG9zaXRpb25cbiAgYnVpbGRTaGlwKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnQgPSBbLi4udGhpcy5jb29yZGluYXRlXTtcbiAgICBjb25zdCBib2R5ID0gQXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuIFtzdGFydFswXSwgc3RhcnRbMV0rK107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4gICAgICB9KTtcbiAgICB0aGlzLnBvc2l0aW9uID0gYm9keTtcbiAgfVxuXG4gIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuICBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBpc0hpdCA9IHRoaXMucG9zaXRpb24uc29tZSgocG9zKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaEhpdFBvcyA9IHZhbHVlWzBdID09PSBwb3NbMF0gJiYgdmFsdWVbMV0gPT09IHBvc1sxXTtcbiAgICAgIGlmIChtYXRjaEhpdFBvcykge1xuICAgICAgICB0aGlzLmRhbWFnZS5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaEhpdFBvcztcbiAgICB9KTtcbiAgICByZXR1cm4gaXNIaXQ7XG4gIH1cblxuICAvLyBEYW1hZ2UgcmV0dXJuIHRydWUgb2YgZGFtYWdlIGxlbmd0aCBpcyBlcXVhbCB0byBib2R5IGxlbmd0aFxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cblxuLy8gLy8gVGFrZXMgY29vcmRpbmF0ZSwgYXhpcywgYW5kIGxlbmd0aCwgYW5kIGJ1aWxkIHNoaXAgb24gYSBjZXJ0YWluIGNlbGwgcG9zaXRpb25cbi8vIGZ1bmN0aW9uIGJ1aWxkU2hpcChsZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbi8vICAgY29uc3Qgc3RhcnQgPSBbLi4uY29vcmRpbmF0ZV07XG4vLyAgIGNvbnN0IGJvZHkgPSBBcnJheShsZW5ndGgpXG4vLyAgICAgLmZpbGwoKVxuLy8gICAgIC5tYXAoKCkgPT4ge1xuLy8gICAgICAgaWYgKGF4aXMgPT09ICdob3Jpem9udGFsJykge1xuLy8gICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiBbc3RhcnRbMF0rKywgc3RhcnRbMV1dO1xuLy8gICAgIH0pO1xuLy8gICByZXR1cm4gYm9keTtcbi8vIH1cblxuLy8gLy8gRnVuY3Rpb24gQ29uc3RydWN0b3IgZm9yIHNoaXBcbi8vIGZ1bmN0aW9uIFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuLy8gICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcDtcbi8vICAgY29uc3QgZGFtYWdlID0gW107XG4vLyAgIC8vIEluaWl0aWFsaXplIHNoaXAgd2l0aCBhIHV0aWxpdHkgZnVuY3Rpb24gYnVpbGRTaGlwXG4vLyAgIGNvbnN0IHBvc2l0aW9uID0gYnVpbGRTaGlwKHNoaXAubGVuZ3RoLCBheGlzLCBjb29yZGluYXRlKTtcblxuLy8gICAvLyBUYWtlIGEgY29yZCBhbmQgY2hlY2sgaWYgY29yZCBoaXRzIGFueSBib2R5IGNvcmRcbi8vICAgZnVuY3Rpb24gaGl0KHZhbHVlKSB7XG4vLyAgICAgY29uc3QgaXNIaXQgPSBwb3NpdGlvbi5zb21lKChwb3MpID0+IHtcbi8vICAgICAgIGNvbnN0IG1hdGNoSGl0UG9zID0gdmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdO1xuLy8gICAgICAgaWYgKG1hdGNoSGl0UG9zKSB7XG4vLyAgICAgICAgIGRhbWFnZS5wdXNoKHZhbHVlKTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiBtYXRjaEhpdFBvcztcbi8vICAgICB9KTtcbi8vICAgICByZXR1cm4gaXNIaXQ7XG4vLyAgIH1cblxuLy8gICAvLyBEYW1hZ2UgcmV0dXJuIHRydWUgb2YgZGFtYWdlIGxlbmd0aCBpcyBlcXVhbCB0byBib2R5IGxlbmd0aFxuLy8gICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4vLyAgICAgcmV0dXJuIGRhbWFnZS5sZW5ndGggPT09IGxlbmd0aDtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgbGVuZ3RoLFxuLy8gICAgIGRhbWFnZSxcbi8vICAgICBheGlzLFxuLy8gICAgIHBvc2l0aW9uLFxuLy8gICAgIGhpdCxcbi8vICAgICBpc1N1bmssXG4vLyAgIH07XG4vLyB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGlzQm90LCBpbml0aWFsVHVybikge1xuICAgIHRoaXMuaXNCb3QgPSBpc0JvdDtcbiAgICB0aGlzLmlzVHVybiA9IGluaXRpYWxUdXJuO1xuICAgIHRoaXMubmFtZSA9ICcnO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cblxuICAvLyBCb3QgY3JlYXRlIHJhbmRvbSBhdHRhY2sgY29yZCBvbiB0aGUgYm9hcmQsIGtlZXAgcmV0cnlpbmcgaWYgaXQgaXMgbm90IHZhbGlkO1xuICBib3RFdmFsKHBsYXllcikge1xuICAgIGNvbnN0IHJhbmQgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgIGNvbnN0IGF0dGFja0V4aXN0ID0gcGxheWVyXG4gICAgICAuYm9hcmQuYXR0YWNrc1xuICAgICAgLmZpbmQoKGF0dGVtcHQpID0+IGF0dGVtcHRbMF0gPT09IHJhbmRbMF0gJiYgYXR0ZW1wdFsxXSA9PT0gcmFuZFsxXSk7XG5cbiAgICBpZiAoYXR0YWNrRXhpc3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmJvdEV2YWwocGxheWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZDtcbiAgfVxuXG4gIC8vIFBsYXllciBzaW1wbHkgcmVjZWl2ZSBhdHRhY2sgaWYgaXQgaXMgbm90IGEgYm90IChpbXBseWluZyBjb29yZGluYXRlIGV4aXN0cylcbiAgLy8gb3RoZXJ3aXNlLCBhIGNvb3JkIGlzIHJhbmRvbWx5IGdlbmVyYXRlZCBmb3IgdGhlIGJvdCB0byBhdHRhY2tcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuLCBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGF0dGFjayhwbGF5ZXIsIGNvb3JkaW5hdGUsIGdhbWVPYmplY3QpIHtcbiAgICByZXR1cm4gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSwgZ2FtZU9iamVjdCk7XG4gIH1cblxuICAvLyBPbmx5IHVzZSB0byBkZWNpZGUgaWYgcGxheWVyT25lIGlzIGEgYm90IG9yIGEgcmVhbCBwbGF5ZXJcbiAgc3RhdGljIHJhbmRvbVBsYXllckRlY2lkZXIoKSB7XG4gICAgY29uc3QgdHVybkRlY2lkZXIgPSBNYXRoLnJhbmRvbSgpID49IDAuNTtcbiAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgPj0gMC41KVxuICAgICAgPyBuZXcgUGxheWVyKHR1cm5EZWNpZGVyLCB0cnVlKVxuICAgICAgOiBuZXcgUGxheWVyKHR1cm5EZWNpZGVyLCB0cnVlKTtcbiAgfVxuXG4gIC8vIFNpbmdsZXBsYXllciBvYmplY3QgZm9yIGluaXRpYWxpemluZyBhIGJvdCBhbmQgYSByZWFsIHBsYXllclxuICBzdGF0aWMgc2luZ2xlcGxheWVySW5pdChuYW1lcyA9IFsnUGxheWVyIE9uZScsICdQbGF5ZXIgVHdvJ10pIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIucmFuZG9tUGxheWVyRGVjaWRlcihmYWxzZSk7XG4gICAgY29uc3QgcGxheWVyT25lSXNCb3QgPSBwbGF5ZXJPbmUuaXNCb3Q7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcighcGxheWVyT25lSXNCb3QsICFwbGF5ZXJPbmUuaXNUdXJuKTtcblxuICAgIGlmIChwbGF5ZXJPbmVJc0JvdCkge1xuICAgICAgcGxheWVyVHdvLm5hbWUgPSBuYW1lc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyT25lLm5hbWUgPSBuYW1lc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXllck9uZSxcbiAgICAgIHBsYXllclR3byxcbiAgICB9O1xuICB9XG5cbiAgLy8gTXVsdGlwbGF5ZXIgb2JqZWN0IGZvciBpbml0aWFsaXppbmcgYm90aCByZWFsIHBsYXllcnNcbiAgc3RhdGljIG11bHRpcGxheWVySW5pdChuYW1lcyA9IFsnUGxheWVyIE9uZScsICdQbGF5ZXIgVHdvJ10pIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKGZhbHNlLCB0cnVlKTtcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKGZhbHNlLCBmYWxzZSk7XG5cbiAgICBwbGF5ZXJPbmUubmFtZSA9IG5hbWVzWzBdO1xuICAgIHBsYXllclR3by5uYW1lID0gbmFtZXNbMV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGxheWVyT25lLFxuICAgICAgcGxheWVyVHdvLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==