var main = document.querySelectorAll('.header');
var topOfMain = main.offsetTop;

function fixedNav() {
	if (window.scrollYOffset >= topOffMain) {
		document.body.classList.add('fixed-nav');
	} else {
		document.body.classList.remove('fixed-nav');
	}
}

window.addEventListener('scroll', fixedNav);