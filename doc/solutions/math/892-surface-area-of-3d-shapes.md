# LeetCode 892. 三维形体的表面积 (Surface Area Of 3d Shapes)

[返回题解列表](../../../README.md)

## 题目描述

<https://leetcode-cn.com/problems/surface-area-of-3d-shapes/>

## 题目解析

通过画图，发现如果两个正方形有重叠，那么面积就要减去 2；
重叠的情形有以下三种：

1、垂直累加上去的；

这部分特别好计算，只要是当前单元格的值严格大于 1，就有重叠的部分，重叠的部分是当前单元格的值 - 1。

2、一行一行看，重叠的部分；

重叠的部分是相邻两个单元格在行的视角的值的最小值。

3、一列一列看，重叠的部分；

重叠的部分是相邻两个单元格在列的视角的值的最小值。

`总面积 = 正方体个数 * 6 - 重叠面的个数 * 2`

### 解法

```js
/**
 * LeetCode NO.892 - Surface Area Of 3d Shapes (三维形体的表面积)
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let vOverlap = 0;
    let rowOverlap = 0;
    let colOverlap = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            count += grid[i][j];
            if (grid[i][j] > 1) vOverlap += grid[i][j] - 1;
            if (i > 0) colOverlap += Math.min(grid[i - 1][j], grid[i][j]);
            if (j > 0) rowOverlap += Math.min(grid[i][j - 1], grid[i][j]);
        }
    return count * 6 - (vOverlap + rowOverlap + colOverlap) * 2;
};
```

时间复杂度：`O(M*N)` 单元格的总数
空间复杂度：`O(1)` 只需要常数个变量

[返回题解列表](../../../README.md)
