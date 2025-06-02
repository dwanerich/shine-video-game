const dialogue = document.querySelector(".dialogue-text");
const choices = document.querySelectorAll(".story-btn");

choices[0].addEventListener("click", () => {
  // Player chose to stay on stage
  dialogue.textContent = "You take a breath. Your body remembers the beat. The music takes over. You move.";
  choices[0].style.display = "none";
  choices[1].style.display = "none";
});

choices[1].addEventListener("click", () => {
  // Player chose to run off
  dialogue.textContent = "You run backstage, heart pounding. A mentor catches your eye… 'You’re not done yet.'";
  choices[0].style.display = "none";
  choices[1].style.display = "none";
});
