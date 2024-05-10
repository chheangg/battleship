/* eslint-disable import/prefer-default-export */
import Game from './objects/game';
import Player from './objects/player';

// utility function for initializing Test's game object
export function createTestGameObject() {
  return new Game(true);
}

export function createTestPlayer() {
  return new Player(null, true, true);
}

export function createTestGameBoard() {
  return createTestGameObject().playerOne.board;
}

export function withEventListener(element, eventName, handler) {
  element.addEventListener(eventName, handler);
  return () => element.removeEventListener(eventName, handler);
}

export function addEventToBeRemove(event, playerFnStack) {
  playerFnStack.push(event);
}

export function getBoardBoxes(player) {
  return document.querySelectorAll(`.${player.board.className} td`);
}

export function convertCordToIndex(cord) {
  return cord[0] * 10 + cord[1];
}
