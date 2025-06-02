// === RHYTHM GAME ENGINE (Pulse-Tap) ===

let audio;
let beatInterval;
let score = 0;

// DOM elements
const startBtn = document.getElementById('startButton');

// Game timing
const BPM = 100; // Adjust tempo
const beatDuration = 60000 / BPM;

// Setup visuals
const beatContainer = document.createElement('div');
beatContainer.classList.add('beat-container');
document.body.appendChild(beatContainer);

function spawnBeat() {
  const beat = document.createElement('div');
  beat.classList.add('beat-circle');

  // On click/tap
  beat.addEventListener('click', () => {
    beat.classList.add('hit');
    score += 100;
    console.log("Score:", score);
    beat.remove();
  });

  // Auto remove
  setTimeout(() => beat.remove(), beatDuration + 300);

  beatContainer.appendChild(beat);
}

function startGame() {
  if (!audio) {
    audio = new Audio('/assets/music-track.mp3');
    audio.volume = 0.8;
  }

  audio.play();

  // Beat timing loop
  beatInterval = setInterval(() => {
    spawnBeat();
  }, beatDuration);
}

startBtn.addEventListener('click', () => {
  startGame();
});
