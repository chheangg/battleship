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

  div.style.display = 'flex';
  div.style.flexDirection = 'column';
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
  const btn = document.createElement('button');

  btn.textContent = 'Start';
  btn.addEventListener('click', cb);
  btn.type = 'button';

  form.style.position = isMultiplayer ? 'grid' : 'flex';
  form.style.gridTemplateColumns = isMultiplayer ? '1fr 1fr' : '';

  if (isMultiplayer) {
    const playerOneInput = nameInputLabel('player-one-name', 'Enter Player One name');
    const playerTwoInput = nameInputLabel('player-two-name', 'Enter Player Two name');

    form.appendChild(playerOneInput);
    form.appendChild(playerTwoInput);
  } else {
    const playerInput = nameInputLabel('player-name');
    form.appendChild(playerInput);
  }

  form.appendChild(btn);

  return form;
}

// Generate name component
function nameComponent(isMultiplayer, cb) {
  const nameOverlay = document.createElement('div');
  const nameFormComponent = nameForm(isMultiplayer, cb);

  nameOverlay.style.backgroundColor = '#1d4ed8';
  nameOverlay.style.position = 'absolute';
  nameOverlay.style.top = '0';
  nameOverlay.style.bottom = '0';
  nameOverlay.style.left = '0';
  nameOverlay.style.right = '0';
  nameOverlay.style.display = 'flex';
  nameOverlay.style.justifyContent = 'center';
  nameOverlay.style.alignContent = 'center';

  nameOverlay.appendChild(nameFormComponent);
  return nameOverlay;
}

// As for player(s) name through constructing a form
// destroy the form after it is collected
export default function nameCollectStage(isMultiplayer, cb) {
  const body = document.querySelector('body');
  const nameFormComponent = nameComponent(isMultiplayer, () => {
    const names = [];
    if (isMultiplayer) {
      console.log(document.querySelector('.player-one-name'));
      const playerOneName = document.querySelector('.player-one-name').value;
      const playerTwoName = document.querySelector('.player-two-name').value;
      names.push(playerOneName);
      names.push(playerTwoName);
    } else {
      const playerName = document.querySelector('.player-name').value;
      names.push(playerName);
    }
    body.removeChild(nameFormComponent);
    cb(names);
  });
  body.appendChild(nameFormComponent);
}
