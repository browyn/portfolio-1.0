export function getPath() {
  return window.location.pathname;
}

export function isEven(num) {
  return num % 2 === 0;
}

export function initializeTheme() {
  const persistedTheme = localStorage.getItem("theme");

  if (persistedTheme) {
    document.documentElement.setAttribute("data-theme", persistedTheme);
  } else {
    const isDarkColorSheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isDarkColorSheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", isDarkColorSheme ? "dark" : "light");
  }
}
