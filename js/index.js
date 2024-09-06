/** @format */
// index.js
import { initGallery } from "./gallery.js";
import { initSlider } from "./slider.js";
import { showScrollButton, scrollToTop } from "./scrollToTop.js";
import { toggleBurgerMenu } from "./burger.js";

// Ініціалізація всіх модулів
$(document).ready(function () {
  initGallery();
  initSlider();
});

showScrollButton();
scrollToTop();
toggleBurgerMenu("burger-icon", "nav-mob");
