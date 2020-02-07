import { expect } from 'chai';
import { myPow, myPow1, myPow2 } from '../../src';

describe('Test powx n', () => {
    let input,
        expectedOutput,
        actual = [];
    beforeEach(() => {
        // arrange
        input = [
            { x: 2, n: 10 },
            { x: 2.1, n: 3 },
            { x: 2.0, n: -2 },
            { x: 99, n: 0 },
            { x: 0.00001, n: 2147483647 }
        ];
        expectedOutput = [1024, 9.261, 0.25, 1, 0];
    });

    it('Use myPow should calculate the correct result', () => {
        // act
        input.forEach(item => {
            actual.push(myPow(item.x, item.n));
        });

        // assert
        expectedOutput.forEach((num, i) => {
            expect(num.toFixed(5)).equal(actual[i].toFixed(5));
        });
    });

    it('Use myPow1 should calculate the correct result', () => {
        // act
        input.forEach(item => {
            actual.push(myPow1(item.x, item.n));
        });

        // assert
        expectedOutput.forEach((num, i) => {
            expect(num.toFixed(5)).equal(actual[i].toFixed(5));
        });
    });

    it('Use myPow2 should calculate the correct result', () => {
        // act
        input.forEach(item => {
            actual.push(myPow2(item.x, item.n));
        });

        // assert
        expectedOutput.forEach((num, i) => {
            expect(num.toFixed(5)).equal(actual[i].toFixed(5));
        });
    });
});
