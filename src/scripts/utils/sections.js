import { getElements } from "./dom.js";

export const loadSectionModules = async () => {
  const modules = getElements("[data-src]");

  await Promise.all(
    modules.map(async (moduleElement) => {
      const source = moduleElement.dataset.src;
      const response = await window.fetch(source);

      if (!response.ok) {
        throw new Error(`Unable to load section module: ${source}`);
      }

      moduleElement.innerHTML = await response.text();
    }),
  );
};
