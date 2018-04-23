const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const cssunit = require('gulp-css-unit');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gulpIf = require('gulp-if');
const del = require('del');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


gulp.task('html', () =>
  gulp.src('src/index.pug') // пути для всех файлов которые нужно
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('build'))
);

gulp.task('css', () =>
  gulp.src('src/scss/*.scss')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer())
    // .pipe(cssunit({
    //   type     :    'px-to-rem',
    //   rootSize :    16
    //  }))
    .pipe(minifyCSS())
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('build/css')) // указать нормальный путь
);

gulp.task('js', () =>
  gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    // .pipe(babel({
    //         presets: ['env']
    //     }))
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
);

gulp.task('clean', () =>
  del('build')   // указать путь до папки build
);

gulp.task("copy-img", () =>
  gulp.src("src/img/**/*.{png,svg,jpg}")
    .pipe(gulp.dest("build/img"))
);

gulp.task("copy-video", () =>
  gulp.src("src/video/**/*.{mp4,webm,jpg}")
  .pipe(gulp.dest("build/video"))
);

gulp.task('serv', () => {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
    browserSync.watch("build/**/*.*").on('change', browserSync.reload);
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.pug', gulp.series('html'));
    gulp.watch('src/**/*.scss', gulp.series('css'));
    gulp.watch("src/**/*.js", gulp.series("js"));
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("html", "css", "js", "copy-img", "copy-video"),
    gulp.parallel("watch", "serv")
  )
);