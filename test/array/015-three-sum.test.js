import { expect } from 'chai';
import { threeSum } from '../../src';

describe('Test three sum', () => {
    it('Given a array of nums, it should find the correct triples', () => {
        // arrange
        const input = [
            [],
            [0, 0, 0],
            [1, 2, 3, 4],
            [-1, 0, 1, 2, -1, -4],
            [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
        ];
        const expectedOutput = [
            [],
            [[0, 0, 0]],
            [],
            [
                [-1, -1, 2],
                [-1, 0, 1]
            ],
            [
                [-4, -2, 6],
                [-4, 0, 4],
                [-4, 1, 3],
                [-4, 2, 2],
                [-2, -2, 4],
                [-2, 0, 2]
            ]
        ];

        // act
        const actualOutput = [];
        input.forEach(nums => actualOutput.push(threeSum(nums)));

        // assert
        expect(actualOutput).deep.equal(expectedOutput);
    });
});
