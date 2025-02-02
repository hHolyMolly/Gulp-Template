import htmlmin from 'gulp-htmlmin';
import csso from 'gulp-csso';
import terser from 'gulp-terser';

export const minifyHTML = () => {
  return app.gulp
    .src(`${app.paths.build}/**/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(app.gulp.dest(`${app.paths.build}`));
};

export const minifyCSS = () => {
  return app.gulp
    .src(`${app.paths.build}/styles/**/*.css`)
    .pipe(csso())
    .pipe(app.gulp.dest(`${app.paths.build}/styles`));
};

export const minifyJS = () => {
  return app.gulp
    .src(`${app.paths.build}/scripts/**/*.js`)
    .pipe(terser())
    .pipe(app.gulp.dest(`${app.paths.build}/scripts`));
};
