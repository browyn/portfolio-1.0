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
              <h2 class="font-bold">02. / Experience & Expertise</h2>
             </div>
            <p data-aos="fade-up">Walk down my tree of experience with me.</p>
          </div>

          <div class="flex w-full flex-col lg:flex-row">
            <div class="flex-1">

            </div>
            <div class="flex-1">
              
            </div>
          </div>
        </div>
      </div>
    `;
  }

  #_generateExperienceMarkup() {
    return `

    `;
  }
}

export default new Experience();
