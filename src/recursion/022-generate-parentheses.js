/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 使用递归
    const result = [];
    generate(0, 0, n, '', result);
    return result;
};

/**
 * @param {number} open
 * @param {number} close
 * @param {number} max
 * @param {string} cur
 * @param {string[]} ans
 * @return {void}
 */
const generate = (open, close, max, cur, ans) => {
    // recursion terminator
    if (cur.length === max * 2) {
        ans.push(cur);
        return;
    }
    // process current logic
    // drill down
    if (open < max) generate(open + 1, close, max, cur + '(', ans);
    if (close < open) generate(open, close + 1, max, cur + ')', ans);
};

export { generateParenthesis };
