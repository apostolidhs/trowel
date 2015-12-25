var config = require('../gulp-config.js');

module.exports = function (karmaConfig) {

	var files = []
		.concat(config.vendors)
		.concat(config.js.src)
		.concat(config.test.jsUtilities)
		.concat(config.test.jssrc)
		.concat({
			pattern: config.test.samples, include: false
		});
		
	var preprocessors = {};
	preprocessors[config.test.samples] = ['html2js'];
	
	karmaConfig.set({
		basePath: '../',
		preprocessors: preprocessors,
		files: files,
		autoWatch: true,
		frameworks: ['jasmine'],
		browsers: ['Chrome'],
		plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
			'karma-html2js-preprocessor'
        ],
		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	});
}