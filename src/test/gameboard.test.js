/* eslint-disable no-undef */
/* eslint-disable no-undef */
import Coordinate from '../js/objects/Coordinate';
import Direction from '../js/objects/Direction';
import ShipType from '../js/objects/ShipType';
import { createTestGameBoard } from '../js/utilities';

it('Path #1.1 Placing a ship', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Patrol, Direction.PositiveX, new Coordinate(0, 0));
  expect(board.list[0])
    .toMatchObject({
      length: 2,
      damage: [],
      dir: Direction.PositiveX,
      position: [
        new Coordinate(0, 0),
        new Coordinate(1, 0),
      ],
    });
});

it('Path #1.2 Placing two ship', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Patrol, Direction.PositiveX, new Coordinate(0, 0));
  board.place(ShipType.Patrol, Direction.PositiveX, new Coordinate(0, 1));
  expect(board.list[0])
    .toMatchObject({
      length: 2,
      damage: [],
      dir: Direction.PositiveX,
      position: [
        new Coordinate(0, 0),
        new Coordinate(1, 0),
      ],
    });
  expect(board.list[1])
    .toMatchObject({
      length: 2,
      damage: [],
      dir: Direction.PositiveX,
      position: [
        new Coordinate(0, 1),
        new Coordinate(1, 1),
      ],
    });
});

it('Path #1.3 Placing a destroyer', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Destroyer, Direction.PositiveX, new Coordinate(0, 0));
  expect(board.list[0])
    .toMatchObject({
      length: 3,
      damage: [],
      dir: Direction.PositiveX,
      position: [
        new Coordinate(0, 0),
        new Coordinate(1, 0),
        new Coordinate(2, 0),
      ],
    });
});

it('Path #1.4 Placing a carrier', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Carrier, Direction.PositiveX, new Coordinate(0, 0));
  expect(board.list[0])
    .toMatchObject({
      length: 5,
      damage: [],
      dir: Direction.PositiveX,
      position: [
        new Coordinate(0, 0),
        new Coordinate(1, 0),
        new Coordinate(2, 0),
        new Coordinate(3, 0),
        new Coordinate(4, 0),
      ],
    });
});

it('Path #2.1 cancel invalid placement (overlap)', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Carrier, Direction.PositiveX, new Coordinate(0, 0));
  board.place(ShipType.Carrier, Direction.NegativeX, new Coordinate(0, 1));
  expect(board.list[0])
    .toMatchObject({
      length: 5,
      damage: [],
      dir: Direction.PositiveX,
      position: [
        new Coordinate(0, 0),
        new Coordinate(1, 0),
        new Coordinate(2, 0),
        new Coordinate(3, 0),
        new Coordinate(4, 0),
      ],
    });
  expect(board.list[1])
    .toBeUndefined();
});

it('Path #2.2 cancel invalid placement (out of boundary)', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Carrier, Direction.PositiveX, new Coordinate(9, 0));
  expect(board.list[0])
    .toBeUndefined();
});

it('Path #2.3 cancel invalid placement (out of boundary + overlap)', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Carrier, Direction.PositiveX, new Coordinate(9, 0));
  board.place(ShipType.Carrier, Direction.PositiveY, new Coordinate(0, 1));
  board.place(ShipType.Carrier, Direction.PositiveX, new Coordinate(0, 1));
  expect(board.list[0])
    .toMatchObject({
      length: 5,
      damage: [],
      dir: Direction.PositiveY,
      position: [
        new Coordinate(0, 1),
        new Coordinate(0, 2),
        new Coordinate(0, 3),
        new Coordinate(0, 4),
        new Coordinate(0, 5),
      ],
    });
});

it('Path #3.1 Check hits', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Patrol, Direction.PositiveY, new Coordinate(0, 0));
  board.receiveAttack(new Coordinate(0, 0));
  expect(board.hits[0])
    .toMatchObject(new Coordinate(0, 0));
});

it('Path #3.2 Check misses', () => {
  const board = createTestGameBoard();
  board.place(ShipType.Patrol, Direction.PositiveY, new Coordinate(0, 0));
  board.receiveAttack(new Coordinate(1, 0));
  expect(board.misses[0])
    .toMatchObject(new Coordinate(1, 0));
});
