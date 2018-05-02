module.exports = () => {
  $.gulp.task('serv', () => {
    $.browserSync.init({
        server: {
            baseDir: "build"
        }
    });
    $.browserSync.watch("build/**/*.*").on('change', $.browserSync.reload);
  });
}