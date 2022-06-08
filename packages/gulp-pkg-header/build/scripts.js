(function() {
  'use strict';

  const gulp = require('gulp');
  const pkg = require('../package.json');
  const nx = require('@jswork/next');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  require('@jswork/next-nice-comments');

  const niceComments = nx.niceComments(
    [
      'name: <%= pkg.name %>',
      'homepage: <%= pkg.homepage %>',
      'version: <%= pkg.version %>',
      'license: <%= pkg.license %>'
    ],
    'js'
  );

  gulp.task('scripts', function() {
    return gulp
      .src('src/*.js')
      .pipe($.header(niceComments, { pkg: pkg }))
      .pipe(gulp.dest('dist'))
      .pipe($.rename({ extname: '.min.js' }))
      .pipe($.uglify({ output: { comments: saveLicense } }))
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ size ]:' }));
  });
})();
