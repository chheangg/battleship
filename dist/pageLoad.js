/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/object.js":
/*!**************************!*\
  !*** ./src/js/object.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
function Ship(length, axis, coordinate) {
  function expander() {
    const start = [...coordinate];
    const body = Array(length)
      .fill()
      .map(() => {
        if (axis === 'horizontal') {
          return [start[0], start[1]++];
        }
        if (axis === 'vertical') {
          return [start[0]++, start[1]];
        }
      });
    return body;
  }

  function hit(value) {
    const check = position.some((pos) => {
      if (value[0] === pos[0] && value[1] === pos[1]) {
        damage.push(value);
        return true;
      }
    });
    return check;
  }

  function isSunk() {
    if (damage.length === length) {
      return true;
    }

    return false;
  }

  const damage = [];
  const position = expander();

  function isValid(ships) {
    let boundary;

    const overlap = ships.every((ship) => ship.position.every((posX) => position.every((posY) => {
      if (posX[0] === posY[0] && posX[1] === posY[1]) {
        return false;
      }
      return true;
    })));

    switch (axis) {
      case 'horizontal':
        boundary = position.every((pos) => {
          if (pos[1] > 9) {
            return false;
          }
          return true;
        });
        break;
      case 'vertical':
        boundary = position.every((pos) => {
          if (pos[0] > 9) {
            return false;
          }
          return true;
        });
        break;
      default:
        break;
    }
    return overlap && boundary;
  }
  return {
    length,
    damage,
    axis,
    position,
    hit,
    isSunk,
    isValid,
  };
}

function Gameboard() {
  const list = [];
  const attacks = [];
  const hits = [];
  const misses = [];
  function place(ship, axis, coordinate) {
    let obj;
    switch (ship) {
      case 'patrol':
        obj = Ship(2, axis, coordinate);
        break;
      case 'submarine':
        obj = Ship(3, axis, coordinate);
        break;
      case 'destroyer':
        obj = Ship(3, axis, coordinate);
        break;
      case 'battleship':
        obj = Ship(4, axis, coordinate);
        break;
      case 'carrier':
        obj = Ship(5, axis, coordinate);
        break;
      default:
        break;
    }
    if (obj.isValid(list)) {
      list.push(obj);
      return true;
    }
    return false;
  }

  function receiveAttack(cord) {
    const isExist = attacks.some((attack) => attack[0] === cord[0] && attack[1] === cord[1]);
    const hit = list.some((ship) => ship.hit(cord));
    if (isExist) {
      return false;
    }
    Player.changeTurn();
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

function PlayerObj(isBot) {
  function decideTurn() {
    if (Player.list[0]) {
      return false;
    }
    return true;
  }

  function botEval(player) {
    const rand = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
    let attackExist;
    if (player.board.attacks[0]) {
      attackExist = player.board.attacks.every((attempt) => {
        if (attempt[0] === rand[0] && attempt[1] === rand[1]) {
          return true;
        }
        return false;
      });
    }
    if (attackExist === true) {
      botEval();
    }
    return rand;
  }

  function attack(player, coordinate) {
    if (isBot === false) {
      return player.board.receiveAttack(coordinate);
    }
    if (isBot === true) {
      const cord = botEval(player);
      const state = player.board.receiveAttack(cord);
      if (state === 'false') {
        attack(player);
      }

      return {
        cord,
        state,
      };
    }
  }

  return {
    isTurn: decideTurn(),
    board: Gameboard(),
    attack,
    isBot,
  };
}
const Player = (function handler() {
  const list = [];
  function create(isBot) {
    const obj = PlayerObj(isBot);
    list.push(obj);
    return obj;
  }
  function clear() {
    list.splice(0);
  }

  function changeTurn() {
    list.forEach((obj) => {
      if (obj.isTurn === true) {
        obj.isTurn = false;
        return;
      }
      obj.isTurn = true;
    });
  }
  return { list, changeTurn, create, clear };
}());
// eslint-disable-next-line import/prefer-default-export



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
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardLoad": () => (/* binding */ boardLoad),
/* harmony export */   "mainLoad": () => (/* binding */ mainLoad)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/js/object.js");
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */


