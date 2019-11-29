import { expect } from 'chai';
import { dominantIndex, dominantIndexV2 } from '../../src';

// test solution 1 domainIndex
describe('Largest number at least twice of the others - v1', () => {
    it('It should return the index of the dominant index if there is one', () => {
        // arrange
        const nums = [0, 0, 0, 1];

        // act
        const actualIdx = dominantIndex(nums);

        // assert
        expect(actualIdx).equal(3);
    });

    it('It should return -1 if no such element found in the array', () => {
        // arrange
        const nums = [1, 2, 3, 4];

        // act
        const actualIdx = dominantIndex(nums);

        // assert
        expect(actualIdx).equal(-1);
    });
});

// test solution 2 domainIndexV2
describe('Largest number at least twice of the others - v2', () => {
    it('It should return the index of the dominant index if there is one', () => {
        // arrange
        const nums = [0, 0, 0, 1];

        // act
        const actualIdx = dominantIndexV2(nums);

        // assert
        expect(actualIdx).equal(3);
    });

    it('It should return -1 if no such element found in the array', () => {
        // arrange
        const nums = [1, 2, 3, 4];

        // act
        const actualIdx = dominantIndexV2(nums);

        // assert
        expect(actualIdx).equal(-1);
    });
});
