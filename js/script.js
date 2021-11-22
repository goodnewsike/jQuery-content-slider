$(document).ready(function() {
   // Set Options
    var speed = 500;        // fade speed
    var autoswitch = true;      //auto slider options
    var autoswitch_speed = 4000;        //auto slider speed
    
    // add initial active class
    $('#slider').first().addClass('active');
    
    // hide all slides
    $('.slide').hide();
    
    // show first slide
    $('.active').show();
    
    // next handler
    $('#next').on('click', nextSlide);
    
    // previous handler
    $('#prev').on('click', prevSlide);
    
    // auto slider handler
    if (autoswitch == true) {
            setInterval(nextSlide, autoswitch_speed);
    }
    
    // swtich to next slide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    
    // switch to previous slide
    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});