import { expect } from 'chai';
import { removeDuplicatesII } from '../../src';

describe('Remove duplicates from sorted array II', () => {
    it('After remove duplicates, duplicates will only appear at least twice', () => {
        // arrange
        const nums = [1, 1, 1, 2, 2, 3],
            expectedArr = [1, 1, 2, 2, 3];

        // act
        const size = removeDuplicatesII(nums);

        // assert
        expect(size).equal(expectedArr.length);
    });

    it('If array does not have duplicates appearing more than twice, after remove duplicates, array will not be modified', () => {
        // arrange
        const nums = [5, 4, 1, 2, 2, 3],
            expectedArr = [5, 4, 1, 2, 2, 3];

        // act
        const size = removeDuplicatesII(nums);

        // assert
        expect(size).equal(expectedArr.length);
        expect(nums).to.deep.equal(expectedArr);
    });
});
