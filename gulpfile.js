const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
// Подключаем модули gulp-sass
const sass = require('gulp-sass');
// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
// Подключаем модуль gulp-newer
const newer = require('gulp-newer');
// Подключаем модуль del
const del = require('del');
// Подключаем gulp-concat к gulpfiles.js
// const concat = require('gulp-concat');
// Подключаем gulp-uglify-es
const uglify = require('gulp-uglify-es').default;

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'app/js/script.js',
    ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream())
    }
    exports.scripts = scripts;

function browsersync() {
        browserSync.init({ 
            server: { baseDir: 'app/' }, 
            notify: false, 
            online: true 
        })
    }
    function startWatch(){
        watch('app/**/*.scss', styles);
        watch('app/**/*.html').on('change', browserSync.reload);
        watch('app/images/src/**/*', images);
        watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    }


function styles() {
    return src('app/' + 'scss' + '/style.' + 'scss' + '') 
    .pipe(sass()) 
    .pipe(concat('style.min.css')) 
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) 
    .pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) 
    .pipe(dest('app/css/')) 
    .pipe(browserSync.stream()) 
}
function images() {
    return src('app/images/src/**/*')
    .pipe(newer('app/images/dest/'))
    .pipe(imagemin())
    .pipe(dest('app/images/dest/'))
}
function cleanimg() {
    return del('app/images/dest/**/*', { force: true })
}
function cleandist() {
    return del('dist/**/*', { force: true })
}
    
function buildcopy(){
    return src([
        'app/images/dest/**/*',
        'app/css/*.min.css',
        'app/js/*.min.js',
        'app/**/*.html',
    ], { base: 'app' })
    .pipe(dest('dist'))
}
    
    // exports.cleanimg = cleanimg;
    exports.images = images;
	exports.styles = styles;
    exports.browsersync = browsersync;
    exports.scripts = scripts;
    // exports.cleandist = cleandist;

    exports.build = series(cleandist, cleanimg, styles, scripts, images, buildcopy);
    exports.default = parallel(browsersync, startWatch);