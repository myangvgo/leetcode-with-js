import { expect } from 'chai';
import { maxSubArray, maxSubArray2 } from '../../src';

describe('Test max subarray', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxSubArray, maxSubArray2];

    // arrange
    beforeEach(() => {
        input = [[-2, 1, -3, 4, -1, 2, 1, -5, 4], [1, -2, 0], [3]];
        expectedOutput = [6, 1, 3];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate correct results`, () => {
            // act
            input.forEach(nums => actual.push(fn(nums)));
            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
