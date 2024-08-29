/** @format */

// slider.js
export function initSlider() {
  $(document).ready(function () {
    $(".slider").slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });
  });
}
