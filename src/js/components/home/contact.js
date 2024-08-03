import { data } from "../../content/data";

class Contact {
  #_el;

  constructor() {
    this.#_el = document.createElement("section");
    this.#_el.id = "contact";
  }

  render() {
    this.#_el.insertAdjacentHTML("afterbegin", this.#_generateMarkup());

    return this.#_el;
  }

  #_generateMarkup() {
    return `
      <div class="w-full">
        <div class="flex gap-10 flex-col py-16 container">
          <div class="flex flex-col gap-2 justify-center text-center">
            <div
              class="flex items-center gap-3 justify-center text-center"
              data-aos="fade-up"
            >
              <h2 class="font-bold">04. / Contact Me</h2>
            </div>
            <p data-aos="fade-up">
              Want to discuss a project or say hi? You can reach out below
            </p>
          </div>

          <div
            class="flex gap-4 items-center justify-center flex-wrap text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            ${this.#_renderSocials()}
          </div>

          <div class="w-full text-center flex gap-5 justify-center flex-col">
            <form
              action=""
              class="flex flex-col gap-3 max-w-[450px] w-full mx-auto items-center"
              data-aos="fade-up"
            >
              <label htmlFor="email" class="font-bold text-sm">
                Get notified of new projects and involvement
              </label>
              <input
                id="email"
                name="email"
                type="email"
                class="text-center border-b border-b-secondary placeholder:text-secondary bg-transparent p-2 h-10 placeholder:text-sm outline-none"
                placeholder="Your email address"
              />
              <button class="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  #_renderSocials() {
    const { socials } = data;

    return socials
      .map((social) => {
        return `
          <a href="${social.link}" class="hover:scale-125 transition-transform ease-in-out duration-150" title="${social.name}">
            <i class="${social.icon} text-2xl"></i>
          </a>
        `;
      })
      .join("/");
  }
}

export default new Contact();
