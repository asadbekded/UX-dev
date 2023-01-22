$(document).ready(function () {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 70;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);
        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        slidesToShow: 4,
        slidesToScroll: 20,
        speed: 300
    });
});