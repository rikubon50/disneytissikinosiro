$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.element').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });


  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.element1').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein1");
        }
      });
    });
  });

$(function() {
 
  // 一旦hide()で隠してフェードインさせる
  $('.main-comp').hide().fadeIn('3000');
 
});

$(function(){
    //クリックで動く
    $('.nav-open').click(function(){
        $(this).toggleClass('active');
        $(this).next('nav').slideToggle();
    });
});

$(function () {
  $(".slider").slick({
    autoplay: true,
    dots: true,
  });
});