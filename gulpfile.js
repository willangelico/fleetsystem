var browserify  = require('browserify'),
    babelify    = require('babelify'),
    gulp        = require('gulp'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    sourcemaps  = require('gulp-sourcemaps'),
    util        = require('gulp-util'),
    mainBowerFiles  = require('gulp-main-bower-files'),
    filter      = require('gulp-filter'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify');


gulp.task('default', function () {
  var b = browserify({
    entries: './src/index.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['react']
    })]
  });

  return b.bundle()
    .pipe(source('ini.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      // Add other gulp transformations (eg. uglify) to the pipeline here.
      .on('error', util.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});


gulp.task('bower-js', function(){
   var filterJS = filter(['**/*.js']);
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(filterJS)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});