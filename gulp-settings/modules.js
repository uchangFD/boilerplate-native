import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babel from 'babelify';
import browserify from 'browserify';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import eventStream from 'event-stream';

export default {
  gulp,
  source,
  buffer,
  babel,
  browserify,
  sass,
  rename,
  eventStream
};