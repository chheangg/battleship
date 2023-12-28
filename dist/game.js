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
  !*** ./src/js/objects/game.js ***!
  \********************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyx5Q0FBeUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9DQUFvQztBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0cy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuLy8gVGhlIG1haW4gR2FtZSBvYmplY3QgZm9yIGV4cG9zaW5nIGluZm9ybWF0aW9uIGZvciBlYWNoIHN0YWdlcyB0byB1c2VzXG4vLyAxLiBQbGF5ZXJzXG4vLyAyLiBQbGF5ZXIgZm9yIEN1cnJlbnQgVHVyblxuLy8gMy4gQ3VycmVudCBCb2FyZFxuLy8gNC4gaXNTdGFydGVkIGZvciBjaGVja2luZyBpZiBwbGFjZW1lbnQgaGFzIGJlZW4gc2V0XG4vLyA1LiBjdXJyZW50IGdhbWVtb2RlIChpc011bHRpcGxheWVyKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoaXNNdWx0aXBsYXllciwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgICB0aGlzLmlzTXVsdGlwbGF5ZXIgPSBpc011bHRpcGxheWVyO1xuICAgIHRoaXMucGxheWVyT25lID0gcGxheWVyT25lO1xuICAgIHRoaXMucGxheWVyVHdvID0gcGxheWVyVHdvO1xuICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gIH1cblxuICBjdXJyZW50VHVybigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJPbmUuaXNUdXJuXG4gICAgICA/IHRoaXMucGxheWVyT25lIDogdGhpcy5wbGF5ZXJUd287XG4gIH1cblxuICBjdXJyZW50Qm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5wbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0J30tY29udGVudGApWzBdO1xuICAgIGNvbnN0IGJvYXJkID0gWy4uLmJvYXJkQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXTtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gcmV0dXJuUGxheWVyVHVybihnYW1lT2JqZWN0KSB7XG4vLyAgIHJldHVybiBnYW1lT2JqZWN0LnBsYXllck9uZS5pc1R1cm5cbi8vICAgICA/IGdhbWVPYmplY3QucGxheWVyT25lXG4vLyAgICAgOiBnYW1lT2JqZWN0LnBsYXllclR3bztcbi8vIH1cblxuLy8vIE9sZCBWZXJzaW9uIVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZShpc011bHRpcGxheWVyLCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuLy8gICBsZXQgaXNTdGFydGVkID0gZmFsc2U7XG5cbi8vICAgLy8gUmV0dXJuIHBsYXllciB3aG9zZSB0dXJucyBpcyB0aGVpcnNcbi8vICAgZnVuY3Rpb24gY3VycmVudFR1cm4oKSB7XG4vLyAgICAgcmV0dXJuIHJldHVyblBsYXllclR1cm4odGhpcyk7XG4vLyAgIH1cblxuLy8gICAvLyBSZXR1cm4gYm9hcmQgb2YgcGxheWVyIHdob3NlIHR1cm5zIGlzIHRoZXJlXG4vLyAgIGZ1bmN0aW9uIGN1cnJlbnRCb2FyZCgpIHtcbi8vICAgICByZXR1cm5cbi8vICAgICAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtwbGF5ZXJPbmUuaXNUdXJuID8gJ2xlZnQnIDogJ3JpZ2h0J30tY29udGVudGApWzBdXG4vLyAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwbGF5ZXJPbmUsIHBsYXllclR3bywgY3VycmVudFR1cm4sIGN1cnJlbnRCb2FyZCwgaXNTdGFydGVkLCBpc011bHRpcGxheWVyLFxuLy8gICB9O1xuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9