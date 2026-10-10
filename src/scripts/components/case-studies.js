import { createGallerySwiper } from "../utils/swiper.js";

export const initCaseStudySwipers = () => {
  ["project1", "project2"].forEach((projectId) => {
    createGallerySwiper({
      selector: `#projects-content-body-albums-list-cover-img-${projectId}`,
      nextButton: `#arrow-right-${projectId}`,
      previousButton: `#arrow-left-${projectId}`,
      slidesPerView: 3,
    });
  });
};
