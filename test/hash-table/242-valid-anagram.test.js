import { expect } from 'chai';
import { isAnagram, isAnagram2, isAnagram3 } from '../../src';

describe('Test if two strings are valid anagram', () => {
    let input, output, res;

    beforeEach(() => {
        // arrange
        input = [
            { s: 'a', t: 'b' },
            { s: 'anagram', t: 'granama' },
            { s: 'xyz', t: 'zyy' },
            { s: 'asdfas', t: '' }
        ];
        output = [false, true, false, false];
        res = [];
    });

    it('isAnagram should test the results correctly', () => {
        // act
        input.forEach(item => {
            res.push(isAnagram(item.s, item.t));
        });

        // assert
        expect(res).deep.equal(output);
    });

    it('isAnagram2 should test the results correctly', () => {
        // act
        input.forEach(item => {
            res.push(isAnagram2(item.s, item.t));
        });

        // assert
        expect(res).deep.equal(output);
    });

    it('isAnagram3 should test the results correctly', () => {
        // act
        input.forEach(item => {
            res.push(isAnagram3(item.s, item.t));
        });

        // assert
        expect(res).deep.equal(output);
    });
});
