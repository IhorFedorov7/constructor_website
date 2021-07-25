import getElement from '../CreateEl/CreateEl.js';

//Создание контента
const createMain = ({ 
	title, 
	main: { 
		imgTitle,
		genre, 
		rating, 
		description, 
		trailer, 
		slider,
	}
}) => {

	const main = getElement('main');
	const container = getElement('div', ['container']);
	main.append(container);
	const wrapper = getElement('div', ['main-content']);
	container.append(wrapper);
	const content = getElement('div', ['content']);
	wrapper.append(content);
	let heading;

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

		if ( imgTitle ) {
			heading = getElement('img', 
				['main-title_img', 'animated', 'fadeInRight'],
				{ src: imgTitle, }
			);
		} else {
			heading = getElement('h1', 
				['main-title', 'animated', 'fadeInRight'],
				{ textContent: title, }
			);
		};

		for( let i = 0; i < 10; i++ ) {
			const star = getElement('img', ['star'],
				{ 
					alt: i ? '' : `Рейтинг ${rating} из 10`,
					src: i < rating ? './img/star.svg' : './img/star-o.svg',
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

	if ( slider ) {
		const sliderBlock = getElement('div', ['series']);
		const swiperBlock = getElement('div', ['swiper-container']);
		const swiperWrapper = getElement('div', ['swiper-wrapper']);
		const arrow = getElement('buttom', ['arrow']);

		const slides = slider.map(item => {

			const swiperSlide = getElement('div', ['swiper-slide']);
			const card = getElement('figure', ['card']);
			const cardImage = getElement('img', ['card-img'], {
				src: item.img,
				alt: (`${(item.title || '')} ${(item.subtitle || '')}`).trim(),
			});

			card.append(cardImage);
			
			if ( item.title || item.subtitle ) {
				const cardDescription = getElement('figcaption', ['card-description']);
				cardDescription.innerHTML = `
					${item.subtitle ? `<p class="card-subtitle">${item.subtitle}</p>` : ''}
					${item.title ? `<p class="card-title">${item.title}</p>` : ''}
				`;

				card.append(cardDescription);
			};
			
			swiperSlide.append(card);
			return swiperSlide;
		});

		swiperWrapper.append(...slides);
		swiperBlock.append(swiperWrapper);
		sliderBlock.append(swiperBlock, arrow);
		container.append(sliderBlock);

		new Swiper(swiperBlock, {
			loop: true,
			navigation: {
				nextEl: arrow,
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
	};

	return main;
};

export default createMain;