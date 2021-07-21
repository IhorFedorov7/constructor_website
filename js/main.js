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

const createHeader = ({ 
	title, 
	header:{ 
		logo, 
		social, 
		menu
	} 
}) => {

	const Header = getElement('header');
	const container = getElement('div', ['container']);
	const wrapper = getElement('div', ['header']);

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

	Header.append( container );
	container.append( wrapper );

	return Header;
};

const createMain = ({ 
	title, 
	main: { 
		genre, 
		rating, 
		description, 
		trailer, 
	}
}) => {

	const main = getElement('main');
	const container = getElement('div', ['container']);
	main.append(container);
	const wrapper = getElement('div', ['main-content']);
	container.append(wrapper);
	const content = getElement('div', ['content']);
	wrapper.append(content);

	if ( genre ) {
		const genreSpan = getElement(
			'span', 
			['genre', 'animated', 'fadeInRight'], 
			{ textContent: genre, }
		);

		content.append(genreSpan);
	};

	if ( rating ) {
		const ratingBlock = getElement('div', ['rating', 'animated', 'fadeInRight']);
		const ratingStars = getElement('div', ['rating-stars']);
		const ratingNamber = getElement('div', ['rating-number'],
			{ textContent: `${rating}/10` }
		);
		const heading = getElement('h1', 
			['main-title', 'animated', 'fadeInRight'],
			{ textContent: title, }
		);

		for( let i = 0; i < 10; i++ ) {
			const star = getElement('img', ['star'],
				{ 
					alt: i ? '' : `Рейтинг ${rating} из 10`,
					src: i < rating ? './img/star.svg' : './img/star-o.svg' 
				
				}
			);

			ratingStars.append(star);
		};
		
		ratingBlock.append(ratingStars, ratingNamber);
		content.append(ratingBlock, heading);
	};

	if ( description ) {
		const descriptionEl = getElement('p', 
			['main-description', 'animated', 'fadeInRight'], 
			{ textContent: description, }
		);

		content.append(descriptionEl);
	};

	if ( trailer ) {
		const youtubeLink = getElement('a',
			['button', 'animated', 'fadeInRight', 'youtube-modal'],
			{ 
				href: trailer,
				textContent: 'Смотреть трейлер',
			}
		);
		const youtubeImgLink = getElement('a', 
			['play', 'youtube-modal'],
			{ 
				href: trailer, 
				ariaLabel: 'Смотреть трейлер',
			}
		);
		const iconPlay = getElement('img', 
			['play-img'],
			{
				src: './img/play.svg',
				alt: '',
				ariaHidden: true,
			}
		);

		content.append(youtubeLink);
		youtubeImgLink.append(iconPlay);
		wrapper.append(youtubeImgLink);
	};

	return main;
};

const movieConstructor = ( selector, options ) => {

	const app = document.querySelector( selector );
	app.classList.add('body-app');

	if ( options.background ) {
		app.style.backgroundImage = `url("${ options.background }")`;
	};

	document.title = options.title;
	document.head.append(getElement('link', [], { 
		href: options.header.logo,
		rel: "shortcut icon",
		type: "image/x-icon",
	}));

	if ( options.header ) {
		app.append(createHeader( options ));
	};

	if ( options.main ) {
		app.append(createMain( options ));
	};

};

//объект по созданию страницы
movieConstructor('.app', {
	title: 'Ведьмак',
	background: './witcher/background.jpg',
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
	},
	main: {
		genre: '2019,фэнтези',
		rating: '8',
		description: 'Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных, оборотней и даже заколдованных принцесс.',
		trailer: 'https://www.youtube.com/watch?v=P0oJqfLzZzQ',
	},
});