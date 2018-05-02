module.exports = () => {
	$.gulp.task('html', () =>
		$.gulp.src('src/index.pug')
			.pipe($.gp.pug({
					locals: JSON.parse($.fs.readFileSync('./src/components/skills/skills-content.json', 'utf8')),
					pretty: true
			}))
			.pipe($.gulp.dest('build'))
	);
}