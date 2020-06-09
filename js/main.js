$(document).ready(function(){

    $('.menu-burger').on('click', function(){
    $('.menu-body').slideToggle();
  });



   $('.slider').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      infinite: false,
      
   });

    $('.footer__about').slick({

      nextArrow: '<button type="button" class="footer-slick-btn footer-slick-next"></button>',
      prevArrow: '<button type="button" class="footer-slick-btn footer-slick-prev"></button>',
      loop:true,
      
    });

   $('.js-tab-trigger').on('click', function(){
      var tabName = $(this).attr('data-tab');
      var tab = $('.js-tab-choice[data-tab="'+tabName+'"]');

      $('.js-tab-trigger.active').removeClass('active');
      $(this).addClass('active');

      $('.js-tab-choice.active').removeClass('active');

      tab.addClass('active');


   });




});
