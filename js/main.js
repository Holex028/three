
// Флаг включённости слайдера slick
var slickSliderActive = false;

// Включение или выключение слайдера (в зависимости от ширины)
function checkSlider() {

  // Если вьюпорт уже чем 768 
  if ($(window).width() < 768 - getScroll()) {

    // Если флаг включённости опущен, то включим и поднимем флаг
    if (slickSliderActive == false) {
      $('#video-wrap').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_down.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_up.svg" alt=""></button>',
        slidesToShow: 1,
        slidesToScroll: 1
      });
      slickSliderActive = true;
    }

  }
  // Иначе (вьюпорт НЕ уже чем 768)
  else {

    // Если флаг включённости поднят, выключаем и опускаем флаг
    if (slickSliderActive == true) {
      $('#video-wrap').slick('unslick');
      slickSliderActive = false;
    }

  }
};

// По готовности DOM...
checkSlider();

// По любому изменению размера вьюпорта...
$(window).on('resize', checkSlider);

function getScroll() {
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollWidth;
}





