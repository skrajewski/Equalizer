var gulp = require('gulp'),
	umd = require('gulp-umd'),
	uglify = require('gulp-uglify'),
	jslint = require('gulp-jslint'),
	rename = require('gulp-rename');

gulp.task('umd', function() {
	return gulp.src('./equalizer.js')
		.pipe(umd())
		.pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
	return gulp.src('./dist/equalizer.js')
		.pipe(uglify())
		.pipe(rename('equalizer.min.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('lint', function() {
	return gulp.src('./equalizer.js')
		.pipe(jslint());
});

gulp.task('build', ['lint', 'umd', 'compress']);
