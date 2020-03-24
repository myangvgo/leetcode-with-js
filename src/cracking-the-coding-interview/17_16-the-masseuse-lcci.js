/**
 * 「Cracking the Coding Interview」 NO.17_16 - The Masseuse (按摩师)
 * 解法一：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    if (!nums || nums.length == 0) return 0;
    let n = nums.length;
    let dp = Array.from({ length: n }, () => Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }
    return Math.max(dp[n - 1][0], dp[n - 1][1]);
};

/**
 * 「Cracking the Coding Interview」 NO.17_16 - The Masseuse (按摩师)
 * 解法二：动态规划（压缩空间）
 * @param {number[]} nums
 * @return {number}
 */
var massage2 = function(nums) {
    if (!nums || nums.length == 0) return 0;
    let n = nums.length;
    let accpet = nums[0];
    let reject = 0;
    let temp;
    for (let i = 1; i < n; i++) {
        temp = reject;
        reject = Math.max(reject, accpet);
        accpet = temp + nums[i];
    }
    return Math.max(accpet, reject);
};

export { massage, massage2 };
