import { expect } from 'chai';
import { massage, massage2 } from '../../src';

describe('Test 「Cracking the Coding Interview」 NO.17_16 - The Masseuse (按摩师)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [massage, massage2];

    // arrange
    beforeEach(() => {
        input = [
            [1, 2, 3, 1],
            [2, 7, 9, 3, 1],
            [2, 1, 4, 5, 3, 1, 1, 3],
            [2],
            []
        ];
        expectedOutput = [4, 12, 12, 2, 0];
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
