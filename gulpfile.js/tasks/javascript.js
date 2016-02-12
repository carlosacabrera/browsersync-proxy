var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);


gulp.task('javascript', function () {
    return gulp.src(config.javascript.src)
        .pipe($.plumber())
        .pipe($.babel())
        .pipe(gulp.dest(config.javascript.dest))
});