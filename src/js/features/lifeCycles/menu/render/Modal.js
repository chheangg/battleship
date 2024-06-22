import '@/style/name-form-modal.scss';
import closeBtn from '@/assets/close.svg';

export const singlePlayerModal = `
  <div class="name-modal-wrapper">
    <div class="name-form-container">
      <button class="close-btn"><img src="${closeBtn}" alt="close" /></button>
      <h3>Enter Your Name</h3>
      <form>
        <label for="player">Playername</label>
        <input id="player" />
      </form>
      <div class="name-form-btn-wrapper">
        <button class="name-form-btn">Play</button>
      </div>
    </div>
  </div>
`;

export const multiPlayerModal = `
<div class="name-modal-wrapper">
  <div class="name-form-container">
    <button class="close-btn"><img src="${closeBtn}" alt="close" /></button>
    <h3>Enter Your Name</h3>
    <form>
      <label for="first-player">First Player</label>
      <input id="first-player" />
      <label for="second-player">Second Player</label>
      <input id="second-player" />
    </form>
    <div class="name-form-btn-wrapper">
      <button class="name-form-btn">Play</button>
    </div>
  </div>
</div>
`;
