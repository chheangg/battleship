/* eslint-disable no-undef */
import Coordinate from '../js/objects/Coordinate';
import Direction from '../js/objects/Direction';
import Player from '../js/objects/Player';
import ShipType from '../js/objects/ShipType';
import { createTestGameObject } from '../js/utilities';

it('Path #1.1 Player gets their board', () => {
  const playerX = new Player(null, false, true);
  expect(playerX)
    .toMatchObject({
      isTurn: true,
    });
});

it('Path #1.2 Multiple players', () => {
  const playerX = new Player(null, false, true);
  const playerY = new Player(null, false, false);
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
  const gameObject = createTestGameObject();
  const { playerOne, playerTwo } = gameObject;
  playerOne.board.place(ShipType.Patrol, Direction.PositiveX, new Coordinate(0, 0));
  playerTwo.board.place(ShipType.Patrol, Direction.PositiveY, new Coordinate(0, 0));
  playerOne.attack(playerTwo, new Coordinate(0, 0));
  expect(playerTwo.board.hits)
    .toMatchObject([new Coordinate(0, 0)]);

  playerTwo.attack(playerOne, new Coordinate(0, 1));
  expect(playerOne.board.misses)
    .toMatchObject([new Coordinate(0, 1)]);

  playerOne.attack(playerTwo, new Coordinate(0, 1));
  expect(playerTwo.board.hits)
    .toMatchObject([new Coordinate(0, 0), new Coordinate(0, 1)]);
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
