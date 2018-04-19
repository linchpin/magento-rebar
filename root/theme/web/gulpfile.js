'use strict';

var gulp         = require( 'gulp' ),
	sass         = require( 'gulp-sass' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	watch        = require( 'gulp-watch' ),
	concat       = require( 'gulp-concat' ),
	wrapJS       = require( 'gulp-wrap-js' ),
	minify       = require( 'gulp-minify' ),
	browserSync  = require( 'browser-sync' ).create();

// Static server
gulp.task('serve', ['sass'], function () {
	browserSync.init({
		proxy : 'http://127.0.0.1:8080'
	});

    gulp.watch('./src/scss/**/*.scss', ['sass', 'autoprefixer']);
} );

// Concat JS
gulp.task( 'scripts', function() {
	return gulp.src([
		'./src/js/theme/*.js'
	])
	.pipe( concat('{%= theme_identifier %}.js') )

	// Minify JS
	.pipe( minify({ ext: { src: '.js', min: '.js' } }) )
	.pipe( gulp.dest('./js') );
} );

// Wrap JS
gulp.task( 'wrapjs', ['scripts'], function() {
	return gulp.src('./js/{%= theme_identifier %}.js')
		.pipe( wrapJS( 'require(["jquery"], function ( $ ) { %= body % } )' ) )
		.pipe( gulp.dest('./js') );
} );


// Sass
gulp.task( 'sass', function() {
	return gulp.src('./src/scss/**/*.scss')
		.pipe( sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe( gulp.dest('./css') )
		.pipe( browserSync.stream() );
} );

// Autoprefixer
gulp.task( 'autoprefixer', ['sass'], function() {
	return gulp.src( './css/*.css' )
		.pipe( autoprefixer({
			browsers: ['last 3 versions', 'iOS 7'],
			cascade: false
		}) )
		.pipe( gulp.dest('./css') );
} );


// Watch
gulp.task( 'watch', function() {
	gulp.watch('./src/js/theme/*.js', ['scripts', 'wrapjs']);
} );


// Default "gulp" task
gulp.task('default', [
	'serve',
	'scripts',
	'wrapjs',
	'watch'
]);