# 190. 颠倒二进制位

## 题目描述

<https://leetcode-cn.com/problems/reverse-bits/>

## 题目解析

### 解法

算法思路为：
（1）使用变量 res 来存储二进制结果
（2）由于是无符号整数，循环 32 次，每次循环 res 向左移位
（3）获取原来数字 n 的最低位，放置在 res 的最低位
（4）更新原数字 n 向右移动一位

```js
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res <<= 1; // res 左移空出位置
        res |= n & 1; // 添加 n 的最低位
        n >>= 1; // 右移去掉最低位
    }
    return res >>> 0; // 转成对应的无符号整数
};
```

时间复杂度：O(1)
空间复杂度：O(1)
