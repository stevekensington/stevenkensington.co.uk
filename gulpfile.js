const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Points to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

//Logs message
gulp.task('message', function (){
  return console.log('Gulp is running...')
});

//Copy all root files
gulp.task('copyRoot', function(){
  gulp.src('src/*')
      .pipe(gulp.dest('dist'))
});

//Copy all includes
gulp.task('copyIncludes', function(){
  gulp.src('src/includes/*')
      .pipe(gulp.dest('dist/includes'))
});

//Optimise images
gulp.task('imageMin', function(){
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

//Minify JS
gulp.task('minifyJS', function(){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

//Compile Sass
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

//Concatenate and minify JS
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task ('default', ['message', 'copyRoot', 'copyIncludes', 'imageMin', 'sass', 'scripts']);

gulp.task ('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*', ['copyRoot']);
  gulp.watch('src/includes/*', ['copyIncludes']);
});
