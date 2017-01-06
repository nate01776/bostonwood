function init() {
  window.addEventListener('scroll', function(event) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 50,
        header = document.getElementsByClassName("top-header");
        nav = document.getElementsByClassName("sidebar")
    if (distanceY > shrinkOn) {
      header[0].className += " smaller";
      nav[0].className += " smaller";
    } else {
      if (header[0].classList.contains("smaller")) {
        header[0].className = "top-header"
        nav[0].className = "sidebar"
      }
    }
  });
}

window.onload = init()