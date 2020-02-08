# 191 位 1 的个数

## 题目描述

<https://leetcode-cn.com/problems/number-of-1-bits/>

## 题目解析

### 解法一：位运算

任何整数与 1 进行逻辑与运算，都可以获得这个数字的最低位；可以使用 1 来做掩码，检查下一位时，将掩码左移一位

```js
/**
 * 解法一：使用循环和位移动
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) !== 0) count++;
        mask <<= 1; // 左移1位
    }
    return count;
};
```

时间复杂度：O(1)
空间复杂度：O(1)

### 解法二：位运算（优化）

利用在二进制中，n & (n - 1) 可以将 n 的最低位的 1 变成 0。
通过维护一个计数器，不断循环上述过程，直到 n 变为 0，说明所有位都处理完成了。

```js
/**
 * 解法二：使用 n & (n - 1) 将最低位的 1 变为 0
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight1 = function(n) {
    let count = 0;
    while (n != 0) {
        count++;
        n &= n - 1;
    }
    return count;
};
```

时间复杂度：O(1) 不需要循环 32 次，只要循环二进制中 1 出现的次数
空间复杂度：O(1)

### 解法三：正则表达式

```js
/**
 * 解法三：使用 toString(2)转二进制，然后正则匹配 1 出现的次数
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function(n) {
    return (n.toString(2).match(/1/g) || []).length;
};
```

### 解法四：十进制转二进制

```js
/**
 * 解法四：十进制转二进制取模
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight3 = function(n) {
    let count = 0;
    while (n) {
        if ((n & 1) === 1) count++;
        n >>>= 1; // 无符号右移往左边填充0
    }
    return count;
};
```

时间复杂度：O(1)
空间复杂度：O(1)
