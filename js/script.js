let menuButton = document.querySelector('.menu-hamburger'),
	body = document.querySelector('body'),
	navWrap = document.querySelector('.nav-wrap');


menuButton.addEventListener('click', function () {

	if (!this.classList.contains('menu-hamburger--open')) {

		this.classList.add('menu-hamburger--open');
	body.classList.add('overflowYHidden');
	navWrap.classList.add('nav-wrap--active');


	} else {
	this.classList.remove('menu-hamburger--open');
		body.classList.remove('overflowYHidden');
		navWrap.classList.remove('nav-wrap--active');
	}
});


let animatedHeader = (function () {

	let docElem = document.documentElement,
		header = document.querySelector('.header'),
		scrolling = false,
		valueToChange = 10;

	function init() {
		window.addEventListener('scroll', function (event) {
			if (!scrolling) {
				scrolling = true;
				setTimeout(scrollPage, 1);
			}
		}, false);
	}

	function scrollY() {

		return window.pageYOffset || docElem.scrollTop;

	}

	function scrollPage() {

		var sY = scrollY();

		if (sY >= valueToChange) {
			header.classList.add('header--shrink');
		} else {
			header.classList.remove('header--shrink');
		}

		scrolling = false;
	}


	init();
})();
