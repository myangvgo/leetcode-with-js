/** 解法一：动态规划（使用二维数组）
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || !nums.length) return 0;
    let n = nums.length;
    let dp = Array.from({ length: n }, () => Array(2));
    dp[0][0] = 0;
    dp[0][1] = nums[0];

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }

    return Math.max(dp[n - 1][0], dp[n - 1][1]);
};

/** 解法二：动态规划（使用一维数组）
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function(nums) {
    if (!nums || !nums.length) return 0;
    if (nums.length < 2) return nums[0];
    let dp = Array.from({ length: nums.length });
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++)
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);

    return Math.max(...dp);
};

/**
 * 解法三：动态规划（优化空间）
 * @param {number[]} nums
 * @return {number}
 */
var rob3 = function(nums) {
    if (!nums || !nums.length) return 0;
    let prevSum = 0,
        currSum = 0;
    for (let num of nums) {
        let temp = currSum;
        currSum = Math.max(currSum, prevSum + num);
        prevSum = temp;
    }

    return currSum;
};

export { rob, rob2, rob3 };
