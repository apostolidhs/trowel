var config = require('../gulp-config.js');

module.exports = function (karmaConfig) {

	var files = []
		.concat(config.vendors)
		.concat(config.js.src)
		.concat(config.test.jssrc);

	karmaConfig.set({
		basePath: '../',
		files: files,
		autoWatch: true,
		frameworks: ['jasmine'],
		browsers: ['Chrome'],
		plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	});
}