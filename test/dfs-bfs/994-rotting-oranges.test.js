import { expect } from 'chai';
import { orangesRotting } from '../../src';

describe('Test LeetCode NO.994 - Rotting Oranges (腐烂的橘子)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [orangesRotting];

    // arrange
    beforeEach(() => {
        input = [
            [
                [2, 1, 1],
                [1, 1, 0],
                [0, 1, 1]
            ],
            [
                [2, 1, 1],
                [0, 1, 1],
                [1, 0, 1]
            ],
            [[0, 2]]
        ];
        expectedOutput = [4, -1, 0];
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
