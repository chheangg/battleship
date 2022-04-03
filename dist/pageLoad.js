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
      return player.board.receiveAttack(botEval(player));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNtQzs7Ozs7OztVQy9NbkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsS0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0RBQVc7QUFDeEI7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BhZ2VMb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuZnVuY3Rpb24gU2hpcChsZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgZnVuY3Rpb24gZXhwYW5kZXIoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBbLi4uY29vcmRpbmF0ZV07XG4gICAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuIFtzdGFydFswXSwgc3RhcnRbMV0rK107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBjaGVjayA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuICAgICAgaWYgKHZhbHVlWzBdID09PSBwb3NbMF0gJiYgdmFsdWVbMV0gPT09IHBvc1sxXSkge1xuICAgICAgICBkYW1hZ2UucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjaGVjaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAoZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkYW1hZ2UgPSBbXTtcbiAgY29uc3QgcG9zaXRpb24gPSBleHBhbmRlcigpO1xuXG4gIGZ1bmN0aW9uIGlzVmFsaWQoc2hpcHMpIHtcbiAgICBsZXQgYm91bmRhcnk7XG5cbiAgICBjb25zdCBvdmVybGFwID0gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAucG9zaXRpb24uZXZlcnkoKHBvc1gpID0+IHBvc2l0aW9uLmV2ZXJ5KChwb3NZKSA9PiB7XG4gICAgICBpZiAocG9zWFswXSA9PT0gcG9zWVswXSAmJiBwb3NYWzFdID09PSBwb3NZWzFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pKSk7XG5cbiAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICBib3VuZGFyeSA9IHBvc2l0aW9uLmV2ZXJ5KChwb3MpID0+IHtcbiAgICAgICAgICBpZiAocG9zWzFdID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICBib3VuZGFyeSA9IHBvc2l0aW9uLmV2ZXJ5KChwb3MpID0+IHtcbiAgICAgICAgICBpZiAocG9zWzBdID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBvdmVybGFwICYmIGJvdW5kYXJ5O1xuICB9XG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGRhbWFnZSxcbiAgICBheGlzLFxuICAgIHBvc2l0aW9uLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgaXNWYWxpZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBsaXN0ID0gW107XG4gIGNvbnN0IGF0dGFja3MgPSBbXTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBtaXNzZXMgPSBbXTtcbiAgZnVuY3Rpb24gcGxhY2Uoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIGxldCBvYmo7XG4gICAgc3dpdGNoIChzaGlwKSB7XG4gICAgICBjYXNlICdwYXRyb2wnOlxuICAgICAgICBvYmogPSBTaGlwKDIsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6XG4gICAgICAgIG9iaiA9IFNoaXAoMywgYXhpcywgY29vcmRpbmF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzdHJveWVyJzpcbiAgICAgICAgb2JqID0gU2hpcCgzLCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiYXR0bGVzaGlwJzpcbiAgICAgICAgb2JqID0gU2hpcCg0LCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjYXJyaWVyJzpcbiAgICAgICAgb2JqID0gU2hpcCg1LCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKG9iai5pc1ZhbGlkKGxpc3QpKSB7XG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvcmQpIHtcbiAgICBjb25zdCBpc0V4aXN0ID0gYXR0YWNrcy5zb21lKChhdHRhY2spID0+IGF0dGFja1swXSA9PT0gY29yZFswXSAmJiBhdHRhY2tbMV0gPT09IGNvcmRbMV0pO1xuICAgIGNvbnN0IGhpdCA9IGxpc3Quc29tZSgoc2hpcCkgPT4gc2hpcC5oaXQoY29yZCkpO1xuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFBsYXllci5jaGFuZ2VUdXJuKCk7XG4gICAgYXR0YWNrcy5wdXNoKGNvcmQpO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIGhpdHMucHVzaChjb3JkKTtcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG4gICAgbWlzc2VzLnB1c2goY29yZCk7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdCxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgICBhdHRhY2tzLFxuICAgIHBsYWNlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBsYXllck9iaihpc0JvdCkge1xuICBmdW5jdGlvbiBkZWNpZGVUdXJuKCkge1xuICAgIGlmIChQbGF5ZXIubGlzdFswXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvdEV2YWwocGxheWVyKSB7XG4gICAgY29uc3QgcmFuZCA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldO1xuICAgIGxldCBhdHRhY2tFeGlzdDtcbiAgICBpZiAocGxheWVyLmJvYXJkLmF0dGFja3NbMF0pIHtcbiAgICAgIGF0dGFja0V4aXN0ID0gcGxheWVyLmJvYXJkLmF0dGFja3MuZXZlcnkoKGF0dGVtcHQpID0+IHtcbiAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT09IHJhbmRbMF0gJiYgYXR0ZW1wdFsxXSA9PT0gcmFuZFsxXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYXR0YWNrRXhpc3QgPT09IHRydWUpIHtcbiAgICAgIGJvdEV2YWwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2socGxheWVyLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKGlzQm90ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgIH1cbiAgICBpZiAoaXNCb3QgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhib3RFdmFsKHBsYXllcikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNUdXJuOiBkZWNpZGVUdXJuKCksXG4gICAgYm9hcmQ6IEdhbWVib2FyZCgpLFxuICAgIGF0dGFjayxcbiAgICBpc0JvdCxcbiAgfTtcbn1cbmNvbnN0IFBsYXllciA9IChmdW5jdGlvbiBoYW5kbGVyKCkge1xuICBjb25zdCBsaXN0ID0gW107XG4gIGZ1bmN0aW9uIGNyZWF0ZShpc0JvdCkge1xuICAgIGNvbnN0IG9iaiA9IFBsYXllck9iaihpc0JvdCk7XG4gICAgbGlzdC5wdXNoKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBsaXN0LnNwbGljZSgwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVR1cm4oKSB7XG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGlmIChvYmouaXNUdXJuID09PSB0cnVlKSB7XG4gICAgICAgIG9iai5pc1R1cm4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgb2JqLmlzVHVybiA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHsgbGlzdCwgY2hhbmdlVHVybiwgY3JlYXRlLCBjbGVhciB9O1xufSgpKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vb2JqZWN0JztcblxuY29uc3QgYm9hcmRMb2FkID0gKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIGZ1bmN0aW9uIGxvYWRTaGlwKGxpc3QpIHtcbiAgICBsaXN0LmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLmJvYXJkLmxpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLnBvc2l0aW9uLmZvckVhY2goKGNvcmQpID0+IHtcbiAgICAgICAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJveC5kYXRhc2V0LnBvcyA9PT0gY29yZC5qb2luKCkpIHtcbiAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZUJveCgpIHtcbiAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKV0uZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gWzAsIDBdO1xuICAgICAgQXJyYXkoMTAwKVxuICAgICAgICAuZmlsbCgpXG4gICAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBib3guY2xhc3NOYW1lID0gYGJveGA7XG4gICAgICAgICAgYm94LmRhdGFzZXQucG9zID0gc3RhcnQ7XG4gICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgICBpZiAoc3RhcnRbMV0gPD0gOSkge1xuICAgICAgICAgICAgc3RhcnRbMV0rKztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdID09PSAxMCkge1xuICAgICAgICAgICAgc3RhcnRbMV0gPSAwO1xuICAgICAgICAgICAgc3RhcnRbMF0rKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUGFyZW50KCkge1xuICAgIFsnbGVmdCcsICdyaWdodCddLmZvckVhY2goKHNpZGUpID0+IHtcbiAgICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF1cbiAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpO1xuICAgICAgWy4uLmJveGVzXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgYm94LmRhdGFzZXQuc2lkZSA9IHNpZGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgZ2VuZXJhdGVCb3goKTtcbiAgICBhc3NpZ25QYXJlbnQoKTtcbiAgICBsb2FkU2hpcChQbGF5ZXIubGlzdCk7XG4gIH1cblxuICByZXR1cm4geyBsb2FkIH07XG59KCkpO1xuXG5mdW5jdGlvbiBtYWluTG9hZCgpIHtcbiAgYm9hcmRMb2FkLmxvYWQoKTtcbn1cblxuZXhwb3J0IHsgbWFpbkxvYWQsIGJvYXJkTG9hZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9