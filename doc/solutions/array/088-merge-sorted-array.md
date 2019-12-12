# 88 合并两个有序数组 merge sorted array

## 题目描述

<https://leetcode-cn.com/problems/merge-sorted-array/>

## 题解

### 方法一

两个一维数组合并，想到可能用双指针法，分别记录两个数组的下标。

这里需要注意的是 nums1 本身 length 足够，而且为了不覆盖头部元素，所以选择从 nums1 尾部遍历覆盖

```js
var merge = function(nums1, m, nums2, n) {
    // 由于 nums1 数组大小足够大，可以放下 m + n 个元素，选择从后往前遍历添加元素
    // 设置三个指针
    let p = m + n - 1,
        p1 = m - 1,
        p2 = m - 2;
    while (p1 >= 0 && p2 >= 0)
        nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];

    // 如果 p2 >0 代表 nums2 还有剩余元素，将其继续添加到 nums1 中
    while (p2 >= 0) nums1[p--] = nums2[p2--];
};
```

时间复杂度：O(m + n)
空间复杂度：O(1)
