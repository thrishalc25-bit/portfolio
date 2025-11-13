// Dark/Light Mode Toggle
const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-mode") ? "light" : "dark"
    );
  });

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }
}

// Simple animated text
const animatedText = document.querySelector(".animated-text");
if (animatedText) {
  const words = ["Thrishal C. Poojary", "a Developer", "a Designer", "a Learner"];
  let i = 0;
  setInterval(() => {
    animatedText.textContent = words[i];
    i = (i + 1) % words.length;
  }, 2500);
}
