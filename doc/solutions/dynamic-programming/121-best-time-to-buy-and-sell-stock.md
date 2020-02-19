# 121.[买卖股票的最佳时期] (Best Time To Buy And Sell Stock)

## 题目描述

<https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock>

## 题目解析

### 解法一：动态规划（根据模板递推）

```txt
穷举所有的「状态」，再找出每种状态对应的「选择」，根据对应的「选择」来更新状态。
状态 1：交易的天数
状态 2：当前持有的状态（1 - 持有，0 - 不持有）
状态 3：交易的限制次数

某一天的最大利润和可以表示为 dp[i][k][0, 1] （其中 0 <= i = n - 1; 1 <= k <= K）

所以共有 n x K x 2 种状态。

for 0 <= i < n
    for 1 <= k <= K
        for s in {0, 1}
        dp[i][k][s] = max(buy, sell, rest)

根据上述规则，状态转移方程可以表示为
// 第 i 天没有持有股票的总利润 = max((第 i - 1 天没有持有股票，同时今天选择了休息), ((第 i - 1 天持有股票，今天卖出股票))
dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
// 第 i 天持有股票的总利润 = max((第 i - 1 天持有股票，同时今天选择了休息), ((第 i - 1 天不持有股票，今天买入股票))
dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])

定义 base case 初始化值
dp[-1][k][0] = 0; // i = -1 表示还未开始，没有持有任何股票，利润为0
dp[-1][k][1] = -Infinity; // i = -1 交易还未开始，这个时候持有了股票，是不允许的，使用 -Infinity 来表示
dp[i][0][0] = 0; // k = 0 表示不允许交易，没有持有任何股票，利润为0
dp[i][0][1] = -Infinity; // k = 0 表示不允许交易，这个时候持有了股票，是不允许的，使用 -Infinity 来表示
```

本题是针对 k = 1 的情况，套用公式：
dp[i][1][0] = max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i]);
dp[i][1][1] = max(dp[i - 1][1][1], dp[i - 1][1 - 1][0] - prices[i])
            = max(dp[i - 1][1][1], -prices[i]); // dp[i - 1][0][0] = 0

由于 k = 1 不再改变，可以去掉这个状态，上述方程可以进一步简化为：
dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
dp[i][1] = max(dp[i - 1][1], -prices[i]);

结合 i = 0 base case，处理 i = 1 的情况作为新的 base case:

dp[0][0] = max(dp[-1][0], dp[-1][1] + prices[0]) = max(0, -Infinity + prices[0]) = 0;
dp[0][1] = max(dp[-1][1], -prices[0]) = max(-Infinity, -prices[0]) = -prices[0];

```js
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
```

时间复杂度：O(n)
空间复杂度：O(n) 使用了一个 2n 大小的数组

### 解法二：动态规划，压缩空间

解法一中的状态转移方程只和相邻的状态有关，所以不需要存储整个数组，只要使用两个变量就可以。

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length === 0) return 0;
    // set base case
    let dp_i_0 = 0;
    let dp_i_1 = Number.NEGATIVE_INFINITY;
    // 从 i = 0 开始，如果 i = 1 的话，dp_i_1 = -prices[0]
    for (let i = 0; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
};
```

时间复杂度：O(n)
空间复杂度：O(1)
