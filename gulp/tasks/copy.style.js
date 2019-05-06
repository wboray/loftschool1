'use strict';

module.exports = function() {
  $.gulp.task('copy:style', function() {
    return $.gulp.src($.path.css, { since: $.gulp.lastRun('copy:style') })
      // .pipe($.gp.sourcemaps.init()) // Инициализировать карту соответствий.
      .pipe($.gp.concatCss('bundle.css'))
      .pipe($.gp.groupCssMediaQueries())
      .pipe($.gp.stripCssComments())
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.cssbeautify($.config.cssBeautifyConfig))
      // .pipe($.gp.sourcemaps.write()) // Записать карту
      // .pipe($.gp.csso()) // Минифицировать? но тогда надо закомментировать .pipe($.gp.cssbeautify($.config.cssBeautifyConfig))
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.browserSync.stream());
  });
};
