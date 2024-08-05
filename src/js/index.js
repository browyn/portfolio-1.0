import "aos/dist/aos.css";
import "@phosphor-icons/web";

import header from "./components/header";
import footer from "./components/footer";
import controller from "./controller";
import { getPath, initializeTheme } from "./helpers";

initializeTheme();

document.addEventListener("DOMContentLoaded", function App() {
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
