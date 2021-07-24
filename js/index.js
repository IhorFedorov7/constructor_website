import getElement from './CreateEl/CreateEl.js';
import createHeader from './Header/Header.js';
import createMain from './Main/Main.js';
import createFooter from './Footer/Footer.js';

//Распределение параметров
const movieConstructor = ( selector, options ) => {

	const app = document.querySelector( selector );
	app.classList.add('body-app');

	app.style.color = options.fontColor || '';
	app.style.backgroundColor = options.backgroundColor || '';

	if ( options.subColor ) {
		document.documentElement.style.setProperty('--sub-color', options.subColor);
	};

	if ( options.background ) {
		app.style.backgroundImage = `url("${ options.background }")`;
	};

	document.title = options.title;
	if ( options.favicon ) {
		const index = options.favicon.lastIndexOf('.');
		const type = options.favicon.substring(index + 1);

		const favicon = getElement('link', null, { 
			rel: "icon",
			href: options.favicon,
			type: `image/${type === 'svg' ? 'svg-xml' : type}`,
		});

		document.head.append(favicon);
	}

	if ( options.header ) {
		app.append(createHeader( options ));
	};

	if ( options.main ) {
		app.append(createMain( options ));
	};

	if ( options.footer ) {
		app.append(createFooter( options.footer ));
	};

};

export default movieConstructor;