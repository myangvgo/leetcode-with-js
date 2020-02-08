import { expect } from 'chai';
import {
    hammingWeight,
    hammingWeight1,
    hammingWeight2,
    hammingWeight3
} from '../../src';

describe('Test the number of 1 bit', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [
        hammingWeight,
        hammingWeight1,
        hammingWeight2,
        hammingWeight3
    ];

    beforeEach(() => {
        // arrange
        // 二进制数 0b开头，八进制数 0O开头，十六进制数 0x开头
        input = [
            0b00000000000000000000000000001011,
            0b00000000000000000000000010000000,
            0b11111111111111111111111111111101
        ];
        expectedOutput = [3, 1, 31];
        actual = [];
    });

    testMethods.forEach(f => {
        it(`Given an unsigned integer, Use method ${f.name} should calculate the correct result`, () => {
            // act
            input.forEach(n => actual.push(f(n)));
            // assert
            expect(actual).to.deep.have.members(expectedOutput);
        });
    });
});
