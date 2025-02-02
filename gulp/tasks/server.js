export const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: app.paths.build,
    },
    notify: false,
    port: process.env.PORT,
  });
};
