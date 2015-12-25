var config = require("./gulp-config.js"),
    gulp = require("gulp"),
    sequence = require('gulp-run-sequence'),
    concat = require("gulp-concat"),
    clean = require("gulp-clean"),
    ts = require("gulp-typescript"),
    uglify = require("gulp-uglify"),
    sourcemaps = require('gulp-sourcemaps'),
    wrapJS = require("gulp-wrap-js"),
    karmaServer = require("karma").Server,
    fs = require("fs");

///////////////////////////////////////////
// Javascript

gulp.task("compile-concat-ts", function () {
    return gulp.src(config.ts.src)
        .pipe(sourcemaps.init())
        .pipe(ts({ module: 'amd' }))
        .js
        .pipe(concat(config.js.filename)) //just to rename
        .pipe(wrapJS(fs.readFileSync(config.js.umdTemplate, "utf8")))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});
////////////Javascript///////////////////


///////////////////////////////////////////
// Release
gulp.task("build-js-dist", function () {
    var files = []
        .concat(config.js.filename)
        .concat(config.js.mapname);
        
    return gulp.src(files)
        .pipe(gulp.dest(config.app.dist));
});

gulp.task("build-minify-js-dist", function () {
    return gulp.src(config.js.filename)
        .pipe(uglify())
        .pipe(concat(config.app.minifyJsName)) //just to rename
        .pipe(gulp.dest(config.app.dist));
});

gulp.task("build-dist", ["build-js-dist", "build-minify-js-dist"]);
////////////Release///////////////////

///////////////////////////////////////////
// Cleaners

gulp.task("clean-src", function (next) {
    var files = []
        .concat(config.js.src)
        .concat(config.js.map);
    
    return gulp.src(files, { read: false })
        .pipe(clean());
});

gulp.task("clean-dist", function (next) {
    return gulp.src(config.app.dist + "/*", { read: false })
        .pipe(clean());
});

gulp.task("clean-test", function (next) {
    var files = []
        .concat(config.test.jssrc)
        .concat(config.test.jsUtilities);
    
    return gulp.src(files, { read: false })
        .pipe(clean());
});
/////////////Cleaners//////////////////

///////////////////////////////////////////
// Unit test

gulp.task("compile-test-utilities-ts", function () {
    return gulp.src(config.test.utilities)
        .pipe(ts()).js
        .pipe(gulp.dest(config.test.utilitiesDist));
});

gulp.task("compile-test-ts", function () {
    return gulp.src(config.test.src)
        .pipe(ts()).js
        .pipe(gulp.dest(config.test.dist));
});

gulp.task("run-test", function (next) {
    new karmaServer({
        configFile: __dirname + "/" + config.test.conf
    }, next).start();
});
/////////////Unit test//////////////////

///////////////////////////////////////////
// Complex tasks

gulp.task("clean", ["clean-src", "clean-dist", "clean-test"]);

gulp.task("build-js", function(next){
   sequence("clean-src", "compile-concat-ts", next); 
});

gulp.task("test", function(next){
   sequence("clean-test", "compile-test-utilities-ts", "compile-test-ts", "run-test", next); 
});

gulp.task("default", function(next){
   sequence("clean-dist", "build-js", "build-dist", "test", next); 
});
/////////////Complex tasks//////////////////
