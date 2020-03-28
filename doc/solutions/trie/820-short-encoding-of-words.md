# LeetCode 820. 单词的压缩编码 (Short Encoding Of Words)

[返回题解列表](../../../README.md)

## 题目描述

<https://leetcode-cn.com/problems/short-encoding-of-words/>

## 题目解析

示例里的"me"由于是"time"的后缀，所以 me 这个单词不用出现在最后的编码结果里，所以我们只要找到单词列表里，哪些单词被别的单词的后缀给包含了就可以了。

可以用字典树来实现，可以快速的判断某个字符串是否是单词的后缀或者前缀。

### 解法一

使用字典树插入的时候，这里是判断是否包含后缀；同时在插入单词的时候，需要先插入较长的单词，所以需要用到排序。

```js
/**
 * 使用 Trie 字典树（后缀树）
 * LeetCode NO.820 - Short Encoding Of Words (单词的压缩编码)
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let len = 0;
    let trie = new Trie();
    // 单词长度由长到短排序：先添加较长的单词
    words.sort((a, b) => b.length - a.length);
    words.forEach(word => (len += trie.insert(word)));
    return len;
};

class TrieNode {
    constructor() {
        this.val = null;
        this.children = [];
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    // 单词插入字典树，返回该单词增加的长度
    insert(word) {
        let cur = this.root;
        let isNew = false;
        // 从后往前遍历
        for (let i = word.length - 1; i >= 0; i--) {
            let c = word.charCodeAt(i) - 'i'.charCodeAt(0);
            if (cur.children[c] == undefined) {
                isNew = true;
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        return isNew ? word.length + 1 : 0;
    }
}
```

时间复杂度：`O(m * n)` n 是单词的平均长度：m 是单词数组的长度
空间复杂度：`O(m * n)` 字典树的空间开销

### 解法二

```js
/**
 * 使用 HashSet 去重
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding2 = function(words) {
    let wordSet = new Set(words); // 去重
    for (let word of wordSet) {
        for (let i = 1; i < word.length; i++) {
            let suffix = word.slice(i); // 对每个单词切片
            wordSet.has(suffix) && wordSet.delete(suffix);
        }
    }
    let len = 0;
    wordSet.forEach(word => (len += word.length + 1));
    return len;
};
```

时间复杂度：`O(m * n)` n 是单词的平均长度：m 是单词数组的长度
空间复杂度：`O(m)` m 是单词数组的长度

[返回题解列表](../../../README.md)
