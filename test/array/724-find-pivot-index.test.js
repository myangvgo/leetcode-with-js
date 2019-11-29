import { expect } from 'chai';
import { pivotIndex } from '../../src';

describe('Find Pivot Index', () => {
    it('Return the pivot index if there is one', () => {
        // arrange
        const nums = [1, 7, 3, 6, 5, 6];
        const expectPivotIndex = 3; // a[3] 6

        // act
        const actualIndex = pivotIndex(nums);

        // assert
        expect(actualIndex).equal(expectPivotIndex);
        expect(actualIndex).not.equal(-1);
    });
    it('Return the -1 if there is no pivot index', () => {
        // arrange
        const nums = [1, 2, 3];

        // act
        const actualIndex = pivotIndex(nums);

        // assert
        expect(actualIndex).equal(-1);
    });
    it('Return -1 if the array is empty', () => {
        // arrange
        const nums = [];

        // act
        const actualIndex = pivotIndex(nums);

        // assert
        expect(actualIndex).equal(-1);
    });
});
