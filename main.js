import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto", 
    allowTouchMove: false, 
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 10000,
  });