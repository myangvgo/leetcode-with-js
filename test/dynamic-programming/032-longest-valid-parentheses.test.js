import { expect } from 'chai';
import { longestValidParentheses } from '../../src';

describe('Test LeetCode NO.32 - Longest Valid Parentheses', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [longestValidParentheses];

    // arrange
    beforeEach(() => {
        input = ['(()', ')()())', '()()())', '()(())'];
        expectedOutput = [2, 4, 6, 6];
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
