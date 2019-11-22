import { expect, deepEqual } from 'chai';
import { twoSum } from '../../src';

describe('001 Two Sum', () => {
    it('target found in array should return indices array', () => {
        // arrange
        const nums = [2, 7, 11, 15],
            target = 9,
            expected = [0, 1];

        // act
        const actual = twoSum(nums, target);

        // assert
        expect(expected).to.deep.equal(actual);
    });

    it('target not found in array should return empty array', () => {
        // arrange
        const nums = [2, 7, 11, 15],
            target = 1,
            expected = [];

        // act
        const actual = twoSum(nums, target);

        // assert
        expect(expected).to.deep.equal(actual);
    });

    it('target found in array with duplicate elements should return correct result', () => {
        // arrange
        const nums = [3, 7, 3, 11, 15],
            target = 6,
            expected = [0, 2];

        // act
        const actual = twoSum(nums, target);

        // assert
        expect(expected).to.deep.equal(actual);
    });
});
