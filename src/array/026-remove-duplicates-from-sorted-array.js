/**
 * @description
 *      Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 *      Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) return nums.length;

    let p = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[p] !== nums[i]) {
            p++;
            nums[p] = nums[i];
        }
    }
    nums.length = p + 1; // shorten nums array
    return p + 1;
};

export { removeDuplicates };
