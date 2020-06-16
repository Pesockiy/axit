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


const tabs = document.querySelectorAll(".tab__link");
const tabContent = document.querySelectorAll(".tab__content");

for (let el of tabs) {
  el.addEventListener("click", function(e) {

	document.querySelector(".tab__link--active").classList.remove("tab__link--active");
	document.querySelector(".tab__content--active").classList.remove("tab__content--active");

	const index = Array.from(tabs).indexOf(el);
	const panel = [...tabContent].filter(el => el.getAttribute("data-index") == index);
	tabs[index].classList.add('tab__link--active')
	panel[0].classList.add("tab__content--active");
	});
 };
