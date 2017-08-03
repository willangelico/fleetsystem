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
    sass        = require('gulp-sass');

gulp.task('react', function () {
    var b = browserify({
        entries: './src/scripts/index.js',
        debug: true,
        transform: [babelify.configure({
            presets: ['react']
        })]
    });
    return b.bundle()
        .pipe(source('ini.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))       
        .on('error', util.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src/scripts/bundle'));
});

gulp.task('bower-js', function(){
    var filterJS = filter(['**/*.js']);
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(filterJS)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/scripts/bundle'))
});

gulp.task('js',['bower-js','react'],function(){
    return gulp.src(['src/scripts/bundle/vendor.js','src/scripts/bundle/ini.js'])
        .pipe(concat('ini.js'))
        .pipe(uglify())          
        .pipe(gulp.dest("./dist/assets/js"));
});


gulp.task('sass', function () {
  return gulp.src('src/styles/sass/style.scss')    
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/styles/css'));
});

gulp.task('sass-concat',['sass'], function(){
  return gulp.src('src/styles/css/style.css')
    .pipe(concat('style.min.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('default', ['js','sass-concat']);