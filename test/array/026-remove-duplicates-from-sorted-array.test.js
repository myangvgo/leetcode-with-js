import { expect } from 'chai';
import { removeDuplicates, removeDuplicates2 } from '../../src';

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

    // test method 2
    it('For sorted array with duplicates, it will calculate the length of the unique array', () => {
        // arrage
        const input = [
            [],
            [1],
            [1, 1, 2],
            [2, 2, 2],
            [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
            [-4, -3, 0]
        ];
        const expectOutput = [
            [],
            [1],
            [1, 2],
            [2],
            [0, 1, 2, 3, 4],
            [-4, -3, 0]
        ];

        const actualLens = [];

        // act
        input.forEach(nums => {
            actualLens.push(removeDuplicates2(nums));
        });

        // assert
        expectOutput.forEach((actualNums, i) => {
            expect(actualNums.slice(0, actualLens[i])).deep.equal(
                expectOutput[i]
            );
        });
    });
});
