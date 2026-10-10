export const onReady = (callback) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
    return;
  }

  callback();
};

export const getElement = (selector, parent = document) => parent.querySelector(selector);

export const getElements = (selector, parent = document) => [...parent.querySelectorAll(selector)];
