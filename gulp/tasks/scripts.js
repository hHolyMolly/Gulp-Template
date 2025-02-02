export const scripts = () => {
  return app.gulp
    .src(`${app.paths.src}/scripts/**/*.js`)
    .pipe(app.gulp.dest(`${app.paths.build}/scripts`))
    .pipe(app.plugins.browserSync.stream());
};
