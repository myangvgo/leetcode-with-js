import { expect } from 'chai';
import {
    longestCommonSubsequence,
    longestCommonSubsequence2,
    longestCommonSubsequence3
} from '../../src';

describe('Test longest common subsequence', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [
        longestCommonSubsequence,
        longestCommonSubsequence2,
        longestCommonSubsequence3
    ];

    // arrange
    beforeEach(() => {
        input = [
            { text1: 'abcde', text2: 'ace' },
            { text1: 'abc', text2: 'abc' },
            { text1: 'abc', text2: 'def' },
            { text1: '', text2: '' },
            { text1: 'bsbininm', text2: 'jmjkbkjkv' }
        ];
        expectedOutput = [3, 3, 0, 0, 1];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(item => actual.push(fn(item.text1, item.text2)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
