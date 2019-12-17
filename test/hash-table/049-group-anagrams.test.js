import { expect } from 'chai';
import { groupAnagrams, groupAnagrams2 } from '../../src';

describe('Test Grouop Anagram', () => {
    let input, expectedOutput, actual;
    beforeEach(() => {
        // arrange
        input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
        expectedOutput = [['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']];
    });

    it('Use groupAnagrams should calculate the correct result', () => {
        // act
        actual = groupAnagrams(input);

        // assert
        // 排序后比较
        for (let i = 0; i < expectedOutput.length; i++) {
            expectedOutput[i].sort();
        }
        for (let i = 0; i < actual.length; i++) {
            actual[i].sort();
            expect(expectedOutput).deep.contains(actual[i]);
        }
    });

    it('Use groupAnagrams2 should calculate the correct result', () => {
        // act
        actual = groupAnagrams2(input);

        // assert
        // 排序后比较
        for (let i = 0; i < expectedOutput.length; i++) {
            expectedOutput[i].sort();
        }
        for (let i = 0; i < actual.length; i++) {
            actual[i].sort();
            expect(expectedOutput).deep.contains(actual[i]);
        }
    });
});
