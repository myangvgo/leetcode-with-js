import { expect } from 'chai';
import { surfaceArea } from '../../src';

describe('Test LeetCode NO.892 - Surface Area Of 3d Shapes (三维形体的表面积)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [surfaceArea];

    // arrange
    beforeEach(() => {
        input = [
            [[2]],
            [
                [1, 2],
                [3, 4]
            ],
            [
                [1, 0],
                [0, 2]
            ],
            [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ],
            [
                [2, 2, 2],
                [2, 1, 2],
                [2, 2, 2]
            ]
        ];
        expectedOutput = [10, 34, 16, 32, 46];
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
