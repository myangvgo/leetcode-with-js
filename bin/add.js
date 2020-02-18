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
let [number, ...desc] = program.filename.split('-');
const testTemplate = `import { expect } from 'chai';
import {  } from '../../src';

describe('Test LeetCode NO. ${number - desc.join(' ')}', () => {
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

// 创建 doc/solution 文件
const docTemplate = `# ${number.replace(/^0/, '')}. [题目名称] (${desc.join(' ')})

## 题目描述

<https://leetcode-cn.com/problems/${desc.join('-')}/>

## 题目解析

### 解法一

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
