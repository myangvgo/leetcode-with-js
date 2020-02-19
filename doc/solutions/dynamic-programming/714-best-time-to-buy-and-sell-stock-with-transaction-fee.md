# 714.[买卖股票的最佳时机含手续费](Best Time To Buy And Sell Stock With Transaction Fee)

## 题目描述

<https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/>

## 题目解析

完整的一次交易包含了买入和卖出股票，所以手续费的扣除只需要一次，可以在买入或者卖出的时候扣除。

更新后的动态递归方程为：

```txt
dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee); // 这里规定在卖出的时候扣除手续费
dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
```

### 解法一：动态规划

```js
/**
 * 动态规划
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
```

时间复杂度：O(n)
空间复杂度：O(n)

### 解法二：动态规划（压缩空间）

```js
/**
 * max profit with transaction fee
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfitVI = function(prices, fee) {
    if (!prices || prices.length < 2) return 0;
    let dp_i_0 = 0;
    let dp_i_1 = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i] - fee);
        dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
    }
    return dp_i_0;
};
```

时间复杂度：O(n)
空间复杂度：O(1)
