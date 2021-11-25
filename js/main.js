const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const header__toggle = document.querySelector('.header__toggle');
const header__mobile__menu = document.querySelector('.header__mobile__menu');
const body = document.querySelector('body')

btnHamburger.addEventListener('click', function(){
	console.log('click hamburger');

	if(header.classList.contains('open')){
		header.classList.remove('open');
		header__toggle.classList.remove('open');
		header__mobile__menu.classList.remove('open');

		body.classList.remove('noscroll')
	}
	else{
		header.classList.add('open');
		header__toggle.classList.add('open');
		header__mobile__menu.classList.add('open');

		body.classList.add('noscroll')
	}
});