import Direction from "../objects/Direction";

let dirIndex = 0;

export function getDirIndex() {
  return Direction.list[dirIndex];
}

export function rotateShip() {
  dirIndex += 1;
  if (dirIndex >= Direction.list.length) {
    dirIndex = 0;
  }
}
