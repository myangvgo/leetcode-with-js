const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/**
 * 确保文件路径存在，如果不存在，则依次创建文件目录
 * @param {string} pathname
 */
const ensureDir = pathname => {
    const pathArr = pathname.split('/');
    let currPath = '';
    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i]) {
            currPath += `/${pathArr[i]}`;
            if (!fs.existsSync(currPath)) {
                fs.mkdirSync(currPath);
            }
        }
    }
};

/**
 * 创建文件
 * @param {*} pathname
 * @param {*} content
 */
const createFile = (pathname, content) => {
    const rootPath = path.resolve(__dirname, '..');
    const absPath = path.isAbsolute(pathname)
        ? pathname
        : path.join(rootPath, pathname);
    const dir = absPath.split('/');
    dir.pop();
    ensureDir(dir.join('/'));
    fs.writeFile(absPath, content ? content : '', err => {
        if (err) {
            console.error(err);
        } else {
            console.log(
                `${chalk.green('successfully created file:')} ${chalk.yellow(
                    path.basename(absPath)
                )} at ${path.relative(rootPath, absPath)}`
            );
        }
    });
};

module.exports = createFile;
