# 「LeetCode」 876.[链表的中间结点](Middle Of The Linked List)

## 题目描述

<https://leetcode-cn.com/problems/middle-of-the-linked-list/>

## 题目解析

### 解法一

可以通过链表元素，并将其添加到一个数组中，然后返回数组中元素的中间结点。

```js
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
```

时间复杂度：`O(N)` 一次遍历 N 为链表结点的个数
空间复杂度：`O(N)` 需要借助大小为 N 的数组来存储链表结点元素

### 解法二

可以使用两个指针（slow, fast）一起遍历链表：slow 指针一次走一步，fast 指针一次走两步，这样当 fast 指针到达链表末尾时，slow 指针一定位于链表中间。

```js
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

```

时间复杂度：`O(N)` 一次遍历 N 为链表结点的个数
空间复杂度：`O(1)` 不需要开辟额外空间
