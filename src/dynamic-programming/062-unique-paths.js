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

/**
 * 解法二：动态规划优化 - 滚动数组（优化空间）
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
        // 小技巧：
        // dp[j] = dp[j] + dp[j - 1] // 等价于
        // dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        // 当前格子走法 = 上方格子走法 + 左边格子走法
        for (let j = 1; j < m; j++) dp[j] += dp[j - 1];

    return dp[m - 1];
};

export { uniquePaths, uniquePaths2 };
