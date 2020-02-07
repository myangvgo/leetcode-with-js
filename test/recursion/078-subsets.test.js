import { expect } from 'chai';
import { subsets, subsets1 } from '../../src';

describe('Test subsets', () => {
    let input = [],
        expectedOutput = [],
        actual = [];

    beforeEach(() => {
        // arrange
        input = [1, 2, 3];
        expectedOutput = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
    });

    it('Use subsets method, it should calculate the correct result', () => {
        // act
        const actual = subsets(input);

        // assert
        expect(actual).to.deep.have.members(expectedOutput);
    });

    it('Use subsets1 method, it should calculate the correct result', () => {
        // act
        const actual = subsets1(input);

        // assert
        expect(actual).to.deep.have.members(expectedOutput);
    });
});
