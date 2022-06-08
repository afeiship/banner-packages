(function () {
  var global = global || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxNiceComments = nx.niceComments || require('@jswork/next-nice-comments');

  nx.rollupBanner = function () {
    return nxNiceComments(
      [
        'name: <%= pkg.name %>',
        'description: <%= pkg.description %>',
        'homepage: <%= pkg.homepage %>',
        'version: <%= pkg.version %>',
        'date: ' + new Date().toISOString(),
        'license: <%= pkg.license %>'
      ],
      'raw'
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.rollupBanner;
  }
})();
