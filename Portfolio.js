


 // Co-op

document.addEventListener("DOMContentLoaded", function () {



      // เลือกองค์ประกอบที่ต้องการควบคุม
  const title = document.querySelector('.section_first-body_title_one');
  const lines = document.querySelectorAll('.section_first-body_title_one p');

  // ฟังก์ชันจัดการ Scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // ระยะที่เลื่อนลง
    const triggerPoint = 100; // จุดเริ่มต้นของการเปลี่ยนแปลง (ปรับตามความเหมาะสม)
    const resetPoint =400; // จุดรีเซ็ตเมื่อเลื่อนกลับขึ้นไป

    if (scrollY > triggerPoint) {
      // เมื่อ Scroll ลงเกิน Trigger Point
      title.style.transform = `translateX(-100px)`; // เลื่อนจากขวาไปซ้าย
      title.style.opacity = `0`; // จางหายไป
    } else if (scrollY <= resetPoint) {
      // เมื่อ Scroll กลับขึ้นไป
      title.style.transform = `translateX(0px)`; // เลื่อนกลับมาที่เดิม
      title.style.opacity = `1`; // แสดงผลข้อความอีกครั้ง
    }
  });


        // เลือกองค์ประกอบที่ต้องการควบคุม
        const title2 = document.querySelector('.section_first-body_title_three');
      
        // ฟังก์ชันจัดการ Scroll
        window.addEventListener('scroll', () => {
          const scrollY2 = window.scrollY; // ระยะที่เลื่อนลง
          const triggerPoint = 200; // จุดเริ่มต้นของการเปลี่ยนแปลง (ปรับตามความเหมาะสม)
          const resetPoint = 500; // จุดรีเซ็ตเมื่อเลื่อนกลับขึ้นไป
      
          if (scrollY2 > triggerPoint) {
            // เมื่อ Scroll ลงเกิน Trigger Point
            title2.style.transform = `translateX(100px)`; // เลื่อนจากขวาไปซ้าย
            title2.style.opacity = `0`; // จางหายไป
          } else if (scrollY2 <= resetPoint) {
            // เมื่อ Scroll กลับขึ้นไป
            title2.style.transform = `translateX(0px)`; // เลื่อนกลับมาที่เดิม
            title2.style.opacity = `1`; // แสดงผลข้อความอีกครั้ง
          }
        });

        // เลือกองค์ประกอบที่ต้องการควบคุม
        const bottomSection = document.querySelector(".section_first-body_bottom");

        window.addEventListener("scroll", () => {
        const scrollY3 = window.scrollY; // ระยะที่ Scroll ลง
        const triggerPoint = 200; // จุดเริ่มต้นการเลือนหาย (ปรับตามต้องการ)
        const resetPoint = 0;
        if (scrollY3 > triggerPoint) {
            // เมื่อ Scroll ลงเกิน triggerPoint
            bottomSection.style.opacity = "0"; // จางหาย
            bottomSection.style.pointerEvents = "none"; // ปิดการโต้ตอบ
        } else if (scrollY3 <= resetPoint) {
            // เมื่อ Scroll กลับขึ้น
            bottomSection.style.opacity = "1"; // กลับมาชัดเจน
            bottomSection.style.pointerEvents = "all"; // เปิดการโต้ตอบ
        }
        });


// เลือกภาพที่ต้องการขยาย
const bannerImage = document.querySelector(".section_first-body_banner_person img");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // ระยะที่ Scroll ลง
  const triggerPoint = 100; // จุดเริ่มต้นของการขยาย
  const stepSize = 200; // ความยาวแต่ละขั้น (ปรับได้)
  const maxScale = 1.6; // ขนาดสูงสุดที่ขยายได้

  if (scrollY > triggerPoint) {
    // คำนวณสัดส่วนการขยายแบบเป็นขั้น
    const step = Math.min(Math.floor((scrollY - triggerPoint) / stepSize), maxScale - 1); 
    const scaleFactor = 1 + step * 0.1; // เพิ่มขนาดทีละ 0.1 ในแต่ละขั้น

    bannerImage.style.transform = `scale(${scaleFactor})`;
  } else {
    // หาก Scroll กลับขึ้นไปต่ำกว่า triggerPoint ให้กลับไปขนาดเดิม
    bannerImage.style.transform = "scale(1)";
  }
});


});




 // logo-slider

 document.addEventListener("DOMContentLoaded", function () {

    const scrollers = document.querySelectorAll(".section_first-body_bottom_logo_social");
  
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  
    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
  
        const scrollerInner = scroller.querySelector(".section_first-body_bottom_logo_social_img");
        const scrollerContent = Array.from(scrollerInner.children);
  
        // คัดลอกภาพใหม่โดยใช้ while loop
        let count = 0;
        const maxCopies = 20; // จำนวนครั้งที่ต้องการคัดลอกภาพ
        while (count < maxCopies) {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem); // เพิ่มภาพที่คัดลอกเข้าไป
          });
          count++;
        }
      });
    }
  });



