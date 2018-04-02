/* jshint esversion: 6 */

const gulp = require('gulp');
const pkg = require('./package.json');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const header = require('gulp-header');
const size = require('gulp-size');
const stylus = require('gulp-stylus');
const csslint = require('gulp-csslint');
csslint.addFormatter('csslint-stylish');
const csscomb = require('gulp-csscomb');
const filever = require('gulp-version-filename');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

const comment = `/**
 * Name: ${pkg.name} v${pkg.version}
 * Description: ${pkg.description}
 * @version ${pkg.version}
 * Author: ${pkg.author}
 * Copyright © Reedia Limited 2018. All rights reserved.
 * ${pkg.homepage}
 * Repository: ${pkg.repository}
 * License: ${pkg.license}
 * License URI: ${pkg.license_URI}
 */\r\n
/**
 * Table Of Content

    # Configurations
      # Media Queries
      # Variables

    # Base
      # Base
      # Divider
      # Headings

    # Core
      # Grid

    # Components
      # Button
      # Card
      # Code
      # Form
      # Image
      # Link
      # Links
      # List
      # Nav
      # Table
      # Util
 */\r\n`;

gulp.task('build-css', function () {
  return gulp.src([
    './src/configurations/*.styl',
    './src/colours/colour-variables.styl',
    './src/base/*.styl',
    './src/core/*.styl',
    './src/components/*.styl'
  ])
    .pipe(concat('skeletonic.styl'))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(concat('skeletonic.css', { rebaseUrls: false }))
    .pipe(size())
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(csscomb('./csscomb.json'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build-pattern', function () {
  return gulp.src([
    './src/patterns/pattern.styl'
  ])
    .pipe(concat('skeletonic-pattern.styl'))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(concat('skeletonic-pattern.css', { rebaseUrls: false }))
    .pipe(size())
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(csscomb('./csscomb.json'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic-pattern.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build-colours', function () {
  return gulp.src([
    './src/colours/*.styl'
  ])
    .pipe(concat('skeletonic-colours.styl'))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(concat('skeletonic-colours.css', { rebaseUrls: false }))
    .pipe(size())
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(csscomb('./csscomb.json'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic-colours.min.css'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('build-animations', function () {
  return gulp.src([
    './src/animations/*.styl'
  ])
    .pipe(concat('skeletonic-animations.styl'))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(concat('skeletonic-animations.css', { rebaseUrls: false }))
    .pipe(size())
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(csscomb('./csscomb.json'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic-animations.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build-fonts', function () {
  return gulp.src([
    './src/fonts/*.styl'
  ])
    .pipe(concat('skeletonic-fonts.styl'))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(concat('skeletonic-fonts.css', { rebaseUrls: false }))
    .pipe(size())
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(csscomb('./csscomb.json'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic-fonts.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('csslint', function () {
  return gulp.src(['./dist/*.css'])
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(size())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('csscomb', function () {
  return gulp.src(['./dist/*.css'])
    .pipe(csscomb('./csscomb.json'))
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function () {
  return gulp.src(['./dist/*.css'])
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(concat('skeletonic.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('rename', function () {
  return gulp.src(['./dist/tmp/*.min.css'])
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean:tmp', function () {
  return del(['./dist/tmp/']);
});


gulp.task('watch', function () {
  gulp.watch(['dist/*.css'], ['default']);
});

// Run in order:
// gulp build-colours && gulp build-css && gulp build-pattern && gulp build-animations && gulp build-fonts && gulp rename && gulp clean:tmp

gulp.task('default', ['build-css']);
gulp.task('pattern', ['build-pattern']);
gulp.task('colours', ['build-colours']);
gulp.task('animations', ['build-animations']);
gulp.task('fonts', ['build-fonts']);
