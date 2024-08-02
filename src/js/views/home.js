import View from "./view.js";
import hero from "../components/home/hero.js";
import about from "../components/home/about.js";

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
    this.#_container.append(hero.render(), about.render());

    return this.#_container;
  }
}

export default new Home();
