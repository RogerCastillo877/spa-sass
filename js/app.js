
// window.swiper = new Swiper({
//   el: '.slider__container',
//   slideClass: 'slider__slide',
//   createElements: true,
//   autoplay: {
//     delay: 5000
//   },
//   lopp: true,
//   pagination: true,
//   navigation: true
// });

let swiper = new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});