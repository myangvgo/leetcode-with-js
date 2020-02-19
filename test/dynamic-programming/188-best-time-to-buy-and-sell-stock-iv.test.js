import { expect } from 'chai';
import { maxProfitIV, maxProfitIV2 } from '../../src';

const fs = require('fs');
const path = require('path');
const util = require('util');
const readAsync = util.promisify(fs.readFile);

describe('Test LeetCode NO.188 - Best Time To Buy And Sell Stock IV', function() {
    // increase timeouts for time-consuming async tasks
    this.timeout(5000); // default is 2000
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxProfitIV, maxProfitIV2];
    let externalTestCases = '';

    async function loadExternalTestCases() {
        let filename = __filename
            .split('/')
            .slice(-1)
            .pop()
            .replace('test.js', 'testcases.json');
        let dirname = __dirname
            .split('/')
            .slice(-1)
            .pop();
        let filepath = path.join('test', dirname, 'test-cases', filename);
        externalTestCases = await readAsync(filepath);
    }

    // arrange
    beforeEach(async () => {
        input = [{ k: 2, prices: [3, 3, 5, 0, 0, 3, 1, 4] }];
        expectedOutput = [6];
        await loadExternalTestCases();
        let testcase = JSON.parse(externalTestCases.toString());
        input.push({ k: testcase.k, prices: testcase.prices });
        expectedOutput.push(testcase.output);
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(item => actual.push(fn(item.k, item.prices)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