// Fourth
document.addEventListener("DOMContentLoaded", function () {

    // Define an array of project IDs
    const projects = [
        'miniproject1',
        'miniproject2',
        'project1',
        'project2'
    ];

    // Function to toggle content visibility
    function toggleContent(projectId) {
        const iconImg = document.getElementById(`section_fourth-content_body_submain_subtitle_icon_img_${projectId}`);
        const content = document.getElementById(`section_fourth-content_body_submain_${projectId}`);

        // Check the current state and toggle
        if (iconImg.src.includes('Plus.svg')) {
            // Change the icon to Minus
            iconImg.src = '/assets/fourth-section/Icons/Minus.svg';

            // Show the content with animation
            content.style.display = 'flex';
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
            content.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
        } else {
            // Change the icon to Plus
            iconImg.src = '/assets/fourth-section/Icons/Plus.svg';

            // Hide the content with animation
            content.style.maxHeight = '0';
            content.style.opacity = '0';
            setTimeout(() => {
                content.style.display = 'none';
            }, 500); // Matches the transition duration
        }
    }

    // Add event listeners for all projects
    projects.forEach(projectId => {
        const icon = document.getElementById(`section_fourth-content_body_submain_subtitle_icon_${projectId}`);
        if (icon) {
            icon.addEventListener('click', () => toggleContent(projectId));
        }
    });

    // Optional: Add styles dynamically for smooth animation
    const style = document.createElement('style');
    style.innerHTML = `
        .section_fourth-content_body_submain {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.5s ease, opacity 0.5s ease;
        }
    `;
    document.head.appendChild(style);

  });
  

  // Fifith

  document.addEventListener("DOMContentLoaded", function () {

    // Define an array of project IDs
    const projects = [
        'graphic',
        'web',
        'mobile',
        'presentation',
        '3d',
        'painting'
    ];

    // Function to toggle content visibility
    function toggleContent(projectId) {
        const iconImg = document.getElementById(`section_fifth-content_body_box-layout_work_icon_${projectId}`);
        const content = document.getElementById(`section_fifth-content_body_box-work_group_${projectId}`);

        // Check the current state and toggle
        if (iconImg.src.includes('Plus.svg')) {
            // Change the icon to Minus
            iconImg.src = '/assets/fifth-section/Icons/Minus.svg';

            // Show the content with animation
            content.style.display = 'flex';
            content.style.maxHeight = '1200px';
            content.style.opacity = '1';
            content.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
        } else {
            // Change the icon to Plus
            iconImg.src = '/assets/fifth-section/Icons/Plus.svg';

            // Hide the content with animation
            content.style.maxHeight = '0';
            content.style.opacity = '0';
            setTimeout(() => {
                content.style.display = 'none';
            }, 500); // Matches the transition duration
        }
    }

    // Add event listeners for all projects
    projects.forEach(projectId => {
        const icon = document.getElementById(`section_fifth-content_body_box-layout_work_icon_${projectId}`);
        if (icon) {
            icon.addEventListener('click', () => toggleContent(projectId));
        }
    });

    // Optional: Add styles dynamically for smooth animation
    const style = document.createElement('style');
    style.innerHTML = `
        .section_fifth-content_body_box-work_group {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.5s ease, opacity 0.5s ease;
        }
    `;
    document.head.appendChild(style);

  });
  document.addEventListener("DOMContentLoaded", function () {

    // Define an array of project classes (can be dynamic if needed)
    const projects = [
        { class: 'graphic', imgGroupId: 'section_fifth-content_body_box-work_design_img_group' },
        { class: 'web', imgGroupId: 'section_fifth-content_body_box-work_web_img_group' },
        { class: 'mobile', imgGroupId: 'section_fifth-content_body_box-work_mobile_img_group' },
        { class: 'presentation', imgGroupId: 'section_fifth-content_body_box-work_presentation_img_group' },
        { class: '3d', imgGroupId: 'section_fifth-content_body_box-work_3d_img_group' },
        { class: 'painting', imgGroupId: 'section_fifth-content_body_box-work_painting_img_group' }
    ];

    // Function to initialize each swiper
    function initializeSwiper(project) {
        try {
            const swiper = new Swiper(`.hall-swiper-container-${project.class}`, {
                slidesPerView: 5,
                spaceBetween: 10,
                navigation: {
                    nextEl: `#arrow_right_${project.class}`,
                    prevEl: `#arrow_left_${project.class}`,
                },
                loop: false,
                grabCursor: true,
                watchOverflow: true,
            });

            const mainImage = document.getElementById(project.imgGroupId);
            const slides = document.querySelectorAll(`#section_fifth-content_body_box-work_group_${project.class} .swiper-slide`);
            const allImages = document.querySelectorAll(`.section_fifth-content_body_box-layout_work_tag_mini_box img`);

            // Set the opacity of the first image to 1 initially
            if (allImages.length > 0) {
                allImages[0].style.opacity = 1; // Ensure the first image is fully visible
            }

            slides.forEach(slide => {
                slide.addEventListener('click', () => {
                    const img = slide.querySelector('img');
                    mainImage.src = img.src;
                    mainImage.alt = img.alt;

                    // Reset opacity for all images
                    allImages.forEach(image => {
                        image.style.opacity = 0.4; // Reset opacity
                    });

                    // Set opacity for clicked image to 1, but not the first image
                    if (img !== allImages[0]) {
                        img.style.opacity = 1;
                    }
                });
            });

        } catch (error) {
            console.error(`Error initializing Swiper for ${project.class}:`, error);
        }
    }

    // Initialize swiper for all projects
    projects.forEach(project => {
        initializeSwiper(project);
    });
});



  // Youtube
  document.addEventListener("DOMContentLoaded", () => {
    const playGroup = document.querySelector('.section_sixth-content-body_play_group');

    let isDragging = false; // สถานะการลาก
    let startY; // ตำแหน่ง Y เริ่มต้นเมื่อคลิก
    let scrollTop; // ตำแหน่ง scroll ด้านบนเริ่มต้น

    // เมื่อเริ่มคลิก
    playGroup.addEventListener('mousedown', (e) => {
        isDragging = true;
        playGroup.classList.add('dragging');
        startY = e.pageY - playGroup.offsetTop;
        scrollTop = playGroup.scrollTop;
        console.log("เริ่มลาก", { startY, scrollTop });
    });

    // เมื่อปล่อยคลิก
    playGroup.addEventListener('mouseup', () => {
        isDragging = false;
        playGroup.classList.remove('dragging');
        console.log("หยุดลาก");
    });

    // เมื่อเมาส์ออกนอกพื้นที่
    playGroup.addEventListener('mouseleave', () => {
        isDragging = false;
        playGroup.classList.remove('dragging');
    });

    // เมื่อเมาส์เคลื่อนที่
    playGroup.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // ถ้าไม่ได้ลาก ก็ไม่ทำอะไร
        e.preventDefault();
        const y = e.pageY - playGroup.offsetTop;
        const walk = (y - startY) * 2; // ความเร็วในการ scroll (ปรับได้)
        playGroup.scrollTop = scrollTop - walk;
    });
});


