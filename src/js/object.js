/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

function intersect(a, b) {
  return a.find((pos) => b
    .find((currentPos) => currentPos[0] === pos[0] && currentPos[1] === pos[1]));
}

export const Ships = {
  patrol: {
    name: 'Patrol',
    length: 2,
  },
  submarine: {
    name: 'Submarine',
    length: 3,
  },
  destroyer: {
    name: 'Destroyer',
    length: 3,
  },
  battleship: {
    name: 'Battleship',
    length: 4,
  },
  carrier: {
    name: 'Carrier',
    length: 5,
  },
};

// Return false if ship body is over 9 (which is over the board boundary)
const hitBoundary = (position, axis) => {
  switch (axis) {
    case 'horizontal':
      return position.find((pos) => (pos[1] > 9));
    case 'vertical':
      return position.find((pos) => (pos[0] > 9));
    default:
      throw Error('Invalid axis');
  }
};

// Check if ship can be placed on a certain square, without collision
// with the border or other ships.
// takes all the ship as argument to check for collison
function isValid(ships, position, axis) {
  // Check if ship overlaps over any other ships
  const hasCollision = ships
    .find((ship) => intersect(ship.position, position));
  // Check if the ship doesn't overlap with the boundary
  // Accept the current ship's position and axis
  const validBoundary = !hitBoundary(position, axis);
  return !hasCollision && validBoundary;
}

// Takes coordinate, axis, and length, and build ship on a certain cell position
function buildShip(length, axis, coordinate) {
  const start = [...coordinate];
  const body = Array(length)
    .fill()
    .map(() => {
      if (axis === 'horizontal') {
        return [start[0], start[1]++];
      }
      return [start[0]++, start[1]];
    });
  return body;
}

// Function Constructor for ship
function Ship(ship, axis, coordinate) {
  const { length } = ship;
  const damage = [];
  // Iniitialize ship with a utility function buildShip
  const position = buildShip(ship.length, axis, coordinate);

  // Take a cord and check if cord hits any body cord
  function hit(value) {
    const isHit = position.some((pos) => {
      const matchHitPos = value[0] === pos[0] && value[1] === pos[1];
      if (matchHitPos) {
        damage.push(value);
      }
      return matchHitPos;
    });
    return isHit;
  }

  // Damage return true of damage length is equal to body length
  function isSunk() {
    return damage.length === length;
  }

  return {
    length,
    damage,
    axis,
    position,
    hit,
    isSunk,
  };
}

function Gameboard() {
  const list = [];
  const attacks = [];
  const hits = [];
  const misses = [];

  // Place ship, should actually move this logic somewhere else lol!
  function place(ship, axis, coordinate) {
    const initializedShip = Ship(ship, axis, coordinate);

    if (!isValid(list, initializedShip.position, axis)) {
      return undefined;
    }
    list.push(initializedShip);
    return initializedShip;
  }

  function receiveAttack(cord) {
    const isExist = attacks.some((attack) => attack[0] === cord[0] && attack[1] === cord[1]);
    const hit = list.some((ship) => ship.hit(cord));
    if (isExist) {
      return false;
    }
    Player.changeTurn();
    attacks.push(cord);
    if (hit) {
      hits.push(cord);
      return 'hit';
    }
    misses.push(cord);
    return 'miss';
  }

  return {
    list,
    hits,
    misses,
    attacks,
    place,
    receiveAttack,
  };
}

function PlayerObj(isBot) {
  function decideTurn() {
    if (Player.list[0]) {
      return false;
    }
    return true;
  }

  function botEval(player) {
    const rand = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    let attackExist;
    if (player.board.attacks[0]) {
      attackExist = player.board.attacks.every((attempt) => {
        if (attempt[0] === rand[0] && attempt[1] === rand[1]) {
          return true;
        }
        return false;
      });
    }
    if (attackExist === true) {
      botEval();
    }
    return rand;
  }

  function attack(player, coordinate) {
    if (isBot === false) {
      return player.board.receiveAttack(coordinate);
    }
    if (isBot === true) {
      const cord = botEval(player);
      const state = player.board.receiveAttack(cord);
      if (state) {
        return {
          cord,
          state,
        };
      }
      attack(player);
    }
  }

  return {
    isTurn: decideTurn(),
    board: Gameboard(),
    attack,
    isBot,
  };
}
const Player = (function handler() {
  const list = [];
  function create(isBot) {
    const obj = PlayerObj(isBot);
    list.push(obj);
    return obj;
  }
  function clear() {
    list.splice(0);
  }

  function changeTurn() {
    list.forEach((obj) => {
      if (obj.isTurn === true) {
        obj.isTurn = false;
        return;
      }
      obj.isTurn = true;
    });
  }
  return {
    list, changeTurn, create, clear,
  };
}());
// eslint-disable-next-line import/prefer-default-export
export { Ship, Gameboard, Player };
