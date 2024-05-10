/* eslint-disable no-undef */
import { createTestPlayer } from '../js/utilities';
import Ship, { Ships } from '../js/objects/ship';

it('Path #1.1: Create main object horizontally', () => {
  const player = createTestPlayer();
  expect(new Ship(Ships[3], player, 0, [0, 0]))
    .toMatchObject({
      length: 4,
      damage: [],
      dir: 0,
      position: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
    });
});

it('Path #1.2: Create main object vertically', () => {
  const player = createTestPlayer();
  expect(new Ship(Ships[3], player, 1, [0, 0]))
    .toMatchObject({
      length: 4,
      damage: [],
      dir: 1,
      position: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
    });
});

it('Path #1.3: Create a small object', () => {
  const player = createTestPlayer();
  expect(new Ship(Ships[0], player, 0, [0, 0]))
    .toMatchObject({
      length: 2,
      damage: [],
      dir: 0,
      position: [
        [0, 0],
        [0, 1],
      ],
    });
});

it('Path #2.1: Damage an object horziontally', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[3], player, 0, [0, 0]);
  prop.hit([0, 1]);

  expect(prop.damage).toEqual([[0, 1]]);
});

it('Path #2.2: Damage an object vertically', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[3], player, 1, [0, 0]);
  prop.hit([1, 0]);

  expect(prop.damage).toEqual([[1, 0]]);
});

it('Path #2.3: Hit is out of range, horizontal object is fine', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[2], player, 0, [0, 0]);
  prop.hit([0, 4]);

  expect(prop.damage).toEqual([]);
});

it('Path #2.4: Hit is out of range, vertical object is fine', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[2], player, 0, [0, 0]);
  prop.hit([4, 0]);

  expect(prop.damage).toEqual([]);
});

it('Path #2.5: Check damage', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[3], player, 1, [0, 0]);
  prop.hit([1, 0]);
  prop.hit([2, 0]);

  expect(prop.damage.length).toBe(2);
});

it('Path #3.1: Sink a horizontal boat', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[2], player, 0, [0, 0]);
  prop.hit([0, 0]);
  prop.hit([0, 1]);
  prop.hit([0, 2]);
  expect(prop.isSunk()).toBe(true);
});

it('Path #3.2: Sink a vertical boat', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[2], player, 1, [0, 0]);
  prop.hit([0, 0]);
  prop.hit([1, 0]);
  prop.hit([2, 0]);
  expect(prop.isSunk()).toBe(true);
});

it('Path #3.3: boat isn\'t sinked', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[2], player, 0, [0, 0]);
  prop.hit([0, 0]);
  prop.hit([1, 0]);
  prop.hit([2, 0]);
  expect(prop.isSunk()).toBe(false);
});

it('Path #3.4: single boat sinked', () => {
  const player = createTestPlayer();
  const prop = new Ship(Ships[0], player, 0, [0, 0]);
  prop.hit([0, 0]);
  prop.hit([0, 1]);
  expect(prop.isSunk()).toBe(true);
});
