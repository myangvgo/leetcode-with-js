# 309.[最佳买卖股票时机含冷冻期](Best Time To Buy And Sell Stock With Cooldown)

## 题目描述

<https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/>

## 题目解析

每次 sell 之后要等一天才能继续交易，这里的冷冻期可以理解为：只要不持股过了一天，就一直处于冷冻期，直到再购入股票为止。
所以如果第 i 天如果买入了股票，那么要从第 i - 2 天的状态，才能转移过来。

```txt
k = infinity
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
```

### 解法一

```js
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
```

时间复杂度：O(n)
空间复杂度：O(n)

### 解法二

```js
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
```

时间复杂度：O(n)
空间复杂度：O(1)
