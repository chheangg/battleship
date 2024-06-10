/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

import Ship from './Ship';

/**
 * Direction Enums
 * 0: x-pos
 * 1: y-neg
 * 2: x-neg
 * 3: y-pos
 */

export default class GameBoard {
  constructor(gameObject, player) {
    this.list = [];
    this.attacks = [];
    this.hits = [];
    this.misses = [];
    this.player = player;
    this.gameObject = gameObject;
  }

  // Check if two set of array contain similar elements
  static intersect(a, b) {
    return a.find((pos) => b
      .find((currentPos) => currentPos.x === pos.x && currentPos.y === pos.y));
  }

  // Return false if ship body is over 9 (which is over the board boundary)
  static hitBoundary(position) {
    return position.find((pos) => (pos.x < 0) || (pos.y > 9) || (pos.x < 0) || (pos.y > 9));
  }

  // Check if ship can be placed on a certain square, without collision
  // with the border or other ships.
  // takes all the ship as argument to check for collison
  isValid(position) {
    if (!position.length) return false;
    // Check if ship overlaps over any other ships;
    const hasCollision = this.list
      .find((ship) => GameBoard.intersect(ship.position, position));
    // Check if the ship doesn't overlap with the boundary
    // Accept the current ship's position and axis
    const validBoundary = !GameBoard.hitBoundary(position);
    return !hasCollision && validBoundary;
  }

  /**
 *
 * @param {*} ship - Uses the Ship enums in objects/Ship.js
 * @param {*} dir - Uses the Direction enums // MUST BE REFACTORED!
 * @param {*} coordinate - Uses the Coordinate [0, 1] // MUST BE REFACTORED!
 * @returns
 */
  place(ship, dir, coordinate) {
    const initializedShip = new Ship(ship, this.player, dir, coordinate);

    if (!initializedShip || !this.isValid(initializedShip.position)) {
      return false;
    }

    this.list.push(initializedShip);
    return initializedShip;
  }

  swapTurn() {
    const { playerOne, playerTwo } = this.gameObject;
    playerOne.isTurn = !playerOne.isTurn;
    playerTwo.isTurn = !playerTwo.isTurn;
  }

  // Check if attack is out of bound or already exist, then retry
  // If it is valid, checks if a ship is hit; modify ship if hit
  isValidAttack(cord) {
    const attackExist = this
      .attacks.find((attackCord) => attackCord.x === cord.x && attackCord.y === cord.y);
    return !attackExist;
  }

  receiveAttack(cord) {
    const receiveHit = this.list.find((ship) => ship.hit(cord));

    if (!this.isValidAttack(cord)) return false;

    this.swapTurn();

    this.attacks.push(cord);

    if (receiveHit) {
      this.hits.push(cord);
      return true;
    }

    this.misses.push(cord);
    return false;
  }
}
