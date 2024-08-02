class Experience {
  #_el;

  constructor() {
    this.#_el = document.createElement("section");
    this.#_el.id = "experience";
  }

  render() {
    this.#_el.insertAdjacentHTML("afterbegin", this.#_generateMarkup());

    return this.#_el;
  }

  #_generateMarkup() {
    return `
      <div class="w-full">
        <div class="flex gap-10 flex-col py-16 container">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3" data-aos="fade-up">
              <h2 class="font-bold">02. / Experience</h2>
             </div>
            <p data-aos="fade-up">Take a surf through my past right up until now.</p>
          </div>

        </div>
      </div>
    `;
  }
}

export default new Experience();
