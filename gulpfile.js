var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('*.js')
        .pipe(browserSync.stream());
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});


gulp.task('watch',['browser_Sync'], function()
{    
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/**/*.js',  browserSync.reload);
    gulp.watch('app/**/*.xsd',  browserSync.reload);
    gulp.watch('app/**/*.xml',  browserSync.reload);
});

gulp.task('browser_Sync',function()
{
browserSync.init(
    {
        server:{baseDir:'app'}
    });
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['watch'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("*.js", ['watch']);
});