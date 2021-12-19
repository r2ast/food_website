(function($) {
    "use strict";
    var scrollltop;
    //get window height
    var win_hei = $(window).outerHeight();
    //get window width
    var win_wid = $(window).outerWidth();
    //get document height
    var doc_hei = $(document).outerHeight();
    //get cookie height
    /*--- Banner slider start ---*/
    $('.associated-brand .owl-carousel').owlCarousel({
        loop: false,
        autoplay: false,
        margin: 0,
        nav: true,
        navText: ['', ''],
        dots: false,
        smartSpeed: 1000,
        autoplaySpeed: 1500,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    }); /*--- Banner slider end ---*/
    /*--- Service slider start ---*/
    $('.services .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 0,
        nav: true,
        navText: ['', ''],
        dots: true,
        smartSpeed: 750,
        autoplaySpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 2
            },
            750: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    }); /*--- Banner slider end ---*/


    /* Scroll window to particular section when click navigation menu start */
    $(".menu li a").on("click", function() {
        $(this).parent().addClass("active").siblings().removeClass("active");
        var scrollId = $(this).attr("data-rel");
        $("body,html").animate({
            scrollTop: $("#" + scrollId).offset().top
        }, 1000);
        if (win_wid < 767) {
            $(".hamburg-icon").removeClass("active");
            $(".menu").removeClass("show");
            $("body").removeClass("overflow");
        }
    }); /* Scroll window to particular section when click navigation menu end */

    /*Back to top fn*/
    $(".Backtop a").on("click", function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000)
    }); /*Back to top fn end */

    // show back to top button if window scroll greater than half of document height on scroll
    $(window).scroll(function() {
        //get window scroll top
        var win_scroll = $(this).scrollTop();
        if (win_scroll > doc_hei / 3) {
            $(".Backtop").addClass("show");
        } else {
            $(".Backtop").removeClass("show");
        }
    });

    /* Animate section */
    $(window).scroll(function() {
        scrollltop = $(this).scrollTop();

        $("section").each(function() {
            if (scrollltop > ($(this).offset().top - 100) && scrollltop < $(this).offset().top + $(this).outerHeight()) {
                var attrId = $(this).attr("id");
                $(".menu li > a").each(function() {
                    if (attrId == $(this).attr("data-rel")) {
                        $(this).parent().addClass("active").siblings().removeClass("active");
                    }
                })
            }
            if ($(window).scrollTop() == $(document).height() - $(window).outerHeight()) {
                var attrId = $("footer").attr("id");
                $(".menu li > a").each(function() {
                    if (attrId == $(this).attr("data-rel")) {
                        $(this).parent().addClass("active").siblings().removeClass("active");
                    }
                })
            }
        });
    }); /* Animate section end */

    /*Open video*/
    $(".brand-advantages .image-holder a").on("click", function(e) {
        e.stopPropagation();
        var iid = $(this).attr("data-rel");
        $("#" + iid).addClass("show");
        $(".overlay").show();
    }); /*Open video*/

    $("body").on('click', function() {
        $(".popup").removeClass("show");
        $(".overlay").hide();
    })
    $("#vid .close-btn i").on('click', function() {
        $(".popup").removeClass("show");
        $(".overlay").hide();
    })
    /* Show navigation for header version one start */
    $(".navbar-toggle .toggle").on("click", function() {
        $(this).toggleClass("active");
        var target = $(this).attr("data-target");
        $(target).toggleClass("show")
        $("body").toggleClass("overflow");
    }); /* Show navigation for header version one end */

    $(".email .material-icons").click(function(e) {
        e.stopPropagation();
        $(".knw-mr-frm").addClass("show");
        $("body").addClass("overflow");
    })

    $(".close-btn .material-icons").click(function() {
        $(this).parents(".knw-mr-frm").removeClass("show");
        $("body").removeClass("overflow");
    })


})(jQuery); /*--- Jquery wrapper end ---*/