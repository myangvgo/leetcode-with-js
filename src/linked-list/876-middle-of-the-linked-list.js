// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * LeetCode NO.876 - Middle Of The Linked List (链表的中间结点)
 * 解法一：遍历链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let res = [];
    let cur = head;
    while (cur) {
        res.push(cur);
        cur = cur.next;
    }
    return res[res.length >> 1];
};

/**
 * LeetCode NO.876 - Middle Of The Linked List (链表的中间结点)
 * 解法二：快慢指针
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode2 = function(head) {
    let slow = head;
    let fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

export { middleNode, middleNode2 };
