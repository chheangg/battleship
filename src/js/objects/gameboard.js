/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

import Ship from './ship';

export default class GameBoard {
  constructor() {
    this.list = [];
    this.attacks = [];
    this.hits = [];
    this.misses = [];
  }

  // Check if two set of array contain similar elements
  static intersect(a, b) {
    return a.find((pos) => b
      .find((currentPos) => currentPos[0] === pos[0] && currentPos[1] === pos[1]));
  }

  // Return false if ship body is over 9 (which is over the board boundary)
  static hitBoundary(position) {
    return position.find((pos) => (pos[1] < 0) || (pos[1] > 9) || (pos[0] < 0) || (pos[0] > 9));
  }

  // Check if ship can be placed on a certain square, without collision
  // with the border or other ships.
  // takes all the ship as argument to check for collison
  isValid(position) {
    // Check if ship overlaps over any other ships
    const hasCollision = this.list
      .find((ship) => GameBoard.intersect(ship.position, position));
    // Check if the ship doesn't overlap with the boundary
    // Accept the current ship's position and axis
    const validBoundary = !GameBoard.hitBoundary(position);
    return !hasCollision && validBoundary;
  }

  // Place ship, build a ship, check if it is valid.
  place(ship, dir, coordinate) {
    const initializedShip = new Ship(ship, dir, coordinate);

    // Assign ships filename and other attributes in used for ship identification
    // and loading ship images
    initializedShip.attributes = ship;
    initializedShip.filename = ship.filename;

    if (!this.isValid(initializedShip.position)) {
      return false;
    }
    this.list.push(initializedShip);
    return initializedShip;
  }

  static swapTurn(gameObject) {
    const { playerOne, playerTwo } = gameObject;
    playerOne.isTurn = !playerOne.isTurn;
    playerTwo.isTurn = !playerTwo.isTurn;
  }

  // Check if attack is out of bound or already exist, then retry
  // If it is valid, checks if a ship is hit; modify ship if hit
  isValidAttack(cord) {
    const attackExist = this
      .attacks.find((attack) => attack[0] === cord[0] && attack[1] === cord[1]);
    return !attackExist;
  }

  receiveAttack(cord, gameObject) {
    const hit = this.list.find((ship) => ship.hit(cord));

    if (!this.isValidAttack(cord)) return false;

    GameBoard.swapTurn(gameObject);

    this.attacks.push(cord);

    if (hit) {
      this.hits.push(cord);
      return 'hit';
    }

    this.misses.push(cord);
    return 'miss';
  }
}
