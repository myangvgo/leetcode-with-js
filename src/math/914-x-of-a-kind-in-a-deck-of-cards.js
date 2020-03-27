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

export { hasGroupsSizeX };
