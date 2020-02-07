import { expect } from 'chai';
import { generateParenthesis } from '../../src';

describe('Test generate parenthesis', () => {
    it('Given N = 3, it should generate 5 valid parenthesie', () => {
        // arragne
        const n = 3;
        const output = ['((()))', '(()())', '(())()', '()(())', '()()()'];

        // act
        const actual = generateParenthesis(n);

        // assert
        expect(actual).deep.equal(output);
    });
});
