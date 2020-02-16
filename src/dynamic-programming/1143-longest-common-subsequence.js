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
    let dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: m + 1 }).fill(0)
    );

    for (let i = 1; i <= n; i++)
        for (let j = 1; j <= m; j++) {
            if (text1.charAt(j - 1) === text2.charAt(i - 1))
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
        }

    return dp[n][m];
};

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

export {
    longestCommonSubsequence,
    longestCommonSubsequence2,
    longestCommonSubsequence3
};
