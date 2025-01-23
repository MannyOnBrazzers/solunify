document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.querySelector(".header__mode");
  const rootElement = document.documentElement;

  const THEMES = {
    dark: "dark-mode",
    light: "light-mode",
  };

  const savedMode = localStorage.getItem("theme") || THEMES.dark;
  applyTheme(savedMode);

  modeToggle.addEventListener("click", () => {
    const newMode = rootElement.classList.contains(THEMES.dark)
      ? THEMES.light
      : THEMES.dark;
    applyTheme(newMode);
  });

  function applyTheme(mode) {
    rootElement.classList.remove(THEMES.dark, THEMES.light);
    rootElement.classList.add(mode);
    localStorage.setItem("theme", mode);
  }
});
