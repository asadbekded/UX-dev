
$('.products-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
  prevArrow: '<button class="products__btn__left"><img src="../images/left.svg" alt="Left icon" width="40" height="40" /></button>',
  nextArrow: '<button class="products__btn__right"><img src="../images/right.svg" alt="Right icon" width="40" height="40" /></button>',
});

$('.testimonials-box').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="left__btn"><img src="../images/left-btn.svg" alt="left button img" width="13" height="13"></button>',
  nextArrow: '<button class="right__btn"><img src="../images/right-btn.svg" alt="left button img" width="13" height="13"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      }
    }
  ]
});

$(document).ready(function () {
  var $slider = $('.slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $('.slider__label');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
    $progressBarLabel.text(calc + '% completed');
  });

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400
  });
});



$('.creation__carousel').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="creative__btn__left"><img src="../images/left-btn.svg" alt="left button img" width="13" height="13"></button>',
  nextArrow: '<button class="creative__btn__right"><img src="../images/right-btn.svg" alt="left button img" width="13" height="13"></button>',
  responsive: [
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 698,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});

$('.testimonials-box').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="left__btn"><img src="../images/left-btn.svg" alt="left button img" width="13" height="13"></button>',
  nextArrow: '<button class="right__btn"><img src="../images/right-btn.svg" alt="left button img" width="13" height="13"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      }
    }
  ]
});

$(document).ready(function () {
  var $slider = $('.slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $('.slider__label');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
    $progressBarLabel.text(calc + '% completed');
  });

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400
  });
});



$('.creation__carousel').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="creative__btn__left"><img src="../images/left-btn.svg" alt="left button img" width="13" height="13"></button>',
  nextArrow: '<button class="creative__btn__right"><img src="../images/right-btn.svg" alt="left button img" width="13" height="13"></button>',
  responsive: [
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 698,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});