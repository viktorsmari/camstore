var gulp = require('gulp'),
    livereload = require('gulp-livereload');


gulp.task('default', function(){
  livereload.listen();
  gulp.watch('index.html').on('change', livereload.changed);
  gulp.watch('js/app.js').on('change', livereload.changed);

});
