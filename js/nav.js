$(document).ready(function() {
  $('.fa-bars').click(function() {
    $('.tabs').toggle('slow');
  });

  // Show main
  $('.tabs-about').click(function() {
    $('.main-about').css('display', 'block');
    $('.main-portfolio').css('display', 'none');
    $('.main-contact').css('display', 'none');
  });


  //Show Portfolio
  $('.tabs-portfolio').click(function() {
    $('.main-about').css('display', 'none');
    $('.main-portfolio').css('display', 'block');
    $('.main-contact').css('display', 'none');
  });

  // Show Contact
  $('.tabs-contact').click(function() {
    $('.main-about').css('display', 'none');
    $('.main-portfolio').css('display', 'none');
    $('.main-contact').css('display', 'block');
  });
});