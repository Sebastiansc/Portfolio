const checkScrolls = () => $(document).scroll( () => {
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
    $('.animation-wrapper').addClass('fadeIn');
  }

  if ($(document).scrollTop() > aboutTop - 350) {
    $('.about-wrapper').show();
    $('.about-wrapper').addClass('fadeIn');
  }

  if ($(document).scrollTop() > contactTop - 350) {
    $('.contact-wrapper').show();
    $('.contact-wrapper').animateCss('fadeIn');
    $('.contact ul li').animateCss('swing');
  }
});

export default checkScrolls;
