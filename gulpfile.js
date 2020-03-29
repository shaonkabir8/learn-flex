const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

// CURRENTLY THIS ENTIRE THINGS IS FOR 'FLEX NAVTION SECTION'


// gulp task for geneating autoprefix on css
gulp.task('styles', function() {
    
    return gulp.src('flexnav/flexnav.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))

})


// gulp task for watching on everytime css changed!!
gulp.task('watch', function() {
    gulp.watch('flexnav/flexnav.css', gulp.series('styles'));
});

// I just have to waste a lot of times to making this `watch` task completely successfull.
// found solution on here: https://stackoverflow.com/questions/39665773/gulp-error-watch-task-has-to-be-a-function