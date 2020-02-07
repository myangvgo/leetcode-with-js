import { expect } from 'chai';
import { majorityElement, majorityElement1 } from '../../src';

describe('Test majority element', () => {

    let input = [];
    let expectedOutput = [];
    let actual = [];

    // arrange
    beforeEach(() => {
        input = [
            [3, 2, 3],
            [2, 2, 1, 1, 1, 2, 2]
        ];
        expectedOutput = [3, 2];
        actual = [];
    })

    it('Given an array of numbers with majority element, use majorityElement should calculate correct result', () => {
        
        // act
        input.forEach(nums => {
            actual.push(majorityElement(nums));
        });

        // assert
        expect(actual).to.deep.have.members(expectedOutput);
    });

    // Test Boyer-Moore method
    it('Given an array of numbers with majority element, use majorityElement1 should calculate correct result', () => {
        
        // act
        input.forEach(nums => {
            actual.push(majorityElement1(nums));
        });

        // assert
        expect(actual).to.deep.have.members(expectedOutput);
    });
});
