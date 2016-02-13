var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);
var electron = require('electron-connect').server.create();

/*
 * Tasks
 */

 gulp.task('run', function() {
  return $.run('electron .').exec();
});

gulp.task('default', ['clean'], function() {
  gulp.start(['javascript', 'sass', 'html', 'fonts', 'images']);
});

gulp.task('serve', function () {
  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('index.js', electron.restart);

  // Reload renderer process
  gulp.watch(config.html.src,['html', electron.reload]);
  gulp.watch(config.javascript.src,['javascript', electron.reload]);
  gulp.watch(config.sass.src,['sass', electron.reload]);
  gulp.watch(config.images.src,['images', electron.reload]);
  gulp.watch(config.fonts.src,['fonts', electron.reload]);
});
