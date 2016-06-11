var gulp = require("gulp");
var uglify = require("gulp-uglify");
var uglifycss = require('gulp-uglifycss');
var imagemin = require("gulp-imagemin");

gulp.task('minjs', function() {
    return gulp.src('source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});
gulp.task('mincss', function() {
    return gulp.src('source/css/*.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css/'));
});
gulp.task("minimages", function() {
    return gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images/'))
});
gulp.task("default",function() {
    gulp.start("mincss", "minjs");
});
