import { data } from "../../content/data";

class Hero {
  #_el;

  constructor() {
    this.#_el = document.createElement("section");
    this.#_el.id = "home";
  }

  render() {
    this.#_el.insertAdjacentHTML("afterbegin", this.#_generateMarkup());

    return this.#_el;
  }

  #_generateMarkup() {
    return `
      <div class="flex flex-col w-full h-screen mt-auto max-h-[960px] items-center justify-center container">
        <div class="flex flex-col m-auto items-center justify-center md:flex-row max-w-[720px]">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <h1 class="font-bold" data-aos="fade-up">
                <span class="font-medium">Hi, my name is</span> Browyn Louis.
              </h1>
              <p class="font-light" data-aos="fade-up" data-aos-duration="1500">
                I'm a software developer, building great softwares for the web
                and mobile using
                <strong class="font-normal">React Native</strong>
              </p>
            </div>
            <div 
                class="flex gap-4 mt-10 items-center flex-wrap text-black/80" 
                data-aos="fade-up" 
                data-aos-duration="2000"
            >
              ${this.#_renderSocials()}
            </div>
            <div 
                class="mt-10 md:text-right" 
                data-aos="fade-up" data-aos-duration="2500"
            >
              <button class="btn" title="Download my resume">
                MY RESUME <i class="ph ph-file-arrow-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="animate-bounce">
          <i class="ph ph-caret-double-down text-[48px]"></i>
        </div>
      </div>
    `;
  }

  #_renderSocials() {
    const { socials } = data;

    return socials
      .map((social) => {
        return `
          <a href="${social.link}" class="text-black hover:scale-125 transition-transform ease-in-out duration-150" title="${social.name}">
            <i class="${social.icon} text-2xl"></i>
          </a>
        `;
      })
      .join("/");
  }
}

export default new Hero();
