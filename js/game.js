let currentStage = 'practice';

document.querySelectorAll('.level-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (!button.disabled) {
      currentStage = button.dataset.stage;
      document.getElementById('levelSelect').style.display = 'none';
      document.getElementById('performance').style.display = 'block';
      document.querySelector('.performance-title').textContent = `Stage: ${button.textContent}`;
    }
  });
});
