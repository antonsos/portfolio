module.exports = () => {
  $.gulp.task('css', () =>
  $.gulp.src('src/scss/*.scss')
    .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.init()))
    .pipe($.gp.sass())
    .pipe($.gp.autoprefixer())
    // .pipe($.gp.cssunit({
    //   type     :    'px-to-rem',
    //   rootSize :    16
    //  }))
    .pipe($.gp.csso())
    .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.write()))
    .pipe($.gulp.dest('build/css'))
  );
}