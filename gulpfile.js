/* eslint-disable no-unused-vars */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');


gulp.task('autoprefixer', () =>
    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false,
        }))
        .pipe(gulp.dest('css'))
);

gulp.task('serve', function () {
    browserSync.init({
        server: 'app/',
    });

    gulp.watch('app/сss/**/*.css').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('build', function () {
    const buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
    const buildJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
    const buildsFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    const buildCss = gulp.src(['app/css/**/*.css'])
        .pipe(gulp.dest('dist/css'));
    const dropImages = gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.series('serve'));
