/*global $ */
(function($) {
    "use strict";

    // Loader 
    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').addClass('animate');

        const myTimeout = setTimeout(loaderAnimate, 3000);

        function loaderAnimate() {
            $('.loaderLogo').hide();
            $('.loader').removeClass('animate');
            
            clearTimeout(myTimeout);

            $('.loader').fadeOut(1000, function () {
                $(this).remove();
                $('body').removeClass('stopScroll');
            });
        }
    });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $(this).toggleClass('rotate');
        $('.navMenu').toggleClass('show');
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });  


    // Header OWL 
    $('.owlHome').owlCarousel({
        rtl:true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    
    // Show / Hide block img animation 
    var position = $('.blocks').position();
    console.log({position})
    $(window).scroll( function(){
        let sT =  $('.blocks').offset().top - 500,
            wT =  $(this).scrollTop();
        if ( wT > sT ){
            $('.blockTitle').addClass('scrolled');
          } else {
            $('.blockTitle').removeClass('scrolled');
          }
    });

    // Scroll To Top 
    // $('.up').click( function() {
    //     $('html, body').animate({ 
    //         scrollTop: 0
    //     }, 2000);
    // });


    // INPUT ANIMATION 
    $('.filedInput').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.filedInput').focus(function(){
        $(this).parent().addClass('focused');
    });

    $('.filedInput').focusout(function(){
        if($(this).val() === "") $(this).parent('.field').removeClass('focused');
    });

    $('button[type="reset"]').on('click' , function(){
        $('.field').removeClass('focused');
    });

    // init wow 
    new WOW().init();

})(jQuery);

