const gulp = require("gulp");
const pkg = require("./package.json");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const header = require("gulp-header");
const size = require("gulp-size");
const stylus = require("gulp-stylus");
const csslint = require("gulp-csslint");
csslint.addFormatter('csslint-stylish');
const csscomb = require('gulp-csscomb');
const filever = require('gulp-version-filename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const  vinylPaths = require('vinyl-paths');

const comment = `/**
 * Name: ${pkg.name} v${pkg.version}
 * Description: ${pkg.description}
 * @version ${pkg.version}
 * Author: ${pkg.author}
 * Copyright © Reedia Limited 2015-2018. All rights reserved.
 * ${pkg.homepage}
 * Repository: ${pkg.repository}
 * License: ${pkg.license}
 * License URI: ${pkg.license_URI}
 */\r\n`;

gulp.task("build-skeletonic-css", function () {
  return gulp.src([
      "./src/config.styl",
      "./src/base.styl",
      "./src/grid.styl",
      "./src/typography.styl",
      "./src/table.styl",
      "./src/form.styl",
      "./src/button.styl",
      "./src/link.styl",
      "./src/list.styl",
      "./src/image.styl",
      // "./src/nav.styl",
      "./src/code.styl",
      "./src/divider.styl",
      "./src/util.styl"
    ])
    .pipe(concat("skeletonic.styl"))
    .pipe(stylus())
    .pipe(concat("skeletonic.css", {rebaseUrls:false}))
    .pipe(size())
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(filever())
    .pipe(csscomb('./csscomb.json'))
    .pipe(gulp.dest("./dist/"))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat("./tmp/skeletonic.min.css"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("build-skeletonic-css-grid-pattern", function () {
  return gulp.src([
      "./src/pattern.styl"
    ])
    .pipe(concat("skeletonic-pattern.styl"))
    .pipe(stylus())
    .pipe(concat("skeletonic-pattern.css", {rebaseUrls:false}))
    .pipe(size())
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(filever())
    .pipe(csscomb('./csscomb.json'))
    .pipe(gulp.dest("./dist/"))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat("./tmp/skeletonic-pattern.min.css"))
    .pipe(gulp.dest("./dist/"));
});


gulp.task("csslint", function() {
  return gulp.src(["./dist/*.css"])
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(size())
    .pipe(gulp.dest("./dist/"));
});

gulp.task('csscomb', function() {
  return gulp.src(["./dist/*.css"])
    .pipe(csscomb('./csscomb.json'))
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("clean", function() {
  return gulp.src(["./dist/*.css"])
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(concat("skeletonic.min.css"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("rename", function() {
  return gulp.src(["./dist/tmp/*.min.css"])
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(filever())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(gulp.dest("./dist/"));
});

gulp.task('clean:tmp', function () {
  return del(['./dist/tmp/']);
});


gulp.task("watch", function() {
  gulp.watch(["dist/*.css"], ["default"]);
});


gulp.task("default", ["build-skeletonic-css"]);
gulp.task("pattern", ["build-skeletonic-css-grid-pattern"]);

// "rename","csscomb","csslint","clean"
