import { expect } from 'chai';
import { uniquePathsWithObstacles, uniquePathsWithObstacles2 } from '../../src';

describe('Test Unique Paths with obstacles', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [uniquePathsWithObstacles, uniquePathsWithObstacles2];

    // arrange
    beforeEach(() => {
        // o <= m, n <= 100
        input = [
            [
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 1],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [1, 0, 1],
                [0, 0, 0]
            ],
            [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]
            ],
            [[1, 0]],
            [[0], [1]],
            [
                [0, 1, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ],
            [
                [0, 1, 0],
                [1, 0, 0],
                [0, 0, 0]
            ]
        ];
        expectedOutput = [2, 3, 1, 0, 0, 0, 0, 0];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate correct results`, () => {
            // act
            input.forEach(grid => actual.push(fn(grid)));
            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
