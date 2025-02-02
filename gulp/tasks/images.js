export const images = () => {
  return app.gulp
    .src(`${app.paths.src}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`)
    .pipe(app.gulp.dest(`${app.paths.build}/assets/img`))
    .pipe(app.plugins.browserSync.stream());
};
