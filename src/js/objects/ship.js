/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
import _ from 'underscore';
import Coordinate from './Coordinate';
import Direction from './Direction';

/**
 * 0: x-pos
 * 1: y-neg
 * 2: x-neg
 * 3: y-pos
 */

export default class Ship {
  constructor(ship, player, dir, coordinate) {
    this.length = ship.length;
    this.dir = dir;
    this.coordinate = coordinate;
    this.position = [];
    this.damage = [];
    this.player = player;
    this.filename = ship.filename;
    this.attributes = ship; // SHIP TYPE
    this.build();
  }

  constructBody(start) {
    const { length } = this.attributes;
    return Array(length)
      .fill()
      .map((_pos, index) => {
        switch (this.dir) {
          case Direction.PositiveX:
            return new Coordinate(start.x + index, start.y);
          case Direction.NegativeY:
            return new Coordinate(start.x, start.y - index);
          case Direction.NegativeX:
            return new Coordinate(start.x - index, start.y);
          case Direction.PositiveY:
            return new Coordinate(start.x, start.y + index);
          default:
            throw new Error('Error: Invalid Coord Index');
        }
      });
  }

  static isShipOverflowing(shipBody) {
    return shipBody
      .find((cord) => (cord.x < 0) || (cord.x > 9) || (cord.y < 0) || (cord.y > 9));
  }

  static isOverlapping(shipBody, player) {
    return player
      .board
      .list
      .some((playerShip) => playerShip
        .position.some((shipPos) => shipBody
          .some((bodyPos) => _.isEqual(bodyPos, shipPos))));
  }

  // Takes coordinate, axis, and length, and build ship on a certain cell position
  build() {
    if (this.position.length > 0) {
      return this.position;
    }

    const body = this.constructBody(this.coordinate);

    const isShipValid = !Ship.isShipOverflowing(body) && !Ship.isOverlapping(body, this.player);
    if (!isShipValid) return 0;

    this.position = body;
    return body;
  }

  // Take a cord and check if cord hits any body cord
  hit(cord) {
    const isHit = this.position.some((bodyCord) => {
      const matchHitPos = cord.x === bodyCord.x && cord.y === bodyCord.y;
      if (matchHitPos) {
        this.damage.push(cord);
      }
      return matchHitPos;
    });

    return isHit || false;
  }

  // Damage return true of damage length is equal to body length
  isSunk() {
    return this.damage.length === this.length;
  }
}
