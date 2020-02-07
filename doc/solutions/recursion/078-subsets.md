# 78 子集

## 题目描述

<https://leetcode-cn.com/problems/subsets/>

## 题目解析

### 思路

可以考虑将这个问题转化成有 N 个格子的问题，每个格子有选或者不选，最后可以生成多少种结果

相似的问题还有排列组合，都可以用回溯的方式来解决。

具体到本题，空集的子集是空集，然后生成子集的过程就是枚举已有元素，不停地向已有的子集集合中添加该元素。

```js
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
```

```js
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
```
