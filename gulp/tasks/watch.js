var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

var watch = function() {
	$.watch(config.src + '/ejs/**/*.ejs', function() {
		return gulp.start('html');
	});
	$.watch(config.src + '/json/profiles.json', function() {
		return gulp.start('html');
	});
	$.watch(config.src + '/scss/**/*.scss', function() {
		return gulp.start('css');
	});
	$.watch(config.src + '/images/**/*.{gif,jpg,png,svg}', function() {
		return gulp.start('minify-image');
	});
	$.watch(config.src + '/ejs/**/*.ejs', function() {
		return gulp.start('html');
	});
};

gulp.task('watch', watch);
