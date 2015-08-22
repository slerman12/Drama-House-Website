/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var isFirst = true;

if(isFirst) {
// jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('button.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 130
            }, 500, 'easeInOutExpo');
            event.preventDefault();
            isFirst = false;
        });
    });
}

$('#allMembers').on('hidden.bs.collapse', function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('button.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 130
            }, 500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});
$('#allMembers').on('shown.bs.collapse', function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('button.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $('#members').offset().top
            }, 500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});

new WOW().init();

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function () {
    //lord of the rings photo
    $('.lotr').hover(function () {
        if($(this).attr("alt")) {
            var src = $(this).attr("src");
            $(this).attr('src', $(this).attr("alt"));
            $(this).attr('alt', src);
        }
    }).mouseout(function () {
        if($(this).attr("alt")) {
            var alt = $(this).attr("alt");
            $(this).attr('src', $(this).attr("src"));
            $(this).attr('alt', alt);
        }
    });

    //iFrame responsiveness for mobile
    //var ratio;
    //if($(window).width()>970){
    //    ratio = 1/3;
    //}
    //else if($(window).width()>700){
    //    ratio = 3/7
    //}
    //else{
    //    ratio = 4/5;
    //}
    //$('.resizeIFrame')
    //    .attr('width', ratio*$(window).width())
    //    .attr('height', (315/560)*(ratio*$(window).width()));
    //$(window).resize(function () {
    //    console.log($(window).width());
    //    var ratio;
    //    if($(window).width()>970){
    //        ratio = 1/3;
    //    }
    //    else if($(window).width()>700){
    //        ratio = 3/7
    //    }
    //    else{
    //        ratio = 4/5;
    //    }
    //    $('.resizeIFrame').attr('width', ratio*$(window).width())
    //        .attr('height', (315/560)*(ratio*$(window).width()));
    //});
});


