const combo = ['ArrowLeft', 'ArrowUp', 'KeyO', 'ArrowRight'];
let playerInput = [];
let score = 0;

document.addEventListener('keydown', (e) => {
  playerInput.push(e.code);

  // Trim input to combo length
  if (playerInput.length > combo.length) {
    playerInput.shift();
  }

  checkCombo();
});

function checkCombo() {
  const match = combo.every((key, i) => key === playerInput[i]);

  const feedback = document.getElementById('feedback');
  const shineFill = document.getElementById('shine-fill');
  const comboFill = document.getElementById('combo-fill');

  if (match) {
    feedback.textContent = 'SHINING!';
    score += 1;

    // Fill shine bar
    const shinePercent = Math.min(score * 10, 100);
    shineFill.style.width = shinePercent + '%';

    // Reset combo bar for now
    comboFill.style.width = (score * 5) + '%';

    playerInput = []; // reset for next combo
  } else {
    feedback.textContent = '';
  }
}
