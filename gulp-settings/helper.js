import modules from './modules'; 

const gulp = modules.gulp;
const browserify = modules.browserify;
const rename = modules.rename;
const babel = modules.babel;
const source = modules.source;
const eventStream = modules.eventStream;
const sass = modules.sass;

export const compileJs = (paths, publicOpts) => {

  const tasks = paths.map(path => {

    const srcPath = path.src || publicOpts.src;
    const distPath = path.dist || publicOpts.dist;
    const filename = path.filename || publicOpts.filename;
    const extname = path.extname || publicOpts.extname;

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
 * 
 * 1. 설치 
 *  - node-sass 필요
 *  - gulp-sass
 *  - 
 */ 
 
export const compileScss = (paths, publicOpts) => {

  const tasks = paths.map(path => {

    const src = path.src || publicOpts.src;
    const dist = path.dist || publicOpts.dist;
    const opts = path.options && JSON.stringify(path.options) !== '{}' ? path.options : publicOpts.options

    return gulp.src(src)
               .pipe(sass(opts).on('error', sass.logError))
               .pipe(gulp.dest(dist));
  });

  return eventStream.merge.apply(null, tasks);
}