import { expect } from 'chai';
import { removeDuplicates } from '../../src';

describe('Remove duplicates from sorted array', () => {
    it('After remove duplicates, the elements will be unique in the array', () => {
        // arrange
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
            uniqueArr = [0, 1, 2, 3, 4];

        // act
        const size = removeDuplicates(nums);

        // assert
        expect(size).equal(uniqueArr.length);
        expect(nums).to.deep.equal(uniqueArr);
    });

    it('For array without duplicates, it shoule remain unmodified', () => {
        // arrange
        const nums = [3, 7, 2, 5],
            expectArr = [3, 7, 2, 5];

        // act
        const size = removeDuplicates(nums);

        // assert
        expect(size).equal(nums.length);
        expect(nums).to.deep.equal(expectArr);
    });
});
