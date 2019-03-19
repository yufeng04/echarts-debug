const gulp = require('gulp');

// todo 命令行指定参数--需要打开的html. bs该如何配置呢? 

// const fs = require('fs');

// let params = process.argv.slice(2)
// let index = 'graph-debug';
// let htmlPath = `${__dirname}/echarts-debug/${index}.html`;
// 静态服务器
let browserSync = require('browser-sync').create();

// if (params[0] && params[0] === '--html') {
//     index = params[1];
//     htmlPath = `${__dirname}/echarts-debug/${index}.html`;
// } else {
//     console.log(`未指定html文件, 默认打开${index}.html`);
// }

// if (!isExist(htmlPath)) {
//     console.log(`${htmlPath} is not exist!`);
//     return;
// }

gulp.task('browser-sync', function () {
    browserSync.init({
        files: '.',
        server: {
            baseDir: '.'
        },
        port: 3001
    });
});

// function isExist(path) {
//     return fs.existsSync(path);
// }

gulp.task('default', gulp.parallel('browser-sync'));