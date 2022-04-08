/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ }),

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
    const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
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
/* harmony export */   "loadOption": () => (/* binding */ loadOption),
/* harmony export */   "loadShip": () => (/* binding */ loadShip),
/* harmony export */   "mainLoad": () => (/* binding */ mainLoad)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/app.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./src/js/object.js");
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */



function loadShip(player, side) {
  player.board.list.forEach((ship) => {
    ship.position.forEach((cord) => {
      console.log(document.getElementsByClassName(`${side}-content`)[0]);
      [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
        if (box.dataset.pos === cord.join()) {
          box.classList.add('ship');
        }
      });
    });
  });
}

const boardLoad = (function handler() {
  function generatePage() {
    document.body.textContent = '';
    document.body.innerHTML = "<div class='top-container'><p>Turn: PLAYER 1</p></div>"
      + "<div class='main-content'><div class='left-content'><div class='playername'>PLAYER 1 (you)</div><div class='board-container'><div class='ships-container'></div><div class='board'></div></div></div><div class='right-content'><div class='playername'>PLAYER 2 (bot)</div><div class='board-container'><div class='ships-container'></div><div class='board'></div></div></div></div>";
  }
  function generateBox() {
    [...document.getElementsByClassName('board')].forEach((board) => {
      const start = [0, 0];
      Array(100)
        .fill()
        .forEach(() => {
          const box = document.createElement('div');
          box.className = 'box';
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
  function assignBox() {
    [...document.getElementsByClassName('box')].forEach((box) => {
      box.addEventListener('click', (obj) => {
        const coordinate = obj.target.getAttribute('data-pos')
          .split(',')
          .map((x) => parseInt(x, 10));
        const side = obj.target.getAttribute('data-side');
        let complement;
        if (side === 'left') {
          complement = 'right';
        }
        if (side === 'right') {
          complement = 'left';
        }
        _app__WEBPACK_IMPORTED_MODULE_0__.mainLoop.attack(coordinate, side, _object__WEBPACK_IMPORTED_MODULE_1__.Player.list);
        console.log(_object__WEBPACK_IMPORTED_MODULE_1__.Player.list);
        _app__WEBPACK_IMPORTED_MODULE_0__.mainLoop.botAttack(complement, _object__WEBPACK_IMPORTED_MODULE_1__.Player.list);
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

  return {
    generatePage, generateBox, assignParent, assignBox,
  };
}());

function loadOption() {
  const container = document.getElementsByClassName('top-container')[0];
  const option = document.createElement('div');
  option.innerHTML = "<div class='dir-option'><label for='horizontal'>Horizontal</label><input type='radio' class='dir-option' value='horizontal' id='horizontal' name='option' checked><label for='vertical'>Vertical</label><input type='radio' class='dir-option' value='vertical' id='vertical' name='option'></div>";
  container.appendChild(option);
}

function mainLoad() {
  boardLoad.generatePage();
  boardLoad.generateBox();
  boardLoad.assignParent();
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ21DOzs7Ozs7O1VDMU5uQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ2lDO0FBQ0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxLQUFLO0FBQzFELDZDQUE2QyxLQUFLO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQWUsbUJBQW1CLGdEQUFXO0FBQ3JELG9CQUFvQixnREFBVztBQUMvQixRQUFRLG9EQUFrQixhQUFhLGdEQUFXO0FBQ2xELE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGFnZUxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmNvbnN0IG1haW5Mb29wID0gKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIGZ1bmN0aW9uIGFwcGx5QXR0KG91dHB1dCwgY29yZCwgc2lkZSkge1xuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKTtcbiAgICBpZiAob3V0cHV0ID09PSAnaGl0Jykge1xuICAgICAgWy4uLmJveGVzXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYm94LmRhdGFzZXQucG9zLCBjb3JkLCBzaWRlKTtcbiAgICAgICAgaWYgKGJveC5kYXRhc2V0LnBvcyA9PT0gY29yZC5qb2luKCkpIHtcbiAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG91dHB1dCA9PT0gJ21pc3MnKSB7XG4gICAgICBbLi4uYm94ZXNdLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBpZiAoYm94LmRhdGFzZXQucG9zID09PSBjb3JkLmpvaW4oKSkge1xuICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjaGVja1dpbihsaXN0KSB7XG4gICAgY29uc3QgY2hlY2sgPSBsaXN0LnNvbWUoKHBsYXllcikgPT4gcGxheWVyLmJvYXJkLmxpc3QuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKTtcbiAgICBjb25zdCB3aW4gPSBsaXN0LmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuYm9hcmQubGlzdC5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkpWzBdO1xuICAgIGlmIChjaGVjaykge1xuICAgICAgY29uc29sZS5sb2cod2luKTtcbiAgICB9XG4gICAgaWYgKCFjaGVjaykge1xuICAgICAgY29uc29sZS5sb2coJ2hleScpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhdHRhY2soY29yZCwgc2lkZSwgbGlzdCkge1xuICAgIGxldCBjaGVja1ZhbGlkO1xuICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcbiAgICAgIGlmIChsaXN0WzFdLmlzVHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGVja1ZhbGlkID0gbGlzdFsxXS5hdHRhY2sobGlzdFswXSwgY29yZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaWRlID09PSAncmlnaHQnKSB7XG4gICAgICBpZiAobGlzdFswXS5pc1R1cm4gPT09IHRydWUpIHtcbiAgICAgICAgY2hlY2tWYWxpZCA9IGxpc3RbMF0uYXR0YWNrKGxpc3RbMV0sIGNvcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBhcHBseUF0dChjaGVja1ZhbGlkLCBjb3JkLCBzaWRlKTtcbiAgICBjaGVja1dpbihsaXN0KTtcbiAgfVxuICBmdW5jdGlvbiBib3RSZW5kZXJBdHRhY2soYm90LCB0YXJnZXQsIHNpZGUsIGxpc3QpIHtcbiAgICBjb25zdCBhdHRJbmZvID0gYm90LmF0dGFjayh0YXJnZXQpO1xuICAgIGFwcGx5QXR0KGF0dEluZm8uc3RhdGUsIGF0dEluZm8uY29yZCwgc2lkZSk7XG4gICAgY2hlY2tXaW4obGlzdCk7XG4gIH1cbiAgZnVuY3Rpb24gYm90QXR0YWNrKHNpZGUsIGxpc3QpIHtcbiAgICBjb25zdCBib3RFeGlzdCA9IGxpc3Quc29tZSgoeCkgPT4geC5pc0JvdCk7XG4gICAgaWYgKCFib3RFeGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBib3QgPSBsaXN0LmZpbHRlcigoeCkgPT4geC5pc0JvdClbMF07XG4gICAgY29uc3Qgbm90Qm90ID0gbGlzdC5maWx0ZXIoKHgpID0+ICF4LmlzQm90KVswXTtcbiAgICBpZiAoIWJvdC5pc1R1cm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYm90UmVuZGVyQXR0YWNrKGJvdCwgbm90Qm90LCBzaWRlLCBsaXN0KTtcbiAgfVxuICByZXR1cm4geyBhdHRhY2ssIGJvdEF0dGFjayB9O1xufSgpKTtcblxuZXhwb3J0IHsgbWFpbkxvb3AgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuZnVuY3Rpb24gU2hpcChsZW5ndGgsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgZnVuY3Rpb24gZXhwYW5kZXIoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBbLi4uY29vcmRpbmF0ZV07XG4gICAgY29uc3QgYm9keSA9IEFycmF5KGxlbmd0aClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuIFtzdGFydFswXSwgc3RhcnRbMV0rK107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICByZXR1cm4gW3N0YXJ0WzBdKyssIHN0YXJ0WzFdXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbiAgICBjb25zdCBjaGVjayA9IHBvc2l0aW9uLnNvbWUoKHBvcykgPT4ge1xuICAgICAgaWYgKHZhbHVlWzBdID09PSBwb3NbMF0gJiYgdmFsdWVbMV0gPT09IHBvc1sxXSkge1xuICAgICAgICBkYW1hZ2UucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjaGVjaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAoZGFtYWdlLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkYW1hZ2UgPSBbXTtcbiAgY29uc3QgcG9zaXRpb24gPSBleHBhbmRlcigpO1xuXG4gIGZ1bmN0aW9uIGlzVmFsaWQoc2hpcHMpIHtcbiAgICBsZXQgYm91bmRhcnk7XG5cbiAgICBjb25zdCBvdmVybGFwID0gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAucG9zaXRpb24uZXZlcnkoKHBvc1gpID0+IHBvc2l0aW9uLmV2ZXJ5KChwb3NZKSA9PiB7XG4gICAgICBpZiAocG9zWFswXSA9PT0gcG9zWVswXSAmJiBwb3NYWzFdID09PSBwb3NZWzFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pKSk7XG5cbiAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICBib3VuZGFyeSA9IHBvc2l0aW9uLmV2ZXJ5KChwb3MpID0+IHtcbiAgICAgICAgICBpZiAocG9zWzFdID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICBib3VuZGFyeSA9IHBvc2l0aW9uLmV2ZXJ5KChwb3MpID0+IHtcbiAgICAgICAgICBpZiAocG9zWzBdID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBvdmVybGFwICYmIGJvdW5kYXJ5O1xuICB9XG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGRhbWFnZSxcbiAgICBheGlzLFxuICAgIHBvc2l0aW9uLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgaXNWYWxpZCxcbiAgICBleHBhbmRlcixcbiAgfTtcbn1cblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBsaXN0ID0gW107XG4gIGNvbnN0IGF0dGFja3MgPSBbXTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBtaXNzZXMgPSBbXTtcbiAgZnVuY3Rpb24gcGxhY2Uoc2hpcCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICAgIGxldCBvYmo7XG4gICAgc3dpdGNoIChzaGlwKSB7XG4gICAgICBjYXNlICdwYXRyb2wnOlxuICAgICAgICBvYmogPSBTaGlwKDIsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6XG4gICAgICAgIG9iaiA9IFNoaXAoMywgYXhpcywgY29vcmRpbmF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzdHJveWVyJzpcbiAgICAgICAgb2JqID0gU2hpcCgzLCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiYXR0bGVzaGlwJzpcbiAgICAgICAgb2JqID0gU2hpcCg0LCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjYXJyaWVyJzpcbiAgICAgICAgb2JqID0gU2hpcCg1LCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKG9iai5pc1ZhbGlkKGxpc3QpKSB7XG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvcmQpIHtcbiAgICBjb25zdCBpc0V4aXN0ID0gYXR0YWNrcy5zb21lKChhdHRhY2spID0+IGF0dGFja1swXSA9PT0gY29yZFswXSAmJiBhdHRhY2tbMV0gPT09IGNvcmRbMV0pO1xuICAgIGNvbnN0IGhpdCA9IGxpc3Quc29tZSgoc2hpcCkgPT4gc2hpcC5oaXQoY29yZCkpO1xuICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFBsYXllci5jaGFuZ2VUdXJuKCk7XG4gICAgYXR0YWNrcy5wdXNoKGNvcmQpO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIGhpdHMucHVzaChjb3JkKTtcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG4gICAgbWlzc2VzLnB1c2goY29yZCk7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdCxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgICBhdHRhY2tzLFxuICAgIHBsYWNlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBsYXllck9iaihpc0JvdCkge1xuICBmdW5jdGlvbiBkZWNpZGVUdXJuKCkge1xuICAgIGlmIChQbGF5ZXIubGlzdFswXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvdEV2YWwocGxheWVyKSB7XG4gICAgY29uc3QgcmFuZCA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgbGV0IGF0dGFja0V4aXN0O1xuICAgIGlmIChwbGF5ZXIuYm9hcmQuYXR0YWNrc1swXSkge1xuICAgICAgYXR0YWNrRXhpc3QgPSBwbGF5ZXIuYm9hcmQuYXR0YWNrcy5ldmVyeSgoYXR0ZW1wdCkgPT4ge1xuICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PT0gcmFuZFswXSAmJiBhdHRlbXB0WzFdID09PSByYW5kWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChhdHRhY2tFeGlzdCA9PT0gdHJ1ZSkge1xuICAgICAgYm90RXZhbCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmFuZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjayhwbGF5ZXIsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAoaXNCb3QgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgfVxuICAgIGlmIChpc0JvdCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgY29yZCA9IGJvdEV2YWwocGxheWVyKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29yZCk7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb3JkLFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYXR0YWNrKHBsYXllcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1R1cm46IGRlY2lkZVR1cm4oKSxcbiAgICBib2FyZDogR2FtZWJvYXJkKCksXG4gICAgYXR0YWNrLFxuICAgIGlzQm90LFxuICB9O1xufVxuY29uc3QgUGxheWVyID0gKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgZnVuY3Rpb24gY3JlYXRlKGlzQm90KSB7XG4gICAgY29uc3Qgb2JqID0gUGxheWVyT2JqKGlzQm90KTtcbiAgICBsaXN0LnB1c2gob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGxpc3Quc3BsaWNlKDApO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlVHVybigpIHtcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai5pc1R1cm4gPT09IHRydWUpIHtcbiAgICAgICAgb2JqLmlzVHVybiA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvYmouaXNUdXJuID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxpc3QsIGNoYW5nZVR1cm4sIGNyZWF0ZSwgY2xlYXIsXG4gIH07XG59KCkpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1hcnJvdy1jYWxsYmFjayAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBtYWluTG9vcCB9IGZyb20gJy4vYXBwJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vb2JqZWN0JztcblxuZnVuY3Rpb24gbG9hZFNoaXAocGxheWVyLCBzaWRlKSB7XG4gIHBsYXllci5ib2FyZC5saXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLnBvc2l0aW9uLmZvckVhY2goKGNvcmQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdKTtcbiAgICAgIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV0uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGlmIChib3guZGF0YXNldC5wb3MgPT09IGNvcmQuam9pbigpKSB7XG4gICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jb25zdCBib2FyZExvYWQgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYWdlKCkge1xuICAgIGRvY3VtZW50LmJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0ndG9wLWNvbnRhaW5lcic+PHA+VHVybjogUExBWUVSIDE8L3A+PC9kaXY+XCJcbiAgICAgICsgXCI8ZGl2IGNsYXNzPSdtYWluLWNvbnRlbnQnPjxkaXYgY2xhc3M9J2xlZnQtY29udGVudCc+PGRpdiBjbGFzcz0ncGxheWVybmFtZSc+UExBWUVSIDEgKHlvdSk8L2Rpdj48ZGl2IGNsYXNzPSdib2FyZC1jb250YWluZXInPjxkaXYgY2xhc3M9J3NoaXBzLWNvbnRhaW5lcic+PC9kaXY+PGRpdiBjbGFzcz0nYm9hcmQnPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9J3JpZ2h0LWNvbnRlbnQnPjxkaXYgY2xhc3M9J3BsYXllcm5hbWUnPlBMQVlFUiAyIChib3QpPC9kaXY+PGRpdiBjbGFzcz0nYm9hcmQtY29udGFpbmVyJz48ZGl2IGNsYXNzPSdzaGlwcy1jb250YWluZXInPjwvZGl2PjxkaXYgY2xhc3M9J2JvYXJkJz48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj5cIjtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZUJveCgpIHtcbiAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKV0uZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gWzAsIDBdO1xuICAgICAgQXJyYXkoMTAwKVxuICAgICAgICAuZmlsbCgpXG4gICAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ2JveCc7XG4gICAgICAgICAgYm94LmRhdGFzZXQucG9zID0gc3RhcnQ7XG4gICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgICBpZiAoc3RhcnRbMV0gPD0gOSkge1xuICAgICAgICAgICAgc3RhcnRbMV0rKztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdID09PSAxMCkge1xuICAgICAgICAgICAgc3RhcnRbMV0gPSAwO1xuICAgICAgICAgICAgc3RhcnRbMF0rKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFzc2lnbkJveCgpIHtcbiAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKG9iaikgPT4ge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gb2JqLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zJylcbiAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgIC5tYXAoKHgpID0+IHBhcnNlSW50KHgsIDEwKSk7XG4gICAgICAgIGNvbnN0IHNpZGUgPSBvYmoudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaWRlJyk7XG4gICAgICAgIGxldCBjb21wbGVtZW50O1xuICAgICAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgY29tcGxlbWVudCA9ICdyaWdodCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBjb21wbGVtZW50ID0gJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICAgIG1haW5Mb29wLmF0dGFjayhjb29yZGluYXRlLCBzaWRlLCBQbGF5ZXIubGlzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFBsYXllci5saXN0KTtcbiAgICAgICAgbWFpbkxvb3AuYm90QXR0YWNrKGNvbXBsZW1lbnQsIFBsYXllci5saXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFzc2lnblBhcmVudCgpIHtcbiAgICBbJ2xlZnQnLCAncmlnaHQnXS5mb3JFYWNoKChzaWRlKSA9PiB7XG4gICAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdXG4gICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKTtcbiAgICAgIFsuLi5ib3hlc10uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGJveC5kYXRhc2V0LnNpZGUgPSBzaWRlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlUGFnZSwgZ2VuZXJhdGVCb3gsIGFzc2lnblBhcmVudCwgYXNzaWduQm94LFxuICB9O1xufSgpKTtcblxuZnVuY3Rpb24gbG9hZE9wdGlvbigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9wLWNvbnRhaW5lcicpWzBdO1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3B0aW9uLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0nZGlyLW9wdGlvbic+PGxhYmVsIGZvcj0naG9yaXpvbnRhbCc+SG9yaXpvbnRhbDwvbGFiZWw+PGlucHV0IHR5cGU9J3JhZGlvJyBjbGFzcz0nZGlyLW9wdGlvbicgdmFsdWU9J2hvcml6b250YWwnIGlkPSdob3Jpem9udGFsJyBuYW1lPSdvcHRpb24nIGNoZWNrZWQ+PGxhYmVsIGZvcj0ndmVydGljYWwnPlZlcnRpY2FsPC9sYWJlbD48aW5wdXQgdHlwZT0ncmFkaW8nIGNsYXNzPSdkaXItb3B0aW9uJyB2YWx1ZT0ndmVydGljYWwnIGlkPSd2ZXJ0aWNhbCcgbmFtZT0nb3B0aW9uJz48L2Rpdj5cIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbmZ1bmN0aW9uIG1haW5Mb2FkKCkge1xuICBib2FyZExvYWQuZ2VuZXJhdGVQYWdlKCk7XG4gIGJvYXJkTG9hZC5nZW5lcmF0ZUJveCgpO1xuICBib2FyZExvYWQuYXNzaWduUGFyZW50KCk7XG59XG5cbmV4cG9ydCB7XG4gIG1haW5Mb2FkLCBsb2FkU2hpcCwgbG9hZE9wdGlvbiwgYm9hcmRMb2FkLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==