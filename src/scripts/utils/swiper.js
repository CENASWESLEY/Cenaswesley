export const createSwiper = (selector, options) => {
  if (!window.Swiper) return null;

  try {
    return new window.Swiper(selector, options);
  } catch (error) {
    console.warn(`Swiper could not initialize for ${selector}.`, error);
    return null;
  }
};

export const createGallerySwiper = ({
  selector,
  nextButton,
  previousButton,
  slidesPerView,
  spaceBetween = 6,
}) =>
  createSwiper(selector, {
    slidesPerView,
    spaceBetween,
    navigation: {
      nextEl: nextButton,
      prevEl: previousButton,
    },
    loop: false,
    grabCursor: true,
    watchOverflow: true,
  });
