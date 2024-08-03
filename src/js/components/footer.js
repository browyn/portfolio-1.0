import { data } from "../content/data";

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

  registerEventListeners() {
    this.#_handleScrollToTop();
  }

  #_generateMarkup() {
    return `      
        <div class="w-full bg-primary" data-aos="fade-in">
          <div class="container py-32 flex flex-col gap-8 justify-center text-center">
            <span class="text-sm">
              &copy; ${new Date().getFullYear()} Designed & Developed by
              <a href="">Browyn Louis</a>
            </span>
            <div class="flex items-center gap-4 justify-center text-center flex-wrap">
              ${this.#_renderSocials()}
            </div>
          </div>
        </div>
        <button
          id="scroll-to-top"
          title="Back to top"
          type="button"
          class="text-base fixed items-center gap-3 tracking-widest -rotate-90 opacity-100 drop-shadow-2xl bottom-10 -right-1 font-semibold hidden z-20 hover:scale-110 transition-all ease-linear duration-100"
        >
          <span>TOP</span>
          <i class="ph ph-caret-double-right"></i>
        </button>
    `;
  }

  #_renderSocials() {
    const { socials } = data;

    return socials
      .map((social) => {
        return `<a href="${social.link}" class="btn" style="text-transform:capitalize">${social.name}</a>`;
      })
      .join("/");
  }

  #_handleScrollToTop() {
    const scrollButton = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollButton.classList.remove("hidden");
        scrollButton.classList.add("flex");
      } else {
        scrollButton.classList.remove("flex");
        scrollButton.classList.add("hidden");
      }
    });

    scrollButton.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }
}

export default new Footer();
