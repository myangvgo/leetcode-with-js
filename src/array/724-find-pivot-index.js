/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0;
    let sum = nums.reduce((prev, curr) => prev + curr, 0);
    for (let i = 0; i < nums.length; i++) {
        if (left === sum - left - nums[i]) {
            return i;
        } else {
            left += nums[i];
        }
    }
    return -1;
};

export { pivotIndex }