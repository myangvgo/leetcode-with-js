import { expect } from 'chai';
import { mergeSorted } from '../../src';

describe('Test 「Cracking the Coding Interview」 NO.10_01 - Sorted Merge (合并排序的数组)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [mergeSorted];

    // arrange
    beforeEach(() => {
        input = [];
        expectedOutput = [];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(item => actual.push(fn(item)));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
