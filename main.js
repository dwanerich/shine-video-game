function createSparkle(x, y) {
  console.log('Creating sparkle at:', x, y); // Debug log
  const sparkle = document.createElement('img');
  sparkle.src = './assets/sparkle.png';
  sparkle.className = 'sparkle';
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  const container = document.getElementById('sparkle-container');
  if (container) {
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  } else {
    console.error('Sparkle container not found');
  }
}

document.addEventListener('click', (e) => {
  createSparkle(e.clientX, e.clientY);
});
