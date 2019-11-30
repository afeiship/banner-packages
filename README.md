# gulp-banner
> Gulp banner plugin.

## installation
```shell
npm install -D afeiship/gulp-banner
```

## usage
```js
"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")({
  pattern: ["gulp-*", "gulp.*", "del"]
});

gulp.task("banner", function() {
  return gulp
    .src("src/*.js")
    .pipe($.banner("/* My Banner*/\n"))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series(["banner"]));
```

## resources
- https://github.com/douglasduteil/gulp-header
