import { expect } from 'chai';
import { maxArea, maxArea2, maxArea3 } from '../../src';

describe('Test Container with most water', () => {
    it('Given a array, it should calculate the correct max area using maxArea method', () => {
        // arrange
        const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7],
            expectedResult = 49;

        // act
        const actualResult = maxArea(arr);

        // assert
        expect(
            actualResult,
            `actual max area calculated is ${actualResult}`
        ).equal(
            expectedResult,
            `the correct max area calculated is ${expectedResult}`
        );
    });

    it('Given a array, it should calculate the correct max area using maxArea2 method', () => {
        // arrange
        const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7],
            expectedResult = 49;

        // act
        const actualResult = maxArea2(arr);

        // assert
        expect(
            actualResult,
            `actual max area calculated is ${actualResult}`
        ).equal(
            expectedResult,
            `the correct max area calculated is ${expectedResult}`
        );
    });

    it('Given a array, it should calculate the correct max area using maxArea3 method', () => {
        // arrange
        const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7],
            expectedResult = 49;

        // act
        const actualResult = maxArea3(arr);

        // assert
        expect(
            actualResult,
            `actual max area calculated is ${actualResult}`
        ).equal(
            expectedResult,
            `the correct max area calculated is ${expectedResult}`
        );
    });
});
