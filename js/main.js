const accaunt = document.querySelector('.account');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__header-btn');
const modalForm = document.querySelector('.modal__body-form');
const nav = document.querySelector('.site-header__nav');
const closeBtn = document.querySelector('.close');
const burgerBtn = document.querySelector('.burger-btn');

accaunt.addEventListener('click', function () {
	modal.style.display = 'flex';
});

modal.addEventListener('click', function (evt) {
	if (evt.target.className == 'modal') {
		modal.style.display = 'none';
	}
});

modalClose.addEventListener('click', function () {
	modal.style.display = 'none';
});

modalForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
});

burgerBtn.addEventListener('click', function () {
	nav.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
	nav.style.display = 'none';
});
$(document).ready(function () {
	var $slider = $('.slider');
	var $progressBar = $('.progress');
	var $progressBarLabel = $('.slider__label');

	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var calc = (nextSlide / (slick.slideCount - 1)) * 70;

		$progressBar
			.css('background-size', calc + '% 100%')
			.attr('aria-valuenow', calc);
		$progressBarLabel.text(calc + '% completed');
	});

	$slider.slick({
		slidesToShow: 4,
		slidesToScroll: 20,
		speed: 300,
	});
});
