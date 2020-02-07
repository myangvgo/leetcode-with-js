# 169 多数元素

## 题目描述

<https://leetcode-cn.com/problems/majority-element/>

## 题目解析

### 解法一：使用分治法

求解数组中众数的问题，可以化解成求解数组左边一半的众数和右边一半的众数。
这里可以使用分治法递归求解，直至所有的子问题都是数组长度为 1 的数组。
（1） 如果数组中只有一个元素，那么该数为众数
（2）如果回溯之后，数组区间的长度大于 1， 需要将左右子区间进行合并。若众数相同，则直接返回该众数，否则需要计算两个众数在整个区间出现的次数来决定众数。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return findMajorityElement(nums, 0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const findMajorityElement = (nums, low, high) => {
    if (low === high) return nums[low]; // 左右下标重合，数组中只有一个数，即为众数，直接返回

    // 分别计算数组左右区间的众数
    let mid = Math.floor((high - low) / 2 + low);
    let left = findMajorityElement(nums, low, mid);
    let right = findMajorityElement(nums, mid + 1, high);

    if (left === right) return left;

    // 需要比较左右区间的众数在全局区间出现的次数，来决定众数
    let leftCount = countInRange(nums, left, low, high);
    let rightCount = countInRange(nums, right, low, high);

    return leftCount > rightCount ? leftCount : rightCount;
};

/**
 * 计算 num 在整个数组中出现的次数
 * @param {number[]} nums
 * @param {number} num
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countInRange = (nums, num, low, high) => {
    let count = 0；
    for (let i = low; i <= high; i++) {
        if(nums[i] === num) count++;
    }
    return count;
}
```

#### 复杂度分析

- 时间复杂度

函数 findMajorityElement 会求解两个长度为 n / 2 的子问题，并作两遍长度为 n 的线性扫描，所以分治算法的时间复杂度可以表示为：

`T(n) = 2T(n / 2) + 2n`，根据主定理，时间复杂度可以表示为 O(NlogN)

- 空间复杂度

由于递归树的深度是 logN，所以空间复杂度是 O(logN)

### 解法二：使用 Boyer-Moore 投票法

如果我们把众数记为 +1 ，把其他数记为 −1 ，将它们全部加起来，显然和大于 0

我们维护一个计数器，如果遇到一个我们目前的候选众数，就将计数器加一，否则减一。
只要计数器等于 0 ，我们就将 nums 中之前访问的数字全部 忘记 ，并把下一个数字当做候选的众数。
最后，总有一个后缀满足计数器是大于 0 的，此时这个后缀的众数就是整个数组的众数。

```js
var majorityElement = function(nums) {
    let count = 0;
    let candidate;
    for (let num of nums) {
        if (count === 0) candidate = num; // 选取新的众数
        count += (candidate === num) ? 1 : -1;
    }
    return candidate;
}
```
