# 程序员面试金典 17_16. 按摩师 (The Masseuse)

[返回题解列表](../../../README.md)

## 题目描述

<https://leetcode-cn.com/problems/the-masseuse-lcci/>

## 题目解析

题目问的是最优的预约组合，预约总时长最长，可以使用动态规划来求解这类最优解问题。

1.定义状态
按摩师每天可以有预约或者不预约两种状态，同时今天是否预约，是受到前一天的状态影响。

定义状态列表 dp
dp[i][0] 表示：区间 [0，i] 里接受预约请求，并且下标为 i 的这一天不接受预约的最大时长；
dp[i][1] 表示：区间 [0，i] 里接受预约请求，并且下标为 i 的这一天接受预约的最大时长。

2.状态转移方程
今天不接受预约： `dp[i][0] = max(dp[i - 1][0], dp[i - 1][1])`
今天接受预约：`dp[i][1] = dp[i - 1][0] + nums[i]`

3.初始状态
dp[0][0] = 0;
dp[0][1] = nums[0];

### 解法一

```js
/**
 * 「Cracking the Coding Interview」 NO.17_16 - The Masseuse (按摩师)
 * 解法一：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    if (!nums || nums.length == 0) return 0;
    let n = nums.length;
    let dp = Array.from({ length: n }, () => Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }
    return Math.max(dp[n - 1][0], dp[n - 1][1]);
};
```

时间复杂度：`O(N)` 进行了一次遍历，N 是数组的长度
空间复杂度：`O(N)` 开辟了大小为 2N 的数组

### 解法二：动态规划（压缩空间）

最后的总时长是一个变量，并不需要整个数组来存储状态，中间可以淘汰次优解；

这里用变量

* reject （dp[i][0]）代表第 i 天不接受预约
* accept （dp[i][1]）代表第 i 天接受预约

```js
/**
 * 「Cracking the Coding Interview」 NO.17_16 - The Masseuse (按摩师)
 * 解法二：动态规划（压缩空间）
 * @param {number[]} nums
 * @return {number}
 */
var massage2 = function(nums) {
    if (!nums || nums.length == 0) return 0;
    let n = nums.length;
    let accpet = nums[0];
    let reject = 0;
    let temp;
    for (let i = 1; i < n; i++) {
        temp = reject;
        reject = Math.max(reject, accpet);
        accpet = temp + nums[i];
    }
    return Math.max(accpet, reject);
};
```

时间复杂度：`O(N)` 进行了一次遍历，N 是数组的长度
空间复杂度：`O(1)` 使用了两个变量来存储

这道题目类似于 [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)

[返回题解列表](../../../README.md)
