/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
export const dirs = ['x-pos', 'y-neg', 'x-neg', 'y-pos'];

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
  constructor(ship, dir, coordinate) {
    this.length = ship.length;
    this.dir = dir;
    this.coordinate = coordinate;
    this.position = [];
    this.buildShip();
    this.damage = [];
  }

  static buildShipCord(length, start, dir) {
    return Array(length)
      .fill()
      .map((_pos, index) => {
        switch (dir) {
          case 'x-pos':
            return [start[0], start[1] + index];
          case 'x-neg':
            return [start[0], start[1] - index];
          case 'y-pos':
            return [start[0] - index, start[1]];
          case 'y-neg':
            return [start[0] + index, start[1]];
          default:
            throw new Error('Error: Invalid Coord Index');
        }
      });
  }

  // Takes coordinate, axis, and length, and build ship on a certain cell position
  buildShip() {
    if (this.position.length > 0) {
      return;
    }
    const start = [...this.coordinate];
    const body = Ship.buildShipCord(this.length, start, this.dir);
    this.position = body;
  }

  // Take a cord and check if cord hits any body cord
  hit(value) {
    const isHit = this.position.some((pos) => {
      const matchHitPos = value[0] === pos[0] && value[1] === pos[1];
      if (matchHitPos) {
        this.damage.push(value);
      }
      return matchHitPos;
    });
    return isHit;
  }

  // Damage return true of damage length is equal to body length
  isSunk() {
    return this.damage.length === this.length;
  }
}

// // Takes coordinate, axis, and length, and build ship on a certain cell position
// function buildShip(length, axis, coordinate) {
//   const start = [...coordinate];
//   const body = Array(length)
//     .fill()
//     .map(() => {
//       if (axis === 'horizontal') {
//         return [start[0], start[1]++];
//       }
//       return [start[0]++, start[1]];
//     });
//   return body;
// }

// // Function Constructor for ship
// function Ship(ship, axis, coordinate) {
//   const { length } = ship;
//   const damage = [];
//   // Iniitialize ship with a utility function buildShip
//   const position = buildShip(ship.length, axis, coordinate);

//   // Take a cord and check if cord hits any body cord
//   function hit(value) {
//     const isHit = position.some((pos) => {
//       const matchHitPos = value[0] === pos[0] && value[1] === pos[1];
//       if (matchHitPos) {
//         damage.push(value);
//       }
//       return matchHitPos;
//     });
//     return isHit;
//   }

//   // Damage return true of damage length is equal to body length
//   function isSunk() {
//     return damage.length === length;
//   }

//   return {
//     length,
//     damage,
//     axis,
//     position,
//     hit,
//     isSunk,
//   };
// }
