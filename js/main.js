$(document).ready(function () {
    var menuButton = document.querySelector(".menu-button")

    menuButton.addEventListener('click', function () {
      document.querySelector(".header-mobile").classList.toggle("header-mobile__visible");
      document.querySelector(".body").classList.toggle("body-scroll");
    })
})