import renderGameBoard from "./render/renderBoard";
import renderPlacementOption from "./render/renderPlacementOption";

export default function initializeBoard(gameObject) {
  const placementOptionContainer = renderPlacementOption(gameObject);
  renderGameBoard(gameObject, placementOptionContainer);
}
