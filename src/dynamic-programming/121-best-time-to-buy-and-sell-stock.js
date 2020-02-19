/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length === 0) return 0;
    let n = prices.length;
    let dp = Array.from({ length: n }, () => Array(2));
    // set base case
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[n - 1][0];
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
    if (!prices || prices.length === 0) return 0;
    // set base case
    let dp_i_0 = 0;
    let dp_i_1 = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
};

export { maxProfit, maxProfit2 };
