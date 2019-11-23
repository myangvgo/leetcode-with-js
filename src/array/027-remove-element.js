/**
 * @description
 *      Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 *      Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *      The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // two pointer
    // define [0, ... , k] as the non-val array
    // copy and replace elements in the original nums array
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k++] = nums[i]; // copy and replace
        }
    }
    nums.length = k; // shorten the size of nums array, i.e. remove the elements in place
    return k;
};

export { removeElement };
