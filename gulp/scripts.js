var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('js', function() {    
    return gulp.src(['app/controllers/module.js', 'app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.built.js'))
        .pipe(ngAnnotate())
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/js/'))
})

gulp.task('watch:js', ['js'], function() {
    gulp.watch('app/**/*.js', ['js'])
})
