// Nav-bar fixed when scroll

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav-bar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    
  } else {
    navbar.classList.remove("sticky");
    
  }
}

// Scroll nav buttons

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { 
    var page = $(this).attr('href'); 
    var speed = 550; 
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); 
    return false;
  });
});

