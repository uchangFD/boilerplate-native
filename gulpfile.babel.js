import modules from './gulp/modules';
import { compileJs, compileScss } from './gulp/helper';
import settings from './gulp.settings';

const gulp = modules.gulp;

const JS_OPTIONS = settings.js;
const SCSS_OPTIONS = settings.scss;

const js_public_opts = JS_OPTIONS.public;
const js_paths = JS_OPTIONS.paths;
const js_watch_path = JS_OPTIONS.watch.path;

const scss_public_opts = SCSS_OPTIONS.public;
const scss_paths = SCSS_OPTIONS.paths;
const scss_watch_path = SCSS_OPTIONS.watch.path;

gulp.task('compileJs', compileJs.bind(null, js_paths, js_public_opts));
gulp.task('compileScss', compileScss.bind(null, scss_paths, scss_public_opts));

gulp.task('watch', _ => {
  gulp.watch(js_watch_path, ['compileJs']);
  gulp.watch(scss_watch_path, ['compileScss']);
})