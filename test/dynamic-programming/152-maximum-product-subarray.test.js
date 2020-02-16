import { expect } from 'chai';
import { maxProduct, maxProduct2 } from '../../src';

describe('Test max subarray', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxProduct, maxProduct2];

    // arrange
    beforeEach(() => {
        input = [
            [2, 3, -2, 4],
            [-2, 0, -1]
        ];
        expectedOutput = [6, 0];
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
