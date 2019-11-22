/**
 * @description
        Given an array of integers, return indices of the two numbers such that they add up to a specific target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
    let memorized = [];
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (memorized[complement] != undefined) {
            return [memorized[complement], i];
        }
        memorized[nums[i]] = i;
    }
    return [];
}
