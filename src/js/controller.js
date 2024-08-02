import home from "./views/home.js";

class Controller {
  _data;

  constructor() {
    if (Controller._instance) {
      return Controller._instance;
    }
  }

  init() {}

  index() {
    home.render();
  }
}

export default new Controller();
