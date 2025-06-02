// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  console.log("SHINE MODE loaded");

  // Example: Toggle avatar outfit
  const avatar = document.getElementById("avatar");
  const outfitBtn = document.getElementById("change-outfit");

  if (avatar && outfitBtn) {
    outfitBtn.addEventListener("click", () => {
      avatar.classList.toggle("outfit-alt");
    });
  }

  // Navigation logic (example)
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });

    const actionButtons = document.querySelectorAll(".perf-btn");

    actionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.getAttribute("data-action");
        triggerAvatarAction(action);
      });
    });

  });

  // Performance Mode Button Example
  const startBtn = document.getElementById("start-performance");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      alert("Performance Mode starting...");
      // Logic to switch to performance mode can go here
    });
  }

  // Add more interactivity here...
});
document.addEventListener("DOMContentLoaded", () => {
  const avatarWrapper = document.querySelector(".avatar-wrapper");
  const changeBtn = document.querySelector(".change-style");
  const startBtn = document.querySelector(".start-performance");
  const performanceMode = document.getElementById("performance-mode");
  const mainContent = document.querySelector(".main-content");
  const backButton = document.querySelector(".back-button");
  const bgMusic = document.getElementById("bgMusic");

  let currentStyle = 0;
  const avatarStyles = ["avatar_full_neon_puffer.png"];

  changeBtn.addEventListener("click", () => {
    currentStyle = (currentStyle + 1) % avatarStyles.length;
    document.querySelector(".avatar-static").src = `assets/avatar/${avatarStyles[currentStyle]}`;
  });

  startBtn.addEventListener("click", () => {
    mainContent.classList.add("hidden");
    performanceMode.classList.add("show");
    avatarWrapper.classList.add("glow");


    // Unlock audio with user gesture and play
    bgMusic.currentTime = 0;
   let audioCtx, analyser, source, dataArray;

startBtn.addEventListener("click", () => {
  mainContent.classList.add("hidden");
  performanceMode.classList.add("show");

  // Initialize AudioContext once unlocked by interaction
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    source = audioCtx.createMediaElementSource(bgMusic);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
  }

  bgMusic.currentTime = 0;
  bgMusic.play();
  audioCtx.resume();

  // Start glow loop
  animateGlow();
});

  });
    backButton.addEventListener("click", () => {
    performanceMode.classList.remove("show");
    mainContent.classList.remove("hidden");
    avatarWrapper.classList.remove("glow"); // removes glow
    bgMusic.pause();
    bgMusic.currentTime = 0;
});

  });

  function animateGlow() {
  const avatar = document.querySelector(".avatar-wrapper");

  function glowLoop() {
    requestAnimationFrame(glowLoop);

    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);
    const avg = dataArray.reduce((a, b) => a + b) / dataArray.length;

    const intensity = Math.min(1, avg / 100); // normalize
    avatar.style.boxShadow = `0 0 ${10 + intensity * 40}px rgba(255,42,173,${0.5 + intensity * 0.5})`;
  }

  glowLoop();
}

function triggerAvatarAction(action) {
  const avatar = document.querySelector(".avatar-wrapper");
  const sparkle = avatar.querySelector(".sparkle-burst");

  avatar.classList.remove("pose", "dance", "shine");
  void avatar.offsetWidth;
  avatar.classList.add(action);

  // Trigger sparkles
  sparkle.classList.remove("active");
  void sparkle.offsetWidth;
  sparkle.classList.add("active");
}


