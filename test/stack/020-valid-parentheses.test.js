import { expect } from 'chai';
import { isValid, isValid2, isValid3 } from '../../src';

describe('Test valid parentheses', () => {
    it('Use isValid to test valid parentheses', () => {
        // arrange
        const input = ['()', '()[]{}', '(]', '([)]', '{[]}', '())'];
        const expectResult = [true, true, false, false, true, false];

        // act
        const actual = [];
        input.forEach(item => actual.push(isValid(item)));

        // assert
        actual.forEach((res, i) => {
            expect(res).equal(expectResult[i]);
        });
    });

    it('Use isValid2 to test valid parentheses', () => {
        // arrange
        const input = ['()', '()[]{}', '(]', '([)]', '{[]}', '())'];
        const expectResult = [true, true, false, false, true, false];

        // act
        const actual = [];
        input.forEach(item => actual.push(isValid2(item)));

        // assert
        actual.forEach((res, i) => {
            expect(res).equal(expectResult[i]);
        });
    });

    it('Use isValid3 to test valid parentheses', () => {
        // arrange
        const input = ['()', '()[]{}', '(]', '([)]', '{[]}', '())'];
        const expectResult = [true, true, false, false, true, false];

        // act
        const actual = [];
        input.forEach(item => actual.push(isValid3(item)));

        // assert
        actual.forEach((res, i) => {
            expect(res).equal(expectResult[i]);
        });
    });
});
