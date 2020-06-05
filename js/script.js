let animatedHeader = (function () {

	let docElem = document.documentElement,
		header = document.querySelector('.header'),
		scrolling = false,
		valueToChange = 10;

	function init() {
		window.addEventListener('scroll', function (event) {
			if (!scrolling) {
				scrolling = true;
				setTimeout(scrollPage, 250);
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
