require('dotenv').load();

var browserify = require("browserify");
var envify = require("envify");
var babelify = require("babelify");
var gulp = require("gulp");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var gutil = require("gulp-util");

gulp.task("build", function() {
  var browserifyConfig = {
    entries: "browser.js",
    debug: true,
    transform: [envify, babelify]
  };

  return browserify(browserifyConfig)
    .bundle()
    .on("error", function(err) {
      gutil.log(gutil.colors.red(err));
      this.emit("end");
    })
    .pipe(source("app.js"))
    .pipe(buffer())
    .pipe(gulp.dest("public/"));
});

gulp.task("dev", function() {
  return gulp.watch(
    ["**/*.js", "!node_modules{,/**}", "!public{,/**}"],
    ["build"]
  )
});
