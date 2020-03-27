import { expect } from 'chai';
import { hasGroupsSizeX } from '../../src';

describe('Test LeetCode NO.914 - X Of A Kind In A Deck Of Cards (卡牌分组)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [hasGroupsSizeX];

    // arrange
    beforeEach(() => {
        input = [
            [1, 2, 3, 4, 4, 3, 2, 1],
            [1, 1, 1, 2, 2, 2, 3, 3],
            [1],
            [1, 1],
            [1, 1, 2, 2, 2, 2]
        ];
        expectedOutput = [true, false, false, true, true];
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