//เล่นวิดีโอ

document.addEventListener("DOMContentLoaded", () => {
  const videoFrame = document.getElementById("section_sixth-content-body_video");
  const playButtons = document.querySelectorAll("[id^=section_sixth-content-body_play]");

  // Map of play button IDs to video URLs
  const videoMap = {
    "section_sixth-content-body_play1": "https://www.youtube.com/embed/3jx-jb665fY?si=-8EsACtllSp_lhQY",
    "section_sixth-content-body_play2": "https://www.youtube.com/embed/6uInlUbbfq8?si=PeCDPoG96B6Ftuf4",
    "section_sixth-content-body_play3": "https://www.youtube.com/embed/8coGvKhCrSc?si=mdQtrS2prJcToA4I",
    "section_sixth-content-body_play4": "https://www.youtube.com/embed/1i8-vuHsOGg?si=pePg1cf_jfA_CJGW",
    "section_sixth-content-body_play5": "https://www.youtube.com/embed/TQJMXmKvYZk?si=Ij0U4GgosqXibL1M",
    "section_sixth-content-body_play6": "https://www.youtube.com/embed/A_D5Z6g1ft8?si=hSM7fZ9F6sVJrwXx",
  };

  function highlightButton(button) {
      playButtons.forEach(btn => {
          const img = btn.querySelector("img");
          const text = btn.querySelector("p");

          if (img) img.style.opacity = "1"; // Reset opacity
          if (text) text.classList.remove("text-gray"); // Reset text color
          if (text) text.classList.add("text-black");
      });

      const img = button.querySelector("img");
      const text = button.querySelector("p");

      if (img) img.style.opacity = "0.4"; // Set active opacity
      if (text) text.classList.remove("text-black");
      if (text) text.classList.add("text-gray"); // Highlight active text
  }

  // Initialize with the first button highlighted
  const initialButton = document.getElementById("section_sixth-content-body_play1");
  if (initialButton) {
      highlightButton(initialButton);
      videoFrame.src = videoMap[initialButton.id];
  }

  playButtons.forEach(button => {
      button.addEventListener("click", () => {
          // Update video source
          const videoSrc = videoMap[button.id];
          if (videoSrc) {
              videoFrame.src = videoSrc;
          }

          // Highlight the clicked button
          highlightButton(button);
      });
  });
});


