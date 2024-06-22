import GameBoard from "./gameBoard";
import { rotateShip } from "@/js/features/direction";

export default function renderGameBoard(gameObject, infoHeader) {
  document.body.innerHTML = GameBoard(gameObject, infoHeader);
  const rotateBtn = document.querySelector("#rotate-btn");
  rotateBtn.addEventListener("click", rotateShip);
}