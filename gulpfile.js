// jshint quotmark: false

var autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  del = require('del'),
  fs = require('fs'),
  gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  magicImporter = require('node-sass-magic-importer'),
  plumber = require('gulp-plumber'),
  order = require('gulp-order'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  imagemin = require('gulp-imagemin'),
  uglify = require('gulp-uglify-es').default;

var config = {
  sourceDir: 'src/',
  outputDir: '_site/dist/'
};

// ----------------------------------------------------------------------------
// CSS
// ----------------------------------------------------------------------------

gulp.task('css', function() {
  return gulp
    .src(config.sourceDir + '/styles/styles.sass')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed', importer: magicImporter() }))
    .pipe(
      autoprefixer({
        browsers: ['last 2 version'],
        cascade: false
      })
    )
    .pipe(gulp.dest(config.outputDir + '/css'));
});

// ----------------------------------------------------------------------------
// Images
// ----------------------------------------------------------------------------

gulp.task('img', function() {
  gulp
    .src(config.sourceDir + '/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(config.outputDir + '/img'));
});

// ----------------------------------------------------------------------------
// Fonts
// ----------------------------------------------------------------------------

gulp.task('fonts', function() {
  gulp.src(config.sourceDir + '/fonts/**.*')
  .pipe(gulp.dest(config.outputDir + '/fonts'));
});

// ----------------------------------------------------------------------------
// Javascript
// ----------------------------------------------------------------------------

gulp.task('js', function() {
  return gulp
    .src(config.sourceDir + '/scripts/**/*')
    .pipe(order(['components/**','app.js']))
    .pipe(concat('scripts.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(config.outputDir + '/js'));
});

gulp.task('js-third-party', function() {
  return gulp
    .src([
      './node_modules/vue/dist/vue.min.js'
      ])
    .pipe(concat('third-party.js'))
    .pipe(gulp.dest(config.outputDir + '/js'));
});

// ----------------------------------------------------------------------------
// Clean
// ----------------------------------------------------------------------------

gulp.task('clean', function() {
  return del(config.outputDir + '/**/*');
});

// ----------------------------------------------------------------------------
// Lint
// ----------------------------------------------------------------------------

gulp.task('lint', function() {
  return gulp
    .src(config.sourceDir + '/styles/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

// ----------------------------------------------------------------------------
// Run all
// ----------------------------------------------------------------------------

gulp.task('all', function() {
  gulp.start('img');
  gulp.start('css');
  gulp.start('fonts');
  gulp.start('js');
  gulp.start('js-third-party');
});

// ----------------------------------------------------------------------------
// Watchers
// ----------------------------------------------------------------------------

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(config.sourceDir + '/styles/**/*.*', ['css']);
  gulp.watch(config.sourceDir + '/images/**/*.*', ['img']);
  gulp.watch(config.sourceDir + '/scripts/**/*.*', ['js']);
  gulp
    .watch([config.outputDir + '/**/*', './index.html'])
    .on('change', livereload.changed);
});
