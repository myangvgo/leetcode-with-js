/**
 * 解法一：动态规划
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitII = function(prices) {
    if (!prices || prices.length < 2) return 0;
    let dp_i_0 = 0;
    let dp_i_1 = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
    }
    return dp_i_0;
};

/**
 * 解法二：贪心算法
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitII2 = function(prices) {
    if (!prices || prices.length < 2) return 0;
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        profit += Math.max(prices[i + 1] - prices[i], 0);
    }
    return profit;
};

export { maxProfitII, maxProfitII2 };
