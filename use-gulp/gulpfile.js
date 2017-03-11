var gulp = require("gulp");
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var  minhtml = require('gulp-htmlmin');

gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function(argument) {
    gulp.src('src/js/index.js')
        .pipe(uglify())
        .pipe(concat('index.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('img', function(argument){
  gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'));
});


gulp.task('html', function(argument){
  gulp.src('src/*.html')
      .pipe(minhtml({collapseWhitespace: true}))
      .pipe(gulp.dest('dist/'));
});

gulp.task('copy', function(argument){
  gulp.src('src/js/static/*.js')
      .pipe(gulp.dest('dist/js/static/'));
});

gulp.task('clear', function(){
    gulp.src('dist/*',{read: false})
        .pipe(clean());
});
 gulp.task('default', ['clear','html', 'less', 'js', 'img',"copy"],function(){
   console.log("yes")
 });