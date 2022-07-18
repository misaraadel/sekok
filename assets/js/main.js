$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();

    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('active');
        $('.side-nav').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });

    $('.side-nav .overlay').click(function(){
        $('.nav-button').removeClass('active');
        $('.side-nav').removeClass('active-nav');
        $('body').removeClass('overflowNone')
    });

    $('.side-nav .close-nav').click(function(){
        $('.nav-button').removeClass('active');
        $('.side-nav').removeClass('active-nav');
        $('body').removeClass('overflowNone')
    });

    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag: true,
		mouseDrag: true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });

    $('.owl-team').owlCarousel({
        rtl: true,
        loop:true,
        margin: 16,
        nav:true,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('.owl-partner').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:true,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:7
            }
        }
    });
});