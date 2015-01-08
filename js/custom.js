
/* ==============================================
 Page Preloader
 =============================================== */

$(window).load(function() {
	$(".loader").delay(300).fadeOut();
	$(".animationload").delay(600).fadeOut("slow");
});

/* ==============================================
disables for mobile
 =============================================== */

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

 var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    if ( ms_ie ) {
        //IE specific code goes here
    }

/* ==============================================
 NiceScroll
 =============================================== */

jQuery("html").niceScroll({
    scrollspeed: 90,
    mousescrollstep: 25,
    cursorwidth: 14,
    cursorcolor: '#ea6060',
    autohidemode: false,
    zindex: 9999999,
    horizrailenabled: false,
    cursorborderradius: 0
});

/* ==============================================
 Sticky header on scroll
 =============================================== */

$(window).load(function() {
    $(".sticky").sticky({topSpacing: 0});
});

/* ==============================================
 Parallax
 =============================================== */

$(window).stellar({
    horizontalScrolling: false,
    responsive: true,
     scrollProperty: 'scroll',
     parallaxElements: false,
     horizontalScrolling: false,
     horizontalOffset: 0,
     verticalOffset: 0
});

/* ==============================================
 Owl carousel for testimonials
 =============================================== */

$(document).ready(function() {
    $("#testi-carousel").owlCarousel({
        // Most important owl features
        items: 1,
        slideSpeed : 900,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        stopOnHover: false,
        startDragging: true,
        autoPlay: 10000
    });
});

/* ==============================================
 Owl carousel for Upcoming Project
 =============================================== */

// $(document).ready(function() {
//     $("#project-carosel").owlCarousel({
//         // Most important owl features
//         slideSpeed : 1200,
//         items: 1,
//         itemsCustom: false,
//         itemsDesktop: [1199, 1],
//         itemsDesktopSmall: [980, 1],
//         itemsTablet: [768, 1],
//         itemsTabletSmall: false,
//         itemsMobile: [479, 1],
//         singleItem: false,
//         stopOnHover: false,
//         startDragging: true,
//     });
// });

/* ==============================================
 Owl carousel for Twitter-Tweet
 =============================================== */

// $(document).ready(function() {
//     $("#twitter").owlCarousel({
//         // Most important owl features
//         slideSpeed : 300,
//         items: 1,
//         itemsCustom: false,
//         itemsDesktop: [1199, 1],
//         itemsDesktopSmall: [980, 1],
//         itemsTablet: [768, 1],
//         itemsTabletSmall: false,
//         itemsMobile: [479, 1],
//         singleItem: false,
//         stopOnHover: false,
//         startDragging: true,
//         autoPlay: 8000
//     });
// });


/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

var wow = new WOW(
    {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 10, // distance to the element when triggering the animation (default is 0)
        mobile: false        // trigger animations on mobile devices (true is default)
    }
);
wow.init();

/* ==============================================
 Smooth Scroll To Anchor
 =============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 60
        }, 1800, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(function() {
    $('.actionButton').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1800, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('.request_now').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1800, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* ==============================================
Scroll to top
=============================================== */
 

    // $('.back-to-top').click(function(){
    //     $("html, body").animate({ scrollTop: 0 }, 1000);
    //     return false;
    // });
/* ==============================================
Validate Contact Us Data
=============================================== */
function ValidateContactUs() {

    var title = $("#name").val();

    var err = "";
    if (title == "Name" || title == "" || title == null) {
        $("#name").addClass("validation");
        $(".validationTitle").show();
        var err = "error";
    } else {
        $(".validationTitle").hide();
        $("#name").removeClass("validation");
    }
    var email = $("#email1").val();
    if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
        $("#email1").addClass("validation");
        $(".validationEmail").show();
        var err = "error";
    } else {
        $("#email1").removeClass("validation");
        $(".validationEmail").hide();
    }
    var title = $("#message").val();
    if (title == "Message" || title == "" || title == null) {
        $("#message").addClass("validation");
        $(".validationMessage").show();
        var err = "error";
    } else {
        $("#message").removeClass("validation");
        $(".validationMessage").hide();
    }
    return err;
}
/* ==============================================
Contact us submit button event
=============================================== */
$("#submit_btn").click(function(e) {
    if (ValidateContactUs() == "") {
        var resulttext = $.ajax({
            type: "POST",
            url: "contact.php",
            data: $("#form1").serialize(),
            async: false,
            success: function(status) {}
        }).responseText;

        $("#successmsg1").html(resulttext);
        $("#form1").delay(100).slideUp(1000, function() {

            $('#successmsg1').delay(500).slideDown(500);
        });
        $("#name").val('');
        $("#email1").val('');
        $("#message").val('');
    }
    e.preventDefault();
    return false;
});

/* ==============================================
 Volute Features script
 =============================================== */

$("#accordion a").click(function(e) {

    if($(this).hasClass("panel1")){
        $(".pan1").show();
        $(".pan2").hide();
        $(".pan3").hide();
        $(".pan4").hide();
        $(".pan5").hide();
    }else if($(this).hasClass("panel2")){
        $(".pan1").hide();
        $(".pan2").show();
        $(".pan3").hide();
        $(".pan4").hide();
        $(".pan5").hide();
    }else if($(this).hasClass("panel3")){
        $(".pan1").hide();
        $(".pan2").hide();
        $(".pan3").show();
        $(".pan4").hide();
        $(".pan5").hide();
    }else if($(this).hasClass("panel4")){
        $(".pan1").hide();
        $(".pan2").hide();
        $(".pan3").hide();
        $(".pan4").show();
        $(".pan5").hide();

    }else if($(this).hasClass("panel5")){
        $(".pan1").hide();
        $(".pan2").hide();
        $(".pan3").hide();
        $(".pan4").hide();
        $(".pan5").show();

    }

});
/* ==============================================
responsive cube timer
 =============================================== */

timeout(0);

function timeout(ind) {
    var classes = ['desk', 'laptop', 'tablet', 'phone'];
    $('#device').removeClass(classes.join(' ')).addClass(classes[ind % classes.length]);
    setTimeout(function () {
        timeout(ind + 1);
    }, 4000);
}




$(".navbar-nav").click(function(e) {
    if($(".navbar-collapse").hasClass("in")){
        $(".navbar-collapse").removeClass("in");

    }else{
         $(".navbar-collapse").addClass("in");
    }
});


// $(function() {
    
//     var el = $('.intro'),
//         mac = $('#mac'),
//         offset = mac.offset(),
//         windowHeight = $(window).height();

//     $(window).on('scroll', function() {

//         $('h1').fadeOut(500);

//         var windowTop = $(window).scrollTop(),
//             scrollPercent = (offset.top - windowTop) / offset.top,
//             scale = 'scale(' + scrollPercent + ')';

//         el.css('transform', scale);

//         if (windowTop >= 940) {
//             el.hide();
//         } else {
//             el.show();
//         }
//     });

// });

function initMe() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = $(window).height() - 50,
            header = document.querySelector(".header_fixed");
        if (distanceY > shrinkOn) {
            classie.add(header,"change_header");
            $(".request_now").fadeIn();
        } else {
            if (classie.has(header,"change_header")) {
                classie.remove(header,"change_header");
                $(".request_now").fadeOut();
            }
        }
    });
}
window.onload = initMe();
