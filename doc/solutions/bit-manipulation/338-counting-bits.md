# 338 比特位计数

## 题目描述

<https://leetcode-cn.com/problems/counting-bits/>

## 题目解析

### 解法一：二进制奇偶特性 + DP

二进制的自身特性：
（1）奇数二进制中 1 的个数 = 它前一位的偶数二进制中 1 的个数 + 1（多出的是最低位的 1）
（2）偶数二进制中 1 的个数 = 它上一位的偶数除以 2 二进制中 1 的个数（偶数最低位为 0，右移一位清零，1 的个数不变）

所以状态转移方程可以表示为：`dp[i] = dp[i - 1] + 1 (i 为奇数)； dp[i] = dp[i / 2] (i 为偶数)`

```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let ans = Array.from({ length: num + 1 }).fill(0);
    for (let i = 1; i <= num; i++) {
        ans[i] = (i & 1) == 1 ? ans[i - 1] + 1 : ans[i >> 1];
    }
    return ans;
};
```

时间复杂度：O(N)
空间复杂度：O(N)

### 解法二：余数取模 + DP

使用取模法将十进制转换成二进制时，遇到偶数，余数就为 0；所以结果要加上漏掉的中间值是偶数的二进制 1 位。

状态转移方程：P(x)=P(x/2)+(x mod 2) 等价于 P(x) = P(x >> 1) + (x & 1)

```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = [0];
    let n = 1;
    while (n <= num) {
        let tmp = n;
        res.push(res[tmp >> 1] + (tmp & 1));
        n++;
    }
    return res;
};

// 另一种写法
var countBits1 = function(num) {
    let ans = Array.from({ length: num + 1 }).fill(0);
    for (let i = 1; i <= num; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
};
```

时间复杂度：O(N)
空间复杂度：O(N)
