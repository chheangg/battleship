/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
import _ from 'underscore';

/**
 * 0: x-pos
 * 1: y-neg
 * 2: x-neg
 * 3: y-pos
 */

export const Ships = [
  {
    name: 'patrol',
    filename: 'pa',
    length: 2,
    order: 1,
  },
  {
    name: 'submarine',
    filename: 'sb',
    length: 3,
    order: 2,
  },
  {
    name: 'destroyer',
    filename: 'de',
    length: 3,
    order: 3,
  },
  {
    name: 'battleship',
    filename: 'ba',
    length: 4,
    order: 4,
  },
  {
    name: 'carrier',
    filename: 'ac',
    length: 5,
    order: 5,
  },
];
export default class Ship {
  constructor(ship, player, dir, coordinate) {
    this.length = ship.length;
    this.dir = dir;
    this.coordinate = coordinate;
    this.position = [];
    this.damage = [];
    this.player = player;
    this.filename = ship.filename;
    this.attributes = ship;
    this.build();
  }

  static constructBody(start, length, dirIndex) {
    return Array(length)
      .fill()
      .map((_pos, index) => {
        switch (dirIndex) {
          case 0:
            return [start[0], start[1] + index];
          case 1:
            return [start[0] + index, start[1]];
          case 2:
            return [start[0], start[1] - index];
          case 3:
            return [start[0] - index, start[1]];
          default:
            throw new Error('Error: Invalid Coord Index');
        }
      });
  }

  static isShipOverflowing(shipBody) {
    return shipBody
      .find((pos) => (pos[1] < 0) || (pos[1] > 9) || (pos[0] < 0) || (pos[0] > 9));
  }

  static isOverlapping(player, shipBody) {
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

    const start = [...this.coordinate];
    const body = Ship.constructBody(start, this.length, this.dir);

    const isShipValid = !Ship.isShipOverflowing(body) && !Ship.isOverlapping(this.player, body);
    if (!isShipValid) return 0;

    this.position = body;
    return body;
  }

  // Take a cord and check if cord hits any body cord
  hit(cord) {
    const isHit = this.position.some((pos) => {
      const matchHitPos = cord[0] === pos[0] && cord[1] === pos[1];
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
