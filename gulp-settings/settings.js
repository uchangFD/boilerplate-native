import path from 'path';


/**
 * TODO
 * 
 * 1. 컴파일 할 경로 옵션 제공
 * 2. 하나의 파일로 컴파일 할 옵션, 여러 파일로 변환시킬 옵션
 * 3. 둘다 사용해야될 경우도 있으니 없나? 이건 보류
 */ 
export const options = {
  public: {
    src: path.resolve(__dirname, '../src/js/**/*.js'),
    dist: path.resolve(__diname, '../dist/js/'),
    filename: 'bundle.js',
  },
  custom: [
    // {
    //   src: path.resolve(__dirname, '../src/js/**/*.js'),
    //   dist: path.resolve(__diname, '../dist/js/'),
    //   filename: 'bundle.js',
    // }
  ]
};