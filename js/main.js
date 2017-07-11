document.getElementsByClassName('hamburger')[0].addEventListener('click', function() {
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active')
      document.getElementsByClassName('nav')[0].classList.remove('visible')
    }
    else {
      this.classList.add('is-active')
      document.getElementsByClassName('nav')[0].classList.add('visible')
    }
})
