import { isEven } from "../../helpers";

class Experience {
  #_el;
  #_experiences;

  constructor() {
    this.#_el = document.createElement("section");
    this.#_el.id = "experience";
  }

  render(experiences) {
    this.#_experiences = experiences;
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
            <p data-aos="fade-up">Walk down the steps of experience with me.</p>
          </div>

          <div class="hidden w-full flex-col justify-between lg:flex-row sm:max-w-lg lg:max-w-3xl m-auto lg:flex">
            <div class="w-full p-2 flex gap-16 flex-col items-center">
              ${this.#_experiences
                .filter((_, index) => !isEven(index + 1))
                .map((experience, index) =>
                  this.#_generateExperienceMarkup(experience, index + 1)
                )
                .join("")}
            </div>
            
            <div class="hidden w-[2px] bg-secondary"></div>

            <div class="w-full p-2 flex gap-16 flex-col items-center">
              ${this.#_experiences
                .filter((_, index) => isEven(index + 1))
                .map((experience, index) =>
                  this.#_generateExperienceMarkup(experience, index + 1)
                )
                .join("")}
            </div>
          </div>

          <div class="flex flex-col gap-16 lg:hidden">
            ${this.#_experiences
              .map((experience, index) =>
                this.#_generateExperienceMarkup(experience, index + 1)
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  #_generateExperienceMarkup(experience, sn) {
    return `
      <div 
        class="flex flex-col gap-4 p-4 pl-0 ${
          isEven(sn) ? "self-start" : "self-end"
        }"
      >
        <div class="flex justify-between flex-col-reverse gap-4">
          <div class="flex flex-col gap-1 items-end" data-aos="fade-up">
            <h3 class="font-bold text-sm">${experience.place}</h3>
            <p class="text-xs font-medium">${experience.role}</p>
          </div>
          <span class="text-xs self-end flex items-center flex-row-reverse gap-2 font-light" data-aos="fade-up">
            <i class="ph ph-gps-fix"></i> ${experience.location}
          </span>
          <span 
            class="text-sm ml-auto relative before:w-20 before:h-[2px] before:bg-secondary before:text-secondary before:right-[150px] before:top-[10px] before:absolute font-semibold"
            data-aos="fade-up"
          >
            ${experience.duration.join(" - ")}
          </span>
        </div>
      </div>
    `;
  }
}

export default new Experience();
