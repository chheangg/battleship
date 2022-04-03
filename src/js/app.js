/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const mainLoop = (function handler() {
  function applyAtt(attack, cord, side) {
    const boxes = document.getElementsByClassName(`${side}-content`)[0]
      .getElementsByClassName('box');
    if (attack === 'hit') {
      [...boxes].forEach((box) => {
        if (box.dataset.pos === cord.join()) {
          box.textContent = 'X';
          box.classList.add('hit');
        }
      });
    }
    if (attack === 'miss') {
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
    if (check) {
      console.log('hey2');
    }
    if (!check) {
      console.log('hey');
    }
  }
  function click(cord, side, list) {
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

  return { click };
}());

export { mainLoop };
