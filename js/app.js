var swiper = new Swiper('.rev__slider', {
	autoHeight: true,
	loop: true,
	spaceBetween: 1000,
	grabCursor: true,
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
	more.classList.toggle('hide');

}
////////////////////


moreQus = document.querySelector('.qus__btn');
qusInner = document.querySelector('.qus__inner-hide');



moreQus.onclick = function () {
	qusInner.classList.toggle('active');
	moreQus.classList.toggle('hide');

}


plus = document.querySelectorAll('.inner-item__plus');

for (const pluses of plus) {
	pluses.onclick = function () {
		pluses.classList.toggle('active');
		pluses.nextElementSibling.classList.toggle('active');

	}
}



////////////////

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 10;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}






////////////////////////

