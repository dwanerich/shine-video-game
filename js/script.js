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
    bgMusic.play().catch(() => {
      console.warn("Playback blocked until user interacts.");
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
});
