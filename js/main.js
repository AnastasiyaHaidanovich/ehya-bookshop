$(document).ready(function () {
    var menuButton = document.querySelector(".menu-button")

    menuButton.addEventListener('click', function () {
      document.querySelector(".header-mobile").classList.toggle("header-mobile__visible");
      document.querySelector(".body").classList.toggle("body-scroll");
    })

    
  $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

})