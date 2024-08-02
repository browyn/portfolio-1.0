import View from "./view.js";
import hero from "../components/home/hero.js";
import about from "../components/home/about.js";
import experience from "../components/home/experience.js";
import contact from "../components/home/contact.js";
import projects from "../components/home/projects.js";

class Home extends View {
  #_data;
  #_container;

  constructor() {
    super();

    if (Home._instance) {
      return Home._instance;
    }

    this.#_container = document.createElement("main");
    this.#_container.id = "main";
  }

  render(data) {
    this.#_data = data;
    super.render();
  }

  _generateMarkup() {
    this.#_container.append(
      hero.render(),
      about.render(),
      // experience.render(),
      projects.render(this.#_data.projects),
      contact.render()
    );

    return this.#_container;
  }
}

export default new Home();
