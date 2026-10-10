import { getElement, getElements } from "../utils/dom.js";
import { createGallerySwiper } from "../utils/swiper.js";

const videoMap = {
  "channel-content-body-play1": "https://www.youtube.com/embed/3jx-jb665fY?si=-8EsACtllSp_lhQY",
  "channel-content-body-play2": "https://www.youtube.com/embed/6uInlUbbfq8?si=PeCDPoG96B6Ftuf4",
  "channel-content-body-play3": "https://www.youtube.com/embed/8coGvKhCrSc?si=mdQtrS2prJcToA4I",
  "channel-content-body-play4": "https://www.youtube.com/embed/1i8-vuHsOGg?si=pePg1cf_jfA_CJGW",
  "channel-content-body-play5": "https://www.youtube.com/embed/TQJMXmKvYZk?si=Ij0U4GgosqXibL1M",
  "channel-content-body-play6": "https://www.youtube.com/embed/A_D5Z6g1ft8?si=hSM7fZ9F6sVJrwXx",
};

export const initChannelDragList = () => {
  const playGroup = getElement(".channel-content-body-play-group");
  if (!playGroup) return;

  let isDragging = false;
  let startY = 0;
  let scrollTop = 0;

  playGroup.addEventListener("mousedown", (event) => {
    isDragging = true;
    playGroup.classList.add("dragging");
    startY = event.pageY - playGroup.offsetTop;
    scrollTop = playGroup.scrollTop;
  });

  ["mouseup", "mouseleave"].forEach((eventName) => {
    playGroup.addEventListener(eventName, () => {
      isDragging = false;
      playGroup.classList.remove("dragging");
    });
  });

  playGroup.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    event.preventDefault();
    const y = event.pageY - playGroup.offsetTop;
    playGroup.scrollTop = scrollTop - (y - startY) * 2;
  });
};

export const initVideoPlayer = () => {
  const videoFrame = document.getElementById("channel-content-body-video");
  const playButtons = getElements("[id^=channel-content-body-play]");

  if (!videoFrame || playButtons.length === 0) return;

  const highlightButton = (activeButton) => {
    playButtons.forEach((button) => {
      const image = button.querySelector("img");
      const text = button.querySelector("p");

      if (image) image.style.opacity = "1";
      if (text) {
        text.classList.remove("text-gray");
        text.classList.add("text-black");
      }
    });

    const image = activeButton.querySelector("img");
    const text = activeButton.querySelector("p");

    if (image) image.style.opacity = "0.4";
    if (text) {
      text.classList.remove("text-black");
      text.classList.add("text-gray");
    }
  };

  const initialButton = document.getElementById("channel-content-body-play1");
  if (initialButton) {
    highlightButton(initialButton);
    videoFrame.src = videoMap[initialButton.id];
  }

  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (videoMap[button.id]) videoFrame.src = videoMap[button.id];
      highlightButton(button);
    });
  });
};

export const initChannelSwipers = () => {
  ["wukong", "sekiro", "onepiece", "dragonball", "naruto"].forEach((albumId) => {
    createGallerySwiper({
      selector: `#channel-content-body-albums-list-cover-img-${albumId}`,
      nextButton: `#arrow-right-${albumId}`,
      previousButton: `#arrow-left-${albumId}`,
      slidesPerView: 5,
    });
  });
};
