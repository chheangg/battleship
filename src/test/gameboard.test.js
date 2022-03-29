/* eslint-disable no-undef */
import { Gameboard } from '../js/object';

it('Path #1.1 Placing a ship', () => {
  const board = Gameboard();
  board.place('patrol', 'horizontal', [0, 0]);
  expect(board.list[0])
    .toMatchObject({
      length: 2,
      damage: [],
      axis: 'horizontal',
      position: [
        [0, 0],
        [0, 1],
      ],
    });
});

it('Path #1.2 Placing two ship', () => {
  const board = Gameboard();
  board.place('patrol', 'horizontal', [0, 0]);
  board.place('patrol', 'horizontal', [1, 0]);
  expect(board.list[0])
    .toMatchObject({
      length: 2,
      damage: [],
      axis: 'horizontal',
      position: [
        [0, 0],
        [0, 1],
      ],
    });
  expect(board.list[1])
    .toMatchObject({
      length: 2,
      damage: [],
      axis: 'horizontal',
      position: [
        [1, 0],
        [1, 1],
      ],
    });
});

it('Path #1.3 Placing a destroyer', () => {
  const board = Gameboard();
  board.place('destroyer', 'horizontal', [0, 0]);
  expect(board.list[0])
    .toMatchObject({
      length: 3,
      damage: [],
      axis: 'horizontal',
      position: [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
    });
});

it('Path #1.4 Placing a carrier', () => {
  const board = Gameboard();
  board.place('carrier', 'horizontal', [0, 0]);
  expect(board.list[0])
    .toMatchObject({
      length: 5,
      damage: [],
      axis: 'horizontal',
      position: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
      ],
    });
});

it('Path #2.1 cancel invalid placement (overlap)', () => {
  const board = Gameboard();
  board.place('carrier', 'horizontal', [0, 0]);
  board.place('carrier', 'horizontal', [0, 1]);
  expect(board.list[0])
    .toMatchObject({
      length: 5,
      damage: [],
      axis: 'horizontal',
      position: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
      ],
    });
  expect(board.list[1])
    .toBeUndefined();
});

it('Path #2.2 cancel invalid placement (out of boundary)', () => {
  const board = Gameboard();
  board.place('carrier', 'horizontal', [0, 9]);
  expect(board.list[0])
    .toBeUndefined();
});

it('Path #2.3 cancel invalid placement (out of boundary + overlap)', () => {
  const board = Gameboard();
  board.place('carrier', 'horizontal', [0, 9]);
  board.place('carrier', 'vertical', [0, 1]);
  board.place('carrier', 'horizontal', [0, 1]);
  expect(board.list[0])
    .toMatchObject({
      length: 5,
      damage: [],
      axis: 'vertical',
      position: [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
      ],
    });
});

it('Path #3.1 Check hits', () => {
  const board = Gameboard();
  board.place('patrol', 'horizontal', [0, 0]);
  board.receiveAttack([0, 0]);
  expect(board.hits[0])
    .toMatchObject([0, 0]);
});

it('Path #3.2 Check misses', () => {
  const board = Gameboard();
  board.place('patrol', 'vertical', [0, 0]);
  board.receiveAttack([0, 1]);
  expect(board.misses[0])
    .toMatchObject([0, 1]);
});
