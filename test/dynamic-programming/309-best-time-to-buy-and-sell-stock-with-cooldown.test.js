import { expect } from 'chai';
import { maxProfitV, maxProfitV2 } from '../../src';

describe('Test LeetCode NO.309 - Best Time To Buy And Sell Stock With Cooldown', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxProfitV, maxProfitV2];

    // arrange
    beforeEach(() => {
        input = [[1, 2, 3, 0, 2], [7, 5, 4, 3], [1, 2, 4], [2], []];
        expectedOutput = [3, 0, 3, 0, 0];
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
