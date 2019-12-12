import { expect } from 'chai';
import { rotate, rotate2 } from '../../src';

describe('Test roate array', () => {
    let input, expectedOutput;

    beforeEach(() => {
        // arrange
        input = [
            { nums: [1, 2, 3, 4, 5, 6, 7], k: 2 },
            { nums: [-1, -100, 3, 99], k: 4 },
            { nums: [], k: 0 },
            { nums: [1, 2, 3], k: 4 }
        ];

        expectedOutput = [
            [6, 7, 1, 2, 3, 4, 5],
            [-1, -100, 3, 99],
            [],
            [3, 1, 2]
        ];
    });

    // rotate test
    it('After rotate the array, it should match the result use method rotate', () => {
        // act
        input.forEach(item => rotate(item.nums, item.k));

        // assert
        input.forEach((item, i) => {
            expect(item.nums).deep.equal(expectedOutput[i]);
        });
    });

    // rotate2 test
    it('After rotate the array, it should match the result use method rotate2', () => {
        // act
        input.forEach(item => rotate2(item.nums, item.k));

        // assert
        input.forEach((item, i) => {
            expect(item.nums).deep.equal(expectedOutput[i]);
        });
    });
});
