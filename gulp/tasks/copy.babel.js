var gulp = require('gulp');
var config = require('../config');

var copy = function() {
	return Promise.all([
		new Promise(function(resolve) {
			gulp.src(config.src + '/fonts/**/*.{woff2,woff,otf,ttf}')
				.pipe(gulp.dest(config.dest + '/assets/fonts'))
				.on('end', resolve);
		}),
		new Promise(function(resolve) {
			gulp.src(require('node-font-awesome').fonts)
				.pipe(gulp.dest(config.dest + '/assets/fonts'))
				.on('end', resolve);
		}),
		new Promise(function(resolve) {
			gulp.src(config.src + '/favicon.ico')
				.pipe(gulp.dest(config.dest))
				.on('end', resolve);
		}),
		new Promise(function(resolve) {
			gulp.src(config.root + "/node_modules/ress/dist/ress.min.css")
				.pipe(gulp.dest(config.dest + "/assets/css/vendor"))
				.on('end', resolve);
		})
	]);
};

gulp.task('copy', copy);
