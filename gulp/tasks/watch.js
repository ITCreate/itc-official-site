var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var serve = require('./serve');
var browserSync = require('browser-sync').get('Server 1');

var watch = function() {
	$.watch(config.src + '/ejs/**/*.ejs', function() {
		return gulp.start('html');
	});
	$.watch(config.src + '/scss/**/*.scss', function() {
		return gulp.start('css');
	});
	$.watch(config.src + '/images/**/*.{gif,jpg,png,svg}', function() {
		return gulp.start('minify-image');
	});
	$.watch(config.root + '/public/**/*.html').on('change', browserSync.reload);
};

gulp.task('watch', watch);
