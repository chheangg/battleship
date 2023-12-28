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
/*!***************************************!*\
  !*** ./src/js/utilities/utilities.js ***!
  \***************************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHlDQUF5QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsb0NBQW9DO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBSTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9DOztBQUVyQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFTO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ21DO0FBQ0k7O0FBRXZDO0FBQ087QUFDUCxVQUFVLHVCQUF1QixFQUFFLHVFQUFzQjtBQUN6RCxhQUFhLHFEQUFJO0FBQ2pCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3V0aWxpdGllcy91dGlsaXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuLy8gVGhlIG1haW4gR2FtZSBvYmplY3QgZm9yIGV4cG9zaW5nIGluZm9ybWF0aW9uIGZvciBlYWNoIHN0YWdlcyB0byB1c2VzXG4vLyAxLiBQbGF5ZXJzXG4vLyAyLiBQbGF5ZXIgZm9yIEN1cnJlbnQgVHVyblxuLy8gMy4gQ3VycmVudCBCb2FyZFxuLy8gNC4gaXNTdGFydGVkIGZvciBjaGVja2luZyBpZiBwbGFjZW1lbnQgaGFzIGJlZW4gc2V0XG4vLyA1LiBjdXJyZW50IGdhbWVtb2RlIChpc011bHRpcGxheWVyKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoaXNNdWx0aXBsYXllciwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgICB0aGlzLmlzTXVsdGlwbGF5ZXIgPSBpc011bHRpcGxheWVyO1xuICAgIHRoaXMucGxheWVyT25lID0gcGxheWVyT25lO1xuICAgIHRoaXMucGxheWVyVHdvID0gcGxheWVyVHdvO1xuICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gIH1cblxuICBjdXJyZW50VHVybigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJPbmUuaXNUdXJuXG4gICAgICA/IHRoaXMucGxheWVyT25lIDogdGhpcy5wbGF5ZXJUd287XG4gIH1cblxuICBjdXJyZW50Qm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5wbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0J30tY29udGVudGApWzBdO1xuICAgIGNvbnN0IGJvYXJkID0gWy4uLmJvYXJkQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXTtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gcmV0dXJuUGxheWVyVHVybihnYW1lT2JqZWN0KSB7XG4vLyAgIHJldHVybiBnYW1lT2JqZWN0LnBsYXllck9uZS5pc1R1cm5cbi8vICAgICA/IGdhbWVPYmplY3QucGxheWVyT25lXG4vLyAgICAgOiBnYW1lT2JqZWN0LnBsYXllclR3bztcbi8vIH1cblxuLy8vIE9sZCBWZXJzaW9uIVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZShpc011bHRpcGxheWVyLCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuLy8gICBsZXQgaXNTdGFydGVkID0gZmFsc2U7XG5cbi8vICAgLy8gUmV0dXJuIHBsYXllciB3aG9zZSB0dXJucyBpcyB0aGVpcnNcbi8vICAgZnVuY3Rpb24gY3VycmVudFR1cm4oKSB7XG4vLyAgICAgcmV0dXJuIHJldHVyblBsYXllclR1cm4odGhpcyk7XG4vLyAgIH1cblxuLy8gICAvLyBSZXR1cm4gYm9hcmQgb2YgcGxheWVyIHdob3NlIHR1cm5zIGlzIHRoZXJlXG4vLyAgIGZ1bmN0aW9uIGN1cnJlbnRCb2FyZCgpIHtcbi8vICAgICByZXR1cm5cbi8vICAgICAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtwbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0J30tY29udGVudGApWzBdXG4vLyAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwbGF5ZXJPbmUsIHBsYXllclR3bywgY3VycmVudFR1cm4sIGN1cnJlbnRCb2FyZCwgaXNTdGFydGVkLCBpc011bHRpcGxheWVyLFxuLy8gICB9O1xuLy8gfVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIHRoaXMuYXR0YWNrcyA9IFtdO1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMubWlzc2VzID0gW107XG4gIH1cblxuICAvLyBDaGVjayBpZiB0d28gc2V0IG9mIGFycmF5IGNvbnRhaW4gc2ltaWxhciBlbGVtZW50c1xuICBzdGF0aWMgaW50ZXJzZWN0KGEsIGIpIHtcbiAgICByZXR1cm4gYS5maW5kKChwb3MpID0+IGJcbiAgICAgIC5maW5kKChjdXJyZW50UG9zKSA9PiBjdXJyZW50UG9zWzBdID09PSBwb3NbMF0gJiYgY3VycmVudFBvc1sxXSA9PT0gcG9zWzFdKSk7XG4gIH1cblxuICAvLyBSZXR1cm4gZmFsc2UgaWYgc2hpcCBib2R5IGlzIG92ZXIgOSAod2hpY2ggaXMgb3ZlciB0aGUgYm9hcmQgYm91bmRhcnkpXG4gIHN0YXRpYyBoaXRCb3VuZGFyeShwb3NpdGlvbiwgYXhpcykge1xuICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMV0gPiA5KSk7XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5maW5kKChwb3MpID0+IChwb3NbMF0gPiA5KSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBheGlzJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIG9uIGEgY2VydGFpbiBzcXVhcmUsIHdpdGhvdXQgY29sbGlzaW9uXG4gIC8vIHdpdGggdGhlIGJvcmRlciBvciBvdGhlciBzaGlwcy5cbiAgLy8gdGFrZXMgYWxsIHRoZSBzaGlwIGFzIGFyZ3VtZW50IHRvIGNoZWNrIGZvciBjb2xsaXNvblxuICBpc1ZhbGlkKHBvc2l0aW9uLCBheGlzKSB7XG4gICAgLy8gQ2hlY2sgaWYgc2hpcCBvdmVybGFwcyBvdmVyIGFueSBvdGhlciBzaGlwc1xuICAgIGNvbnN0IGhhc0NvbGxpc2lvbiA9IHRoaXMubGlzdFxuICAgICAgLmZpbmQoKHNoaXApID0+IEdhbWVCb2FyZC5pbnRlcnNlY3Qoc2hpcC5wb3NpdGlvbiwgcG9zaXRpb24pKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgc2hpcCBkb2Vzbid0IG92ZXJsYXAgd2l0aCB0aGUgYm91bmRhcnlcbiAgICAvLyBBY2NlcHQgdGhlIGN1cnJlbnQgc2hpcCdzIHBvc2l0aW9uIGFuZCBheGlzXG4gICAgY29uc3QgdmFsaWRCb3VuZGFyeSA9ICFHYW1lQm9hcmQuaGl0Qm91bmRhcnkocG9zaXRpb24sIGF4aXMpO1xuICAgIHJldHVybiAhaGFzQ29sbGlzaW9uICYmIHZhbGlkQm91bmRhcnk7XG4gIH1cblxuICAvLyBQbGFjZSBzaGlwLCBidWlsZCBhIHNoaXAsIGNoZWNrIGlmIGl0IGlzIHZhbGlkLlxuICBwbGFjZShzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZWRTaGlwID0gbmV3IFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZChpbml0aWFsaXplZFNoaXAucG9zaXRpb24sIGF4aXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGlzdC5wdXNoKGluaXRpYWxpemVkU2hpcCk7XG4gICAgcmV0dXJuIGluaXRpYWxpemVkU2hpcDtcbiAgfVxuXG4gIHN0YXRpYyBzd2FwVHVybihnYW1lT2JqZWN0KSB7XG4gICAgY29uc3QgeyBwbGF5ZXJPbmUsIHBsYXllclR3byB9ID0gZ2FtZU9iamVjdDtcbiAgICBwbGF5ZXJPbmUuaXNUdXJuID0gIXBsYXllck9uZS5pc1R1cm47XG4gICAgcGxheWVyVHdvLmlzVHVybiA9ICFwbGF5ZXJUd28uaXNUdXJuO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYXR0YWNrIGlzIG91dCBvZiBib3VuZCBvciBhbHJlYWR5IGV4aXN0LCB0aGVuIHJldHJ5XG4gIC8vIElmIGl0IGlzIHZhbGlkLCBjaGVja3MgaWYgYSBzaGlwIGlzIGhpdDsgbW9kaWZ5IHNoaXAgaWYgaGl0XG4gIHJlY2VpdmVBdHRhY2soY29yZCwgZ2FtZU9iamVjdCkge1xuICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLmF0dGFja3MuZmluZCgoYXR0YWNrKSA9PiBhdHRhY2tbMF0gPT09IGNvcmRbMF0gJiYgYXR0YWNrWzFdID09PSBjb3JkWzFdKTtcblxuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gdGhpcy5saXN0LmZpbmQoKHNoaXApID0+IHNoaXAuaGl0KGNvcmQpKTtcblxuICAgIEdhbWVCb2FyZC5zd2FwVHVybihnYW1lT2JqZWN0KTtcblxuICAgIHRoaXMuYXR0YWNrcy5wdXNoKGNvcmQpO1xuXG4gICAgaWYgKGhpdCkge1xuICAgICAgdGhpcy5oaXRzLnB1c2goY29yZCk7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuXG4gICAgdGhpcy5taXNzZXMucHVzaChjb3JkKTtcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihpc0JvdCwgaW5pdGlhbFR1cm4pIHtcbiAgICB0aGlzLmlzQm90ID0gaXNCb3Q7XG4gICAgdGhpcy5pc1R1cm4gPSBpbml0aWFsVHVybjtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG5cbiAgLy8gQm90IGNyZWF0ZSByYW5kb20gYXR0YWNrIGNvcmQgb24gdGhlIGJvYXJkLCBrZWVwIHJldHJ5aW5nIGlmIGl0IGlzIG5vdCB2YWxpZDtcbiAgYm90RXZhbChwbGF5ZXIpIHtcbiAgICBjb25zdCByYW5kID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICBjb25zdCBhdHRhY2tFeGlzdCA9IHBsYXllclxuICAgICAgLmJvYXJkLmF0dGFja3NcbiAgICAgIC5maW5kKChhdHRlbXB0KSA9PiBhdHRlbXB0WzBdID09PSByYW5kWzBdICYmIGF0dGVtcHRbMV0gPT09IHJhbmRbMV0pO1xuXG4gICAgaWYgKGF0dGFja0V4aXN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5ib3RFdmFsKHBsYXllcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmQ7XG4gIH1cblxuICAvLyBQbGF5ZXIgc2ltcGx5IHJlY2VpdmUgYXR0YWNrIGlmIGl0IGlzIG5vdCBhIGJvdCAoaW1wbHlpbmcgY29vcmRpbmF0ZSBleGlzdHMpXG4gIC8vIG90aGVyd2lzZSwgYSBjb29yZCBpcyByYW5kb21seSBnZW5lcmF0ZWQgZm9yIHRoZSBib3QgdG8gYXR0YWNrXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVybiwgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBhdHRhY2socGxheWVyLCBjb29yZGluYXRlLCBnYW1lT2JqZWN0KSB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUsIGdhbWVPYmplY3QpO1xuICB9XG5cbiAgLy8gT25seSB1c2UgdG8gZGVjaWRlIGlmIHBsYXllck9uZSBpcyBhIGJvdCBvciBhIHJlYWwgcGxheWVyXG4gIHN0YXRpYyByYW5kb21QbGF5ZXJEZWNpZGVyKCkge1xuICAgIGNvbnN0IHR1cm5EZWNpZGVyID0gTWF0aC5yYW5kb20oKSA+PSAwLjU7XG4gICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpID49IDAuNSlcbiAgICAgID8gbmV3IFBsYXllcih0dXJuRGVjaWRlciwgdHJ1ZSlcbiAgICAgIDogbmV3IFBsYXllcih0dXJuRGVjaWRlciwgdHJ1ZSk7XG4gIH1cblxuICAvLyBTaW5nbGVwbGF5ZXIgb2JqZWN0IGZvciBpbml0aWFsaXppbmcgYSBib3QgYW5kIGEgcmVhbCBwbGF5ZXJcbiAgc3RhdGljIHNpbmdsZXBsYXllckluaXQobmFtZXMgPSBbJ1BsYXllciBPbmUnLCAnUGxheWVyIFR3byddKSB7XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyLnJhbmRvbVBsYXllckRlY2lkZXIoZmFsc2UpO1xuICAgIGNvbnN0IHBsYXllck9uZUlzQm90ID0gcGxheWVyT25lLmlzQm90O1xuICAgIGNvbnN0IHBsYXllclR3byA9IG5ldyBQbGF5ZXIoIXBsYXllck9uZUlzQm90LCAhcGxheWVyT25lLmlzVHVybik7XG5cbiAgICBpZiAocGxheWVyT25lSXNCb3QpIHtcbiAgICAgIHBsYXllclR3by5uYW1lID0gbmFtZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllck9uZS5uYW1lID0gbmFtZXNbMF07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwbGF5ZXJPbmUsXG4gICAgICBwbGF5ZXJUd28sXG4gICAgfTtcbiAgfVxuXG4gIC8vIE11bHRpcGxheWVyIG9iamVjdCBmb3IgaW5pdGlhbGl6aW5nIGJvdGggcmVhbCBwbGF5ZXJzXG4gIHN0YXRpYyBtdWx0aXBsYXllckluaXQobmFtZXMgPSBbJ1BsYXllciBPbmUnLCAnUGxheWVyIFR3byddKSB7XG4gICAgY29uc3QgcGxheWVyT25lID0gbmV3IFBsYXllcihmYWxzZSwgdHJ1ZSk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcihmYWxzZSwgZmFsc2UpO1xuXG4gICAgcGxheWVyT25lLm5hbWUgPSBuYW1lc1swXTtcbiAgICBwbGF5ZXJUd28ubmFtZSA9IG5hbWVzWzFdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXllck9uZSxcbiAgICAgIHBsYXllclR3byxcbiAgICB9O1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuZXhwb3J0IGNvbnN0IFNoaXBzID0ge1xuICBwYXRyb2w6IHtcbiAgICBuYW1lOiAncGF0cm9sJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgb3JkZXI6IDEsXG4gIH0sXG4gIHN1Ym1hcmluZToge1xuICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMixcbiAgfSxcbiAgZGVzdHJveWVyOiB7XG4gICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAzLFxuICB9LFxuICBiYXR0bGVzaGlwOiB7XG4gICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBvcmRlcjogNCxcbiAgfSxcbiAgY2Fycmllcjoge1xuICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgb3JkZXI6IDUsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3Ioc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIHRoaXMubGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgdGhpcy5heGlzID0gYXhpcztcbiAgICB0aGlzLmNvb3JkaW5hdGUgPSBjb29yZGluYXRlO1xuICAgIHRoaXMucG9zaXRpb24gPSBbXTtcbiAgICB0aGlzLmJ1aWxkU2hpcCgpO1xuICAgIHRoaXMuZGFtYWdlID0gW107XG4gIH1cblxuICAvLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuICBidWlsZFNoaXAoKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGFydCA9IFsuLi50aGlzLmNvb3JkaW5hdGVdO1xuICAgIGNvbnN0IGJvZHkgPSBBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5heGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbiAgICAgIH0pO1xuICAgIHRoaXMucG9zaXRpb24gPSBib2R5O1xuICB9XG5cbiAgLy8gVGFrZSBhIGNvcmQgYW5kIGNoZWNrIGlmIGNvcmQgaGl0cyBhbnkgYm9keSBjb3JkXG4gIGhpdCh2YWx1ZSkge1xuICAgIGNvbnN0IGlzSGl0ID0gdGhpcy5wb3NpdGlvbi5zb21lKChwb3MpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoSGl0UG9zID0gdmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdO1xuICAgICAgaWYgKG1hdGNoSGl0UG9zKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0hpdDtcbiAgfVxuXG4gIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5kYW1hZ2UubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuXG4vLyAvLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuLy8gZnVuY3Rpb24gYnVpbGRTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuLy8gICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbi8vICAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbi8vICAgICAuZmlsbCgpXG4vLyAgICAgLm1hcCgoKSA9PiB7XG4vLyAgICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4vLyAgICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4vLyAgICAgfSk7XG4vLyAgIHJldHVybiBib2R5O1xuLy8gfVxuXG4vLyAvLyBGdW5jdGlvbiBDb25zdHJ1Y3RvciBmb3Igc2hpcFxuLy8gZnVuY3Rpb24gU2hpcChzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4vLyAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuLy8gICBjb25zdCBkYW1hZ2UgPSBbXTtcbi8vICAgLy8gSW5paXRpYWxpemUgc2hpcCB3aXRoIGEgdXRpbGl0eSBmdW5jdGlvbiBidWlsZFNoaXBcbi8vICAgY29uc3QgcG9zaXRpb24gPSBidWlsZFNoaXAoc2hpcC5sZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4vLyAgIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuLy8gICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbi8vICAgICBjb25zdCBpc0hpdCA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuLy8gICAgICAgY29uc3QgbWF0Y2hIaXRQb3MgPSB2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV07XG4vLyAgICAgICBpZiAobWF0Y2hIaXRQb3MpIHtcbi8vICAgICAgICAgZGFtYWdlLnB1c2godmFsdWUpO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiBpc0hpdDtcbi8vICAgfVxuXG4vLyAgIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4vLyAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbi8vICAgICByZXR1cm4gZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBsZW5ndGgsXG4vLyAgICAgZGFtYWdlLFxuLy8gICAgIGF4aXMsXG4vLyAgICAgcG9zaXRpb24sXG4vLyAgICAgaGl0LFxuLy8gICAgIGlzU3Vuayxcbi8vICAgfTtcbi8vIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vb2JqZWN0cy9nYW1lJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vb2JqZWN0cy9wbGF5ZXInO1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9uIGZvciBpbml0aWFsaXppbmcgVGVzdCdzIGdhbWUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVzdEdhbWVPYmplY3QoKSB7XG4gIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IFBsYXllci5tdWx0aXBsYXllckluaXQoKTtcbiAgcmV0dXJuIG5ldyBHYW1lKHRydWUsIHBsYXllck9uZSwgcGxheWVyVHdvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xuICBjb25zdCBvbGRFbGVtZW50ID0gZWxlbWVudDtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICBpZiAob2xkRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgb2xkRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9