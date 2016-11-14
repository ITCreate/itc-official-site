var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var imageminPngquant = require('imagemin-pngquant');
var serve = require('./serve');
var browserSync = require('browser-sync').get('Server 1');

var minifyImage = function() {
	return gulp.src([config.src + 'images/**/*', '!' + config.src + 'images/**/profile-b*.{gif,jpg,png}'])
		.pipe($.imageResize({
			width: 1200,
			imageMagick: true,
		}))
		.pipe(gulp.dest(config.dest + 'images/'))
		.on('end', function() {
			gulp.src(config.src + 'images/**/profile-b*.{gif,jpg,png}')
				.pipe($.imageResize({
					width: 160,
					height: 160,
					crop: true,
					imageMagick: true,
				}))
				.pipe(gulp.dest(config.dest + 'images/'))
				.on('end', function() {
					gulp.src(config.dest + 'images/**/*.{gif,jpg,png,svg}')
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
					.pipe($.imagemin())
					.pipe(gulp.dest(config.dest + 'images/'))
					.pipe(browserSync.stream({match: config.dest + 'images/**/*.{gif,jpg,png,svg}'}));
				});
		});
};

gulp.task('minify-image', minifyImage);
