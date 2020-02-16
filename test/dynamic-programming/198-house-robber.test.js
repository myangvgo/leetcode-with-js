import { expect } from 'chai';
import { rob, rob2, rob3 } from '../../src';

describe('Test house robber', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [rob, rob2, rob3];

    // arrange
    beforeEach(() => {
        input = [[1, 2, 3, 1], [2, 7, 9, 3, 1], [0], [1, 2], []];
        expectedOutput = [4, 12, 0, 2, 0];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate correct results`, () => {
            // act
            input.forEach(nums => actual.push(fn(nums)));
            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
