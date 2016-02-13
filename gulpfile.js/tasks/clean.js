var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);


gulp.task('clean', function(callback) {
  return gulp.src(config.folder.dest, {
      read: false
    })
    .pipe($.clean());
});
