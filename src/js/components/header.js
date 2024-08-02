import { data } from "../content/data.js";

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

  registerEventListeneres() {
    this.#_handleMenu();
    this.#_handleActiveMenu();
  }

  #_generateMarkup() {
    const { footerLinks } = data;

    return `
      <div class="w-full fixed z-10">
        <div
          class="container flex z-10 items-center justify-between py-4 bg-white"
          data-aos="slide-down"
        >
          <h1 class="font-poppins font-semibold text-lg">B.</h1>

          <!-- Menu Icon -->

          <div class="relative">
            <div
              class="cursor-pointer flex flex-col gap-2.5 items-end"
              id="menu-icon"
              data-state="closed"
            >
              <div class="w-10 h-[1px] bg-black transition-all ease-linear duration-150"></div>
              <div class="w-[35px] h-[1px] bg-black transition-all ease-linear duration-150"></div>
            </div>

            <nav
              class="absolute bg-black top-8 p-3 z-10 right-0 w-[150px] scale-0 transition-transform ease-linear duration-100 shadow-2xl"
              data-state="open"
              id="nav"
            >
              <div class="flex flex-col gap-3.5">
                ${footerLinks
                  .map(
                    (link) =>
                      `
                    <a
                      href="#${link.name.toLowerCase()}"
                      class="btn before:bg-white text-white text-sm relative"
                      style="text-transform:lowercase"
                    >
                      ${link.name}
                    </a>
                  `
                  )
                  .join("")}
              </div>
            </nav>
          </div>
        </div>
      </div>
    `;
  }

  #_handleMenu() {
    const icon = document.getElementById("menu-icon");
    const navbar = document.getElementById("nav");

    function closeNav() {
      navbar.classList.remove("scale-[100%]");
      navbar.classList.add("scale-0");

      icon.firstElementChild.classList.remove("rotate-45");
      icon.lastElementChild.classList.remove("rotate-[135deg]");
      icon.setAttribute("data-state", "closed");
    }

    window.addEventListener("click", function (e) {
      if (icon == e.target) {
        const state = icon.dataset.state;

        switch (state) {
          case "closed":
            navbar.classList.remove("scale-0");
            navbar.classList.add("scale-[100%]");

            icon.firstElementChild.classList.toggle("rotate-45");
            icon.lastElementChild.classList.toggle("rotate-[135deg]");
            icon.setAttribute("data-state", "open");
            break;
          case "open":
            closeNav();
            break;
          default:
            break;
        }
      } else {
        icon.dataset.state === "open" && closeNav();
      }
    });
  }

  #_handleActiveMenu() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector(
            `a[href="#${entry.target.id.toLowerCase()}"]`
          );

          if (entry.isIntersecting) {
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        });
      },
      {
        rootMargin: "-100px",
        threshold: [0.2, 1],
      }
    );

    const els = [
      document.getElementById("home"),
      document.getElementById("about"),
      document.getElementById("contact"),
      document.getElementById("projects"),
    ];

    Array.from(els).forEach((el) => observer.observe(el));
  }
}

export default new Header();
