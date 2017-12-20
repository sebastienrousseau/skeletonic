const gulp = require("gulp");
const pkg = require("./package.json");

const minifyCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const header = require("gulp-header");
const size = require("gulp-size");
const stylus = require("gulp-stylus");
const csslint = require("gulp-csslint");
const csscomb = require('gulp-csscomb');

const comment = `/**
 * Skeletonic v${pkg.version}
 * Copyright © Reedia Limited 2015-2018. All rights reserved.
 * https://skeletonic.io/
 * Released under the MIT License
 * http://www.opensource.org/licenses/mit-license.php
 */\r\n`;

gulp.task("build", function () {
  return gulp.src([
      "./src/config.styl",
      "./src/base.styl",
      "./src/grid.styl",
      "./src/typography.styl",
      // "./src/form.styl",
      // "./src/button.styl",
      "./src/link.styl",
      "./src/list.styl",
      "./src/image.styl",
      // "./src/box.styl",
      // "./src/nav.styl",
      // "./src/card.styl",
      // "./src/code.styl",
      "./src/divider.styl",
      "./src/util.styl"
    ])
    .pipe(concat("skeletonic.styl"))
    .pipe(stylus())
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("csslint", ["build"], function() {
  return gulp.src(["./dist/skeletonic.css"])
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(size())
    .pipe(gulp.dest("./dist/"));
});

gulp.task('csscomb', function() {
  return gulp.src(["./dist/skeletonic.css"])
    .pipe(csscomb('./csscomb.json'))
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("minify", ["build"], function() {
  return gulp.src(["./dist/skeletonic.css"])
    .pipe(minifyCSS())
    .pipe(size())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat("skeletonic.min.css"))
    .pipe(gulp.dest("./dist/"));
});


gulp.task("watch", function() {
  gulp.watch(["src/*.css"], ["default"]);
});


gulp.task("default", ["build","csscomb","csslint","minify"]);
