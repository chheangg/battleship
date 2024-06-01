import { convertCordToIndex } from '../../utilities';
import { renderShip, getDirClassNameFromShip } from '../render/ship';
import { dirs, getDirIndex } from '../direction';
import Ship, { Ships } from '../../objects/ship';

function createShipPreview(player, cord) {
  const playerShips = player.board.list;

  const dirsIndex = getDirIndex();

  const shipIndex = playerShips.length;
  const shipType = Ships[shipIndex];

  const ship = new Ship(shipType, player, dirs[dirsIndex], cord);
  return ship;
}

export function shipWithdrawEvent(boardBoxes, player, cord) {
  const ship = createShipPreview(player, cord);
  const dirClassName = getDirClassNameFromShip(ship);
  const shipBody = ship.build();
  if (shipBody) {
    shipBody.forEach((shipCord) => {
      const boardIndex = convertCordToIndex(shipCord);
      const box = boardBoxes[boardIndex];
      box.style.backgroundImage = '';
      box.classList.remove(dirClassName);
    });
  }
}

// Function for animating ship preview everything it hovers onto a box or out of it
export function shipHoverEvent(boardBoxes, player, cord) {
  const ship = createShipPreview(player, cord);
  const shipBody = ship.build();
  if (shipBody) {
    renderShip(shipBody, boardBoxes, ship);
  }
}
