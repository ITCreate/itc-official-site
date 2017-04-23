var gulp = require('gulp');
var config = require('../config');

var copy = function() {
	return gulp.src(config.src + '/fonts/**/*.woff2')
		.pipe(gulp.dest(config.dest + '/assets/fonts'))
};

gulp.task('copy', copy);
