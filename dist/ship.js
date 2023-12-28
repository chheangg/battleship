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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdHMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5leHBvcnQgY29uc3QgU2hpcHMgPSB7XG4gIHBhdHJvbDoge1xuICAgIG5hbWU6ICdwYXRyb2wnLFxuICAgIGxlbmd0aDogMixcbiAgICBvcmRlcjogMSxcbiAgfSxcbiAgc3VibWFyaW5lOiB7XG4gICAgbmFtZTogJ3N1Ym1hcmluZScsXG4gICAgbGVuZ3RoOiAzLFxuICAgIG9yZGVyOiAyLFxuICB9LFxuICBkZXN0cm95ZXI6IHtcbiAgICBuYW1lOiAnZGVzdHJveWVyJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgb3JkZXI6IDMsXG4gIH0sXG4gIGJhdHRsZXNoaXA6IHtcbiAgICBuYW1lOiAnYmF0dGxlc2hpcCcsXG4gICAgbGVuZ3RoOiA0LFxuICAgIG9yZGVyOiA0LFxuICB9LFxuICBjYXJyaWVyOiB7XG4gICAgbmFtZTogJ2NhcnJpZXInLFxuICAgIGxlbmd0aDogNSxcbiAgICBvcmRlcjogNSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gICAgdGhpcy5sZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICB0aGlzLmF4aXMgPSBheGlzO1xuICAgIHRoaXMuY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGU7XG4gICAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICAgIHRoaXMuYnVpbGRTaGlwKCk7XG4gICAgdGhpcy5kYW1hZ2UgPSBbXTtcbiAgfVxuXG4gIC8vIFRha2VzIGNvb3JkaW5hdGUsIGF4aXMsIGFuZCBsZW5ndGgsIGFuZCBidWlsZCBzaGlwIG9uIGEgY2VydGFpbiBjZWxsIHBvc2l0aW9uXG4gIGJ1aWxkU2hpcCgpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0ID0gWy4uLnRoaXMuY29vcmRpbmF0ZV07XG4gICAgY29uc3QgYm9keSA9IEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmF4aXMgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbc3RhcnRbMF0rKywgc3RhcnRbMV1dO1xuICAgICAgfSk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IGJvZHk7XG4gIH1cblxuICAvLyBUYWtlIGEgY29yZCBhbmQgY2hlY2sgaWYgY29yZCBoaXRzIGFueSBib2R5IGNvcmRcbiAgaGl0KHZhbHVlKSB7XG4gICAgY29uc3QgaXNIaXQgPSB0aGlzLnBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hIaXRQb3MgPSB2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV07XG4gICAgICBpZiAobWF0Y2hIaXRQb3MpIHtcbiAgICAgICAgdGhpcy5kYW1hZ2UucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2hIaXRQb3M7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzSGl0O1xuICB9XG5cbiAgLy8gRGFtYWdlIHJldHVybiB0cnVlIG9mIGRhbWFnZSBsZW5ndGggaXMgZXF1YWwgdG8gYm9keSBsZW5ndGhcbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmRhbWFnZS5sZW5ndGggPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG5cbi8vIC8vIFRha2VzIGNvb3JkaW5hdGUsIGF4aXMsIGFuZCBsZW5ndGgsIGFuZCBidWlsZCBzaGlwIG9uIGEgY2VydGFpbiBjZWxsIHBvc2l0aW9uXG4vLyBmdW5jdGlvbiBidWlsZFNoaXAobGVuZ3RoLCBheGlzLCBjb29yZGluYXRlKSB7XG4vLyAgIGNvbnN0IHN0YXJ0ID0gWy4uLmNvb3JkaW5hdGVdO1xuLy8gICBjb25zdCBib2R5ID0gQXJyYXkobGVuZ3RoKVxuLy8gICAgIC5maWxsKClcbi8vICAgICAubWFwKCgpID0+IHtcbi8vICAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbi8vICAgICAgICAgcmV0dXJuIFtzdGFydFswXSwgc3RhcnRbMV0rK107XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbi8vICAgICB9KTtcbi8vICAgcmV0dXJuIGJvZHk7XG4vLyB9XG5cbi8vIC8vIEZ1bmN0aW9uIENvbnN0cnVjdG9yIGZvciBzaGlwXG4vLyBmdW5jdGlvbiBTaGlwKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbi8vICAgY29uc3QgeyBsZW5ndGggfSA9IHNoaXA7XG4vLyAgIGNvbnN0IGRhbWFnZSA9IFtdO1xuLy8gICAvLyBJbmlpdGlhbGl6ZSBzaGlwIHdpdGggYSB1dGlsaXR5IGZ1bmN0aW9uIGJ1aWxkU2hpcFxuLy8gICBjb25zdCBwb3NpdGlvbiA9IGJ1aWxkU2hpcChzaGlwLmxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSk7XG5cbi8vICAgLy8gVGFrZSBhIGNvcmQgYW5kIGNoZWNrIGlmIGNvcmQgaGl0cyBhbnkgYm9keSBjb3JkXG4vLyAgIGZ1bmN0aW9uIGhpdCh2YWx1ZSkge1xuLy8gICAgIGNvbnN0IGlzSGl0ID0gcG9zaXRpb24uc29tZSgocG9zKSA9PiB7XG4vLyAgICAgICBjb25zdCBtYXRjaEhpdFBvcyA9IHZhbHVlWzBdID09PSBwb3NbMF0gJiYgdmFsdWVbMV0gPT09IHBvc1sxXTtcbi8vICAgICAgIGlmIChtYXRjaEhpdFBvcykge1xuLy8gICAgICAgICBkYW1hZ2UucHVzaCh2YWx1ZSk7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gbWF0Y2hIaXRQb3M7XG4vLyAgICAgfSk7XG4vLyAgICAgcmV0dXJuIGlzSGl0O1xuLy8gICB9XG5cbi8vICAgLy8gRGFtYWdlIHJldHVybiB0cnVlIG9mIGRhbWFnZSBsZW5ndGggaXMgZXF1YWwgdG8gYm9keSBsZW5ndGhcbi8vICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuLy8gICAgIHJldHVybiBkYW1hZ2UubGVuZ3RoID09PSBsZW5ndGg7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIGxlbmd0aCxcbi8vICAgICBkYW1hZ2UsXG4vLyAgICAgYXhpcyxcbi8vICAgICBwb3NpdGlvbixcbi8vICAgICBoaXQsXG4vLyAgICAgaXNTdW5rLFxuLy8gICB9O1xuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9