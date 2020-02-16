# 198 打家劫舍

## 题目描述

<https://leetcode-cn.com/problems/house-robber/>

## 题目解析

题目是求可以偷窃到的最高金额，也就是求最大值的问题，可以用动态规划来解决。套用动态规划的解题三部曲：

- 重复子问题（进行分治）

- 状态数组定义

- 状态转移方程

考虑到题目中输入的是一个数组 nums ，nums[i] 表示该房子的可偷窃金额，max_amount[i] 表示偷窃到 num[i] 为止的总金额。
联想到斐波拉契或者爬楼梯问题，尝试定义子问题 max_amount[i] = max_amount[i - 1] + nums[i] （第 i - 1 个房子没有偷）；max_amount[i] = max_amount[i - 1]（第 i - 1 个房子偷了）；所以这里还需要记录每个房子偷还是没偷的状态。

最简单的方式，就是在一维数组的基础上增加到二维数组。状态表示变为：max_amount[i][0, 1] （0 表示没有偷，1 表示偷了）。

子问题就变为：

- 选择不偷第 i 个房子：那么第 i - 1 个房子可以偷，可以不偷，需要分别计算出金额，取最大值
- 选择偷第 i 个房子，那么第 i - 1 个房子不可以偷，但是 nums[i] 可以偷
- 取两者的最大值

状态转移方程为：

- max_amount[i][0] = Max(max_amount[i - 1][0], max_amount[i - 1][1])
- max_amount[i][1] = max_amount[i - 1][0] + nums[i]

### 解法一：动态规划

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums || !nums.length) return 0;
    let n = nums.length;
    let dp = Array.from({ length: n }, () => Array(2));
    dp[0][0] = 0;       //  base case: not robbing the first house
    dp[0][1] = nums[0]; //  base case: robbing the first house

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }

    return Math.max(dp[n - 1][0], dp[n - 1][1]);
};
```

时间复杂度：O(n)：一次循环，n 为房屋的个数
空间复杂度：O(n)：开辟了一个 2 x n 的二维数组

### 解法二：动态规划（一维数组）

解法一借助了[0, 1]数组升维来定义状态，那么为了简化状态，可以将 max_amount[i] 定义为 0 - i 天，第 i 天必偷的总金额。
那么最后的结果就变成 Max(max_amount[0], max_amount[1], ... , max_amount[i])

状态转移方程就变成了 max_amount[i] = Max(max_amount[i - 1], max_amount[i - 2] + nums[i])

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function(nums) {
    if (!nums || !nums.length) return 0;
    if (nums.length < 2) return nums[0];
    let dp = Array.from({ length: nums.length });
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++)
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);

    return Math.max(...dp);
};
```

时间复杂度：O(n)：一次循环，n 为房屋的个数
空间复杂度：O(n)：开辟了一个大小为 n 的数组

### 解法三：动态规划（优化空间）

解法二中，由于每次循环递推只用到了 dp[i], dp[i - 1], dp[i - 2] 所以不需要用整个数组来存储，可以使用两个变量来代替，从而节省空间。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob3 = function(nums) {
    if (!nums || !nums.length) return 0;
    let prevSum = 0,
        currSum = 0;
    for (let num of nums) {
        let temp = currSum;
        currSum = Math.max(currSum, prevSum + num);
        prevSum = temp;
    }

    return currSum;
};
```

时间复杂度：O(n)：一次循环，n 为房屋的个数
空间复杂度：O(1)：只用到了三个变量
