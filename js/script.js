$(function(){

  $('.contentsList').click(function(){
    var $detail = $(this).find('.contentsList_Detail');
    if($detail.hasClass('open')){
      $detail.removeClass('open');
      $detail.slideUp();
    } else {
    $detail.addClass('open');
    $detail.slideDown();
    };
  });

  $(".pageLink").click(function(){
    var linkTo = $(this).attr('href');
    var linkPosition = $(linkTo).offset().top;
    var scrollSpeed = 500;

    $('html,body').animate({
      'scrollTop':linkPosition
    },scrollSpeed);
  });
});
