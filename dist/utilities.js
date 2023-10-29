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

/***/ "./src/js/objects/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/objects/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2lCOztBQUVwRDtBQUNPO0FBQ1AsVUFBVSx1QkFBdUIsRUFBRSxnRUFBZTtBQUNsRCxTQUFTLHlEQUFJO0FBQ2I7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvdXRpbGl0aWVzL3V0aWxpdGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG5mdW5jdGlvbiByZXR1cm5QbGF5ZXJUdXJuKGdhbWVPYmplY3QpIHtcbiAgcmV0dXJuIGdhbWVPYmplY3QucGxheWVyT25lLmlzVHVyblxuICAgID8gZ2FtZU9iamVjdC5wbGF5ZXJPbmVcbiAgICA6IGdhbWVPYmplY3QucGxheWVyVHdvO1xufVxuXG4vLyBUaGUgbWFpbiBHYW1lIG9iamVjdCBmb3IgZXhwb3NpbmcgaW5mb3JtYXRpb24gZm9yIGVhY2ggc3RhZ2VzIHRvIHVzZXNcbi8vIDEuIFBsYXllcnNcbi8vIDIuIFBsYXllciBmb3IgQ3VycmVudCBUdXJuXG4vLyAzLiBDdXJyZW50IEJvYXJkXG4vLyA0LiBpc1N0YXJ0ZWQgZm9yIGNoZWNraW5nIGlmIHBsYWNlbWVudCBoYXMgYmVlbiBzZXRcbi8vIDUuIGN1cnJlbnQgZ2FtZW1vZGUgKGlzTXVsdGlwbGF5ZXIpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKGlzTXVsdGlwbGF5ZXIsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gIGxldCBpc1N0YXJ0ZWQgPSBmYWxzZTtcblxuICAvLyBSZXR1cm4gcGxheWVyIHdob3NlIHR1cm5zIGlzIHRoZWlyc1xuICBmdW5jdGlvbiBjdXJyZW50VHVybigpIHtcbiAgICByZXR1cm4gcmV0dXJuUGxheWVyVHVybih0aGlzKTtcbiAgfVxuXG4gIC8vIFJldHVybiBib2FyZCBvZiBwbGF5ZXIgd2hvc2UgdHVybnMgaXMgdGhlcmVcbiAgZnVuY3Rpb24gY3VycmVudEJvYXJkKCkge1xuICAgIHJldHVybiBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtwbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0J30tY29udGVudGApWzBdXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJPbmUsIHBsYXllclR3bywgY3VycmVudFR1cm4sIGN1cnJlbnRCb2FyZCwgaXNTdGFydGVkLCBpc011bHRpcGxheWVyLFxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEdhbWUsIHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9nYW1lJztcblxuLy8gQ2hlY2sgaWYgdHdvIHNldCBvZiBhcnJheSBjb250YWluIHNpbWlsYXIgZWxlbWVudHNcbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XG4gIHJldHVybiBhLmZpbmQoKHBvcykgPT4gYlxuICAgIC5maW5kKChjdXJyZW50UG9zKSA9PiBjdXJyZW50UG9zWzBdID09PSBwb3NbMF0gJiYgY3VycmVudFBvc1sxXSA9PT0gcG9zWzFdKSk7XG59XG5cbi8vIFJldHVybiBmYWxzZSBpZiBzaGlwIGJvZHkgaXMgb3ZlciA5ICh3aGljaCBpcyBvdmVyIHRoZSBib2FyZCBib3VuZGFyeSlcbmNvbnN0IGhpdEJvdW5kYXJ5ID0gKHBvc2l0aW9uLCBheGlzKSA9PiB7XG4gIHN3aXRjaCAoYXhpcykge1xuICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgcmV0dXJuIHBvc2l0aW9uLmZpbmQoKHBvcykgPT4gKHBvc1sxXSA+IDkpKTtcbiAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICByZXR1cm4gcG9zaXRpb24uZmluZCgocG9zKSA9PiAocG9zWzBdID4gOSkpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBheGlzJyk7XG4gIH1cbn07XG5cbi8vIENoZWNrIGlmIHNoaXAgY2FuIGJlIHBsYWNlZCBvbiBhIGNlcnRhaW4gc3F1YXJlLCB3aXRob3V0IGNvbGxpc2lvblxuLy8gd2l0aCB0aGUgYm9yZGVyIG9yIG90aGVyIHNoaXBzLlxuLy8gdGFrZXMgYWxsIHRoZSBzaGlwIGFzIGFyZ3VtZW50IHRvIGNoZWNrIGZvciBjb2xsaXNvblxuZnVuY3Rpb24gaXNWYWxpZChzaGlwcywgcG9zaXRpb24sIGF4aXMpIHtcbiAgLy8gQ2hlY2sgaWYgc2hpcCBvdmVybGFwcyBvdmVyIGFueSBvdGhlciBzaGlwc1xuICBjb25zdCBoYXNDb2xsaXNpb24gPSBzaGlwc1xuICAgIC5maW5kKChzaGlwKSA9PiBpbnRlcnNlY3Qoc2hpcC5wb3NpdGlvbiwgcG9zaXRpb24pKTtcbiAgLy8gQ2hlY2sgaWYgdGhlIHNoaXAgZG9lc24ndCBvdmVybGFwIHdpdGggdGhlIGJvdW5kYXJ5XG4gIC8vIEFjY2VwdCB0aGUgY3VycmVudCBzaGlwJ3MgcG9zaXRpb24gYW5kIGF4aXNcbiAgY29uc3QgdmFsaWRCb3VuZGFyeSA9ICFoaXRCb3VuZGFyeShwb3NpdGlvbiwgYXhpcyk7XG4gIHJldHVybiAhaGFzQ29sbGlzaW9uICYmIHZhbGlkQm91bmRhcnk7XG59XG5cbi8vIFRoZSBtYWluIGdhbWUgb2JqZWN0IHRoYXQgaXMgbmVlZGVkIGZvciBldmVyeSByb3VuZFxuLy8gQ29vcmRpbmF0ZSBzeXN0ZW06IEFycmF5IFtWZXJ0aWNhbCAoMCAtPiA5KSwgSG9yaXpvbnRhbCAoMCAtPiA5KV1cbi8vIEFjY2VwdHMgcGxheWVyIG9iamVjdFxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICAvLyBMaXN0IG9mIHNoaXBzXG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgLy8gUmVjb3JkIG9mIGF0dGFja3MgbWFkZVxuICBjb25zdCBhdHRhY2tzID0gW107XG4gIC8vIFJlY29yZCBvZiBoaXRzIG1hZGVcbiAgY29uc3QgaGl0cyA9IFtdO1xuICAvLyBSZWNvcmQgb2YgbWlzc2VzXG4gIGNvbnN0IG1pc3NlcyA9IFtdO1xuXG4gIC8vIFBsYWNlIHNoaXAsIGJ1aWxkIGEgc2hpcCwgY2hlY2sgaWYgaXQgaXMgdmFsaWQuXG4gIGZ1bmN0aW9uIHBsYWNlKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBpbml0aWFsaXplZFNoaXAgPSBTaGlwKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKGxpc3QsIGluaXRpYWxpemVkU2hpcC5wb3NpdGlvbiwgYXhpcykpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxpc3QucHVzaChpbml0aWFsaXplZFNoaXApO1xuICAgIHJldHVybiBpbml0aWFsaXplZFNoaXA7XG4gIH1cblxuICBmdW5jdGlvbiBzd2FwVHVybihnYW1lT2JqZWN0KSB7XG4gICAgY29uc3QgeyBwbGF5ZXJPbmUsIHBsYXllclR3byB9ID0gZ2FtZU9iamVjdDtcbiAgICBwbGF5ZXJPbmUuaXNUdXJuID0gIXBsYXllck9uZS5pc1R1cm47XG4gICAgcGxheWVyVHdvLmlzVHVybiA9ICFwbGF5ZXJUd28uaXNUdXJuO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYXR0YWNrIGlzIG91dCBvZiBib3VuZCBvciBhbHJlYWR5IGV4aXN0LCB0aGVuIHJldHJ5XG4gIC8vIElmIGl0IGlzIHZhbGlkLCBjaGVja3MgaWYgYSBzaGlwIGlzIGhpdDsgbW9kaWZ5IHNoaXAgaWYgaGl0XG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29yZCwgZ2FtZU9iamVjdCkge1xuICAgIGNvbnN0IGlzRXhpc3QgPSBhdHRhY2tzLmZpbmQoKGF0dGFjaykgPT4gYXR0YWNrWzBdID09PSBjb3JkWzBdICYmIGF0dGFja1sxXSA9PT0gY29yZFsxXSk7XG4gICAgY29uc3QgaGl0ID0gbGlzdC5maW5kKChzaGlwKSA9PiBzaGlwLmhpdChjb3JkKSk7XG5cbiAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN3YXBUdXJuKGdhbWVPYmplY3QpO1xuXG4gICAgYXR0YWNrcy5wdXNoKGNvcmQpO1xuXG4gICAgaWYgKGhpdCkge1xuICAgICAgaGl0cy5wdXNoKGNvcmQpO1xuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cblxuICAgIG1pc3Nlcy5wdXNoKGNvcmQpO1xuICAgIHJldHVybiAnbWlzcyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3QsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gICAgYXR0YWNrcyxcbiAgICBwbGFjZSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICB9O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG4vLyBQbGF5ZXIgT2JqZWN0XG5mdW5jdGlvbiBQbGF5ZXIoaXNCb3QsIGluaXRpYWxUdXJuKSB7XG4gIC8vIEJvdCBjcmVhdGUgcmFuZG9tIGF0dGFjayBjb3JkIG9uIHRoZSBib2FyZCwga2VlcCByZXRyeWluZyBpZiBpdCBpcyBub3QgdmFsaWQ7XG4gIGZ1bmN0aW9uIGJvdEV2YWwocGxheWVyKSB7XG4gICAgY29uc3QgcmFuZCA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgY29uc3QgYXR0YWNrRXhpc3QgPSBwbGF5ZXJcbiAgICAgIC5ib2FyZC5hdHRhY2tzXG4gICAgICAuZmluZCgoYXR0ZW1wdCkgPT4gYXR0ZW1wdFswXSA9PT0gcmFuZFswXSAmJiBhdHRlbXB0WzFdID09PSByYW5kWzFdKTtcblxuICAgIGlmIChhdHRhY2tFeGlzdCkge1xuICAgICAgcmV0dXJuIGJvdEV2YWwocGxheWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZDtcbiAgfVxuXG4gIC8vIFBsYXllciBzaW1wbHkgcmVjZWl2ZSBhdHRhY2sgaWYgaXQgaXMgbm90IGEgYm90IChpbXBseWluZyBjb29yZGluYXRlIGV4aXN0cylcbiAgLy8gb3RoZXJ3aXNlLCBhIGNvb3JkIGlzIHJhbmRvbWx5IGdlbmVyYXRlZCBmb3IgdGhlIGJvdCB0byBhdHRhY2tcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIGF0dGFjayhwbGF5ZXIsIGNvb3JkaW5hdGUsIGdhbWVPYmplY3QpIHtcbiAgICByZXR1cm4gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSwgZ2FtZU9iamVjdCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzVHVybjogaW5pdGlhbFR1cm4sXG4gICAgYm9hcmQ6IEdhbWVib2FyZCgpLFxuICAgIGF0dGFjayxcbiAgICBpc0JvdCxcbiAgICBib3RFdmFsLFxuICB9O1xufVxuXG4vLyBPbmx5IHVzZSB0byBkZWNpZGUgaWYgcGxheWVyT25lIGlzIGEgYm90IG9yIGEgcmVhbCBwbGF5ZXJcbmZ1bmN0aW9uIHJhbmRvbVBsYXllckRlY2lkZXIoKSB7XG4gIGNvbnN0IHR1cm5EZWNpZGVyID0gTWF0aC5yYW5kb20oKSA+PSAwLjU7XG4gIHJldHVybiAoTWF0aC5yYW5kb20oKSA+PSAwLjUpXG4gICAgPyBQbGF5ZXIodHVybkRlY2lkZXIsIHRydWUpXG4gICAgOiBQbGF5ZXIodHVybkRlY2lkZXIsIHRydWUpO1xufVxuXG4vLyBTaW5nbGVwbGF5ZXIgb2JqZWN0IGZvciBpbml0aWFsaXppbmcgYSBib3QgYW5kIGEgcmVhbCBwbGF5ZXJcbmZ1bmN0aW9uIHNpbmdsZXBsYXllckluaXQoKSB7XG4gIGNvbnN0IHBsYXllck9uZSA9IHJhbmRvbVBsYXllckRlY2lkZXIoZmFsc2UpO1xuICBjb25zdCBwbGF5ZXJPbmVJc0JvdCA9IHBsYXllck9uZS5pc0JvdDtcbiAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKCFwbGF5ZXJPbmVJc0JvdCwgIXBsYXllck9uZS5pc1R1cm4pO1xuICByZXR1cm4ge1xuICAgIHBsYXllck9uZSxcbiAgICBwbGF5ZXJUd28sXG4gIH07XG59XG5cbi8vIE11bHRpcGxheWVyIG9iamVjdCBmb3IgaW5pdGlhbGl6aW5nIGJvdGggcmVhbCBwbGF5ZXJzXG5mdW5jdGlvbiBtdWx0aXBsYXllckluaXQoKSB7XG4gIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihmYWxzZSwgdHJ1ZSk7XG4gIGNvbnN0IHBsYXllclR3byA9IFBsYXllcihmYWxzZSwgZmFsc2UpO1xuICByZXR1cm4ge1xuICAgIHBsYXllck9uZSxcbiAgICBwbGF5ZXJUd28sXG4gIH07XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBQbGF5ZXIsIHNpbmdsZXBsYXllckluaXQsIG11bHRpcGxheWVySW5pdCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmV4cG9ydCBjb25zdCBTaGlwcyA9IHtcbiAgcGF0cm9sOiB7XG4gICAgbmFtZTogJ3BhdHJvbCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIG9yZGVyOiAxLFxuICB9LFxuICBzdWJtYXJpbmU6IHtcbiAgICBuYW1lOiAnc3VibWFyaW5lJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgb3JkZXI6IDIsXG4gIH0sXG4gIGRlc3Ryb3llcjoge1xuICAgIG5hbWU6ICdkZXN0cm95ZXInLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMyxcbiAgfSxcbiAgYmF0dGxlc2hpcDoge1xuICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICBsZW5ndGg6IDQsXG4gICAgb3JkZXI6IDQsXG4gIH0sXG4gIGNhcnJpZXI6IHtcbiAgICBuYW1lOiAnY2FycmllcicsXG4gICAgbGVuZ3RoOiA1LFxuICAgIG9yZGVyOiA1LFxuICB9LFxufTtcblxuLy8gVGFrZXMgY29vcmRpbmF0ZSwgYXhpcywgYW5kIGxlbmd0aCwgYW5kIGJ1aWxkIHNoaXAgb24gYSBjZXJ0YWluIGNlbGwgcG9zaXRpb25cbmZ1bmN0aW9uIGJ1aWxkU2hpcChsZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgY29uc3Qgc3RhcnQgPSBbLi4uY29vcmRpbmF0ZV07XG4gIGNvbnN0IGJvZHkgPSBBcnJheShsZW5ndGgpXG4gICAgLmZpbGwoKVxuICAgIC5tYXAoKCkgPT4ge1xuICAgICAgaWYgKGF4aXMgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbc3RhcnRbMF0rKywgc3RhcnRbMV1dO1xuICAgIH0pO1xuICByZXR1cm4gYm9keTtcbn1cblxuLy8gRnVuY3Rpb24gQ29uc3RydWN0b3IgZm9yIHNoaXBcbmZ1bmN0aW9uIFNoaXAoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgY29uc3QgZGFtYWdlID0gW107XG4gIC8vIEluaWl0aWFsaXplIHNoaXAgd2l0aCBhIHV0aWxpdHkgZnVuY3Rpb24gYnVpbGRTaGlwXG4gIGNvbnN0IHBvc2l0aW9uID0gYnVpbGRTaGlwKHNoaXAubGVuZ3RoLCBheGlzLCBjb29yZGluYXRlKTtcblxuICAvLyBUYWtlIGEgY29yZCBhbmQgY2hlY2sgaWYgY29yZCBoaXRzIGFueSBib2R5IGNvcmRcbiAgZnVuY3Rpb24gaGl0KHZhbHVlKSB7XG4gICAgY29uc3QgaXNIaXQgPSBwb3NpdGlvbi5zb21lKChwb3MpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoSGl0UG9zID0gdmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdO1xuICAgICAgaWYgKG1hdGNoSGl0UG9zKSB7XG4gICAgICAgIGRhbWFnZS5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaEhpdFBvcztcbiAgICB9KTtcbiAgICByZXR1cm4gaXNIaXQ7XG4gIH1cblxuICAvLyBEYW1hZ2UgcmV0dXJuIHRydWUgb2YgZGFtYWdlIGxlbmd0aCBpcyBlcXVhbCB0byBib2R5IGxlbmd0aFxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIGRhbWFnZS5sZW5ndGggPT09IGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGRhbWFnZSxcbiAgICBheGlzLFxuICAgIHBvc2l0aW9uLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vb2JqZWN0cy9nYW1lJztcbmltcG9ydCB7IG11bHRpcGxheWVySW5pdCB9IGZyb20gJy4uL29iamVjdHMvcGxheWVyJztcblxuLy8gdXRpbGl0eSBmdW5jdGlvbiBmb3IgaW5pdGlhbGl6aW5nIFRlc3QncyBnYW1lIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlc3RHYW1lT2JqZWN0KCkge1xuICBjb25zdCB7IHBsYXllck9uZSwgcGxheWVyVHdvIH0gPSBtdWx0aXBsYXllckluaXQoKTtcbiAgcmV0dXJuIEdhbWUodHJ1ZSwgcGxheWVyT25lLCBwbGF5ZXJUd28pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcihlbGVtZW50KSB7XG4gIGNvbnN0IG9sZEVsZW1lbnQgPSBlbGVtZW50O1xuICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGlmIChvbGRFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICBvbGRFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=