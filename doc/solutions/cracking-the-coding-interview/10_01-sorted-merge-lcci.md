# 「程序员面试金典」 10_01.[合并排序的数组](Sorted Merge)

## 题目描述

<https://leetcode-cn.com/problems/sorted-merge-lcci/>

## 题目解析

原地修改数组，一般想到用双指针的解法。
同时，为了保持要访问数组被覆盖后的原来的元素，可以从后往前遍历，先放置后面空闲位置的元素。

比较 m + n 个数的大小，所以先保证其中至少 m 或 n 个数比较完毕并放在正确位置，再考虑剩下的数。

### 解法

```js
/**
 * 「Cracking the Coding Interview」 NO.10_01 - Sorted Merge (合并排序的数组)
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var mergeSorted = function(A, m, B, n) {
    // 从后往前遍历
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1; // 从最后一个元素遍历
    while (i >= 0 && j >= 0)
        A[i] > B[j] ? (A[k--] = A[i--]) : (A[k--] = B[j--]);
    // 如果 B 中还有剩余的元素，则直接拷贝到 A 的剩余位置中
    while (j >= 0) A[k--] = B[j--];
};
```

时间复杂度：O(m + n) k 指针移动了 m + n 次
空间复杂度：O(1) 原地修改数组
