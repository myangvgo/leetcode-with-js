# 32.[最长有效括号](Longest Valid Parentheses)

## 题目描述

<https://leetcode-cn.com/problems/longest-valid-parentheses/>

## 题目解析

我们定义一个 dp 数组，其中第 i 个元素表示以下标为 i 的字符结尾的最长有效子字符串的长度。
通过观察：

- 以 '(' 结尾的子字符串一定是无效序列，对应的 dp 数组位置上的值必定为 0 。
- 有效的子字符串一定以 ')' 结尾。
  - 右括号前边是 ’(‘ ，类似于 ”...()" ： dp[i] = dp[i - 2] + 2;
  - 右括号前边是 ’)‘ ，类似于 ”...))"
    - "...x....))": 以下标为 i - 1 往前的有效子序列的长度是 i - dp[i - 1]。x 为 i - dp[i - 1] 前一位
    - 这个时候要判断 x 是不是 '('，如果是的话，将 x 左边的有效括号个数 dp[i - dp[i - 1] - 2] 加上 x 右边的有效括号个数 dp[i - 1] 以及 x 跟最后一个 ')' 组成的有效括号个数 2
    - dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2

同时注意边界条件

### 解法一

```js
/**
 * 解法一：动态规划
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (!s || s.length < 2) return 0;
    let n = s.length;
    let res = 0;
    let dp = Array.from({ length: n }).fill(0);
    for (let i = 1; i < n; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            else {
                let j = i - dp[i - 1];
                if (j > 0 && s[j - 1] === '(') {
                    dp[i] = dp[i - 1] + (j >= 2 ? dp[j - 2] : 0) + 2;
                }
            }
            res = Math.max(res, dp[i]);
        }
    }
    return res;
};
```

时间复杂度：O(n)
空间复杂度：O(n)

### 解法二

```js

```

时间复杂度：O()
空间复杂度：O()

### 解法三

```js

```

时间复杂度：O()
空间复杂度：O()
