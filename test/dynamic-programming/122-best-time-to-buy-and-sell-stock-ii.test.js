import { expect } from 'chai';
import { maxProfitII, maxProfitII2 } from '../../src';

describe('Test LeetCode NO.122 - Best Time To Buy And Sell Stock II', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxProfitII, maxProfitII2];

    // arrange
    beforeEach(() => {
        input = [[7, 1, 5, 3, 6, 4], [1], [], [1, 2, 3, 4, 5], [7, 6, 4, 3, 1]];
        expectedOutput = [7, 0, 0, 4, 0];
        actual = [];
    });

    testMethods.forEach(fn => {
        it('Use method ${fn.name} should calculate the correct result', () => {
            // act
            input.forEach(item => actual.push(fn(item)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
