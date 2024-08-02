class Projects {
  #_el;
  #_projects;

  constructor() {
    this.#_el = document.createElement("section");
    this.#_el.id = "projects";
  }

  render(projects) {
    this.#_projects = projects;
    this.#_el.insertAdjacentHTML("afterbegin", this.#_generateMarkup());

    return this.#_el;
  }

  #_generateMarkup() {
    return `
      <div class="w-full bg-gray-50/40">
        <div class="flex gap-10 flex-col py-16 container">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3" data-aos="fade-up">
              <h2 class="font-bold">03. / Crafted with love & code</h2>
              <button type="button">
                <i class="ph ph-link font-semibold text-lg"></i>
              </button>
            </div>
            <p data-aos="fade-up">Here are some of my recent projects.</p>
          </div>

          <div class="w-full flex-col gap-10 flex">
            ${
              this.#_projects.length > 0
                ? this.#_projects.map((project, index) =>
                    this.#_generateProjectDetailsMarkup(project, index + 1)
                  )
                : `<div class="w-full flex items-center justify-center flex-col gap-2 py-10 text-center">
                  <h3 class="font-bold text-sm">No Projects Yet!</h3>
                  <span class="text-xs">
                    Keep checking to see when new projects are uploaded!
                  </span>
                </div>`
            }
          </div>

          <div class="flex flex-col gap-6 justify-end mt-10">
            <span>THERE'S MORE!</span>

            <div>
              <button class="font-bold gap-5 lowercase flex items-center">
                <span>Want to see some more?</span>
                <i class="ph ph-arrow-right text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  #_generateProjectDetailsMarkup(project, index) {
    const { title, type, tags, description, githubUrl } = project;

    const isEven = index % 2 === 0;

    return `
      <div class="w-full flex p-2 flex-col-reverse sm:flex-row sm:even:flex-row-reverse items-center relative">
        <article class="flex-1 flex flex-col gap-6">
          <div class="flex flex-col gap-1 relative ${isEven && "items-end"}">
            <h3 class="font-bold text-sm">${title}</h3>
            <span class="text-xs">${type}</span>
          </div>
          <p align="justify" class="font-light text-sm shadow-lg relative z-[1] bg-white p-6 ${
            isEven ? "pl-10" : "pr-10"
          }">
            ${description}
          </p>
          <div class="w-full flex items-center gap-2 flex-wrap ${
            isEven && "justify-end"
          }">
            ${tags
              .map(
                (tag) =>
                  `<span class="bg-gray-100 rounded-2xl py-1 px-2 text-xs">
                  ${tag}
                </span>`
              )
              .join("")}
          </div>
          <div class="w-full ${isEven ? "text-right" : ""}">
            <a href="${githubUrl}" title="View project on GitHub">
              <button class="text-sm btn">
                <span>VIEW PROJECT</span> 
                <i class="ph ph-arrow-right text-2xl"></i>
              </button>
            </a>
          </div>
        </article>
        <div class="h-[300px] -mb-6 sm:mb-0 sm:even:-mr-8 sm:flex-1 sm:-ml-8 bg-black/10 hover:scale-[105%] transition-all duration-200 w-[90%] mx-auto relative z-[1]"></div>
      </div>
    `;
  }
}

export default new Projects();
