import { expect } from 'chai';
import { removeElement } from '../../src';

describe('27 Remove Element', () => {
    it('After remove elements, it should return the new size of the array', () => {
        // arrange
        const nums = [3, 2, 2, 3],
            val = 3,
            expectedArr = [2, 2];

        // act
        const newSize = removeElement(nums, val);

        // assert
        expect(nums).to.deep.equal(expectedArr);
        expect(nums.length).equal(newSize);
    });
    it('If original array does not contain val, the array should not be changed', () => {
        // arrange
        const nums = [3, 2, 2, 3],
            val = 1,
            expectedArr = [3, 2, 2, 3];

        // act
        const newSize = removeElement(nums, val);

        // assert
        expect(nums).to.deep.equal(expectedArr);
        expect(nums.length).equal(newSize);
    });
});
