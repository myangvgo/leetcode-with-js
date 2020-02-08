import { expect } from 'chai';
import {
    isPowerOfTwo,
    isPowerOfTwo1,
    isPowerOfTwo2,
    isPowerOfTwo3
} from '../../src';

describe('Test power of two', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [
        isPowerOfTwo,
        isPowerOfTwo1,
        isPowerOfTwo2,
        isPowerOfTwo3
    ];

    beforeEach(() => {
        // arrange
        input = [1, 2, 3, 4, 255, 0];
        expectedOutput = [true, true, false, true, false, false];
        actual = [];
    });

    testMethods.forEach(f => {
        it(`Given an integer, Use method ${f.name} should test whether the number is power of two`, () => {
            // act
            input.forEach(n => actual.push(f(n)));
            // assert
            expect(actual).to.deep.have.members(expectedOutput);
        });
    });
});
