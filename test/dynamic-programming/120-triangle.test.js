import { expect } from 'chai';
import {
    minimumTotal,
    minimumTotal2,
    minimumTotal3,
    minimumTotal4
} from '../../src';

describe('Test triangle minimum total', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [
        minimumTotal,
        minimumTotal2,
        minimumTotal3,
        minimumTotal4
    ];

    // arrange
    beforeEach(() => {
        input = [
            [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
            [[1], [2, 3]]
        ];
        expectedOutput = [11, 3];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(triangle => actual.push(fn(triangle)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
