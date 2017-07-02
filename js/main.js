function toggleItem(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) {
      var current = this;
      for (var i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove('is-active');
        } else if (current.classList.contains('is-active') === true) {
          current.classList.remove('is-active');
        } else {
          current.classList.add('is-active')
        }
      }
      e.preventDefault();
    });
  };
}
toggleItem(document.querySelectorAll('.hamburger'));
