/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/ships sync \\.png$":
/*!****************************************************!*\
  !*** ./src/assets/ships/ sync nonrecursive \.png$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./battleship-hori_01.png": "./src/assets/ships/battleship-hori_01.png",
	"./battleship-hori_02.png": "./src/assets/ships/battleship-hori_02.png",
	"./battleship-hori_03.png": "./src/assets/ships/battleship-hori_03.png",
	"./battleship-hori_04.png": "./src/assets/ships/battleship-hori_04.png",
	"./battleship-vert_01.png": "./src/assets/ships/battleship-vert_01.png",
	"./battleship-vert_02.png": "./src/assets/ships/battleship-vert_02.png",
	"./battleship-vert_03.png": "./src/assets/ships/battleship-vert_03.png",
	"./battleship-vert_04.png": "./src/assets/ships/battleship-vert_04.png",
	"./carrier-hori_01.png": "./src/assets/ships/carrier-hori_01.png",
	"./carrier-hori_02.png": "./src/assets/ships/carrier-hori_02.png",
	"./carrier-hori_03.png": "./src/assets/ships/carrier-hori_03.png",
	"./carrier-hori_04.png": "./src/assets/ships/carrier-hori_04.png",
	"./carrier-hori_05.png": "./src/assets/ships/carrier-hori_05.png",
	"./carrier-vert_01.png": "./src/assets/ships/carrier-vert_01.png",
	"./carrier-vert_02.png": "./src/assets/ships/carrier-vert_02.png",
	"./carrier-vert_03.png": "./src/assets/ships/carrier-vert_03.png",
	"./carrier-vert_04.png": "./src/assets/ships/carrier-vert_04.png",
	"./carrier-vert_05.png": "./src/assets/ships/carrier-vert_05.png",
	"./destroyer-hori_01.png": "./src/assets/ships/destroyer-hori_01.png",
	"./destroyer-hori_02.png": "./src/assets/ships/destroyer-hori_02.png",
	"./destroyer-hori_03.png": "./src/assets/ships/destroyer-hori_03.png",
	"./destroyer-vert_01.png": "./src/assets/ships/destroyer-vert_01.png",
	"./destroyer-vert_02.png": "./src/assets/ships/destroyer-vert_02.png",
	"./destroyer-vert_03.png": "./src/assets/ships/destroyer-vert_03.png",
	"./patrol-hori_01.png": "./src/assets/ships/patrol-hori_01.png",
	"./patrol-hori_02.png": "./src/assets/ships/patrol-hori_02.png",
	"./patrol-vert_01.png": "./src/assets/ships/patrol-vert_01.png",
	"./patrol-vert_02.png": "./src/assets/ships/patrol-vert_02.png",
	"./submarine-hori_01.png": "./src/assets/ships/submarine-hori_01.png",
	"./submarine-hori_02.png": "./src/assets/ships/submarine-hori_02.png",
	"./submarine-hori_03.png": "./src/assets/ships/submarine-hori_03.png",
	"./submarine-vert_01.png": "./src/assets/ships/submarine-vert_01.png",
	"./submarine-vert_02.png": "./src/assets/ships/submarine-vert_02.png",
	"./submarine-vert_03.png": "./src/assets/ships/submarine-vert_03.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/ships sync \\.png$";

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/imageLoader.js":
/*!*******************************!*\
  !*** ./src/js/imageLoader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadIcon": () => (/* binding */ loadIcon)
/* harmony export */ });
function importAll(r) {
  const images = {};
  r.keys().map((item, index) => {
    images[item.replace(/(.\/|\.png$)/g, '')] = r(item);
  });
  return images;
}

const images = importAll(__webpack_require__("./src/assets/ships sync \\.png$"));

function loadIcon(type, num, dir) {
  let dirArr;
  let dirName;
  if (!dir) {
    dirArr = document.getElementsByClassName('dir-option');
    dir = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  }
  console.log(dir);
  if (dir === 'horizontal') {
    dirName = 'hori';
  }
  if (dir === 'vertical') {
    dirName = 'vert';
  }
  return images[`${type}-${dirName}_0${num}`];
}




/***/ }),

/***/ "./src/js/object.js":
/*!**************************!*\
  !*** ./src/js/object.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



/***/ }),

/***/ "./src/assets/ships/battleship-hori_01.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-hori_01.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f459972af2c1c568f7e.png";

