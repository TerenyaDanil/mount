var swiper = new Swiper('.rev__slider', {
	loop: true,
	grabCursor: true,
	effect: "fade",
	simulateTouch: true,
	centeredSlides: true,
	slidesPerView: 1,
	speed: 600,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},

})
const links = document.querySelectorAll("a.scroll-to");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}

burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__nav');

dark = document.querySelector('.bg-mob');

burger.onclick = function () {
	burger.classList.toggle('active');
	dark.classList.toggle('active');
	menu.classList.toggle('active');
}


more = document.querySelector('.course__more');
courseInner = document.querySelector('.inner-course__dop');



more.onclick = function () {
	courseInner.classList.toggle('active');
	more.hidden = true;

}


plus = document.querySelectorAll('.inner-item__plus');

for (const pluses of plus) {
	pluses.onclick = function () {
		pluses.classList.toggle('active');
		pluses.nextElementSibling.classList.toggle('active');

	}
}



