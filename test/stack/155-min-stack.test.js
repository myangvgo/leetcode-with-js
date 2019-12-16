import { expect } from 'chai';
import { MinStack, MinStack2 } from '../../src';

describe('Test Min Stack', () => {
    it('The MinStack should work as expected', () => {
        // arrange
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);

        // act
        const curMin = minStack.getMin();
        minStack.pop();
        const curTop = minStack.top();
        const lastMin = minStack.getMin();

        // assert
        expect(curMin).equal(-3);
        expect(curTop).equal(0);
        expect(lastMin).equal(-2);
    });

    it('The MinStack2 should work as expected', () => {
        // arrange
        const minStack = new MinStack2();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);

        // act
        const curMin = minStack.getMin();
        minStack.pop();
        const curTop = minStack.top();
        const lastMin = minStack.getMin();

        // assert
        expect(curMin).equal(-3);
        expect(curTop).equal(0);
        expect(lastMin).equal(-2);
    });
});
