# 120 三角形最小路径和

## 题目描述

<https://leetcode-cn.com/problems/triangle/>

## 题目解析

相似问题

[62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)
[63. 不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)

### 解法一： 动态规划

1. 重复性(分治)

    - problem(i,j) = min(sub(i+1,j) , sub(i+1,j+1)) + a[i,j]
    - problem(i,j)：当前行当前列（二维数组）的向下面走的路径总数
    - sub(i+1,j)：下一行当前列(即向下并向左边走)的路径总数
    - sub(i+1,j+1)：下一行下一列(即向下并向右边走)的路径总数
    - 路径总数包括自己所在位置 a[i,j]，即到达当前位置所需的步数

2. 定义状态数组
   dp[i,j]

3. DP 方程
   dp[i,j] = min(dp[i+1,j],dp[i+1][j+1])+dp[i,j]

4. 初始化数据
   一般是第一行 n 列和第一列 n 行或者最后一行 n 列最后一列 n 行

```js
/**
 * 解法一：二维数组动态规划
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let dp = triangle; // create dp table

    for (let i = dp.length - 2; i >= 0; i--)
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] =
                Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
        }
    return dp[0][0];

    /*
    // 直接使用 triangle，不使用额外空间
    for (let i = triangle.length - 2; i >= 0; i--) // 从倒数第二行开始，自底向上逐行遍历
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
        }
    return triangle[0][0];
    */
};
```

时间复杂度：O(m * n) m 为 triangle.length, n 为 triangle[lastRowIndex].length
空间复杂度：O(m * n) 使用了 m x n 大小的二维数组

### 解法二： 动态规划（一维数组空间优化）

```js
/**
 * 解法二：优化空间一维数组动态规划
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal2 = function(triangle) {
    let rows = triangle.length;
    let dp = triangle[rows - 1]; // 创建一维数组
    for (let i = rows - 2; i >= 0; i--)
        for (let j = 0; j < triangle[i].length; j++)
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    return dp[0];
};
```

时间复杂度：O(m * n) m 为 triangle.length, n 为 triangle[lastRowIndex].length
空间复杂度：O(n) 使用了长度为 m 的数组

### 解法三：递归

```js
/**
 * 解法三：递归
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal3 = function(triangle) {
    let len = triangle.length;

    const dfs = (row, col, triangle) => {
        if (row === len - 1) return triangle[row][col];

        const left = dfs(row + 1, col, triangle);
        const right = dfs(row + 1, col + 1, triangle);

        return Math.min(left, right) + triangle[row][col];
    };

    return dfs(0, 0, triangle);
};
```

时间复杂度：O(2 ^ n) n 为 triangle[lastRowIndex].length
空间复杂度：O(2 ^ n) n 为 triangle[lastRowIndex].length

### 解法四：递归 + 记忆化搜索

```js

/**
 * 解法四：递归 记忆化搜索
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal4 = function(triangle) {
    let rows = triangle.length;
    let memo = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: triangle[i].length })
    );

    const dfs = (row, col, triangle) => {
        if (memo[row][col] !== undefined) return memo[row][col];
        if (row === rows - 1) return (memo[row][col] = triangle[row][col]);

        const left = dfs(row + 1, col, triangle);
        const right = dfs(row + 1, col + 1, triangle);

        return (memo[row][col] = Math.min(left, right) + triangle[row][col]);
    };

    return dfs(0, 0, triangle);
};
```

时间复杂度：O(m * n) m 为 triangle.length, n 为 triangle[lastRowIndex].length
空间复杂度：O(m * n) 使用了 m x n 大小的二维数组