/***/ }),

/***/ "./src/assets/ships/battleship-hori_02.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-hori_02.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af50cc6f35382918e769.png";

/***/ }),

/***/ "./src/assets/ships/battleship-hori_03.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-hori_03.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e29ede6aa2a54335bc60.png";

/***/ }),

/***/ "./src/assets/ships/battleship-hori_04.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-hori_04.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f63a427abdf979f7daa1.png";

/***/ }),

/***/ "./src/assets/ships/battleship-vert_01.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-vert_01.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "23e1056a17259d2189d7.png";

/***/ }),

/***/ "./src/assets/ships/battleship-vert_02.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-vert_02.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f13844065335b5bdbd84.png";

/***/ }),

/***/ "./src/assets/ships/battleship-vert_03.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-vert_03.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0d926661181ff990f8f.png";

/***/ }),

/***/ "./src/assets/ships/battleship-vert_04.png":
/*!*************************************************!*\
  !*** ./src/assets/ships/battleship-vert_04.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "91af9e4f4e7dc2270373.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_01.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_01.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4b97598f0687c3e93738.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_02.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_02.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "749ff1c6b77f492d0543.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_03.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_03.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "79ff194ffd5aad89f48d.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_04.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_04.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f6f7a11f0ce1136ebeb9.png";

/***/ }),

/***/ "./src/assets/ships/carrier-hori_05.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-hori_05.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f2704fb83c08f220a4d.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_01.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_01.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "533cf0429c1beb6912b0.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_02.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_02.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a128590ddf10df26f8ad.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_03.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_03.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5a52bd986306eeeb4042.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_04.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_04.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12b21e9ca034401a838f.png";

/***/ }),

/***/ "./src/assets/ships/carrier-vert_05.png":
/*!**********************************************!*\
  !*** ./src/assets/ships/carrier-vert_05.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c313b848d1dea5387bca.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-hori_01.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-hori_01.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "811b90f59e2737b76a52.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-hori_02.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-hori_02.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca682cee6c92bbb6cfc8.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-hori_03.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-hori_03.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c84347aeefa9650ea000.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-vert_01.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-vert_01.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ac567c51f3eef3303200.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-vert_02.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-vert_02.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "afad462e4c361c7d9a57.png";

/***/ }),

/***/ "./src/assets/ships/destroyer-vert_03.png":
/*!************************************************!*\
  !*** ./src/assets/ships/destroyer-vert_03.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17283fccbd04e08fe94c.png";

/***/ }),

/***/ "./src/assets/ships/patrol-hori_01.png":
/*!*********************************************!*\
  !*** ./src/assets/ships/patrol-hori_01.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6ea5ad03fe6f946a92e5.png";

/***/ }),

/***/ "./src/assets/ships/patrol-hori_02.png":
/*!*********************************************!*\
  !*** ./src/assets/ships/patrol-hori_02.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4cf409358fcc955b917f.png";

/***/ }),

/***/ "./src/assets/ships/patrol-vert_01.png":
/*!*********************************************!*\
  !*** ./src/assets/ships/patrol-vert_01.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ceb5ffb36227f3b2cf6.png";

/***/ }),

/***/ "./src/assets/ships/patrol-vert_02.png":
/*!*********************************************!*\
  !*** ./src/assets/ships/patrol-vert_02.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c6145602a551a68122b.png";

/***/ }),

/***/ "./src/assets/ships/submarine-hori_01.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-hori_01.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "00dc90e62cbe3a03423c.png";

/***/ }),

/***/ "./src/assets/ships/submarine-hori_02.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-hori_02.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "25eed1a6466db382707e.png";

/***/ }),

/***/ "./src/assets/ships/submarine-hori_03.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-hori_03.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fa260837f0b4279f0cd7.png";

/***/ }),

/***/ "./src/assets/ships/submarine-vert_01.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-vert_01.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "18b88bf4ba1c4f61d559.png";

/***/ }),

/***/ "./src/assets/ships/submarine-vert_02.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-vert_02.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8f1401b3e9c4d98fb42.png";

/***/ }),

/***/ "./src/assets/ships/submarine-vert_03.png":
/*!************************************************!*\
  !*** ./src/assets/ships/submarine-vert_03.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1d7990d87afe5dd34ed8.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageLoader */ "./src/js/imageLoader.js");
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */




