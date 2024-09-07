/** @format */
// gallery.js
export function initGallery() {
  $(document).ready(function () {
    $('[data-fancybox="gallery1"]').fancybox({
      loop: true,
      afterShow: function (instance, current) {
        // Затримка перед перенаправленням
        setTimeout(function () {
          // Знайдемо батьківський елемент <a> і отримаємо значення data-redirect
          const redirectUrl = $(current.opts.$orig).data("redirect");
          if (redirectUrl) {
            window.location.href = redirectUrl;
          }
        }, 3000); // Затримка в 2 секунди
      },
    });
  });
}
