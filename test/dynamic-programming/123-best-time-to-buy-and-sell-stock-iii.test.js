import { expect } from 'chai';
import { maxProfitIII, maxProfitIII2 } from '../../src';

describe('Test LeetCode NO.123 - Best Time To Buy And Sell Stock III', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxProfitIII, maxProfitIII2];

    // arrange
    beforeEach(() => {
        input = [
            [3, 3, 5, 0, 0, 3, 1, 4],
            [1, 2, 3, 4, 5],
            [7, 6, 4, 3, 1]
        ];
        expectedOutput = [6, 4, 0];
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
