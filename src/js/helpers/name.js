/* eslint-disable no-param-reassign */
// Generate name input and label
function nameInputLabel(className, text) {
  const div = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');

  input.className = className;

  if (!text) {
    label.textContent = 'Enter player name';
  } else {
    label.textContent = text;
  }

  div.classList.add('player-input');
  div.appendChild(label);
  div.appendChild(input);

  return div;
}

// Generate name form
// Generate a form, inputs, and a button
// A single input if singleplayer, otherwise make form grid-like and append two input
// Button accepts a callback that will remove the form and start the game
function nameForm(isMultiplayer, cb) {
  const form = document.createElement('form');
  const btnWrapper = document.createElement('div');
  const btn = document.createElement('button');

  btn.textContent = 'Start';
  btn.addEventListener('click', cb);
  btn.type = 'button';

  btnWrapper.classList.add('btn-wrapper');
  btnWrapper.appendChild(btn);

  form.classList.add(isMultiplayer ? 'multiplayer-input' : 'singleplayer-input');

  if (isMultiplayer) {
    const playerOneInput = nameInputLabel('player-one-name', 'Enter Player One name');
    const playerTwoInput = nameInputLabel('player-two-name', 'Enter Player Two name');

    form.appendChild(playerOneInput);
    form.appendChild(playerTwoInput);
  } else {
    const playerInput = nameInputLabel('player-name');
    form.appendChild(playerInput);
  }

  form.appendChild(btnWrapper);

  return form;
}

// Generate name component
export default function nameComponent(isMultiplayer, cb) {
  const nameOverlay = document.createElement('div');
  const nameFormComponent = nameForm(isMultiplayer, cb);

  nameOverlay.classList.add('input-page');

  nameOverlay.appendChild(nameFormComponent);
  return nameOverlay;
}
