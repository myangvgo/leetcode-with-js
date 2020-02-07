# 50 求 x 的 n 次幂

## 题目描述

<https://leetcode-cn.com/problems/powx-n/>

## 题目解析

### 思路

#### 解法一（暴力法）

根据数学上的定义，将这个数累乘

时间复杂度：O(N)
空间复杂度：O(1)

#### 解法二（快速幂）

计算 `x^2n => x^n * x^n`;
比如：`2^4 = 2^2 * 2^2`; `2^5 = 2^2 * 2^2 * 2`
可以通过递归来实现，这样只需要计算 log(N) 次

```js
/**
 * 快速幂等法一（递归）
 * 计算 x 的 n 次幂函数
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    let pow = Math.abs(n);
    let half = myPow(x, Math.floor(pow / 2));
    let result = pow % 2 === 0 ? half * half : half * half * x;
    return n > 0 ? result : 1 / result;
};
```

时间复杂度：O(logN)
空间复杂度：O(logN)
