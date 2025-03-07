
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
  slidesPerView: 1,
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
////////////////////////////////////////////////////

const testimonialsSlider = new Swiper('.testimonials-swiper', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 15,
    modifier: 2,
    slideShadows: false
  },
  spaceBetween: 60,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} w-[57px] h-[57px] rounded-full overflow-hidden">
                <img src="./images/testimonials-slider/${index+1}.png" alt="person">
              </div>`;
    },
  }

});

////////////////////////////////////////////////////
  const ourLatestSlider = new Swiper(".ourLatest-swiper", {
    slidesPerView: 3.5,
    spaceBetween: 32,
    parallax: true,
    autoplay: {
      delay: 150000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".ourLatest-swiper__pagination",
      clickable: true,
    },
    breakpoints: {
      370: {
        slidesPerView: 1.5,
        spaceBetween: 32,
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
      1100: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 32,
      },
    },
  });
///////////////////////////////////////////////

const ourClientsSlider = new Swiper('.ourClients-swiper', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 5000,
  allowTouchMove: false,
  autoplay: {
      delay: 1,
      disableOnInteraction: false
  },
});

/////////////////////////////////////////////////

const tdfSlider = new Swiper('.tdf-hero-swiper', {
  parallax: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
      delay: 20000,
  },
  pagination: {
    el: ".tdf-hero-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
});


var slidesCount = 0;
var slidesElements = [];
var isSliding = false;
var isAnimationStarted = false;
var timeOut;


  
const ourServicesSlider = new Swiper('.ourServices-swiper', {
  spaceBetween: 16,
  slidesPerView: "auto",
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   1280: {
    //     slidesPerView: "auto",
    //     spaceBetween: 16,
    //   },
    // },
    on: {
      init: function () {
        slidesCount = this.slides.length;
        slidesElements = this.slides;
        
        // Set first slide as active by default
        if (slidesElements.length > 0) {
          slidesElements[0].classList.add('active');
        }
    
        slidesElements.forEach(function (el) {
          el.addEventListener('mouseenter', function () {
            if (isSliding) return;
            
            // Remove active class from all slides
            slidesElements.forEach(slide => slide.classList.remove('active'));
            
            // Add active class to current slide
            el.classList.add('active');
            // futurefaceOurServicesSlider.autoplay.stop();
          });
    
          el.addEventListener('mouseleave', function () {
            if (isSliding) return;
            
            // Remove active from current slide
            // el.classList.remove('active');
            
            // Restore active state to first slide
            if (slidesElements.length > 0) {
              // slidesElements[0].classList.add('active');
            }
            
          });
        });
      },
      beforeTransitionStart: function () {
        isSliding = true;
        isAnimationStarted = true;
      },
      transitionEnd: function () {
        isSliding = false;
        isAnimationStarted = false;
      }
    }
   

});