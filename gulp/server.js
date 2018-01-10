var gulp = require('gulp')
var shell = require('gulp-shell')
gulp.task('dev:server', function() {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'npm start'
        ]))
})