import '../styles/pages/home.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

window.addEventListener('DOMContentLoaded', (e) => {
  AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
  })
})
