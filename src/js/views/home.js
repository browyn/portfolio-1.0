import View from "./View.js";

class Home extends View {
  constructor() {
    super();

    if (Home._instance) {
      return Home._instance;
    }
  }
}

export default new Home();
