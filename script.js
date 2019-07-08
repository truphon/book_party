$(function(){
  $('.pageLink').click(function(){
    var linkTo = $(this).attr('href');
    var linkPosition = $(linkTo).offset().top;
    var scrollSpeed = 500;

    $('html,body').animate({
      'scrollTop':linkPosition
    },scrollSpeed);
  };
});
