import { getElement, getElements } from "../utils/dom.js";

const fadeOnScroll = ({ element, triggerPoint, resetPoint, transform }) => {
  if (!element) return;

  window.addEventListener("scroll", () => {
    const { scrollY } = window;
    const isHidden = scrollY > triggerPoint;

    element.style.transform = isHidden ? transform : "translateX(0px)";
    element.style.opacity = isHidden ? "0" : "1";

    if (scrollY <= resetPoint) {
      element.style.transform = "translateX(0px)";
      element.style.opacity = "1";
    }
  });
};

export const initHeroScrollEffects = () => {
  fadeOnScroll({
    element: getElement(".hero-body-title-one"),
    triggerPoint: 100,
    resetPoint: 400,
    transform: "translateX(-100px)",
  });

  fadeOnScroll({
    element: getElement(".hero-body-title-three"),
    triggerPoint: 200,
    resetPoint: 500,
    transform: "translateX(100px)",
  });

  const bottomSection = getElement(".hero-body-bottom");
  const bannerImage = getElement(".hero-body-banner-person img");

  window.addEventListener("scroll", () => {
    if (bottomSection) {
      const isHidden = window.scrollY > 200;
      bottomSection.style.opacity = isHidden ? "0" : "1";
      bottomSection.style.pointerEvents = isHidden ? "none" : "all";
    }

    if (bannerImage) {
      const triggerPoint = 100;
      const stepSize = 200;
      const maxScale = 1.6;
      const step = Math.min(
        Math.floor(Math.max(window.scrollY - triggerPoint, 0) / stepSize),
        maxScale - 1,
      );

      bannerImage.style.transform =
        window.scrollY > triggerPoint ? `scale(${1 + step * 0.1})` : "scale(1)";
    }
  });
};

export const initSocialLogoMarquee = () => {
  const scrollers = getElements(".hero-body-bottom-logo-social");
  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (shouldReduceMotion) return;

  scrollers.forEach((scroller) => {
    const scrollerInner = getElement(".hero-body-bottom-logo-social-img", scroller);
    if (!scrollerInner) return;

    scroller.setAttribute("data-animated", "true");
    const scrollerContent = [...scrollerInner.children];
    const copyCount = 20;

    for (let index = 0; index < copyCount; index += 1) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
};
