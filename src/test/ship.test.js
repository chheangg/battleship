/* eslint-disable no-undef */
import { Ship, Ships } from '../js/object';

it('Path #1.1: Create main object horizontally', () => {
  expect(Ship(Ships.battleship, 'horizontal', [0, 0]))
    .toMatchObject({
      length: 4,
      damage: [],
      axis: 'horizontal',
      position: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
    });
});

it('Path #1.2: Create main object vertically', () => {
  expect(Ship(Ships.battleship, 'vertical', [0, 0]))
    .toMatchObject({
      length: 4,
      damage: [],
      axis: 'vertical',
      position: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
    });
});

it('Path #1.3: Create a small object', () => {
  expect(Ship(Ships.patrol, 'horizontal', [0, 0]))
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

it('Path #2.1: Damage an object horziontally', () => {
  const prop = Ship(Ships.battleship, 'horizontal', [0, 0]);
  prop.hit([0, 1]);

  expect(prop.damage).toEqual([[0, 1]]);
});

it('Path #2.2: Damage an object vertically', () => {
  const prop = Ship(Ships.battleship, 'vertical', [0, 0]);
  prop.hit([1, 0]);

  expect(prop.damage).toEqual([[1, 0]]);
});

it('Path #2.3: Hit is out of range, horizontal object is fine', () => {
  const prop = Ship(Ships.submarine, 'horizontal', [0, 0]);
  prop.hit([0, 4]);

  expect(prop.damage).toEqual([]);
});

it('Path #2.4: Hit is out of range, vertical object is fine', () => {
  const prop = Ship(Ships.submarine, 'horizontal', [0, 0]);
  prop.hit([4, 0]);

  expect(prop.damage).toEqual([]);
});

it('Path #2.5: Check damage', () => {
  const prop = Ship(Ships.battleship, 'vertical', [0, 0]);
  prop.hit([1, 0]);
  prop.hit([2, 0]);

  expect(prop.damage.length).toBe(2);
});

it('Path #3.1: Sink a horizontal boat', () => {
  const prop = Ship(Ships.submarine, 'horizontal', [0, 0]);
  prop.hit([0, 0]);
  prop.hit([0, 1]);
  prop.hit([0, 2]);
  expect(prop.isSunk()).toBe(true);
});

it('Path #3.2: Sink a vertical boat', () => {
  const prop = Ship(Ships.submarine, 'vertical', [0, 0]);
  prop.hit([0, 0]);
  prop.hit([1, 0]);
  prop.hit([2, 0]);
  expect(prop.isSunk()).toBe(true);
});

it('Path #3.3: boat isn\'t sinked', () => {
  const prop = Ship(Ships.submarine, 'horizontal', [0, 0]);
  prop.hit([0, 0]);
  prop.hit([1, 0]);
  prop.hit([2, 0]);
  expect(prop.isSunk()).toBe(false);
});

it('Path #3.4: single boat sinked', () => {
  const prop = Ship(Ships.patrol, 'horizontal', [0, 0]);
  prop.hit([0, 0]);
  prop.hit([0, 1]);
  expect(prop.isSunk()).toBe(true);
});
