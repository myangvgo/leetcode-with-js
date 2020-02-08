import { expect } from 'chai';
import { reverseBits } from '../../src';

describe('Test reverse bits', () => {
    it('Use reverseBits should calculate correct results', () => {
        // arrange
        let input = [
            0b00000010100101000001111010011100,
            0b11111111111111111111111111111101
        ];
        let expectedOutput = [
            0b00111001011110000010100101000000,
            0b10111111111111111111111111111111
        ];
        let actual = [];

        // act
        input.forEach(n => actual.push(reverseBits(n)));

        // assert
        expect(actual).deep.equal(expectedOutput);
    });
});
