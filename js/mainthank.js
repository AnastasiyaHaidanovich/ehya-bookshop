$(document).ready(function () {
// открытие мобильного меню
var menuButton = document.querySelector(".menu-button")

menuButton.addEventListener('click', function () {
  document.querySelector(".header-mobile").classList.toggle("header-mobile__visible");
  document.querySelector(".body").classList.toggle("body-scroll");
})

// подключение модального окна

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal-dialog__close');
if (modalButton) {
  modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);
}

function openModal() {
  document.querySelector(".body").classList.add("body-scroll");
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
    }
  }    
    
    document.addEventListener("click", function (e) {
      const wrap = e.target.classList.contains('modal-overlay__visible');
      if(!wrap) return;
      e.preventDefault();
      modalOverlay.removeClass("modal-overlay__visible") && 
    modalDialog.removeClass("modal-dialog__visible") && 
    document.querySelector(".body").classList.remove("body-scroll");
  }.bind(this));
};

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal-overlay");
  var modalDialog = $(".modal-dialog");
  modalOverlay.removeClass("modal-overlay__visible");
  modalDialog.removeClass("modal-dialog__visible");
  document.querySelector(".body").classList.remove("body-scroll");
};

  // модалка из меню 

  var modalButtonMenu = $('[data-toggle=menu]');
  var closeModalButtonMenu = $('.modal-dialog__mobile');
  if (modalButtonMenu) {
    modalButtonMenu.on('click', openModalMenu);
    closeModalButtonMenu.on('click', closeModalMenu);
  }
  
  function openModalMenu() {
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