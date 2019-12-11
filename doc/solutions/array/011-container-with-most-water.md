# 11. 盛最多水的容器 container with most water

## 题目描述

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点  (i, ai) 。在坐标内画 n 条垂直线，垂直线 i  的两个端点分别为  (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与  x  轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且  n  的值至少为 2。

> 示例:
>
> 输入: [1,8,6,2,5,4,8,3,7]
> 输出: 49

## 题目解法

### 方法一：暴力枚举

#### 思路

通过两个嵌套循环，枚举出所有可能的面积，然后找出最大值

时间复杂度：O(n^2)
空间复杂度：O(1)

```js
var maxArea = function(height) {
    let areaMax = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            areaMax = Math.max(
                areaMax,
                Math.min(height[i], height[j]) * (j - i)
            );
        }
    }
    return areaMax;
};
```

### 方法二：双指针法

使用双指针法，操作一维数组的下标，变换 i, j, 从左右边界，向中间收敛。

每个矩形的面积是 min(height[l], height[r]) \* 宽度(r - l)

只需要一次遍历，所以

时间复杂度：O(n)
空间复杂度：O(1)

```js
var maxArea2 = function(height) {
    let areaMax = 0;
    for (let i = 0, j = height.length - 1; i < j; ) {
        const minHeight = height[i] < height[j] ? height[i++] : height[j--]; // 求矩形高度，同时移动对应的指针
        areaMax = Math.max(areaMax, minHeight * (j - i + 1)); // 矩形的宽度加一，抵消上述指针提前移动的影响
    }
    return areaMax;
};
```
