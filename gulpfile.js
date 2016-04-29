'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

var srcFiles = 'bin/**';

gulp.task('babel', function () {
  return gulp.src(srcFiles)
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['babel'], function () {
  gulp.watch(srcFiles, ['babel']);
});
