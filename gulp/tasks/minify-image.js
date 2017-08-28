var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var imageminPngquant = require('imagemin-pngquant');
var imageminWebp = require('imagemin-webp');

var minifyImage = function() {
	return Promise.resolve()
		.then(function() {
			return new Promise(function(resolve) {
				gulp.src([config.src + '/images/**/*', '!' + config.src + '/images/**/avatar-*.{gif,jpg,png}'])
					.pipe($.imageResize({
						width: 800,
					}))
					.pipe(gulp.dest(config.dest + '/assets/images'))
					.on('end', resolve);
			});
		})
		.then(function() {
			return new Promise(function(resolve) {
				gulp.src(config.src + '/images/**/avatar-*.{gif,jpg,png}')
					.pipe($.imageResize({
						width: 160,
						height: 160,
						crop: true,
					}))
					.pipe(gulp.dest(config.dest + '/assets/images'))
					.on('end', resolve);
			});
		})
		.then(function() {
			return new Promise(function(resolve) {
				gulp.src(config.dest + '/assets/images/**/*.{gif,jpg,png,svg}')
					.pipe($.imagemin([
						$.imagemin.gifsicle({
							optimizationLevel: 3,
						}),
						imageminPngquant({
							quality: '70-80',
							speed: 1,
						}),
						$.imagemin.jpegtran({
							progressive: true,
						}),
						$.imagemin.svgo(),
					]))
					.pipe(gulp.dest(config.dest + '/assets/images'))
					.pipe($.imagemin([
						imageminWebp({
							method: 6,
						}),
					]))
					.pipe($.rename({
						extname: '.webp',
					}))
					.pipe(gulp.dest(config.dest + '/assets/images'))
					.pipe(config.browserSync.stream())
					.on('end', resolve);
			});
		});
};

gulp.task('minify-image', minifyImage);
