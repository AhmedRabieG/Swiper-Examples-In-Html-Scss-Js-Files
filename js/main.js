
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';


const swiper = new Swiper('.swiper-container__first', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: false,
});


const swiperTest = new Swiper('.swiper-container__Test', {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: false,
});