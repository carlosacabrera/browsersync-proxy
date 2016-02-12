var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);

//console.log('---');
//console.log($);
//console.log('---');

/*
 * Tasks
 */

gulp.task('watch', function () {
    $.watch(config.javascript.listening, function () {
        gulp.start('javascript');
    });
});

gulp.task('build', function (callback) {
    $.runSequence(
        'javascript',
        callback);
});