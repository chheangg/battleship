/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const gameUtilities = (function handler() {
  function applyAtt(isHit, cord, side) {
    const boxes = document.getElementsByClassName(`${side}-content`)[0]
      .getElementsByClassName('box');
    [...boxes].forEach((box) => {
      if (box.dataset.pos === cord.join()) {
        box.textContent = 'X';
        console.log(isHit);
        box.classList.add(isHit  === 'hit' ? 'hit' : 'miss');
      }
    });
  }
  function checkWin(attacker, defender) {
    const hasWin = defender.board.list.every((ship) => ship.isSunk());
    if (hasWin) {
      console.log(attacker);
    }
  }

  function attack(cord, side, attacker, defender) {
    const checkValid = attacker.attack(defender, cord);
    if (!checkValid) {
      return;
    }
    applyAtt(checkValid, cord, side);
    checkWin(attacker, defender);
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

export { gameUtilities };
