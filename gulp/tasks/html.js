var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

var html = function() {
	return gulp.src(config.src + 'ejs/**/*.ejs')
		.pipe($.plumber({
			errorHandler: $.notify.onError("Error: <%= error.message %>")
		}))
		.pipe($.ejs())
		.pipe($.rename({
			extname: '.html',
		}))
		.pipe(gulp.dest(config.root + 'public/'));
};

gulp.task('html', html);
