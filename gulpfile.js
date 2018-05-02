global.$ = {
  path: {
    task: require('./gulp/paths/paths')
  },
  gulp: require('gulp'),
  gp: require('gulp-load-plugins') (),
  del: require('del'),
  fs: require("fs"),
  browserSync: require('browser-sync').create(),
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV == 'development'
};

$.path.task.forEach(taskPath => {
  require(taskPath)();
});