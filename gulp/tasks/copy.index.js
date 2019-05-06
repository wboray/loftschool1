'use strict';

module.exports = function() {
  $.gulp.task('copy:index', function() {
    return $.gulp.src('./source/index.html')
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream());
  })
};
