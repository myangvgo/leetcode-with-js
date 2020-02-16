/**
 * 解法一：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let len = nums.length;
    if (len == 0) return 0;

    let dpMax = Array.from({ length: len });
    let dpMin = Array.from({ length: len });
    let maxProd = nums[0];
    dpMax[0] = nums[0];
    dpMin[0] = nums[0];

    for (let i = 1; i < len; i++) {
        dpMax[i] = Math.max(
            dpMax[i - 1] * nums[i],
            nums[i],
            dpMin[i - 1] * nums[i]
        );
        dpMin[i] = Math.min(
            dpMax[i - 1] * nums[i],
            nums[i],
            dpMin[i - 1] * nums[i]
        );
        maxProd = Math.max(dpMax[i], maxProd);
    }

    return maxProd;
};

/**
 * 解法二：动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct2 = function(nums) {
    let len = nums.length;
    if (len == 0) return 0;

    let dpMax = nums[0];
    let dpMin = nums[0];
    let maxProd = nums[0];

    for (let i = 1; i < len; i++) {
        let prevMax = dpMax;
        dpMax = Math.max(dpMax * nums[i], nums[i], dpMin * nums[i]);
        dpMin = Math.min(dpMin * nums[i], nums[i], prevMax * nums[i]);
        maxProd = Math.max(dpMax, maxProd);
    }
    return maxProd;
};

export { maxProduct, maxProduct2 };
