// Nav Bar
document.addEventListener("DOMContentLoaded", () => {
  $('.animation-wrapper').hide();
  $('.about-wrapper').hide();
  $('.contact-wrapper').hide();

  $('.home').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
    $('.home h2').addClass('animated tada');
  });

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
        'slow');
  });

  $('#contact-link').click( () => {
    $('html,body').animate({
        scrollTop:  $(document).height() + 1000},
        'slow');
  });

  $(document).scroll( () => {
    let navTop = $('nav').offset().top;
    let portfolioTop = $('.portfolio').offset().top;
    let barsTop = $('.fa-bars').offset().top;
    let aboutTop = $('.about').offset().top;
    let contactTop = $('.contact').offset().top;
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

    if ($(document).scrollTop() > portfolioTop - 250) {
      $('.animation-wrapper').show();
      $('.animation-wrapper').addClass('animated fadeIn');
    }

    if ($(document).scrollTop() > aboutTop - 350) {
      $('.about-wrapper').show();
      $('.about-wrapper').addClass('animated fadeIn');
    }

    if ($(document).scrollTop() > contactTop - 350) {
      $('.contact-wrapper').show();
      $('.contact-wrapper').addClass('animated fadeIn');
      $('.contact ul li').addClass('animated swing');
    }
  });

});
// Nav Bar end
