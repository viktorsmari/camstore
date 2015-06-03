var gulp = require('gulp'),
    livereload = require('gulp-livereload');


gulp.task('default', function(){
  livereload.listen();
  gulp.watch('index.html').on('change', livereload.changed);

});


gulp.task('serve', function(event) {
    connect.server({
        root: destinations.docs,
        port: 1987,
        livereload: true
    });
    // sets up a livereload that watches for any changes in the root
    watch({glob: [index.html, sources.styles]})
        .pipe(connect.reload());
});
