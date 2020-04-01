import { expect } from 'chai';
import { maxDepthAfterSplit, maxDepthAfterSplit2 } from '../../src';

describe('Test LeetCode NO.1111 - Maximum Nesting Depth Of Two Valid Parentheses Strings (有效括号的嵌套深度)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [maxDepthAfterSplit, maxDepthAfterSplit2];

    // arrange
    beforeEach(() => {
        input = ['(()())', '()(())()'];
        expectedOutput = [
            [
                [0, 1, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 1]
            ],
            [
                [0, 0, 0, 1, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 1]
            ]
        ];
        actual = [];
    });

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(item => actual.push(fn(item)));

            // assert
            actual.forEach((actualCase, index) => {
                let expectCase = expectedOutput[index];
                // expect(expectCase).to.have.deep.members(actualCase);
                expect(expectCase).to.deep.include(actualCase);
            });
        });
    });
});
