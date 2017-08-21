var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

gulp.task('useref', function() {
  gulp.src('src/js/*.js')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
});

gulp.task('styles', function() {
  gulp.src(['src/styles/**/*.css'])
    .pipe(minifyCss())
    //Minifies only if it's a CSS file
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream())
})

gulp.task('default', function() {
  browserSync.init({
    server: './'
  });
  gulp.watch('src/**/*', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
})
