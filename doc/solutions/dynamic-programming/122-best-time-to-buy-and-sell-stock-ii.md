# 122.[买卖股票的最佳时机 II] (Best Time To Buy And Sell Stock II)

## 题目描述

<https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/>

## 题目解析

### 解法一

套用股票买卖系列的动态规划模板

k = Infinity
dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);

k 没有影响状态，简化之后
dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i]);

```js
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
```

时间复杂度：O(N)
空间复杂度：O(1)

### 解法二

“贪心算法” 和 “动态规划”、“回溯搜索” 算法一样，完成一件事情，是分步决策的；
“贪心算法” 在每一步总是做出在当前看来最好的选择，我是这样理解 “最好” 这两个字的意思：
“最好” 的意思往往根据题目而来，可能是 “最小”，也可能是 “最大”；

贪心算法和动态规划相比，它既不看前面（也就是说它不需要从前面的状态转移过来），也不看后面（无后效性，后面的选择不会对前面的选择有影响），因此贪心算法时间复杂度一般是线性的，空间复杂度是常数级别的。

从第 i 天（这里 i >= 1）开始，与第 i - 1 的股价进行比较，如果股价有上升（严格上升），就将升高的股价（ prices[i] - prices[i- 1] ）记入总利润，按照这种算法，得到的结果就是符合题意的最大利润。
