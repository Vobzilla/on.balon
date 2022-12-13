/** @format */
const swiper = new Swiper(".swiper", {
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
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
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1050: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
