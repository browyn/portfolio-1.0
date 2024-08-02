import View from "./view.js";
import hero from "../components/home/hero.js";
import about from "../components/home/about.js";
import experience from "../components/home/experience.js";

class Home extends View {
  #_container;

  constructor() {
    super();

    if (Home._instance) {
      return Home._instance;
    }

    this.#_container = document.createElement("main");
    this.#_container.id = "main";
  }

  _generateMarkup() {
    this.#_container.append(hero.render(), about.render(), experience.render());

    return this.#_container;
  }
}

export default new Home();
