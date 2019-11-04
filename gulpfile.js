var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

gulp.task('sass', function (done) {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./main/css'));
});

gulp.task('js', function (done) {
  return gulp.src(['./src/js/helpers.js', './src/js/themes.js', './src/js/languages.js',  './src/js/actions.js'])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./main/js'));
});

gulp.task('watch', function(done){
  gulp.watch('src/scss/**/*.scss', {ignoreInitial: false}, gulp.series(['sass']) );
  gulp.watch('src/js/**/*.js', {ignoreInitial: false}, gulp.series(['js']) );
  done();
});

exports.default = gulp.series(['watch']);