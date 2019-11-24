import { expect } from 'chai';
import { sortColors } from '../../src';

describe('Sort Colors', () => {
    it('After sort colors, the elements in the array should be sorted', () => {
        // arrange
        const nums = [2, 0, 2, 1, 1, 0],
            sortedNums = [0, 0, 1, 1, 2, 2];

        // act
        sortColors(nums);

        // assert
        expect(nums).to.deep.equal(sortedNums);
    });
});
