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

export { surfaceArea };
