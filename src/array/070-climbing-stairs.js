/**
 * 方法一：使用动态规划 Fibnacci
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    let [f1, f2, f3] = [1, 2, 3];
    for (let i = 3; i <= n; i++) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f3;
};

/**
 * 方法二：使用动态规划 Fibnacci （数组）
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function(n) {
    const arr = [];
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

export { climbStairs, climbStairs2 };
