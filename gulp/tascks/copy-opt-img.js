module.exports = () => {
  $.gulp.task("copy-opt-img", () =>
  $.gulp.src("src/img/**/*.{png,svg,jpg}")
    .pipe(
      $.gp.imagemin([
        $.gp.imagemin.jpegtran({ progressive: true }),
        $.gp.imagemin.optipng({ optimizationLevel: 3 }),
        $.gp.imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe($.gulp.dest("build/img"))
  );
}