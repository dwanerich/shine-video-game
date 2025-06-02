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
