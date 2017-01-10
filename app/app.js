// Nav Bar
document.addEventListener("DOMContentLoaded", () => {
  $('.fa-bars').click( e => {
    $('.fa-bars').toggle('fast', () => {
      $('nav').toggleClass('hidden-xs');
    });
  });

  $('.fa-times').click( e => {
    $('nav').toggleClass('hidden-xs');
    $('.fa-bars').toggle();
  });

  $('#port-link').click( () => {
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top + 20},
        'slow');
  });

  $(document).scroll( () => {
    if ($('nav').offset().top > $('.portfolio').offset().top
        || $('.fa-bars').offset().top > $('.portfolio').offset().top) {
      $('nav').addClass('light-nav');
      $('.fa-bars').addClass('light-bars');
    } else {
      $('nav').removeClass('light-nav');
      $('.fa-bars').removeClass('light-bars');
    }
  });
});
// Nav Bar end
