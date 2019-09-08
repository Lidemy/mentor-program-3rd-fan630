const gulp = require('gulp')

// scss轉譯成css
const sass = require('gulp-sass')

// css轉譯後壓縮
const cleanCSS = require('gulp-clean-css')

// ES5語法轉換為ES6
const babel = require('gulp-babel')

// 合併檔案
const concat = require('gulp-concat')

// 產生sourcempas檔案,若是有其餘js檔案合併時可以知道是從source的哪一隻寫出的
const sourcemaps = require('gulp-sourcemaps')

// 壓縮js檔案
const uglify = require('gulp-uglify')

sass.compiler = require('node-sass')

gulp.task('scss', function () {
  return gulp.src('./source/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./public/css/'))
})

gulp.task('babel', () =>
  gulp.src('./source/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify({
      compress: {
        drop_console: true
      }
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'))
)
gulp.task('default', gulp.series('scss', 'babel'))
