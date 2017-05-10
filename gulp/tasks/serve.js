var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

var serve = function() {
	return config.browserSync.init({
		server: config.dest,
	});
};

gulp.task('serve', serve);
