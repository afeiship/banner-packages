(function() {
  'use strict';

  const gulp = require('gulp');
  const pkg = require('../package.json');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('scripts', function() {
    return gulp
      .src('src/*.js')
      .pipe(gulp.dest('dist'))
      .pipe($.rename({ extname: '.min.js' }))
      .pipe($.uglify({ output: { comments: saveLicense } }))
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ size ]:' }));
  });
})();
