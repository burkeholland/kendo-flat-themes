var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var path = require('path');

gulp.task('app', ['default'], function () {
  gulp.src('./dist/*.css')
    .pipe(gulp.dest('../app/public/stylesheets/themes'));
});

gulp.task('default', function() {
  gulp.src('./less/themes/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(rename(function(path) {
      path.basename = 'kendo.mobile.flat.' + path.basename;
    }))
    .pipe(gulp.dest('./dist'));
});