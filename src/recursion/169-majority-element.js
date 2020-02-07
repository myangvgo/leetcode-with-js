/**
 * 解法一：使用分治法来处理
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return findMajorityElement(nums, 0, nums.length - 1);
};

/**
 * @param {number[]} nums 数组
 * @param {number} low  数组左边界下标
 * @param {number} high 数组右边界下标
 * @return {number} 众数
 */
const findMajorityElement = (nums, low, high) => {
    // 终止条件：当前数组里面只有一个元素，也就是众数
    if (low === high) return nums[low];

    // 使用二分法，分别处理左右数组区间
    let mid = Math.floor((high - low) / 2 + low); // 需要注意 JS Number 的处理
    let left = findMajorityElement(nums, low, mid);
    let right = findMajorityElement(nums, mid + 1, high);

    if (left === right) return left; // 左右数组区间的众数相同，直接返回

    // 计算左右众数个数
    let leftCount = countInRange(nums, left, low, high);
    let rightCount = countInRange(nums, right, low, high);

    return leftCount > rightCount ? left : right;
};

/**
 * 统计数组区间内元素 num 出现的次数
 * @param {number[]} nums
 * @param {number} num
 * @param {number} low
 * @param {number} high
 */
const countInRange = (nums, num, low, high) => {
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (nums[i] === num) count++;
    }
    return count;
};

/**
 * 解法二：Boyer-Moore 投票法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function(nums) {
    let count = 0;
    let candidate = nums[0];

    for(let num of nums) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

export { majorityElement, majorityElement1 };
