$(function(){
  $('.pageLink').click(function(){
    var linkTo = $(this).attr('href');
    var linkPosition = $(linkTo).offset().top;
    var scrollSpeed = 500px;

    $('html,body').animate({
      'scrollTop':linkPosition
    },scrollSpeed);
  };
});
