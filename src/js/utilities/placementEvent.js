import { shipOrders } from '../pageLoad';

// Ship logical placement function onto the player's board
function initializeShip(player, ship, cord) {
  const dir = document.querySelector('.dir-option:checked').value;
  player.board.place(ship, dir, cord);
}

// Placement Event
function placementEvent(event, gameObject, player, cb) {
  const playerShips = player.board.list;
  const cord = event.target.dataset.pos.split(',')
    .map((x) => parseInt(x, 10));
  initializeShip(player, shipOrders[playerShips.length], cord);
  cb(gameObject.isMultiplayer, true);
}

// Add placement event to all cell
function addPlacementEvent(add, gameObject, boardBoxes, player, cb) {
  // set a time out so that animation event executes first
  // to remove all animation, within the call stack;
  const eventListener = (event) => {
    setTimeout(() => placementEvent(event, gameObject, player, cb), 0);
  };
  boardBoxes.forEach((box) => {
    // eslint-disable-next-line no-unused-expressions
    if (!add) {
      box.removeEventListener('click', eventListener);
    } else {
      box.addEventListener('click', eventListener);
    }
  });
}

export default addPlacementEvent;
