# warning

~~~
DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
~~~

```js
// before
compiler.plugin('compilation', function (compilation) {
  
// after
compiler.hooks.compilation.tap('HtmlBannerWebpackPlugin', function (compilation) {
```
