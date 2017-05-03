var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var fs = require('fs');
var mkdirp = require('mkdirp');
var modernizr = require('modernizr');

var script = function(done) {
	modernizr.build({
		'feature-detects': ['img/webp'],
		minify: true,
	}, function(result) {
		mkdirp.sync(config.dest + '/assets/script');
		fs.writeFileSync(config.dest + '/assets/script/modernizr-custom.js', result);
		done();
	});
};

gulp.task('script', script);
