function createSparkle(x, y) {
  const sparkle = document.createElement('img');
  sparkle.src = './assets/sparkle.png'; // ✅ matches file path
  sparkle.className = 'sparkle';
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  document.getElementById('sparkle-container').appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}

// Trigger on click (you can replace this with hover or animation later)
document.addEventListener('click', (e) => {
  createSparkle(e.clientX, e.clientY);
});
