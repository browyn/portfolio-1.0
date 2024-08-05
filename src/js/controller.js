import AOS from "aos";

import home from "./views/home";
import { data } from "./content/data";

class Controller {
  _data;

  constructor() {
    if (Controller._instance) {
      return Controller._instance;
    }

    this.#_init();
  }

  #_init() {
    AOS.init({
      duration: 1000,
    });
  }

  index() {
    home.render({
      experiences: data.experiences,
      projects: data.projects,
    });
  }
}

export default new Controller();
