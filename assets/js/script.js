// menu js
const menubar = document.querySelector('.menu__bar')
const crossbar = document.querySelector('.cross__bar')
const menu = document.querySelector('.mobile__menu')

menubar.addEventListener('click', ()=>{
  menu.classList.toggle('show')
})

crossbar.addEventListener('click', ()=>{
  if(menu.classList.contains('show')){
    menu.classList.remove('show')
  }
})



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


// review swiper js
var swiper = new Swiper(".review__swiper", {
  slidesPerView: 3.4,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
        breakpoints: {
          0: {
            spaceBetween: 20,
            slidesPerView: 1
          },

          576:{
            slidesPerView : 1.7
          },

          768: {
            spaceBetween: 30,
            slidesPerView: 2.7
          },

          1199: {
            slidesPerView: 3.7
          }
          
        }
});