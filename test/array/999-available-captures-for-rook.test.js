import { expect } from 'chai';
import { numRookCaptures, numRookCaptures2 } from '../../src';

describe('Test LeetCode NO.999 - Available Captures For Rook (车的可用捕获量)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [numRookCaptures, numRookCaptures2];

    // arrange
    beforeEach(() => {
        input = [
            [
                ['.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', 'p', '.', '.', '.', '.'],
                ['.', '.', '.', 'R', '.', '.', '.', 'p'],
                ['.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', 'p', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.']
            ],
            [
                ['.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
                ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
                ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
                ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
                ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.']
            ],
            [
                ['.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', 'p', '.', '.', '.', '.'],
                ['.', '.', '.', 'p', '.', '.', '.', '.'],
                ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', 'B', '.', '.', '.', '.'],
                ['.', '.', '.', 'p', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.']
            ]
        ];
        expectedOutput = [3, 0, 3];
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
