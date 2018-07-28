# boilerplate-native

## compile to js

1. gulp settings
  - `gulp-settings/settings`
    - gulp 파일 경로 및 기타 설정 파일
  - `gulp-settings/modules`
    - gulp에 필요한 모듈들을 미리 import로 가져와 모듈로 반환시키는 파일
    - 매번 import 할 필요 없이 미리 선언해서 가져와 사용하기 위해 만듦.
  - `gulp-settings/helper`
    - gulp task에 사용될 함수들

2. modules
  - `babel-core`: es5로 변환시켜 주는 작업을 하는 코어
  - `babel-preset-es2015`: es6
  - `babel-register`: gulp에서 babel을 사용하기 위해서 설치
  - `babelify`: browserify에서 babel을 사용하기 위해 설치
  - `browserify`: browserify로 의존성 모듈들 끼리 번들링 하기 위해서 설치
  - `event-stream`: node event stream을 merge 해서 gulp task에서 사용하기 위해 설치
  - `gulp`: gulp 
  - `gulp-cli`: gulp cli 명령어 사용하기 위해서 설치
  - `gulp-rename`: 번들링된 파일 이름을 변경하기 위해서 설치
  - `gulp-sass `: sass 사용
  - `vinyl-source-stream`: browserify로 번들된 파일(vinyl)을 stream으로 변경하기 위해서 설치