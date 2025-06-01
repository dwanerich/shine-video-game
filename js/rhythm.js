const tracks = [1, 2, 3, 4];
const stage = document.querySelector('.stage');

function spawnNote(trackNumber) {
  const note = document.createElement('div');
  note.classList.add('note');
  note.dataset.track = trackNumber;
  note.style.left = `${(trackNumber - 1) * 70 + 10}px`;
  stage.appendChild(note);

  let top = 0;
  const interval = setInterval(() => {
    top += 4; // note speed
    note.style.top = top + 'px';

    if (top > 360) { // missed zone
      clearInterval(interval);
      note.remove();
      // Optionally trigger a "miss" here
    }
  }, 16);
}

// Test: spawn random notes every second
setInterval(() => {
  const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
  spawnNote(randomTrack);
}, 1000);

function showFeedback(text, color = '#ff2aad') {
  const feedback = document.getElementById('feedback');
  feedback.textContent = text;
  feedback.style.color = color;
  feedback.style.opacity = 1;

  setTimeout(() => {
    feedback.style.opacity = 0;
  }, 500);
}

function updateScore(amount) {
  score += amount;
  document.getElementById('score').textContent = `Score: ${score}`;
}

document.querySelectorAll('.tap-zone').forEach(zone => {
  zone.addEventListener('click', () => {
    const track = zone.dataset.track;
    const notes = document.querySelectorAll(`.note[data-track="${track}"]`);
    let hit = false;

    notes.forEach(note => {
      const noteTop = parseInt(note.style.top);

      if (noteTop > 300 && noteTop <= 340) {
        hit = true;
        showFeedback('Perfect!', '#00ff90');
        updateScore(100);
        note.remove();
      } else if (noteTop > 340 && noteTop <= 380) {
        hit = true;
        showFeedback('Good!', '#ffaa00');
        updateScore(50);
        note.remove();
      }
    });

    if (!hit) {
      showFeedback('Miss!', '#ff2aad');
    }
  });
});
