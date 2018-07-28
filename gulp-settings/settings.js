import path from 'path';
/**
 * TODO
 * 
 * 1. 컴파일 할 경로 옵션 제공
 * 2. 하나의 파일로 컴파일 할 옵션, 여러 파일로 변환시킬 옵션
 * 3. 둘다 사용해야될 경우도 있으니 없나? 이건 보류
 * 
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