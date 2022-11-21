jQuery(function ($) {
    "use strict";

    /*======================Header slider====================*/

    if ($('.home_slider').length) {
        $('.home_slider').slick({
            vertical: true,
            arrows: false,
            dots: true
        });
    }

    /*======================Burger menu====================*/
    if ($(".fa-bars ").length) {
        $('.fa-bars ').on('click', function () {
            $('.nav-mob').show();
            $(this).hide();
            $('.fa-xmark').show();

        });

        $('.fa-xmark').on('click', function () {
            $('#menu nav>.ul').hide();
            $(this).hide();
            $('.fa-bars').show();
            $('.nav-mob').hide();
        });
    }
    /*======================Twitter slider====================*/

    $('.content_slider_twitter').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        accessibility: false,
        speed: 1000,
        adaptiveHeight: true,
        appendArrows: $('.twitt_slider .arrows'),
        prevArrow: "<span  class=\"up\"><i class=\"fa-solid fa-circle-arrow-up\"></i></span>",
        nextArrow: "<span class=\"down\"><i class=\"fa-solid fa-circle-arrow-down\"></i></span>"
    });

    $('.content_slider_twitter').slick('setPosition');

    /*======================Testimonial slider====================*/
    if ($('.testimonial_carusel').length) {
        $('.testimonial_carusel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $('.testimonial_slider_box'),

            prevArrow: "<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
            // appendArrows: $('.right_arrow'),
            nextArrow: " <div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    }

    /*======================Carousel Slider For Shop Items====================*/
    if ($('.shop_carusel').length) {
        $('.shop_carusel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $('.shop_slider_navigation'),
            prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
            nextArrow: "<div class=\"left\"><i class=\"fas fa-arrow-right\"></i></div>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    /*======================open_video / magnificPopup ====================*/
    if ($('.open_video').length) {
        $('.open_video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    }


});



