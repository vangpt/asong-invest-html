import '../styles/pages/aboutUs.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import Swiper from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules'

window.addEventListener('DOMContentLoaded', (e) => {
  AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
  })

  new Swiper('#our-team .swiper', {
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
    },
  })
})
