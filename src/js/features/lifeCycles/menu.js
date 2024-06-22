import renderMainScreen from '../render/menu';
import populateMenuEvent from './gameObjectSetup';

/**
 *
 * @param {*} gameObject - Central game state object
 */
export default function initializeMenu(mainLoopCb) {
  renderMainScreen();
  populateMenuEvent(mainLoopCb);
}
