import gulp from 'gulp';
import dotenv from 'dotenv';

dotenv.config();

import { paths } from './gulp/config/paths.js';
import { plugins } from './gulp/config/plugins.js';

global.app = { paths, plugins, gulp };

import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { images } from './gulp/tasks/images.js';
import { assets } from './gulp/tasks/assets.js';
import { server } from './gulp/tasks/server.js';
import { minifyHTML, minifyCSS, minifyJS } from './gulp/tasks/minify.js';

const watchTask = () => {
  gulp.watch(`${paths.src}/html/**/*.html`, html);
  gulp.watch(`${paths.src}/styles/**/*.{css,scss}`, styles);
  gulp.watch(`${paths.src}/scripts/**/*.js`, scripts);
  gulp.watch(`${paths.src}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`, images);
  gulp.watch([`${app.paths.src}/assets/**/*`, `!${app.paths.src}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`], assets);
};

const mainTasks = gulp.parallel(html, styles, scripts, images, assets);

const gulp_start = gulp.series(clean, mainTasks, gulp.parallel(watchTask, server));
gulp.task('start', gulp_start);

const gulp_build_dev = gulp.series(clean, mainTasks);
gulp.task('build:dev', gulp_build_dev);

const gulp_build_prod = gulp.series(clean, mainTasks, gulp.parallel(minifyHTML, minifyCSS, minifyJS));
gulp.task('build:prod', gulp_build_prod);
