import { getElements } from "../utils/dom.js";
import { createGallerySwiper } from "../utils/swiper.js";

const portfolioProjects = [
  {
    className: "graphic",
    imageId: "creative-portfolio-content-body-box-work-design-img-group",
  },
  {
    className: "web",
    imageId: "creative-portfolio-content-body-box-work-web-img-group",
  },
  {
    className: "mobile",
    imageId: "creative-portfolio-content-body-box-work-mobile-img-group",
  },
  {
    className: "presentation",
    imageId: "creative-portfolio-content-body-box-work-presentation-img-group",
  },
  {
    className: "3d",
    imageId: "creative-portfolio-content-body-box-work-3d-img-group",
  },
  {
    className: "painting",
    imageId: "creative-portfolio-content-body-box-work-painting-img-group",
  },
];

export const initPortfolioGallery = () => {
  portfolioProjects.forEach((project) => {
    createGallerySwiper({
      selector: `.hall-swiper-container-${project.className}`,
      nextButton: `#arrow-right-${project.className}`,
      previousButton: `#arrow-left-${project.className}`,
      slidesPerView: 5,
      spaceBetween: 10,
    });

    const mainImage = document.getElementById(project.imageId);
    const slides = getElements(
      `#creative-portfolio-content-body-box-work-group-${project.className} .swiper-slide`,
    );
    const thumbnails = getElements(
      ".creative-portfolio-content-body-box-layout-work-tag-mini-box img",
    );

    if (thumbnails.length > 0) thumbnails[0].style.opacity = "1";

    slides.forEach((slide) => {
      slide.addEventListener("click", () => {
        const image = slide.querySelector("img");
        if (!image || !mainImage) return;

        mainImage.src = image.src;
        mainImage.alt = image.alt;
        thumbnails.forEach((thumbnail) => {
          thumbnail.style.opacity = "0.4";
        });

        if (image !== thumbnails[0]) image.style.opacity = "1";
      });
    });
  });
};
