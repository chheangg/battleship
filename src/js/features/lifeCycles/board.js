import renderGameboard from "../render/board";
import renderPlacementOption from "../render/placementOption";

export default function initializeBoard(gameObject) {
  const placementOptionContainer = renderPlacementOption(gameObject);
  renderGameboard(gameObject, placementOptionContainer);
}
