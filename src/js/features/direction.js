export const dirs = [0, 1, 2, 3];

let dirIndex = 0;

export function getDirIndex() { return dirIndex; }

export function rotateShip() {
  dirIndex += 1;
  if (dirIndex >= dirs.length) {
    dirIndex = 0;
  }
}
