#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const createFile = require('../lib/filemgr');

program
    .requiredOption('-f, --filename <filename>', '请输入leetCode题号和题目')
    .requiredOption('-c, --category <category>', '请输入本题对应的分类')
    .option('-t, --chineseDesc <chineseDesc>', '请输入题目的中文名称（可选）');

program.parse(process.argv);

let rootDir = path.resolve(__dirname, '..');
let category = program.category.toLowerCase();
let suffix = '';
if (category == 'cracking-the-coding-interview') {
    suffix = 'lcci';
} else if (category == 'jian-zhi-offer') {
    suffix = 'lcof';
}

// process title and number
// 10_01 | 10_II | 10
let [number, ...desc] = program.filename.toLowerCase().split('-');
const capWords = desc
    .filter(w => w !== 'lcof' && w !== 'lcci')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)); // 首字母大写
let len = capWords.length;
if (
    capWords[len - 1] &&
    // Upper Case Roman Numerals
    [
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
        'X',
        'XI',
        'XII'
    ].includes(capWords[len - 1].toUpperCase())
)
    capWords[len - 1] = capWords[len - 1].toUpperCase();
const title = capWords.join(' ');
number = number.replace(/^0/, ''); // trim leading 0

// 1. 创建 src 文件
let problemDesc = `LeetCode NO.${number} - ${title}`;
if (category == 'cracking-the-coding-interview') {
    problemDesc = `「Cracking the Coding Interview」 NO.${number} - ${title}`;
} else if (category == 'jian-zhi-offer') {
    problemDesc = `「Jian Zhi Offer」 NO.${number} - ${title}`;
}
if(program.chineseDesc) problemDesc += ` (${program.chineseDesc})`;

const srcTemplate = `// ${problemDesc}

export {  }`;
createFile(
    path.join(rootDir, 'src', program.category, `${program.filename}.js`),
    srcTemplate
);

// 2. 创建 test 文件


const testTemplate = `import { expect } from 'chai';
import {  } from '../../src';

describe('Test ${problemDesc}', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [];

    // arrange
    beforeEach(() => {
        input = [];
        expectedOutput = [];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(\`Use method \${fn.name} should calculate the correct result\`, () => {
            // act
            input.forEach(item => actual.push(fn(item)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
`;
createFile(
    path.join(rootDir, 'test', program.category, `${program.filename}.test.js`),
    testTemplate
);

// 3. 创建 doc/solution 文件
let genre = '「LeetCode」';
if (category == 'cracking-the-coding-interview') {
    genre = '「程序员面试金典」';
} else if (category == 'jian-zhi-offer') {
    genre = '「剑指 offer」'
}

const docTemplate = `# ${genre} ${number}.[${program.chineseDesc || '中文题目名称'}](${title})

## 题目描述

<https://leetcode-cn.com/problems/${desc.join('-')}/>

## 题目解析

### 解法

\`\`\`js

\`\`\`

时间复杂度：O()
空间复杂度：O()
`;
createFile(
    path.join(
        rootDir,
        'doc/solutions',
        program.category,
        `${program.filename}.md`
    ),
    docTemplate
);
