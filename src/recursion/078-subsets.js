/**
 * 思路：逐个枚举，让之前幂集中的每个集合，追加当前元素，就是新增的子集
 * 解法一：逐个枚举（迭代）
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]]; // 默认为空集
    for (let i = 0; i < nums.length; i++) {
        // 每次从 nums 中取出一个元素
        let len = result.length; // 记录当前集合中有多少个子集合
        // 遍历当前 result 集合中的每个子集合中，将该元素添加到子集合中
        for (let j = 0; j < len; j++) result.push([...result[j], nums[i]]);
    }
    return result;
};

/**
 * 解法二：逐个枚举（递归）
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets1 = function(nums) {
    let result = [[]]; // 默认为空集
    generate(nums, 0, result);
    return result;
};

/**
 * @param {number[]} nums
 * @param {number} i
 * @param {number[][]} res
 * @return {void}
 */
const generate = (nums, i, res) => {
    if (i === nums.length) return;
    let len = res.length;
    for (let j = 0; j < len; j++) res.push([...res[j], nums[i]]);
    generate(nums, i + 1, res);
};

export { subsets, subsets1 };
