export const initAos = () => {
  if (!window.AOS) return;

  window.AOS.init({
    duration: 500,
    offset: 150,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
};
