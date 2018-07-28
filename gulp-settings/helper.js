import modules from './modules'; 

const gulp = modules.gulp;
const browserify = modules.browserify;
const rename = modules.rename;
const babel = modules.babel;
const source = modules.source;
const buffer = modules.buffer;
const eventStream = modules.eventStream;

// custom일 때는 여러개의 path 정보가 있을 텐데 browserify는 어떻게 처리함?
// entries가 있음.
// 그냥 구분하지말고 한번에 배열로 처리해버릴까?

// browserify도 옵션을 따로 빼주는게 필요할까?
// 나중에 gulp 설정 다하고 ㄲ

/**
 * Todo
 * 
 * 1. browserify를 이용한 ES6 javascript file 번들링 하기
 *  - event-stream
 *  - gulp-rename
 *  - 위 두가지를 이용해서 개별적인 파일 또는 public한 파일과 custom한 bundle filename 을 가질 수 있도록 설정.
 * 
 * 2. sass bundling ..
 */

/**
 *  
 *  compileJs 
 *  1. settings에서 public or custom jsInfo를 받음.
 *  2. 받은 jsInfo를 배열의 map함수를 통해서 필요한 파일로 변환 후 반환한다.
 *    - browserify
 *    - rename
 *      - 기존 파일의 이름뒤에 덧붙일 이름 추가.
 *  3. 받은 node stream들을 머지시켜 주기 위해 eventStream함수를 사용.
 *  
 */
export const compileJs = (paths) => {

  var tasks = paths.map(path => {

    var srcPath = path.src;
    var distPath = path.dist;
    var filename = path.filename;
    var extname = path.extname;

    return browserify({ entries: [srcPath], debug: true })
           .transform(babel, { presets: ['es2015'] })
           .bundle()
           .pipe(source(filename))
           .pipe(rename({ extname }))
           .pipe(gulp.dest(distPath));
  });
  
  return eventStream.merge.apply(null, tasks);
};
 /**
 * build scss
 */ 
 