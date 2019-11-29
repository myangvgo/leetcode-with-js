/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[maxIdx] < nums[i]) {
            maxIdx = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (maxIdx !== i && nums[maxIdx] < 2 * nums[i]) return -1;
    }
    return maxIdx;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndexV2 = nums => {
    if (nums.length <= 1) return 0;

    let maxIdx = 0,
        secondMaxIdx = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIdx]) {
            secondMaxIdx = maxIdx;
            maxIdx = i;
        } else if (nums[i] > nums[secondMaxIdx]) {
            secondMaxIdx = i;
        }
    }

    // 比较最大值和次大值
    return nums[maxIdx] > 2 * nums[secondMaxIdx] ? maxIdx : -1;
};

export { dominantIndex, dominantIndexV2 };
