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

  $('#home-link').click( () => {
    $('html,body').animate({
        scrollTop: $(".home").offset().top + 20},
        'slow');
  });

  $('#port-link').click( () => {
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top + 20},
        'slow');
  });

  $('#about-link').click( () => {
    $('html,body').animate({
        scrollTop: $(".about").offset().top + 20},
        'fast');
  });

  $('#contact-link').click( () => {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top + 20},
        'fast');
  });

  $(document).scroll( () => {
    let navTop = $('nav').offset().top;
    let portfolioTop = $('.portfolio').offset().top;
    let barsTop = $('.fa-bars').offset().top;
    let aboutTop = $('.about').offset().top;
    if (navTop > aboutTop || barsTop > aboutTop){
      $('nav').removeClass('light-nav');
      $('.fa-bars').removeClass('light-bars');
    } else if ( navTop > portfolioTop || barsTop  > portfolioTop ) {
      $('nav').addClass('light-nav');
      $('.fa-bars').addClass('light-bars');
    } else {
      $('nav').removeClass('light-nav');
      $('.fa-bars').removeClass('light-bars');
    }
  });
});
// Nav Bar end
