import { getBoardBoxes } from '../../utilities';

export function applyAttackStyle(player, cord, isHit) {
  const hitStyle = isHit ? 'hit' : 'miss';
  const boxes = getBoardBoxes(player);
  boxes[cord[0]][cord[1]].add(hitStyle);
}

export function checkDefenderGameOver(defender) {
  return defender.board.list.every((ship) => ship.isSunk());
}

export function attackPlayer(attacker, defender, cord) {
  const isAttackSuccess = attacker.attack(defender, cord);
  return isAttackSuccess;
}

export function botAttack(bot, player) {
  const cord = bot.botEval(player);
  attackPlayer(bot, player, cord);
}
