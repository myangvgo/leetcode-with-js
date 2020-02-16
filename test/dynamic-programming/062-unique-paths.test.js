import { expect } from 'chai';
import { uniquePaths, uniquePaths2 } from '../../src';

describe('Test Unique Paths', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [uniquePaths, uniquePaths2];

    // arrange
    beforeEach(() => {
        // o <= m, n <= 100
        input = [
            { m: 3, n: 2 },
            { m: 7, n: 3 },
            { m: 1, n: 1 }
        ];
        expectedOutput = [3, 28, 1];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate correct results`, () => {
            // act
            input.forEach(item => actual.push(fn(item.m, item.n)));
            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
