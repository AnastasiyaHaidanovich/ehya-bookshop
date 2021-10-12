$(document).ready(function () {
  // открытие мобильного меню
    var menuButton = document.querySelector(".menu-button")

    menuButton.addEventListener('click', function () {
      document.querySelector(".header-mobile").classList.toggle("header-mobile__visible");
      document.querySelector(".body").classList.toggle("body-scroll");
    })

    // изменение цвета иконок-сердечек
    var heartToggle = document.querySelector(".recommend-description__heart");

    heartToggle.addEventListener('click', function () {
      document.querySelector(".recommend-description__heart").classList.toggle("recommend-description__heart-red");
 })
    var heartToggle = document.querySelector(".recommend-description__heart-1");

    heartToggle.addEventListener('click', function () {
      document.querySelector(".recommend-description__heart-1").classList.toggle("recommend-description__heart-red");
    })
    var heartToggle = document.querySelector(".recommend-description__heart-2");

    heartToggle.addEventListener('click', function () {
      document.querySelector(".recommend-description__heart-2").classList.toggle("recommend-description__heart-red");
    })
    var heartToggle = document.querySelector(".recommend-description__heart-3");

    heartToggle.addEventListener('click', function () {
      document.querySelector(".recommend-description__heart-3").classList.toggle("recommend-description__heart-red");
    })
    var heartToggle = document.querySelector(".recommend-description__heart-4");

    heartToggle.addEventListener('click', function () {
      document.querySelector(".recommend-description__heart-4").classList.toggle("recommend-description__heart-red");
    })
    var heartToggle = document.querySelector(".recommend-description__heart-5");

    heartToggle.addEventListener('click', function () {
      document.querySelector(".recommend-description__heart-5").classList.toggle("recommend-description__heart-red");
    })
  
// плавные якорные ссылки
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

})