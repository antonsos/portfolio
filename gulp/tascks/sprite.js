module.exports = () => {
  $.gulp.task("sprite", () =>
  $.gulp.src("src/sprite_svg/skills/sprite-technologies/*.svg")
    .pipe(
      $.gp.svgstore({
        inlineSvg: true
      })
    )
    .pipe($.gp.rename("sprite.svg"))
    .pipe($.gulp.dest("src/img/skills"))
  );
}