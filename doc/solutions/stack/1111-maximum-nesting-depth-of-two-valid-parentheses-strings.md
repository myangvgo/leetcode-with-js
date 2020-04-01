# LeetCode 1111. 有效括号的嵌套深度 (Maximum Nesting Depth Of Two Valid Parentheses Strings)

[返回题解列表](../../../README.md)

## 题目描述

<https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/>

## 题目解析

括号匹配常见的解题思路就是栈。

题目中说的有效括号是指每个左括号都可以找到与之对应的右括号。
要求输出的结果是：有效字符串 A 中对应的括号都是 0；有效字符串 B 中对应的括号都是 1；A 和 B 都是序列（不连续）

可以遍历字符串，使用栈来计算深度：

* 如果当前字符是 (，就把 ( 压入栈中，此时这个 ( 的嵌套深度为栈的高度；
* 如果当前字符是 )，此时这个 ) 的嵌套深度为栈的高度，随后再从栈中弹出一个 (。

在遍历过程中，我们保证栈内一半的括号属于序列 A，一半的括号属于序列 B，那么就能保证拆分后最大的嵌套深度最小，是当前最大嵌套深度的一半。

这个时候可以按照偶数层的括号分配给 A，把奇数层的括号分配给 B

### 解法

```js
/**
 * LeetCode NO.1111 - Maximum Nesting Depth Of Two Valid Parentheses Strings (有效括号的嵌套深度)
 * 使用栈进行括号匹配
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
    let depth = 0;
    return seq.split("").map((value, index) => {
        if (value == "(") {
            depth++;
            return depth & 1;
        } else {
            let res = depth & 1;
            depth--;
            return res;
        }
    });
};
```

时间复杂度：`O(N)` N 为字符串的长度
空间复杂度：`O(1)` 只需要一个变量存储空间

```js
/**
 * LeetCode NO.1111 - Maximum Nesting Depth Of Two Valid Parentheses Strings (有效括号的嵌套深度)
 * 写法二：找左右括号与下标的规律
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit2 = function(seq) {
    let res = [];
    for (let i = 0; i < seq.length; i++) {
        // 左括号 A 偶数下标值为 0；B 奇数下标值为 1
        if (seq[i] == '(') res[i] = i & 1;
        // 右括号 A 偶数下标值为 1；B 奇数下标值为 0
        else res[i] = (i + 1) & 1;
    }
    return res;
};
```

时间复杂度：`O(N)` N 为字符串的长度；每个字符遍历一次
空间复杂度：`O(N)` 使用了大小为 N 的数组

[返回题解列表](../../../README.md)
