import { Ships } from '../objects/ship';
import { dirs, getDirIndex } from './imageLoader';
import { withEventListener } from './utilities';
import { animationCleanup } from './animation';

const firstPlayerBoard = [];
const secondPlayerBoard = [];
export const animationEvents = [];

// Ship logical placement function onto the player's board
function initializeShip(player, ship, body) {
  const dir = dirs[getDirIndex()];
  const initializedShip = player.board.place(ship, dir, body);
  return initializedShip;
}

function removePlacementEvent(player) {
  if (player.isTurn) {
    firstPlayerBoard.forEach((fn) => fn());
    firstPlayerBoard.splice(0, firstPlayerBoard.length);
  } else {
    secondPlayerBoard.forEach((fn) => fn());
    secondPlayerBoard.splice(0, secondPlayerBoard.length);
  }
}

// Placement Event
function placementEvent(event, gameObject, player) {
  const playerShips = player.board.list;
  const cord = event.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  const ship = Ships[playerShips.length];

  initializeShip(player, ship, cord);
  animationCleanup(player);
  removePlacementEvent(player);
  gameObject.cb(gameObject.isMultiplayer, true);
}

// Add placement event to all cell
function addPlacementEvent(gameObject, boardBoxes, player) {
  // set a time out so that animation event executes first
  // to remove all animation, within the call stack;
  const eventRef = (event) => {
    setTimeout(() => placementEvent(event, gameObject, player), 0);
  };
  boardBoxes.forEach((box) => {
    if (player.isTurn) {
      firstPlayerBoard.push(withEventListener(box, 'click', eventRef));
    } else {
      secondPlayerBoard.push(withEventListener(box, 'click', eventRef));
    }
    // eslint-disable-next-line no-unused-expressions
  });
}

export {
  addPlacementEvent,
  removePlacementEvent,
};
