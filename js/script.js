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


const tabs = document.querySelectorAll(".tab__link"),
	tabContent = document.querySelectorAll(".tab__content");

for (let el of tabs) {

	el.addEventListener("click", function (e) {

		document.querySelector(".tab__link--active").classList.remove("tab__link--active");
		document.querySelector(".tab__content--active").classList.remove("tab__content--active");

		const index = Array.from(tabs).indexOf(el);
		const panel = [...tabContent].filter(function (el) {
			return el.getAttribute("data-index") == index;
		});

		tabs[index].classList.add('tab__link--active')
		panel[0].classList.add("tab__content--active");

	});
};



const links = document.querySelectorAll('.nav__link');

for (let link of links) {

	link.addEventListener('click', function (e) {

		e.preventDefault();
		const sectionId = link.getAttribute('href');
		const sectionToScroll = document.querySelector(sectionId);

		if (navWrap.classList.contains('nav-wrap--active')) {
			navWrap.classList.remove('nav-wrap--active');
			menuButton.classList.remove('menu-hamburger--open');
		};
		smoothScrollTo(sectionToScroll.offsetTop, 500);

	});
};


smoothScrollTo = (function () {
	let timer,
		start,
		factor;

	return function (target, duration) {
		let offset = window.pageYOffset,
			delta = target - window.pageYOffset;

		duration = duration || 1000;
		start = Date.now();
		factor = 0;

		if (timer) {
			clearInterval(timer);
		}

		function step() {
			let y;
			factor = (Date.now() - start) / duration;
			if (factor >= 1) {
				clearInterval(timer);
				factor = 1;
			};
			y = factor * delta + offset;
			window.scrollBy(0, y - window.pageYOffset);
		}

		timer = setInterval(step, 10);
		return timer;
	};
}());
