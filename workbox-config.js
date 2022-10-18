module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,css,jpg,gif,PNG,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};