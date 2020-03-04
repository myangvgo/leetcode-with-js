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
    // 以当前层的腐烂橘子，向上下左右四个方向腐烂新鲜的橘子；
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // 先查找初始状态已经腐烂的橙子，添加到队列之中
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) queue.push([i, j, 0]);
        }

    // 处理已经腐烂的橘子
    while (queue.length > 0) {
        const [i, j, minutesUsed] = queue.shift();
        minutes = minutesUsed; // 更新全局累计使用的时间
        for (let k = 0; k < dx.length; k++) {
            let x = i + dx[k];
            let y = j + dy[k];
            // 注意边界条件
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

export { orangesRotting };
