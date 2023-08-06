$(document).ready(function() {
    $('a.nav-link').click(function(e) {
      e.preventDefault();
      var targetSection = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(targetSection).offset().top
      }, 1000);
    });
  });