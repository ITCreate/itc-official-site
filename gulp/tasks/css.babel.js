var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

var css = function() {
	return gulp.src(config.src + '/scss/style.scss')
		.pipe($.plumber({
			errorHandler: $.notify.onError("Error: <%= error.message %>"),
		}))
		.pipe($.sourcemaps.init())
			.pipe($.pleeease({
				sass: {
					includePaths: require('node-bourbon').with([
						config.src + '/scss',
						require('node-font-awesome').scssPath,
					]),
				},
				mqpacker: true,
			}))
			.pipe($.rename({
				suffix: '.min',
				extname: '.css',
			}))
		.pipe($.sourcemaps.write('maps'))
		.pipe(gulp.dest(config.dest + '/assets/css'))
		.pipe(config.browserSync.stream({match: config.dest + '/assets/css/**/*.css'}));
};

gulp.task('css', css);
