import { professionalExperienceCompanies } from "../data/professional-experience.data.js";
import { getElement } from "../utils/dom.js";

const transitionDuration = 500;
const plusIcon = "./assets/third-section/Icons/Plus.svg";
const minusIcon = "./assets/third-section/Icons/Minus.svg";

const createCompanyHeader = (company) => `
  <header class="professional-experience-company-divider" style="--company-accent: ${company.accentColor}">
    <div class="professional-experience-company-divider-card">
      <div class="professional-experience-company-divider-summary-block">
        <div class="professional-experience-company-divider-meta">
          <span>${company.period}</span>
          <span>${company.employmentType}</span>
        </div>
        <div class="professional-experience-company-divider-main">
          <img src="${company.logo}" alt="${company.companyName} logo" />
          <div>
            <p>${company.shortName}</p>
            <h3>${company.companyName}</h3>
            <span>${company.role}</span>
          </div>
        </div>
      </div>

      <button
        class="professional-experience-company-divider-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="professional-experience-company-content-${company.id}"
        data-company-toggle="${company.id}"
      >
        <img src="${plusIcon}" alt="" aria-hidden="true" />
        <span class="sr-only">Toggle ${company.companyName} details</span>
      </button>
    </div>
    <div class="professional-experience-company-divider-line"></div>
  </header>
  `;

const setPanelHeight = (content) => {
  content.style.maxHeight = `${content.scrollHeight}px`;
  window.setTimeout(() => {
    if (content.dataset.open === "true") content.style.maxHeight = "none";
  }, transitionDuration);
};

const toggleCompanyDetails = ({ button, content }) => {
  const icon = button.querySelector("img");
  const isClosed = content.dataset.open !== "true";

  if (isClosed) {
    content.dataset.open = "true";
    button.setAttribute("aria-expanded", "true");
    icon.src = minusIcon;
    content.style.display = "block";
    content.style.maxHeight = "0";
    content.style.opacity = "0";

    window.requestAnimationFrame(() => {
      content.style.opacity = "1";
      setPanelHeight(content);
    });

    content.querySelectorAll("img").forEach((image) => {
      image.addEventListener("load", () => setPanelHeight(content), { once: true });
    });

    return;
  }

  content.dataset.open = "false";
  button.setAttribute("aria-expanded", "false");
  icon.src = plusIcon;
  content.style.maxHeight =
    content.style.maxHeight === "none" ? `${content.scrollHeight}px` : content.style.maxHeight;
  content.style.opacity = "1";

  window.requestAnimationFrame(() => {
    content.style.maxHeight = "0";
    content.style.opacity = "0";
  });

  window.setTimeout(() => {
    if (content.dataset.open === "false") content.style.display = "none";
  }, transitionDuration);
};

export const initProfessionalExperience = ({ onCompanyLoaded } = {}) => {
  const companyFlow = getElement("[data-company-flow]");

  if (!companyFlow) return;

  const loadCompany = async (company) => {
    const response = await window.fetch(company.source);
    if (!response.ok) throw new Error(`Unable to load company profile: ${company.source}`);

    const article = document.createElement("article");
    article.className = "professional-experience-company-profile";
    article.dataset.companyId = company.id;
    article.innerHTML = `
      ${createCompanyHeader(company)}
      <div
        class="professional-experience-company-profile-content"
        id="professional-experience-company-content-${company.id}"
        data-company-content="${company.id}"
        data-open="false"
      >
        ${await response.text()}
      </div>
    `;

    companyFlow.appendChild(article);

    const button = article.querySelector(`[data-company-toggle="${company.id}"]`);
    const content = article.querySelector(`[data-company-content="${company.id}"]`);
    button?.addEventListener("click", () => toggleCompanyDetails({ button, content }));

    onCompanyLoaded?.(company);
  };

  companyFlow.innerHTML = "";

  const loadCompanies = async () => {
    for (const company of professionalExperienceCompanies) {
      await loadCompany(company);
    }
  };

  loadCompanies();
};
