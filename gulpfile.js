const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const csslint = require('gulp-csslint');
const cleanCSS = require('gulp-clean-css');

gulp.task('server', () => {
    return require('./server');
});

gulp.task('dev', () => {
    return nodemon({
        ext: 'js',
        script: 'server.js',
    });
});

gulp.task('lint', () => {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('css', () => {
    return gulp.src(['**/*.css', '!node_modules/**'])
        .pipe(csslint())
        .pipe(csslint.formatter())
        .pipe(csslint.formatter('fail'));
});

gulp.task('minify-css', () => {
  return gulp.src(['**/*.css', '!node_modules/**'])
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});
