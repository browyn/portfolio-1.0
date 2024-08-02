import home from "./views/home.js";
import { data } from "./content/data.js";

class Controller {
  _data;

  constructor() {
    if (Controller._instance) {
      return Controller._instance;
    }
  }

  init() {
    AOS.init({
      duration: 1000,
    });
  }

  index() {
    home.render({
      projects: data.projects,
    });
  }
}

export default new Controller();
