/**
 * Created by siruk on 2/9/2017.
 */

// Gulp.js configuration
var
    // modules
    gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    htmlclean = require('gulp-htmlclean'),
    concat = require('gulp-concat'),
    deporder = require('gulp-deporder'),
    stripdebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    assets = require('postcss-assets'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    cssnano = require('cssnano'),

    // development mode?
    devBuild = (process.env.NODE_ENV !== 'production'),

    // folders
    folder = {
        src: 'src/',
        build: 'build/'
    };

// image processing
    gulp.task('images', function () {
        var out = folder.build + 'images/';
        return gulp.src(folder.src + 'images/**/*')
            .pipe(newer(out))
            .pipe(imagemin({ optimizationLevel: 5}))
            .pipe(gulp.dest(out));
    });

// HMTL processing
    gulp.task('html', ['images'], function () {
        var
            out = folder.build + 'html/',
            page = gulp.src(folder.src + 'html/**/*')
                .pipe(newer(out));
        if (!devBuild) {
            page = page.pipe(htmlclean());
        }

        return page.pipe(gulp.dest(out));
    });

// JavaScript processing
gulp.task('js', function () {

    var jsbuild = gulp.src(folder.src + 'js/**/*')
        .pipe(deporder());

    if (!devBuild) {
        jsbuild = jsbuild
            .pipe(stripdebug())
            .pipe(uglify());
    }

    return jsbuild.pipe(gulp.dest(folder.build + 'js'));
});

// CSS processing
gulp.task('css', ['images'], function () {

    var postCssOpts = [
        assets({ loadPaths: ['images/'] }),
        autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
        mqpacker
    ];

    if (!devBuild) {
        postCssOpts.push(cssnano);
    }

    return gulp.src(folder.src + 'css/main.scss')
        .pipe(sass({
            outputStyle: 'nested',
            imagePath: 'images/',
            precision: 3,
            errLogToConsole: true
        }))
        .pipe(postcss(postCssOpts))
        .pipe(gulp.dest(folder.build + 'css/'));

});

gulp.task('run', ['html', 'css', 'js']);

gulp.task('watch', function () {

    // image changes
    gulp.watch(folder.src + 'images/**/*', ['images']);

    // html changes
    gulp.watch(folder.src + 'html/**/*', ['html']);

    // javascript changes
    gulp.watch(folder.src + 'js/**/*', ['js']);

    // css changes
    gulp.watch(folder.src + 'css/**/*', ['css']);

});

gulp.task('default', ['run', 'watch']);