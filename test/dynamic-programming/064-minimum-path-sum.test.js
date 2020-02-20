import { expect } from 'chai';
import { minPathSum, minPathSum2 } from '../../src';

describe('Test LeetCode NO.64 - Minimum Path Sum', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [minPathSum, minPathSum2];

    // arrange
    beforeEach(() => {
        input = [
            [
                [1, 3, 1],
                [1, 5, 1],
                [4, 2, 1]
            ],
            [
                [1, 3, 1, 2],
                [1, 5, 1, 4],
                [4, 2, 1, 8]
            ],
            [
                [1, 3, 1],
                [1, 5, 1],
                [4, 2, 1],
                [7, 8, 9]
            ],
            [[2, 3, 1]],
            [[2], [1], [3]],
            [[2]]
        ];
        expectedOutput = [7, 15, 16, 6, 6, 2];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(grid => actual.push(fn(grid)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
