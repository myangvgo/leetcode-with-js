import { expect } from 'chai';
import { plusOne } from '../../src';

describe('Plus One', () => {
    it('[1, 2, 3] after plus one will be [1, 2, 4]', () => {
        // arrange
        const digits = [1, 2, 3],
            expectDigits = [1, 2, 4];

        // act
        const result = plusOne(digits);

        // assert
        expect(result).to.deep.equal(expectDigits);
    });
    it('[1, 9] after plus one will be [2, 0]', () => {
        // arrange
        const digits = [1, 9],
            expectDigits = [2, 0];

        // act
        const result = plusOne(digits);

        // assert
        expect(result).to.deep.equal(expectDigits);
    });
    it('[9, 9, 9] after plus one will be [1, 0, 0, 0]', () => {
        // arrange
        const digits = [9, 9, 9],
            expectDigits = [1, 0, 0, 0];

        // act
        const result = plusOne(digits);

        // assert
        expect(result).to.deep.equal(expectDigits);
    });
});
