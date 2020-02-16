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

export { minimumTotal, minimumTotal2, minimumTotal3, minimumTotal4 };
