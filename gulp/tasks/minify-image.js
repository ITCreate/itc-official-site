var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var imageminPngquant = require('imagemin-pngquant');
var serve = require('./serve');
var browserSync = require('browser-sync').get('Server 1');

var minifyImage = function() {
	gulp.src(config.src + 'images/**/*.{gif,jpg,png,svg}')
		.pipe($.imagemin([
				$.imagemin.gifsicle({
					optimizationLevel: 3,
				}),
				imageminPngquant({
					quality: '80-90',
					speed: 1,
				}),
				$.imagemin.jpegtran({
					progressive: true,
				}),
				$.imagemin.svgo(),
		]))
		.pipe($.imagemin())
		.pipe(gulp.dest(config.dest + 'images/'))
		.pipe(browserSync.stream({match: config.dest + 'images/**/*.{gif,jpg,png,svg}'}));
};

gulp.task('minify-image', minifyImage);
