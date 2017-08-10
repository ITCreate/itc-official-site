var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var del = require('del');

var clean = function() {
	return del([
		config.dest + '/**/*',
		'!' + config.dest + '/**/.gitkeep',
		'!' + config.dest + '/assets{,/**/.gitkeep}',
	], {
		dot: true,
	});
};

gulp.task('clean', clean);
