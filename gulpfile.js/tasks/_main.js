var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);


/*
 * Tasks
 */
 
gulp.task('build', ['javascript', 'sass', 'html', 'fonts', 'images']);
