module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,jpg,gif,PNG,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};