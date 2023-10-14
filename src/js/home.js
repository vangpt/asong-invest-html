import '../styles/pages/home.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import Swiper from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Autoplay } from 'swiper/modules'

window.addEventListener('DOMContentLoaded', (e) => {
  AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
  })

  new Swiper('#investment-solution .swiper', {
    modules: [Navigation, Autoplay],
    navigation: {
      nextEl: '#next-status-solution',
      prevEl: '#prev-status-solution',
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 5000,
    },
  })

  new Swiper('#business-partners .swiper', {
    modules: [Navigation, Autoplay],
    navigation: {
      nextEl: '#next-status',
      prevEl: '#prev-status',
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 5000,
    },
  })
})
