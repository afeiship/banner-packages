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
- https://github.com/ben-eb/gulp-cat/blob/master/package.json
- https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/testing.md
- https://stackoverflow.com/questions/52165333/deprecationwarning-buffer-is-deprecated-due-to-security-and-usability-issues/52165509
