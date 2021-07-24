import movieConstructor from './js/index.js';

//объект по созданию страницы
movieConstructor('.app', {
	favicon: './img/witcher/logo.png',
	title: 'Ведьмак',
	background: './img/witcher/background.jpg',
	fontColor: '#ffffff',
	backgroundColor: '#141218',
	subColor: '#9D2929',
	header: {
		logo: './img/witcher/logo.png',
		social: [
			{
				title: 'Twitter',
				link: 'https://twitter.com',
				img: './img/witcher/social/twitter.svg',
			},
			{
				title: 'Instagram',
				link: 'https://instagram.com',
				img: './img/witcher/social/instagram.svg',
			},
			{
				title: 'Facebook',
				link: 'https://facebook.com',
				img: './img/witcher/social/facebook.svg',
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
		imgTitle: './img/witcher/witcher.png',
		genre: '2019,фэнтези',
		rating: '8',
		description: 'Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных, оборотней и даже заколдованных принцесс.',
		trailer: 'https://www.youtube.com/watch?v=P0oJqfLzZzQ',
		slider: [
			{
				img: './img/witcher/series/series-1.jpg',
				subtitle: 'Серия №1',
				title: 'Начало конца',
			},
			{
				img: './img/witcher/series/series-2.jpg',
				subtitle: 'Серия №2',
				title: 'Четыре марки',
			},
			{
				img: './img/witcher/series/series-3.jpg',
				subtitle: 'Серия №3',
				title: 'Предательская луна',
			},
			{
				img: './img/witcher/series/series-4.jpg',
				subtitle: 'Серия №4',
				title: 'Банкеты, ублюдки и похороны',
			},
			{
				img: './img/witcher/series/series-5.jpg',
				subtitle: 'Серия №5',
				title: 'Желания из бутылки',
			},
			{
				img: './img/witcher/series/series-6.jpg',
				subtitle: 'Серия №6',
				title: 'Редкие виды',
			},
			{
				img: './img/witcher/series/series-7.jpg',
				subtitle: 'Серия №7',
				title: 'Перед падением',
			},
			{
				img: './img/witcher/series/series-8.jpg',
				subtitle: 'Серия №8',
				title: 'Нечто большее',
			},
		],
	},
	footer: {
		copyright: '© 2020 The Witcher. All right reserved.',
		menu: [
			{
				title: 'Privacy Policy',
				link: '#',
			},
			{
				title: 'Terms of Service',
				link: '#',
			},
			{
				title: 'Legal',
				link: '#',
			},
		],
	},
});

