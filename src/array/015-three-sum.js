/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [],
        size = nums.length;
    nums.sort((a, b) => a - b); // 升序排列

    for (let k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break; // 都为正数，无解
        if (k > 0 && nums[k] === nums[k - 1]) continue; // 去重：若当前值和前一个元素值相等，则略过
        let i = k + 1, // 左边界下标
            j = size - 1, // 右边界下标
            sum; // 三数之和
        while (i < j) {
            sum = nums[k] + nums[i] + nums[j]; // 每次计算新的 sum
            if (sum < 0) i++;
            // sum 偏小，i 右移
            else if (sum > 0) j--;
            // sum 偏大，j 左移
            else {
                res.push([nums[k], nums[i], nums[j]]); // 找到对应值
                while (i < j && nums[i] === nums[i + 1]) i++; // 去除重复的左边界值
                while (i < j && nums[j] === nums[j - 1]) j--; // 去除重复的右边界值
                i++; // 取下一个左边界下标
                j--; // 取下一个右边界下标
            }
        }
    }
    return res;
};

export { threeSum };
