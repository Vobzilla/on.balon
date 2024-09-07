/** @format */

// Функція для відображення кнопки під час прокручування сторінки
export function showScrollButton() {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollBtn.style.display = "block"; // Показати кнопку
    } else {
      scrollBtn.style.display = "none"; // Сховати кнопку
    }
  };
}

// Функція для плавного прокручування сторінки до верху
export function scrollToTop() {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Плавна прокрутка
  });
}
