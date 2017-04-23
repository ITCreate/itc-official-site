var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var del = require('del');

var clean = function() {
	return del([
		config.dest + '/**/*',
		'!' + config.dest + '/**/.gitkeep',
		'!' + config.dest + '/assets{,/**/.gitkeep}',
		'!' + config.dest + '/assets/bower_components{,/**/*}',
	], {
		dot: true,
	});
};

gulp.task('clean', clean);
