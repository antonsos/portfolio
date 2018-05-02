module.exports = () => {
  $.gulp.task("copy-video", () =>
  $.gulp.src("src/video/**/*.{mp4,webm,jpg}")
    .pipe($.gulp.dest("build/video"))
  );
}