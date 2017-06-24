$(document).ready(function() {
    $(".bars").click(function() {
        $("#veil").toggle();
        $("body").css("overflow", "hidden");
        $("header > nav ul").css("left", 0);
    });
    
    $("#close").click(function() {
        $("#veil").toggle();
        $("body").css("overflow", "auto");
        $("header > nav ul").css("left", "-430px");
    });
    
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        $("#veil").toggle();
        $("body").css("overflow", "auto");
        $("header > nav ul").css("left", "-430px");
        
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
            location.hostname == this.hostname
        ) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {

                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        
        if (y > 600) {
            $('#return').fadeIn();
        } else {
            $('#return').fadeOut();
        }
    });
});