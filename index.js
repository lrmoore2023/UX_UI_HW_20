$(document).ready(function() {
  $('a.nav-link').click(function(e) {
      e.preventDefault();
      var targetSection = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(targetSection).offset().top - 110 // Adjust the offset value as needed
      }, 1000);
  });
});