import renderMenuTemplate from "./render/renderMenuTemplate";
import populateMenuEvent from "./gameObjectSetup";

/**
 *
 * @param {*} gameObject - Central game state object
 */
export default function initializeMenu(mainLoopCb) {
  renderMenuTemplate();
  populateMenuEvent(mainLoopCb);
}
