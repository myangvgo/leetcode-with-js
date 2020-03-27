# LeetCode 914. 卡牌分组 (X Of A Kind In A Deck Of Cards)

[返回题解列表](../../../README.md)

## 题目描述

<https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/>

## 题目解析

根据题意，需要统计每张牌出现的次数，如果检测到某个组里元素只有 1 个，可以直接返回 false。
将整副牌分组，组内每张牌的数值相同，各组牌的张数相同。

由于每一组有 X 张牌，X 与卡牌总数 N 之间是约数的关系，最后问题就转化成了求每组卡牌张数最大公约数的问题，可以使用辗转相除法来求解

### 解法

```js
/**
 * LeetCode NO.914 - X Of A Kind In A Deck Of Cards (卡牌分组)
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length < 2) return false;
    // 统计卡牌出现的次数
    let dic = new Map();
    for (let card of deck) {
        dic.set(card, dic.has(card) ? dic.get(card) + 1 : 1);
    }
    let deckCountArr = [...dic.values()];
    // 求最大公约数
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    // 求每个牌出现张数的最大公约数
    let g = deckCountArr[0];
    // deckCountArr.forEach(n => (g = gcd(g, n)));
    // return g > 1;
    return deckCountArr.every(num => (g = gcd(g, num)) > 1);
};
```

时间复杂度：`O(N*logC)` N 是卡牌的总数，C 是数组 deck 中数值的范围，本题中为 10000；两个数最大公约数的复杂度是 O(logC)
空间复杂度：`O(N)` N 是卡牌的总数

[返回题解列表](../../../README.md)
