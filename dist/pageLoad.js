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
/* harmony export */   "initializeShip": () => (/* binding */ initializeShip),
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

function initializeShip(player, ship, cord) {
  const dirArr = document.getElementsByClassName('dir-option');
  const dir = [...dirArr].filter((dirObj) => dirObj.checked);
  console.log(dir);
  player.board.place(ship, dir[0].value, cord);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ21DOzs7Ozs7O1VDMU5uQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQztBQUNPOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFlLG1CQUFtQixnREFBVztBQUNyRCxvQkFBb0IsZ0RBQVc7QUFDL0IsUUFBUSxvREFBa0IsYUFBYSxnREFBVztBQUNsRCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxLQUFLO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvb2JqZWN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BhZ2VMb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5jb25zdCBtYWluTG9vcCA9IChmdW5jdGlvbiBoYW5kbGVyKCkge1xuICBmdW5jdGlvbiBhcHBseUF0dChvdXRwdXQsIGNvcmQsIHNpZGUpIHtcbiAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c2lkZX0tY29udGVudGApWzBdXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94Jyk7XG4gICAgaWYgKG91dHB1dCA9PT0gJ2hpdCcpIHtcbiAgICAgIFsuLi5ib3hlc10uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJveC5kYXRhc2V0LnBvcywgY29yZCwgc2lkZSk7XG4gICAgICAgIGlmIChib3guZGF0YXNldC5wb3MgPT09IGNvcmQuam9pbigpKSB7XG4gICAgICAgICAgYm94LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChvdXRwdXQgPT09ICdtaXNzJykge1xuICAgICAgWy4uLmJveGVzXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgaWYgKGJveC5kYXRhc2V0LnBvcyA9PT0gY29yZC5qb2luKCkpIHtcbiAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tXaW4obGlzdCkge1xuICAgIGNvbnN0IGNoZWNrID0gbGlzdC5zb21lKChwbGF5ZXIpID0+IHBsYXllci5ib2FyZC5saXN0LmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSk7XG4gICAgY29uc3Qgd2luID0gbGlzdC5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmJvYXJkLmxpc3QuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKVswXTtcbiAgICBpZiAoY2hlY2spIHtcbiAgICAgIGNvbnNvbGUubG9nKHdpbik7XG4gICAgfVxuICAgIGlmICghY2hlY2spIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZXknKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXR0YWNrKGNvcmQsIHNpZGUsIGxpc3QpIHtcbiAgICBsZXQgY2hlY2tWYWxpZDtcbiAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICBpZiAobGlzdFsxXS5pc1R1cm4gPT09IHRydWUpIHtcbiAgICAgICAgY2hlY2tWYWxpZCA9IGxpc3RbMV0uYXR0YWNrKGxpc3RbMF0sIGNvcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKGxpc3RbMF0uaXNUdXJuID09PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrVmFsaWQgPSBsaXN0WzBdLmF0dGFjayhsaXN0WzFdLCBjb3JkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXBwbHlBdHQoY2hlY2tWYWxpZCwgY29yZCwgc2lkZSk7XG4gICAgY2hlY2tXaW4obGlzdCk7XG4gIH1cbiAgZnVuY3Rpb24gYm90UmVuZGVyQXR0YWNrKGJvdCwgdGFyZ2V0LCBzaWRlLCBsaXN0KSB7XG4gICAgY29uc3QgYXR0SW5mbyA9IGJvdC5hdHRhY2sodGFyZ2V0KTtcbiAgICBhcHBseUF0dChhdHRJbmZvLnN0YXRlLCBhdHRJbmZvLmNvcmQsIHNpZGUpO1xuICAgIGNoZWNrV2luKGxpc3QpO1xuICB9XG4gIGZ1bmN0aW9uIGJvdEF0dGFjayhzaWRlLCBsaXN0KSB7XG4gICAgY29uc3QgYm90RXhpc3QgPSBsaXN0LnNvbWUoKHgpID0+IHguaXNCb3QpO1xuICAgIGlmICghYm90RXhpc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYm90ID0gbGlzdC5maWx0ZXIoKHgpID0+IHguaXNCb3QpWzBdO1xuICAgIGNvbnN0IG5vdEJvdCA9IGxpc3QuZmlsdGVyKCh4KSA9PiAheC5pc0JvdClbMF07XG4gICAgaWYgKCFib3QuaXNUdXJuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGJvdFJlbmRlckF0dGFjayhib3QsIG5vdEJvdCwgc2lkZSwgbGlzdCk7XG4gIH1cbiAgcmV0dXJuIHsgYXR0YWNrLCBib3RBdHRhY2sgfTtcbn0oKSk7XG5cbmV4cG9ydCB7IG1haW5Mb29wIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmZ1bmN0aW9uIFNoaXAobGVuZ3RoLCBheGlzLCBjb29yZGluYXRlKSB7XG4gIGZ1bmN0aW9uIGV4cGFuZGVyKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gWy4uLmNvb3JkaW5hdGVdO1xuICAgIGNvbnN0IGJvZHkgPSBBcnJheShsZW5ndGgpXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKCgpID0+IHtcbiAgICAgICAgaWYgKGF4aXMgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHJldHVybiBbc3RhcnRbMF0sIHN0YXJ0WzFdKytdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgcmV0dXJuIFtzdGFydFswXSsrLCBzdGFydFsxXV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KHZhbHVlKSB7XG4gICAgY29uc3QgY2hlY2sgPSBwb3NpdGlvbi5zb21lKChwb3MpID0+IHtcbiAgICAgIGlmICh2YWx1ZVswXSA9PT0gcG9zWzBdICYmIHZhbHVlWzFdID09PSBwb3NbMV0pIHtcbiAgICAgICAgZGFtYWdlLnB1c2godmFsdWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2s7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKGRhbWFnZS5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZGFtYWdlID0gW107XG4gIGNvbnN0IHBvc2l0aW9uID0gZXhwYW5kZXIoKTtcblxuICBmdW5jdGlvbiBpc1ZhbGlkKHNoaXBzKSB7XG4gICAgbGV0IGJvdW5kYXJ5O1xuXG4gICAgY29uc3Qgb3ZlcmxhcCA9IHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnBvc2l0aW9uLmV2ZXJ5KChwb3NYKSA9PiBwb3NpdGlvbi5ldmVyeSgocG9zWSkgPT4ge1xuICAgICAgaWYgKHBvc1hbMF0gPT09IHBvc1lbMF0gJiYgcG9zWFsxXSA9PT0gcG9zWVsxXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KSkpO1xuXG4gICAgc3dpdGNoIChheGlzKSB7XG4gICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgICAgYm91bmRhcnkgPSBwb3NpdGlvbi5ldmVyeSgocG9zKSA9PiB7XG4gICAgICAgICAgaWYgKHBvc1sxXSA+IDkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgYm91bmRhcnkgPSBwb3NpdGlvbi5ldmVyeSgocG9zKSA9PiB7XG4gICAgICAgICAgaWYgKHBvc1swXSA+IDkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gb3ZlcmxhcCAmJiBib3VuZGFyeTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBkYW1hZ2UsXG4gICAgYXhpcyxcbiAgICBwb3NpdGlvbixcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGlzVmFsaWQsXG4gICAgZXhwYW5kZXIsXG4gIH07XG59XG5cbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBjb25zdCBhdHRhY2tzID0gW107XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3QgbWlzc2VzID0gW107XG4gIGZ1bmN0aW9uIHBsYWNlKHNoaXAsIGF4aXMsIGNvb3JkaW5hdGUpIHtcbiAgICBsZXQgb2JqO1xuICAgIHN3aXRjaCAoc2hpcCkge1xuICAgICAgY2FzZSAncGF0cm9sJzpcbiAgICAgICAgb2JqID0gU2hpcCgyLCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdWJtYXJpbmUnOlxuICAgICAgICBvYmogPSBTaGlwKDMsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc3Ryb3llcic6XG4gICAgICAgIG9iaiA9IFNoaXAoMywgYXhpcywgY29vcmRpbmF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmF0dGxlc2hpcCc6XG4gICAgICAgIG9iaiA9IFNoaXAoNCwgYXhpcywgY29vcmRpbmF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2Fycmllcic6XG4gICAgICAgIG9iaiA9IFNoaXAoNSwgYXhpcywgY29vcmRpbmF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChvYmouaXNWYWxpZChsaXN0KSkge1xuICAgICAgbGlzdC5wdXNoKG9iaik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb3JkKSB7XG4gICAgY29uc3QgaXNFeGlzdCA9IGF0dGFja3Muc29tZSgoYXR0YWNrKSA9PiBhdHRhY2tbMF0gPT09IGNvcmRbMF0gJiYgYXR0YWNrWzFdID09PSBjb3JkWzFdKTtcbiAgICBjb25zdCBoaXQgPSBsaXN0LnNvbWUoKHNoaXApID0+IHNoaXAuaGl0KGNvcmQpKTtcbiAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBQbGF5ZXIuY2hhbmdlVHVybigpO1xuICAgIGF0dGFja3MucHVzaChjb3JkKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBoaXRzLnB1c2goY29yZCk7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuICAgIG1pc3Nlcy5wdXNoKGNvcmQpO1xuICAgIHJldHVybiAnbWlzcyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3QsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gICAgYXR0YWNrcyxcbiAgICBwbGFjZSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICB9O1xufVxuXG5mdW5jdGlvbiBQbGF5ZXJPYmooaXNCb3QpIHtcbiAgZnVuY3Rpb24gZGVjaWRlVHVybigpIHtcbiAgICBpZiAoUGxheWVyLmxpc3RbMF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBib3RFdmFsKHBsYXllcikge1xuICAgIGNvbnN0IHJhbmQgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXTtcbiAgICBsZXQgYXR0YWNrRXhpc3Q7XG4gICAgaWYgKHBsYXllci5ib2FyZC5hdHRhY2tzWzBdKSB7XG4gICAgICBhdHRhY2tFeGlzdCA9IHBsYXllci5ib2FyZC5hdHRhY2tzLmV2ZXJ5KChhdHRlbXB0KSA9PiB7XG4gICAgICAgIGlmIChhdHRlbXB0WzBdID09PSByYW5kWzBdICYmIGF0dGVtcHRbMV0gPT09IHJhbmRbMV0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGF0dGFja0V4aXN0ID09PSB0cnVlKSB7XG4gICAgICBib3RFdmFsKCk7XG4gICAgfVxuICAgIHJldHVybiByYW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrKHBsYXllciwgY29vcmRpbmF0ZSkge1xuICAgIGlmIChpc0JvdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICB9XG4gICAgaWYgKGlzQm90ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBjb3JkID0gYm90RXZhbChwbGF5ZXIpO1xuICAgICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb3JkKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvcmQsXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBhdHRhY2socGxheWVyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzVHVybjogZGVjaWRlVHVybigpLFxuICAgIGJvYXJkOiBHYW1lYm9hcmQoKSxcbiAgICBhdHRhY2ssXG4gICAgaXNCb3QsXG4gIH07XG59XG5jb25zdCBQbGF5ZXIgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmdW5jdGlvbiBjcmVhdGUoaXNCb3QpIHtcbiAgICBjb25zdCBvYmogPSBQbGF5ZXJPYmooaXNCb3QpO1xuICAgIGxpc3QucHVzaChvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgbGlzdC5zcGxpY2UoMCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VUdXJuKCkge1xuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmlzVHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICBvYmouaXNUdXJuID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9iai5pc1R1cm4gPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGlzdCwgY2hhbmdlVHVybiwgY3JlYXRlLCBjbGVhcixcbiAgfTtcbn0oKSk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWFycm93LWNhbGxiYWNrICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IG1haW5Mb29wIH0gZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHsgUGxheWVyLCBTaGlwIH0gZnJvbSAnLi9vYmplY3QnO1xuXG5mdW5jdGlvbiBsb2FkU2hpcChsaXN0KSB7XG4gIGxpc3QuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgcGxheWVyLmJvYXJkLmxpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICAgIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV0uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgICAgaWYgKGJveC5kYXRhc2V0LnBvcyA9PT0gY29yZC5qb2luKCkpIHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNoaXAocGxheWVyLCBzaGlwLCBjb3JkKSB7XG4gIGNvbnN0IGRpckFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rpci1vcHRpb24nKTtcbiAgY29uc3QgZGlyID0gWy4uLmRpckFycl0uZmlsdGVyKChkaXJPYmopID0+IGRpck9iai5jaGVja2VkKTtcbiAgY29uc29sZS5sb2coZGlyKTtcbiAgcGxheWVyLmJvYXJkLnBsYWNlKHNoaXAsIGRpclswXS52YWx1ZSwgY29yZCk7XG59XG5cbmNvbnN0IGJvYXJkTG9hZCA9IChmdW5jdGlvbiBoYW5kbGVyKCkge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2UoKSB7XG4gICAgZG9jdW1lbnQuYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSd0b3AtY29udGFpbmVyJz48cD5UdXJuOiBQTEFZRVIgMTwvcD48L2Rpdj5cIlxuICAgICAgKyBcIjxkaXYgY2xhc3M9J21haW4tY29udGVudCc+PGRpdiBjbGFzcz0nbGVmdC1jb250ZW50Jz48ZGl2IGNsYXNzPSdwbGF5ZXJuYW1lJz5QTEFZRVIgMSAoeW91KTwvZGl2PjxkaXYgY2xhc3M9J2JvYXJkLWNvbnRhaW5lcic+PGRpdiBjbGFzcz0nc2hpcHMtY29udGFpbmVyJz48L2Rpdj48ZGl2IGNsYXNzPSdib2FyZCc+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ncmlnaHQtY29udGVudCc+PGRpdiBjbGFzcz0ncGxheWVybmFtZSc+UExBWUVSIDIgKGJvdCk8L2Rpdj48ZGl2IGNsYXNzPSdib2FyZC1jb250YWluZXInPjxkaXYgY2xhc3M9J3NoaXBzLWNvbnRhaW5lcic+PC9kaXY+PGRpdiBjbGFzcz0nYm9hcmQnPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PlwiO1xuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlQm94KCkge1xuICAgIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZCcpXS5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnQgPSBbMCwgMF07XG4gICAgICBBcnJheSgxMDApXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnYm94JztcbiAgICAgICAgICBib3guZGF0YXNldC5wb3MgPSBzdGFydDtcbiAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICAgIGlmIChzdGFydFsxXSA8PSA5KSB7XG4gICAgICAgICAgICBzdGFydFsxXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnRbMV0gPT09IDEwKSB7XG4gICAgICAgICAgICBzdGFydFsxXSA9IDA7XG4gICAgICAgICAgICBzdGFydFswXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYXNzaWduQm94KCkge1xuICAgIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKV0uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBvYmoudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3MnKVxuICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApKTtcbiAgICAgICAgY29uc3Qgc2lkZSA9IG9iai50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNpZGUnKTtcbiAgICAgICAgbGV0IGNvbXBsZW1lbnQ7XG4gICAgICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBjb21wbGVtZW50ID0gJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGNvbXBsZW1lbnQgPSAnbGVmdCc7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbkxvb3AuYXR0YWNrKGNvb3JkaW5hdGUsIHNpZGUsIFBsYXllci5saXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coUGxheWVyLmxpc3QpO1xuICAgICAgICBtYWluTG9vcC5ib3RBdHRhY2soY29tcGxlbWVudCwgUGxheWVyLmxpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYXNzaWduUGFyZW50KCkge1xuICAgIFsnbGVmdCcsICdyaWdodCddLmZvckVhY2goKHNpZGUpID0+IHtcbiAgICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF1cbiAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpO1xuICAgICAgWy4uLmJveGVzXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgYm94LmRhdGFzZXQuc2lkZSA9IHNpZGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2VuZXJhdGVQYWdlLCBnZW5lcmF0ZUJveCwgYXNzaWduUGFyZW50LCBhc3NpZ25Cb3gsXG4gIH07XG59KCkpO1xuXG5mdW5jdGlvbiBsb2FkT3B0aW9uKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3AtY29udGFpbmVyJylbMF07XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvcHRpb24uaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdkaXItb3B0aW9uJz48bGFiZWwgZm9yPSdob3Jpem9udGFsJz5Ib3Jpem9udGFsPC9sYWJlbD48aW5wdXQgdHlwZT0ncmFkaW8nIGNsYXNzPSdkaXItb3B0aW9uJyB2YWx1ZT0naG9yaXpvbnRhbCcgaWQ9J2hvcml6b250YWwnIG5hbWU9J29wdGlvbicgY2hlY2tlZD48bGFiZWwgZm9yPSd2ZXJ0aWNhbCc+VmVydGljYWw8L2xhYmVsPjxpbnB1dCB0eXBlPSdyYWRpbycgY2xhc3M9J2Rpci1vcHRpb24nIHZhbHVlPSd2ZXJ0aWNhbCcgaWQ9J3ZlcnRpY2FsJyBuYW1lPSdvcHRpb24nPjwvZGl2PlwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuZnVuY3Rpb24gbWFpbkxvYWQoKSB7XG4gIGJvYXJkTG9hZC5nZW5lcmF0ZVBhZ2UoKTtcbiAgYm9hcmRMb2FkLmdlbmVyYXRlQm94KCk7XG4gIGJvYXJkTG9hZC5hc3NpZ25QYXJlbnQoKTtcbn1cblxuZXhwb3J0IHtcbiAgbWFpbkxvYWQsIGxvYWRTaGlwLCBsb2FkT3B0aW9uLCBpbml0aWFsaXplU2hpcCwgYm9hcmRMb2FkLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==