const checkScrolls = () => $(document).scroll( () => {
  let navTop = $('nav').offset().top;
  let portfolioTop = $('.portfolio').offset().top;
  let barsTop = $('.fa-bars').offset().top;
  let aboutTop = $('.about').offset().top;
  let contactTop = $('.contact').offset().top;

  let portLoaded, contactLoaded, aboutLoaded;

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

  // if ($(document).scrollTop() > portfolioTop - 100) {
  //   if (portLoaded) return;
  //   portLoaded = true;
  //   $('.animation-wrapper').addClass('loaded');
  // }

  if ($(document).scrollTop() > aboutTop - 350) {
    $('.about-wrapper').show();
    $('.about-wrapper').addClass('animated fadeIn');
  }

  if ($(document).scrollTop() > contactTop - 500) {
    $('.contact-wrapper').show();
    $('.contact').addClass('animated fadeIn');
  }
});

export default checkScrolls;
