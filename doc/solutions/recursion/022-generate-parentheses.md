# 22 括号生成

## 题目描述

<https://leetcode-cn.com/problems/generate-parentheses/>

## 题目解析

### 思路

通过观察括号生成，可以发现生成的括号具有一定的相似性，可以分解成最近重复子问题，用递归来解决。

通过思考，可以发现问题可以转化成有 2 * n 个格子，用两个字符“(”、“)”放置，有多少种有效的填充方法的问题。

1. 结束填充的情况就是 2 * n 个格子都被放满了【递归的跳出条件】
2. 而每一个有效的括号字符串有如下要求：（1）左括号要先放，左括号的个数不能超过 n （2）右括号后放，右括号的个数不能多于左括号的个数

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 使用递归
    const result = [];
    generate(0, 0, n, '', result);
    return result;
};

/**
 * @param {number} open
 * @param {number} close
 * @param {number} max
 * @param {string} cur
 * @param {string[]} ans
 * @return {void}
 */
const generate = (open, close, max, cur, ans) => {
    // recursion terminator
    if (cur.length === max * 2) {
        ans.push(cur);
        return;
    }
    // process current logic
    // drill down
    if (open < max) generate(open + 1, close, max, cur + '(', ans);
    if (close < open) generate(open, close + 1, max, cur + ')', ans);
};
```

**时间复杂度**：O(2^2n) 递归树的深度是 2n，每个括号都是放和不放两种选择
**空间复杂度**：O(2^2n) 递归树的深度是 2n，每个括号都是放和不放两种选择
