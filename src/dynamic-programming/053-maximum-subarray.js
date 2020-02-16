/** 解法一：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = nums;
    for (let i = 1; i < nums.length; i++)
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    return Math.max(...dp);
};

/** 解法二：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function(nums) {
    let res = nums[0];
    let sum = 0; // 使用 sum 表示当前的最大连续子序列的和
    for (let num of nums) {
        if (sum > 0) sum += num;
        else sum = num;
        res = Math.max(res, sum);
    }
    return res;
};

export { maxSubArray, maxSubArray2 };
