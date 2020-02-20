import { expect } from 'chai';
import { maximalSquare, maximalSquare2 } from '../../src';

describe('Test LeetCode NO.221 - Maximal Square', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maximalSquare, maximalSquare2];

    // arrange
    beforeEach(() => {
        input = [
            [
                ['1', '0', '1', '0', '0'],
                ['1', '0', '1', '1', '1'],
                ['1', '1', '1', '1', '1'],
                ['1', '0', '0', '1', '0']
            ],
            [
                ['1', '1'],
                ['1', '1']
            ],
            [['1'], ['1']],
            [['1']],
            [['0']],
            [['0'], ['0']],
            [],
            [[]],
            [
                ['0', '0', '0', '1'],
                ['1', '1', '0', '1'],
                ['1', '1', '1', '1'],
                ['0', '1', '1', '1'],
                ['0', '1', '1', '1']
            ]
        ];
        expectedOutput = [4, 4, 1, 1, 0, 0, 0, 0, 9];
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
