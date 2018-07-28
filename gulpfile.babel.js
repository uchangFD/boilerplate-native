import modules from './gulp-settings/modules';
import { compileJs } from './gulp-settings/helper';
import settings from './gulp-settings/settings';


const gulp = modules.gulp;
const paths = settings.paths;

gulp.task('compileJs', compileJs.bind(null, paths));

gulp.task('watch', _ => {
  gulp.watch('./src/js/**/*.js', ['compileJs']);
})