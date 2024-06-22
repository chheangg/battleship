/**
 * 0: x-pos
 * 1: y-neg
 * 2: x-neg
 * 3: y-pos
 */

export default class Direction {
  static PositiveX = 0;

  static NegativeY = 1;

  static NegativeX = 2;

  static PositiveY = 3;

  static list = [
    this.PositiveX,
    this.NegativeY,
    this.NegativeX,
    this.PositiveY,
  ];
}
