$(document).ready(function () {
    $('#price-video-wrap').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_down.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_up.svg" alt=""></button>',
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(document).ready(function () {
    $('#questions__mobile').slick({
        dots: false,
        prevArrow: '<button type="button" class="questions-slick-prev"><img src="img/icons/questions-slick-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="questions-slick-next"><img src="img/icons/questions-slick-next.svg" alt=""></button>',
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
