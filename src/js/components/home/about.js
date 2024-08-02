import { data } from "../../content/data.js";

class About {
  #_el;

  constructor() {
    this.#_el = document.createElement("section");
    this.#_el.id = "about";
  }

  render() {
    this.#_el.insertAdjacentHTML("afterbegin", this.#_generateMarkup());

    return this.#_el;
  }

  #_generateMarkup() {
    const { about } = data;

    return `
      <div class="w-full bg-gray-50/40">
        <div class="flex gap-10 flex-col py-16 container">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3" data-aos="fade-up">
              <h2 class="font-bold">01. / About</h2>
              <button type="button">
                <i class="ph ph-link font-semibold text-lg"></i>
              </button>
            </div>
            <p data-aos="fade-up">Let me tell you a bit about myself.</p>
          </div>

          <div class="flex flex-col md:flex-row items-center gap-10" data-aos="fade-up">
            <div class="self-start group" data-aos="fade-up">
              <div class="w-[250px] h-[250px] bg-black min-w-[200px] absolute rounded-md"></div>
              <div class="w-[250px] h-[250px] bg-transparent rounded-md border border-black min-w-[200px] ml-3 mt-3 group-hover:scale-[95%] transition-transform ease-linear duration-1000"></div>
            </div>

            <article class="font-light">
              ${about
                .map((data) => `<p data-aos="fade-up">${data}</p>`)
                .join("<br />")}
                
              <div class="mt-10 md:text-right" data-aos="fade-up">
                <button class="btn">
                  Download my resume
                  <i class="ph ph-file-arrow-down text-lg"></i>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    `;
  }
}

export default new About();
