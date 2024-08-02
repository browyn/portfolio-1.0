class Header {
  #_el;

  constructor() {
    this.#_el = document.createElement("header");
    this.#_el.id = "header";
  }

  render() {
    this.#_el.insertAdjacentHTML("afterbegin", this.#_generateMarkup());

    return this.#_el;
  }

  #_generateMarkup() {
    return `
      <div class="container flex items-center justify-between py-3">
        <h1 class="font-poppins font-semibold text-lg">B.</h1>
        <nav>

          <!-- Menu Icon -->
        
          <div class="cursor-pointer flex flex-col gap-2.5 items-end">
            <div class="w-10 h-[1px] bg-black transition-all ease-linear duration-150"></div>
            <div class="w-[35px] h-[1px] bg-black transition-all ease-linear duration-150"></div>
          </div>
        </nav>
      </div>
    `;
  }
}

export default new Header();
