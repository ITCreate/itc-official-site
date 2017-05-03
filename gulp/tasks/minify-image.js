var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var imageminPngquant = require('imagemin-pngquant');

var minifyImage = function() {
	return gulp.src([config.src + '/images/**/*', '!' + config.src + '/images/**/avatar-*.{gif,jpg,png}'])
		.pipe($.imageResize({
			width: 800,
		}))
		.pipe(gulp.dest(config.dest + '/assets/images'))
	.on('end', function() {
		gulp.src(config.src + '/images/**/avatar-*.{gif,jpg,png}')
			.pipe($.imageResize({
				width: 160,
				height: 160,
				crop: true,
			}))
			.pipe(gulp.dest(config.dest + '/assets/images'))
		.on('end', function() {
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
				.pipe(config.browserSync.stream());
		});
	});
};

gulp.task('minify-image', minifyImage);
