# 「LeetCode」 994.[腐烂的橘子](Rotting Oranges)

## 题目描述

<https://leetcode-cn.com/problems/rotting-oranges/>

## 题目解析

BFS 可以看成是层序遍历。从某个结点出发，BFS 首先遍历到距离为 1 的结点，然后是距离为 2、3、4…… 的结点。因此，BFS 可以用来求最短路径问题。BFS 先搜索到的结点，一定是距离最近的结点.

算法思路

- 先找出腐烂了的橘子，添加进入 queue 中
- 队列入队的时候，只让腐烂的橘子出队列
- 队列不为空时，出队腐烂的橘子，同时将该腐烂橘子四周新鲜的橘子标记为腐烂。
  - 新标记为腐烂的橘子入队，同时腐烂延续时间在当前时间上加一
- 队列为空，检查是否含有新鲜橘子
  - 如果还有腐烂不到的新鲜橘子，返回 -1
  - 否则返回腐烂时间

相似的解题思路还有岛屿数量。

### 解法

```js
/**
 * LeetCode NO.994 - Rotting Oranges (腐烂的橘子)
 * @summary BFS 广度优先搜索 + Floodfill
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];
    let minutes = 0;

    // 先查找初始状态已经腐烂的橙子，添加到队列之中
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) queue.push([i, j, 0]);
        }

    // 处理已经腐烂的橘子
    while (queue.length > 0) {
        let [i, j, minutesUsed] = queue.shift();
        minutes = minutesUsed; // 更新全局累计使用的时间
        // 以当前层的腐烂橘子，向上下左右四个方向腐烂新鲜的橘子；
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, -1];
        for (let k = 0; k < dx.length; k++) {
            let x = i + dx[k];
            let y = j + dy[k];
            if (x >= 0 && x < m && y >= 0 && y < n) {
                if (grid[x][y] == 1) {
                    grid[x][y] = 2; // 腐烂新鲜橘子
                    queue.push([x, y, minutesUsed + 1]); // 将腐烂后的橘子加入队列
                }
            }
        }
    }

    // 检查是否有还有新鲜橘子
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) if (grid[i][j] == 1) return -1;

    return minutes;
};
```

时间复杂度：`O(m * n)` m 为网格的行数，n 为网格的列数；BFS 时每个网格访问且处理了一次，查找腐烂橘子和新鲜橘子各遍历了网格一次，所以复杂度是 `O(3 * m * n)`
空间复杂度：`O(m * n)` 开辟了一个队列，队列中最多需要存储 m * n 个橘子
