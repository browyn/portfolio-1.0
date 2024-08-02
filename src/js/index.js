import header from "./components/header.js";
import controller from "./controller.js";
import { getPath } from "./helpers.js";

document.addEventListener("DOMContentLoaded", function App() {
  controller.init();

  const path = getPath();

  switch (path) {
    case "/":
      controller.index();
      break;

    default:
      return;
  }

  header.registerEventListeneres();
});