//เลื่อนวิดีโอซ้ายขวา

document.addEventListener("DOMContentLoaded", () => {
  try {
    const swiper = new Swiper("#section_sixth-content-body_albums_list_cover_img-sekiro", {
      slidesPerView: 3, // จำนวนภาพที่แสดงพร้อมกัน
      spaceBetween: 6, // ช่องว่างระหว่างภาพ
      navigation: {
        nextEl: "#arrow_right-sekiro", // ปุ่มเลื่อนขวา
        prevEl: "#arrow_left-sekiro", // ปุ่มเลื่อนซ้าย
      },
      loop: false, // ไม่วนกลับไปจุดเริ่มต้น
      grabCursor: true, // เปลี่ยน cursor เป็นแบบลากได้
      watchOverflow: true, // ป้องกันปัญหา overflow
    });

  } catch (error) {
  }
});
document.addEventListener("DOMContentLoaded", () => {
  try {
    const swiper = new Swiper("#section_sixth-content-body_albums_list_cover_img-onepiece", {
      slidesPerView: 5, // จำนวนภาพที่แสดงพร้อมกัน
      spaceBetween: 6, // ช่องว่างระหว่างภาพ
      navigation: {
        nextEl: "#arrow_right-onepiece", // ปุ่มเลื่อนขวา
        prevEl: "#arrow_left-onepiece", // ปุ่มเลื่อนซ้าย
      },
      loop: false, // ไม่วนกลับไปจุดเริ่มต้น
      grabCursor: true, // เปลี่ยน cursor เป็นแบบลากได้
      watchOverflow: true, // ป้องกันปัญหา overflow
    });

  } catch (error) {
  }
});

document.addEventListener("DOMContentLoaded", () => {
  try {
    const swiper = new Swiper("#section_sixth-content-body_albums_list_cover_img-dragonball", {
      slidesPerView: 5, // จำนวนภาพที่แสดงพร้อมกัน
      spaceBetween: 6, // ช่องว่างระหว่างภาพ
      navigation: {
        nextEl: "#arrow_right-dragonball", // ปุ่มเลื่อนขวา
        prevEl: "#arrow_left-dragonball", // ปุ่มเลื่อนซ้าย
      },
      loop: false, // ไม่วนกลับไปจุดเริ่มต้น
      grabCursor: true, // เปลี่ยน cursor เป็นแบบลากได้
      watchOverflow: true, // ป้องกันปัญหา overflow
    });

  } catch (error) {
  }
});

document.addEventListener("DOMContentLoaded", () => {
  try {
    const swiper = new Swiper("#section_sixth-content-body_albums_list_cover_img-naruto", {
      slidesPerView: 5, // จำนวนภาพที่แสดงพร้อมกัน
      spaceBetween: 6, // ช่องว่างระหว่างภาพ
      navigation: {
        nextEl: "#arrow_right-naruto", // ปุ่มเลื่อนขวา
        prevEl: "#arrow_left-naruto", // ปุ่มเลื่อนซ้าย
      },
      loop: false, // ไม่วนกลับไปจุดเริ่มต้น
      grabCursor: true, // เปลี่ยน cursor เป็นแบบลากได้
      watchOverflow: true, // ป้องกันปัญหา overflow
    });

  } catch (error) {
  }
});

