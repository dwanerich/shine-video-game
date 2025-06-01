// ====================
// Rhythm Game Engine
// ====================

// 1. Setup
const tracks = [1, 2, 3, 4];
const stage = document.querySelector('.stage');
let score = 0;
let currentStage = 'practice';

const chart = [
  { time: 1000, track: 1 },
  { time: 1500, track: 3 },
  { time: 2000, track: 2 },
  { time: 2600, track: 4 },
  { time: 3100, track: 1 },
  { time: 3600, track: 3 },
  { time: 4100, track: 2 },
  { time: 4700, track: 4 }
];

// 2. Spawn Notes
function spawnNote(trackNumber) {
  const note = document.createElement('div');
  note.classList.add('note');
  note.dataset.track = trackNumber;
  note.style.left = `${(trackNumber - 1) * 70 + 10}px`;
  stage.appendChild(note);

  let top = 0;
  const interval = setInterval(() => {
    top += 4;
    note.style.top = top + 'px';

    if (top > 400) {
      clearInterval(interval);
      note.remove();
      showFeedback('Miss!', '#ff2aad');
    }
  }, 16);
}

// 3. Feedback and Scoring
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

// 4. Tap Input Detection
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

// 5. Start Game Logic
const startButton = document.getElementById('startButton');
const audio = document.getElementById('gameTrack');

startButton.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();

  const startTime = Date.now();

  chart.forEach((note, index) => {
    setTimeout(() => {
      spawnNote(note.track);

      if (index === chart.length - 1) {
        setTimeout(() => {
          document.getElementById('performanceComplete').style.display = 'block';
          document.getElementById('finalScoreText').textContent = `Your score: ${score}`;

          // 🔓 Unlock Pink Aura
          if (score >= 600 && !localStorage.getItem('aura-pink-unlocked')) {
            localStorage.setItem('aura-pink-unlocked', 'true');
            document.getElementById('unlockedItemName').textContent = 'Pink Aura';
            document.getElementById('unlockMessage').style.display = 'block';
          }

          // 🔓 Unlock Shine Finals stage
          if (score >= 800 && currentStage === 'nba') {
            localStorage.setItem('stage-finals-unlocked', 'true');
          }

        }, 2000); // delay to allow last note to drop
      }

    }, note.time);
  });

  startButton.disabled = true;
});

// 6. Replay Button
document.getElementById('replayButton').addEventListener('click', () => {
  score = 0;
  document.getElementById('score').textContent = 'Score: 0';
  document.getElementById('performanceComplete').style.display = 'none';
  document.getElementById('unlockMessage').style.display = 'none';
  document.getElementById('startButton').disabled = false;
  document.getElementById('feedback').textContent = 'Ready?';
});

// 7. Level Selection Logic
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

// 8. Unlock Shine Finals if previously earned
window.addEventListener('DOMContentLoaded', () => {
  const finalsBtn = document.querySelector('[data-stage="finals"]');
  if (localStorage.getItem('stage-finals-unlocked')) {
    finalsBtn.classList.remove('locked');
    finalsBtn.disabled = false;
  }
});
