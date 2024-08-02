import "aos/dist/aos.css";
import "@phosphor-icons/web";

import header from "./components/header";
import controller from "./controller";
import { getPath } from "./helpers";

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

  header.registerEventListeneres();
});
