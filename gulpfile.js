var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function (done) {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function(done){
  gulp.watch('src/**/*.scss', {ignoreInitial: false}, gulp.series(['sass']) );
  done();
});

exports.default = gulp.series(['watch']);