function loadShip(player, side) {
  player.board.list.forEach((ship) => {
    ship.position.forEach((cord) => {
      [...document.getElementsByClassName(`${side}-content`)[0].getElementsByClassName('box')].forEach((box) => {
        if (box.dataset.pos === cord.join()) {
          let shipType;
          switch (player.board.list.indexOf(ship)) {
            case 0:
              shipType = 'patrol';
              break;
            case 1:
              shipType = 'submarine';
              break;
            case 2:
              shipType = 'destroyer'
              break;
            case 3:
              shipType = 'battleship';
              break;
            case 4:
              shipType = 'carrier';
              break;
            default:
              console.log('bruh');
              break;
          }
          const shipImg = (0,_imageLoader__WEBPACK_IMPORTED_MODULE_2__.loadIcon)(shipType, ship.position.indexOf(cord) + 1, ship.axis);
          box.style.backgroundImage = `url('${shipImg}')`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7OztBQy9FcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSx5QkFBeUIsc0RBQW1EOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEtBQUssR0FBRyxRQUFRLElBQUksSUFBSTtBQUMzQzs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFObkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lDO0FBQ0M7QUFDTzs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVE7QUFDbEMsOENBQThDLFFBQVE7QUFDdEQ7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFlLG1CQUFtQixnREFBVztBQUNyRCxRQUFRLG9EQUFrQixhQUFhLGdEQUFXO0FBQ2xELE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8vaG9tZS9jaGhlYW5nL3JlcG9zL2JhdHRsZXNoaXAvc3JjL2Fzc2V0cy9zaGlwc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwucG5nJC8iLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wYWdlTG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDEucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtaG9yaV8wMi5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtaG9yaV8wMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1ob3JpXzA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLWhvcmlfMDQucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wMS5wbmdcIixcblx0XCIuL2JhdHRsZXNoaXAtdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXZlcnRfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2JhdHRsZXNoaXAtdmVydF8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDIucG5nXCIsXG5cdFwiLi9jYXJyaWVyLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItaG9yaV8wMy5wbmdcIixcblx0XCIuL2NhcnJpZXItaG9yaV8wNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci1ob3JpXzA0LnBuZ1wiLFxuXHRcIi4vY2Fycmllci1ob3JpXzA1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLWhvcmlfMDUucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wMS5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vY2Fycmllci12ZXJ0XzAzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9zaGlwcy9jYXJyaWVyLXZlcnRfMDMucG5nXCIsXG5cdFwiLi9jYXJyaWVyLXZlcnRfMDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2NhcnJpZXItdmVydF8wNC5wbmdcIixcblx0XCIuL2NhcnJpZXItdmVydF8wNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvc2hpcHMvY2Fycmllci12ZXJ0XzA1LnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vZGVzdHJveWVyLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci12ZXJ0XzAzLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vcGF0cm9sLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3BhdHJvbC12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAxLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLWhvcmlfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS1ob3JpXzAzLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAxLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAyLnBuZ1wiLFxuXHRcIi4vc3VibWFyaW5lLXZlcnRfMDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3NoaXBzL3N1Ym1hcmluZS12ZXJ0XzAzLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvc2hpcHMgc3luYyBcXFxcLnBuZyRcIjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3QgbWFpbkxvb3AgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgZnVuY3Rpb24gYXBwbHlBdHQob3V0cHV0LCBjb3JkLCBzaWRlKSB7XG4gICAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3NpZGV9LWNvbnRlbnRgKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpO1xuICAgIGlmIChvdXRwdXQgPT09ICdoaXQnKSB7XG4gICAgICBbLi4uYm94ZXNdLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhib3guZGF0YXNldC5wb3MsIGNvcmQsIHNpZGUpO1xuICAgICAgICBpZiAoYm94LmRhdGFzZXQucG9zID09PSBjb3JkLmpvaW4oKSkge1xuICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAob3V0cHV0ID09PSAnbWlzcycpIHtcbiAgICAgIFsuLi5ib3hlc10uZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGlmIChib3guZGF0YXNldC5wb3MgPT09IGNvcmQuam9pbigpKSB7XG4gICAgICAgICAgYm94LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNoZWNrV2luKGxpc3QpIHtcbiAgICBjb25zdCBjaGVjayA9IGxpc3Quc29tZSgocGxheWVyKSA9PiBwbGF5ZXIuYm9hcmQubGlzdC5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkpO1xuICAgIGNvbnN0IHdpbiA9IGxpc3QuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5ib2FyZC5saXN0LmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSlbMF07XG4gICAgaWYgKGNoZWNrKSB7XG4gICAgICBjb25zb2xlLmxvZyh3aW4pO1xuICAgIH1cbiAgICBpZiAoIWNoZWNrKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGV5Jyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGF0dGFjayhjb3JkLCBzaWRlLCBsaXN0KSB7XG4gICAgbGV0IGNoZWNrVmFsaWQ7XG4gICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgaWYgKGxpc3RbMV0uaXNUdXJuID09PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrVmFsaWQgPSBsaXN0WzFdLmF0dGFjayhsaXN0WzBdLCBjb3JkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgIGlmIChsaXN0WzBdLmlzVHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGVja1ZhbGlkID0gbGlzdFswXS5hdHRhY2sobGlzdFsxXSwgY29yZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFwcGx5QXR0KGNoZWNrVmFsaWQsIGNvcmQsIHNpZGUpO1xuICAgIGNoZWNrV2luKGxpc3QpO1xuICB9XG4gIGZ1bmN0aW9uIGJvdFJlbmRlckF0dGFjayhib3QsIHRhcmdldCwgc2lkZSwgbGlzdCkge1xuICAgIGNvbnN0IGF0dEluZm8gPSBib3QuYXR0YWNrKHRhcmdldCk7XG4gICAgYXBwbHlBdHQoYXR0SW5mby5zdGF0ZSwgYXR0SW5mby5jb3JkLCBzaWRlKTtcbiAgICBjaGVja1dpbihsaXN0KTtcbiAgfVxuICBmdW5jdGlvbiBib3RBdHRhY2soc2lkZSwgbGlzdCkge1xuICAgIGNvbnN0IGJvdEV4aXN0ID0gbGlzdC5zb21lKCh4KSA9PiB4LmlzQm90KTtcbiAgICBpZiAoIWJvdEV4aXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJvdCA9IGxpc3QuZmlsdGVyKCh4KSA9PiB4LmlzQm90KVswXTtcbiAgICBjb25zdCBub3RCb3QgPSBsaXN0LmZpbHRlcigoeCkgPT4gIXguaXNCb3QpWzBdO1xuICAgIGlmICghYm90LmlzVHVybikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBib3RSZW5kZXJBdHRhY2soYm90LCBub3RCb3QsIHNpZGUsIGxpc3QpO1xuICB9XG4gIHJldHVybiB7IGF0dGFjaywgYm90QXR0YWNrIH07XG59KCkpO1xuXG5leHBvcnQgeyBtYWluTG9vcCB9O1xuIiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgY29uc3QgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpbWFnZXNbaXRlbS5yZXBsYWNlKC8oLlxcL3xcXC5wbmckKS9nLCAnJyldID0gcihpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy9zaGlwcycsIGZhbHNlLCAvXFwucG5nJC8pKTtcblxuZnVuY3Rpb24gbG9hZEljb24odHlwZSwgbnVtLCBkaXIpIHtcbiAgbGV0IGRpckFycjtcbiAgbGV0IGRpck5hbWU7XG4gIGlmICghZGlyKSB7XG4gICAgZGlyQXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlyLW9wdGlvbicpO1xuICAgIGRpciA9IFsuLi5kaXJBcnJdLmZpbHRlcigoZGlyT2JqKSA9PiBkaXJPYmouY2hlY2tlZClbMF0udmFsdWU7XG4gIH1cbiAgY29uc29sZS5sb2coZGlyKTtcbiAgaWYgKGRpciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgZGlyTmFtZSA9ICdob3JpJztcbiAgfVxuICBpZiAoZGlyID09PSAndmVydGljYWwnKSB7XG4gICAgZGlyTmFtZSA9ICd2ZXJ0JztcbiAgfVxuICByZXR1cm4gaW1hZ2VzW2Ake3R5cGV9LSR7ZGlyTmFtZX1fMCR7bnVtfWBdO1xufVxuXG5leHBvcnQgeyBsb2FkSWNvbiB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5mdW5jdGlvbiBTaGlwKGxlbmd0aCwgYXhpcywgY29vcmRpbmF0ZSkge1xuICBmdW5jdGlvbiBleHBhbmRlcigpIHtcbiAgICBjb25zdCBzdGFydCA9IFsuLi5jb29yZGluYXRlXTtcbiAgICBjb25zdCBib2R5ID0gQXJyYXkobGVuZ3RoKVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoKSA9PiB7XG4gICAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm4gW3N0YXJ0WzBdLCBzdGFydFsxXSsrXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIHJldHVybiBbc3RhcnRbMF0rKywgc3RhcnRbMV1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdCh2YWx1ZSkge1xuICAgIGNvbnN0IGNoZWNrID0gcG9zaXRpb24uc29tZSgocG9zKSA9PiB7XG4gICAgICBpZiAodmFsdWVbMF0gPT09IHBvc1swXSAmJiB2YWx1ZVsxXSA9PT0gcG9zWzFdKSB7XG4gICAgICAgIGRhbWFnZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChkYW1hZ2UubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRhbWFnZSA9IFtdO1xuICBjb25zdCBwb3NpdGlvbiA9IGV4cGFuZGVyKCk7XG5cbiAgZnVuY3Rpb24gaXNWYWxpZChzaGlwcykge1xuICAgIGxldCBib3VuZGFyeTtcblxuICAgIGNvbnN0IG92ZXJsYXAgPSBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5wb3NpdGlvbi5ldmVyeSgocG9zWCkgPT4gcG9zaXRpb24uZXZlcnkoKHBvc1kpID0+IHtcbiAgICAgIGlmIChwb3NYWzBdID09PSBwb3NZWzBdICYmIHBvc1hbMV0gPT09IHBvc1lbMV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkpKTtcblxuICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIGJvdW5kYXJ5ID0gcG9zaXRpb24uZXZlcnkoKHBvcykgPT4ge1xuICAgICAgICAgIGlmIChwb3NbMV0gPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIGJvdW5kYXJ5ID0gcG9zaXRpb24uZXZlcnkoKHBvcykgPT4ge1xuICAgICAgICAgIGlmIChwb3NbMF0gPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG92ZXJsYXAgJiYgYm91bmRhcnk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgZGFtYWdlLFxuICAgIGF4aXMsXG4gICAgcG9zaXRpb24sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBpc1ZhbGlkLFxuICAgIGV4cGFuZGVyLFxuICB9O1xufVxuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgY29uc3QgYXR0YWNrcyA9IFtdO1xuICBjb25zdCBoaXRzID0gW107XG4gIGNvbnN0IG1pc3NlcyA9IFtdO1xuICBmdW5jdGlvbiBwbGFjZShzaGlwLCBheGlzLCBjb29yZGluYXRlKSB7XG4gICAgbGV0IG9iajtcbiAgICBzd2l0Y2ggKHNoaXApIHtcbiAgICAgIGNhc2UgJ3BhdHJvbCc6XG4gICAgICAgIG9iaiA9IFNoaXAoMiwgYXhpcywgY29vcmRpbmF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3VibWFyaW5lJzpcbiAgICAgICAgb2JqID0gU2hpcCgzLCBheGlzLCBjb29yZGluYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXN0cm95ZXInOlxuICAgICAgICBvYmogPSBTaGlwKDMsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOlxuICAgICAgICBvYmogPSBTaGlwKDQsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhcnJpZXInOlxuICAgICAgICBvYmogPSBTaGlwKDUsIGF4aXMsIGNvb3JkaW5hdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAob2JqLmlzVmFsaWQobGlzdCkpIHtcbiAgICAgIGxpc3QucHVzaChvYmopO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29yZCkge1xuICAgIGNvbnN0IGlzRXhpc3QgPSBhdHRhY2tzLnNvbWUoKGF0dGFjaykgPT4gYXR0YWNrWzBdID09PSBjb3JkWzBdICYmIGF0dGFja1sxXSA9PT0gY29yZFsxXSk7XG4gICAgY29uc3QgaGl0ID0gbGlzdC5zb21lKChzaGlwKSA9PiBzaGlwLmhpdChjb3JkKSk7XG4gICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgUGxheWVyLmNoYW5nZVR1cm4oKTtcbiAgICBhdHRhY2tzLnB1c2goY29yZCk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgaGl0cy5wdXNoKGNvcmQpO1xuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cbiAgICBtaXNzZXMucHVzaChjb3JkKTtcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0LFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICAgIGF0dGFja3MsXG4gICAgcGxhY2UsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn1cblxuZnVuY3Rpb24gUGxheWVyT2JqKGlzQm90KSB7XG4gIGZ1bmN0aW9uIGRlY2lkZVR1cm4oKSB7XG4gICAgaWYgKFBsYXllci5saXN0WzBdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYm90RXZhbChwbGF5ZXIpIHtcbiAgICBjb25zdCByYW5kID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICBsZXQgYXR0YWNrRXhpc3Q7XG4gICAgaWYgKHBsYXllci5ib2FyZC5hdHRhY2tzWzBdKSB7XG4gICAgICBhdHRhY2tFeGlzdCA9IHBsYXllci5ib2FyZC5hdHRhY2tzLmV2ZXJ5KChhdHRlbXB0KSA9PiB7XG4gICAgICAgIGlmIChhdHRlbXB0WzBdID09PSByYW5kWzBdICYmIGF0dGVtcHRbMV0gPT09IHJhbmRbMV0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGF0dGFja0V4aXN0ID09PSB0cnVlKSB7XG4gICAgICBib3RFdmFsKCk7XG4gICAgfVxuICAgIHJldHVybiByYW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrKHBsYXllciwgY29vcmRpbmF0ZSkge1xuICAgIGlmIChpc0JvdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICB9XG4gICAgaWYgKGlzQm90ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBjb3JkID0gYm90RXZhbChwbGF5ZXIpO1xuICAgICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb3JkKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvcmQsXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBhdHRhY2socGxheWVyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzVHVybjogZGVjaWRlVHVybigpLFxuICAgIGJvYXJkOiBHYW1lYm9hcmQoKSxcbiAgICBhdHRhY2ssXG4gICAgaXNCb3QsXG4gIH07XG59XG5jb25zdCBQbGF5ZXIgPSAoZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmdW5jdGlvbiBjcmVhdGUoaXNCb3QpIHtcbiAgICBjb25zdCBvYmogPSBQbGF5ZXJPYmooaXNCb3QpO1xuICAgIGxpc3QucHVzaChvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgbGlzdC5zcGxpY2UoMCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VUdXJuKCkge1xuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmlzVHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICBvYmouaXNUdXJuID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9iai5pc1R1cm4gPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGlzdCwgY2hhbmdlVHVybiwgY3JlYXRlLCBjbGVhcixcbiAgfTtcbn0oKSk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1hcnJvdy1jYWxsYmFjayAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBtYWluTG9vcCB9IGZyb20gJy4vYXBwJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCB7IGxvYWRJY29uIH0gZnJvbSAnLi9pbWFnZUxvYWRlcic7XG5cbmZ1bmN0aW9uIGxvYWRTaGlwKHBsYXllciwgc2lkZSkge1xuICBwbGF5ZXIuYm9hcmQubGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94JyldLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICBpZiAoYm94LmRhdGFzZXQucG9zID09PSBjb3JkLmpvaW4oKSkge1xuICAgICAgICAgIGxldCBzaGlwVHlwZTtcbiAgICAgICAgICBzd2l0Y2ggKHBsYXllci5ib2FyZC5saXN0LmluZGV4T2Yoc2hpcCkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgc2hpcFR5cGUgPSAncGF0cm9sJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHNoaXBUeXBlID0gJ3N1Ym1hcmluZSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBzaGlwVHlwZSA9ICdkZXN0cm95ZXInXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBzaGlwVHlwZSA9ICdiYXR0bGVzaGlwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIHNoaXBUeXBlID0gJ2NhcnJpZXInO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicnVoJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzaGlwSW1nID0gbG9hZEljb24oc2hpcFR5cGUsIHNoaXAucG9zaXRpb24uaW5kZXhPZihjb3JkKSArIDEsIHNoaXAuYXhpcyk7XG4gICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7c2hpcEltZ30nKWA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgYm9hcmRMb2FkID0gKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGFnZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3RvcC1jb250YWluZXInPjxwPlR1cm46IFBMQVlFUiAxPC9wPjwvZGl2PlwiXG4gICAgICArIFwiPGRpdiBjbGFzcz0nbWFpbi1jb250ZW50Jz48ZGl2IGNsYXNzPSdsZWZ0LWNvbnRlbnQnPjxkaXYgY2xhc3M9J3BsYXllcm5hbWUnPlBMQVlFUiAxICh5b3UpPC9kaXY+PGRpdiBjbGFzcz0nYm9hcmQtY29udGFpbmVyJz48ZGl2IGNsYXNzPSdzaGlwcy1jb250YWluZXInPjwvZGl2PjxkaXYgY2xhc3M9J2JvYXJkJz48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdyaWdodC1jb250ZW50Jz48ZGl2IGNsYXNzPSdwbGF5ZXJuYW1lJz5QTEFZRVIgMiAoYm90KTwvZGl2PjxkaXYgY2xhc3M9J2JvYXJkLWNvbnRhaW5lcic+PGRpdiBjbGFzcz0nc2hpcHMtY29udGFpbmVyJz48L2Rpdj48ZGl2IGNsYXNzPSdib2FyZCc+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+XCI7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVCb3goKSB7XG4gICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkJyldLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBzdGFydCA9IFswLCAwXTtcbiAgICAgIEFycmF5KDEwMClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdib3gnO1xuICAgICAgICAgIGJveC5kYXRhc2V0LnBvcyA9IHN0YXJ0O1xuICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdIDw9IDkpIHtcbiAgICAgICAgICAgIHN0YXJ0WzFdKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydFsxXSA9PT0gMTApIHtcbiAgICAgICAgICAgIHN0YXJ0WzFdID0gMDtcbiAgICAgICAgICAgIHN0YXJ0WzBdKys7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhc3NpZ25Cb3goKSB7XG4gICAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChvYmopID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IG9iai50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcycpXG4gICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxMCkpO1xuICAgICAgICBjb25zdCBzaWRlID0gb2JqLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2lkZScpO1xuICAgICAgICBsZXQgY29tcGxlbWVudDtcbiAgICAgICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGNvbXBsZW1lbnQgPSAncmlnaHQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaWRlID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgY29tcGxlbWVudCA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgICBtYWluTG9vcC5hdHRhY2soY29vcmRpbmF0ZSwgc2lkZSwgUGxheWVyLmxpc3QpO1xuICAgICAgICBtYWluTG9vcC5ib3RBdHRhY2soY29tcGxlbWVudCwgUGxheWVyLmxpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYXNzaWduUGFyZW50KCkge1xuICAgIFsnbGVmdCcsICdyaWdodCddLmZvckVhY2goKHNpZGUpID0+IHtcbiAgICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzaWRlfS1jb250ZW50YClbMF1cbiAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveCcpO1xuICAgICAgWy4uLmJveGVzXS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgYm94LmRhdGFzZXQuc2lkZSA9IHNpZGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2VuZXJhdGVQYWdlLCBnZW5lcmF0ZUJveCwgYXNzaWduUGFyZW50LCBhc3NpZ25Cb3gsXG4gIH07XG59KCkpO1xuXG5mdW5jdGlvbiBsb2FkT3B0aW9uKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3AtY29udGFpbmVyJylbMF07XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvcHRpb24uaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdkaXItb3B0aW9uJz48bGFiZWwgZm9yPSdob3Jpem9udGFsJz5Ib3Jpem9udGFsPC9sYWJlbD48aW5wdXQgdHlwZT0ncmFkaW8nIGNsYXNzPSdkaXItb3B0aW9uJyB2YWx1ZT0naG9yaXpvbnRhbCcgaWQ9J2hvcml6b250YWwnIG5hbWU9J29wdGlvbicgY2hlY2tlZD48bGFiZWwgZm9yPSd2ZXJ0aWNhbCc+VmVydGljYWw8L2xhYmVsPjxpbnB1dCB0eXBlPSdyYWRpbycgY2xhc3M9J2Rpci1vcHRpb24nIHZhbHVlPSd2ZXJ0aWNhbCcgaWQ9J3ZlcnRpY2FsJyBuYW1lPSdvcHRpb24nPjwvZGl2PlwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuZnVuY3Rpb24gbWFpbkxvYWQoKSB7XG4gIGJvYXJkTG9hZC5nZW5lcmF0ZVBhZ2UoKTtcbiAgYm9hcmRMb2FkLmdlbmVyYXRlQm94KCk7XG4gIGJvYXJkTG9hZC5hc3NpZ25QYXJlbnQoKTtcbn1cblxuZXhwb3J0IHtcbiAgbWFpbkxvYWQsIGxvYWRTaGlwLCBsb2FkT3B0aW9uLCBib2FyZExvYWQsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9