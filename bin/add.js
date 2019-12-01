#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const createFile = require('../lib/filemgr');

program
    .requiredOption('-f, --filename <filename>', '请输入leetCode题号和题目')
    .requiredOption('-c, --category <category>', '请输入本题对应的分类');

program.parse(process.argv);
let rootDir = path.resolve(__dirname, '..');

// 创建 src 文件
createFile(
    path.join(rootDir, 'src', program.category, `${program.filename}.js`)
);

// 创建 test 文件
createFile(
    path.join(rootDir, 'test', program.category, `${program.filename}.test.js`)
);

// 创建 doc/solution 文件
createFile(
    path.join(
        rootDir,
        'doc/solutions',
        program.category,
        `${program.filename}.md`
    )
);
