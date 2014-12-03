var gulp = require('gulp'),
  gutil = require('gulp-util'),
  stylish = require('jshint-stylish'),
  jshint = require('gulp-jshint'),
  w3cjs = require('gulp-w3cjs'),
  webserver = require('gulp-webserver');

gulp.task('w3cjs', function () {
    gulp.src('builds/development/*.html')
        .pipe(w3cjs());
});

gulp.task('jshint', function() {
  return gulp.src('builds/development/js/**/*.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch(['builds/development/*.html'], ['w3cjs']);
  gulp.watch('builds/development/js/**/*.js', ['jshint']);
  // gulp.watch('builds/development/css/*.css', ['css']);
});

gulp.task('webserver', function() {
  gulp.src('builds/development/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', [ 'w3cjs', 'jshint', 'webserver', 'watch']);
