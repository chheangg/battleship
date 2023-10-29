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
/*!********************************!*\
  !*** ./src/js/objects/ship.js ***!
  \********************************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsU0FBUztBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3RzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuZXhwb3J0IGNvbnN0IFNoaXBzID0ge1xuICBwYXRyb2w6IHtcbiAgICBuYW1lOiAncGF0cm9sJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgb3JkZXI6IDEsXG4gIH0sXG4gIHN1Ym1hcmluZToge1xuICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBvcmRlcjogMixcbiAgfSxcbiAgZGVzdHJveWVyOiB7XG4gICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAzLFxuICB9LFxuICBiYXR0bGVzaGlwOiB7XG4gICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBvcmRlcjogNCxcbiAgfSxcbiAgY2Fycmllcjoge1xuICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgb3JkZXI6IDUsXG4gIH0sXG59O1xuXG4vLyBUYWtlcyBjb29yZGluYXRlLCBheGlzLCBhbmQgbGVuZ3RoLCBhbmQgYnVpbGQgc2hpcCBvbiBhIGNlcnRhaW4gY2VsbCBwb3NpdGlvblxuZnVuY3Rpb24gYnVpbGRTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbiAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4gICAgfSk7XG4gIHJldHVybiBib2R5O1xufVxuXG4vLyBGdW5jdGlvbiBDb25zdHJ1Y3RvciBmb3Igc2hpcFxuZnVuY3Rpb24gU2hpcChzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICBjb25zdCBkYW1hZ2UgPSBbXTtcbiAgLy8gSW5paXRpYWxpemUgc2hpcCB3aXRoIGEgdXRpbGl0eSBmdW5jdGlvbiBidWlsZFNoaXBcbiAgY29uc3QgcG9zaXRpb24gPSBidWlsZFNoaXAoc2hpcC5sZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpO1xuXG4gIC8vIFRha2UgYSBjb3JkIGFuZCBjaGVjayBpZiBjb3JkIGhpdHMgYW55IGJvZHkgY29yZFxuICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBpc0hpdCA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hIaXRQb3MgPSB2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV07XG4gICAgICBpZiAobWF0Y2hIaXRQb3MpIHtcbiAgICAgICAgZGFtYWdlLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoSGl0UG9zO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0hpdDtcbiAgfVxuXG4gIC8vIERhbWFnZSByZXR1cm4gdHJ1ZSBvZiBkYW1hZ2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGJvZHkgbGVuZ3RoXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgZGFtYWdlLFxuICAgIGF4aXMsXG4gICAgcG9zaXRpb24sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9