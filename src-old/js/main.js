// Source: https://codepen.io/rdallaire/pen/apoyx

$(document).ready(function() {
    $(".wrapper").click(function(clickedElement){
        if (clickedElement.target.localName === 'label'){
            if ($('#nav-trigger').prop('checked')){
                return $('#nav-trigger').prop('checked').toggle;
            }
        }
        else {
            $('#nav-trigger').prop('checked', false);
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

function backToTop() {
        console.log("Scrolling to top...");
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
}



$(document).keyup(function(keypress) {
    // If escape key held, close navbar
     if (keypress.keyCode == 27) { // escape key maps to keycode `27`
        console.log("Escape pressed...");
        $('#nav-trigger').prop('checked', false);
    }
});