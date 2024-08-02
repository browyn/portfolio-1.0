import { data } from "../content/data.js";

class Footer {
  #_el;

  constructor() {
    this.#_el = document.createElement("footer");
    this.#_el.id = "footer";
  }

  render() {
    this.#_el.insertAdjacentHTML("afterbegin", this.#_generateMarkup());

    return this.#_el;
  }

  #_generateMarkup() {
    return `
        <div class="w-full bg-black">
            <div class="container py-32 flex flex-col gap-8 justify-center text-center">
                <span class="text-sm text-white" data-aos="fade-in">
                    &copy; ${new Date().getFullYear()} Designed & Developed by 
                    <a href="">Browyn Louis</a>
                </span>
                <div class="flex items-center gap-4 text-white justify-center text-center flex-wrap" data-aos="fade-up">
                    ${this.#_renderSocials()}
                </div>
            </div>
        </div>
      `;
  }

  #_renderSocials() {
    const { socials } = data;

    return socials
      .map((social) => {
        return `<a href="${social.link}" class="text-white btn before:bg-white" style="text-transform:capitalize">${social.name}</a>`;
      })
      .join("/");
  }
}

export default new Footer();
