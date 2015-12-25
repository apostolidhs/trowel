module.exports = {
	ts: {
		src: "src/**/*.ts",
	},
	js: {
		map: "src/**/*.js.map",
		src: "src/**/*.js",
		dist: "src",
		name: "trowel.js",
		filename: "src/trowel.js",
		mapname: "src/trowel.js.map",
		umdTemplate: "src/umdWrap.tmpl"
	},
	vendors: [
		"./bower_components/underscore/underscore.js",
	],
	app: {
		dist: "dist",
		minifyJsName: "trowel.min.js"
	},
	test: {
		conf: "test/karma-config.js",
		utilities: "test/utilities/**/*.ts",
		jsUtilities: "test/utilities/**/*.js",
		utilitiesDist: "test/utilities",
		samples: "test/samples/**/*.js",
		src: "test/units/**/*.spec.ts",
		jssrc: "test/units/**/*.spec.js",
		dist: "test/units"
	}
};