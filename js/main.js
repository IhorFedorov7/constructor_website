/*
new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.arrow',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		541: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('menu-button-active');
	menu.classList.toggle('header-active');
})
*/
const getElement = ( tagName, classNames, attributes ) => {

	const element = document.createElement( tagName );

	if ( classNames ) {
		element.classList.add( ...classNames );
	};

	if ( attributes ) {
		for ( const attribute in attributes ) {
			element[attribute] = attributes[attribute];
		}
	};

	return element;
};

const createHeader = ( param ) => {

	const header = getElement('header');
	const container = getElement('div', ['container']);
	const wrapper = getElement('div', ['header']);

	if ( param.header.logo ) {
		const logo = getElement('img', ['logo'], {
			src: param.header.logo,
			alt: `Логотип ${ param.title }`,
		});
		
		wrapper.append( logo );
	};

	if ( param.header.menu ) {
		const navWrapper = getElement('nav', ['menu-list']);
		const allNav = param.header.menu.map(item => {
			const navLink = getElement('a', ['menu-link'], {
				href: item.link,
				text: item.title,
			});

			return navLink;
		});

		navWrapper.append( ...allNav );
		wrapper.append( navWrapper );
	};

	if ( param.header.social ) {
		const socialWrapper = getElement('div', ['social']);
		const allSocial = param.header.social.map(item => {
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

	header.append( container );
	container.append( wrapper );

	return header;
};

const movieConstructor = ( selector, options ) => {

	const app = document.querySelector( selector );
	app.classList.add('body-app');

	document.querySelector('title').textContent = `${ options.title }`;

	if (options.header) {
		app.append(createHeader( options ));
	}

};






movieConstructor('.app', {
	title: 'Ведьмак',
	header: {
		logo: './witcher/logo.png',
		social: [
			{
				title: 'Twitter',
				link: 'https://twitter.com',
				img: './witcher/social/twitter.svg',
			},
			{
				title: 'Instagram',
				link: 'https://instagram.com',
				img: './witcher/social/instagram.svg',
			},
			{
				title: 'Facebook',
				link: 'https://facebook.com',
				img: './witcher/social/facebook.svg',
			},
		],
		menu: [
			{
				title: 'Описание',
				link: '#',
			},
			{
				title: 'Трейлер',
				link: '#',
			},
			{
				title: 'Отзывы',
				link: '#',
			},
		]
	}
});