# 053 最大子序列和

## 题目描述

<https://leetcode-cn.com/problems/maximum-subarray>

## 题目解析

最大子序列和等于当前元素自身最大，或者包含之前所有的子序列和最大。

动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
每次比较 sum 和 ans 的大小，将最大值置为 ans，遍历结束返回结果

### 使用动态规划解题步骤

- 分治（分解子问题）max_sum(i) = Math.max(max_sum(i - 1), 0) + nums[i]
  子问题就是元素 i 的累加和 等于 选择了前面 (i - 1) 个元素的累加和，和不选（0）的和 + 自身元素的和

- 状态数组定义 f[i]

- DP 方程
  f(i) = Math.max(f(i - 1), 0) + nums[i];

```js
/** 解法一：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = nums;
    for (let i = 1; i < nums.length; i++)
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    return Math.max(...dp);
};
```

时间复杂度：O(n)
空间复杂度：O(n)

这里可以进一步优化空间，使用一个变量 sum 来记录最长的子序列和，就不需要开辟整个数组了

```js
/** 解法二：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function(nums) {
    let res = nums[0];
    let sum = 0; // 使用 sum 表示当前的最大连续子序列的和
    for (let num of nums) {
        if (sum > 0) sum += num;
        else sum = num;
        res = Math.max(res, sum);
    }
    return res;
};
```

时间复杂度：O(n)
空间复杂度：O(1)
