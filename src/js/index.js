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

    default:
      return;
  }

  header.registerEventListeneres();
});
