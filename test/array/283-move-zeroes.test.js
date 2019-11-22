import { expect } from 'chai';
import { moveZeroes } from '../../src';

describe('283 Move Zeroes', () => {
    it('after move zeroes, zeroes of the original array should be moved to the end', () => {
        // arrange
        const arr = [0, 1, 0, 3, 12],
            expectedArr = [1, 3, 12, 0, 0];

        // act
        moveZeroes(arr);

        // assert
        expect(expectedArr).to.deep.equal(arr);
    });

    it('Input are zeroes, out should not change', () => {
        // arrange
        const arr = [0, 0, 0],
            expectedArr = [0, 0, 0];

        // act
        moveZeroes(arr);

        // assert
        expect(expectedArr).to.deep.equal(arr);
    });
});
