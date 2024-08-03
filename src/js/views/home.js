import View from "./view";
import hero from "../components/home/hero";
import about from "../components/home/about";
import experience from "../components/home/experience";
import contact from "../components/home/contact";
import projects from "../components/home/projects";

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
      experience.render(),
      projects.render(this.#_data.projects),
      contact.render()
    );

    return this.#_container;
  }
}

export default new Home();
