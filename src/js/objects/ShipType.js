export default class ShipType {
  static Patrol = {
    name: 'patrol',
    filename: 'pa',
    length: 2,
    order: 1,
  };

  static Submarine = {
    name: 'submarine',
    filename: 'sb',
    length: 3,
    order: 2,
  };

  static Destroyer = {
    name: 'destroyer',
    filename: 'de',
    length: 3,
    order: 3,
  };

  static Battleship = {
    name: 'battleship',
    filename: 'ba',
    length: 4,
    order: 4,
  };

  static Carrier = {
    name: 'carrier',
    filename: 'ac',
    length: 5,
    order: 5,
  };

  static list = [
    this.Patrol,
    this.Submarine,
    this.Destroyer,
    this.Battleship,
    this.Carrier,
  ];
}
