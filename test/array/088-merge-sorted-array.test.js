import { expect } from 'chai';
import { merge } from '../../src';

describe('Test merge sorted array', () => {
    it('given two array, the first array should contain the merged results', () => {
        // arrange
        const nums1 = [1, 2, 3, 5, 0, 0, 0],
            m = 4,
            nums2 = [2, 5, 6],
            n = 3;
        const expectedOutput = [1, 2, 2, 3, 5, 5, 6];

        // act
        merge(nums1, m, nums2, n);

        // assert
        expect(nums1).deep.equal(expectedOutput);
    });
});
