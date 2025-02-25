
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

const anmaSwiper = new Swiper('.swiper-container__anma',{
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
    
})
const programsSwiper = new Swiper('.swiper-anma-programs', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
    }
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

// const roboxSwiber = new Swiper('.robox-swiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     speed: 400,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     loop: false,
// });

const varietyMenu = [
  {
    title: 'Schedules Management',
  },
  {
    title: 'Excuses'
  },
  {
    title: 'Vacations'
  },
  {
    title: 'Extra-Services'
  },
  {
    title: 'Updating Attendance'
  },
  {
    title: 'Attendance Verification '
  },
  {
    title: 'Absent & Late Statements'
  }

]

const roboxSwiber = new Swiper('.robox-swiper', {
  slidesPerView: 5,
  loop: true,
  speed: 1500,
  parallax: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.robox-swiper__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return ' <li class="whitespace-nowrap ' + className + '">' +
       varietyMenu[index]?.title + '</li>'
    }
  }
})

console.log(varietyMenu)