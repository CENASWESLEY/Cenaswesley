import { initAos } from "./components/aos.js";
import {
  initCreativePortfolioAccordions,
  initProfessionalExperienceAccordions,
} from "./components/accordions.js";
import { initCaseStudySwipers } from "./components/case-studies.js";
import { initChannelDragList, initChannelSwipers, initVideoPlayer } from "./components/channel.js";
import { initHeroScrollEffects, initSocialLogoMarquee } from "./components/hero.js";
import { initImagePopup } from "./components/image-popup.js";
import { initPortfolioGallery } from "./components/portfolio-gallery.js";
import { initProfessionalExperience } from "./components/professional-experience.js";
import { onReady } from "./utils/dom.js";
import { loadSectionModules } from "./utils/sections.js";

onReady(async () => {
  await loadSectionModules();

  initAos();
  initHeroScrollEffects();
  initSocialLogoMarquee();
  initProfessionalExperience({
    onCompanyLoaded: () => {
      initProfessionalExperienceAccordions();
      initImagePopup();
    },
  });
  initImagePopup();
  initCaseStudySwipers();
  initCreativePortfolioAccordions();
  initPortfolioGallery();
  initChannelDragList();
  initVideoPlayer();
  initChannelSwipers();
});
