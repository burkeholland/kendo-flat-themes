var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var path = require('path');

gulp.task('less', function () {
  gulp.src('./less/themes/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(rename(function(path) {
      path.basename = 'kendo.mobile.flat.' + path.basename;
    }))
    .pipe(gulp.dest('../app/public/stylesheets/themes'));
});

gulp.task('default', function() {
  // place code for your default task here
});