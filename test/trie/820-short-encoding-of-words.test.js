import { expect } from 'chai';
import { minimumLengthEncoding, minimumLengthEncoding2 } from '../../src';

describe('Test LeetCode NO.820 - Short Encoding Of Words (单词的压缩编码)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [minimumLengthEncoding, minimumLengthEncoding2];

    // arrange
    beforeEach(() => {
        input = [
            ['time', 'me', 'bell'],
            ['dell', 'el', 'de'],
            ['tea', 'eat', 'pot']
        ];
        expectedOutput = [10, 11, 12];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(item => actual.push(fn(item)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
