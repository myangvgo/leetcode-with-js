/**
 * k = infinity
 * dp[i][0] = max(dp[i-1][0], dp[i - 1][1] + prices[i] - fee) // 一次交易包含买入和卖出，规定卖出的时候要交手续费
 * dp[i][1] = max(dp[i -1][1], dp[i - 1][0] - prices[i]);
 */

/**
 * 解法一：动态规划
 * max profit with transaction fee
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfitVI = function(prices, fee) {
    if (!prices || prices.length < 2) return 0;
    let n = prices.length;
    let dp = Array.from({ length: n }, () => Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
};

/**
 * 解法二：动态规划（压缩空间）
 * max profit with transaction fee
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfitVI2 = function(prices, fee) {
    if (!prices || prices.length < 2) return 0;
    let dp_i_0 = 0;
    let dp_i_1 = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i] - fee);
        dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
    }
    return dp_i_0;
};

export { maxProfitVI, maxProfitVI2 };
