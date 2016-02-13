var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);


/*
 * Tasks
 */

 gulp.task('run', function() {
  return $.run('electron .').exec();
});

gulp.task('default', ['clean'], function() {
  gulp.start(['javascript', 'sass', 'html', 'fonts', 'images', 'run']);
});

gulp.task('watch', function () {
    $.livereload.listen();
    gulp.watch(config.html.src,['html']);
    gulp.watch(config.javascript.src,['javascript']);
    gulp.watch(config.sass.src,['sass']);
    gulp.watch(config.images.src,['images']);
    gulp.watch(config.fonts.src,['fonts']);

    gulp.start('default');
});


gulp.task('build', ['default']);
