/* eslint-disable no-undef */
import { Ships } from '../js/objects/ship';
import { Player } from '../js/objects/player';
import { getTestGameObject } from '../js/utilities';

it('Path #1.1 Player gets their board', () => {
  const playerX = Player(false, true);
  expect(playerX)
    .toMatchObject({
      isTurn: true,
    });
});

it('Path #1.2 Multiple players', () => {
  const playerX = Player(false, true);
  const playerY = Player(false, false);
  expect(playerX)
    .toMatchObject({
      isTurn: true,
    });
  expect(playerY)
    .toMatchObject({
      isTurn: false,
    });
});

it('Path #1.3 Attacking other player', () => {
  const gameObject = getTestGameObject();
  const { playerOne, playerTwo } = gameObject;
  playerOne.board.place(Ships.patrol, 'horizontal', [0, 0]);
  playerTwo.board.place(Ships.patrol, 'vertical', [0, 0]);
  playerOne.attack(playerTwo, [0, 0], gameObject);
  expect(playerTwo.board.hits)
    .toMatchObject([[0, 0]]);
  expect(playerOne.isTurn).toBe(false);
  expect(playerTwo.isTurn).toBe(true);

  playerTwo.attack(playerOne, [1, 0], gameObject);
  expect(playerOne.board.misses)
    .toMatchObject([[1, 0]]);

  playerOne.attack(playerTwo, [1, 0], gameObject);
  expect(playerTwo.board.hits)
    .toMatchObject([[0, 0], [1, 0]]);
  expect(playerTwo.board.list[0].isSunk()).toBe(true);
});

// it('Path #1.4 Bot creation + can attack', () => {
//   const playerX = Player(false, true);
//   const playerY = Player.create(true, false);
//   playerX.board.place(Ships.patrol, 'horizontal', [0, 0]);
//   playerY.board.place(Ships.patrol, 'vertical', [0, 0]);

//   playerY.attack(playerX);

//   expect(playerX.board.attacks[0])
//     .toBeDefined();
// });

// it('Path #1.5 Bot creation + can attack randomly', () => {
//   const playerX = Player(false, true);
//   const playerY = Player(true, false);
//   playerX.board.place(Ships.patrol, 'horizontal', [0, 0]);
//   playerY.board.place(Ships.patrol, 'vertical', [0, 0]);

//   playerY.attack(playerX);
//   playerY.attack(playerX);
//   playerY.attack(playerX);

//   expect(playerX.board.attacks[0])
//     .not.toMatchObject(playerX.board.attacks[1]);

//   expect(playerX.board.attacks[1])
//     .not.toMatchObject(playerX.board.attacks[2]);
// });
