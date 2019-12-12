# 189 旋转数组 rotate array

## 题目描述

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

> 示例 1:
>
> 输入: [1,2,3,4,5,6,7] 和 k = 3
> 输出: [5,6,7,1,2,3,4]
> 解释:
> 向右旋转 1 步: [7,1,2,3,4,5,6]
> 向右旋转 2 步: [6,7,1,2,3,4,5]
> 向右旋转 3 步: [5,6,7,1,2,3,4]
>
> 示例 2:
>
> 输入: [-1,-100,3,99] 和 k = 2
> 输出: [3,99,-1,-100]
> 解释:
> 向右旋转 1 步: [99,-1,-100,3]
> 向右旋转 2 步: [3,99,-1,-100]

说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。

## 题解

### 方法一：暴力法

外层循环记录移动的趟数，内层循环 当前数组群移操作

时间复杂度 O(n * k)
空间复杂度 O(1)

```js
var rotate = function(nums, k) {
    const size = nums.length;
    if (size < 2) return;
    const offset = k % size;
    for (let i = 0; i < offset; i++) {
        // 外层循环记录移动趟数
        // 内层循环数组群移
        let temp = nums[size - 1];
        for (let j = size - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = temp;
    }
};
```

### 方法二：数组反转

思路是：先将数组 arr 整体反转，然后将数组 arr[0, k - 1] 反转，再将数组 arr[k, size - 1] 反转

时间复杂度：O(n) 两次反转整体操作为 O(n);
空间复杂度：O(1)

```js
var rotate2 = function(nums, k) {
    const size = nums.length;
    if (size < 2) return;
    const offset = k % size;
    nums.reverse(); // 1. 反转整个数组
    reversePartial(nums, 0, offset - 1); // 2. 反转左半部分数组
    reversePartial(nums, offset, size - 1); // 2. 反转右半部分数组
};

// 反转数组中指定区间的元素
const reversePartial = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};
```
