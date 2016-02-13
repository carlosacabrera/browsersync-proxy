var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);


gulp.task('sass', function() {
  return gulp.src(config.sass.src)
    .pipe(gulp.dest(config.sass.dest))
});
