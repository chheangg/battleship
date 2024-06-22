/* eslint-disable no-undef */
import { createTestPlayer } from "../js/utilities";
import Ship from "../js/objects/Ship";
import Coordinate from "../js/objects/Coordinate";
import Direction from "../js/objects/Direction";
import ShipType from "../js/objects/ShipType";

it("Path #1.1: Create main object horizontally", () => {
  const player = createTestPlayer();
  expect(
    new Ship(
      ShipType.Battleship,
      player,
      Direction.PositiveX,
      new Coordinate(0, 0),
    ),
  ).toMatchObject({
    length: 4,
    damage: [],
    dir: Direction.PositiveX,
    position: [
      new Coordinate(0, 0),
      new Coordinate(1, 0),
      new Coordinate(2, 0),
      new Coordinate(3, 0),
    ],
  });
});

it("Path #1.2: Create main object vertically", () => {
  const player = createTestPlayer();
  expect(
    new Ship(
      ShipType.Battleship,
      player,
      Direction.PositiveY,
      new Coordinate(0, 0),
    ),
  ).toMatchObject({
    length: 4,
    damage: [],
    dir: Direction.PositiveY,
    position: [
      new Coordinate(0, 0),
      new Coordinate(0, 1),
      new Coordinate(0, 2),
      new Coordinate(0, 3),
    ],
  });
});

it("Path #1.3: Create a small object", () => {
  const player = createTestPlayer();
  expect(
    new Ship(
      ShipType.Patrol,
      player,
      Direction.PositiveX,
      new Coordinate(0, 0),
    ),
  ).toMatchObject({
    length: 2,
    damage: [],
    dir: Direction.PositiveX,
    position: [new Coordinate(0, 0), new Coordinate(1, 0)],
  });
});

it("Path #2.1: Damage an object horziontally", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Battleship,
    player,
    Direction.PositiveX,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(1, 0));

  expect(prop.damage).toEqual([new Coordinate(1, 0)]);
});

it("Path #2.2: Damage an object vertically", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Battleship,
    player,
    Direction.PositiveY,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(0, 1));

  expect(prop.damage).toEqual([new Coordinate(0, 1)]);
});

it("Path #2.3: Hit is out of range, horizontal object is fine", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Destroyer,
    player,
    Direction.PositiveX,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(4, 0));

  expect(prop.damage).toEqual([]);
});

it("Path #2.4: Hit is out of range, vertical object is fine", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Destroyer,
    player,
    Direction.PositiveX,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(0, 4));

  expect(prop.damage).toEqual([]);
});

it("Path #2.5: Check damage", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Battleship,
    player,
    Direction.PositiveY,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(0, 1));
  prop.hit(new Coordinate(0, 2));

  expect(prop.damage.length).toBe(2);
});

it("Path #3.1: Sink a horizontal boat", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Destroyer,
    player,
    Direction.PositiveX,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(0, 0));
  prop.hit(new Coordinate(1, 0));
  prop.hit(new Coordinate(0, 0));
  expect(prop.isSunk()).toBe(true);
});

it("Path #3.2: Sink a vertical boat", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Destroyer,
    player,
    Direction.PositiveY,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(0, 0));
  prop.hit(new Coordinate(0, 1));
  prop.hit(new Coordinate(0, 2));
  expect(prop.isSunk()).toBe(true);
});

it("Path #3.3: boat isn't sinked", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Destroyer,
    player,
    Direction.PositiveX,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(0, 0));
  prop.hit(new Coordinate(0, 1));
  prop.hit(new Coordinate(0, 2));
  expect(prop.isSunk()).toBe(false);
});

it("Path #3.4: single boat sinked", () => {
  const player = createTestPlayer();
  const prop = new Ship(
    ShipType.Patrol,
    player,
    Direction.PositiveX,
    new Coordinate(0, 0),
  );
  prop.hit(new Coordinate(0, 0));
  prop.hit(new Coordinate(1, 0));
  expect(prop.isSunk()).toBe(true);
});
