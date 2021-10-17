$(document).ready(function () {
// подключаем свайпер 

const unpublisedSwiper = new Swiper('.unpublished-swiper', {
  // Optional parameters
  touchEventsTarget: true,
  slidesOffsetAfter: 0,
  watchOverflow: false,
  slidesPerView: 5,
  spaceBetween: 30,

  breakpoints: {
    //   // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
    // when window width is >= 560px
      560: {
        slidesPerView: 3,
      },
      760: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
    },

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


const themeSwiper = new Swiper('.theme-swiper', {
  // Optional parameters
  speed: 900,
  touchEventsTarget: true,
  slidesOffsetAfter: 0,
  watchOverflow: false,
  // Default parameters
  autoHeight: false,
  fill: 'row',
  slidesPerView: 4,

  grid: {
    rows: 1,
  },
  
  breakpoints: {
    // when window width is >= 320px
      320: {
        grid: {
          rows: 2,
        },
        // rows: 2,  
        slidesPerRow: 2,
        slidesPerView: 2,
      },
      991: {
        grid: {
          rows: 1,
        },
        // rows: 1,
        slidesPerRow: 4,
        
      }
    },

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

    // плавная стрелка вверх
    $("#arrow").on("click","a", function (event) {
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
  
// открытие мобильного меню
var menuButton = document.querySelector(".menu-button")

menuButton.addEventListener('click', function () {
  document.querySelector(".header-mobile").classList.toggle("header-mobile__visible");
 // узнаем ширину скролла 

 // создадим элемент с прокруткой
 let div = document.createElement('div');

 div.style.overflowY = 'scroll';
 div.style.width = '50px';
 div.style.height = '50px';
 
 // мы должны вставить элемент в документ, иначе размеры будут равны 0
 document.body.append(div);
 let scrollWidth = (div.offsetWidth - div.clientWidth) + "px";
 
 div.remove();

  
  document.querySelector(".body").classList.toggle("body-scroll");

  if (document.querySelector(".body-scroll")) {
    document.querySelector(".header").style.paddingRight = scrollWidth;
  } else {
    document.querySelector(".header").style.paddingRight = 0;
  }
})


    // подключение модального окна

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal-dialog__close');
  if (modalButton) {
    modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  }
  
  function openModal() {

// узнаем ширину скролла 

 // создадим элемент с прокруткой
 let div = document.createElement('div');

 div.style.overflowY = 'scroll';
 div.style.width = '50px';
 div.style.height = '50px';
 
 // мы должны вставить элемент в документ, иначе размеры будут равны 0
 document.body.append(div);
 let scrollWidth = (div.offsetWidth - div.clientWidth) + "px";
 
 div.remove();

    document.querySelector(".body").classList.add("body-scroll");
    document.querySelector(".body-scroll").style.paddingRight = scrollWidth;
    document.querySelector(".header__menu-button").style.paddingRight = scrollWidth;

    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.addClass("modal-overlay__visible");
    modalDialog.addClass("modal-dialog__visible");

    if (modalButton) {
      document.body.onkeydown = function(e){
      e = e || window.event;
      var c = e.keyCode;
      if(c === 27) modalOverlay.removeClass("modal-overlay__visible") && 
      modalDialog.removeClass("modal-dialog__visible") && 
      document.querySelector(".body").classList.remove("body-scroll");
      document.querySelector(".body").style.paddingRight = 0;
      document.querySelector(".header").style.paddingRight = 0;
      document.querySelector(".header__menu-button").style.paddingRight = 0;
      }
    }    
      
      document.addEventListener("click", function (e) {
        const wrap = e.target.classList.contains('modal-overlay__visible');
        if(!wrap) return;
        e.preventDefault();
        modalOverlay.removeClass("modal-overlay__visible") && 
      modalDialog.removeClass("modal-dialog__visible") && 
      document.querySelector(".body").classList.remove("body-scroll");
      document.querySelector(".body").style.paddingRight = 0;
      document.querySelector(".header").style.paddingRight = 0;
    }.bind(this));
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.removeClass("modal-overlay__visible");
    modalDialog.removeClass("modal-dialog__visible");
    document.querySelector(".body").classList.remove("body-scroll");
    document.querySelector(".body").style.paddingRight = 0;

    document.querySelector(".header").style.paddingRight = 0;
  };

    // модалка из меню 

    var modalButtonMenu = $('[data-toggle=menu]');
    var closeModalButtonMenu = $('.modal-dialog__mobile');
    if (modalButtonMenu) {
      modalButtonMenu.on('click', openModalMenu);
      closeModalButtonMenu.on('click', closeModalMenu);
    }
    
    function openModalMenu() {

// узнаем ширину скролла 

 // создадим элемент с прокруткой
 let div = document.createElement('div');

 div.style.overflowY = 'scroll';
 div.style.width = '50px';
 div.style.height = '50px';
 
 // мы должны вставить элемент в документ, иначе размеры будут равны 0
 document.body.append(div);
 let scrollWidth = (div.offsetWidth - div.clientWidth) + "px";
 
 div.remove();

      var modalOverlay = $(".modal-overlay");
      var modalDialog = $(".modal-dialog");
      modalOverlay.addClass("modal-overlay__mobile");
      modalDialog.addClass("modal-dialog__visible");
  
      document.body.onkeydown = function(e){
        e = e || window.event;
        var c = e.keyCode;
        if(c === 27) modalOverlay.removeClass("modal-overlay__mobile") && 
        modalDialog.removeClass("modal-dialog__visible");
        }
        
        document.addEventListener("click", function (e) {
          const wrap = e.target.classList.contains('modal-overlay__mobile');
          if(!wrap) return;
          e.preventDefault();
          modalOverlay.removeClass("modal-overlay__mobile") && 
        modalDialog.removeClass("modal-dialog__visible");
      }.bind(this));
    };
  
    function closeModalMenu(event) {
      event.preventDefault();
      var modalOverlay = $(".modal-overlay");
      var modalDialog = $(".modal-dialog");
      modalOverlay.removeClass("modal-overlay__mobile");
      modalOverlay.removeClass("modal-overlay__visible");
      modalDialog.removeClass("modal-dialog__visible");
      if (document.querySelector(".header-mobile__visible")) {}
      else {
        document.querySelector(".body").classList.remove("body-scroll");
      document.querySelector(".header").style.paddingRight = 0;
    }
    };

    // подключение валидации  

  $('.form').each(function () {
    

    $.validator.methods.phone = function( value, element ) {
      return this.optional( element ) || /\+7+ \([0-9][0-9][0-9]\) +[0-9][0-9][0-9]+\-+[0-9][0-9]+\-+[0-9][0-9]+/.test( value );
    }

    $.validator.methods.email = function( value, element ) {
      return this.optional( element ) || /[a-z+0-9]+@[a-z]+\.[a-z]+/.test( value );
    }
    $(this).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phone: true
        }
      },
      messages: {
        name: {
          required: "Введите Ваше имя",
          minlength: jQuery.validator.format("Не менее 2 символов!")
        },
        email: {
          required: "Введите Вашу почту",
          email: "Требуемый формат name@domain.com"
        },
        phone: {
          required: "Введите Ваш телефон",
          phone: "Формат номера +7 (xxx) xxx-xx-xx"
        }
      }
    });
  });
  AOS.init();
})