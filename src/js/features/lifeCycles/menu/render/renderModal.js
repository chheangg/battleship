import { singlePlayerModal, multiPlayerModal } from "./Modal";

function unrenderModal(event) {
  const nameModalWrapper = document.querySelector(".name-modal-wrapper");
  const closeBtn = document.querySelector(".close-btn img");
  if (event && event.target !== nameModalWrapper && event.target !== closeBtn) {
    return;
  }
  if (nameModalWrapper) {
    document.body.removeChild(nameModalWrapper);
    a;
  }
}

function renderModal(gameObject) {
  const { body } = document;
  const { isMultiplayer } = gameObject;

  const hasNameModalWrapperInDOM = document.querySelector(
    ".name-modal-wrapper",
  );

  if (hasNameModalWrapperInDOM) {
    unrenderModal();
  }

  body.insertAdjacentHTML(
    "beforeend",
    isMultiplayer ? multiPlayerModal : singlePlayerModal,
  );

  document
    .querySelector(".name-modal-wrapper")
    .addEventListener("click", unrenderModal);
  document.querySelector(".close-btn").addEventListener("click", unrenderModal);
}

export { renderModal, unrenderModal };
