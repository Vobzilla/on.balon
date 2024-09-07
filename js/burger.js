/** @format */

export function toggleBurgerMenu(burgerIconId, mobileMenuId) {
  const burgerIcon = document.getElementById(burgerIconId);
  const mobileMenu = document.getElementById(mobileMenuId);
  const burgerIconImg = document.getElementById("burger-icon-img");

  if (burgerIcon && mobileMenu) {
    // Відкриваємо/закриваємо меню при натисканні на бургер-іконку
    burgerIcon.addEventListener("click", function (event) {
      if (mobileMenu.classList.contains("nav__mob--active")) {
        // Закриваємо меню
        mobileMenu.classList.remove("nav__mob--active");

        // Прибираємо меню після анімації закриття
        setTimeout(() => {
          mobileMenu.style.display = "none"; // Приховуємо меню
        }, 500); // Таймер збігається з тривалістю transition

        burgerIconImg.src = "img/burger-icon.svg"; // Повертаємо бургер-іконку
      } else {
        // Відкриваємо меню
        mobileMenu.style.display = "block"; // Відображаємо меню перед анімацією
        setTimeout(() => {
          mobileMenu.classList.add("nav__mob--active");
        }, 0); // Виставляємо затримку для плавності
        burgerIconImg.src = "img/close-icon.svg"; // Змінюємо на хрестик
      }

      event.stopPropagation(); // Зупиняємо поширення події, щоб клік на іконку не закривав меню
    });

    // Закриваємо меню при кліці на будь-яке місце на сторінці
    document.body.addEventListener("click", function () {
      if (mobileMenu.classList.contains("nav__mob--active")) {
        mobileMenu.classList.remove("nav__mob--active");

        // Прибираємо меню після анімації закриття
        setTimeout(() => {
          mobileMenu.style.display = "none"; // Приховуємо меню
        }, 500); // Таймер збігається з тривалістю transition

        burgerIconImg.src = "img/burger-icon.svg"; // Повертаємо бургер-іконку при закритті
      }
    });

    // Перешкоджаємо закриттю меню при кліці всередині самого меню
    mobileMenu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  } else {
    console.error("Element with provided ID not found");
  }
}
