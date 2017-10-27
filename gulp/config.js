var path = require('path');
var root = path.resolve(__dirname + '/..');

module.exports = {
	root: root,
	src: root + '/src',
	remote_src: 'http://153.127.196.92/img/',
	dest: root + '/public',
	browserSync: require('browser-sync').create(),
	images: [
		"avatar-empty.png",
		"itc-logo.png",
		"itc-logo@2x.png",
		"itc-sticker.png",
		"mv-bg01.jpg",
		"mv-bg02.jpg",
		"mv-bg03.jpg",
		"mv-bg04.jpg",
		"ogp.png",
		"sec02-img01.jpg",
		"sec02-img02.jpg",
		"sec02-img03.jpg",
		"sec02-img04.jpg",
		"sec02-img05.jpg",
		"webclip.png",
	],
	images_avatar:[
		"avatar-b3132.jpg",
		"avatar-b4049.jpg",
		"avatar-b4079.jpg",
		"avatar-b4097.jpg",
		"avatar-b4183.jpg",
		"avatar-b5005.png",
		"avatar-b5159.png",
		"avatar-b5205.jpg",
		"avatar-b5331.jpg",
		"avatar-b6099.png",
		"avatar-b6123.jpg",
		"avatar-b6232.jpg",
		"avatar-b6352.jpg",
	]
};
