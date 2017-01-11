// Nav Bar
document.addEventListener("DOMContentLoaded", () => {
  $('.animation-wrapper').hide();
  $('.about-wrapper').hide();
  $('.contact-wrapper').hide();

  const prefix = (() => {
    const styles = window.getComputedStyle(document.documentElement, ''),
      pre = (Array.prototype.slice
        .call(styles)
        .join('')
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1],
      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre[0].toUpperCase() + pre.substr(1)
    };
  })();

  const animationEnd = `
                        ${prefix['lowercase']}AnimationEnd
                        ${prefix['lowercase']}animationend
                       `;
  $.fn.extend({
    animateCss: function (animationName) {
        $(this).addClass(`animated ${animationName}`).one(animationEnd, () => {
            // debugger;
            $(this).removeClass(`animated ${animationName}`);
            console.log($(this));
        });
    }
  });

  $('.popper li').mouseover( (e) => {
    $(e.currentTarget).animateCss('rubberBand');
  });

  $('.home').one(animationEnd, (e) => {
    $('.home-h2').animateCss('tada');
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
        'slow', () => $('.home-h2').animateCss('tada'));
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

});
// Nav Bar end
