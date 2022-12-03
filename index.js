/** @format */

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  setWrapperSize: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1050: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
