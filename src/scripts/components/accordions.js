const transitionDuration = 500;
let professionalExperienceAccordionBound = false;

const prepareAccordionPanels = (selector) => {
  document.querySelectorAll(selector).forEach((panel) => {
    panel.style.maxHeight = "0";
    panel.style.overflow = "hidden";
    panel.style.opacity = "0";
    panel.dataset.open = "false";
  });
};

const updateOpenPanelHeight = (content) => {
  if (content?.dataset.open !== "true") return;

  content.style.maxHeight = `${content.scrollHeight}px`;
  window.setTimeout(() => {
    if (content.dataset.open === "true") content.style.maxHeight = "none";
  }, transitionDuration);
};

const togglePanel = ({ content, iconImage, plusIcon, minusIcon }) => {
  if (!content || !iconImage) return;

  const isClosed = content.dataset.open !== "true";

  if (isClosed) {
    content.dataset.open = "true";
    iconImage.src = minusIcon;
    content.style.display = "flex";
    content.style.maxHeight = "0";
    content.style.opacity = "0";

    window.requestAnimationFrame(() => {
      content.style.opacity = "1";
      updateOpenPanelHeight(content);
    });

    content.querySelectorAll("img").forEach((image) => {
      image.addEventListener("load", () => updateOpenPanelHeight(content), { once: true });
    });

    return;
  }

  content.dataset.open = "false";
  iconImage.src = plusIcon;
  content.style.maxHeight =
    content.style.maxHeight === "none" ? `${content.scrollHeight}px` : content.style.maxHeight;
  content.style.opacity = "1";

  window.requestAnimationFrame(() => {
    content.style.opacity = "0";
    content.style.maxHeight = "0";
  });

  window.setTimeout(() => {
    if (content.dataset.open === "false") content.style.display = "none";
  }, transitionDuration);
};

export const initProfessionalExperienceAccordions = () => {
  if (!professionalExperienceAccordionBound) {
    document.addEventListener("click", (event) => {
      const icon = event.target.closest(
        ".professional-experience-content-body-submain-subtitle-icon",
      );
      if (!icon) return;

      const projectId = icon.id.replace(
        "professional-experience-content-body-submain-subtitle-icon-",
        "",
      );
      const iconImage = document.getElementById(
        `professional-experience-content-body-submain-subtitle-icon-img-${projectId}`,
      );
      const content = document.getElementById(
        `professional-experience-content-body-submain-${projectId}`,
      );

      togglePanel({
        content,
        iconImage,
        plusIcon: "./assets/third-section/Icons/Plus.svg",
        minusIcon: "./assets/third-section/Icons/Minus.svg",
      });
    });
    professionalExperienceAccordionBound = true;
  }

  prepareAccordionPanels(".professional-experience-content-body-submain");
};

export const initCreativePortfolioAccordions = () => {
  const projectIds = ["graphic", "web", "mobile", "presentation", "3d", "painting"];

  projectIds.forEach((projectId) => {
    const icon = document.getElementById(
      `creative-portfolio-content-body-box-layout-work-icon-${projectId}`,
    );
    const iconImage = document.getElementById(
      `creative-portfolio-content-body-box-layout-work-icon-${projectId}`,
    );
    const content = document.getElementById(
      `creative-portfolio-content-body-box-work-group-${projectId}`,
    );

    icon?.addEventListener("click", () => {
      togglePanel({
        content,
        iconImage,
        plusIcon: "./assets/sixth-section/Icons/Plus.svg",
        minusIcon: "./assets/sixth-section/Icons/Minus.svg",
      });
    });
  });

  prepareAccordionPanels(".creative-portfolio-content-body-box-work-group");
};
