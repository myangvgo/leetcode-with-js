/**
 * k = infinity
 * dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 * dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
 */

/**
 * 解法一：动态规划
 * max profit with cool down
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitV = function(prices) {
    if (!prices || prices.length < 2) return 0;
    let n = prices.length;
    let dp = Array.from({ length: n }, () => Array(2).fill(0));
    for (let i = 0; i < n; i++) {
        // check bounds and deal with base case
        if (i == 0) {
            dp[0][0] = 0;
            dp[0][1] = -prices[0];
            continue;
        }
        if (i == 1) {
            // 需要特别注意推导，i = 0 推导出来后，i = 1 要严格按照公式来推导！！！
            dp[1][0] = Math.max(0, -prices[0] + prices[1]);
            dp[1][1] = Math.max(-prices[0], -prices[1]);
            continue;
        }
        let temp = dp[i][0];
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
        dp[i - 2][0] = temp;
    }
    return dp[n - 1][0];
};

/**
 * 解法二：动态规划（压缩空间）
 * max profit with cool down
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitV2 = function(prices) {
    if (!prices || prices.length < 2) return 0;
    let dp_i_0 = 0;
    let dp_i_1 = Number.MIN_SAFE_INTEGER;
    let dp_i_prev = 0; // dp[i-2][0]
    for (let i = 0; i < prices.length; i++) {
        let temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_i_prev - prices[i]);
        dp_i_prev = temp;
    }
    return dp_i_0;
};

export { maxProfitV, maxProfitV2 };
