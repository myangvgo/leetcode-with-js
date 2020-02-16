# 62 不同路径

## 题目描述

<https://leetcode-cn.com/problems/unique-paths/>

## 题目解析

### 解法一：动态规划

每个格子的走法有只能从左边格子或者上边的格子走过来，对一个 m X n (m 列 X n 行) 的网格 dp，

- 格子之间的关系可以表示为：`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]`

- 同时对于第一行（只能从左边格子走到当前格子）或者第一列（只能从上面格子走到当前格子），只能有一种走法

```js
/**
 * 解法一：动态规划
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // initialize a m cols * n rows grid
    const dp = Array.from({ length: m }); // cols
    for (let i = 0; i < m; i++) dp[i] = Array.from({ length: n }); // rows

    // base cases：以终点为起始点递推
    for (let i = 0; i < m; i++) dp[i][0] = 1; // 第一行中每个格子均有且只有一种走法
    for (let j = 0; j < n; j++) dp[0][j] = 1; // 第一列中每个格子均有且只有一种走法

    // process subproblems
    for (let i = 1; i < m; i++)
        for (let j = 1; j < n; j++) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

    return dp[m - 1][n - 1];
};
```

时间复杂度：O(m * n)
空间复杂度：O(m * n) 使用了 m x n 大小的二维数组

### 解法二：动态规划（优化空间）

`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]` 只用到了 dp[i - 1][j], dp[i][j - 1] 两个变量，并不需要整个二维数组来存储状态
这里有个**小技巧**，状态方程可以简化为 `dp[j] = dp[j] + dp[j - 1]`

比如对于 m = 4, n = 3 的网格，如果按整行或者整列来递推的话，就不需要整个二维数组。

(i = 0)   1     1       1       1       初始行
(i = 1)   1     1+1=2   1+2=3   1+3=4
(i = 2)   1     2+1=3   3+3=6   4+6=10

```js
/**
 * 解法二：动态规划优化（优化空间）
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function(m, n) {
    // initialize an array with size of m (row length)
    // base case：第一行所有的格子只有一种走法
    const dp = Array.from({ length: m }).fill(1);

    // 以整行递推，实际上还是二维数组，只不过只有一行
    for (let i = 1; i < n; i++)
        // dp[j] = dp[j] + dp[j - 1] // 等价于
        // dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        // 当前格子走法 = 上方格子走法 + 左边格子走法
        for (let j = 1; j < m; j++) dp[j] += dp[j - 1];
};
```

时间复杂度：O(m * n)
空间复杂度：O(m) 使用了大小为 m 的数组
