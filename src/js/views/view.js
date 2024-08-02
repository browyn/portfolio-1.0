import footer from "../components/footer.js";
import header from "../components/header.js";

class View {
  #_parentEl;

  constructor() {
    if (View._instance) {
      return View._instance;
    }

    this.#_parentEl = document.body;
  }

  render() {
    this._prepareViewUsingLayout(header.render(), footer.render());
  }

  _prepareViewUsingLayout(header, footer) {
    header && this.#_parentEl.insertAdjacentElement("afterbegin", header);

    this._prepareView();

    footer && this.#_parentEl.insertAdjacentElement("beforeend", footer);
  }

  _prepareView() {
    const markup = this._generateMarkup();

    if (typeof markup === "string") {
      this.#_parentEl.insertAdjacentHTML("afterbegin", markup);
    } else {
      this.#_parentEl.insertAdjacentElement("afterbegin", markup);
    }
  }

  _generateMarkup() {
    return ``;
  }
}

export default View;
