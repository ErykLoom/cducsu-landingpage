var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

const paths = {
  sass: {
    files: ['sass/*.sass', '!./variables/*.sass']
  },
  js: {
    files: ['js/*.js', '!js/_*.js']
  }
};

gulp.task('sass', function(){
  return gulp.src(paths.sass.files)
    .pipe(sass({
      includePaths: './variables/',
      outputStyle: 'compressed'
    }))
    .pipe(cssnano())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('css'))
});

gulp.task('js', function() {
  return gulp.src(paths.js.files)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js'))
});


gulp.task('watch', ['sass', 'js'], function (){
  gulp.watch('*/js/*.js', ['js']);
  gulp.watch('sass/*.sass', ['sass']);
});