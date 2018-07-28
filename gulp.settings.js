export default {
  js: {
    public: {
      src: './src/js/index.js',
      dist: './dist/js/',
      filename: 'default.js',
      extname: '.bundle.js'
    },
    paths: [
      {
        src: './src/js/index.js',
        dist: './dist/js/',
        filename: 'public.js',
        extname: '.bundle.js'
      },
      {
        src: './src/js/components/index.js',
        dist: './dist/js/components',
        filename: 'components.js',
        extname: '.bundle.js'
      },
      {
        src: './src/js/utils/index.js',
        dist: './dist/js/utils',
        filename: 'utils.js',
        extname: '.bundle.js'
      },
    ],
    watch: {
      path: './src/js/**/*.js'
    }
  },
  scss: {
    public: {
      src: './src/scss/stylesheets.scss',
      dist: './dist/css/',
      options: {
        sourcemap: true,
        outputStyle: 'compressed'
      }
    },
    paths: [
      {
        src: './src/scss/stylesheets.scss',
        dist: './dist/css/',
        options: {}
      },
      {
        src: './src/scss/components/index.scss',
        dist: './dist/css/components/',
        options: {}
      }
    ],
    watch: {
      path: './src/scss/**/*.scss'
    }
  }
};