var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var fs = require('fs');

var html = function() {
	var json = JSON.parse(fs.readFileSync(config.src + '/json/profiles.json'));

	return gulp.src(config.src + '/ejs/**/*.ejs')
		.pipe($.plumber({
			errorHandler: $.notify.onError("Error: <%= error.message %>"),
		}))
		.pipe($.ejs({
			profiles: json.profiles,
		}))
		.pipe($.rename({
			extname: '.html',
		}))
		.pipe(gulp.dest(config.root + '/public'));
};

gulp.task('html', html);
