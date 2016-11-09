var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create('Server 1');

var serve = function() {
	return browserSync.init({
		server: config.root + 'public/',
		browser: "google chrome",
	});
};

gulp.task('serve', serve);
