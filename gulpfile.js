/**
 * gulpfile dependancies
 */

var clean   = require('gulp-clean')
  , concat  = require('gulp-concat')
  , gulp    = require('gulp')
  , jshint  = require('gulp-jshint')
  , minCSS  = require('gulp-minify-css')
  , path    = require('path')
  , sass    = require('gulp-sass')
  , stylish = require('jshint-stylish'); 

/**
 * Source/Destinations
 */

// Javascripts
var scripts = {
    src : [
        path.join(__dirname, 'site/js/src/**/*.js')
    ]
  , dest      : path.join(__dirname, 'site/js')
  , buildName : 'CitrusHack.js'
};

// Stylesheets
var styles = {
    src       : path.join(__dirname, 'site/css/src/**/*.scss')
  , dest      : path.join(__dirname, 'site/css')
  , buildName : 'CitrusHack.css'
};

/**
 * Javascript tasks
 */

gulp.task('clean:js', function(){
    gulp.src(path.join(scripts.dest, scripts.buildName))
        .pipe(clean());
});

gulp.task('lint:js', function(){
    gulp.src(scripts.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('build:js', ['clean:js', 'lint:js'], function(){
    gulp.src(scripts.src)
        .pipe(concat(scripts.buildName))
        .pipe(gulp.dest(scripts.dest));
});

gulp.task('watch:js', function(){
    gulp.watch(scripts.src, ['build:js']);
});

/**
 * CSS tasks
 */

gulp.task('clean:css', function(){
    gulp.src(path.join(styles.dest, styles.buildName))
        .pipe(clean());
})

gulp.task('build:css', ['clean:css'], function(){
    gulp.src(styles.src)
        .pipe(sass({
            errorToConsole: true
        }))
        .pipe(concat(styles.buildName))
        .pipe(minCSS())
        .pipe(gulp.dest(styles.dest));
});

gulp.task('watch:css', function(){
    gulp.watch(styles.src, ['build:css']);
});

/**
 * Default tasks
 */

gulp.task('default', ['build:js', 'build:css', 'watch:js', 'watch:css']);
