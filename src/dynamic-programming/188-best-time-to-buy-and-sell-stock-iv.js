/**
 * 解法一：动态规划
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitIV = function(k, prices) {
    if (!prices || prices.length < 2) return 0;
    let n = prices.length;
    if (k > n >> 1) {
        // k = n >> 1; // 1. 去除无效的交易次数，但是在 n 过大的时候仍然会内存溢出
        // k 相当于Infinity，这里可以使用贪心的算法来快速求解 对应的就是 122 题的解法
        let res = 0;
        for (let i = 0; i < n - 1; i++) {
            res += Math.max(prices[i + 1] - prices[i], 0); // 每天进行买卖，如果有盈利则计入 max_profit
        }
        return res;
    }

    let dp = Array.from({ length: n }, () =>
        Array.from({ length: k + 1 }, () => Array(2).fill(0))
    );

    for (let i = 0; i < n; i++) {
        for (let j = k; j > 0; j--) {
            // 初始化值：注意循环里面 k 是最大值，循环变量是 j 而不是 k
            if (i == 0) {
                dp[0][j][0] = 0;
                dp[0][j][1] = -prices[0];
                continue;
            }
            dp[i][j][0] = Math.max(
                dp[i - 1][j][0],
                dp[i - 1][j][1] + prices[i]
            );
            dp[i][j][1] = Math.max(
                dp[i - 1][j][1],
                dp[i - 1][j - 1][0] - prices[i] // j - 1 而不是 j
            );
        }
    }

    return dp[n - 1][k][0];
};

/**
 * 解法二：一维数组
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitIV2 = function(k, prices) {
    if (!prices || prices.length < 2) return 0;
    let n = prices.length;
    if (k > n >> 1) k = n >> 1; // trim
    let profit = Array.from({ length: k });

    // base case
    for (let j = 0; j <= k; j++) {
        profit[j] = {
            profit_buy: -prices[0],
            profit_sell: 0
        };
    }

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            profit[j] = {
                profit_buy: Math.max(
                    profit[j].profit_buy,
                    profit[j - 1].profit_sell - prices[i] // j - 1 次交易后，第 i 天选择买入
                ),
                profit_sell: Math.max(
                    profit[j].profit_sell,
                    profit[j].profit_buy + prices[i]
                )
            };
        }
    }
    return profit[k].profit_sell;
};

export { maxProfitIV, maxProfitIV2 };
