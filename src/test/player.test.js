/* eslint-disable no-undef */
import { Player } from '../js/object';

it('Path #1.1 Player gets their board', () => {
  const playerX = Player.create();
  expect(playerX)
    .toMatchObject({
      isTurn: true,
    });
  Player.clear();
});

it('Path #1.2 Multiple players', () => {
  const playerX = Player.create();
  const playerY = Player.create();
  expect(playerX)
    .toMatchObject({
      isTurn: true,
    });
  expect(playerY)
    .toMatchObject({
      isTurn: false,
    });
  Player.clear();
});

it('Path #1.3 Attacking other player', () => {
  const playerX = Player.create(false);
  const playerY = Player.create(false);
  playerX.board.place('patrol', 'horizontal', [0, 0]);
  playerY.board.place('patrol', 'vertical', [0, 0]);
  playerX.attack(playerY, [0, 0]);
  expect(playerY.board.hits)
    .toMatchObject([[0, 0]]);
  expect(playerX.isTurn).toBe(false);
  expect(playerY.isTurn).toBe(true);

  playerY.attack(playerX, [1, 0]);
  expect(playerX.board.misses)
    .toMatchObject([[1, 0]]);

  playerX.attack(playerY, [1, 0]);
  expect(playerY.board.hits)
    .toMatchObject([[0, 0], [1, 0]]);
  expect(playerY.board.list[0].isSunk()).toBe(true);
  Player.clear();
});

it('Path #1.4 Bot creation + can attack', () => {
  const playerX = Player.create(false);
  const playerY = Player.create(true);
  playerX.board.place('patrol', 'horizontal', [0, 0]);
  playerY.board.place('patrol', 'vertical', [0, 0]);

  playerY.attack(playerX);

  expect(playerX.board.attacks[0])
    .toBeDefined();
  Player.clear();
});

it('Path #1.5 Bot creation + can attack randomly', () => {
  const playerX = Player.create(false);
  const playerY = Player.create(true);
  playerX.board.place('patrol', 'horizontal', [0, 0]);
  playerY.board.place('patrol', 'vertical', [0, 0]);

  playerY.attack(playerX);
  playerY.attack(playerX);
  playerY.attack(playerX);

  expect(playerX.board.attacks[0])
    .not.toMatchObject(playerX.board.attacks[1]);

  expect(playerX.board.attacks[1])
    .not.toMatchObject(playerX.board.attacks[2]);
  Player.clear();
});
