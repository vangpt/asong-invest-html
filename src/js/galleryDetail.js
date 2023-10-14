import '../styles/pages/galleryDetail.css'

import Swiper from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, EffectFade, Thumbs } from 'swiper/modules'

window.addEventListener('DOMContentLoaded', () => {
  const swipperBottom = new Swiper('#swipper-bottom', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  })
  new Swiper('#swipper-top', {
    modules: [Navigation, Thumbs, EffectFade],
    loop: true,
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swipperBottom,
    },
  })
})
