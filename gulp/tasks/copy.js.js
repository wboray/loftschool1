'use strict';

module.exports = function() {
  $.gulp.task('copy:js', function() {
    var jsPath = [];
    jsPath = jsPath.concat($.path.jsFoundation, $.path.app);
    return $.gulp.src(jsPath)
      .pipe($.gp.concat('bundle.js'))
      .pipe($.gulp.dest($.config.root + '/js'))
      .pipe($.browserSync.stream());
    })
};
