# 1143 最长公共子序列

## 题目描述

<https://leetcode-cn.com/problems/longest-common-subsequence/>

## 题目解析

子序列类型的问题，穷举出所有可能的结果都不容易，而动态规划算法做的就是穷举 + 剪枝，可以说只要涉及子序列问题，十有八九都需要动态规划来解决。

对于两个字符串的动态规划问题，通用的套路是：

1. 定义 DP Table
   分别以两个字符串的长度定义一个**二维数组**。其中，dp[i][j] 的含义是：对于 s1[1..i] 和 s2[1..j]，它们的 LCS 长度是 dp[i][j]。

2. 定义 base case

    - 如果两个字符串均为空字符串，那么 LCS 为 0
    - 如果其中一个字符串为空，另一个不为空，那么 LCS 为 0
    - 我们专门让索引为 0 的行和列表示空串，dp[0][..] 和 dp[..][0] 都应该初始化为 0，这就是 base case。

3. 状态转移方程
   状态转移就是做选择，对于 s1, s2 中的每个字符，就是判断在还是不在 LCS 中。

用两个指针 i 和 j 从后往前遍历 s1 和 s2，如果 s1[i]==s2[j]，那么这个字符一定在 lcs 中；否则的话，s1[i] 和 s2[j] 这两个字符至少有一个不在 lcs 中，需要丢弃一个。

### 解法一：二维数组动态规划

```js
/**
 * 解法一：动态规划
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;

    // initialize a (m + 1) * (n + 1) grid
    let dp = Array.from({ length: n + 1 }); // (n + 1) row
    for (let i = 0; i <= n; i++) dp[i] = Array.from({ length: m + 1 }).fill(0); // (m + 1) column

    for (let i = 1; i <= n; i++)
        for (let j = 1; j <= m; j++) {
            if (text1.charAt(j - 1) === text2.charAt(i - 1))
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
        }

    return dp[n][m];
};
```

时间复杂度：O(m * n) m 是 text1.length，n 是 text2.length
空间复杂度：O(m * n) m 是 text1.length，n 是 text2.length

### 解法二：动态规划（变换数组，优化空间）

解法二在解法一的基础上采用了变换数组，优化了存储空间。
解法一中，为了更新当前行，用到了当前行和前一行，所以可以

```js
/**
 * 解法二：动态规划，使用数组变换
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence2 = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    // 初始化一个大小为 m + 1 的数组
    let dp = Array.from({ length: m + 1 }).fill(0);

    for (let i = 1; i <= n; i++) {
        let prev = dp[0];
        for (let j = 1; j <= m; j++) {
            let temp = dp[j];
            if (text1.charAt(j - 1) == text2.charAt(i - 1)) {
                dp[j] = prev + 1;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            prev = temp;
        }
    }

    return dp[m];
};
```

时间复杂度：O(m * n) m 是 text1.length，n 是 text2.length
空间复杂度：O(m) m 是 text1.length

### 解法三：带记忆化的递归

```js

/**
 * 解法三：带记忆化的递归
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence3 = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let memo = Array.from({ length: m + 1 }, () =>
        Array.from({ length: n + 1 }).fill(-1)
    );
    return process(text1, text2, m, n, memo);
};

/**
 * @param {string} text1
 * @param {string} text2
 * @param {number} i
 * @param {number} j
 * @param {number[][]} memo
 * @return {number}
 */
const process = (text1, text2, i, j, memo) => {
    if (i <= 0 || j <= 0) return 0;
    if (memo[i][j] !== -1) return memo[i][j];
    if (text1.charAt(i - 1) == text2.charAt(j - 1))
        return process(text1, text2, i - 1, j - 1, memo) + 1;
    else
        return (memo[i][j] = Math.max(
            process(text1, text2, i, j - 1, memo),
            process(text1, text2, i - 1, j, memo)
        ));
};
```

时间复杂度：O(m * n) m 是 text1.length，n 是 text2.length
空间复杂度：O(m * n) m 是 text1.length，n 是 text2.length
