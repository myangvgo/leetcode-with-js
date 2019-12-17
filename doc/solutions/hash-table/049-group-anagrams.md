# 49 字母异位词分组 group anagram

## 题目描述

<https://leetcode-cn.com/problems/group-anagrams>

## 题目解析

### 方法一：将排序后的字母作为分组的 key

```js
var groupAnagrams = function(strs) {
    // 解法一：排序数组分类
    if (!strs || !strs.length) return [];
    const ans = new Map();
    let key;
    for (let str of strs) {
        // 将排序后的字符串作为分组的 key
        key = str
            .split('')
            .sort()
            .join('');
        if (!ans.has(key)) ans.set(key, [str]);
        else ans.set(key, [...ans.get(key), str]);
    }
    return [...ans.values()];
};
```

时间复杂度：O(N * KlogK) N 为字符串数组的长度，K 为 最长字符串的长度
空间复杂度：O(N * K)

### 方法二：将26个字母映射到数组[0-25]中，通过统计对应位置的字母出现次数来确定字母异位词，同时作为分组的 key

```js
var groupAnagrams2 = function(strs) {
    // 字符串中的数字只有小写字母 用字符的出现次数来统计是否是异位词
    // 按照次数统计作为 key 来分组不同的异位词
    if (!strs || !strs.length) return [];
    const ans = new Map();
    let counter, key;
    for (let str of strs) {
        counter = Array(26).fill(0); // 申请一个大小为26的数组，统计每个字母映射后的下标元素出现次数
        for (let i = 0; i < str.length; i++)
            counter[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        key = counter.join('#'); // 构建异位词分组的 key
        if (!ans.has(key)) ans.set(key, [str]);
        else ans.set(key, [...ans.get(key), str]);
    }
    return [...ans.values()];
};
```

时间复杂度：O(N * K) N 为字符串数组的长度，K 为 最长字符串的长度
空间复杂度：O(N * K)
