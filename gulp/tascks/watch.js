module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('src/**/*.pug', $.gulp.series('html'));
    $.gulp.watch('src/**/*.scss', $.gulp.series('css'));
    $.gulp.watch("src/**/*.js", $.gulp.series("js"));
    $.gulp.watch('src/components/skills/skills-content.json', $.gulp.series('html'));
  });
}