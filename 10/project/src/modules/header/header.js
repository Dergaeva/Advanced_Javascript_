const builder = require('./../elementBuilder');
require('./header.scss');

module.exports = () => {
	const content = '<a href="/">Logo</a><p>Hello!!!</p>';
	return builder('header', content, 'header');
};