/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitIII = function(prices) {
    if (!prices || prices.length < 2) return 0;
    const MAX_K = 2;
    let n = prices.length;
    // create a dp table dp[i][k][0, 1]
    let dp = Array.from({ length: n }, () =>
        Array.from({ length: MAX_K + 1 }, () => Array(2).fill(0))
    );

    for (let i = 0; i < n; i++)
        for (let k = MAX_K; k >= 1; k--) {
            if (i === 0) {
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[i];
                continue;
            }
            dp[i][k][0] = Math.max(
                dp[i - 1][k][0],
                dp[i - 1][k][1] + prices[i]
            );
            dp[i][k][1] = Math.max(
                dp[i - 1][k][1],
                dp[i - 1][k - 1][0] - prices[i]
            );
        }

    return dp[n - 1][MAX_K][0];
};

/**
 * 写法二：k = 2 将循环的内容直接写出来
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitIII2 = function(prices) {
    if (!prices || prices.length < 2) return 0;
    let n = prices.length;
    let dp_i_1_0 = 0;
    let dp_i_1_1 = Number.MIN_SAFE_INTEGER;
    let dp_i_2_0 = 0;
    let dp_i_2_1 = Number.MIN_SAFE_INTEGER;
    for (let price of prices) {
        dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + price);
        dp_i_1_1 = Math.max(dp_i_1_1, -price); // dp_i_0_0 = 0;
        dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + price);
        dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - price);
    }
    return dp_i_2_0;
};

export { maxProfitIII, maxProfitIII2 };
