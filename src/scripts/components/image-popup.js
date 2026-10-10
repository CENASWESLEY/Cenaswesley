export const initImagePopup = () => {
  const popup = document.getElementById("global-popup");
  const popupImage = document.getElementById("global-popup-img");
  const closeButton = document.querySelector(".image-popup-close");

  if (!popup || !popupImage || !closeButton) return;

  document.addEventListener("click", (event) => {
    if (!event.target?.classList.contains("clickable-img")) return;

    popup.style.display = "block";
    popupImage.src = event.target.src;
  });

  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};
