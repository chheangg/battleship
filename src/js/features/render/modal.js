import { singlePlayerModal, multiPlayerModal } from '../../template/nameFormModal';

function removeModal(event) {
  const nameModalWrapper = document.querySelector('.name-modal-wrapper');
  const closeBtn = document.querySelector('.close-btn img');
  if (event && (event.target !== nameModalWrapper && event.target !== closeBtn)) {
    return;
  }
  if (nameModalWrapper) {
    document.body.removeChild(nameModalWrapper);
  }
}

function loadModal(gameObject) {
  const { body } = document;
  const { isMultiplayer } = gameObject;

  const hasNameModalWrapperInDOM = document.querySelector('.name-modal-wrapper');

  if (hasNameModalWrapperInDOM) {
    removeModal();
  }

  body.insertAdjacentHTML('beforeend', isMultiplayer ? multiPlayerModal : singlePlayerModal);

  document.querySelector('.name-modal-wrapper').addEventListener('click', removeModal);
  document.querySelector('.close-btn').addEventListener('click', removeModal);
}

export { loadModal, removeModal };
