/**
 * @summary 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 或 3 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param {number} n
 * @return {number}
 */
var climbStairsII = function(n) {
    /**
     * n = 0,   f(0) = 0
     * n = 1,   f(1) = 1
     * n = 2,   f(2) = f(1) + 1 = 2
     * n >= 3,  f(3) = f(3 - 1) + f(3 - 2) + f(3 - 3)
     */

    let stairs = [0, 1, 2];
    if (n <= 2) return n;
    for (let i = 3; i <= n; i++) {
        stairs[i] = stairs[i - 1] + stairs[i - 2] + stairs[i - 3];
    }
    return stairs[n];
};

/**
 * @todo 写出动态递推方程
 * @summary 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 或 3 个台阶。同时，相邻两步的步伐不能相同。
 * 你有多少种不同的方法可以爬到楼顶呢？
 * @param {number} n
 * @return {number}
 */
var climbStairsIII = function(n) {
    /**
     * n = 0,   f(0, lastStep = 0) = 0
     * n = 1,   f(1, lastStep = 1) = 1
     * n = 2,   f(2, lastStep = 2) = f(2 - 1) - 1 + 1 = 1
     * n = 3,   f(3, lastStep = 1, 2, 3) = f(3 - 2, 2) + f(3 - 3, 3) + f(3 - 1, 1) + f(3 - 3, 3) + f(3 - 1, 1) + f(3 - 2, 2)
     *                                   = f(1, 2) + f(0, 3) + f(2, 1) + f(0, 3)
     * n = 4,   f(4, 1) = f(4 - 2, 2) + f(4 - 3, 3) = f(2, 2) + f(1, 3)
     *          f(4, 2) = f(4 - 1, 1) + f(4 - 3, 3) = f(3, 1) + f(1, 3)
     *          f(4, 3) = f(4 - 1, 1) + f(4 - 2, 2) = f(3, 1) + f(2, 2)
     */
};

export { climbStairsII };
