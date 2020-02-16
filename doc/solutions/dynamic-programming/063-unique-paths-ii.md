# 63 不同路径 II

## 题目描述

<https://leetcode-cn.com/problems/unique-paths-ii/>

## 题目解析

### 解法一：动态规划（对应 62 题解法一）

- 参照 62 题的思路，可以使用一个二维数组的 DP table 来存储每个格子走法的状态

- 第一行和第一列要考虑当前格子有没有障碍物，同时要考虑前序格子有没有障碍物

- 之后动态递推，每个格子的走法要考虑当前格子有没有障碍物。

```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;

    // initialize a col * row grid
    let dp = Array.from({ length: col });
    for (let i = 0; i < row; i++) dp[i] = Array.from({ length: col });

    // Number of ways of reaching the starting cell = 1.
    // if obstacleGrid[0][0] == 1, no ways else 1 way
    dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;

    // 填充第一行
    for (let i = 1; i < col; i++) {
        // dp[0][i] = dp[0][i - 1] 而不是 dp[0][i] = 1
        // 因为如果左边的格子有障碍物，后续的格子的走法应该都为 0，相当于往右的格子的路都堵死了，
        // 也就是当前格子走法是由左边格子的走法决定的
        obstacleGrid[0][i] === 1 ? (dp[0][i] = 0) : (dp[0][i] = dp[0][i - 1]);
    }

    // 填充第一列
    for (let j = 1; j < row; j++) {
        // dp[j][0] = dp[j - 1][0] 而不是 dp[j][0] = 1
        // 因为如果上面的格子有障碍物，后续的格子的走法应该都为0，相当于往下的格子的路都堵死了，
        // 也就是当前格子走法是由上边格子的走法决定的
        obstacleGrid[j][0] === 1 ? (dp[j][0] = 0) : (dp[j][0] = dp[j - 1][0]);
    }

    for (let i = 1; i < row; i++)
        for (let j = 1; j < col; j++) {
            obstacleGrid[i][j] === 1
                ? (dp[i][j] = 0)
                : (dp[i][j] = dp[i][j - 1] + dp[i - 1][j]);
        }

    return dp[row - 1][col - 1];
};
```

时间复杂度：O(m * n)
空间复杂度：O(m * n) 使用了 m x n 大小的二维数组

### 解法二：动态规划（压缩空间）

`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]` 只用到了 dp[i - 1][j], dp[i][j - 1] 两个变量，并不需要整个二维数组来存储状态
这里有个**小技巧**，状态方程可以简化为 `dp[j] = dp[j] + dp[j - 1]`

```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles2 = function(obstacleGrid) {
    let col = obstacleGrid[0].length;
    let row = obstacleGrid.length;
    let dp = Array.from({ length: col }).fill(0);
    dp[0] = obstacleGrid[0][0] == 0 ? 1 : 0; // 初始化起点的走法

    for (let i = 0; i < row; i++)
        for (let j = 0; j < col; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[j] = 0;
            } else if (j > 0) {
                dp[j] += dp[j - 1];
            }
        }

    return dp[col - 1];
};
```

时间复杂度：O(m * n)
空间复杂度：O(m) 使用了大小为 m 的数组
