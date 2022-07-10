/** @format */

(() => {
  const refs = {
    openMenuBtn: document.querySelector(".auth-nav__open-btn"),
    closeMenuBtn: document.querySelector(".mob-menu__close-btn"),
    Menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.Menu.classList.toggle("is-hidden");
  }
})();