const boardLoad = (function handler() {
  function loadShip(list) {
    list.forEach((player) => {
      player.board.list.forEach((ship) => {
        ship.position.forEach((cord) => {
          [...document.getElementsByClassName('box')].forEach((box) => {
            if (box.dataset.pos === cord.join()) {
              box.classList.add('ship');
            }
          });
        });
      });
    });
  }
  function generateBox() {
    [...document.getElementsByClassName('board')].forEach((board) => {
      const start = [0, 0];
      Array(100)
        .fill()
        .forEach(() => {
          const box = document.createElement('div');
          box.className = `box`;
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

  function assignParent() {
    ['left', 'right'].forEach((side) => {
      const boxes = document.getElementsByClassName(`${side}-content`)[0]
        .getElementsByClassName('box');
      [...boxes].forEach((box) => {
        box.dataset.side = side;
      });
    });
  }

  function load() {
    generateBox();
    assignParent();
    loadShip(_object__WEBPACK_IMPORTED_MODULE_0__.Player.list);
  }

  return { load };
}());

function mainLoad() {
  boardLoad.load();
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NyYy9qcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGFnZUxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5mdW5jdGlvbiBTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICBmdW5jdGlvbiBleHBhbmRlcigpIHtcbiAgICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbiAgICBjb25zdCBib2R5ID0gQXJyYXkobGVuZ3RoKVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoKSA9PiB7XG4gICAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIHJldHVybiBbc3RhcnRbMF0rKywgc3RhcnRbMV1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdCh2YWx1ZSkge1xuICAgIGNvbnN0IGNoZWNrID0gcG9zaXRpb24uc29tZSgocG9zKSA9PiB7XG4gICAgICBpZiAodmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdKSB7XG4gICAgICAgIGRhbWFnZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChkYW1hZ2UubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRhbWFnZSA9IFtdO1xuICBjb25zdCBwb3NpdGlvbiA9IGV4cGFuZGVyKCk7XG5cbiAgZnVuY3Rpb24gaXNWYWxpZChzaGlwcykge1xuICAgIGxldCBib3VuZGFyeTtcblxuICAgIGNvbnN0IG92ZXJsYXAgPSBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5wb3NpdGlvbi5ldmVyeSgocG9zWCkgPT4gcG9zaXRpb24uZXZlcnkoKHBvc1kpID0+IHtcbiAgICAgIGlmIChwb3NYWzBdID09PSBwb3NZWzBdICYmIHBvc1hbMV0gPT09IHBvc1lbMV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkpKTtcblxuICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIGJvdW5kYXJ5ID0gcG9zaXRpb24uZXZlcnkoKHBvcykgPT4ge1xuICAgICAgICAgIGlmIChwb3NbMV0gPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIGJvdW5kYXJ5ID0gcG9zaXRpb24uZXZlcnkoKHBvcykgPT4ge1xuICAgICAgICAgIGlmIChwb3NbMF0gPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG92ZXJsYXAgJiYgYm91bmRhcnk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgZGFtYWdlLFxuICAgIGF4aXMsXG4gICAgcG9zaXRpb24sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBpc1ZhbGlkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgY29uc3QgYXR0YWNrcyA9IFtdO1xuICBjb25zdCBoaXRzID0gW107XG4gIGNvbnN0IG1pc3NlcyA9IFtdO1xuICBmdW5jdGlvbiBwbGFjZShzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gICAgbGV0IG9iajtcbiAgICBzd2l0Y2ggKHNoaXApIHtcbiAgICAgIGNhc2UgJ3BhdHJvbCc6XG4gICAgICAgIG9iaiA9IFNoaXAoMiwgYXhpcywgY29vcmRpbmF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3VibWFyaW5lJzpcbiAgICAgICAgb2JqID0gU2hpcCgzLCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXN0cm95ZXInOlxuICAgICAgICBvYmogPSBTaGlwKDMsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOlxuICAgICAgICBvYmogPSBTaGlwKDQsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhcnJpZXInOlxuICAgICAgICBvYmogPSBTaGlwKDUsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAob2JqLmlzVmFsaWQobGlzdCkpIHtcbiAgICAgIGxpc3QucHVzaChvYmopO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29yZCkge1xuICAgIGNvbnN0IGlzRXhpc3QgPSBhdHRhY2tzLnNvbWUoKGF0dGFjaykgPT4gYXR0YWNrWzBdID09PSBjb3JkWzBdICYmIGF0dGFja1sxXSA9PT0gY29yZFsxXSk7XG4gICAgY29uc3QgaGl0ID0gbGlzdC5zb21lKChzaGlwKSA9PiBzaGlwLmhpdChjb3JkKSk7XG4gICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgUGxheWVyLmNoYW5nZVR1cm4oKTtcbiAgICBhdHRhY2tzLnB1c2goY29yZCk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgaGl0cy5wdXNoKGNvcmQpO1xuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cbiAgICBtaXNzZXMucHVzaChjb3JkKTtcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0LFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICAgIGF0dGFja3MsXG4gICAgcGxhY2UsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn1cblxuZnVuY3Rpb24gUGxheWVyT2JqKGlzQm90KSB7XG4gIGZ1bmN0aW9uIGRlY2lkZVR1cm4oKSB7XG4gICAgaWYgKFBsYXllci5saXN0WzBdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYm90RXZhbChwbGF5ZXIpIHtcbiAgICBjb25zdCByYW5kID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV07XG4gICAgbGV0IGF0dGFja0V4aXN0O1xuICAgIGlmIChwbGF5ZXIuYm9hcmQuYXR0YWNrc1swXSkge1xuICAgICAgYXR0YWNrRXhpc3QgPSBwbGF5ZXIuYm9hcmQuYXR0YWNrcy5ldmVyeSgoYXR0ZW1wdCkgPT4ge1xuICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PT0gcmFuZFswXSAmJiBhdHRlbXB0WzFdID09PSByYW5kWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChhdHRhY2tFeGlzdCA9PT0gdHJ1ZSkge1xuICAgICAgYm90RXZhbCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmFuZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjayhwbGF5ZXIsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAoaXNCb3QgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgfVxuICAgIGlmIChpc0JvdCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgY29yZCA9IGJvdEV2YWwocGxheWVyKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29yZCk7XG4gICAgICBpZiAoc3RhdGUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgYXR0YWNrKHBsYXllcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvcmQsXG4gICAgICAgIHN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzVHVybjogZGVjaWRlVHVybigpLFxuICAgIGJvYXJkOiBHYW1lYm9hcmQoKSxcbiAgICBhdHRhY2ssXG4gICAgaXNCb3QsXG4gIH07XG59XG5jb25zdCBQbGF5ZXIgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmdW5jdGlvbiBjcmVhdGUoaXNCb3QpIHtcbiAgICBjb25zdCBvYmogPSBQbGF5ZXJPYmooaXNCb3QpO1xuICAgIGxpc3QucHVzaChvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgbGlzdC5zcGxpY2UoMCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VUdXJuKCkge1xuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmlzVHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICBvYmouaXNUdXJuID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9iai5pc1R1cm4gPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7IGxpc3QsIGNoYW5nZVR1cm4sIGNyZWF0ZSwgY2xlYXIgfTtcbn0oKSk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL29iamVjdCc7XG5cbmNvbnN0IGJvYXJkTG9hZCA9IChmdW5jdGlvbiBoYW5kbGVyKCkge1xuICBmdW5jdGlvbiBsb2FkU2hpcChsaXN0KSB7XG4gICAgbGlzdC5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci5ib2FyZC5saXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICAgICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgICAgIGlmIChib3guZGF0YXNldC5wb3MgPT09IGNvcmQuam9pbigpKSB7XG4gICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVCb3goKSB7XG4gICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkJyldLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBzdGFydCA9IFswLCAwXTtcbiAgICAgIEFycmF5KDEwMClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgYm94LmNsYXNzTmFtZSA9IGBib3hgO1xuICAgICAgICAgIGJveC5kYXRhc2V0LnBvcyA9IHN0YXJ0O1xuICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdIDw9IDkpIHtcbiAgICAgICAgICAgIHN0YXJ0WzFdKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydFsxXSA9PT0gMTApIHtcbiAgICAgICAgICAgIHN0YXJ0WzFdID0gMDtcbiAgICAgICAgICAgIHN0YXJ0WzBdKys7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblBhcmVudCgpIHtcbiAgICBbJ2xlZnQnLCAncmlnaHQnXS5mb3JFYWNoKChzaWRlKSA9PiB7XG4gICAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdXG4gICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKTtcbiAgICAgIFsuLi5ib3hlc10uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGJveC5kYXRhc2V0LnNpZGUgPSBzaWRlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkKCkge1xuICAgIGdlbmVyYXRlQm94KCk7XG4gICAgYXNzaWduUGFyZW50KCk7XG4gICAgbG9hZFNoaXAoUGxheWVyLmxpc3QpO1xuICB9XG5cbiAgcmV0dXJuIHsgbG9hZCB9O1xufSgpKTtcblxuZnVuY3Rpb24gbWFpbkxvYWQoKSB7XG4gIGJvYXJkTG9hZC5sb2FkKCk7XG59XG5cbmV4cG9ydCB7IG1haW5Mb2FkLCBib2FyZExvYWQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==