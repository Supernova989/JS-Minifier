const gulp = require('gulp'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
    clean = require('gulp-clean');
    
const paths = {
    src: "src/*.js",
    build: 'build/',
    clean: 'build/*'
}

gulp.task('js:build:main', () => {
	return gulp.src(paths.src)
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename(path => {
			path.basename += '.min'
		}))
		.pipe(gulp.dest(paths.build))
});

gulp.task('clean', function () {
	return gulp.src(paths.clean, {read: false})
		.pipe(clean())
});

gulp.task('default', gulp.series(
	'clean',
	'js:build:main'
));
