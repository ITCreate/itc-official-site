var gulp = require('gulp');
var runSequence = require('run-sequence');

var build = function(done) {
	return runSequence(
		'clean',
		['html', 'css', 'minify-image', 'copy'],
		done
	);
};

gulp.task('build', build);
