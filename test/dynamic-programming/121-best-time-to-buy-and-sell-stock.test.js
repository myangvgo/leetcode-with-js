import { expect } from 'chai';
import { maxProfit, maxProfit2 } from '../../src';

describe('Test LeetCode NO.121 - Best Time To Buy And Sell Stock', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxProfit, maxProfit2];

    // arrange
    beforeEach(() => {
        input = [[7, 1, 5, 3, 6, 4], [8], [1, 2], [7, 6, 4, 3, 1]];
        expectedOutput = [5, 0, 1, 0];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(prices => actual.push(fn(prices)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
