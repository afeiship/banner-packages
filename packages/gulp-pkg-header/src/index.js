var header = require('gulp-header');
var path = require('path');
var nx = require('@jswork/next');
var pkg = require(path.join(process.cwd(), './package.json'));
var dateformat = require('dateformat');
var DEFAULT_FORMAT = 'yyyy-mm-dd HH:MM:ss';
var DEFAULT_OPTIONS = { type: 'js' };
var niceComments = require('@jswork/nice-comments');

var generateComments = function (inType) {
  var type = inType || 'js';
  return niceComments(
    [
      'name: <%= pkg.name %>',
      'description: <%= pkg.description %>',
      'homepage: <%= pkg.homepage %>',
      'version: <%= pkg.version %>',
      'date: ' + dateformat(null, DEFAULT_FORMAT),
      'license: <%= pkg.license %>'
    ],
    type
  );
};

module.exports = function (inOptions) {
  var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
  return header(generateComments(options.type), { pkg: pkg });
};
