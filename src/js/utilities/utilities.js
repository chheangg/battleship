/* eslint-disable import/prefer-default-export */
import Game from '../objects/game';
import { multiplayerInit } from '../objects/player';

// utility function for initializing Test's game object
export function getTestGameObject() {
  const { playerOne, playerTwo } = multiplayerInit();
  return new Game(true, playerOne, playerTwo);
}

export function removeAllEventListener(element) {
  const oldElement = element;
  const newElement = element.cloneNode(true);
  if (oldElement.parentNode) {
    oldElement.parentNode.replaceChild(newElement, oldElement);
  }
}
