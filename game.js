const combo = ['ArrowLeft', 'ArrowUp', 'KeyO', 'ArrowRight'];
let playerInput = [];
let score = 0;

document.addEventListener('keydown', (e) => {
  playerInput.push(e.code);

  // Limit array to last N inputs
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

    const shinePercent = Math.min(score * 10, 100);
    shineFill.style.width = shinePercent + '%';

    comboFill.style.width = Math.min(score * 5, 100) + '%';

    playerInput = [];
  } else {
    feedback.textContent = '';
  }
}
