import { renderFOW, unrenderFOW } from '../render/board';
import { renderShips, unrenderShips } from '../render/ship';
import { Ships } from '../../objects/ship';
import { dirs } from '../direction';
import addPassDelay from '../pass';

const maxShip = 5;
function botSetup(player) {
  while (player.board.list.length < 5) {
    const shipIndex = player.board.list.length;
    const ship = Ships[shipIndex];
    const cord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const dirIndex = Math.floor(Math.random() * 4);
    const dir = dirs[dirIndex];
    player.board.place(ship, dir, cord);
  }
}

function firstPlayerSetup(gameObject) {
  const { playerOne, playerTwo, cb } = gameObject;
  if (!playerOne.isBot) {
    renderShips(playerOne);
    unrenderFOW(playerOne);
    unrenderShips(playerTwo);
    renderFOW(playerTwo);
  } else {
    // Initialize bot
    botSetup(playerOne);
    cb(false, true);
  }
}

function secondPlayerSetup(gameObject, numOfShipsPlayerTwo) {
  const { playerOne, playerTwo, cb } = gameObject;
  // Depopulate left board events
  if (!playerTwo.isBot) {
    if (numOfShipsPlayerTwo === 0 && !playerOne.isBot) {
      if (gameObject.isMultiplayer) {
        addPassDelay();
      }
    }
    unrenderShips(playerOne);
    renderFOW(playerOne);
    // Unload Fog of War
    unrenderFOW(playerTwo);
    renderShips(playerTwo);
  } else {
    // Initialize bot
    botSetup(playerTwo);
    cb();
  }
}

export default function setupPlacementMode(gameObject, player) {
  const numOfShips = player.board.list.length;
  if (numOfShips !== maxShip) {
    if (player.isTurn) {
      firstPlayerSetup(gameObject);
    } else {
      secondPlayerSetup(gameObject);
    }
    return false;
  }

  return true;
}
