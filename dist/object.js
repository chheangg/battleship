/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************!*\
  !*** ./src/js/object.js ***!
  \**************************/
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
    expander,
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
      if (state) {
        return {
          cord,
          state,
        };
      }
      attack(player);
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
  return {
    list, changeTurn, create, clear,
  };
}());
// eslint-disable-next-line import/prefer-default-export


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuZnVuY3Rpb24gU2hpcChsZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgZnVuY3Rpb24gZXhwYW5kZXIoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBbLi4uY29vcmRpbmF0ZV07XG4gICAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuIFtzdGFydFswXSwgc3RhcnRbMV0rK107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBjaGVjayA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuICAgICAgaWYgKHZhbHVlWzBdID09PSBwb3NbMF0gJiYgdmFsdWVbMV0gPT09IHBvc1sxXSkge1xuICAgICAgICBkYW1hZ2UucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjaGVjaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAoZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkYW1hZ2UgPSBbXTtcbiAgY29uc3QgcG9zaXRpb24gPSBleHBhbmRlcigpO1xuXG4gIGZ1bmN0aW9uIGlzVmFsaWQoc2hpcHMpIHtcbiAgICBsZXQgYm91bmRhcnk7XG5cbiAgICBjb25zdCBvdmVybGFwID0gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAucG9zaXRpb24uZXZlcnkoKHBvc1gpID0+IHBvc2l0aW9uLmV2ZXJ5KChwb3NZKSA9PiB7XG4gICAgICBpZiAocG9zWFswXSA9PT0gcG9zWVswXSAmJiBwb3NYWzFdID09PSBwb3NZWzFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pKSk7XG5cbiAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICBib3VuZGFyeSA9IHBvc2l0aW9uLmV2ZXJ5KChwb3MpID0+IHtcbiAgICAgICAgICBpZiAocG9zWzFdID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICBib3VuZGFyeSA9IHBvc2l0aW9uLmV2ZXJ5KChwb3MpID0+IHtcbiAgICAgICAgICBpZiAocG9zWzBdID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBvdmVybGFwICYmIGJvdW5kYXJ5O1xuICB9XG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGRhbWFnZSxcbiAgICBheGlzLFxuICAgIHBvc2l0aW9uLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgaXNWYWxpZCxcbiAgICBleHBhbmRlcixcbiAgfTtcbn1cblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBsaXN0ID0gW107XG4gIGNvbnN0IGF0dGFja3MgPSBbXTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBtaXNzZXMgPSBbXTtcbiAgZnVuY3Rpb24gcGxhY2Uoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIGxldCBvYmo7XG4gICAgc3dpdGNoIChzaGlwKSB7XG4gICAgICBjYXNlICdwYXRyb2wnOlxuICAgICAgICBvYmogPSBTaGlwKDIsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6XG4gICAgICAgIG9iaiA9IFNoaXAoMywgYXhpcywgY29vcmRpbmF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzdHJveWVyJzpcbiAgICAgICAgb2JqID0gU2hpcCgzLCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiYXR0bGVzaGlwJzpcbiAgICAgICAgb2JqID0gU2hpcCg0LCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjYXJyaWVyJzpcbiAgICAgICAgb2JqID0gU2hpcCg1LCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKG9iai5pc1ZhbGlkKGxpc3QpKSB7XG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvcmQpIHtcbiAgICBjb25zdCBpc0V4aXN0ID0gYXR0YWNrcy5zb21lKChhdHRhY2spID0+IGF0dGFja1swXSA9PT0gY29yZFswXSAmJiBhdHRhY2tbMV0gPT09IGNvcmRbMV0pO1xuICAgIGNvbnN0IGhpdCA9IGxpc3Quc29tZSgoc2hpcCkgPT4gc2hpcC5oaXQoY29yZCkpO1xuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFBsYXllci5jaGFuZ2VUdXJuKCk7XG4gICAgYXR0YWNrcy5wdXNoKGNvcmQpO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIGhpdHMucHVzaChjb3JkKTtcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG4gICAgbWlzc2VzLnB1c2goY29yZCk7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdCxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgICBhdHRhY2tzLFxuICAgIHBsYWNlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBsYXllck9iaihpc0JvdCkge1xuICBmdW5jdGlvbiBkZWNpZGVUdXJuKCkge1xuICAgIGlmIChQbGF5ZXIubGlzdFswXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvdEV2YWwocGxheWVyKSB7XG4gICAgY29uc3QgcmFuZCA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldO1xuICAgIGxldCBhdHRhY2tFeGlzdDtcbiAgICBpZiAocGxheWVyLmJvYXJkLmF0dGFja3NbMF0pIHtcbiAgICAgIGF0dGFja0V4aXN0ID0gcGxheWVyLmJvYXJkLmF0dGFja3MuZXZlcnkoKGF0dGVtcHQpID0+IHtcbiAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT09IHJhbmRbMF0gJiYgYXR0ZW1wdFsxXSA9PT0gcmFuZFsxXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYXR0YWNrRXhpc3QgPT09IHRydWUpIHtcbiAgICAgIGJvdEV2YWwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2socGxheWVyLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKGlzQm90ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgIH1cbiAgICBpZiAoaXNCb3QgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGNvcmQgPSBib3RFdmFsKHBsYXllcik7XG4gICAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvcmQpO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29yZCxcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGF0dGFjayhwbGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNUdXJuOiBkZWNpZGVUdXJuKCksXG4gICAgYm9hcmQ6IEdhbWVib2FyZCgpLFxuICAgIGF0dGFjayxcbiAgICBpc0JvdCxcbiAgfTtcbn1cbmNvbnN0IFBsYXllciA9IChmdW5jdGlvbiBoYW5kbGVyKCkge1xuICBjb25zdCBsaXN0ID0gW107XG4gIGZ1bmN0aW9uIGNyZWF0ZShpc0JvdCkge1xuICAgIGNvbnN0IG9iaiA9IFBsYXllck9iaihpc0JvdCk7XG4gICAgbGlzdC5wdXNoKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBsaXN0LnNwbGljZSgwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVR1cm4oKSB7XG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGlmIChvYmouaXNUdXJuID09PSB0cnVlKSB7XG4gICAgICAgIG9iai5pc1R1cm4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgb2JqLmlzVHVybiA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsaXN0LCBjaGFuZ2VUdXJuLCBjcmVhdGUsIGNsZWFyLFxuICB9O1xufSgpKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9