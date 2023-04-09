const scrollLinkFirst = document.querySelector('#header_link_1');
const scrollLinkSecond = document.querySelector('#header_link_2');
const scrollLinkThird = document.querySelector('#header_link_3');
const scrollLinkFourth = document.querySelector('#header_link_4');
const scrollTop = document.querySelector('.circle');

var blockText = document.querySelector('.generation__block');
var brands = document.querySelector('.brands');
var shop = document.querySelector('.shop');
var shopFooter = document.querySelector('.shop__footer');
var header = document.querySelector('.header');

function scrollIntoView(variable, position) {
	variable.scrollIntoView({
		block: position,
		inline: "nearest",
		behavior: "smooth",
	});
}

function burgerScroll() {
	$('.menu__body').toggleClass('active');
	$('.icon-menu').toggleClass('active');
	$('.menu__body').style.background = '#4d4959';
}

scrollLinkFirst.addEventListener('click', () => {
	scrollIntoView(blockText, "center");
	burgerScroll();
});
scrollLinkSecond.addEventListener('click', () => {
	scrollIntoView(brands, "start");
	burgerScroll();
});
scrollLinkThird.addEventListener('click', () => {
	scrollIntoView(shop, "end");
	burgerScroll();
});
scrollLinkFourth.addEventListener('click', () => {
	scrollIntoView(shopFooter, "start");
	burgerScroll();
});
scrollTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});