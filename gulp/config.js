var path = require('path');
var root = path.resolve(__dirname + '/..');

module.exports = {
	root: root,
	src: root + '/src',
	dest: root + '/public',
	assets: root + '/public/assets',
	bower: root + '/public/assets/bower_components',
};
