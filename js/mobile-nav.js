// ========= Мобильное меню =========
const navToggle = document.querySelector('.nav__toggle');
const mobileNav = document.querySelector('.mobile-nav');
const navIcon = document.querySelector('.nav__icon');
const mobileNavOverlay = document.querySelector('.mobile-nav__overlay');

if (navToggle && mobileNav && navIcon && mobileNavOverlay) {
	// ========= Переключение меню по кнопке =========
	navToggle.onclick = function () {
		mobileNav.classList.toggle('mobile-nav--open');
		mobileNavOverlay.classList.toggle('mobile-nav__overlay--open');
		navIcon.classList.toggle('nav__icon--active');
		document.body.classList.toggle('no-scroll');
	};

	// ========= Закрытие меню по фону =========
	mobileNavOverlay.onclick = function () {
		mobileNav.classList.toggle('mobile-nav--open');
		mobileNavOverlay.classList.toggle('mobile-nav__overlay--open');
		navIcon.classList.toggle('nav__icon--active');
		document.body.classList.toggle('no-scroll');
	};
}
