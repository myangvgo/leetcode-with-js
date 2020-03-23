import { expect } from 'chai';
import { middleNode, middleNode2 } from '../../src';

describe('Test LeetCode NO.876 - Middle Of The Linked List (链表的中间结点)', () => {
    let input = [];
    let expectedOutput = [];
    let actual = [];
    let testMethods = [middleNode, middleNode2];

    // arrange
    beforeEach(() => {
        input = [
            buildLinkedList([1, 2, 3, 4, 5]),
            buildLinkedList([1, 2, 3, 4, 5, 6]),
            buildLinkedList([1]),
            buildLinkedList([1, 2])
        ];
        expectedOutput = [[3, 4, 5], [4, 5, 6], [1], [2]];
        actual = [];
    });

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    // build a linked list from array
    function buildLinkedList(arr) {
        if (!arr || arr.length == 0) return null;
        let head = new ListNode(arr[0]);
        let cur = head;
        for (let i = 1; i < arr.length; i++) {
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
        return head;
    }

    // serialize result
    function serialize(node) {
        let res = [];
        let cur = node;
        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }
        return res;
    }

    testMethods.forEach(fn => {
        it(`Use method ${fn.name} should calculate the correct result`, () => {
            // act
            input.forEach(item => actual.push(serialize(fn(item))));

            // assert
            expect(actual).to.deep.equal(expectedOutput);
        });
    });
});
