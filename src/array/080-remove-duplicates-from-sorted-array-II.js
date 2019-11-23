/**
 * @description
 *      Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
 *      Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesII = function(nums) {
    // maintain a k-length array based on the original array as the new array.
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (k < 2 || nums[i] !== nums[k - 2]) {
            nums[k++] = nums[i];
        }
    }
    return k;
};

export { removeDuplicatesII };
