//Change theme
// Set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// Toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    document.getElementById("moon").classList.remove("dnone");
    document.getElementById("sun").classList.add("dnone");
  } else {
    setTheme("theme-dark");
    document.getElementById("sun").classList.remove("dnone");
    document.getElementById("moon").classList.add("dnone");
  }
}

// Set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("sun").classList.remove("dnone");
    document.getElementById("moon").classList.add("dnone");
  } else {
    setTheme("theme-light");
    document.getElementById("moon").classList.remove("dnone");
    document.getElementById("sun").classList.add("dnone");
  }
})();

// Slider - Slick
$(document).ready(function () {
  $(".banner").slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  });
});

// Back to Top
var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
