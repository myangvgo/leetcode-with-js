# 188.[买卖股票的最佳时机 IV](Best Time To Buy And Sell Stock IV)

## 题目描述

<https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/>

## 题目解析

一次交易至少需要 2 天，一天买，一天卖，最多就是 n / 2 次交易。因此如果 k 很大，大到大于等于 n / 2，那么其余的交易次数是用不到的。

- 可以将 k 减少到 n / 2 次 （去除多余的的交易次数）

- 或者意味着每天都可以买或卖来完成交易，所以这里相当于交易次数不再影响股票的买和卖，就相当于股票系列的第 2 题，使用贪心算法去做就可以了。这是一个特判。

关于递归公式的理解

```txt
dp[i][j] = maximum profit from at most i transactions using prices[0..j]

Now on day j:
    1. Do nothing (or buy) which doesn't change the acquired profit : dp[i][j] = dp[i][j-1]

    2. Sell the stock: In order to sell the stock, you must've bought it on a day t=[0..j-1].
    Maximum profit that can be attained is t: 0->j-1 max(prices[j] - prices[t] + dp[i-1][t-1])
    where (prices[j]-prices[t]) is the profit from buying on day t and selling on day j.
    (dp[i-1][t-1]) is the maximum profit that can be made with at most i-1 transactions with prices[0..t-1].

t: 0->j-1 max(prices[j]-prices[t]+dp[i-1][t-1]) 等价于 prices[j] + t:0->j-1 max(dp[i-1][t-1]-prices[t])

这样可以将时间复杂度从 O(n^2 x k) 降到 O(n x k)
```

### 解法一

```js
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
```

时间复杂度：O(n * k) 循环了 n x k 次
空间复杂度：O(n * k) 开辟了一个 2 x n x (k + 1) 大小的数组

### 解法二

```js
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
```

时间复杂度：O(n * k) 循环了 n x k 次
空间复杂度：O(k) 开辟了一个 k 大小的数组
