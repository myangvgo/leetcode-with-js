/**
 * 解法一：动态规划
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || matrix.length == 0) return 0;
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = Array.from({ length: m + 1 }, () =>
        Array.from({ length: n + 1 }).fill(0)
    );
    let maxEdge = 0;
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] == '1') {
                dp[i][j] =
                    Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
                maxEdge = Math.max(maxEdge, dp[i][j]);
            }
        }
    return maxEdge * maxEdge;
};

/**
 * 解法二：动态规划（压缩空间）
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare2 = function(matrix) {
    if (!matrix || matrix.length == 0) return 0;
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = Array.from({ length: n }).fill(0);
    let maxEdge = 0;
    let prev = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let temp = dp[j];
            if (i == '0' || j == '0' || matrix[i][j] == '0')
                dp[j] = matrix[i][j] - '0';
            else dp[j] = Math.min(Math.min(dp[j - 1], prev), dp[j]) + 1;
            maxEdge = Math.max(maxEdge, dp[j]);
            prev = temp;
        }
    }
    return maxEdge * maxEdge;
};

export { maximalSquare, maximalSquare2 };
