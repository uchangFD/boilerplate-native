import { gulp, babel, browserify } from './modules'; 
import settings from './settings';

const gulp = modules.gulp;
const browserify = modules.browserify;
const babel = modules.babel;


/**
 * build js
 */ 

const public = settings.public;
const custom = settings.custom;

const srcPaths = custom.length === 0 ? [public.src] : custom.map(pathInfo => pathInfo.src);

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

const bundler = browserify({
  entries: srcPaths,
  debug: true
}).transform(babel, { presets: ['es2015'] });

export const compileJs = () => {
  return bundler.bundle()
                
}

 /**
 * build scss
 */ 
 