# 242 有效的字母异味词 valid anagram

## 题目描述

<https://leetcode-cn.com/problems/valid-anagram/>

## 题目解答

### 方法一：排序后比较

#### 思路

将两个字符串排好序后，比较是否相等

```js
var isAnagram3 = function(s, t) {
    const sortedS = s
        ? s
              .split('')
              .sort()
              .join('')
        : '';
    const sortedT = t
        ? t
              .split('')
              .sort()
              .join('')
        : '';
    return sortedS === sortedT;
};
```

时间复杂度为 O(NlogN) - 排序算法
空间复杂度为 O(N) - 需要额外存储排序后的字符串

### 方法二：使用数组计数器

#### 思路

因为字符串的数字只能是[A-Za-z]中的字母，所以只需要考虑这些字母的出现情况；可以考虑使用一个计数器。

如果字符串长度不等，那么肯定无效。如果字符串长度相等，那么遍历一次，其中一个字符串每个字符出现的时候次数加一，另一个字符串每个字符出现的时候次数减一。

检查最后的数组中元素是否有非零值。有的话则无效，否则是有效的。

```js
var isAnagram2 = function(s, t) {
    if (s.length !== t.length) return false;
    // 初始化一个大小为 （122 - 65 + 1）的数组，初始值为0
    // [A-Za-z] ASCII 码的值的区间
    const counter = Array(58).fill(0); // [A-Za-z][65-122]
    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 65]++;
        counter[t.charCodeAt(i) - 65]--;
    }
    for (let item of counter) {
        if (item !== 0) return false;
    }
    return true;
};
```

时间复杂度：一次循环，所以是 O(n)
空间复杂度：O(1) 使用常数存储空间


### 方法三：使用哈希表计数器

#### 思路

同思路二，采用 Map 实现

```js
var isAnagram = function(s, t) {
    // 解法一：使用哈希表计数器
    if (s.length !== t.length) return false;
    const hash = new Map();
    for (let i = 0; i < s.length; i++) {
        if (hash.has(s.charAt(i)))
            hash.set(s.charAt(i), hash.get(s.charAt(i)) + 1);
        else hash.set(s.charAt(i), 1);

        if (hash.has(t.charAt(i)))
            hash.set(t.charAt(i), hash.get(t.charAt(i)) - 1);
        else hash.set(t.charAt(i), -1);
    }
    for (let val of hash.values()) {
        if (val !== 0) return false;
    }
    return true;
};

```

时间复杂度：O(n)
空间复杂度：O(1)