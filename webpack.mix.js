const mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .webpackConfig({
    output: {
      chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
    },
    resolve: {
      alias: {
        '@': path.resolve('resources/js'),
      },
    },
  });
