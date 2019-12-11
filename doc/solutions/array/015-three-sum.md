# 15 三数之和 three sum

## 题目描述

给定一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

> 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
>
> 满足要求的三元组集合为：
> [
> [-1, 0, 1],
> [-1, -1, 2]
> ]

## 题目解法

### 思路一：暴力法，三重循环

NOT Accepted, 需要考虑重复值。

```js
var threeSum = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        // 每个人
        for (let j = i + 1; j < nums.length - 1; j++) {
            // 依次拉上其他每个人
            for (let k = j + 1; k < nums.length; k++) {
                // 去问剩下的每个人
                if (nums[i] + nums[j] + nums[k] === 0) {
                    // 我们是不是可以一起组队
                    res.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return res;
};
```

时间复杂度：O(n^3)

### 思路二：排序 + 双指针法

- 特判，对于数组长度 n，如果数组为 null 或者数组长度小于 3，返回 []。
- 对数组进行排序。
- 遍历排序后数组：
  - 若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 0，直接返回结果。
  - 对于重复元素：跳过，避免出现重复解
  - 令左指针 L=i+1，右指针 R=n−1，当 L < R 时，执行循环：
    - 当 nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,R 移到下一位置，寻找新的解
    - 若和大于 0，说明 nums[R] 太大，R 左移
    - 若和小于 0，说明 nums[L] 太小，L 右移

```js
var threeSum = function(nums) {
    const res = [],
        size = nums.length;
    nums.sort((a, b) => a - b); // 升序排列
    for (let k = 0; k < size - 2; k++) {
        if (nums[k] > 0) break; // 三个都是正数，无解
        if (k > 0 && nums[k] === nums[k - 1]) continue; // 跳过重复的目标值下标 k
        let i = k + 1, // 左边界
            j = size - 1, // 右边界
            sum;
        while (i < j) {
            sum = nums[k] + nums[i] + nums[j];
            if (sum < 0) i++;
            // sum 偏小，左下标往右移动
            else if (sum > 0) j--;
            // sum 偏大，右下标往左移动
            else {
                res.push([nums[k], nums[i], nums[j]]);
                while (i < j && nums[i] === nums[i + 1]) i++; // 跳过重复的左下标
                while (i < j && nums[j] === nums[j - 1]) j--; // 跳过重复的右下标
                i++;
                j--;
            }
        }
    }
    return res;
};
```

时间复杂度：O(n^2) 两层循序 O(n^2) + 排序 O(logn)
空间复杂度：O(1)
