var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);


gulp.task('images', function() {
  return gulp.src(config.images.src)
    .pipe(gulp.dest(config.images.dest))
});
