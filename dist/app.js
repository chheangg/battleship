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
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLoop": () => (/* binding */ mainLoop)
/* harmony export */ });
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const mainLoop = (function handler() {
  function applyAtt(output, cord, side) {
    const boxes = document.getElementsByClassName(`${side}-content`)[0]
      .getElementsByClassName('box');
    if (output === 'hit') {
      [...boxes].forEach((box) => {
        console.log(box.dataset.pos, cord, side);
        if (box.dataset.pos === cord.join()) {
          box.textContent = 'X';
          box.classList.add('hit');
        }
      });
    }
    if (output === 'miss') {
      [...boxes].forEach((box) => {
        if (box.dataset.pos === cord.join()) {
          box.textContent = 'X';
          box.classList.add('missed');
        }
      });
    }
  }
  function checkWin(list) {
    const check = list.some((player) => player.board.list.every((ship) => {
      if (ship.isSunk()) {
        return true;
      }
      return false;
    }));
    const win = list.filter((player) => player.board.list.every((ship) => {
      if (ship.isSunk()) {
        return true;
      }
      return false;
    }))[0];
    if (check) {
      console.log(win);
    }
    if (!check) {
      console.log('hey');
    }
  }
  function attack(cord, side, list) {
    let checkValid;
    if (side === 'left') {
      if (list[1].isTurn === true) {
        checkValid = list[1].attack(list[0], cord);
      }
    }
    if (side === 'right') {
      if (list[0].isTurn === true) {
        checkValid = list[0].attack(list[1], cord);
      }
    }
    applyAtt(checkValid, cord, side);
    checkWin(list);
  }
  function botRenderAttack(bot, target, side, list) {
    const attInfo = bot.attack(target);
    applyAtt(attInfo.state, attInfo.cord, side);
    checkWin(list);
  }
  function botAttack(side, list) {
    const botExist = list.some((x) => x.isBot);
    if (!botExist) {
      return;
    }
    const bot = list.filter((x) => x.isBot)[0];
    const notBot = list.filter((x) => !x.isBot)[0];
    if (!bot.isTurn) {
      return;
    }
    botRenderAttack(bot, notBot, side, list);
  }
  return { attack, botAttack };
}());



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3QgbWFpbkxvb3AgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgZnVuY3Rpb24gYXBwbHlBdHQob3V0cHV0LCBjb3JkLCBzaWRlKSB7XG4gICAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpO1xuICAgIGlmIChvdXRwdXQgPT09ICdoaXQnKSB7XG4gICAgICBbLi4uYm94ZXNdLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhib3guZGF0YXNldC5wb3MsIGNvcmQsIHNpZGUpO1xuICAgICAgICBpZiAoYm94LmRhdGFzZXQucG9zID09PSBjb3JkLmpvaW4oKSkge1xuICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAob3V0cHV0ID09PSAnbWlzcycpIHtcbiAgICAgIFsuLi5ib3hlc10uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGlmIChib3guZGF0YXNldC5wb3MgPT09IGNvcmQuam9pbigpKSB7XG4gICAgICAgICAgYm94LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNoZWNrV2luKGxpc3QpIHtcbiAgICBjb25zdCBjaGVjayA9IGxpc3Quc29tZSgocGxheWVyKSA9PiBwbGF5ZXIuYm9hcmQubGlzdC5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkpO1xuICAgIGNvbnN0IHdpbiA9IGxpc3QuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5ib2FyZC5saXN0LmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSlbMF07XG4gICAgaWYgKGNoZWNrKSB7XG4gICAgICBjb25zb2xlLmxvZyh3aW4pO1xuICAgIH1cbiAgICBpZiAoIWNoZWNrKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGV5Jyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGF0dGFjayhjb3JkLCBzaWRlLCBsaXN0KSB7XG4gICAgbGV0IGNoZWNrVmFsaWQ7XG4gICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgaWYgKGxpc3RbMV0uaXNUdXJuID09PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrVmFsaWQgPSBsaXN0WzFdLmF0dGFjayhsaXN0WzBdLCBjb3JkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgIGlmIChsaXN0WzBdLmlzVHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGVja1ZhbGlkID0gbGlzdFswXS5hdHRhY2sobGlzdFsxXSwgY29yZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFwcGx5QXR0KGNoZWNrVmFsaWQsIGNvcmQsIHNpZGUpO1xuICAgIGNoZWNrV2luKGxpc3QpO1xuICB9XG4gIGZ1bmN0aW9uIGJvdFJlbmRlckF0dGFjayhib3QsIHRhcmdldCwgc2lkZSwgbGlzdCkge1xuICAgIGNvbnN0IGF0dEluZm8gPSBib3QuYXR0YWNrKHRhcmdldCk7XG4gICAgYXBwbHlBdHQoYXR0SW5mby5zdGF0ZSwgYXR0SW5mby5jb3JkLCBzaWRlKTtcbiAgICBjaGVja1dpbihsaXN0KTtcbiAgfVxuICBmdW5jdGlvbiBib3RBdHRhY2soc2lkZSwgbGlzdCkge1xuICAgIGNvbnN0IGJvdEV4aXN0ID0gbGlzdC5zb21lKCh4KSA9PiB4LmlzQm90KTtcbiAgICBpZiAoIWJvdEV4aXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJvdCA9IGxpc3QuZmlsdGVyKCh4KSA9PiB4LmlzQm90KVswXTtcbiAgICBjb25zdCBub3RCb3QgPSBsaXN0LmZpbHRlcigoeCkgPT4gIXguaXNCb3QpWzBdO1xuICAgIGlmICghYm90LmlzVHVybikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBib3RSZW5kZXJBdHRhY2soYm90LCBub3RCb3QsIHNpZGUsIGxpc3QpO1xuICB9XG4gIHJldHVybiB7IGF0dGFjaywgYm90QXR0YWNrIH07XG59KCkpO1xuXG5leHBvcnQgeyBtYWluTG9vcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9