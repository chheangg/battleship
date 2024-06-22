import ShipType from "../../objects/ShipType";
import { getDirIndex } from "../direction";
import { withEventListener, getBoardBoxes } from "../utilities";
import { cleanupAnimation, addShipHoverAnimation } from "../animation";
import Coordinate from "../../objects/Coordinate";

const firstPlayerBoard = [];
const secondPlayerBoard = [];
export const animationEvents = [];

// Ship logical placement function onto the player's board
function placeShip(player, ship, cord) {
  const dir = getDirIndex();
  const initializedShip = player.board.place(ship, dir, cord);
  if (!initializedShip) return false;
  return initializedShip;
}

export function depopulatePlacementEvent(player) {
  if (player.isTurn) {
    for (const fn of firstPlayerBoard) {
      fn();
    }
    firstPlayerBoard.splice(0, firstPlayerBoard.length);
  } else {
    for (const fn of secondPlayerBoard) {
      fn();
    }
    secondPlayerBoard.splice(0, secondPlayerBoard.length);
  }
}

export function exitPlacementEvent(player) {
  cleanupAnimation(player);
  depopulatePlacementEvent(player);
}

// Placement Event
function placementEvent(event, gameObject, player) {
  const playerShips = player.board.list;
  const rawCord = event.target.dataset.pos
    .split(",")
    .map((x) => Number.parseInt(x, 10));

  const cord = new Coordinate(rawCord[0], rawCord[1]);

  const ship = ShipType.list[playerShips.length];

  const isShipValid = placeShip(player, ship, cord);
  if (!isShipValid) return;

  exitPlacementEvent(player);
  // Call main loop
  gameObject.cb(gameObject.isMultiplayer, true);
}

// Add placement event to all cell
export function populatePlacementEvent(gameObject, boardBoxes, player) {
  // set a time out so that animation event executes first
  // to remove all animation, within the call stack;
  const eventRef = (event) => {
    setTimeout(() => placementEvent(event, gameObject, player), 0);
  };
  for (const box of boardBoxes) {
    if (player.isTurn) {
      firstPlayerBoard.push(withEventListener(box, "click", eventRef));
    } else {
      secondPlayerBoard.push(withEventListener(box, "click", eventRef));
    }
  }
}

export function enterPlacementEvent(gameObject, player) {
  if (player.isBot) return;
  const boardBoxes = getBoardBoxes(player);

  populatePlacementEvent(gameObject, boardBoxes, player);
  addShipHoverAnimation(boardBoxes, player);
}
