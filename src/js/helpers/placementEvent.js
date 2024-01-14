import { Ships } from '../objects/ship';
import { withEventListener } from './utilities';

let firstPlayerBoard = [];
let secondPlayerBoard = [];

// Ship logical placement function onto the player's board
function initializeShip(player, ship, cord) {
  const dir = document.querySelector('.dir-option:checked').value;
  player.board.place(ship, dir, cord);
}

// Placement Event
function placementEvent(event, gameObject, player) {
  const playerShips = player.board.list;
  const cord = event.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  const ship = Ships[playerShips.length];

  initializeShip(player, ship, cord);
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

function removePlacementEvent(player) {
  if (player.isTurn) {
    firstPlayerBoard.forEach((fn) => fn());
    firstPlayerBoard = [];
  } else {
    secondPlayerBoard.forEach((fn) => fn());
    secondPlayerBoard = [];
  }
}

export {
  addPlacementEvent,
  removePlacementEvent,
};
