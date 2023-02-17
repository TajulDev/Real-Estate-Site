// service swiper js
var swiper = new Swiper(".service__swiper", {
  slidesPerView: 2.4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
        breakpoints: {
          0: {
            spaceBetween: 20,
            slidesPerView: 1.4
          },
          575: {
            spaceBetween: 30,
            slidesPerView: 2.4
          },
          
        }

});