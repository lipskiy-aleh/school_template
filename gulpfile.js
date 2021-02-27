const {
  series,
  parallel,
  src,
  dest,
  watch,
} = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const gulpClean = require('gulp-clean')
const browserSync = require('browser-sync')
  .create()
const imageminImg = require('gulp-imagemin')

function serve() {
  browserSync.init({
    server: 'build',
    watch: true,
    notify: false,
  })
}

function clean() {
  return src('build', {
    read: false,
    allowEmpty: true,
  })
    .pipe(gulpClean())
}

function copyHTML() {
  return src('tasks/fetch/index.html')
    .pipe(dest('build'))
}

function copyJS() {
  return src('tasks/fetch/js/*.js')
    .pipe(dest('build/js'))
}

function transformSCSS() {
  return src('tasks/fetch/style/**/index.scss')
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('index.css'))
    .pipe(dest('build'))
}

function imagemin() {
  return src('tasks/fetch/img/*')
    .pipe(imageminImg())
    .pipe(dest('build/img'))
}

function watchTasks() {
  watch('tasks/fetch/js/*.js', copyJS)
  watch('tasks/fetch/index.html', copyHTML)
  watch('tasks/fetch/style/**/*.scss', transformSCSS)
}

exports.clean = clean
exports.watch = watchTasks
exports.style = transformSCSS
exports.imagemin = imagemin
exports.default = series(
  clean,
  parallel(copyHTML, copyJS, transformSCSS, imagemin),
  parallel(watchTasks, serve),
)
