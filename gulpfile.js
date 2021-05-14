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
//const filever = require('gulp-version-filename');
//const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

const comment = `/**
 * Name: ${pkg.name} v${pkg.version}
 * Description: ${pkg.description}
 * @version ${pkg.version}
 * Author: ${pkg.author}
 * Copyright © Sebastien Rousseau 2021. All rights reserved.
 * ${pkg.homepage}
 * Repository: ${pkg.repository}
 * License: ${pkg.license}
 * License URI: ${pkg.license_URI}
 */\r\n
/**
 * Table Of Content

    # Animations
      # Bounce
      # Chameleon
      # Fade In
      # Fade Out
      # Flash
      # Pop In
      # Pulse
      # Rotation
      # Shake
      # Vanish In
      # Vanish Out
      # Wobble
      # Zoom In

    # Base
      # Base
      # Dark Mode
      # Helpers

    # Colours
      # Colour Variables
      # Material Design Colours
      # Tachyons Colours
      # Web-Safe Colours

    # Components
      # Button
      # Card
      # Code
      # Divider
      # Form
      # Headings
      # Image
      # Link effects
      # Link
      # List
      # Margin
      # Nav
      # Padding
      # Table
      # Util

    # Configurations
      # Media Queries
      # Variables

    # Core
      # Grid

    # Debugging
      # CSS Grid Overlay
      # Grid Images

    # Fonts
      # Font face

 */\r\n`;

gulp.task('build-css', function () {
  return gulp.src([
    './src/configurations/*.styl',
    './src/colours/*.styl',
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
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic.min.css'))
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build-debug-mode', function () {
  return gulp.src([
    './src/debugging/*.styl'
  ])
    .pipe(concat('skeletonic-debug-mode.styl'))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(concat('skeletonic-debug-mode.css', { rebaseUrls: false }))
    .pipe(size())
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(csscomb('./csscomb.json'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic-debug-mode.min.css'))
    .pipe(gulp.dest('./public/dist/'))
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
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic-colours.min.css'))
    .pipe(gulp.dest('./public/dist/'))
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
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic-animations.min.css'))
    .pipe(gulp.dest('./public/dist/'))
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
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csslint.formatter('stylish'))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('./tmp/skeletonic-fonts.min.css'))
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('csslint', function () {
  return gulp.src(['./dist/*.css'])
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(size())
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('csscomb', function () {
  return gulp.src(['./dist/*.css'])
    .pipe(csscomb('./csscomb.json'))
    .pipe(header(comment + '\r\n'))
    .pipe(size())
    .pipe(gulp.dest('./public/dist/'))
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
    .pipe(gulp.dest('./public/dist/'))
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
    .pipe(gulp.dest('./public/dist/'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean:tmp', function () {
  return del(['./dist/tmp/']), del(['./public/dist/tmp/']);
});


gulp.task('watch', function () {
  gulp.watch(['dist/*.css'], ['default']);
});

// Run in order:
// gulp build-colours && gulp build-css && gulp build-debug-mode && gulp build-animations && gulp build-fonts && gulp rename && gulp clean:tmp
// gulp build-colours
// gulp build-css
// gulp build-debug-mode
// gulp build-animations
// gulp build-fonts
// gulp rename
// gulp clean:tmp

gulp.task('default', gulp.series('build-css'));
gulp.task('debug-mode', gulp.series('build-debug-mode'));
gulp.task('colours', gulp.series('build-colours'));
gulp.task('animations', gulp.series('build-animations'));
gulp.task('fonts', gulp.series('build-fonts'));

