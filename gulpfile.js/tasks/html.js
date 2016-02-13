var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);


gulp.task('html', function() {
  return gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dest))
});
