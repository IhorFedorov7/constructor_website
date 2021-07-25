import getElement from '../CreateEl/CreateEl.js';

//Создание подвала
const createFooter = ({ 
	copyright, 
	menu, 
}) => {

	const footer = getElement('footer', ['footer']);
	const container = getElement('div', ['container']);
	const wrapper = getElement('div', ['footer-content']);
	const leftBlock = getElement('div', ['left']);
	const rightBlock = getElement('div', ['right']);

	if ( copyright ) {
		const spanCopyright = getElement('span', ['copyright'], {
			textContent: copyright,
		});

		leftBlock.append(spanCopyright);
	};

	if ( menu ) {
		const navWrapper = getElement('nav', ['footer-menu']);
		const allNav = menu.map( item => {
			const navLink = getElement('a', ['footer-link'], {
				href: item.link,
				textContent: item.title,
			});

			return navLink;
		});

		navWrapper.append( ...allNav );
		rightBlock.append( navWrapper );
	}

	footer.append(container);
	container.append(wrapper);
	wrapper.append(leftBlock, rightBlock);

	return footer;
};

export default createFooter;