/** @format */
// index.js
import { initGallery } from "./gallery.js";
import { initSlider } from "./slider.js";
import { showScrollButton, scrollToTop } from "./scrollToTop.js";

// Ініціалізація всіх модулів
$(document).ready(function () {
  initGallery();
  initSlider();
});

showScrollButton();
scrollToTop();
