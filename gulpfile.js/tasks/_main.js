var gulp = require('gulp');
var config = require('../gulpconfig');
var $ = require('gulp-load-plugins')(config.plugins);

//console.log('---');
//console.log($);
//console.log('---');

/*
 * Tasks
 */


gulp.task('build', ['javascript', 'sass', 'html', 'fonts', 'images']);
