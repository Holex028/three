$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
    });
});

$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.header__nav').toggleClass('open-menu');
    });
});

$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu__mobile').removeClass('menu__mobile').addClass('open__mobile-menu');
    });
});

