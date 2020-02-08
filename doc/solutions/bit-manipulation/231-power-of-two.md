# 231 2 的幂

## 题目描述

<https://leetcode-cn.com/problems/power-of-two/>

## 题目解析

> 位运算相关知识：
> n >= 0： n 的补码就是它本身
> n < 0： n 的补码为~n + 1，其中~n 为 n 的反码
> 也就是 lowbit(n) = n & -n = n & (~n + 1)

### 解法一：位运算 利用 n & (-n) 获取二进制中最右边（最低位）的 1

因为一个数如果是 2 的 n 次幂，那么它表示成 2 进制数的话，有且只有一位上是 1，其余位上均是 0.

通过 x & (-x) 获取二进制数中最低位的 1，然后判断是否等于 x。

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & -n) == n;
};
```

时间复杂度：O(1）
空间复杂度：O(1）

### 解法二：位运算 利用 n & (n - 1) 清除二进制中最右边（最低位）的 1

通过 n & (n - 1) 清除二进制中最右边（最低位）的 1；如果该数是二进制数，那么清除最低位的 1 之后，所有位均为 0，判断是否为零即可。

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) == 0;
};
```

时间复杂度：O(1）
空间复杂度：O(1）

### 解法三：除以二取模

```js
/**
 * 解法三：如果是2的幂，一直除以2后会变为1，否则小于1；JS 中的 Number是浮点数
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n > 1) n /= 2;
    return n == 1;
};
```

时间复杂度：O(logN）
空间复杂度：O(1）

### 解法四：调用库函数

```js
/**
 * 解法四：直接调用库函数
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log2(n));
};
```
