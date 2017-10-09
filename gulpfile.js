const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

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
