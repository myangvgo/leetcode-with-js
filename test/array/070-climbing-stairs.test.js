import { expect } from 'chai';
import { climbStairs, climbStairs2 } from '../../src';

describe('Test Climbing Stairs', () => {
    it('Given an number n, it should calculate the correct result using method climbStairs', () => {
        // arrange
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            expectedOutput = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
            actualOutput = [];

        // act
        input.forEach(n => actualOutput.push(climbStairs(n)));

        // assert
        expect(actualOutput).deep.equal(expectedOutput);
    });

    it('Given an number n, it should calculate the correct result using method climbStairs2', () => {
        // arrange
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            expectedOutput = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
            actualOutput = [];

        // act
        input.forEach(n => actualOutput.push(climbStairs2(n)));

        // assert
        expect(actualOutput).deep.equal(expectedOutput);
    });
});
