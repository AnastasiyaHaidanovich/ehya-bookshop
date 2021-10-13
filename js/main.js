$(document).ready(function () {
// подключаем свайпер 
const themeSwiper = new Swiper('.theme-swiper', {
  // Optional parameters
  speed: 900,
  touchEventsTarget: true,
  slidesOffsetAfter: 0,
  slidesPerGroup: 2,
  watchOverflow: false,
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 26,
  // enabled: false,
  // Responsive breakpoints
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2/2,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.theme__button-next',
    prevEl: '.theme__button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }, 

  
});

const unpublisedSwiper = new Swiper('.unpublished-swiper', {
  // Optional parameters
  touchEventsTarget: true,
  slidesOffsetAfter: 0,
  watchOverflow: false,
  slidesPerView: 5,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.unpublished__button-next',
    prevEl: '.unpublished__button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }, 
});


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

    // подключаем видео с ютуба
    var player;
    $('.story-wide__button').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'WazZXwlmO6I',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    var player1;
    $('.story-video__button-first').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player1', {
        height: '100%',
        width: '100%',
        videoId: 'WazZXwlmO6I',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    var player2;
    $('.story-video__button-second').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player2', {
        height: '100%',
        width: '100%',
        videoId: 'WazZXwlmO6I',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    var player3;
    $('.story-video__button-third').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player3', {
        height: '100%',
        width: '100%',
        videoId: 'WazZXwlmO6I',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    function videoPlay() {
      player.videoPlay();
    }

    
})