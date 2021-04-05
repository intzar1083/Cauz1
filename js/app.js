// $('#demo').tabsA();
$('#demo').tabsA({

  // width
  width: 750,

  // CSS class for tabs container
  containerClass: 'tabs-main-wrapper',

  // initial tab
  defaultTab: 0

});
var swiper = new Swiper('.fashion-swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.popular-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.popular-slide-next',
    prevEl: '.popular-slide-prev',
  },
});