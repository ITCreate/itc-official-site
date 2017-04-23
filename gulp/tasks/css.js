var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var serve = require('./serve');
var browserSync = require('browser-sync').get('Server 1');

var css = function() {
	return gulp.src(config.src + '/scss/**/*.scss')
		.pipe($.plumber({
			errorHandler: $.notify.onError("Error: <%= error.message %>"),
		}))
		.pipe($.sourcemaps.init())
			.pipe($.pleeease({
				sass: true,
				mqpacker: true,
			}))
			.pipe($.rename({
				suffix: '.min',
				extname: '.css',
			}))
		.pipe($.sourcemaps.write('.', {
			includeContent: false,
			sourceRoot: config.src + '/scss',
		}))
		.pipe(gulp.dest(config.dest + '/assets/css'))
		.pipe(browserSync.stream({match: config.dest + '/assets/css/**/*.css'}));
};

gulp.task('css', css);
