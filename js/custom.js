
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

// $(window).load(function() {
//     $(".sticky").sticky({topSpacing: 0});
// });

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
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1800, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(function() {
    $('.actionButton').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
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
responsive cube timer
 =============================================== */

// timeout(0);

// function timeout(ind) {
//     var classes = ['desk', 'laptop', 'tablet', 'phone'];
//     $('#device').removeClass(classes.join(' ')).addClass(classes[ind % classes.length]);
//     setTimeout(function () {
//         timeout(ind + 1);
//     }, 4000);
// }

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


(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if(jQuery.browser.mobile){
     $('video').hide();
}