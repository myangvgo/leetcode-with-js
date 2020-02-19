import { expect } from 'chai';
import { maxProfitVI, maxProfitVI2 } from '../../src';

describe('Test LeetCode NO.714 - Best Time To Buy And Sell Stock With Transaction Fee', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxProfitVI, maxProfitVI2];

    // arrange
    beforeEach(() => {
        input = [{ prices: [1, 3, 2, 8, 4, 9], fee: 2 }];
        expectedOutput = [8];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(item => actual.push(fn(item.prices, item.fee)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
