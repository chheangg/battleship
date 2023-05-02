/* eslint-disable import/prefer-default-export */
import Game from './objects/game';
import { multiplayerInit } from './objects/player';

// utility function for initializing Test's game object
export function getTestGameObject() {
  const { playerOne, playerTwo } = multiplayerInit();
  return Game(true, playerOne, playerTwo);
}
