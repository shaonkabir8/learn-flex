const { task, src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

task('styles', function(){
    
    return src('style.css')
        .pipe(autoprefixer())
        .pipe(dest('build'))

})
