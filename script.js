// Nav-bar fixed when scroll

$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 856) {
      $('#nav-bar').addClass('navbar-fixed');
      $('#nav-bar').css({'position' : 'fixed'});
    }
    if ($(window).scrollTop() <= 856) {
      $('#nav-bar').removeClass('navbar-fixed');
      $('#nav-bar').css({'position' : ''});
    }
  });
});

// Scroll nav buttons

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { 
    var page = $(this).attr('href'); 
    var speed = 550; 
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); 
    return false;
  });
});

