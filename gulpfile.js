'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    css: require('./gulp/paths/css.js'),
  },
  gulp: require('gulp'),
  del: require('del'),
  mrg: require('merge-stream'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'copy:index',
    'copy:fonts',
    'copy:style',
    'copy:img'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
