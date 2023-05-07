const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000
  },
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

addEventListener("DOMContentLoaded", function () {
  var pin = document.querySelector(".pin-extension")
  //safari 不显示 userAgent
  if (pin && !isSafari()) {
    pin.setAttribute("style", "display:block;")
  }
  if (isFirefox()) {
    pin.setAttribute("style", pin.getAttribute("style") + "right: 20px;")
  }
  if (!isMobile()) {
    var next = document.querySelector(".swiper-button-next");
    if (next) next.classList.remove("swiper-button-hidden")
    var prev = document.querySelector(".swiper-button-prev");
    if (prev) prev.classList.remove("swiper-button-hidden")
  }
})
function isMobile() {
  return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
}
function isSafari() {
  var userAgentString = navigator.userAgent;
  // Detect Chrome
  var chromeAgent = userAgentString.indexOf("Chrome") > -1;
  // Detect Safari
  var safariAgent = userAgentString.indexOf("Safari") > -1;
  // Discard Safari since it also matches Chrome
  if ((chromeAgent) && (safariAgent)) safariAgent = false;
  return safariAgent;
}
function isFirefox() {
  var userAgentString = navigator.userAgent;
  let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
  return firefoxAgent;
}