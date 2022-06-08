# gulp-pkg-header
> Gulp header form package.json.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]


## installation
```shell
npm install -D @jswork/gulp-pkg-header
```

## usage
```js
const header = require("@jswork/gulp-pkg-header");

// type: 'js'|'html'|'css'|'raw'

gulp.task('build' , function(){
  return gulp.src("./src/*.js")
    .pipe(header({ type: 'js' }))
    .pipe(gulp.dest("dist"));
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/gulp-pkg-header/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/gulp-pkg-header
[version-url]: https://npmjs.org/package/@jswork/gulp-pkg-header

[license-image]: https://img.shields.io/npm/l/@jswork/gulp-pkg-header
[license-url]: https://github.com/afeiship/gulp-pkg-header/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/gulp-pkg-header
[size-url]: https://github.com/afeiship/gulp-pkg-header/blob/master/dist/gulp-pkg-header.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/gulp-pkg-header
[download-url]: https://www.npmjs.com/package/@jswork/gulp-pkg-header

