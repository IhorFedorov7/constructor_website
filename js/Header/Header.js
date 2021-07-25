import getElement from '../CreateEl/CreateEl.js';

//Создание шапки
const createHeader = ({ 
	title, 
	header:{ 
		logo, 
		social, 
		menu,
	} 
}) => {

	const Header = getElement('header');
	const container = getElement('div', ['container']);
	const wrapper = getElement('div', ['header']);
	const menuBtn = getElement('button', ['menu-button']);

	if ( logo ) {
		const Logo = getElement('img', ['logo'], {
			src: logo,
			alt: `Логотип ${ title }`,
		});
		
		wrapper.append( Logo );
	};

	if ( menu ) {
		const navWrapper = getElement('nav', ['menu-list']);
		const allNav = menu.map( item => {
			const navLink = getElement('a', ['menu-link'], {
				href: item.link,
				textContent: item.title,
			});

			return navLink;
		});

		navWrapper.append( ...allNav );
		wrapper.append( navWrapper );
	};

	if ( social ) {
		const socialWrapper = getElement('div', ['social']);
		const allSocial = social.map( item => {
			const socialLink = getElement('a', ['social-link']);
			socialLink.append (getElement('img', [], {
				src: item.img,
				alt: item.title,
			}));
			
			socialLink.href = item.link;
			
			return socialLink;
		});

		socialWrapper.append( ...allSocial );
		wrapper.append( socialWrapper );
	};

	if ( wrapper && menuBtn ) {
		menuBtn.addEventListener('click', function () {
			menuBtn.classList.toggle('menu-button-active');
			wrapper.classList.toggle('header-active');
		});

		container.append( menuBtn );
	};

	Header.append( container );
	container.append( wrapper );

	return Header;
};

export default createHeader;