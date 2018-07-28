import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import browserify from 'browserify';
import babel from 'babelify';
import source from 'vinyl-source-stream';
import eventStream from 'event-stream';

export default {
  gulp,
  source,
  babel,
  browserify,
  sass,
  rename,
  eventStream
};