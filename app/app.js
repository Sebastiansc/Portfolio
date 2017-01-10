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
});
// Nav Bar end
