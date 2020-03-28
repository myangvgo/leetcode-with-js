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

export { minimumLengthEncoding, minimumLengthEncoding2 };
