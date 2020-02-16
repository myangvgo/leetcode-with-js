# 152. 乘积最大子序列

## 题目描述

<https://leetcode-cn.com/problems/maximum-product-subarray/>

## 题目解析

这题是求数组中子区间的最大乘积，对于乘法，我们需要注意，负数乘以负数，会变成正数，所以解这题的时候我们需要维护两个变量，当前的最大值，以及最小值，最小值可能为负数，但没准下一步乘以一个负数，当前的最大值就变成最小值，而最小值则变成最大值了。

我们的动态方程可能这样：

dpMax[i + 1] = max(dpMax[i] x A[i + 1], A[i + 1], dpMin[i] x A[i + 1])
dpMin[i + 1] = min(dpMin[i] x A[i + 1], A[i + 1], dpMax[i] \* A[i + 1])
dp[i + 1] = max(dp[i], dpMax[i + 1])

这里，我们还需要注意元素为 0 的情况，如果 A[i]为 0，那么 dpMax 和 dpMin 都为 0

```js
/**
 * 解法一：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let len = nums.length;
    if (len == 0) return 0;

    let dpMax = Array.from({ length: len });
    let dpMin = Array.from({ length: len });
    let maxProd = nums[0];
    dpMax[0] = nums[0];
    dpMin[0] = nums[0];

    for (let i = 1; i < len; i++) {
        dpMax[i] = Math.max(
            dpMax[i - 1] * nums[i],
            nums[i],
            dpMin[i - 1] * nums[i]
        );
        dpMin[i] = Math.min(
            dpMax[i - 1] * nums[i],
            nums[i],
            dpMin[i - 1] * nums[i]
        );
        maxProd = Math.max(dpMax[i], maxProd);
    }

    return maxProd;
};
```

时间复杂度：O(n)
空间复杂度：O(n)

这里可以优化存储空间

```js
/**
 * 解法二：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct2 = function(nums) {
    let len = nums.length;
    if (len == 0) return 0;

    let dpMax = nums[0];
    let dpMin = nums[0];
    let maxProd = nums[0];

    for (let i = 1; i < len; i++) {
        let prevMax = dpMax;
        dpMax = Math.max(dpMax * nums[i], nums[i], dpMin * nums[i]);
        dpMin = Math.min(dpMin * nums[i], nums[i], prevMax * nums[i]);
        maxProd = Math.max(dpMax, maxProd);
    }
    return maxProd;
};
```

时间复杂度：O(n)
空间复杂度：O(1)
