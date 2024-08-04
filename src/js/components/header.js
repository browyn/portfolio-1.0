import { data } from "../content/data";

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

  registerEventListeners() {
    this.#_handleMenu();
    this.#_handleActiveMenu();
    this.#_handleThemeToggle();
  }

  #_generateMarkup() {
    const { navLinks } = data;

    return `
      <div class="w-full fixed z-10">
        <div
          class="container flex z-10 items-center justify-between py-4 backdrop-blur-md"
          data-aos="slide-down"
        >
          <h1 class="font-poppins font-semibold text-lg">B.</h1>

          ${this.#_renderThemeToggle()}

          <!-- Menu Icon -->

          <div class="relative">
            <button
              type="button"
              class="flex p-2 flex-col gap-2.5 items-end"
              id="menu-icon"
              data-state="closed"
              title="menu-icon"
            >
              <div class="w-10 h-[1px] bg-secondary transition-all ease-linear duration-300"></div>
              <div class="w-[35px] h-[1px] bg-secondary transition-all ease-linear duration-300"></div>
            </button>

            <nav
              class="absolute bg-primary top-8 p-3 z-10 right-0 w-[150px] scale-0 transition-transform ease-linear duration-100 shadow-xl"
              data-state="open"
              id="nav"
            >
              <div class="flex flex-col gap-3.5">
                ${navLinks
                  .map(
                    (link) =>
                      `
                    <a
                      href="#${link.name.toLowerCase()}"
                      class="btn text-sm relative before:w-0"
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

  #_renderThemeToggle() {
    const theme = localStorage.getItem("theme");

    return `
      <button
        type="button"
        title="Theme toggle"
        data-state="${theme}"
        data-role="theme-toggle"
        class="p-1.5 rounded-full bg-secondary justify-center items-center flex ml-10"
      >
        <i class="ph ${
          theme == "dark" ? "ph-sun" : "ph-moon"
        } text-primary font-semibold text-lg"></i>
      </button>
    `;
  }

  #_handleThemeToggle() {
    const toggle = document.querySelector("[data-role='theme-toggle']");

    toggle.addEventListener("click", () => {
      const theme = toggle.getAttribute("data-state");
      const newTheme = theme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);
      toggle.setAttribute("data-state", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);

      if (newTheme == "light") {
        toggle.firstElementChild.classList.add("ph-moon");
        toggle.firstElementChild.classList.remove("ph-sun");

        return;
      }

      toggle.firstElementChild.classList.add("ph-sun");
      toggle.firstElementChild.classList.remove("ph-moon");
    });
  }

  #_handleMenu() {
    const icon = document.getElementById("menu-icon");
    const navbar = document.getElementById("nav");

    function closeNav() {
      navbar.classList.remove("scale-[100%]");
      navbar.classList.add("scale-0");

      icon.firstElementChild.classList.remove("-rotate-45");
      icon.lastElementChild.classList.remove("-rotate-[135deg]");
      icon.setAttribute("data-state", "closed");
    }

    window.addEventListener("click", function (e) {
      if (icon == e.target) {
        const state = icon.dataset.state;

        switch (state) {
          case "closed":
            navbar.classList.remove("scale-0");
            navbar.classList.add("scale-[100%]");

            icon.firstElementChild.classList.toggle("-rotate-45");
            icon.lastElementChild.classList.toggle("-rotate-[135deg]");
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
            link.classList.add("before:w-8", "opacity-100");
          } else {
            link.classList.remove("before:w-8", "opacity-100");
          }
        });
      },
      {
        rootMargin: "-100px",
        threshold: [0],
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
