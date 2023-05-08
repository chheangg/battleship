// Generate pass component
function passComponent() {
  const passOverlay = document.createElement('div');
  const passText = document.createElement('h1');

  passOverlay.style.backgroundColor = '#1d4ed8';
  passOverlay.style.position = 'absolute';
  passOverlay.style.top = '0';
  passOverlay.style.bottom = '0';
  passOverlay.style.left = '0';
  passOverlay.style.right = '0';
  passOverlay.style.display = 'flex';
  passOverlay.style.justifyContent = 'center';
  passOverlay.style.alignContent = 'center';

  passText.textContent = 'Pass to the next person!';

  passOverlay.appendChild(passText);
  return passOverlay;
}

// Select Body and append pass component for 3 seconds
export default function addPassDelay() {
  const body = document.querySelector('body');
  const passElement = passComponent();
  body.appendChild(passElement);
  setTimeout(() => body.removeChild(passElement), 100);
}
