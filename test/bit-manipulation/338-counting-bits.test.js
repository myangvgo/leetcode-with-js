import { expect } from 'chai';
import { countBits, countBits1, countBits2 } from '../../src';

describe('Test count bits', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [countBits, countBits1, countBits2];

    beforeEach(() => {
        // arrange
        input = [0, 2, 5];
        expectedOutput = [[0], [0, 1, 1], [0, 1, 1, 2, 1, 2]];
        actual = [];
    });

    testMethods.forEach(f => {
        it(`Given an unsigned integer, Use method ${f.name} should calculate the correct result`, () => {
            // act
            input.forEach(n => actual.push(f(n)));
            // assert
            expect(actual).to.deep.have.members(expectedOutput);
        });
    });
});
