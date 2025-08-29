const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
    themeToggle.textContent = "Dark Mode";
  } else {
    body.classList.remove("dark-mode");
    themeToggle.textContent = "Light Mode";
  }
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = !body.classList.contains("dark-mode");
  setTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
