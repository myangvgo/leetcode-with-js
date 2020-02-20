# 64.[最小路径和](Minimum Path Sum)

## 题目描述

<https://leetcode-cn.com/problems/minimum-path-sum/>

## 题目解析

### 解法一

```js
/**
 * 解法一：动态规划（二维数组）
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    let dp = Array.from({ length: m }, () => Array.from({ length: n }).fill(0));
    // base case
    dp[0][0] = grid[0][0];
    for (let i = 1; i < n; i++) dp[0][i] = dp[0][i - 1] + grid[0][i];
    for (let j = 1; j < m; j++) dp[j][0] = dp[j - 1][0] + grid[j][0];
    for (let i = 1; i < m; i++)
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    return dp[m - 1][n - 1];
};
```

时间复杂度：`O(m * n)`
空间复杂度：`O(m * n)`

### 解法二

```js
/**
 * 解法二：动态规划（一维数组）
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum2 = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // dp[i] = min(dp[i], dp[i - 1]) + grid[i][j]
    let dp = Array.from({ length: n });
    dp[0] = grid[0][0];
    for (let i = 1; i < n; i++) dp[i] = dp[i - 1] + grid[0][i];
    for (let i = 1; i < m; i++) {
        dp[0] = grid[i][0] + dp[0]; // update dp[0] in every row
        for (let j = 1; j < n; j++) {
            dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
        }
    }
    return dp[n - 1];
};
```

时间复杂度：`O(m * n)`
空间复杂度：`O(n)`
