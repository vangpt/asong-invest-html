window.addEventListener('DOMContentLoaded', function () {
  const doc = this.document

  const navBtn = doc.querySelector('#nav-btn')
  const navSP = doc.querySelector('#nav-sp')
  const navCloseBtn = doc.querySelector('#nav-close-btn')
  const backdrop = doc.querySelector('#backdrop')

  function toggleNavSP() {
    if (navSP.classList.contains('active')) {
      navSP.classList.remove('active')
      backdrop.classList.remove('fixed')
      backdrop.classList.add('hidden')
      doc.body.style.overflow = 'initial'
    } else {
      navSP.classList.add('active')
      backdrop.classList.add('fixed')
      backdrop.classList.remove('hidden')
      doc.body.style.overflow = 'hidden'
    }
  }

  function closeNavSP() {
    navSP.classList.remove('active')
    backdrop.classList.remove('fixed')
    backdrop.classList.add('hidden')
    doc.body.style.overflow = 'initial'
  }

  navBtn.addEventListener('click', toggleNavSP)
  navCloseBtn.addEventListener('click', closeNavSP)
})
