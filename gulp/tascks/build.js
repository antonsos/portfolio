module.exports = () => {
  $.gulp.task(
    "build",
    $.gulp.series(
      "clean",
      $.gulp.parallel("html", "css", "js", "copy-opt-img", "copy-video"),
      $.gulp.parallel("watch", "serv")
    )
  );
}