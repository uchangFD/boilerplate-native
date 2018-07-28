import path from 'path';
/**
 * # path 정보를 명시할 떄는 명시적인 파일 경로와 파일 이름으로 설정을 해야함.
 */ 

export default {
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
  ]
};