'use strict';

module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./source/js/**/*.js', $.gulp.series(['copy:js']));
        $.gulp.watch('./source/css/**/*.css', $.gulp.series(['copy:style']));
        $.gulp.watch('./source/index.html', $.gulp.series('copy:index'));
    });
};
