var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('dev', shell.task([
	'webpack --progress --colors --watch'
]));

gulp.task('serve', shell.task([
	'node server.js',
]));