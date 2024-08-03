import "aos/dist/aos.css";
import "@phosphor-icons/web";

import header from "./components/header";
import controller from "./controller";
import { getPath } from "./helpers";
import footer from "./components/footer";

const theme = localStorage.getItem("theme");

if (theme) {
  document.documentElement.setAttribute("data-theme", theme);
} else {
  const theme = document.documentElement.dataset.theme;
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", function App() {
  controller.init();

  const path = getPath();

  switch (path) {
    case "/":
      controller.index();
      break;
    // Hoping to add more cases (pages) with time, for now, just a single page portfolio
    default:
      return;
  }

  header.registerEventListeners();
  footer.registerEventListeners();
});
