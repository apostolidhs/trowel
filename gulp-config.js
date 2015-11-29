module.exports = {
	ts: {
		src: "src/**/*.ts",
		dist: "src"
	},
	js: {
		src: "src/**/*.js",
		dist: "src",
		concat: "trowel.js"
	},
	vendors: [
		"./bower_components/underscore/underscore.js"
	],
	app: {
		dist: "dist"
	},
	test: {
		conf: "test/karma-config.js",
		src: "test/units/**/*.spec.ts",
		samples: "test/samples/**/*.js",
		jssrc: "test/units/**/*.spec.js",
		dist: "test/units"
	}
};