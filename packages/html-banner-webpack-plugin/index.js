var objectAssign = require('object-assign');
var nx = require('@jswork/next');
var DEFAULT_OPTIONS = {
  banner: ['hello comments banner'],
  type: 'html'
};

// import packages:
require('@jswork/next-nice-comments');
require('@jswork/next-npm-installed');

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function HtmlBannerWebpackPlugin(inOptions) {
  this.options = objectAssign(DEFAULT_OPTIONS, inOptions);
}



/**
 * Implement the plugin
 * webpack-plugin: v3.2.0
 */
HtmlBannerWebpackPlugin.prototype.apply = function (compiler) {
  if (!nx.npmInstalled('html-webpack-plugin')) {
    console.log('INFO: html-webpack-plugin required!');
    return null;
  }

  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var options = this.options;
  var process = function (data, cb) {
    data.html = nx.niceComments(options.banner, options.type) + data.html;
    cb && cb(null, data)
  };

  if (compiler.hooks) {
    compiler.hooks.compilation.tap('HtmlBannerWebpackPlugin', function (compilation) {
      // html-webpack-plugin === 4.x
      if (typeof HtmlWebpackPlugin.getHooks === 'function') {
        HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('HtmlBannerWebpackPlugin', process)
      } else {
        // html-webpack-plugin ===  3.x
        compilation.plugin('html-webpack-plugin-before-html-processing', process);
      }
    });
  } else {
    // webpack < 4.0:
    compiler.plugin('emit', function (compilation) {
      console.log('NOT SUPPORT!');
      // updateOptions(compilation);
      // return process(self.options);
    });
  }
};

module.exports = HtmlBannerWebpackPlugin;
