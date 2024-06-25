var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageResize = require('gulp-image-resize');

uglify().on('error', console.error)

var img_size = parseInt(process.env.IMG_SIZE || '220', 10)

var all_img_size = [1200, 900, 720, 670, 440, 320, 220]

// Compiles SCSS files from /scss into /css
gulp.task('sass', function () {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        /*.pipe(header(banner, {
          pkg: pkg
        }))*/
        .pipe(gulp.dest('dist/css'))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function () {
    return gulp.src('dist/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('static/css'))
});

// Minify custom JS
gulp.task('minify-js', function () {
    return gulp.src('assets/js/*.js')
        .pipe(uglify())
        /*.pipe(header(banner, {
          pkg: pkg
        }))*/
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('static/js'))
});

gulp.task('imagemin', function () {
    return gulp.src('assets/img/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('static-imagemin', function () {
    return gulp.src('static/img/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('static/img-min'));
});

gulp.task('imagemin-crops', function () {
    return gulp.src('assets/img/crops/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('img-resize', function () {
    gulp.src('assets/img/to-crop/**/*.*')
        .pipe(imageResize({
            width: img_size,
            //height : img_size,
            //crop : true,
            upscale: true,
            imageMagick: true,
            //format:'png',
            noProfile: true
        }))
        .pipe(rename(function (path) { path.basename += "-" + img_size; }))
        .pipe(gulp.dest(`assets/img/crops`));
});

gulp.task('img-resize-all', function () {
    all_img_size.forEach(size =>
        gulp.src('assets/img/to-crop/**/*.*')
            .pipe(imageResize({
                width: size,
                upscale: true,
                imageMagick: true,
                noProfile: true
            }))
            .pipe(rename(function (path) { path.basename += "-" + size; }))
            .pipe(gulp.dest(`assets/img/crops`))
    );
});

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy', function () {
    // gulp.src([
    //         'node_modules/bootstrap/dist/**/*',
    //         '!**/npm.js',
    //         '!**/bootstrap-theme.*',
    //         '!**/*.map'
    //     ])
    //     .pipe(gulp.dest('static/vendor/bootstrap'))

    // gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    //     .pipe(gulp.dest('vendor/jquery'))

    // gulp.src(['node_modules/popper.js/dist/umd/popper.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    //     .pipe(gulp.dest('static/vendor/popper'))

    // gulp.src(['node_modules/jquery.easing/*.js'])
    //     .pipe(gulp.dest('static/vendor/jquery-easing'))

    gulp.src(['static/**/*'])
        .pipe(gulp.dest('public'))

    gulp.src([
        'node_modules/font-awesome/**',
        '!node_modules/font-awesome/**/*.map',
        '!node_modules/font-awesome/.npmignore',
        '!node_modules/font-awesome/*.txt',
        '!node_modules/font-awesome/*.md',
        '!node_modules/font-awesome/*.json'
    ])
        .pipe(gulp.dest('static/vendor/font-awesome'))
})

// Default task
//gulp.task('default', ['sass', 'minify-css', 'minify-js', 'copy']);
gulp.task('default', ['sass', 'minify-css', 'copy']);