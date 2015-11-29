var config = require("./gulp-config.js"),
    gulp = require("gulp"),
    concat = require("gulp-concat"),
    clean = require("gulp-clean"),
    ts = require("gulp-typescript"),
    KarmaServer = require("karma").Server;

gulp.task("compile-ts", function () {
    return gulp.src(config.ts.src)
        .pipe(ts()).js
        .pipe(gulp.dest(config.ts.dist));
});

gulp.task("concat-js", function () {
    var files = []
        .concat(config.vendors)
        .concat(config.js.src);

    return gulp.src(files)
        .pipe(concat(config.js.concat))
        .pipe(gulp.dest(config.js.dist));
});

gulp.task("clean-src", function (next) {
    return gulp.src(config.js.src, { read: false })
        .pipe(clean());
});

gulp.task("clean-dist", function (next) {
    return gulp.src(config.app.dist + "/*", { read: false })
        .pipe(clean());
});

gulp.task("clean-test", function (next) {
    return gulp.src(config.test.jssrc, { read: false })
        .pipe(clean());
});

gulp.task("compile-test-ts", function () {
    return gulp.src(config.test.src)
        .pipe(ts()).js
        .pipe(gulp.dest(config.test.dist));
});

gulp.task("run-test", function (next) {
    new KarmaServer({
        configFile: __dirname + "/" + config.test.conf
    }, next).start();
});

gulp.task("clean", ["clean-src", "clean-dist", "clean-test"]);
gulp.task("build-js", ["clean-src", "compile-ts", "concat-js"]);
gulp.task("test", ["clean-test", "compile-test-ts", "run-test"]);

gulp.task("default", ["build-js"]);
