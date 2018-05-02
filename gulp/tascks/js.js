module.exports = () => {
  $.gulp.task("js", () =>
  $.gulp.src("src/js/*.js")
    .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.init()))
    // .pipe($.gp.babel({
    //         presets: ['env']
    //     }))
    .pipe($.gp.concat("app.min.js"))
    .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.write()))
    .pipe($.gulp.dest("build/js"))
  );
}