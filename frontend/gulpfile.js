const {task, src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');

task('sass', async () => {
    src(['./src/Styles/SCSS/*.scss', './src/Components/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix('last 4 versions'))
    .pipe(dest('./src/Styles/css'))
})

task('watch', async () => {
    watch(
            [
                './src/Styles/SCSS/*.scss', 
                './src/Components/**/*.scss',
                'src/Components/**/*.js', 
                'src/App.js'
            ],
            series('sass')
        )
})